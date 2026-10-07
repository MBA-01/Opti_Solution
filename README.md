# Opti Solution marketing site

This is an AstroWind-based working site for the French B2B optical-shop landing page. The same landing page is available at `/` and `/homes/saas`.

## Run locally

Use Node.js 22.22.3 or newer, then run `npm ci` and `npm run dev`. Build with `npm run build`; validate with `npm run check`.

Run `npm run audit:site` for a production build followed by the local SEO crawl. The audit fails on broken internal links or anchors, orphan indexable pages, missing canonicals or descriptions, duplicate main content, missing image alternative text, absent sitemap files, and indexable pages with fewer than 200 words.

## Open on the local network

Run `npm run dev:lan` to expose the development site on port 4321. Find this computer's LAN address with `hostname -I`, then open `http://LAN_IP:4321/homes/saas` from another device connected to the same network.

For a production-build preview, run `npm run build` followed by `npm run preview:lan`. Keep the terminal process running while other devices use the site.

## Page and content

The site now uses a multi-page product architecture. `/` and `/homes/saas` share the focused conversion homepage; dedicated routes explain the solution, workflow, capabilities, demo, implementation, calculator, resources, videos, and operational guides. Copy and claim boundaries come from `../launch-package/` and the v3 conversion brief. The visual language, identity direction, color tokens, grid, and component states follow the v1 design-system blueprint.

See `DESIGN_SYSTEM.md` for visual rules and `WEBSITE_EXPANSION_V1.md` for the sitemap, homepage concepts, page decisions, mobile direction, future 3D locations, and required product assets.

The working Odoo screenshots in `public/working/` are compressed copies of `../launch-package/screenshots/working/`. They are for local composition review only. Product-owner acceptance and final clean captures are needed before publication.

## Form and publication gate

The form accepts a `PUBLIC_DEMO_FORM_ENDPOINT` environment variable. It POSTs JSON with `name`, `shop`, `city`, `email`, optional `phone`, and optional `need`. After an HTTP 2xx response, it records the GA4 `generate_lead` event when consented and redirects to `/merci`. Without an endpoint, the page directs visitors to the sourced email and WhatsApp contact links.

Set `PUBLIC_SITE_URL` to the canonical production domain. The fallback points to the public `opti-solution.vercel.app` deployment; production builds generate `robots.txt`, `sitemap-index.xml`, an image sitemap, and a filtered page sitemap that excludes utility and concept routes.

Search-engine verification tokens can be supplied with `PUBLIC_GOOGLE_SITE_VERIFICATION_ID` and `PUBLIC_BING_SITE_VERIFICATION_ID`. Official LinkedIn and Facebook company-page URLs can be supplied with `PUBLIC_LINKEDIN_URL` and `PUBLIC_FACEBOOK_URL`; configured profiles appear in the footer and Organization structured data. See `docs/seo-launch-checklist.md` for the account-level work that cannot be completed in source code.

Google Analytics remains disabled until `PUBLIC_GOOGLE_ANALYTICS_ID` contains a GA4 measurement ID. When enabled, the site uses basic consent mode: the Google tag is not requested until the visitor accepts measurement. CTA clicks and successful demo requests are then measured without sending form-field values.

Vercel Web Analytics is included once in the shared `src/layouts/Layout.astro` layout using `@vercel/analytics/astro`. It measures page views independently of the optional Google Analytics integration; no form-field values or custom events are sent by this integration. Enable **Web Analytics** for the existing `opti-solution` project in Vercel, deploy, and visit several production pages. Check the Analytics dashboard after at least 30 seconds. If no visits appear, check browser content blockers and the analytics script/page-view network requests. The privacy page describes both services. See [Vercel’s Astro setup instructions](https://vercel.com/docs/analytics/quickstart).

Organization structured data is emitted on the homepage. Add the complete `PUBLIC_BUSINESS_STREET`, `PUBLIC_BUSINESS_CITY`, and `PUBLIC_BUSINESS_POSTAL_CODE` values to activate the more specific `ProfessionalService`/LocalBusiness schema; no address is inferred or fabricated.

Before public release, confirm the legal controller and retention notice, configure and test the lead endpoint with spam protection, approve screenshots, replace the Vercel URL with the final domain, validate the social image and structured data, and review the response-time commitment.

AstroWind is MIT licensed; see `LICENSE.md` and the retained upstream documentation in `reference/ASTROWIND_README.md`.
