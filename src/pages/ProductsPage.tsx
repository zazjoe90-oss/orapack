import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowUpRight, Plus } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Helmet>
        <title>Nos Solutions d'Emballage | ORA PACK Maroc</title>
        <meta name="description" content="Découvrez notre gamme complète de machines d'emballage et de conditionnement de haute précision fabriquées au Maroc." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            className="h-1.5 bg-brand-red mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            NOS <span className="text-brand-red">PRODUITS</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Une expertise marocaine au service de votre productivité. Découvrez nos machines 
            de conditionnement conçues pour l'excellence et la durabilité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 hover:border-brand-red transition-all duration-500 flex flex-col"
            >
              <Link to={`/produit/${product.slug}`} className="flex flex-col h-full">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute top-8 left-8 px-5 py-2 bg-white/90 backdrop-blur-sm text-brand-black rounded-full text-xs font-black uppercase tracking-widest">
                    {product.category}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight group-hover:text-brand-red transition-colors">
                      {product.name}
                    </h2>
                    <div className="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center group-hover:bg-brand-red transition-all transform group-hover:rotate-45">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-brand-red font-black uppercase tracking-widest text-sm">
                      Voir les détails
                    </span>
                    <div className="flex gap-2">
                      {product.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-200 rounded-full text-[10px] font-bold text-gray-600 uppercase">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-brand-black rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
              BESOIN D'UNE SOLUTION <br />
              <span className="text-brand-red">SUR MESURE ?</span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
              Nos ingénieurs vous accompagnent dans la conception de votre ligne 
              de production complète, de l'étude à l'installation.
            </p>
            <Link 
              to="/#contact"
              className="inline-block px-12 py-6 bg-brand-red text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all shadow-2xl shadow-brand-red/20"
            >
              Contactez nos experts
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
