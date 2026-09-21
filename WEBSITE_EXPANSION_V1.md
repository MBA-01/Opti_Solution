# Opti Solution website expansion — iteration 1

This document records the multi-page design iteration created from the website growth prompt. It complements `DESIGN_SYSTEM.md`, which remains the source for visual tokens and component behavior.

## Sitemap

| Route                            | Role in the website                                                                | Primary next action             |
| -------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------- |
| `/`                              | Focused commercial homepage                                                        | Request a demo                  |
| `/homes/saas`                    | Alias of the current homepage for continuity                                       | Request a demo                  |
| `/solution`                      | Explain the product, audience, operating context, and configuration model          | See the workflow                |
| `/fonctionnement`                | Teach the six-step client-to-payment workflow                                      | View a workflow demo            |
| `/fonctionnalites`               | Group validated capabilities around actual store work                              | Choose capabilities for a demo  |
| `/demo`                          | Product media system, private-demo process, and request form                       | Submit a demo request           |
| `/mise-en-place`                 | Explain diagnosis, configuration, deployment, training, support, and optional work | Discuss a project               |
| `/calculateur`                   | Interactive administrative-time diagnostic                                         | Explore the relevant capability |
| `/ressources`                    | Editorial library and entry point for guides, articles, and videos                 | Read a guide                    |
| `/ressources/videos`             | Video-library structure organized by validated product workflow                    | Request a guided demo           |
| `/ressources/preparer-migration` | Long-form guide for preparing a migration assessment                               | Discuss migration assessment    |
| `/ressources/[slug]/`            | Reusable article system for six operational guides and articles                    | Explore a related capability    |

The main navigation uses Solution, Fonctionnement, Fonctionnalités, Démo, Ressources, and Mise en place. The calculator sits under Resources to keep the primary navigation manageable. The demo action remains visually dominant.

## Homepage structure

The implemented homepage follows this sequence:

1. Product proposition and real interface proof.
2. Verified proof strip.
3. Problems the visitor can recognize from store operations.
4. Six-step workflow summary.
5. Three core capability groups with a link to the full page.
6. Opti Solution differentiation and claim boundaries.
7. Calculator teaser.
8. Managed implementation summary.
9. Demo preview.
10. Selected resources.
11. FAQ preview.
12. Final demo call to action.

This keeps technical and commercial detail available through links without making the homepage carry every explanation.

## Opening concepts

Three responsive alternatives are available for review:

| Concept                | Route                 | Initial-funnel strategy                                                                                                                                 |
| ---------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A · Promise then proof | `/concepts/accueil-a` | Leads with the relationship between the optical file and store work, then shows real UI and familiar problems. This is the current recommended default. |
| B · Product first      | `/concepts/accueil-b` | Leads with software credibility and moves directly into a product-proof chapter before the problem story.                                               |
| C · Workflow first     | `/concepts/accueil-c` | Leads with the six-step operating journey and then explains why linking the stages matters.                                                             |

All three preserve the same primary action and factual boundaries, so the review can focus on comprehension and commercial emphasis.

## Mobile direction

- The headline and one primary action appear before the product composition.
- Actions stack at full width below 768px.
- Proof facts become a short vertical list.
- The six-step workflow becomes a vertical path.
- Product groups and resources use one column with full-width media.
- Detailed screenshots remain zoomable through their source links.
- The navigation collapses to the existing AstroWind mobile menu and keeps a compact Demo action visible.
- Calculator inputs switch from a table-like row to labeled two-column numeric controls.
- Sticky desktop arrangements become normal document flow on tablet and mobile.

## Page and system decisions

### Solution

The solution page explains the product in four domains: customer file, optical file, commercial flow, and purchasing. It identifies store roles without presenting a large feature-card catalogue. It also explains that connected steps still require review.

### Workflow

The workflow page is the main product-education asset. Each of the six steps combines short copy, a real product screen, and the relevant control point. The supplier path remains conditional and separate from the sale.

### Capabilities

Capabilities are grouped into six work areas. Alternating editorial bands create rhythm and keep screenshots readable. Tasks use conservative verbs from the validated claim matrix.

### Demo

Reusable 16:9 media placeholders define the future video system. They include a poster, planned duration, category, description, and approval status. The page does not autoplay media or pretend the current recordings are approved.

### Resources and articles

