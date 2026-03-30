import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Phone, Mail, Send, Facebook } from "lucide-react";
import { useState } from "react";

export default function QuickContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden"
          >
            <div className="bg-brand-red p-6 text-white">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-black uppercase tracking-tighter text-xl">Contact Rapide</h3>
                <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                  <X size={20} />
                </button>
              </div>
              <p className="text-white/80 text-xs uppercase tracking-widest font-bold">Réponse en moins de 2h</p>
            </div>
            
            <div className="p-6 space-y-4">
              <a href="https://wa.me/212661876491" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-black/5 hover:bg-brand-red hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-red group-hover:bg-white/20 group-hover:text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">WhatsApp</div>
                  <div className="font-bold">+212 661-876491</div>
                </div>
              </a>

              <a href="https://web.facebook.com/Orapack.sarl/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-black/5 hover:bg-brand-red hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-red group-hover:bg-white/20 group-hover:text-white">
                  <Facebook size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Facebook</div>
                  <div className="font-bold">Orapack SARL</div>
                </div>
              </a>
              
              <a href="mailto:contact@orapack.net" className="flex items-center gap-4 p-4 rounded-2xl bg-black/5 hover:bg-brand-red hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-red group-hover:bg-white/20 group-hover:text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Email</div>
                  <div className="font-bold">contact@orapack.net</div>
                </div>
              </a>

              <div className="pt-4 border-t border-black/5">
                <button className="w-full bg-brand-black text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-brand-red transition-colors">
                  <Send size={16} /> Devis Express
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors ${
          isOpen ? "bg-brand-black text-white" : "bg-brand-red text-white"
        }`}
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
