export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "importance-automatisation-agroalimentaire-maroc",
    title: "L'importance de l'automatisation dans l'industrie agroalimentaire au Maroc",
    excerpt: "Découvrez comment l'automatisation transforme les lignes de production marocaines et booste la compétitivité des entreprises locales.",
    content: `
      <p>L'industrie agroalimentaire au Maroc connaît une transformation sans précédent. Avec l'émergence de nouvelles technologies, l'automatisation est devenue un levier stratégique pour les entreprises souhaitant rester compétitives sur le marché national et international.</p>
      
      <h2>Pourquoi automatiser vos lignes de production ?</h2>
      <p>L'automatisation permet non seulement d'augmenter la cadence de production, mais aussi de garantir une hygiène irréprochable, un critère crucial dans l'agroalimentaire. Nos ensacheuses verticales ORA PACK sont conçues pour répondre à ces exigences strictes.</p>
      
      <ul>
        <li>Réduction des pertes de matières premières</li>
        <li>Précision de dosage inégalée</li>
        <li>Traçabilité optimisée</li>
      </ul>

      <blockquote>"L'automatisation n'est plus une option, c'est une nécessité pour la survie de l'industrie locale."</blockquote>

      <p>Chez ORA PACK, nous accompagnons les industriels marocains dans cette transition en proposant des solutions robustes, fabriquées localement avec des standards internationaux.</p>
    `,
    date: "15 Fév 2026",
    author: "Expert ORA PACK",
    image: "https://i.postimg.cc/YCvpTj2S/1.webp",
    category: "Industrie"
  },
  {
    id: 2,
    slug: "comment-choisir-ensacheuse-verticale-guide",
    title: "Comment choisir votre ensacheuse verticale : Le guide complet",
    excerpt: "Vitesse, précision, type de film... tous les critères essentiels pour investir dans la machine d'emballage adaptée à vos besoins.",
    content: `
      <p>Investir dans une ensacheuse verticale est une décision majeure pour votre entreprise. Ce guide vous aide à naviguer parmi les options techniques pour faire le meilleur choix.</p>
      
      <h2>Les critères de sélection essentiels</h2>
      <p>Avant d'acheter, vous devez définir précisément vos besoins en termes de volume et de type de produit (poudre, grains, liquide).</p>
      
      <h3>1. La cadence de production</h3>
      <p>Combien de sachets par minute devez-vous produire ? Nos machines offrent des cadences allant de 20 à 100 sachets/min selon les modèles.</p>
      
      <h3>2. Le type de film d'emballage</h3>
      <p>Polypropylène, complexe, biodégradable... votre machine doit être compatible avec le matériau choisi.</p>

      <p>ORA PACK propose des audits gratuits pour vous aider à dimensionner votre équipement de manière optimale.</p>
    `,
    date: "10 Fév 2026",
    author: "Bureau d'Études",
    image: "https://i.postimg.cc/sgbVzy1r/2.webp",
    category: "Guide"
  },
  {
    id: 3,
    slug: "ora-pack-innovation-marocaine-packaging",
    title: "ORA PACK : L'innovation marocaine au service du packaging mondial",
    excerpt: "Retour sur notre parcours depuis 2020 et notre vision pour l'avenir de la fabrication de machines d'emballage au Maroc.",
    date: "05 Fév 2026",
    author: "Direction",
    image: "https://i.postimg.cc/JzS18mt8/3.webp",
    category: "Actualités",
    content: `
      <p>Depuis notre création en 2020, ORA PACK s'est imposé comme le leader de la fabrication de machines d'emballage au Maroc. Notre secret ? Une ingénierie 100% marocaine alliée à une exigence de qualité mondiale.</p>
      
      <h2>Une vision pour l'industrie marocaine</h2>
      <p>Nous croyons fermement au potentiel du "Made in Morocco". En fabriquant nos machines localement, nous offrons une proximité inégalée à nos clients, notamment pour le service après-vente et la fourniture de pièces de rechange.</p>

      <p>Nos ingénieurs travaillent quotidiennement sur des innovations permettant de réduire l'empreinte carbone du packaging tout en augmentant la performance industrielle.</p>
    `
  },
  {
    id: 4,
    slug: "maintenance-preventive-maximiser-duree-vie-machines",
    title: "Maintenance préventive : Maximisez la durée de vie de vos machines",
    excerpt: "Nos conseils d'experts pour entretenir vos équipements et éviter les arrêts de production coûteux.",
    date: "28 Jan 2026",
    author: "SAV Technique",
    image: "https://i.postimg.cc/YCvpTj2S/1.webp",
    category: "Maintenance",
    content: `
      <p>Un arrêt de production imprévu peut coûter des milliers de dirhams. La maintenance préventive est la clé pour assurer la longévité de vos ensacheuses ORA PACK.</p>
      
      <h2>Check-list de maintenance quotidienne</h2>
      <ul>
        <li>Nettoyage des mâchoires de soudure</li>
        <li>Vérification de la tension du film</li>
        <li>Lubrification des parties mobiles</li>
      </ul>

      <p>Nous proposons des contrats de maintenance personnalisés pour que vous puissiez vous concentrer sur votre cœur de métier pendant que nous veillons sur vos machines.</p>
    `
  },
  {
    id: 5,
    slug: "tendances-2026-packaging-eco-responsable-maroc",
    title: "Tendances 2026 : Le packaging éco-responsable au Maroc",
    excerpt: "Comment adapter vos machines aux nouveaux matériaux biodégradables et répondre aux attentes des consommateurs.",
    date: "20 Jan 2026",
    author: "R&D",
    image: "https://i.postimg.cc/sgbVzy1r/2.webp",
    category: "Innovation",
    content: `
      <p>L'année 2026 marque un tournant pour le packaging au Maroc. Les consommateurs sont de plus en plus sensibles à l'impact environnemental des emballages.</p>
      
      <h2>L'adaptation aux nouveaux matériaux</h2>
      <p>Nos nouvelles lignes de conditionnement sont désormais compatibles avec les films papier et les bioplastiques. Cette flexibilité permet à nos clients de s'adapter rapidement aux nouvelles réglementations écologiques.</p>

      <p>L'innovation chez ORA PACK passe par la durabilité. Nous aidons nos partenaires à réduire l'épaisseur des films sans compromettre la protection du produit.</p>
    `
  }
];
