import type { APIRoute } from 'astro';

const imagesByPage = [
  {
    page: '/',
    images: [
      ['/product/device-showcase.webp', 'Opti Solution sur ordinateur, tablette et mobile'],
      ['/product/tablet/optical-correction.webp', 'Correction optique dans Opti Solution'],
      ['/product/tablet/quotations.webp', 'Suivi des devis clients dans Opti Solution'],
      ['/product/tablet/products.webp', 'Catalogue produit et stock dans Opti Solution'],
    ],
  },
  {
    page: '/solution',
    images: [
      ['/product/tablet/client-record.webp', 'Fiche client Opti Solution'],
      ['/product/tablet/optical-correction.webp', 'Correction optique structurée par œil'],
    ],
  },
  {
    page: '/fonctionnement',
    images: [
      ['/product/tablet/client-record.webp', 'Première étape du parcours : la fiche client'],
      ['/product/tablet/purchase-order.webp', 'Commande fournisseur dans le parcours Opti Solution'],
      ['/product/tablet/paid-invoice.webp', 'Facture et statut de règlement dans Opti Solution'],
    ],
  },
  {
    page: '/fonctionnalites',
    images: [
      ['/product/tablet/optical-correction.webp', 'Clients et optométrie'],
      ['/product/tablet/quotations.webp', 'Ventes et devis'],
      ['/product/tablet/products.webp', 'Produits et stock'],
      ['/product/tablet/purchase-order.webp', 'Fournisseurs et achats'],
      ['/product/tablet/paid-invoice.webp', 'Facturation et paiements'],
      ['/product/tablet/lens-configuration.webp', 'Configuration des référentiels optiques'],
    ],
  },
  {
    page: '/demo',
    images: [
      ['/product/tablet/optical-correction.webp', 'Aperçu de démonstration Opti Solution'],
      ['/product/tablet/purchase-order.webp', 'Aperçu du parcours fournisseur'],
      ['/product/tablet/paid-invoice.webp', 'Aperçu du suivi de facturation'],
    ],
  },
  {
    page: '/ressources',
    images: [
      ['/product/tablet/products.webp', 'Ressource sur les références et données produit'],
      ['/product/tablet/sales-dashboard.webp', 'Ressource sur le déploiement Opti Solution'],
    ],
  },
];

const escapeXml = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

export const GET: APIRoute = ({ site }) => {
  const body = imagesByPage
    .map(({ page, images }) => {
      const imageEntries = images
        .map(
          ([path]) => `    <image:image>
      <image:loc>${escapeXml(new URL(path, site).href)}</image:loc>
    </image:image>`
        )
        .join('\n');
      return `  <url>
    <loc>${escapeXml(new URL(page, site).href)}</loc>
${imageEntries}
  </url>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
