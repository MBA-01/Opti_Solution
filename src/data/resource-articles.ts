export interface ResourceSection {
  title: string;
  paragraphs?: string[];
  list?: string[];
  note?: {
    title: string;
    text: string;
  };
}

export interface ResourceArticle {
  slug: string;
  type: 'Article' | 'Guide' | 'Tutoriel';
  category: string;
  title: string;
  description: string;
  reading: string;
  updated: string;
  image: string;
  imageAlt: string;
  imageLabel: string;
  imageCaption: string;
  sections: ResourceSection[];
  capability: {
    title: string;
    text: string;
    href: string;
    linkText: string;
  };
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: 'organiser-references-produits',
    type: 'Article',
    category: 'Stock',
    title: 'Structurer les références produit et les catégories du magasin',
    description:
      'Un cadre pratique pour retrouver plus facilement montures, verres et accessoires dans les opérations de vente, d’achat et de stock.',
    reading: '6 min',
    updated: 'Septembre 2026',
    image: '/product/tablet/products.webp',
    imageAlt: 'Fiche produit Opti Solution présentant une référence utilisée en vente, achat et stock.',
    imageLabel: 'Catalogue produit',
    imageCaption: 'Une fiche claire commence par des références et catégories cohérentes',
    sections: [
      {
        title: 'Commencer par l’usage, pas par le fichier',
        paragraphs: [
          'Une référence produit doit aider l’équipe à identifier le bon article pendant une vente, un achat ou une consultation de stock. Avant de normaliser le catalogue, listez les informations réellement utilisées dans ces trois situations.',
          'Le nom, la référence interne, la marque, la catégorie et l’unité forment généralement le premier niveau. Les informations supplémentaires doivent répondre à un besoin de recherche, de contrôle ou de commande clairement identifié.',
        ],
      },
      {
        title: 'Définir une règle de nommage stable',
        paragraphs: [
          'Choisissez une structure que l’équipe peut appliquer sans interprétation. Une règle utile reste courte, distingue les variantes nécessaires et évite d’intégrer dans le nom des informations déjà gérées dans un autre champ.',
        ],
        list: [
          'Utiliser une référence unique par article ou variante suivie.',
          'Écrire les marques et catégories toujours de la même manière.',
          'Séparer les produits actifs des anciennes références à conserver.',
          'Documenter les abréviations autorisées pour l’équipe.',
        ],
      },
      {
        title: 'Limiter les catégories à des décisions utiles',
        paragraphs: [
          'Une catégorie doit faciliter une action : chercher un produit, préparer un achat, lire un niveau de stock ou analyser une famille. Trop de niveaux rendent le classement difficile à maintenir; trop peu de niveaux mélangent des articles utilisés différemment.',
        ],
        note: {
          title: 'Avant une reprise de données',
          text: 'Repérez les doublons, les catégories presque identiques et les références sans responsable de validation. Ces points doivent être clarifiés avant l’évaluation d’un import.',
        },
      },
      {
        title: 'Tester avec des opérations réelles',
        paragraphs: [
          'Prenez quelques ventes et commandes fournisseurs représentatives. Vérifiez que l’équipe retrouve la bonne référence, comprend son libellé et peut distinguer les variantes nécessaires. Cette vérification révèle rapidement les catégories trop vagues et les noms trop longs.',
        ],
      },
    ],
    capability: {
      title: 'Produits & stock dans Opti Solution',
      text: 'Découvrez comment les fiches produits, marques, catégories et quantités s’insèrent dans les parcours de vente et d’achat.',
      href: '/fonctionnalites#produits-stock',
      linkText: 'Voir le domaine Produits & stock',
    },
  },
  {
    slug: 'choisir-deploiement-local-ou-heberge',
    type: 'Guide',
    category: 'Déploiement',
    title: 'Préparer le choix entre installation locale et environnement hébergé',
    description:
      'Les questions techniques et opérationnelles à poser avant de retenir un mode de déploiement pour le magasin.',
    reading: '7 min',
    updated: 'Septembre 2026',
    image: '/product/tablet/sales-dashboard.webp',
    imageAlt: 'Interface Opti Solution consultée depuis un navigateur.',
    imageLabel: 'Environnement de travail',
    imageCaption: 'Le choix du déploiement dépend de l’organisation et des contraintes du magasin',
    sections: [
      {
        title: 'Partir des conditions d’utilisation',
        paragraphs: [
          'Le bon choix dépend des lieux de connexion, du nombre d’utilisateurs, de la qualité de l’accès internet, des compétences disponibles et des responsabilités prévues pour l’exploitation technique.',
          'Décrivez d’abord qui utilise la solution, depuis quel lieu et à quels moments. Ajoutez les contraintes de continuité d’activité que le magasin considère comme prioritaires.',
        ],
      },
      {
        title: 'Questions à poser pour une installation locale',
        list: [
          'Quel équipement hébergera l’environnement et qui pourra intervenir dessus ?',
          'Comment les sauvegardes, mises à jour et restaurations seront-elles organisées ?',
          'Un accès depuis l’extérieur du magasin est-il nécessaire ?',
          'Que se passe-t-il en cas de panne de l’équipement ou du réseau local ?',
        ],
      },
      {
        title: 'Questions à poser pour un environnement hébergé',
        list: [
          'Quel périmètre d’hébergement et de maintenance est inclus dans la proposition ?',
          'Qui gère les accès techniques, les mises à jour et les sauvegardes prévues ?',
          'Quelles conditions de connexion sont disponibles dans le magasin ?',
          'Comment sont organisés le support et les changements de configuration ?',
        ],
      },
      {
        title: 'Faire apparaître le choix dans la proposition',
        paragraphs: [
          'Le mode retenu, les responsabilités et les services associés doivent être décrits dans la proposition. Cette clarification évite de confondre l’accès au logiciel avec l’hébergement, la maintenance ou le support.',
        ],
        note: {
          title: 'Périmètre Opti Solution',
          text: 'Une option VPS/cloud ou locale peut être étudiée. Le choix et les services associés sont confirmés selon l’environnement technique et le budget.',
        },
      },
    ],
    capability: {
      title: 'Préparer la mise en place',
      text: 'Le diagnostic permet de cadrer le déploiement, les rôles, la formation et les services associés avant la proposition.',
      href: '/mise-en-place',
      linkText: 'Comprendre la mise en place',
    },
  },
  {
    slug: 'suivre-devis',
    type: 'Article',
    category: 'Vente',
    title: 'Suivre les devis avec des étapes et des statuts clairs',
    description:
      'Une méthode simple pour savoir quels devis préparer, vérifier, confirmer ou reprendre avec le client.',
    reading: '5 min',
    updated: 'Septembre 2026',
    image: '/product/tablet/quotations.webp',
    imageAlt: 'Liste des devis clients dans Opti Solution sur tablette.',
    imageLabel: 'Vente & devis',
    imageCaption: 'Le suivi commence par un document vérifiable et un prochain geste clairement identifié',
    sections: [
      {
        title: 'Distinguer préparation, confirmation et suivi',
        paragraphs: [
          'Un devis en préparation ne demande pas la même action qu’un devis déjà présenté au client. Définissez des étapes compréhensibles par toute l’équipe et associez à chacune un prochain geste.',
          'L’objectif est de pouvoir répondre rapidement à trois questions : où en est le document, qui doit agir et quelle information manque encore ?',
        ],
      },
      {
        title: 'Contrôler le contenu avant de confirmer',
        list: [
          'Vérifier le client et la fiche concernée.',
          'Relire les produits, quantités et références retenus.',
          'Contrôler les prix, remises, taxes et total.',
          'Confirmer les informations qui dépendent encore du client ou du fournisseur.',
        ],
      },
      {
        title: 'Donner un propriétaire à la prochaine action',
        paragraphs: [
          'Une relance reste fragile lorsque personne ne sait qui doit la faire. Attribuez clairement le suivi commercial et convenez de la manière dont l’équipe note l’échange ou la décision suivante.',
        ],
      },
      {
        title: 'Relier le devis sans confondre les documents',
        paragraphs: [
          'La fiche optique apporte du contexte au devis. Un achat fournisseur peut ensuite devenir nécessaire. Ces opérations restent distinctes afin que l’équipe puisse vérifier les références, les montants et les décisions propres à chacune.',
        ],
      },
    ],
    capability: {
      title: 'Ventes & devis dans Opti Solution',
      text: 'Voyez comment l’équipe prépare les documents commerciaux, contrôle leur contenu et suit la vente.',
      href: '/fonctionnalites#ventes-devis',
      linkText: 'Explorer Ventes & devis',
    },
  },
  {
    slug: 'preparer-roles-acces',
    type: 'Guide',
    category: 'Équipe',
    title: 'Préparer les rôles et les accès avant le déploiement',
    description:
      'Définissez qui consulte, prépare, contrôle ou confirme chaque opération avant de configurer les utilisateurs.',
    reading: '6 min',
    updated: 'Septembre 2026',
    image: '/product/tablet/lens-configuration.webp',
    imageAlt: 'Écran de configuration de caractéristiques optiques dans Opti Solution.',
    imageLabel: 'Configuration & gestion',
    imageCaption: 'Les accès deviennent plus simples à définir lorsque les responsabilités sont explicites',
    sections: [
      {
        title: 'Lister les responsabilités avant les menus',
        paragraphs: [
          'Commencez par décrire le travail de chaque rôle : consulter une fiche, saisir une correction, préparer un devis, confirmer une commande, enregistrer une réception ou suivre un règlement.',
          'Cette liste donne une base plus claire que la reproduction des accès d’un ancien logiciel.',
        ],
      },
      {
        title: 'Séparer consulter, préparer et confirmer',
        paragraphs: [
          'Une personne peut avoir besoin de voir une information sans pouvoir la modifier. Une autre peut préparer un document qui doit être contrôlé avant confirmation. Formaliser ces différences aide à configurer des responsabilités compréhensibles.',
        ],
        list: [
          'Qui consulte les fiches clients et les informations optiques ?',
          'Qui saisit et qui valide une correction ?',
          'Qui prépare et qui confirme ventes et achats ?',
          'Qui traite les factures et les paiements ?',
          'Qui gère les référentiels et les accès ?',
        ],
      },
      {
        title: 'Prévoir les absences et les exceptions',
        paragraphs: [
          'Le fonctionnement doit rester clair lorsqu’une personne est absente ou lorsqu’un document sort du parcours habituel. Identifiez les rôles de remplacement et les décisions qui nécessitent l’intervention du responsable.',
        ],
      },
      {
        title: 'Valider avec des scénarios courts',
        paragraphs: [
          'Avant la mise en service, faites parcourir à chaque rôle quelques opérations représentatives. Vérifiez que l’utilisateur voit ce dont il a besoin et sait quand transmettre la fiche à la personne suivante.',
        ],
        note: {
          title: 'À préparer pour le diagnostic',
          text: 'Une liste des utilisateurs, de leurs responsabilités et des validations attendues suffit pour commencer la discussion.',
        },
      },
    ],
    capability: {
      title: 'Configuration & gestion',
      text: 'Découvrez comment les rôles, les accès et les référentiels sont préparés dans le périmètre retenu.',
      href: '/fonctionnalites#configuration-gestion',
      linkText: 'Voir Configuration & gestion',
    },
  },
  {
    slug: 'preparer-fichier-excel',
    type: 'Guide',
    category: 'Données',
    title: 'Préparer un fichier Excel avant une évaluation d’import',
    description:
      'Nettoyez la structure, les identifiants et les valeurs de vos fichiers avant d’évaluer une reprise de données.',
    reading: '7 min',
    updated: 'Septembre 2026',
    image: '/product/tablet/products.webp',
    imageAlt: 'Fiche produit illustrant les champs à préparer avant un import.',
    imageLabel: 'Préparation des données',
    imageCaption: 'Un fichier régulier permet d’évaluer plus précisément les données à reprendre',
    sections: [
      {
        title: 'Conserver une ligne d’en-tête claire',
        paragraphs: [
          'Chaque colonne doit représenter une seule information et porter un nom compréhensible. Évitez les titres fusionnés, les lignes décoratives et les sous-tableaux placés dans la même feuille.',
        ],
      },
      {
        title: 'Une ligne, un enregistrement',
        paragraphs: [
          'Déterminez ce que représente une ligne : un client, un fournisseur, un produit ou une autre entité. Ne mélangez pas plusieurs familles de données dans le même tableau lorsque leurs colonnes et leurs règles diffèrent.',
        ],
        list: [
          'Supprimer les lignes entièrement vides et les totaux intermédiaires.',
          'Choisir un format cohérent pour les dates et les nombres.',
          'Éviter plusieurs valeurs différentes dans une seule cellule.',
          'Conserver un identifiant stable lorsqu’il existe.',
        ],
      },
      {
        title: 'Repérer les doublons sans les supprimer trop vite',
        paragraphs: [
          'Deux lignes proches peuvent représenter un doublon ou deux fiches réellement distinctes. Ajoutez une colonne de décision et faites valider les cas ambigus par la personne qui connaît les données.',
        ],
      },
      {
        title: 'Préparer un échantillon anonymisé',
        paragraphs: [
          'Un petit échantillon représentatif aide à examiner les colonnes, les formats et les relations entre fichiers. Retirez les données personnelles réelles avant un premier échange commercial.',
        ],
        note: {
          title: 'Évaluation avant import',
          text: 'Le format, le volume, la qualité et les relations entre les fichiers doivent être examinés avant de confirmer une reprise.',
        },
      },
    ],
    capability: {
      title: 'Évaluer une reprise de données',
      text: 'Préparez les sources et les décisions qui permettront de définir un périmètre de migration réaliste.',
      href: '/ressources/preparer-migration',
      linkText: 'Lire le guide de migration',
    },
  },
  {
    slug: 'suivre-commande-fournisseur',
    type: 'Article',
    category: 'Achats',
    title: 'Suivre une commande fournisseur jusqu’à la réception',
    description:
      'Clarifiez les documents, les contrôles et les responsabilités entre le besoin d’achat et la réception des produits.',
    reading: '6 min',
    updated: 'Septembre 2026',
    image: '/product/tablet/purchase-order.webp',
    imageAlt: 'Commande fournisseur Opti Solution avec suivi de la réception.',
    imageLabel: 'Fournisseurs & achats',
    imageCaption: 'La commande et la réception restent deux moments distincts du suivi fournisseur',
    sections: [
      {
        title: 'Identifier l’origine du besoin',
        paragraphs: [
          'Avant de contacter le fournisseur, précisez les produits, quantités, références et informations qui ont déclenché l’achat. Cette préparation réduit les ambiguïtés au moment de comparer la demande, la commande et la réception.',
        ],
      },
      {
        title: 'Traiter chaque document selon son rôle',
        paragraphs: [
          'La demande de prix sert à préparer l’échange avec le fournisseur. La commande confirme l’engagement retenu. La réception enregistre ce qui est réellement arrivé. Garder ces étapes distinctes permet de contrôler les écarts.',
        ],
        list: [
          'Vérifier le fournisseur et les références demandées.',
          'Relire les quantités, prix et conditions avant confirmation.',
          'Comparer la réception avec la commande concernée.',
          'Signaler les quantités ou références qui demandent une vérification.',
        ],
      },
      {
        title: 'Attribuer la responsabilité du suivi',
        paragraphs: [
          'Déterminez qui prépare l’achat, qui le confirme et qui contrôle la réception. Le responsable doit aussi savoir où consigner une différence ou une information encore incertaine.',
        ],
      },
      {
        title: 'Conserver le lien avec le besoin du magasin',
        paragraphs: [
          'Le parcours fournisseur peut découler d’un besoin client ou d’un besoin de stock. Ce contexte aide l’équipe à prioriser le suivi, tout en conservant des documents de vente et d’achat séparés.',
        ],
      },
    ],
    capability: {
      title: 'Fournisseurs & achats dans Opti Solution',
      text: 'Suivez le travail fournisseur depuis la demande de prix jusqu’à la réception, avec un contrôle à chaque confirmation.',
      href: '/fonctionnalites#fournisseurs-achats',
      linkText: 'Explorer Fournisseurs & achats',
    },
  },
];

export const getResourceArticle = (slug: string) => resourceArticles.find((article) => article.slug === slug);
