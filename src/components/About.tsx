import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.3em] mb-4">À Propos de Nous</h2>
              <p className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-8 leading-tight">
                FABRICANT DE MACHINES <br />
                D'EMBALLAGE AU <span className="text-brand-red">MAROC</span>
              </p>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                ORAPACK se spécialise principalement dans la fabrication de machines d’emballage, créée en 2020. L’histoire et l’échelle de l’entreprise reflètent la stabilité de l’équipement et notre engagement envers l'industrie locale.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Conception CAO personnalisée",
                  "Fabrication locale de haute précision",
                  "Service Après-Vente réactif",
                  "Bureau d'étude et méthode R&D",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-red" size={20} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-white text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all">
                En savoir plus
              </button>
            </motion.div>
            
            {/* Decorative background text */}
            <div className="absolute -top-20 -left-20 text-[15rem] font-black text-white/5 select-none pointer-events-none">
              ORA
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img 
                src="https://picsum.photos/seed/industrial-factory-1/400/500" 
                alt="Factory" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="bg-brand-red p-6 rounded-2xl">
                <div className="text-4xl font-black mb-1">95%</div>
                <div className="text-xs uppercase tracking-widest opacity-80">Délais Respectés</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 mt-8"
            >
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="text-xs uppercase tracking-widest opacity-80">Fiabilité Partenaire</div>
              </div>
              <img 
                src="https://picsum.photos/seed/industrial-factory-2/400/500" 
                alt="Factory" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
