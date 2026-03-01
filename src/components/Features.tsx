import { motion } from "motion/react";
import { Shield, Zap, MapPin, Users, Lightbulb, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Qualité",
    description: "La stabilité et la continuité grâce à une qualité constatée et suivie des gammes et des produits.",
    icon: Shield,
  },
  {
    title: "Proximité",
    description: "Ora Pack a respecté plus de 95% des délais de livraison grâce à l’esprit partenarial.",
    icon: MapPin,
  },
  {
    title: "Équipe",
    description: "Chez ORA PACK, toutes les machines sont pré-assemblées, raccordées et testées.",
    icon: Users,
  },
  {
    title: "R&D",
    description: "ORA PACK investit dans l’innovation pour offrir un savoir-faire industriel de pointe.",
    icon: Lightbulb,
  },
  {
    title: "Conseil",
    description: "Un partenaire fiable à 100% avec des livraisons rapides partout au Maroc.",
    icon: MessageSquare,
  },
  {
    title: "Performance",
    description: "Des machines optimisées pour une production intensive et une maintenance réduite.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.3em] mb-4">Pourquoi Nous Choisir</h2>
          <p className="text-4xl md:text-6xl font-display font-black tracking-tighter">
            L'EXPERTISE <span className="text-brand-red">ORA PACK</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-black/5 rounded-2xl hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-red/5 transition-all group"
            >
              <div className="w-16 h-16 bg-brand-black text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-brand-black/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
