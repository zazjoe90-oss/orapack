import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-brand-black/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-brand-red mb-6"
          />
          <h2 className="text-center text-3xl md:text-4xl font-black text-brand-black uppercase tracking-tighter">
            NOTRE <span className="text-brand-red">BLOG</span> & ACTUALITÉS
          </h2>
          <p className="text-black/50 mt-4 max-w-2xl text-center">
            Restez informé des dernières tendances du packaging et découvrez nos conseils d'experts pour optimiser votre production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/[0.03] border border-black/5 group flex flex-col h-full"
            >
              <Link to={`/blog/${post.slug}`} className="relative h-64 overflow-hidden block">
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-black/40 text-xs font-bold uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-brand-red" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-brand-red" />
                    {post.author}
                  </div>
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-black text-brand-black uppercase tracking-tight mb-4 leading-tight group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-black/50 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="pt-6 border-t border-black/5">
                  <Link 
                    to={`/blog/${post.slug}`}
                    aria-label={`Lire l'article : ${post.title}`}
                    className="flex items-center gap-2 text-brand-red font-black uppercase tracking-widest text-xs group/btn"
                  >
                    Lire l'article <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/blog"
            aria-label="Voir tous les articles du blog"
            className="inline-block bg-brand-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand-red transition-all shadow-2xl shadow-black/10"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
}
