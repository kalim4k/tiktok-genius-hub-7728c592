
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, FileText, BarChart3, Hash, Zap } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Générez des idées",
    description: "Commencez par générer des idées de vidéos adaptées aux tendances actuelles de TikTok.",
    color: "bg-amber-500",
  },
  {
    icon: FileText,
    title: "Créez votre script",
    description: "Obtenez un script optimisé et des conseils de montage pour captiver votre audience.",
    color: "bg-blue-500",
  },
  {
    icon: BarChart3,
    title: "Analysez les performances",
    description: "Évaluez les performances de vos vidéos et recevez des suggestions d'amélioration.",
    color: "bg-teal-500",
  },
  {
    icon: Hash,
    title: "Optimisez vos hashtags",
    description: "Générez des hashtags pertinents pour maximiser la portée de vos vidéos.",
    color: "bg-purple-500",
  },
  {
    icon: Zap,
    title: "Devenez viral",
    description: "Utilisez nos ressources et analyses pour augmenter vos chances de créer du contenu viral.",
    color: "bg-red-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
            Processus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment fonctionne TikViral ?
          </h2>
          <p className="text-gray-600 text-lg">
            Notre processus simplifié vous guide de l'idée à la vidéo virale en quelques étapes faciles.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-amber-500 via-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="relative">
                  <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center z-10 relative`}>
                    <step.icon size={24} />
                  </div>
                  <div className={`absolute inset-0 ${step.color} opacity-20 rounded-full scale-125 animate-pulse`} style={{ animationDuration: '3s' }}></div>
                </div>

                <div className="flex-1 text-center md:text-right">
                  {index % 2 !== 0 && (
                    <>
                      <h3 className="text-2xl font-bold mb-3 md:hidden">{step.title}</h3>
                      <p className="text-gray-600 md:hidden">{step.description}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