Resource cards share type, category, reading time, title, and description. The reusable article system provides a narrower reading column, article metadata, screenshot placement, callouts, related capability, related content, and a demo call to action. Six published resources now cover catalogue structure, deployment choice, quotation follow-up, roles and access, Excel preparation, and supplier-order tracking. The migration guide remains a richer standalone reference.

### Calculator

The calculator uses visitor-provided weekly volumes and minutes per operation. It calculates current monthly time, distribution by operation, time per employee, and an explicitly editable improvement scenario. The result links to the capability with the largest estimated share. No saving is presented as guaranteed.

### Offer and implementation

The implementation page avoids artificial pricing tiers. It separates the existing product, initial setup, deployment choice, training, recurring services, migration assessment, and separately quoted development. Pricing components can be added after the commercial model is approved.

## Reusable component direction

| Component                   | Purpose                                                     |
| --------------------------- | ----------------------------------------------------------- |
| `MarketingLayout.astro`     | Shared navigation, footer, metadata shell, and site styling |
| `HomeOpening.astro`         | Three opening concepts using one factual content system     |
| `PageHero.astro`            | Consistent chapter introduction for deeper pages            |
| `SectionIntro.astro`        | Editorial section hierarchy                                 |
| `ScreenshotFrame.astro`     | Real product evidence with caption and optional zoom        |
| `VideoPlaceholder.astro`    | Video poster and metadata before approved media exists      |
| `TimeCalculator.astro`      | Reusable interactive diagnostic                             |
| `DemoRequest.astro`         | Accessible request form with endpoint-aware submission      |
| `FinalCTA.astro`            | One clear action at the end of each journey                 |
| `ResourceArticlePage.astro` | Shared long-form article layout and related-content path    |

Shared copy and product facts live in `src/data/optic-site.ts`. Published article content lives in `src/data/resource-articles.ts`, allowing additional resource routes to reuse the same structure.

## Future 3D locations

The current layouts reserve visual space for meaningful 3D assets without depending on them:

1. Homepage hero: replace or supplement the optical orbit behind the real interface with a calibrated lens object. The product screen remains dominant.
2. Solution hero: a transparent corrective lens can explain optical information moving toward store operations.
3. Workflow overview: connected lens nodes can follow the six-step path.
4. Products and stock band: a restrained frame or product-object composition can sit behind the real catalogue screenshot.
5. Deployment page: a structured local/server environment object can support the hosting explanation.
6. Calculator hero: a measured lens or calibrated scale can reinforce the diagnostic idea.
7. Demo hero: dimensional framing can add depth around genuine product media.

Avoid free-floating spheres, decorative glass blobs, or objects that obscure the interface.

## Product assets still required

### Highest priority

1. One coherent, fictional demonstration dataset in MAD.
2. Final approved hero capture showing a saved optical correction with safe data.
3. Continuous customer → correction → quotation sequence.
4. Continuous correction → supplier order → receipt sequence.
5. Continuous quotation → sale → invoice → payment-status sequence.
6. Product-owner approval record for every published frame and clip.

### Brand and media

7. Final vector-logo approval at 16px, 24px, 32px, and display sizes.
8. Self-hosted display and body font files if the selected fonts are licensed.
9. Social sharing image using the approved identity and a genuine product screen.
10. Video thumbnails, final durations, captions, transcripts, and poster frames.

### Commercial and operational

11. Approved commercial model and wording for setup and recurring services.
12. Confirmed legal entity, privacy controller, retention period, and privacy route.
13. Production demo-form endpoint, spam protection, and delivery test.
14. Confirmed public domain and analytics policy.

## Structural recommendations and reasons

1. **Keep the calculator under Resources.** It supports discovery and lead qualification without competing with core product navigation.
2. **Use Fonctionnement as the main education link.** The connected workflow is easier to understand than a long list of features.
3. **Keep Solution and Fonctionnalités separate.** Solution explains product fit and context; Fonctionnalités answers detailed capability questions.
4. **Keep pricing inside Mise en place until the commercial model is approved.** This avoids empty pricing tiers and keeps service boundaries visible.
5. **Treat video as a proof system.** Short, reviewed workflow demonstrations are more credible than a generic product montage.
6. **Publish resources selectively.** Each resource should answer a real operational question and connect to the product only when relevant.
7. **Retain `/homes/saas` as an alias during the draft stage.** Existing review links continue to work while `/` becomes the canonical information-architecture entry point.
8. **Keep the site `noindex` until release gates are complete.** Working screenshots, legal information, form delivery, domain, and commercial terms still require approval.
