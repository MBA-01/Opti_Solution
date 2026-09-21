# Opti Solution marketing site

This is an AstroWind-based working site for the French B2B optical-shop landing page. The same landing page is available at `/` and `/homes/saas`.

## Run locally

Use Node.js 22.22.3 or newer, then run `npm ci` and `npm run dev`. Build with `npm run build`; validate with `npm run check`.

## Open on the local network

Run `npm run dev:lan` to expose the development site on port 4321. Find this computer's LAN address with `hostname -I`, then open `http://LAN_IP:4321/homes/saas` from another device connected to the same network.

For a production-build preview, run `npm run build` followed by `npm run preview:lan`. Keep the terminal process running while other devices use the site.

## Page and content

The site now uses a multi-page product architecture. `/` and `/homes/saas` share the focused conversion homepage; dedicated routes explain the solution, workflow, capabilities, demo, implementation, calculator, resources, videos, and operational guides. Copy and claim boundaries come from `../launch-package/` and the v3 conversion brief. The visual language, identity direction, color tokens, grid, and component states follow the v1 design-system blueprint.

See `DESIGN_SYSTEM.md` for visual rules and `WEBSITE_EXPANSION_V1.md` for the sitemap, homepage concepts, page decisions, mobile direction, future 3D locations, and required product assets.

The working Odoo screenshots in `public/working/` are compressed copies of `../launch-package/screenshots/working/`. They are for local composition review only. Product-owner acceptance and final clean captures are needed before publication.

## Form and publication gate

The form accepts a `PUBLIC_DEMO_FORM_ENDPOINT` environment variable. It POSTs JSON with `name`, `shop`, `city`, `email`, optional `phone`, and optional `need`. The success state appears only after an HTTP 2xx response. Without an endpoint, the page directs visitors to the sourced email and WhatsApp contact links.

The preview is `noindex` and `robots.txt` disallows crawling. The site URL is set to localhost and sitemap output is off. Before public release, confirm the legal controller and retention notice, configure and test a real lead delivery endpoint with spam protection, approve screenshots, set the real domain and social image, review commercial terms, then restore sitemap output and indexing.

AstroWind is MIT licensed; see `LICENSE.md` and the retained upstream documentation in `reference/ASTROWIND_README.md`.
