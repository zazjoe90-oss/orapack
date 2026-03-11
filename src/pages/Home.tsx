import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Applications from "../components/Applications";
import Process from "../components/Process";
import Contact from "../components/Contact";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ORA PACK | N°1 du Packaging au Maroc - Ensacheuses Verticales & Automatiques</title>
        <meta name="description" content="ORA PACK est le leader marocain de la fabrication de machines d'emballage automatiques. Spécialiste des ensacheuses verticales, peseuses et lignes de conditionnement à Casablanca. Qualité certifiée et SAV réactif." />
        <meta name="keywords" content="packaging maroc, emballage maroc, ensacheuse verticale, machine emballage casablanca, ORA PACK, conditionnement automatique, ensacheuse à vis, ensacheuse à balance, convoyeur industriel maroc" />
        <link rel="canonical" href="https://orapack.ma/" />
        
        {/* LCP Optimization: Preload Hero Image */}
        <link 
          rel="preload" 
          as="image" 
          href="https://i.postimg.cc/3KF1kr7R/Whats-App-Image-2026-03-01-at-12-27-45.jpg" 
          fetchpriority="high" 
        />
        
        {/* Preload Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <meta property="og:title" content="ORA PACK | Solutions d'Emballage Automatiques au Maroc" />
        <meta property="og:description" content="Découvrez nos solutions de packaging innovantes fabriquées au Maroc. Performance, précision et fiabilité pour votre ligne de production." />
        <meta property="og:image" content="https://i.postimg.cc/3KF1kr7R/Whats-App-Image-2026-03-01-at-12-27-45.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orapack.ma/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ORA PACK | Leader de l'Emballage au Maroc" />
        <meta name="twitter:description" content="Fabricant de machines d'emballage de haute précision à Casablanca." />
        <meta name="twitter:image" content="https://i.postimg.cc/3KF1kr7R/Whats-App-Image-2026-03-01-at-12-27-45.jpg" />
        <meta name="robots" content="index, follow" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ORA PACK",
            "image": "https://i.postimg.cc/3KF1kr7R/Whats-App-Image-2026-03-01-at-12-27-45.jpg",
            "@id": "https://orapack.ma",
            "url": "https://orapack.ma",
            "telephone": "+212661876491",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Tit Mellil",
              "addressLocality": "Casablanca",
              "addressCountry": "MA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.5583,
              "longitude": -7.4833
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            }
          })}
        </script>
      </Helmet>
      <Hero />
      
      <About />
      
      <Products />
      
      <Applications />
      
      <Process />

      {/* Trusted By Section (Enhanced) */}
      <section className="py-12 bg-white border-y border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              className="h-1 bg-brand-red mb-4"
            />
            <h2 className="text-center text-xl md:text-2xl font-black text-brand-black uppercase tracking-tighter">
              NOS PARTENAIRES <span className="text-brand-red">STRATÉGIQUES</span>
            </h2>
          </div>
          <div className="relative overflow-hidden py-4 bg-brand-black/[0.01] rounded-[2rem]">
            {/* Side Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            
            <motion.div 
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{ 
                duration: 25, 
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
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="w-48 h-32 flex items-center justify-center transition-all flex-shrink-0 bg-white rounded-2xl shadow-lg shadow-black/[0.02] border border-black/[0.04] mx-4 p-4"
                    >
                      <img 
                        src={url} 
                        alt="Partenaire" 
                        className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
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
