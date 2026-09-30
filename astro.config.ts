import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';
import yaml from 'js-yaml';

import astrowind from './vendor/integration';
import type { Config } from './vendor/integration/utils/configBuilder';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const configuredSiteUrl = process.env.PUBLIC_SITE_URL?.trim();
const indexRequested = process.env.PUBLIC_INDEX_SITE?.trim().toLowerCase() === 'true';
const parsedSiteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

if (parsedSiteUrl && !['http:', 'https:'].includes(parsedSiteUrl.protocol)) {
  throw new Error('PUBLIC_SITE_URL must use HTTP or HTTPS.');
}
if (indexRequested && parsedSiteUrl?.protocol !== 'https:') {
  throw new Error('PUBLIC_INDEX_SITE=true requires a valid HTTPS PUBLIC_SITE_URL.');
}

const indexingEnabled = indexRequested && parsedSiteUrl?.protocol === 'https:';
const siteConfig = yaml.load(fs.readFileSync(path.join(__dirname, 'src/config.yaml'), 'utf8')) as Config;

siteConfig.site = {
  name: siteConfig.site?.name || 'OptiSolution',
  ...siteConfig.site,
  site: configuredSiteUrl || 'https://optisolution.invalid',
};
siteConfig.metadata = {
  ...siteConfig.metadata,
  robots: { index: indexingEnabled, follow: indexingEnabled },
};

const releaseRobots = (): AstroIntegration => ({
  name: 'optisolution-release-robots',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const sitemapLine = indexingEnabled ? `Sitemap: ${new URL('sitemap-index.xml', parsedSiteUrl!).href}\n` : '';
      fs.writeFileSync(
        new URL('robots.txt', dir),
        `User-agent: *\n${indexingEnabled ? 'Allow: /' : 'Disallow: /'}\n${sitemapLine}`
      );
    },
  },
});

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',

  // Prefetch links as they enter the viewport for snappier navigations
  // (works together with <ClientRouter />, which enables prefetch by default).
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  integrations: [
    ...(indexingEnabled ? [sitemap()] : []),
    mdx(),
    icon({
      // Local SVG icons (used as <Icon name="file-name" />) live next to the other assets.
      iconDir: 'src/assets/icons',
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      // csso off on purpose: its parser doesn't understand the media range
      // syntax Tailwind v4 emits for breakpoints (`@media (width>=48rem)`) and
      // silently drops every one of those blocks — the site then renders as if
      // all `md:`/`lg:` classes were missing. lightningcss parses it correctly.
      CSS: { csso: false, lightningcss: { minify: true } },
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({ config: siteConfig }),
    releaseRobots(),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    // Unsplash is listed so post covers can be rendered as real 1200×626 Open Graph images.
    domains: ['cdn.pixabay.com', 'images.unsplash.com'],

    // Emit responsive styles for the native <Image layout=…> used by
    // src/components/common/Image.astro (local images). Utility classes on
    // each usage still win, since these styles use low-specificity selectors.
    responsiveStyles: true,
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
    shikiConfig: {
      // Code blocks follow the site theme; see the `.astro-code` rules in tailwind.css.
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
