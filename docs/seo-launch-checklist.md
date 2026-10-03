# Opti Solution — SEO and trust launch checklist

Updated: 2 October 2026

This document separates repository work from actions that require the business owner, a production deployment, DNS access, or an authenticated third-party account. Do not mark an account task complete from source code alone.

## Completed in the website

- Unique About page at `/a-propos`, with contextual external links to Odoo Community and the Moroccan CNDP.
- Custom 404 page; internal routes and anchors are checked by `npm run audit:site`.
- XML page sitemap at `/sitemap-index.xml` and image sitemap at `/image-sitemap.xml`.
- SVG favicon, Apple touch icon, theme color, and web app manifest.
- Indexing controls: concept pages, the thank-you page, the 404 page, and the legacy homepage redirect are excluded from indexing/sitemaps.
- Breadcrumb UI and `BreadcrumbList` structured data on public inner pages.
- One canonical tag per rendered HTML page; `/homes/saas` is now a redirect instead of duplicate content.
- Consent notice that prevents optional Google Analytics loading before acceptance.
- Named author, publication date, modification date, Article/HowTo structured data, and author section on every resource article.
- Dedicated Contact, Services, Privacy, Terms, Returns, and Warranty pages.
- Copyright notice and Contact/Legal groups in the footer.
- Social footer and Organization `sameAs` support, activated only when official URLs are configured.
- An automated check requiring at least 200 words of main content on every indexable page.

## Required before production launch

1. Set `PUBLIC_SITE_URL` to the final HTTPS domain. Rebuild, then confirm that canonical URLs, both sitemaps, and `robots.txt` use that domain.
2. Confirm the legal operator name, business address, registration/ICE details where applicable, invoicing terms, support commitments, warranty period, cancellation rules, and dispute provisions with qualified Moroccan counsel. The current pages are a clear operational draft, not a substitute for legal review.
3. Configure and test `PUBLIC_DEMO_FORM_ENDPOINT` with spam protection and secure storage. Complete the necessary CNDP formalities before enabling collection of production leads.
4. Configure `PUBLIC_BUSINESS_STREET`, `PUBLIC_BUSINESS_CITY`, `PUBLIC_BUSINESS_POSTAL_CODE`, and `PUBLIC_BUSINESS_COUNTRY` only with the confirmed public business address.
5. Confirm final product imagery and the social sharing image before publication.

## Google Search Console

Account access is required. Prefer a Domain property and DNS verification when the final domain is controlled.

1. Add the final domain property in [Google Search Console](https://search.google.com/search-console/).
2. Add the TXT record Google supplies at the DNS provider, or place the HTML-tag token in `PUBLIC_GOOGLE_SITE_VERIFICATION_ID` for a URL-prefix property.
3. Deploy and complete ownership verification. Keep the verification token in place.
4. Submit `https://FINAL-DOMAIN/sitemap-index.xml` in the Sitemaps report.
5. Inspect the homepage, `/services`, `/a-propos`, `/contact`, and one resource article. Request indexing only after the production crawl passes.

Official references: [ownership verification](https://support.google.com/webmasters/answer/9008080), [sitemap submission](https://support.google.com/webmasters/answer/7451001).

## Bing Webmaster Tools

1. Add the production site in [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Import the verified Search Console property or use Bing’s supplied verification token in `PUBLIC_BING_SITE_VERIFICATION_ID`.
3. Deploy, verify ownership, and submit `https://FINAL-DOMAIN/sitemap-index.xml`.
4. Run Bing’s site scan and review index coverage after the first crawl.

Official reference: [add and verify a site](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b).

## Google Business Profile

Do not create a profile until eligibility and the public identity are confirmed. Google Business Profiles are intended for eligible businesses that make in-person contact with customers; an online-only software business may not qualify.

1. Confirm whether Opti Solution serves customers in person at a staffed location or through an eligible service-area model.
2. Search Google Maps for an existing profile before creating a new one.
3. If eligible, add or claim the profile, complete verification, and use the same public name, phone, website, category, and service area used elsewhere.
4. Add the final website URL with appropriate campaign parameters and keep ownership access limited.

Official reference: [add or claim a Business Profile](https://support.google.com/business/answer/2911778).

## LinkedIn and Facebook business pages

These require an authenticated owner and cannot be created safely from repository access.

1. Create or claim the official LinkedIn company page. Use the final domain, approved logo, short description, business category, location/service area, and a named owner account.
2. Create or claim the official Facebook Page with the same public identity and contact details.
3. Add the verified public URLs to `PUBLIC_LINKEDIN_URL` and `PUBLIC_FACEBOOK_URL` in the production environment, then redeploy.
4. Confirm both footer icons open the correct official pages and that the Organization JSON-LD lists the same URLs.

Official LinkedIn reference: [create a LinkedIn Page](https://www.linkedin.com/help/linkedin/answer/a543852).

## Production availability, SSL, 404, and 5xx checks

After deployment:

1. Confirm the HTTP version of the domain redirects to the canonical HTTPS host with one permanent redirect.
2. Check the certificate hostname, validity period, chain, and automatic renewal in the hosting dashboard.
3. Run `npm run audit:site` against the exact release artifact before deployment.
4. Crawl every sitemap URL over HTTPS and require a final 200 response. Confirm a random nonexistent path returns the custom page with HTTP 404, not 200.
5. Check hosting logs for 5xx responses after launch and after each material release. A build-time audit cannot prove the absence of production 5xx errors.
6. Recheck external links periodically; the local audit validates internal targets but cannot guarantee that a third-party website will remain available.
