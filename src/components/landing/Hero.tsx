
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return;
      
      const { left, top, width, height } = videoRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      videoRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/80 to-transparent -z-10"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                Transformez votre contenu TikTok
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Créez du contenu viral sur <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">TikTok</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                TikViral vous aide à chaque étape de la création, de la génération d'idées jusqu'à l'analyse des performances, pour maximiser votre impact sur TikTok.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button className="btn-primary bg-gradient-to-r from-blue-500 to-teal-400 text-white group">
                Commencer maintenant
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Découvrir les fonctionnalités
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Génération d'idées</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 mb-3">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Scripts optimisés</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Analyse de tendances</h3>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-6"
            ref={videoRef}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-full transition-all duration-200">
              <div className="relative glass-card overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-teal-400/10 mix-blend-overlay"></div>
                <img
                  src="https://placehold.co/800x600/FAFBFF/e3e3e8/?text=TikViral+Dashboard"
                  alt="TikViral Dashboard"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-400 rounded-full opacity-40 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-600 to-blue-400 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
