import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import { ArrowRight, Play, ChevronRight, Sparkles, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const heroImages = [
  "https://i.postimg.cc/YCvpTj2S/1.webp",
  "https://i.postimg.cc/sgbVzy1r/2.webp",
  "https://i.postimg.cc/JzS18mt8/3.webp"
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-20 overflow-hidden bg-brand-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#E31E24_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/20 blur-[120px] rounded-full"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-1/2 -left-24 w-72 h-72 bg-brand-red/10 blur-[100px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
            >
              <Sparkles className="text-brand-red w-4 h-4 animate-pulse" />
              <span className="text-brand-red">N°1 AU MAROC</span> — SOLUTIONS D'EMBALLAGE
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.85] font-black tracking-tighter">
              L'AVENIR DU <br />
              <span className="text-brand-red relative inline-block">
                PACKAGING
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-red/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span> <br />
              EST ICI.
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xl text-white/50 mb-12 max-w-xl font-light leading-relaxed">
                Propulsez votre production avec nos <span className="text-white font-medium">Ensacheuses Verticales</span> de nouvelle génération. Performance marocaine, standards internationaux.
              </p>

              <div className="flex flex-wrap gap-5">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-red text-white px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-brand-red/20 group"
                >
                  Explorer nos Machines <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
                <motion.button 
                  onClick={() => setIsVideoOpen(true)}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="border border-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-sm"
                >
                  <Play size={20} className="fill-brand-red text-brand-red" /> Voir en Action
                </motion.button>
              </div>
            </motion.div>

            <div className="mt-16 grid grid-cols-3 gap-10 border-t border-white/10 pt-10">
              {[
                { label: "Machines", val: 500, suffix: "+" },
                { label: "Clients", val: 120, suffix: "+" },
                { label: "Régions", val: 12, suffix: "" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-4xl font-black text-white mb-1">
                    <Counter value={stat.val} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] text-white/30 uppercase font-bold tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="relative group">
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 z-30 bg-white p-4 rounded-2xl shadow-2xl border border-black/5 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center">
                    <ChevronRight className="text-brand-red" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Technologie</div>
                    <div className="text-sm font-black text-brand-black uppercase">Précision Max</div>
                  </div>
                </div>
              </motion.div>

              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(227,30,36,0.15)] bg-brand-black aspect-[4/5]">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImage}
                    src={heroImages[currentImage]} 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1 }}
                    alt="Ensacheuse Verticale Orapack" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-8 left-8 right-8 p-8 glass-card rounded-3xl border-white/10">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-brand-red text-xs font-black uppercase tracking-widest mb-2">Série Premium</div>
                      <h3 className="text-brand-black text-2xl font-black uppercase tracking-tighter">Ensacheuse V-2025</h3>
                    </div>
                    <div className="bg-brand-red text-white p-3 rounded-xl">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] -z-10 animate-pulse"></div>
              <div className="absolute -inset-8 border border-white/5 rounded-[3rem] -z-20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-brand-red text-white rounded-full transition-all backdrop-blur-md"
              >
                <X size={24} />
              </button>
              <iframe 
                src="https://www.youtube.com/embed/8QMoMaCsxkU?autoplay=1" 
                title="ORA PACK Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
