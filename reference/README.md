# AstroWind page structure retained for later use

The live Opti Solution site uses the AstroWind SaaS layout at `/homes/saas/`; `/` renders the same page. Original sample routes were moved here so generic AstroWind pages, prices and contact details cannot appear on the site.

## SaaS page structure extracted

The upstream SaaS page combines `Header → Hero2 → Bento → Integrations → Content sections → Pricing → FAQs → Contact → BlogLatestPosts → Footer`. The Opti Solution page keeps the AstroWind shell and the same visual rhythm, then maps the content to the approved working brief:

`Header → Hero2 → problem recognition → six-step workflow → real Odoo proof → capabilities → scoped setup → demo poster → FAQs → demo request → Footer`.

The integration-logo and pricing patterns are omitted because the brief does not establish product integrations, packages, or public prices. The blog teaser is deferred for the initial conversion page.

| AstroWind pattern                  | Original location here                          | Suitable Opti Solution use                                                |
| ---------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------- |
| SaaS `Hero2` and bento arrangement | `src/pages/homes/saas.astro` (adapted)          | Main conversion page with real Odoo captures and one demo CTA             |
| `landing/product`                  | `astrowind-pages/landing/product.astro`         | A later in-depth product page, after approved screenshots and scope       |
| `landing/lead-generation`          | `astrowind-pages/landing/lead-generation.astro` | A focused campaign page tied to the same demo request                     |
| `landing/sales`                    | `astrowind-pages/landing/sales.astro`           | A detailed workflow explainer, if a second page is needed                 |
| `services`                         | `astrowind-pages/services.astro`                | Implementation and support explanation once commercial terms are approved |
| `contact`                          | `astrowind-pages/contact.astro`                 | A dedicated contact route if the anchored form becomes insufficient       |
| `about`                            | `astrowind-pages/about.astro`                   | Company page after public identity is verified                            |
| `pricing`                          | `astrowind-pages/pricing.astro`                 | Hold until a founder-approved pricing model exists                        |
| Blog templates                     | `astrowind-pages/blog/`                         | Optional educational content after V1                                     |

Do not reinstate the sample copy, rates, customer claims, images, or legal text. The applicable content and claim boundaries are in `../../launch-package/`. AstroWind source: https://github.com/arthelokyo/astrowind (MIT; see `../LICENSE.md`).
