import { motion } from "motion/react";
import { Coffee, Droplets, Box, Utensils, Zap, ShoppingBag } from "lucide-react";

const applications = [
  {
    title: "Grains & Semoules",
    description: "Couscous, riz, lentilles, pois chiches et autres produits granulaires.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Poudres & Épices",
    description: "Farine, épices, café moulu, lait en poudre et produits pulvérulents.",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Liquides & Visqueux",
    description: "Sauces, huiles, miel, shampoing et produits liquides ou pâteux.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Snacks & Confiserie",
    description: "Chips, bonbons, biscuits, chocolats et produits de grignotage.",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Produits Surgelés",
    description: "Légumes surgelés, fruits de mer, viandes et produits à basse température.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Fruits secs",
    description: "Amandes, noix, dattes, abricots secs et mélanges de fruits séchés.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 bg-brand-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              className="h-1 bg-brand-red mb-6"
            />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              APPLICATIONS <br />
              <span className="text-brand-red">CONDITIONNEMENT VERTICAL</span>
            </h2>
            <p className="text-white/60 text-lg">
              Nos machines s'adaptent à une vaste gamme de produits, garantissant une précision 
              et une protection optimales pour chaque type de contenu.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-8xl font-black text-white/5 select-none">VERSATILITÉ</div>
          </div>
        </div>

        <div className="block-expand-categories">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="expand-category group"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={app.image} 
                  alt={app.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="category-content">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-brand-red/20">
                    <app.icon size={24} className="text-white" />
                  </div>
                  <h3 className="category-title">{app.title}</h3>
                  <p className="category-description">
                    {app.description}
                  </p>
                </div>
                
                <div className="h-1 w-0 group-hover:w-full bg-brand-red transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
