# OptiSolution marketing site

This is an AstroWind-based working site for the French B2B optical-shop landing page. The public homepage is available at `/`.

## Run locally

Use Node.js 22.22.3 or newer, then run `npm ci` and `npm run dev`. Build with `npm run build`; validate with `npm run check`.

## Open on the local network

Run `npm run dev:lan` to expose the development site on port 4321. Find this computer's LAN address with `hostname -I`, then open `http://LAN_IP:4321/` from another device connected to the same network.

For a production-build preview, run `npm run build` followed by `npm run preview:lan`. Keep the terminal process running while other devices use the site.

## Page and content

The site uses a multi-page product architecture. Dedicated routes explain the solution, workflow, capabilities, demo, implementation, calculator, resources, videos, and operational guides. The visual language, identity direction, color tokens, grid, and component states follow the v1 design-system blueprint.

See `DESIGN_SYSTEM.md` for visual rules and `WEBSITE_EXPANSION_V1.md` for the sitemap, homepage concepts, page decisions, mobile direction, future 3D locations, and required product assets.

The public site uses a clearly labeled synthetic dashboard at `public/product/synthetic/dashboard.png`. Legacy captures remain in the repository for internal reference, but public components must not link to them until they have publication approval.

## Form and publication gate

The form accepts a `PUBLIC_DEMO_FORM_ENDPOINT` environment variable. It POSTs JSON with `name`, `shop`, `city`, `email`, optional `phone`, and optional `need`. The success state appears only after an HTTP 2xx response. Without an endpoint, the form is hidden and the page shows the verified Calendly and WhatsApp routes.

Preview builds use `https://review.invalid`, emit `noindex`, omit the sitemap, and disallow crawling. Public indexing is enabled only when both `PUBLIC_SITE_URL=https://…` and `PUBLIC_ENABLE_INDEXING=true` are set. Before that release build, confirm the public domain, legal controller and retention notice, approved social image, and commercial terms. A form endpoint remains optional because Calendly and WhatsApp are the confirmed lead routes.

AstroWind is MIT licensed; see `LICENSE.md` and the retained upstream documentation in `reference/ASTROWIND_README.md`.
