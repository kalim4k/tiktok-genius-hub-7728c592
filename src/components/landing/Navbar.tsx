import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    toast
  } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      setIsMobileMenuOpen(false);

      // Add a small delay before scrolling to ensure mobile menu closes
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }, 100);
    }
  };
  
  const handlePurchase = () => {
    window.location.href = "https://tikvirale.netlify.app/auth";
  };
  
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/40 backdrop-blur-md shadow-md py-3 border-b border-white/10" : "bg-transparent py-5"}`}>
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-500">
            TikViral
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
            Fonctionnalités
          </button>
          
          <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
            Témoignages
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
            Tarifs
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors">
            FAQ
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button onClick={handlePurchase} className="bg-gradient-to-r from-purple-600 to-blue-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] text-white transition-all">
            Obtenir TikViral
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10">
            <div className="container py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2 text-left">
                Fonctionnalités
              </button>
              
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2 text-left">
                Témoignages
              </button>
              <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2 text-left">
                Tarifs
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2 text-left">
                FAQ
              </button>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white" onClick={handlePurchase}>
                Obtenir TikViral
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
};

export default Navbar;
