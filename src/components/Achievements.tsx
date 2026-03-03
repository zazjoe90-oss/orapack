import { motion } from "motion/react";

const achievements = [
  {
    title: "Ensacheuse Verticale",
    category: "Machine",
    image: "https://picsum.photos/seed/machine1/600/800",
  },
  {
    title: "Ligne de Conditionnement",
    category: "Solution",
    image: "https://picsum.photos/seed/machine2/600/800",
  },
  {
    title: "Système de Pesage",
    category: "Composant",
    image: "https://picsum.photos/seed/machine3/600/800",
  },
  {
    title: "Convoyeur Automatique",
    category: "Accessoire",
    image: "https://picsum.photos/seed/machine4/600/800",
  },
];

export default function Achievements() {
  return (
    <section id="accessoire" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.3em] mb-4">Nos Réalisations</h2>
            <p className="text-4xl md:text-6xl font-display font-black tracking-tighter">
              PROJETS <span className="text-brand-red">RÉCENTS</span>
            </p>
          </div>
          <p className="text-brand-black/60 max-w-md text-lg">
            Découvrez nos dernières installations chez nos partenaires industriels à travers tout le Maroc.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-black"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="h-full w-full object-cover opacity-60 grayscale group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-brand-red text-xs font-bold uppercase tracking-widest mb-1">{item.category}</div>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
