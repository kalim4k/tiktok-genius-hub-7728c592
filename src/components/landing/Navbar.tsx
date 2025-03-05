
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-md shadow-md py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-500">
            TikViral
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
          >
            Fonctionnalités
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
          >
            Comment ça marche
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
          >
            Témoignages
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
          >
            Tarifs
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] text-white transition-all"
          >
            Obtenir TikViral
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10"
          >
            <div className="container py-4 flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Comment ça marche
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Témoignages
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tarifs
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Obtenir TikViral
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
