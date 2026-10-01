# Opti Solution website design system

This file records how `OptiSolution_Website_Design_System_Blueprint_v1.docx` is implemented in the AstroWind site. The guiding direction is **editorial calm, optical precision, and software credibility**.

## Brand identity

- Business name: **Opti Solution**.
- Mark: a code-native SVG based on selected Direction 05. The central optical ring represents vision, the surrounding nodes represent connected operational areas, and the gold node provides a restrained accent.
- Wordmark: `Opti` uses the display face and heavier weight; `Solution` uses the same face at a regular weight.
- The SVG remains sharp at interface and favicon sizes and inherits the surrounding text color when an inverse treatment is needed.

Implementation:

- `src/components/brand/LogoMark.astro`
- `src/components/Logo.astro`
- `src/assets/favicons/favicon.svg`

## Color tokens

| Token      | Value     | Use                                    |
| ---------- | --------- | -------------------------------------- |
| Forest 900 | `#0B2E26` | Dark chapters, footer, deep emphasis   |
| Forest 800 | `#0F3D32` | Brand color, primary actions, headings |
| Forest 700 | `#185447` | Hover and secondary forest treatment   |
| Forest 100 | `#E6EFEA` | Soft supporting surfaces               |
| Cream 50   | `#F8F5ED` | Page background                        |
| Surface    | `#FFFFFF` | Cards and product frames               |
| Ink 900    | `#1F1F1F` | Main text                              |
| Ink 600    | `#5E5E5A` | Supporting text                        |
| Gold 400   | `#C9A96B` | Decorative accents                     |
| Gold 700   | `#806735` | Accessible gold text                   |
| Line       | `#D9D7CF` | Borders and dividers                   |

The source of truth is `src/components/CustomStyles.astro`. AstroWind's theme variables are mapped to these tokens so its Header, Hero, FAQ, Button, and Footer components share the same palette.

## Elevation, motion, and feedback

- Elevation uses the [Depths soft preset](https://www.depths.studio/) with semantic raised, hover, sticky, dropdown, modal, toast, and pressed levels. Hairline edge tokens carry separation where a shadow alone is too subtle.
- Motion uses the [Springs semantic set](https://www.springs.studio/): 140ms for state changes, 200ms for lists and dropdowns, and 280ms for emphasized entrances. Mobile scroll entrances use a calmer 420ms duration. Exits use the mirrored curve and finish at 70% of the entrance duration.
- Group entrances stagger with the Springs falloff formula instead of a fixed linear delay, using a 40ms desktop step and a 55ms mobile step. Every motion treatment has a `prefers-reduced-motion` fallback.
- Product-preview sound follows the [Beeps warm preset](https://www.beeps.studio/) and is muted by default. It runs only after an explicit opt-in, persists that preference locally, and never plays on load, hover, focus, scroll, or navigation.

## Typography

- Display: Instrument Serif or a licensed equivalent. The current build uses Georgia and Times New Roman as local fallbacks, avoiding a remote font request.
- Interface and body: Inter or a neutral system sans serif. The current build uses the system font stack.
- Headings use restrained line lengths and tighter tracking. Body copy remains at least 16px with comfortable leading.

A production font can be self-hosted after its license and final files are approved. The fallback metrics should be checked again when that happens.

## Layout and spacing

- Desktop: 12-column logic within a 1200px maximum content width.
- Tablet: 8-column logic.
- Mobile: 4-column logic.
- Base spacing unit: 8px.
- Primary responsive changes occur at 1023px and 767px, with a compact pass at 390px.
- Sections use generous vertical space, asymmetric compositions, and recurring circular optical geometry.

## Components and page structure

The focused homepage is available at `/` and `/homes/saas`. It introduces the proposition, real product evidence, store problems, the connected workflow, core capabilities, calculator, implementation, selected resources, FAQ, and demo action. Detailed explanations live on dedicated Solution, Fonctionnement, Fonctionnalités, Démo, Mise en place, Calculateur, and Ressources routes.

`WEBSITE_EXPANSION_V1.md` records the sitemap, page responsibilities, three homepage opening concepts, mobile direction, and remaining production assets.

Reusable additions:

- `src/components/brand/OpticalStill.astro`: responsive lens and glasses illustration.
- `src/components/ui/ScreenshotFrame.astro`: consistent 16:9 product frame with caption and optional zoom link.
- `src/components/ui/Button.astro`: 48px minimum target with focus, pressed, and disabled states.
- `src/layouts/MarketingLayout.astro`: shared site navigation and footer.
- `src/components/site/TimeCalculator.astro`: interactive administrative-time diagnostic.
- `src/components/site/DemoRequest.astro`: accessible demo request form.
- `src/components/site/VideoPlaceholder.astro`: reusable media frame for future reviewed videos.

## Interaction and accessibility

- All primary controls are at least 44px high; primary buttons are 48px.
- Keyboard focus is visible on links, buttons, summaries, and fields.
- The page begins with a skip link and contains one main heading.
- Form errors appear inline, remain linked with `aria-describedby`, and set `aria-invalid`.
- FAQ content uses native disclosure controls.
- Page links use browser-native navigation so in-site page changes are recorded as normal entries for browser and phone Back actions.
- The active navigation item is updated as sections enter the viewport.
- The mobile demo action appears after the hero and yields near the contact section or while a field has focus.
- Motion is restrained and disabled when `prefers-reduced-motion: reduce` is active.

## Product evidence and performance

- Current product images are compressed WebP files in `public/working/`.
- The visible hero screenshot is about 20KB; the supporting screenshots are about 44–80KB each.
- Below-fold images are lazy loaded and include fixed dimensions to limit layout shift.
- Decorative artwork is inline SVG to avoid extra image requests.
- Working screenshots remain marked as awaiting product-owner approval. Replace them with final clean captures before indexing.

## Content rules

- Product claims come from the conversion brief and verified project material.
- The page does not invent customer logos, testimonials, performance numbers, or commercial promises.
- Conditional services such as hosting, migration, training, and support are described as items to scope in the proposal.
- The primary conversion is a demo request. A success state appears only after a configured endpoint returns a successful response.

## Release gates

Before publishing:

1. Approve the vector mark and wordmark at 16px, 24px, 32px, and large display sizes.
2. Approve clean product screenshots and remove the working-media labels.
3. Configure and test `PUBLIC_DEMO_FORM_ENDPOINT`, spam protection, privacy wording, and retention handling.
4. Confirm the legal entity, privacy route, commercial terms, real domain, and social preview image.
5. Recheck contrast and font metrics if production font files are introduced.
6. Remove `noindex`, allow crawling in `robots.txt`, and restore the sitemap only after the preceding gates pass.
