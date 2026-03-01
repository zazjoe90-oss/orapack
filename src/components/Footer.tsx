import { Facebook, Linkedin, Instagram, ArrowUp, MapPin, Phone, Clock } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo light />
            <p className="text-white/40 leading-relaxed">
              N°1 au Maroc en fabrication de machines d’emballage automatiques. Spécialiste des ensacheuses verticales depuis 2020.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/Orapack.sarl/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/40">
              <li><Link to="/" className="hover:text-brand-red transition-colors">Accueil</Link></li>
              <li><Link to="/#about" className="hover:text-brand-red transition-colors">À Propos</Link></li>
              <li><Link to="/#solutions" className="hover:text-brand-red transition-colors">Solutions</Link></li>
              <li><Link to="/blog" className="hover:text-brand-red transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-4 text-white/40">
              <li><Link to="/#solutions" className="hover:text-brand-red transition-colors">Conception CAO</Link></li>
              <li><Link to="/#solutions" className="hover:text-brand-red transition-colors">Fabrication</Link></li>
              <li><Link to="/#solutions" className="hover:text-brand-red transition-colors">Service Après-Vente</Link></li>
              <li><Link to="/#solutions" className="hover:text-brand-red transition-colors">Conseil Technique</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red shrink-0" />
                <span>Tit Mellil, Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-brand-red shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <a href="https://wa.me/212661876491" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">+212 661-876491</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-brand-red shrink-0" />
                <span>Lun - Sam : 8h - 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-white/20 text-xs uppercase tracking-widest">
            © 2024 ORA PACK. Tous droits réservés.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Retour en haut <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
