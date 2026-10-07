# Opti Solution — content and prospect-flow handoff for video scripting

Status: source capture from the working website  
Captured: 22 September 2026  
Website language: French  
Intended use: give this file and `video-content-manifest.json` to a video-script agent before it proposes scenarios, narration, storyboards, or shot lists.

## 1. What the video system must accomplish

The website does not sell through a long feature list. It guides an optical-store prospect through a controlled sequence:

1. Recognize the operational problem: information becomes fragmented across tools and repeated entry.
2. Understand the product promise: the customer file and optical information stay connected to store operations.
3. See proof in the actual product interface.
4. Understand the six-step operating flow and the checks between steps.
5. Explore the relevant work area rather than every feature at once.
6. Understand that setup is scoped to the store's organization, data, roles, and deployment context.
7. Request a demonstration focused on the prospect's priorities.

Videos should perform the same job faster and more visibly. They should show one question, operation, or flow at a time, then lead naturally to a tailored demo.

## 2. Product truth in one paragraph

Opti Solution is an Odoo Community-based management environment for optical stores. It brings customer information, optical corrections, commercial documents, supplier purchasing, product/stock information, invoicing, and payment status into a connected working context. The system helps the team retrieve information, prepare the next operation, and keep each validation explicit. It does not replace human control: documents, quantities, references, prices, taxes, and decisions must still be reviewed before confirmation.

## 3. Core positioning

### Primary promise

“Moins d'informations dispersées. Plus de contrôle sur votre magasin.”

Supporting explanation:

“Opti Solution relie la fiche optique aux opérations du magasin pour aider votre équipe à retrouver l'information, préparer la suite et garder chaque étape sous contrôle.”

### Alternative approved framings

- Product-first: “Votre fiche optique, reliée au reste du magasin.”
- Workflow-first: “De la fiche client au règlement, gardez le fil.”
- Solution page: “Reliez la fiche optique aux opérations de votre magasin.”
- Workflow page: “Suivez la fiche, du premier échange au règlement.”
- Demo page: “Voyez Opti Solution à partir de votre façon de travailler.”

### Differentiators used by the site

- A real Odoo base enriched for the work of an optical store.
- Optical context stays visible: OD/OG corrections, lens references, and the optical file stay close to the related operations.
- The team keeps control: documents are reviewed before validation, ordering, invoicing, or recording a payment.
- Setup begins with the store: modules, data, hosting, training, and support are defined within an agreed scope.
- The product is the proof: interfaces and prepared demonstration data are shown instead of unsupported promises.

### Desired perception

- Calm, credible, precise, operational, and transparent.
- “This understands an optical store's work,” not “generic software with an optical skin.”
- “Connected but controlled,” not “everything is automatic.”
- “Configured around my organization,” not “one rigid package for every store.”

## 4. Audience and roles

### Primary audience

Owners, managers, and operational decision-makers in optical stores who want to structure customer files, optical information, sales, purchases, stock, invoicing, and follow-up.

### Roles represented in the product story

| Role               | Job in the story                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------ |
| Sales              | Find the customer, prepare a quotation, and follow commercial documents through payment.   |
| Optometry          | Enter measurements and lens characteristics, then review the correction before validation. |
| Purchasing & stock | Prepare requests for quotation, follow purchase orders, receipts, and product references.  |
| Manager            | Keep visibility over documents, exceptions, and the access each role needs.                |

### Prospect questions the content answers

- Can the system keep the customer and optical context together?
- What happens from the first customer exchange to payment?
- Can sales, optometry, purchasing, stock, and invoicing work in one environment without confusing their responsibilities?
- What does the team still need to verify?
- Can it be deployed locally or in a hosted environment?
- Can existing data be evaluated for migration?
- What is included, optional, recurring, or separately quoted?
- Can I see only the operations relevant to my store in a demo?

## 5. The problem story

Use these as recognizable operational tensions, not as exaggerated pain claims.

1. **The file becomes fragmented.** Contact details, the correction, and commercial documents end up in different tools.
2. **The same information is repeated.** Every re-entry consumes time and creates another control point.
3. **Purchases lose their context.** It becomes difficult to connect a request for quotation, a purchase order, and its receipt to the right need.
4. **Follow-up relies on memory.** Products, stock, invoices, and payments must be searched for instead of followed through their path.

