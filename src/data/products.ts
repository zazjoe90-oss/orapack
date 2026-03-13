export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "ensacheuse-verticale-a-vis",
    name: "Ensacheuse à vis",
    category: "Ensacheuses",
    description: "Précision maximale pour le conditionnement de poudres fines et produits pulvérulents.",
    longDescription: "L'ensacheuse à vis ORA PACK est la solution idéale pour les produits tels que la farine, le café moulu, les épices et les produits chimiques en poudre. Son système de dosage par vis sans fin garantit une précision exceptionnelle et un environnement de travail sans poussière.",
    image: "https://i.postimg.cc/fDRGZFcz/enchaseuse.jpg",
    features: [
      "Garantie 1 an avec suivi de maintenance",
      "Utilisation du film à plat PE et PP",
      "Régulation automatique de la température de soudure",
      "Coupe du sachet par couteau à 2 étages",
      "Déroulement contrôlé du film",
      "Automate Delta DVP & Écran tactile 7\" DOP",
      "Servo Moteur haute précision",
      "Compteur de sachets à prédétermination",
      "Dispositifs de sécurité électrique"
    ],
    specs: [
      { label: "Vitesse d'emballage", value: "15 - 25 sacs/min" },
      { label: "Taille des sacs", value: "L: 80-360mm, l: 80-240mm" },
      { label: "Plage de remplissage", value: "10g - 2000g" },
      { label: "Largeur du film", value: "180 - 500 mm" },
      { label: "Consommation d'air", value: "0.36m3/min (7 bar)" },
      { label: "Alimentation", value: "AC380V 50/60Hz 3.8kW" },
      { label: "Poids", value: "400 KG" }
    ]
  },
  {
    id: "2",
    slug: "ensacheuse-a-tasse",
    name: "Ensacheuse a tasse",
    category: "Ensacheuses",
    description: "Solution économique et rapide pour le dosage volumétrique de produits réguliers.",
    longDescription: "L'ensacheuse à tasses volumétriques est conçue pour la rapidité et la simplicité. Elle convient parfaitement aux produits de granulométrie régulière comme le riz, le sel, le sucre ou les petites graines.",
    image: "https://i.postimg.cc/3KF1kr7R/Whats-App-Image-2026-03-01-at-12-27-45.jpg",
    features: [
      "Garantie 1 an avec suivi de maintenance",
      "Utilisation du film à plat PE et PP",
      "Régulation automatique de la température de soudure",
      "Coupe du sachet par couteau à 2 étages",
      "Déroulement contrôlé du film",
      "Automate Delta DVP & Écran tactile 7\" DOP",
      "Servo Moteur haute précision",
      "Compteur de sachets à prédétermination",
      "Dispositifs de sécurité électrique"
    ],
    specs: [
      { label: "Vitesse d'emballage", value: "15 - 25 sacs/min" },
      { label: "Taille des sacs", value: "L: 80-360mm, l: 80-240mm" },
      { label: "Plage de remplissage", value: "10g - 2000g" },
      { label: "Largeur du film", value: "180 - 500 mm" },
      { label: "Consommation d'air", value: "0.36m3/min (7 bar)" },
      { label: "Alimentation", value: "AC380V 50/60Hz 3.8kW" },
      { label: "Poids", value: "400 KG" }
    ]
  },
  {
    id: "3",
    slug: "ensacheuse-a-balance",
    name: "Ensacheuse pondérale",
    category: "Ensacheuses",
    description: "Idéale pour les produits de formes irrégulières et les mélanges complexes.",
    longDescription: "Grâce à son système de balance linéaire ou multi-têtes, cette ensacheuse pondérale traite avec soin les produits délicats ou de formes variées tels que les pâtes, les snacks, les biscuits ou les fruits secs.",
    image: "https://i.postimg.cc/pRLwx7fd/enchaseuse-3.jpg",
    features: [
      "Garantie 1 an avec suivi de maintenance",
      "Utilisation du film à plat PE et PP",
      "Régulation automatique de la température de soudure",
      "Coupe du sachet par couteau à 2 étages",
      "Déroulement contrôlé du film",
      "Automate Delta DVP & Écran tactile 7\" DOP",
      "Servo Moteur haute précision",
      "Compteur de sachets à prédétermination",
      "Dispositifs de sécurité électrique"
    ],
    specs: [
      { label: "Vitesse d'emballage", value: "15 - 25 sacs/min" },
      { label: "Taille des sacs", value: "L: 80-360mm, l: 80-240mm" },
      { label: "Plage de remplissage", value: "10g - 2000g" },
      { label: "Largeur du film", value: "180 - 500 mm" },
      { label: "Consommation d'air", value: "0.36m3/min (7 bar)" },
      { label: "Alimentation", value: "AC380V 50/60Hz 3.8kW" },
      { label: "Poids", value: "400 KG" }
    ]
  },
  {
    id: "5",
    slug: "ensacheuse-ponderal-semi-automatique",
    name: "Ensacheuse pondéral semi-automatique",
    category: "Ensacheuses",
    description: "Machine de emballage pondéral semi-automatique pour céréales et grains (5 g – 1000 g)",
    longDescription: "Machine de remplissage pondéral semi-automatique conçue pour l’emballage précis de différents produits alimentaires comme le riz, les lentilles, le sucre, les fruits secs et autres grains. Elle garantit précision, facilité d’utilisation et productivité élevée.",
    image: "https://i.postimg.cc/xnX4xZks/Whats-App-Image-2026-03-12-at-21-11-12.jpg",
    features: [
      "Fabrication marocaine",
      "Garantie 1 an avec suivi de maintenance",
      "Facile à utiliser, rapide, améliore la productivité",
      "Précision de pesage haute précision",
      "Structure métallique résistante"
    ],
    specs: [
      { label: "Type de machine", value: "Remplisseuse pondérale semi-automatique" },
      { label: "Plage de poids", value: "5 g – 1000 g" },
      { label: "Produits compatibles", value: "Riz, lentilles, sucre, céréales, fruits secs, etc." },
      { label: "Mode de fonctionnement", value: "Semi-automatique" },
      { label: "Matériau", value: "Structure métallique résistante" },
      { label: "Utilisation", value: "Emballage alimentaire et agricole" }
    ]
  }
];
