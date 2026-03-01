import Blog from "../components/Blog";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function BlogPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
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