Approved summary line:

> Quand la fiche se disperse, l'équipe passe d'un outil à l'autre pour reconstituer le parcours.

## 6. The six-step operating flow

This is the central education asset and the preferred backbone for an overview video.

| Step | Title               | Job to show                                                                                 | Control point                                                                                 | Current visual                                                                                                          |
| ---- | ------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 01   | Client              | Create or open the customer record and retrieve contact details and useful context.         | Confirm the correct record and avoid accidental duplicates.                                   | `public/working/01-client-record.webp`                                                                                  |
| 02   | Correction optique  | Enter distance, near, or contact-lens values and relevant lens characteristics.             | Review OD/OG values and the correction before validation.                                     | `public/working/05-prescription-review.webp`                                                                            |
| 03   | Devis               | Add products, quantities, prices, discounts, and taxes to prepare a clear proposal.         | Re-read the complete quotation before confirmation.                                           | Current working image is an optical-correction screen; a continuous quotation capture is still required.                |
| 04   | Fournisseur         | If needed, prepare an RFQ, confirm a purchase order, and follow receipt.                    | Check supplier, references, quantities, amounts, and whether purchasing is actually required. | `public/working/06-supplier-rfq.webp`, then `07-purchase-reception.webp`                                                |
| 05   | Vente & livraison   | Confirm the sale and record delivery when the chosen stock flow requires it.                | Keep the sale and supplier purchase as distinct operations.                                   | A continuous quotation → sale → delivery capture is still required.                                                     |
| 06   | Facture & règlement | Create the invoice, review its amounts, and consult payment status in the same environment. | Confirm totals and distinguish an invoice from its eventual payment.                          | `public/working/08-supplier-bill.webp` is a supplier bill; a customer invoice/payment-status capture is still required. |

### Important logic

- The supplier path is conditional. It appears only when the need requires purchasing.
- A sale and a supplier purchase remain separate documents with separate controls.
- A validated correction may help prepare draft sales or purchase lines depending on configuration. The result is still reviewed before confirmation.
- If information is uncertain, the document can remain in draft rather than being prematurely confirmed.

### Three recurring checks before commitment

1. **The right context:** customer or supplier, relevant products, and related correction when applicable.
2. **The right amounts:** quantities, prices, discounts, taxes, and total.
3. **The right next step:** confirm only when the information is ready; otherwise keep the document in draft.

## 7. Capability inventory

### Clients & optometry

Purpose: keep the customer record and optical information available to the team through clear entry, review, and validation stages.

Tasks:

- Create and find a customer record.
- Enter OD/OG corrections.
- Enter types, materials, and treatments.
- Validate a correction after review.

### Sales & quotations

Purpose: move from the expressed need to a structured quotation, then follow the sale and delivery without losing file context.

Tasks:

- Prepare a quotation.
- Add products and quantities.
- Review prices, discounts, and taxes.
- Follow the sale and delivery.

### Products & stock

Purpose: find product records, brands, references, and useful quantities while preparing a sale or purchase.

Tasks:

- Structure product references.
- Find brands and categories.
- Consult quantities.
- Follow relevant stock movements.

### Suppliers & purchasing

Purpose: maintain continuity between RFQ, purchase order, and receipt, with a check before every confirmation.

Tasks:

- Manage supplier records.
- Create a request for quotation.
- Confirm a purchase order.
- Record receipt.

### Invoicing & payments

Purpose: find customer and supplier invoices, review amounts, and consult payment status.

Tasks:

- Create an invoice from the source document.
- Review amounts.
- Record a payment.
- Follow payment statuses.

### Configuration & management

Purpose: give each role the useful access and prepare the optical reference data selected for the store's operation.

Tasks:

- Define access by role.
- Prepare optical reference data.
- Configure brands and categories.
- Test flows before launch.

## 8. Setup and commercial scope

### Six implementation stages

1. **Diagnostic:** understand the organization, data, and priority flows.
2. **Configuration:** prepare included modules, reference data, roles, and settings.
3. **Deployment:** install the agreed local or hosted environment.
4. **Training:** help the relevant users learn the selected flows.
5. **Go-live:** open the solution after checking data, access, and documents.
6. **Support & evolution:** provide the agreed support framework and evaluate additional needs separately.

