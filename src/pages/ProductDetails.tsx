import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { products } from "../data/products";
import { ChevronLeft, CheckCircle2, ArrowRight, Settings, ShieldCheck, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Produit non trouvé</h1>
          <Link to="/" className="text-brand-red font-bold flex items-center justify-center gap-2">
            <ChevronLeft size={20} /> Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-white">
      <Helmet>
        <title>{product.name} | ORA PACK Maroc</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <Link to="/" className="text-gray-500 hover:text-brand-red transition-colors flex items-center gap-2 text-sm font-medium">
            <ChevronLeft size={16} /> Retour aux produits
          </Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-gray-100 border border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red rounded-full text-xs font-black uppercase tracking-widest mb-6">
              {product.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                  <span className="text-sm font-bold text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-brand-red text-white px-8 py-4 rounded-full font-black uppercase tracking-widest flex items-center gap-3 hover:bg-brand-black transition-all shadow-xl shadow-brand-red/20"
              >
                Demander un devis <ArrowRight size={20} />
              </a>
              <button className="px-8 py-4 rounded-full border-2 border-brand-black text-brand-black font-black uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all">
                Fiche Technique
              </button>
            </div>
          </motion.div>
        </div>

        {/* Specifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">
                Spécifications <br />
                <span className="text-brand-red">Techniques</span>
              </h2>
              <p className="text-gray-500">
                Des performances industrielles conçues pour durer. Chaque composant est sélectionné pour sa fiabilité.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Settings className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest">Précision</div>
                    <div className="text-xs text-gray-500">Contrôle électronique avancé</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest">Sécurité</div>
                    <div className="text-xs text-gray-500">Normes CE & Hygiène</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Zap className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest">Vitesse</div>
                    <div className="text-xs text-gray-500">Optimisation des cycles</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-brand-black rounded-[2.5rem] p-8 md:p-12 text-white">
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="border-b border-white/10 pb-4">
                      <div className="text-brand-red text-xs font-black uppercase tracking-widest mb-1">
                        {spec.label}
                      </div>
                      <div className="text-2xl font-bold tracking-tight">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Related Products */}
        <section className="mt-32">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 text-center">
            Autres <span className="text-brand-red">Solutions</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/produit/${p.slug}`}
                  className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-brand-red transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-brand-red transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
