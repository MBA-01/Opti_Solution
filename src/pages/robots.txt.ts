import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapUrl: URL, imageSitemapUrl: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
Sitemap: ${imageSitemapUrl.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site);
  const imageSitemapUrl = new URL('image-sitemap.xml', site);
  return new Response(getRobotsTxt(sitemapUrl, imageSitemapUrl), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