### Scope categories

| Element               | Approved description                                                         | Status language            |
| --------------------- | ---------------------------------------------------------------------------- | -------------------------- |
| Opti Solution base    | Odoo Community solution and existing optical modules selected for the scope. | Solution                   |
| Initial configuration | Reference data, modules, roles, and settings defined in the proposal.        | Setup                      |
| Deployment            | VPS/cloud or local option studied according to environment and budget.       | To be defined              |
| Training              | Content and users specified according to selected flows.                     | To be defined              |
| Support               | Terms, duration, and conditions stated in the quote.                         | Possible recurring service |
| Data migration        | Sources and quality assessed before confirming a migration.                  | Assessed option            |
| Custom development    | Analyzed and quoted separately when the need exceeds configuration.          | By quotation               |

### Information requested from a prospect

- Organization: roles, number of users, and confirmation responsibilities.
- Data: customer, product, supplier, and reference-data files to examine.
- Priorities: flows to open first and points that may need adaptation.

## 9. Website prospect journey

### Global navigation

`Solution → Fonctionnement → Fonctionnalités → Démo → Ressources → Mise en place`

The calculator sits under Resources. “Demander une démo” remains the dominant header action.

### Homepage sequence

1. Primary promise + real product composition.
2. Proof strip: real product screens, optical context, and a defined scope.
3. Four recognizable operational problems.
4. Six-step workflow summary.
5. Preview of three capability groups.
6. Differentiation and control boundaries.
7. Administrative-time calculator teaser.
8. Managed setup summary.
9. Demo/video preview with product evidence.
10. Selected educational resources.
11. FAQ preview.
12. Final demo CTA and WhatsApp alternative.

### Route-by-route job and next action

| Route                | Job in the journey                                                                     | Primary next action                      |
| -------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------- |
| `/`                  | Commercial overview: promise, problem recognition, flow, proof, setup, and trust.      | Request a demo.                          |
| `/solution`          | Explain product fit, operating context, roles, and the connected-but-controlled model. | See the workflow.                        |
| `/fonctionnement`    | Teach the six-step customer-to-payment flow.                                           | View a workflow demo.                    |
| `/fonctionnalites`   | Let the prospect inspect six work areas and concrete tasks.                            | Choose features for a demo.              |
| `/demo`              | Show available demo sequences and explain how a tailored demo works.                   | Submit a request.                        |
| `/mise-en-place`     | Explain diagnosis, configuration, deployment, training, support, and optional work.    | Discuss the project.                     |
| `/calculateur`       | Help the prospect estimate where administrative time is currently concentrated.        | Explore the largest relevant capability. |
| `/ressources`        | Answer operational questions before a sales conversation.                              | Read a guide or watch a task video.      |
| `/ressources/videos` | Organize short product demonstrations by task.                                         | Request a guided demo.                   |

## 10. Current video-topic inventory

These topics already exist in the site's information architecture.

1. **Create a customer record and enter a correction**  
   Customer → OD/OG values → lens characteristics → review → validation.

2. **Prepare a customer quotation**  
   Add products → review quantities and amounts → confirm at the right time.

3. **Read a product record**  
   Reference → brand → category → sales/purchase information → stock access.

4. **Prepare a supplier request for quotation**  
   Supplier → references → quantities → amounts → confirm the order only after review.

5. **Follow a supplier receipt**  
   Purchase order → ordered quantity → received quantity → discrepancy or next step.

6. **Find an invoice and its payment**  
   Source document → invoice amounts → status → payment information.

### Recommended production hierarchy

#### A. One overview film

- Purpose: transfer the complete website promise in 60–90 seconds.
- Spine: fragmented file → connected six-step flow → explicit checks → tailored setup → demo CTA.
- Visual rule: actual product UI should dominate; avoid a generic corporate montage.

#### B. Three continuous proof films

These are explicitly identified as missing high-priority product assets:

1. Customer → correction → quotation.
2. Correction → supplier order → receipt.
3. Quotation → sale → invoice → payment status.

