export const primaryNav = [
  { text: 'Solution', href: '/solution' },
  { text: 'Fonctionnement', href: '/fonctionnement' },
  { text: 'Fonctionnalités', href: '/fonctionnalites' },
  { text: 'Démo', href: '/demo' },
  {
    text: 'Ressources',
    href: '/ressources',
    links: [
      { text: 'Tous les contenus', href: '/ressources' },
      { text: 'Articles & guides', href: '/ressources#guides' },
      { text: 'Vidéos', href: '/ressources/videos' },
      { text: 'Calculateur', href: '/calculateur' },
    ],
  },
  { text: 'Mise en place', href: '/mise-en-place' },
];

export const footerLinks = [
  {
    title: 'Produit',
    links: [
      { text: 'Solution', href: '/solution' },
      { text: 'Fonctionnement', href: '/fonctionnement' },
      { text: 'Fonctionnalités', href: '/fonctionnalites' },
      { text: 'Démo', href: '/demo' },
    ],
  },
  {
    title: 'Découvrir',
    links: [
      { text: 'Ressources', href: '/ressources' },
      { text: 'Calculateur de temps', href: '/calculateur' },
      { text: 'Mise en place', href: '/mise-en-place' },
      { text: 'Questions fréquentes', href: '/#questions' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { text: 'Demander une démo', href: '/demo#demande' },
      { text: 'bachriouijr@gmail.com', href: 'mailto:bachriouijr@gmail.com' },
      { text: 'WhatsApp', href: 'https://wa.me/212632788555' },
    ],
  },
];

export const workflow = [
  {
    number: '01',
    title: 'Client',
    short: 'Retrouver la bonne fiche dès l’accueil.',
    detail: 'Créez ou ouvrez la fiche client pour retrouver ses coordonnées et le contexte utile avant de poursuivre.',
    image: '/working/01-client-record.webp',
  },
  {
    number: '02',
    title: 'Correction optique',
    short: 'Structurer les valeurs OD/OG.',
    detail: 'Renseignez les mesures de loin, de près ou de lentilles, puis contrôlez la correction avant validation.',
    image: '/working/05-prescription-review.webp',
  },
  {
    number: '03',
    title: 'Devis',
    short: 'Construire une proposition claire.',
    detail: 'Ajoutez les produits, quantités, prix, remises et taxes, puis vérifiez le devis avant confirmation.',
    image: '/working/03-prescription-distance.webp',
  },
  {
    number: '04',
    title: 'Fournisseur',
    short: 'Approvisionner seulement si nécessaire.',
    detail: 'Préparez la demande de prix, confirmez la commande fournisseur et suivez la réception des produits.',
    image: '/working/06-supplier-rfq.webp',
  },
  {
    number: '05',
    title: 'Vente & livraison',
    short: 'Suivre la vente jusqu’à la remise.',
    detail: 'Confirmez la vente et enregistrez la livraison lorsque le parcours de stock retenu le demande.',
    image: '/working/07-purchase-reception.webp',
  },
  {
    number: '06',
    title: 'Facture & règlement',
    short: 'Garder le règlement en vue.',
    detail: 'Créez la facture, contrôlez les montants et retrouvez son statut de règlement dans le même environnement.',
    image: '/working/08-supplier-bill.webp',
  },
];

export const capabilityGroups = [
  {
    slug: 'clients-optometrie',
    kicker: 'Fiche optique',
    title: 'Clients & optométrie',
    description:
      'Gardez la fiche client et ses informations optiques à portée de l’équipe, avec des étapes claires de saisie, de contrôle et de validation.',
    tasks: [
      'Créer et retrouver une fiche client',
      'Saisir des corrections OD/OG',
      'Renseigner types, matériaux et traitements',
      'Valider une correction après contrôle',
    ],
    image: '/working/05-prescription-review.webp',
    imageAlt: 'Fiche de correction optique dans Odoo avec données de démonstration.',
  },
  {
    slug: 'ventes-devis',
    kicker: 'Côté client',
    title: 'Ventes & devis',
    description:
      'Passez du besoin exprimé à un devis structuré, puis suivez la vente et la livraison sans perdre le contexte de la fiche.',
    tasks: [
      'Préparer un devis',
      'Ajouter les produits et quantités',
      'Contrôler prix, remises et taxes',
      'Suivre la vente et la livraison',
    ],
    image: '/working/03-prescription-distance.webp',
    imageAlt: 'Écran Opti Solution montrant les valeurs d’une correction et les actions liées aux commandes.',
  },
  {
    slug: 'produits-stock',
    kicker: 'Catalogue',
    title: 'Produits & stock',
    description:
      'Retrouvez les fiches produits, marques, références et quantités utiles lorsque vous préparez une vente ou un achat.',
    tasks: [
      'Structurer les références produit',
      'Retrouver marques et catégories',
      'Consulter les quantités',
      'Suivre les mouvements utiles',
    ],
    image: '/working/02-product-catalog.webp',
    imageAlt: 'Fiche produit optique dans Odoo avec informations d’achat, de vente et de stock.',
  },
  {
    slug: 'fournisseurs-achats',
    kicker: 'Approvisionnement',
    title: 'Fournisseurs & achats',
    description:
      'Gardez une continuité entre la demande de prix, la commande fournisseur et la réception, avec un contrôle avant chaque confirmation.',
    tasks: [
      'Gérer les fiches fournisseurs',
      'Créer une demande de prix',
      'Confirmer une commande',
      'Enregistrer la réception',
    ],
    image: '/working/07-purchase-reception.webp',
    imageAlt: 'Commande fournisseur dans Odoo montrant le suivi de la réception.',
  },
  {
    slug: 'facturation-paiements',
    kicker: 'Suivi',
    title: 'Facturation & paiements',
    description:
      'Retrouvez les factures clients et fournisseurs, contrôlez leurs montants et consultez leur statut de règlement.',
    tasks: [
      'Créer une facture depuis le document source',
      'Contrôler les montants',
      'Enregistrer un paiement',
      'Suivre les statuts de règlement',
    ],
    image: '/working/08-supplier-bill.webp',
    imageAlt: 'Brouillon de facture fournisseur dans Odoo avec lignes et totaux de démonstration.',
  },
  {
    slug: 'configuration-gestion',
    kicker: 'Cadre de travail',
    title: 'Configuration & gestion',
    description:
      'Donnez à chaque rôle les accès utiles et préparez les référentiels optiques retenus pour le fonctionnement du magasin.',
    tasks: [
      'Définir les accès par rôle',
      'Préparer les référentiels optiques',
      'Configurer marques et catégories',
      'Tester les parcours avant ouverture',
    ],
    image: '/working/04-lens-selection.webp',
    imageAlt: 'Écran de configuration des caractéristiques de verres dans Opti Solution.',
  },
];

export const resources = [
  {
    type: 'Guide',
    category: 'Migration',
    title: 'Préparer les données d’un magasin avant une migration',
    description:
      'Rassemblez les bons fichiers, clarifiez vos référentiels et préparez une reprise de données réaliste.',
    href: '/ressources/preparer-migration',
    reading: '7 min',
  },
  {
    type: 'Article',
    category: 'Organisation',
    title: 'Relier la fiche optique, le devis et l’achat sans confondre les étapes',
    description: 'Comprenez ce qui relie les opérations et les contrôles qui restent entre les mains de votre équipe.',
    href: '/fonctionnement',
    reading: '5 min',
  },
  {
    type: 'Guide',
    category: 'Équipe',
    title: 'Préparer les rôles et accès avant le déploiement',
    description: 'Définissez qui consulte, prépare ou confirme les opérations avant d’ouvrir les accès.',
    href: '/ressources/preparer-roles-acces',
    reading: '6 min',
  },
];

export const faqs = [
  {
    title: 'À quels magasins la solution s’adresse-t-elle ?',
    description:
      'Opti Solution s’adresse aux magasins d’optique qui veulent structurer leurs fiches clients, opérations commerciales, achats et suivi. Le périmètre est étudié avant toute proposition.',
  },
  {
    title: 'Que voit-on pendant la démo ?',
    description:
      'Nous sélectionnons avec vous les parcours les plus utiles : fiche client, correction optique, devis, achats fournisseurs, stock ou facturation.',
  },
  {
    title: 'Le logiciel peut-il être installé sur place ou hébergé ?',
    description:
      'Un déploiement VPS/cloud ou local peut être étudié selon votre environnement technique et votre budget. Le choix final figure dans la proposition.',
  },
  {
    title: 'La formation et le support sont-ils compris ?',
    description:
      'Ils sont cadrés selon les utilisateurs et les parcours retenus. Leur contenu, leur durée et leurs conditions sont précisés dans la proposition.',
  },
  {
    title: 'Peut-on reprendre les données existantes ?',
    description:
      'Les données à préparer ou importer sont évaluées pendant le diagnostic. La reprise dépend des sources et du périmètre validé.',
  },
  {
    title: 'Comment le prix est-il établi ?',
    description:
      'Le devis dépend des modules retenus, de la configuration, de l’hébergement, des données à reprendre et des adaptations demandées.',
  },
];

export const offerStages = [
  ['01', 'Diagnostic', 'Comprendre votre organisation, vos données et les parcours à traiter en priorité.'],
  ['02', 'Configuration', 'Préparer les modules, référentiels, rôles et réglages inclus dans le périmètre.'],
  ['03', 'Déploiement', 'Mettre en place l’environnement local ou hébergé prévu dans la proposition.'],
  ['04', 'Formation', 'Faire prendre en main les parcours retenus par les utilisateurs concernés.'],
  ['05', 'Mise en service', 'Ouvrir la solution après contrôle des données, accès et documents.'],
  [
    '06',
    'Support & évolutions',
    'Assurer le cadre de support convenu et évaluer séparément les besoins supplémentaires.',
  ],
];
