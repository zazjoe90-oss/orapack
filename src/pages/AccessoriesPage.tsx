import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, Settings, Wrench, Cpu } from "lucide-react";

const accessories = [
  {
    id: 1,
    name: "Kit de remplacement de courroie 25T10 560mm 610",
    description: "Kit complet de courroies de haute résistance pour ensacheuses verticales. Conçu pour une durabilité maximale et une transmission de puissance optimale.",
    image: "https://i.postimg.cc/mLSnWNhV/belt-accesorie.jpg",
    icon: <Settings className="w-6 h-6" />,
    features: ["Résistance thermique", "Haute précision", "Installation rapide"]
  },
  {
    id: 2,
    name: "Conformateur sur mesure",
    description: "Conformateurs en acier inoxydable fabriqués selon vos spécifications exactes pour tout type de film et de format de sachet.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    icon: <Wrench className="w-6 h-6" />,
    features: ["Inox 316L", "Finition miroir", "Anti-adhérent"]
  },
  {
    id: 3,
    name: "Panneau de commande intelligent multifonction",
    description: "Système de contrôle intelligent par micro-ordinateur pour machines d'emballage. Permet un réglage précis du poids, le comptage automatique des sacs et la gestion de la vitesse de production.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1794ed9?auto=format&fit=crop&q=80&w=800",
    icon: <Cpu className="w-6 h-6" />,
    features: ["Réglage du poids (g)", "Calcul automatique des paquets", "Vitesse réglable (3 niveaux)"]
  }
];

export default function AccessoriesPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Helmet>
        <title>Accessoires & Pièces de Rechange | ORA PACK Maroc</title>
        <meta name="description" content="Découvrez nos accessoires et pièces de rechange pour machines d'emballage : courroies, conformateurs, et panneaux de commande." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            className="h-1.5 bg-brand-red mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            ACCESSOIRES & <span className="text-brand-red">PIÈCES</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Garantissez la longévité de vos équipements avec nos pièces d'origine et accessoires 
            conçus sur mesure pour vos machines d'emballage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {accessories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-brand-red transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-red shadow-lg">
                  {item.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-brand-red transition-colors">
                  {item.name}
                </h2>
                
                <p className="text-gray-600 mb-8 flex-grow">
                  {item.description}
                </p>

                <div className="space-y-3 mb-8">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  to="/#contact"
                  className="flex items-center justify-between w-full py-4 px-6 bg-brand-black text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-red transition-all"
                >
                  Demander un devis
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-brand-red rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
              ASSISTANCE TECHNIQUE <br />
              <span className="text-brand-black">24/7</span>
            </h3>
            <p className="text-white/80 text-lg">
              Besoin d'une pièce spécifique ou d'un conseil technique ? Nos experts sont là pour vous aider à maintenir votre production.
            </p>
          </div>
          <a 
            href="tel:+212661876491"
            className="px-10 py-5 bg-white text-brand-red rounded-full font-black uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all shadow-xl"
          >
            Appeler le SAV
          </a>
        </motion.div>
      </div>
    </div>
  );
}