Each should be recorded as one coherent dataset and continuous story, not assembled from unrelated records.

#### C. Six short task videos

Use the six topics above as 30–60 second focused clips. Each clip should answer one operational question and show the relevant verification step.

#### D. Educational explainers

Potential non-product or hybrid videos based on existing resources:

- Prepare store data before migration.
- Structure product references and categories.
- Choose between local and hosted deployment.
- Follow quotations with clear stages and statuses.
- Prepare roles and access before deployment.
- Prepare an Excel file for import evaluation.
- Follow a supplier order through receipt.

## 11. Educational content and FAQ inventory

These subjects can become voice-of-expert explainers, lead-nurture clips, or pre-demo preparation videos.

| Type                   | Subject                                                                        | Core angle                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Guide · Migration      | Prepare store data before migration                                            | Inventory the sources, separate data families, clean optical reference data, decide what truly needs migration, and assess quality before promising an import. |
| Article · Organization | Connect the optical file, quotation, and purchase without confusing the stages | Show what connects the operations and which checks remain with the team.                                                                                       |
| Guide · Team           | Prepare roles and access before deployment                                     | Decide who consults, prepares, controls, and confirms each operation before opening access.                                                                    |
| Article · Stock        | Structure product references and categories                                    | Start from sales/purchase/stock usage, define stable names, use meaningful categories, and test with real operations.                                          |
| Guide · Deployment     | Prepare the local-versus-hosted decision                                       | Begin with usage conditions, then clarify infrastructure, access, backup, maintenance, and support responsibilities in the proposal.                           |
| Article · Sales        | Follow quotations with clear stages and statuses                               | Separate preparation, confirmation, and follow-up; review content; assign the next action; keep sales and purchases distinct.                                  |
| Guide · Data           | Prepare an Excel file for import evaluation                                    | Use one clear header row, one record per line, stable identifiers, controlled duplicate review, and an anonymized sample.                                      |
| Article · Purchasing   | Follow a supplier order through receipt                                        | Identify the need, distinguish RFQ/order/receipt, assign responsibility, and compare what arrived with what was ordered.                                       |

### Approved FAQ answers

- **Which stores is it for?** Optical stores that want to structure customer files, commercial operations, purchasing, and follow-up. The scope is studied before any proposal.
- **What is shown in a demo?** The most useful selected flows: customer record, optical correction, quotation, supplier purchasing, stock, or invoicing.
- **Can it be installed locally or hosted?** A VPS/cloud or local deployment can be studied according to the technical environment and budget; the final choice appears in the proposal.
- **Are training and support included?** They are scoped according to the users and selected flows; content, duration, and conditions are stated in the proposal.
- **Can existing data be migrated?** Data is evaluated during diagnosis; migration depends on the sources and validated scope.
- **How is price established?** It depends on selected modules, configuration, hosting, data migration, and requested adaptations.

## 12. Current product visual inventory

All current images are 1920 × 1080 working WebP captures. They show review labels and must not be treated as final publication media.

| File                            | What is visible                                                                                                                                     | Useful video beat                                                   | Limitation                                                                      |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `01-client-record.webp`         | Odoo customer form, contact fields, role choices, duplicate override, sales/purchases, invoicing, notes, and optometry tabs.                        | Create/open the correct customer record and establish context.      | Personal fields are masked; capture marked “review in progress.”                |
| `02-product-catalog.webp`       | Demo product, sales/purchase flags, stock tracking, brand, product type, selling/purchase prices, taxes, internal reference, barcode, and category. | Explain how a product record serves sales, purchasing, and stock.   | Mixed French/English label remains; demo values need final approval.            |
| `03-prescription-distance.webp` | Draft correction RX00033, patient/doctor, dates, distance/near/contact tabs, OD/OG measurements, and buttons to create customer or supplier orders. | Enter distance values and explain possible next documents.          | This is not a quotation despite its current reuse in one website workflow slot. |
| `04-lens-selection.webp`        | Supplier and lens selections for OD/OG, bifocal type, polycarbonate material, treatments, geometry, pupillary distance, height, and internal notes. | Show how lens characteristics and measurements add optical context. | Partial form view; requires a controlled scroll or tighter crop in video.       |
| `05-prescription-review.webp`   | Validated correction, review report, distance and near data, lens type/material/treatments, dates, and status transition.                           | The strongest proof of review before validation.                    | Side panel is dense and some labels are in English.                             |
| `06-supplier-rfq.webp`          | Supplier RFQ P00005, supplier/reference, deadline, product line, quantity, unit prices, tax, and totals in DH.                                      | Review a supplier request before confirmation.                      | Prepared demo record; not linked visibly to the correction in this still.       |
| `07-purchase-reception.webp`    | Confirmed purchase order, receipt shortcut, ordered and received quantities, dates, totals, and audit trail.                                        | Show progression from RFQ to PO and receipt status.                 | Receipt details require an additional screen capture for a complete sequence.   |
| `08-supplier-bill.webp`         | Draft supplier bill linked to PO, supplier, dates, MAD currency, product line, taxes, totals, and audit trail.                                      | Explain source-document continuity and invoice review.              | It is a supplier bill, not customer invoicing or payment status.                |

