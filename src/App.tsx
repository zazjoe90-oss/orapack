import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuickContact from "./components/QuickContact";
import WhatsAppButton from "./components/WhatsAppButton";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-red selection:text-white bg-white">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        <CustomCursor />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<ProductsPage />} />
            <Route path="/accessoires" element={<AccessoriesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/produit/:slug" element={<ProductDetails />} />
          </Routes>
        </main>

        <Footer />
        <QuickContact />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
