import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Settings, Cpu, Truck, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Analyse",
    desc: "Étude approfondie de vos besoins et de vos produits. Nous analysons chaque détail pour garantir une solution optimale.",
    icon: Search,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Conception",
    desc: "Design CAO sur mesure par notre bureau d'étude. Utilisation des dernières technologies de modélisation 3D.",
    icon: Settings,
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Fabrication",
    desc: "Assemblage et tests rigoureux dans nos ateliers. Une précision millimétrée pour une qualité industrielle.",
    icon: Cpu,
    color: "from-brand-red/20 to-transparent"
  },
  {
    title: "Livraison",
    desc: "Installation et formation partout au Maroc. Un accompagnement complet pour votre mise en service.",
    icon: Truck,
    color: "from-emerald-500/20 to-transparent"
  },
];

export default function Process() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const nextStep = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const step = steps[currentIndex];

  return (
    <section 
      className="py-24 bg-brand-black text-white relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold text-brand-red uppercase tracking-[0.3em] mb-4"
          >
            Notre Processus
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black tracking-tighter"
          >
            DE L'IDÉE À LA <span className="text-brand-red">PRODUCTION</span>
          </motion.p>
        </div>

        <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full max-w-4xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl">
                <div className="relative">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br ${step.color} border border-white/10 rounded-3xl flex items-center justify-center mb-0 mx-auto md:mx-0`}
                  >
                    <step.icon size={64} className="text-brand-red" />
                  </motion.div>
                  <div className="absolute -top-4 -left-4 text-8xl font-black text-white/5 pointer-events-none">
                    0{currentIndex + 1}
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-brand-red text-sm font-black uppercase tracking-widest mb-4"
                  >
                    Étape 0{currentIndex + 1}
                  </motion.div>
                  <motion.h3 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/60 text-lg leading-relaxed"
                  >
                    {step.desc}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-5xl flex justify-between px-2 md:px-0 pointer-events-none">
            <button
              onClick={prevStep}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all pointer-events-auto group -translate-x-1/2 md:-translate-x-full"
            >
              <ChevronLeft className="text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextStep}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all pointer-events-auto group translate-x-1/2 md:translate-x-full"
            >
              <ChevronRight className="text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-4 mt-12">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === currentIndex ? "w-12 bg-brand-red" : "w-4 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
