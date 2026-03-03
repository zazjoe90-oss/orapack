import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Applications from "../components/Applications";
import Process from "../components/Process";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ORA PACK | N°1 du Packaging au Maroc - Ensacheuses Verticales</title>
        <meta name="description" content="ORA PACK est le leader marocain de la fabrication de machines d'emballage automatiques. Spécialiste des ensacheuses verticales, peseuses et lignes de conditionnement à Casablanca." />
        <meta name="keywords" content="packaging maroc, emballage maroc, ensacheuse verticale, machine emballage casablanca, ORA PACK, conditionnement automatique" />
        <link rel="canonical" href="https://orapack.ma/" />
        <meta property="og:title" content="ORA PACK | Solutions d'Emballage Automatiques au Maroc" />
        <meta property="og:description" content="Découvrez nos solutions de packaging innovantes fabriquées au Maroc. Performance et précision pour votre production." />
        <meta property="og:image" content="https://i.postimg.cc/YCvpTj2S/1.webp" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      
      {/* Trusted By Section (Enhanced) */}
      <section className="py-12 bg-white border-y border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              className="h-1 bg-brand-red mb-6"
            />
            <h2 className="text-center text-2xl md:text-3xl font-black text-brand-black uppercase tracking-tighter">
              NOS PARTENAIRES <span className="text-brand-red">STRATÉGIQUES</span>
            </h2>
            <p className="text-[10px] font-bold text-black/40 uppercase tracking-[0.4em] mt-2">Ils nous font confiance</p>
          </div>
          <div className="relative overflow-hidden py-8 bg-brand-black/[0.02] rounded-[4rem]">
            {/* Side Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div 
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center whitespace-nowrap"
            >
              {[...Array(3)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center">
                  {[
                    "https://i.postimg.cc/28vbMH03/L1.jpg",
                    "https://i.postimg.cc/SN823ZgR/L2.jpg",
                    "https://i.postimg.cc/RVf6yPg3/L3.jpg",
                    "https://i.postimg.cc/GhY8VMX4/L4.jpg",
                    "https://i.postimg.cc/Fscd8PTk/L5-1.jpg",
                    "https://i.postimg.cc/02mMFtVw/L6.jpg"
                  ].map((url, i) => (
                    <motion.div 
                      key={`${groupIndex}-${i}`} 
                      whileHover={{ scale: 1.05, y: -12 }}
                      className="w-[32rem] h-80 flex items-center justify-center transition-all flex-shrink-0 bg-white rounded-[3rem] shadow-xl shadow-black/[0.03] border border-black/[0.06] mx-8 p-4"
                    >
                      <img 
                        src={url} 
                        alt="Partenaire" 
                        className="max-w-full max-h-full object-contain transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <About />
      <Features />
      <Applications />
      
      {/* Video Demonstration Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-center text-3xl md:text-4xl font-black text-brand-black uppercase tracking-tighter mb-4">
              DÉMONSTRATION <span className="text-brand-red">VIDÉO</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-red rounded-full" />
            <p className="text-black/50 mt-6 max-w-2xl text-center text-lg">
              Découvrez nos machines en action et constatez la précision et la rapidité de nos solutions d'emballage.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video w-full max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-8 border-white group"
          >
            <iframe 
              src="https://www.youtube.com/embed/8QMoMaCsxkU" 
              title="ORA PACK Video Demonstration"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Process />
      <Achievements />
      
      <Blog limit={3} />

      {/* CTA Section (Enhanced) */}
      <section className="py-32 bg-brand-red relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-64 -right-64 w-[600px] h-[600px] border border-white/10 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] border border-white/10 rounded-full"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter mb-10 leading-[0.9]"
          >
            VOTRE RÉUSSITE <br />
            COMMENCE <span className="text-brand-black">ICI.</span>
          </motion.h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
            Ne laissez pas votre production au hasard. Choisissez la précision, choisissez ORA PACK.
          </p>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-brand-red px-16 py-6 rounded-full font-black uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            Démarrer un Projet
          </motion.a>
        </div>
      </section>

      <Contact />
    </>
  );
}
