
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Search, DollarSign, Download, Flame, Wand } from "lucide-react";

const features = [
  {
    title: "Générateur de contenu",
    description: "Générez des idées de vidéos, des scripts optimisés, et obtenez des conseils de montage pour créer du contenu viral.",
    icon: Sparkles,
    color: "blue",
    delay: 0.1,
  },
  {
    title: "Analyse de performance",
    description: "Analysez vos vidéos et votre compte TikTok pour obtenir des conseils d'amélioration et maximiser votre audience.",
    icon: Search,
    color: "purple",
    delay: 0.2,
  },
  {
    title: "Calcul de revenus",
    description: "Estimez les revenus potentiels de votre compte à partir de votre nom d'utilisateur et planifiez votre monétisation.",
    icon: DollarSign,
    color: "pink",
    delay: 0.3,
  },
  {
    title: "Bonus et ressources",
    description: "Accédez à CapCut Pro, Canva Pro, des ebooks sur la monétisation, et 1000 clips de vidéos de hook TikTok.",
    icon: Download,
    color: "indigo",
    delay: 0.4,
  },
  {
    title: "Analyse des tendances",
    description: "Découvrez les vidéos, chansons, filtres et modèles tendance pour rester à jour et créer du contenu pertinent.",
    icon: Flame,
    color: "red",
    delay: 0.5,
  },
  {
    title: "Génération de hashtags",
    description: "Obtenez les hashtags parfaits pour vos vidéos afin d'augmenter votre visibilité et votre portée sur TikTok.",
    icon: Wand,
    color: "amber",
    delay: 0.6,
  },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
    blue: { 
      bg: "bg-blue-500/10", 
      text: "text-blue-400", 
      border: "border-blue-500/20",
      shadow: "shadow-[0_0_15px_rgba(56,189,248,0.3)]"
    },
    purple: { 
      bg: "bg-purple-500/10", 
      text: "text-purple-400", 
      border: "border-purple-500/20",
      shadow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]"
    },
    pink: { 
      bg: "bg-pink-500/10", 
      text: "text-pink-400", 
      border: "border-pink-500/20",
      shadow: "shadow-[0_0_15px_rgba(236,72,153,0.3)]"
    },
    indigo: { 
      bg: "bg-indigo-500/10", 
      text: "text-indigo-400", 
      border: "border-indigo-500/20",
      shadow: "shadow-[0_0_15px_rgba(99,102,241,0.3)]"
    },
    red: { 
      bg: "bg-red-500/10", 
      text: "text-red-400", 
      border: "border-red-500/20",
      shadow: "shadow-[0_0_15px_rgba(239,68,68,0.3)]"
    },
    amber: { 
      bg: "bg-amber-500/10", 
      text: "text-amber-400", 
      border: "border-amber-500/20",
      shadow: "shadow-[0_0_15px_rgba(245,158,11,0.3)]"
    },
  };
  
  return colorMap[color] || colorMap.blue;
};

const Features = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-900/50 rounded-full border border-purple-700/50 mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Propulsez votre contenu <span className="purple-gradient-text">TikTok</span>
          </h2>
          <p className="text-gray-300 text-lg">
            TikViral vous offre une suite complète d'outils pour créer, analyser et monétiser votre contenu.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const { bg, text, border, shadow } = getColorClasses(feature.color);
            
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className={`feature-card dark-glass-card rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${shadow}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`w-14 h-14 ${bg} ${text} rounded-xl flex items-center justify-center mb-6 border ${border}`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-tr from-transparent to-current opacity-5"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
