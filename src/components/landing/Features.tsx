
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
    color: "teal",
    delay: 0.2,
  },
  {
    title: "Calcul de revenus",
    description: "Estimez les revenus potentiels de votre compte à partir de votre nom d'utilisateur et planifiez votre monétisation.",
    icon: DollarSign,
    color: "purple",
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
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
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
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Toutes les fonctionnalités dont vous avez besoin
          </h2>
          <p className="text-gray-600 text-lg">
            TikViral vous offre une suite complète d'outils pour créer, analyser et monétiser votre contenu TikTok.
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
            const { bg, text, border } = getColorClasses(feature.color);
            
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="feature-card glass-card rounded-xl p-6 relative overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${bg} ${text} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
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
