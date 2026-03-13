import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Products() {
  return (
    <section id="produits" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              className="h-1 bg-brand-red mb-6"
            />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              NOS <span className="text-brand-red">PRODUITS</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Une gamme complète de machines de haute précision, conçues et fabriquées au Maroc 
              pour répondre aux standards internationaux de performance.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-8xl font-black text-black/5 select-none">PRECISION</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-brand-red transition-all duration-500"
            >
              <Link to={`/produit/${product.slug}`} className="grid sm:grid-cols-2 h-full">
                {/* Image Side */}
                <div className="relative h-64 sm:h-auto overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-brand-black rounded-full text-[10px] font-black uppercase tracking-widest self-start">
                      {product.category}
                    </div>
                    <div className="px-3 py-1.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 text-brand-black rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1.5 self-start shadow-xl shadow-amber-500/10 border border-amber-300/50">
                      <ShieldCheck size={12} />
                      Garantie 1 an
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-brand-red transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-8 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-brand-black font-black uppercase tracking-widest text-xs group/btn">
                      En savoir plus 
                      <ArrowUpRight size={18} className="group-hover/btn:text-brand-red transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
              to="/produits"
              className="px-12 py-5 bg-brand-black text-white rounded-full font-black uppercase tracking-widest hover:bg-brand-red transition-all shadow-xl shadow-black/10"
            >
              Consulter le catalogue complet
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
