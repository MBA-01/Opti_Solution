export interface ResourceSection {
  title: string;
  paragraphs?: string[];
  list?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
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
  seoTitle?: string;
  description: string;
  intro?: string;
  reading: string;
  updated: string;
  published: string;
  modified: string;
  author: string;
  image: string;
  imageAlt: string;
  imageLabel: string;
  imageCaption: string;
  sections: ResourceSection[];
  relatedSlugs?: string[];
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
    title: 'Comment organiser les références produit d’un magasin d’optique',
    seoTitle: 'Références produit en magasin d’optique',
    description:
      'Définissez des références, des noms et des catégories cohérents pour retrouver les montures, verres et accessoires dans les ventes, achats et stocks.',
    intro:
      'Une référence produit doit aider l’équipe à reconnaître le bon article sans hésitation. Elle doit aussi rester cohérente dans les ventes, les achats et le suivi du stock. Définissez d’abord les informations utiles. Appliquez ensuite une règle de nommage stable et testez-la sur des opérations réelles.',
    reading: '4 min',
    updated: '6 octobre 2026',
    published: '2026-10-02',
    modified: '2026-10-06',
    author: 'Mohamed El Bachrioui',
    image: '/product/tablet/products.webp',
    imageAlt: 'Catalogue Opti Solution montrant des références produit, leurs catégories et les quantités disponibles.',
    imageLabel: 'Catalogue produit',
    imageCaption: 'Une fiche claire commence par des références et des catégories cohérentes',
    sections: [
      {
        title: 'Quelles informations l’équipe utilise-t-elle réellement ?',
        paragraphs: [
          'Commencez par observer trois situations : préparer une vente, préparer un achat et consulter le stock. Notez les informations dont l’équipe a besoin dans chaque situation.',
          'Le premier niveau peut comprendre les éléments suivants :',
        ],
        list: [
          'Une référence interne unique.',
          'Un nom court et compréhensible.',
          'La marque.',
          'La catégorie.',
          'L’unité utilisée.',
          'Les variantes que l’équipe doit distinguer.',
          'Ajoutez un champ seulement s’il facilite une recherche, un contrôle ou une commande. Évitez de répéter dans le nom une information déjà enregistrée dans un champ dédié.',
        ],
      },
      {
        title: 'Comment définir une règle de nommage stable ?',
        paragraphs: [
          'Choisissez une structure que chaque membre de l’équipe peut appliquer de la même manière. La règle doit rester courte. Elle doit distinguer les variantes qui ont un effet sur l’opération.',
          'Documentez les éléments suivants :',
        ],
        list: [
          'L’ordre des éléments dans le nom.',
          'Les abréviations autorisées.',
          'La manière d’écrire les marques.',
          'Le traitement des anciennes références.',
          'La personne qui valide les cas ambigus.',
          'Une règle écrite réduit les interprétations. Elle aide aussi les nouveaux utilisateurs à créer des fiches cohérentes.',
        ],
      },
      {
        title: 'Combien de catégories faut-il créer ?',
        paragraphs: [
          'Une catégorie doit faciliter une décision. Elle peut aider à chercher un produit, préparer un achat, consulter une quantité ou regrouper une famille d’articles.',
          'Trop de niveaux rendent le classement difficile à maintenir. Trop peu de niveaux mélangent des articles qui n’ont pas le même usage. Commencez avec les catégories utiles aujourd’hui. Ajoutez un niveau seulement lorsqu’il répond à une question précise.',
        ],
      },
      {
        title: 'Que faut-il vérifier avant une reprise de données ?',
        paragraphs: [
          'Repérez les doublons, les variantes orthographiques et les catégories presque identiques. Ne supprimez pas immédiatement les lignes proches. Deux fiches peuvent sembler identiques tout en représentant deux articles différents.',
          'Préparez une liste de décision. Indiquez pour chaque cas : conserver, fusionner, archiver ou faire vérifier. Une reprise de données doit être évaluée avant d’être confirmée.',
        ],
      },
      {
        title: 'Comment tester l’organisation choisie ?',
        paragraphs: [
          'Sélectionnez quelques ventes et commandes fournisseurs représentatives. Demandez à l’équipe de retrouver la bonne référence et d’expliquer son choix.',
          'Vérifiez ensuite quatre points :',
        ],
        list: [
          'Le nom est compris au premier regard.',
          'La variante utile est visible.',
          'La catégorie aide à retrouver l’article.',
          'La même règle fonctionne dans la vente, l’achat et le stock.',
          'Ce test montre rapidement les noms trop longs, les catégories trop vagues et les informations manquantes.',
        ],
      },
    ],
    relatedSlugs: ['preparer-fichier-excel', 'suivre-commande-fournisseur', 'suivre-devis'],
    capability: {
      title: 'Opti Solution et les références produit',
      text: 'Opti Solution permet de structurer les fiches produits, les marques, les catégories et les quantités utiles aux opérations du magasin. Le périmètre exact dépend de la configuration retenue.',
      href: '/fonctionnalites#produits-stock',
      linkText: 'Voir le domaine Produits & stock',
    },
  },
  {
    slug: 'choisir-deploiement-local-ou-heberge',
    type: 'Guide',
    category: 'Déploiement',
    title: 'Installation locale ou environnement hébergé : comment préparer le choix',
    seoTitle: 'Installation locale ou hébergée : le choix',
    description:
      'Comparez les responsabilités, les accès, les sauvegardes et le support avant de choisir une installation locale ou un environnement hébergé pour le magasin.',
    intro:
      'Le choix ne dépend pas d’une formule universelle. Il dépend des lieux de connexion, des responsabilités techniques, des sauvegardes, du support et des contraintes du magasin. Décrivez d’abord votre usage. Comparez ensuite les responsabilités associées à chaque option. Le mode retenu doit apparaître clairement dans la proposition.',
    reading: '4 min',
    updated: '6 octobre 2026',
    published: '2026-10-02',
    modified: '2026-10-06',
    author: 'Mohamed El Bachrioui',
    image: '/product/tablet/sales-dashboard.webp',
    imageAlt: 'Interface Opti Solution consultée depuis un navigateur.',
    imageLabel: 'Environnement de travail',
    imageCaption: 'Le choix du déploiement dépend de l’organisation et des contraintes du magasin',
    sections: [
      {
        title: 'Quelles conditions d’utilisation faut-il décrire ?',
        paragraphs: [
          'Listez les personnes qui utiliseront le logiciel. Indiquez aussi les lieux et les moments de connexion. Cette description aide à séparer le besoin d’accès du choix d’hébergement.',
          'Préparez les informations suivantes :',
        ],
        list: [
          'Les lieux d’utilisation.',
          'Le nombre d’utilisateurs à prévoir.',
          'La qualité de la connexion disponible.',
          'Les périodes où l’accès est prioritaire.',
          'Les compétences techniques disponibles.',
          'La personne responsable de chaque décision.',
        ],
      },
      {
        title: 'Quelles questions poser pour une installation locale ?',
        paragraphs: [
          'Une installation locale implique des décisions sur l’équipement et son exploitation. Posez ces questions avant de retenir cette option :',
        ],
        list: [
          'Quel équipement hébergera l’environnement ?',
          'Qui pourra intervenir sur cet équipement ?',
          'Comment les sauvegardes seront-elles organisées ?',
          'Comment une restauration sera-t-elle testée ?',
          'Comment les mises à jour seront-elles préparées ?',
          'Un accès extérieur est-il nécessaire ?',
          'Quelle procédure s’applique en cas de panne locale ?',
        ],
      },
      {
        title: 'Quelles questions poser pour un environnement hébergé ?',
        paragraphs: [
          'Un environnement hébergé ne définit pas à lui seul les services inclus. Demandez un périmètre précis :',
        ],
        list: [
          'Qui gère les accès techniques ?',
          'Quelles sauvegardes sont prévues ?',
          'Qui prépare les mises à jour ?',
          'Quel support est inclus ?',
          'Comment les changements de configuration sont-ils traités ?',
          'Quelles conditions de connexion sont nécessaires dans le magasin ?',
        ],
      },
      {
        title: 'Comment comparer les deux options ?',
        paragraphs: ['Ce tableau sert à préparer la discussion. Il ne remplace pas une analyse technique du contexte.'],
        table: {
          headers: ['Point à confirmer', 'Installation locale', 'Environnement hébergé'],
          rows: [
            ['Équipement', 'Identifier l’équipement du magasin', 'Identifier l’environnement prévu'],
            [
              'Responsabilité technique',
              'Nommer la personne ou le prestataire responsable',
              'Définir les responsabilités du fournisseur et du magasin',
            ],
            [
              'Sauvegardes',
              'Définir la méthode et les contrôles',
              'Définir ce qui est inclus et comment le contrôle est réalisé',
            ],
            ['Accès', 'Préciser les accès locaux et extérieurs', 'Préciser les conditions de connexion et les comptes'],
            ['Support', 'Définir les interventions attendues', 'Définir le support inclus et ses limites'],
          ],
        },
      },
      {
        title: 'Que doit contenir la proposition ?',
        paragraphs: [
          'La proposition doit nommer le mode de déploiement retenu. Elle doit aussi préciser les responsabilités, les services inclus et les éléments à traiter séparément.',
          'Une option locale ou VPS/cloud peut être étudiée pour Opti Solution. Le choix final dépend de l’environnement technique, du périmètre et du budget convenus.',
        ],
      },
    ],
    relatedSlugs: ['preparer-roles-acces', 'preparer-fichier-excel', 'organiser-references-produits'],
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
    title: 'Comment suivre les devis d’un magasin d’optique',
    seoTitle: 'Suivi des devis en magasin d’optique',
    description:
      'Définissez des étapes, des responsables et un prochain geste pour suivre chaque devis sans le confondre avec la vente, la facture ou le règlement.',
    intro:
      'Un suivi utile doit répondre à trois questions : où en est le devis, qui doit agir et quelle information manque ? Définissez peu d’étapes. Associez ensuite un responsable et un prochain geste à chaque devis.',
    reading: '4 min',
    updated: '6 octobre 2026',
    published: '2026-10-02',
    modified: '2026-10-06',
    author: 'Mohamed El Bachrioui',
    image: '/product/tablet/quotations.webp',
    imageAlt: 'Liste des devis clients dans Opti Solution sur tablette.',
    imageLabel: 'Vente & devis',
    imageCaption: 'Le suivi commence par un document vérifiable et un prochain geste clairement identifié',
    sections: [
      {
        title: 'Quelles étapes faut-il distinguer ?',
        paragraphs: [
          'Un devis en préparation ne demande pas la même action qu’un devis déjà présenté au client. Utilisez des étapes que toute l’équipe comprend.',
          'Les libellés ci-dessous sont une proposition d’organisation. Les états visibles dans le produit doivent correspondre à la configuration réellement utilisée.',
        ],
        list: [
          'À préparer : des informations manquent encore.',
          'À relire : le contenu doit être contrôlé.',
          'Présenté au client : une réponse ou une précision est attendue.',
          'À reprendre : un changement doit être intégré.',
          'Décision enregistrée : l’équipe connaît la suite à donner.',
        ],
      },
      {
        title: 'Que faut-il contrôler avant une confirmation ?',
        paragraphs: ['Relisez les informations qui influencent le document :'],
        list: [
          'Le client et la fiche concernée.',
          'Les produits, les références et les quantités.',
          'Les prix, les remises, les taxes et le total.',
          'Les éléments qui dépendent encore du client.',
          'Les éléments qui demandent une vérification fournisseur.',
          'Le contrôle porte sur le contenu du devis. Il ne transforme pas le devis en vente, en facture ou en règlement.',
        ],
      },
      {
        title: 'Qui porte la prochaine action ?',
        paragraphs: [
          'Attribuez un responsable à la prochaine action. Indiquez aussi ce que cette personne doit faire : appeler, vérifier une référence, demander une information ou mettre à jour le document.',
          'Une date seule ne suffit pas. L’équipe doit comprendre l’action attendue et l’information qui permettra de la terminer.',
        ],
      },
      {
        title: 'Comment garder le contexte sans confondre les documents ?',
        paragraphs: [
          'La fiche optique peut apporter du contexte au devis. Un besoin d’achat fournisseur peut aussi apparaître. Ces opérations restent distinctes.',
        ],
        list: [
          'Le devis présente une proposition commerciale.',
          'La vente représente l’opération commerciale retenue.',
          'La facture présente le montant facturé.',
          'Le statut de règlement indique si la facture reste à régler ou a été réglée.',
          'La commande fournisseur concerne l’achat auprès d’un fournisseur.',
          'Cette distinction aide l’équipe à vérifier le bon document au bon moment.',
        ],
      },
      {
        title: 'Quelle revue courte faire chaque jour ?',
        paragraphs: [
          'Examinez les devis qui demandent une action. Pour chacun, confirmez les quatre points suivants :',
        ],
        list: [
          'L’étape actuelle.',
          'Le responsable.',
          'L’information manquante.',
          'Le prochain geste.',
          'Cette revue doit rester courte. Son objectif est de rendre la prochaine action visible.',
        ],
      },
    ],
    relatedSlugs: ['suivre-commande-fournisseur', 'preparer-roles-acces', 'organiser-references-produits'],
    capability: {
      title: 'Opti Solution et les devis',
      text: 'Opti Solution permet de préparer des devis, d’ajouter des produits et des quantités, puis de contrôler les prix, les remises et les taxes. Les documents commerciaux et leurs états restent distincts.',
      href: '/fonctionnalites#ventes-devis',
      linkText: 'Explorer Ventes & devis',
    },
  },
  {
    slug: 'preparer-roles-acces',
    type: 'Guide',
    category: 'Équipe',
    title: 'Comment définir les rôles et les accès avant un déploiement',
    seoTitle: 'Rôles et accès avant un déploiement',
    description:
      'Listez les responsabilités, séparez consultation et confirmation, puis testez les accès du logiciel avec des scénarios courts avant le déploiement.',
    intro:
      'Définissez les responsabilités avant de configurer les menus. Cette méthode aide à donner à chaque personne les accès nécessaires à son travail. Elle évite aussi de reproduire sans examen les droits d’un ancien logiciel.',
    reading: '4 min',
    updated: '6 octobre 2026',
    published: '2026-10-02',
    modified: '2026-10-06',
    author: 'Mohamed El Bachrioui',
    image: '/product/tablet/lens-configuration.webp',
    imageAlt: 'Écran de configuration de caractéristiques optiques dans Opti Solution.',
    imageLabel: 'Configuration & gestion',
    imageCaption: 'Les accès deviennent plus simples à définir lorsque les responsabilités sont explicites',
    sections: [
      {
        title: 'Quelles responsabilités faut-il lister ?',
        paragraphs: [
          'Décrivez les opérations de chaque rôle avec des verbes précis. Par exemple : consulter une fiche, saisir une correction, préparer un devis, confirmer une commande, enregistrer une réception ou suivre un règlement.',
          'Pour chaque opération, indiquez :',
        ],
        list: [
          'Qui consulte l’information.',
          'Qui prépare le document.',
          'Qui le relit.',
          'Qui peut le confirmer.',
          'Qui traite les exceptions.',
          'Cette liste devient la base de la configuration. Elle reste plus claire qu’une liste de menus sans contexte.',
        ],
      },
      {
        title: 'Pourquoi séparer consultation, préparation et confirmation ?',
        paragraphs: [
          'Une personne peut avoir besoin de consulter une information sans pouvoir la modifier. Une autre peut préparer un document qui doit être relu avant confirmation.',
          'Les cases doivent être complétées avec le responsable du magasin. Elles ne constituent pas une configuration universelle.',
        ],
        table: {
          headers: ['Opération', 'Consulter', 'Préparer', 'Relire', 'Confirmer'],
          rows: [
            ['Fiche client', 'À définir', 'À définir', 'À définir', 'Selon le périmètre'],
            ['Devis', 'À définir', 'À définir', 'À définir', 'À définir'],
            ['Commande fournisseur', 'À définir', 'À définir', 'À définir', 'À définir'],
            ['Réception', 'À définir', 'À définir', 'À définir', 'À définir'],
            ['Facture et règlement', 'À définir', 'À définir', 'À définir', 'À définir'],
          ],
        },
      },
      {
        title: 'Comment prévoir les absences et les exceptions ?',
        paragraphs: [
          'Nommez un rôle de remplacement pour les opérations prioritaires. Précisez aussi les décisions qui doivent rester sous le contrôle du responsable.',
          'Définissez les comptes et les responsabilités par utilisateur selon le périmètre retenu. Ne présentez pas un accès partagé comme un rôle. La règle exacte doit être définie pendant la mise en place.',
        ],
      },
      {
        title: 'Comment tester les accès avant l’ouverture ?',
        paragraphs: [
          'Préparez des scénarios courts et représentatifs. Demandez à chaque rôle d’exécuter seulement les actions prévues. Vérifiez ensuite que l’utilisateur voit les informations nécessaires et comprend quand transmettre le dossier.',
        ],
        list: [
          'Retrouver une fiche client.',
          'Préparer un devis.',
          'Préparer une commande fournisseur.',
          'Enregistrer une réception.',
          'Consulter une facture et son statut de règlement.',
        ],
      },
      {
        title: 'Que faut-il apporter au diagnostic ?',
        paragraphs: [
          'Une première version peut tenir sur une page. Préparez la liste des utilisateurs, leurs responsabilités, les validations attendues et les remplacements prévus.',
          'Opti Solution prend en charge une configuration des rôles et des accès. Le détail dépend du périmètre convenu et des opérations réellement utilisées.',
        ],
      },
    ],
    relatedSlugs: ['choisir-deploiement-local-ou-heberge', 'preparer-fichier-excel', 'suivre-devis'],
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
    title: 'Comment préparer un fichier Excel avant un import de données',
    seoTitle: 'Préparer un fichier Excel pour l’import',
    description:
      'Nettoyez les colonnes, formats, identifiants et doublons avant d’évaluer l’import des données de votre magasin d’optique avec un échantillon fictif.',
    intro:
      'Un fichier régulier facilite l’évaluation d’un import. Chaque colonne doit représenter une information. Chaque ligne doit représenter un enregistrement. Avant tout échange, retirez les données personnelles réelles et préparez un échantillon représentatif.',
    reading: '4 min',
    updated: '6 octobre 2026',
    published: '2026-10-02',
    modified: '2026-10-06',
    author: 'Mohamed El Bachrioui',
    image: '/product/tablet/products.webp',
    imageAlt: 'Fiche produit illustrant les champs à préparer avant un import.',
    imageLabel: 'Préparation des données',
    imageCaption: 'Un fichier régulier permet d’évaluer plus précisément les données à reprendre',
    sections: [
      {
        title: 'Comment organiser les colonnes ?',
        paragraphs: [
          'Placez une seule ligne d’en-tête au début du tableau. Donnez à chaque colonne un nom court et compréhensible.',
          'Une colonne doit contenir une seule information. Séparez le téléphone, l’adresse électronique et la ville si ces données doivent être traitées séparément.',
        ],
        list: [
          'Évitez les cellules fusionnées.',
          'Évitez les titres répartis sur plusieurs lignes.',
          'Évitez les sous-tableaux dans la même feuille.',
          'N’utilisez pas la couleur comme seule information.',
          'Ne remplacez pas une valeur structurée par un commentaire.',
        ],
      },
      {
        title: 'Que doit représenter une ligne ?',
        paragraphs: [
          'Définissez l’entité avant de nettoyer le fichier. Une ligne peut représenter un client, un fournisseur, un produit ou une autre entité. Ne mélangez pas plusieurs familles lorsque leurs colonnes et leurs règles diffèrent.',
          'Vérifiez ensuite les points suivants :',
        ],
        list: [
          'Les lignes entièrement vides.',
          'Les totaux intermédiaires.',
          'Les formats de date.',
          'Les formats numériques.',
          'Les cellules qui contiennent plusieurs valeurs.',
          'Les identifiants stables déjà disponibles.',
        ],
      },
      {
        title: 'Comment traiter les doublons ?',
        paragraphs: [
          'Ne supprimez pas automatiquement deux lignes proches. Elles peuvent représenter un doublon ou deux fiches distinctes.',
          'Ajoutez une colonne de décision. Utilisez des valeurs simples : à vérifier, à conserver, à fusionner ou à archiver. Confiez les cas ambigus à une personne qui connaît les données.',
        ],
      },
      {
        title: 'Comment préparer un échantillon sûr ?',
        paragraphs: [
          'Choisissez quelques lignes qui représentent les cas courants et les cas difficiles. Remplacez les données personnelles par des valeurs fictives cohérentes. Ne transmettez pas de données personnelles réelles dans un formulaire commercial.',
          'L’échantillon doit permettre d’examiner les éléments suivants :',
        ],
        list: [
          'Les noms de colonnes.',
          'Les formats.',
          'Les valeurs manquantes.',
          'Les relations entre plusieurs fichiers.',
          'Les cas qui demandent une décision métier.',
        ],
      },
      {
        title: 'Qu’est-ce qui doit être évalué avant l’import ?',
        paragraphs: [
          'Le format, le volume, la qualité et les relations entre les fichiers doivent être examinés. Cette évaluation permet de définir le périmètre, les responsabilités et les contrôles nécessaires.',
          'Une reprise de données n’est pas garantie par la présence d’un fichier Excel. Elle doit être confirmée dans une proposition après examen des sources.',
        ],
      },
    ],
    relatedSlugs: ['organiser-references-produits', 'preparer-roles-acces', 'choisir-deploiement-local-ou-heberge'],
    capability: {
      title: 'Évaluer une reprise de données',
      text: 'Préparez les sources et les décisions qui permettront de définir un périmètre de migration réaliste.',
      href: '/ressources/preparer-migration',
      linkText: 'Lire le guide de préparation d’une migration',
    },
  },
  {
    slug: 'suivre-commande-fournisseur',
    type: 'Article',
    category: 'Achats',
    title: 'Comment suivre une commande fournisseur jusqu’à la réception',
    seoTitle: 'Commande fournisseur : suivi et réception',
    description:
      'Distinguez demande de prix, commande et réception pour contrôler les références, les quantités et les responsabilités du suivi fournisseur en magasin.',
    intro:
      'Le suivi fournisseur devient plus clair lorsque chaque document garde son rôle. La demande de prix prépare l’échange. La commande indique ce qui a été demandé. La réception indique ce qui est arrivé. L’équipe peut alors vérifier les écarts sans confondre les opérations.',
    reading: '4 min',
    updated: '6 octobre 2026',
    published: '2026-10-02',
    modified: '2026-10-06',
    author: 'Mohamed El Bachrioui',
    image: '/product/tablet/purchase-order.webp',
    imageAlt: 'Commande fournisseur Opti Solution avec suivi de la réception.',
    imageLabel: 'Fournisseurs & achats',
    imageCaption: 'La commande et la réception restent deux moments distincts du suivi fournisseur',
    sections: [
      {
        title: 'D’où vient le besoin d’achat ?',
        paragraphs: [
          'Identifiez l’origine du besoin avant de contacter le fournisseur. Il peut être lié à une demande client, à une quantité de stock ou à une décision du magasin.',
          'Préparez les éléments suivants :',
        ],
        list: [
          'Les références concernées.',
          'Les quantités demandées.',
          'Le fournisseur à consulter.',
          'Les informations encore incertaines.',
          'La personne responsable du suivi.',
          'Cette préparation réduit les ambiguïtés lorsque l’équipe compare les documents.',
        ],
      },
      {
        title: 'Quel est le rôle de chaque document ?',
        paragraphs: [
          'Une réception ne doit pas être présentée comme une simple copie automatique de la commande. Elle décrit un état différent et demande son propre contrôle.',
        ],
        table: {
          headers: ['Document', 'Rôle', 'Question de contrôle'],
          rows: [
            ['Demande de prix fournisseur', 'Préparer l’échange', 'Les références et quantités sont-elles correctes ?'],
            [
              'Commande fournisseur',
              'Enregistrer ce qui a été demandé',
              'Le fournisseur, les prix et les conditions ont-ils été relus ?',
            ],
            [
              'Réception',
              'Enregistrer ce qui est arrivé',
              'Les quantités et références reçues correspondent-elles à la commande ?',
            ],
          ],
        },
      },
      {
        title: 'Quels contrôles faire avant de confirmer ?',
        list: [
          'Vérifier le fournisseur.',
          'Relire les références et les quantités.',
          'Contrôler les prix et les conditions disponibles.',
          'Identifier les éléments qui demandent une décision.',
          'Confirmer seulement après la relecture prévue.',
        ],
      },
      {
        title: 'Comment traiter un écart à la réception ?',
        paragraphs: [
          'Comparez la réception avec la commande concernée. Signalez les quantités ou les références qui demandent une vérification. Notez aussi la personne qui doit décider de la suite.',
          'Cet article ne définit pas une procédure fournisseur universelle. Le magasin doit convenir de la manière dont il traite un manque, un remplacement ou une livraison partielle.',
        ],
      },
      {
        title: 'Qui porte le suivi ?',
        paragraphs: [
          'Définissez qui prépare l’achat, qui le relit, qui le confirme et qui contrôle la réception. Le responsable du suivi doit savoir où consigner une différence et à qui transmettre le dossier.',
          'Opti Solution couvre les fiches fournisseurs, les demandes de prix, les commandes et la réception dans le périmètre documenté. Le parcours fournisseur reste distinct de la vente client.',
        ],
      },
    ],
    relatedSlugs: ['organiser-references-produits', 'suivre-devis', 'preparer-roles-acces'],
    capability: {
      title: 'Fournisseurs & achats dans Opti Solution',
      text: 'Suivez le travail fournisseur depuis la demande de prix jusqu’à la réception, avec un contrôle à chaque confirmation.',
      href: '/fonctionnalites#fournisseurs-achats',
      linkText: 'Explorer Fournisseurs & achats',
    },
  },
];

export const getResourceArticle = (slug: string) => resourceArticles.find((article) => article.slug === slug);
