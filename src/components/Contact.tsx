import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.3em] mb-4">Contactez-Nous</h2>
            <p className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8">
              PARLONS DE VOTRE <br />
              <span className="text-brand-red">PROJET</span>
            </p>
            <p className="text-brand-black/60 text-lg mb-12 max-w-md">
              Besoin d'un conseil technique ou d'un devis personnalisé ? Notre équipe est à votre disposition pour vous accompagner.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-sm mb-1">Adresse</div>
                  <p className="text-brand-black/60">Tit Mellil, Casablanca, Maroc</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-sm mb-1">Email</div>
                  <p className="text-brand-black/60">contact@orapack.ma</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-sm mb-1">WhatsApp</div>
                  <p className="text-brand-black/60">+212 661-876491</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-sm mb-1">Facebook</div>
                  <a href="https://web.facebook.com/Orapack.sarl/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="text-brand-black/60 hover:text-brand-red transition-colors">Orapack SARL</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider text-sm mb-1">Horaires</div>
                  <p className="text-brand-black/60">Lundi - Samedi : 8h00 - 18h00</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-black p-8 md:p-12 rounded-3xl text-white"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Nom Complet</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-red outline-none transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Entreprise</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-red outline-none transition-colors"
                    placeholder="Nom de votre société"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-red outline-none transition-colors"
                  placeholder="contact@entreprise.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-red outline-none transition-colors resize-none"
                  placeholder="Décrivez votre besoin..."
                ></textarea>
              </div>
              <button className="w-full bg-brand-red text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white hover:text-brand-black transition-all group">
                Envoyer le Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
