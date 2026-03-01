import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-black mb-8">Article non trouvé</h1>
        <Link to="/blog" className="text-brand-red font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <ArrowLeft size={20} /> Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Helmet>
        <title>{post.title} | Blog ORA PACK</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://orapack.ma/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero Header */}
      <div className="bg-brand-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E31E24_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog" className="text-brand-red font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-8 hover:text-white transition-colors">
              <ArrowLeft size={14} /> Retour au blog
            </Link>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-white/40 text-sm font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-brand-red" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-brand-red" />
                {post.author}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full aspect-video object-cover rounded-[2.5rem] shadow-2xl mb-12"
            referrerPolicy="no-referrer"
          />
          
          <div 
            className="prose prose-lg max-w-none 
              prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-brand-black
              prose-p:text-black/70 prose-p:leading-relaxed
              prose-strong:text-brand-black prose-strong:font-black
              prose-blockquote:border-l-brand-red prose-blockquote:bg-brand-red/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
              prose-ul:list-disc prose-ul:marker:text-brand-red
              prose-li:text-black/70"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />

          <div className="mt-20 pt-10 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-brand-red" />
              <span className="text-xs font-black uppercase tracking-widest text-black/40">Tags: Packaging, Maroc, Industrie</span>
            </div>
            <div className="flex gap-4">
              <button className="text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full border border-black/10 hover:bg-brand-black hover:text-white transition-all">
                Partager
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Posts Section (Optional) */}
      <div className="bg-brand-black/[0.02] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-12">Articles <span className="text-brand-red">Similaires</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-black/5 h-full transition-all group-hover:-translate-y-2">
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-black uppercase tracking-tight text-sm leading-tight group-hover:text-brand-red transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