Additional poster: `public/working/05-prescription-hero.webp` is used for hero/video poster compositions.

## 13. Calculator facts available for an evidence-led video

The calculator is a diagnostic, not a savings promise.

Default weekly examples:

| Operation           | Weekly volume | Minutes per operation |
| ------------------- | ------------: | --------------------: |
| Customer management |            30 |                     4 |
| Quotations          |            18 |                     8 |
| Corrections         |            18 |                    10 |
| Supplier purchases  |             8 |                    14 |
| Invoicing           |            20 |                     7 |
| Stock               |            10 |                     8 |

Other defaults:

- Employees involved: 2.
- Improvement hypothesis: 10%, editable from 1% to 30%.
- Monthly estimate uses 4.33 weeks.
- Results include current estimated monthly time, average per person, distribution by operation, and time potentially recovered under the chosen hypothesis.
- The operation with the largest estimated share links to its corresponding capability page.

Mandatory wording: inputs come from the visitor; the result is indicative; the improvement percentage is a discussion hypothesis, not a guaranteed saving.

## 14. Conversion and contact flow

### Primary CTA

“Demander une démo” / “Préparer ma démonstration.”

### Demo preparation sequence

1. Choose priorities: optical file, quotation, supplier purchase, stock, or invoicing.
2. Follow the relevant screens in the product using prepared demonstration data.
3. Evaluate fit: distinguish what already fits, what needs configuration, and what still requires study.

### Form information

Required:

- Full name.
- Store.
- City.
- Email.

Optional:

- Phone / WhatsApp.
- Operations the prospect wants to see, up to 500 characters.

Privacy note: never ask for or display real patient data in a commercial form or video-production brief.

Current direct contact:

- Mohamed El Bachrioui.
- `hello@opvibe.com`.
- WhatsApp: `+212 620 169 713`.

The form is currently in preview mode unless `PUBLIC_DEMO_FORM_ENDPOINT` is configured. Do not script a guaranteed successful submission until the production endpoint is tested.

## 15. Claim and safety guardrails

### Allowed claims

- Information and operations are brought into a connected environment.
- The team can retrieve context and prepare the next operation.
- OD/OG corrections and lens references can remain close to relevant operations.
- The team reviews and confirms documents.
- Local or VPS/cloud deployment can be studied.
- Training, support, data migration, and custom work can be scoped in a proposal.
- A guided demo can focus on the store's priorities.

### Do not claim without new evidence

- Guaranteed time, cost, revenue, or error reductions.
- Fully automatic purchase, sale, invoice, or payment processing.
- Automatic compliance, medical correctness, or clinical decision-making.
- Guaranteed migration of all existing data.
- A fixed price, included hosting, included training, or included support.
- A customer list, adoption count, testimonials, certifications, integrations, or performance numbers not present in approved source material.
- That the current working screenshots or clips are publication-approved.
- That a supplier bill demonstrates a customer payment flow.

### Language discipline

Prefer: connect, retrieve, prepare, review, follow, consult, configure, define, evaluate.  
Use carefully: automate, save, eliminate, guarantee, optimize.  
Always distinguish: draft vs confirmed; sale vs supplier purchase; invoice vs payment; existing configuration vs optional adaptation.

