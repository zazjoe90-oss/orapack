import Blog from "../components/Blog";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function BlogPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Helmet>
        <title>Blog ORA PACK | Actualités Packaging & Industrie au Maroc</title>
        <meta name="description" content="Suivez les dernières tendances du packaging, de l'automatisation industrielle et de l'innovation technologique au Maroc avec les experts d'ORA PACK." />
        <link rel="canonical" href="https://orapack.ma/blog" />
        <meta property="og:title" content="Blog ORA PACK | Actualités Packaging & Industrie au Maroc" />
        <meta property="og:description" content="Suivez les dernières tendances du packaging, de l'automatisation industrielle et de l'innovation technologique au Maroc." />
        <meta property="og:image" content="https://i.postimg.cc/sgbVzy1r/2.webp" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-brand-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E31E24_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            NOTRE <span className="text-brand-red">BLOG</span>
          </motion.h1>
          <p className="text-white/60 text-xl mt-6 max-w-2xl font-light">
            Expertise, innovations et actualités du packaging au Maroc.
          </p>
        </div>
      </div>
      <Blog />
    </div>
  );
}
