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

Deployable product evidence is limited to the approved, privacy-masked crops in `public/product/evidence-safe/`. The former working screenshots were removed from `public/`; pages without approved evidence use an explicit demonstration placeholder.

## Form and publication gate

Calendly and WhatsApp are the default working contact paths. The form is rendered only when a tested `PUBLIC_DEMO_FORM_ENDPOINT` is configured. It POSTs JSON with `name`, `shop`, `city`, `email`, optional `phone`, and optional `need`; success appears only after an HTTP 2xx response.

Review builds use the reserved `https://optisolution.invalid` origin, emit `noindex`, and disallow crawling. A release build must set `PUBLIC_SITE_URL` to the final public origin. Indexing remains off unless `PUBLIC_INDEX_SITE=true` is also set; that flag fails the build when the public URL is missing. Before enabling it, confirm the legal controller and retention notice, approve the public media, add the social image, review commercial terms, and obtain explicit release approval.

AstroWind is MIT licensed; see `LICENSE.md` and the retained upstream documentation in `reference/ASTROWIND_README.md`.