## 16. Visual and editorial direction

- Brand mood: editorial calm, optical precision, software credibility.
- Product screen remains the hero; decoration supports it.
- Palette: forest green, cream, white, ink, and restrained gold.
- Use optical geometry only when it clarifies connection or focus.
- Motion should be restrained and respect reduced-motion needs.
- Never autoplay website video.
- Use readable cursor movement, controlled zooms, and highlights around the exact field or status being narrated.
- Avoid floating glass blobs, generic AI optics, crowded dashboards, and decorative movement that hides the interface.
- Provide captions and a transcript for every published video.
- French narration and on-screen copy should be the default; preserve exact product labels when visible.

## 17. Gaps that must be resolved before final scripting/production

### Product and data gaps

- One coherent fictional demonstration dataset in MAD.
- Approved customer → correction → quotation sequence.
- Approved correction → supplier order → receipt sequence.
- Approved quotation → sale → invoice → payment-status sequence.
- Final clean customer invoice and payment-status screens.
- Product-owner approval for every visible field, state, and action.
- Decide whether mixed French/English product labels should be corrected before recording.

### Brand and media gaps

- Final approved logo/wordmark.
- Clean screenshots without the “CAPTURE DEMO - REVUE EN COURS” label.
- Final video duration, aspect-ratio variants, thumbnails, captions, transcripts, and poster frames.
- Licensed/self-hosted production fonts if the current fallbacks are replaced.

### Commercial/legal gaps

- Approved commercial model and service wording.
- Legal entity, privacy controller, retention period, and privacy route.
- Production form endpoint and spam protection.
- Public domain, analytics policy, and approved social-sharing image.

## 18. Brief for the next AI agent

Use this exact assignment after attaching this handoff and the JSON manifest:

> You are scripting a French B2B product-video system for Opti Solution, an Odoo Community-based management environment for optical stores. First, read the complete source handoff and manifest. Do not invent features, integrations, customers, metrics, savings, prices, compliance claims, or automation. Preserve the distinction between connected steps and explicit human validation. Propose: (1) a prioritized video slate, (2) the communication objective and prospect question for each video, (3) recommended duration and format, (4) a beat-by-beat French script with narration, on-screen copy, and exact UI shot requirements, (5) a continuity/data checklist, (6) claims that require approval, and (7) the next CTA. Start with the 60–90 second overview film and the three continuous proof films. Mark every missing screen or unsupported transition as `CAPTURE REQUIRED`; do not bridge gaps with fictional UI.

### Required output format from that agent

For each video:

1. Title and funnel stage.
2. Single prospect question answered.
3. Single conversion objective.
4. Duration and aspect ratios.
5. Scene table: timecode, narration, UI action, on-screen text, asset/capture needed.
6. Claim-source notes.
7. Dataset continuity requirements.
8. Accessibility: captions, transcript, and any visual-only information that must be narrated.
9. CTA and destination route.
10. Open approvals and production risks.

## 19. Source map

Primary content sources in the repository:

- `src/data/optic-site.ts`: navigation, workflow, capabilities, resources, FAQs, and setup stages.
- `src/components/site/HomeOpening.astro`: main promise and homepage proof framing.
- `src/components/site/HomePage.astro`: complete homepage persuasion sequence.
- `src/pages/solution.astro`: product fit, system areas, and roles.
- `src/pages/fonctionnement.astro`: detailed six-step flow and control points.
- `src/pages/fonctionnalites.astro`: capability descriptions and tasks.
- `src/pages/demo.astro`: demo topics and qualification flow.
- `src/pages/mise-en-place.astro`: setup and commercial scope boundaries.
- `src/pages/calculateur.astro` and `src/components/site/TimeCalculator.astro`: diagnostic framing and formulas.
- `src/pages/ressources/videos.astro`: video-topic taxonomy.
- `src/data/resource-articles.ts`: educational subject inventory.
- `src/components/site/DemoRequest.astro`: request data, validation, privacy, and contact channels.
- `DESIGN_SYSTEM.md`: brand, interaction, evidence, and release rules.
- `WEBSITE_EXPANSION_V1.md`: sitemap, page responsibilities, missing production assets, and strategic recommendations.
