import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative, sep } from 'node:path';

const projectRoot = process.cwd();
const distRoot = join(projectRoot, 'dist');
const productionOrigin = (process.env.PUBLIC_SITE_URL || 'https://example.com').replace(/\/$/, '');
const errors = [];
const warnings = [];

if (!existsSync(distRoot)) {
  console.error('dist/ is absent. Run npm run build before npm run audit:seo.');
  process.exit(1);
}

const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });

const decodeEntities = (value) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replaceAll('&nbsp;', ' ')
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");

const stripMarkup = (html) =>
  decodeEntities(
    html
      .replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
  ).trim();

const countWords = (value) => value.match(/[\p{L}\p{N}][\p{L}\p{N}'’.-]*/gu)?.length || 0;

const extractAttribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return match?.[2];
};

const routeFromFile = (file) => {
  const local = relative(distRoot, file).split(sep).join('/');
  if (local === 'index.html') return '/';
  if (local.endsWith('/index.html')) return `/${local.slice(0, -'/index.html'.length)}`;
  return `/${local.replace(/\.html$/, '')}`;
};

const normalizePath = (pathname) => {
  if (pathname === '/') return '/';
  return pathname.replace(/\/$/, '');
};

const pages = walk(distRoot)
  .filter((file) => file.endsWith('.html'))
  .map((file) => {
    const html = readFileSync(file, 'utf8');
    const route = routeFromFile(file);
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
    const text = stripMarkup(main);
    const wordCount = countWords(text);
    const paragraphTexts = [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((match) => stripMarkup(match[1]))
      .filter(Boolean);
    const paragraphWordCounts = paragraphTexts.map(countWords);
    const sentenceWordCounts = paragraphTexts.flatMap((paragraph) =>
      paragraph
        .split(/[.!?…]+(?:\s|$)/u)
        .map((sentence) => countWords(sentence))
        .filter(Boolean)
    );
    const longestParagraph = Math.max(0, ...paragraphWordCounts);
    const longestSentence = Math.max(0, ...sentenceWordCounts);
    const noindex = /<meta\b[^>]*content=["'][^"']*noindex/i.test(html);
    const redirect = /http-equiv=["']refresh["']/i.test(html);
    const canonicalTags = [...html.matchAll(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi)];
    const title = stripMarkup(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
    const descriptionTag = [...html.matchAll(/<meta\b[^>]*>/gi)].find(
      ([tag]) => extractAttribute(tag, 'name')?.toLowerCase() === 'description'
    );
    const description = descriptionTag ? extractAttribute(descriptionTag[0], 'content') || '' : '';
    return {
      file,
      route,
      html,
      main,
      text,
      wordCount,
      longestParagraph,
      longestSentence,
      noindex,
      redirect,
      canonicalTags,
      title,
      description,
    };
  });

const pageByRoute = new Map(pages.map((page) => [normalizePath(page.route), page]));
const publicPages = pages.filter(
  ({ route, noindex, redirect }) => !noindex && !redirect && route !== '/404' && !route.startsWith('/concepts/')
);
const incoming = new Map(publicPages.map(({ route }) => [normalizePath(route), new Set()]));

for (const page of pages) {
  if (!page.redirect && page.canonicalTags.length !== 1) {
    errors.push(`${page.route}: expected one canonical tag, found ${page.canonicalTags.length}`);
  }
  if (!page.redirect && !page.title) errors.push(`${page.route}: missing title`);
  if (!page.redirect && !page.description) errors.push(`${page.route}: missing meta description`);

  if (!page.noindex && !page.redirect && page.route !== '/404') {
    if (page.wordCount < 200) errors.push(`${page.route}: ${page.wordCount} words in <main> (minimum 200)`);
    if (page.longestParagraph > 120)
      errors.push(`${page.route}: paragraph of ${page.longestParagraph} words (readability maximum 120)`);
    if (page.longestSentence > 45)
      errors.push(`${page.route}: sentence of ${page.longestSentence} words (readability maximum 45)`);
    const h1Count = [...page.main.matchAll(/<h1\b/gi)].length;
    if (h1Count !== 1) errors.push(`${page.route}: expected one H1 in <main>, found ${h1Count}`);
  }

  for (const [tag] of page.html.matchAll(/<img\b[^>]*>/gi)) {
    if (typeof extractAttribute(tag, 'alt') === 'undefined') errors.push(`${page.route}: image missing alt attribute`);
  }

  for (const [tag] of page.html.matchAll(/<a\b[^>]*href\s*=\s*(["'])(.*?)\1[^>]*>/gi)) {
    const href = extractAttribute(tag, 'href');
    if (!href || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    let url;
    try {
      url = new URL(href, `${productionOrigin}${page.route}`);
    } catch {
      errors.push(`${page.route}: invalid href ${href}`);
      continue;
    }
    if (url.origin !== productionOrigin) continue;
    const targetPath = normalizePath(url.pathname);
    const extension = extname(targetPath);
    if (extension && extension !== '.html') {
      const assetPath = join(distRoot, targetPath.replace(/^\//, ''));
      if (!existsSync(assetPath)) errors.push(`${page.route}: missing linked asset ${url.pathname}`);
      continue;
    }
    const target = pageByRoute.get(targetPath);
    if (!target) {
      errors.push(`${page.route}: broken internal link ${href}`);
      continue;
    }
    if (url.hash) {
      const id = decodeURIComponent(url.hash.slice(1));
      const hasAnchor = target.html.includes(`id="${id}"`) || target.html.includes(`id='${id}'`);
      if (!hasAnchor) errors.push(`${page.route}: missing anchor ${href}`);
    }
    if (
      incoming.has(targetPath) &&
      publicPages.some(({ route }) => normalizePath(route) === normalizePath(page.route))
    ) {
      incoming.get(targetPath).add(normalizePath(page.route));
    }
  }
}

for (const [route, sources] of incoming) {
  if (route !== '/' && sources.size === 0) errors.push(`${route}: orphan indexable page`);
}

const duplicateBuckets = new Map();
for (const page of publicPages) {
  const normalizedText = page.text.toLocaleLowerCase('fr').replace(/\s+/g, ' ').trim();
  const hash = createHash('sha256').update(normalizedText).digest('hex');
  duplicateBuckets.set(hash, [...(duplicateBuckets.get(hash) || []), page.route]);
}
for (const routes of duplicateBuckets.values()) {
  if (routes.length > 1) errors.push(`duplicate main content: ${routes.join(', ')}`);
}

const uniqueFieldCheck = (field, label) => {
  const values = new Map();
  for (const page of publicPages) {
    const value = page[field];
    if (!value) continue;
    values.set(value, [...(values.get(value) || []), page.route]);
  }
  for (const routes of values.values()) {
    if (routes.length > 1) warnings.push(`duplicate ${label}: ${routes.join(', ')}`);
  }
};
uniqueFieldCheck('title', 'title');
uniqueFieldCheck('description', 'meta description');

for (const required of ['sitemap-index.xml', 'sitemap-0.xml', 'image-sitemap.xml', 'robots.txt']) {
  if (!existsSync(join(distRoot, required))) errors.push(`missing ${required}`);
}

const robots = existsSync(join(distRoot, 'robots.txt')) ? readFileSync(join(distRoot, 'robots.txt'), 'utf8') : '';
if (!robots.includes('sitemap-index.xml')) errors.push('robots.txt does not reference sitemap-index.xml');
if (!robots.includes('image-sitemap.xml')) errors.push('robots.txt does not reference image-sitemap.xml');

console.log(`SEO audit: ${publicPages.length} indexable pages, ${pages.length} HTML outputs.`);
console.log(`Word counts: ${publicPages.map(({ route, wordCount }) => `${route}=${wordCount}`).join(', ')}`);
console.log(
  `Readability maxima: paragraph=${Math.max(...publicPages.map(({ longestParagraph }) => longestParagraph))} words, sentence=${Math.max(...publicPages.map(({ longestSentence }) => longestSentence))} words.`
);
for (const warning of warnings) console.warn(`WARN ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);

if (errors.length) {
  console.error(`SEO audit failed with ${errors.length} error(s).`);
  process.exit(1);
}

console.log(
  'SEO audit passed: canonicals, metadata, word counts, readability, internal links, anchors, orphan pages, image alts, and sitemaps.'
);
