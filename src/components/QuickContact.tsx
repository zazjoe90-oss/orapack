import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Phone, Mail, Send } from "lucide-react";
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
              <a href="tel:+212500000000" className="flex items-center gap-4 p-4 rounded-2xl bg-black/5 hover:bg-brand-red hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-red group-hover:bg-white/20 group-hover:text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Appelez-nous</div>
                  <div className="font-bold">+212 5XX XX XX XX</div>
                </div>
              </a>
              
              <a href="mailto:contact@orapack.ma" className="flex items-center gap-4 p-4 rounded-2xl bg-black/5 hover:bg-brand-red hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-red group-hover:bg-white/20 group-hover:text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Email</div>
                  <div className="font-bold">contact@orapack.ma</div>
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
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
}
