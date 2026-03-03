import { motion } from "motion/react";
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
      href: "/#applications",
      subItems: [
        { name: "Ensacheuse à vis", href: "/#applications" },
        { name: "Ensacheuse à balance", href: "/#applications" },
        { name: "Ensacheuse à tasse", href: "/#applications" },
        { name: "Convoyeur", href: "/#applications" },
      ]
    },
    { name: "Accessoires", href: "/#accessoire" },
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
                    <button
                      className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider hover:text-brand-red transition-colors ${
                        location.pathname === link.href ? "text-brand-red" : ""
                      }`}
                    >
                      {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </button>
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
                      location.pathname === link.href || (link.href === "/blog" && location.pathname.startsWith("/blog")) ? "text-brand-red" : ""
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
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-black/5 px-4 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-2">
              {link.subItems ? (
                <>
                  <div className="text-lg font-bold uppercase tracking-wide text-brand-black">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-2">
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-base font-medium text-black/60 hover:text-brand-red"
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
                  className="block text-lg font-bold uppercase tracking-wide hover:text-brand-red"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-brand-red text-white text-center px-6 py-3 rounded-xl font-bold uppercase tracking-widest"
          >
            Devis Gratuit
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
