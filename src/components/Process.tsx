import { motion } from "motion/react";
import { Search, Settings, Cpu, Truck } from "lucide-react";

const steps = [
  {
    title: "Analyse",
    desc: "Étude approfondie de vos besoins et de vos produits.",
    icon: Search,
  },
  {
    title: "Conception",
    desc: "Design CAO sur mesure par notre bureau d'étude.",
    icon: Settings,
  },
  {
    title: "Fabrication",
    desc: "Assemblage et tests rigoureux dans nos ateliers.",
    icon: Cpu,
  },
  {
    title: "Livraison",
    desc: "Installation et formation partout au Maroc.",
    icon: Truck,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.3em] mb-4">Notre Processus</h2>
          <p className="text-4xl md:text-6xl font-display font-black tracking-tighter">
            DE L'IDÉE À LA <span className="text-brand-red">PRODUCTION</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -10, 10, 0],
                    boxShadow: "0px 0px 20px rgba(227, 30, 36, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon size={40} className="text-brand-red group-hover:text-white transition-colors" />
                  </motion.div>
                </motion.div>
                <div className="text-brand-red text-xs font-black uppercase tracking-widest mb-2">Étape 0{index + 1}</div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{step.title}</h3>
                <p className="text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
