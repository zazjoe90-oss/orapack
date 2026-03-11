import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", href: "/" },
    { 
      name: "Nos Produits", 
      href: "/produits",
      subItems: [
        { name: "Ensacheuse Verticale à vis", href: "/produit/ensacheuse-verticale-a-vis" },
        { name: "Ensacheuse a tasse", href: "/produit/ensacheuse-a-tasse" },
        { name: "Ensacheuse a balance", href: "/produit/ensacheuse-a-balance" },
        { name: "Convoyeur", href: "/produit/convoyeur" },
      ]
    },
    { name: "Accessoires", href: "/accessoires" },
    { name: "À Propos", href: "/#about" },
  ];

  // Handle hash scroll after navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subItems ? (
                  <>
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider hover:text-brand-red transition-colors ${
                        location.pathname === link.href ? "text-brand-red" : ""
                      }`}
                    >
                      {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </Link>
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 border border-black/5">
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-6 py-2 text-sm font-medium hover:bg-brand-red/5 hover:text-brand-red transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-semibold uppercase tracking-wider hover:text-brand-red transition-colors ${
                      location.pathname === link.href || (link.href === "/accessoires" && location.pathname.startsWith("/accessoires")) ? "text-brand-red" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/#contact"
              className="bg-brand-black text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-all transform hover:scale-105"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-black"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 md:hidden bg-white flex flex-col"
          >
            <div className="flex justify-between items-center h-20 px-4 border-b border-black/5">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-brand-black"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto px-6 py-10 space-y-8">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  {link.subItems ? (
                    <>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-black uppercase tracking-tighter text-brand-black hover:text-brand-red transition-colors"
                      >
                        {link.name}
                      </Link>
                      <div className="pl-4 space-y-4 border-l-2 border-brand-red/20">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg font-medium text-black/60 hover:text-brand-red transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-3xl font-black uppercase tracking-tighter hover:text-brand-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="p-6 border-t border-black/5">
              <Link
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="block bg-brand-red text-white text-center px-6 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-brand-red/20"
              >
                Devis Gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
