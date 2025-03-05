
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Créatrice de contenu lifestyle",
    testimonial:
      "TikViral a complètement transformé ma façon de créer du contenu. J'ai vu mes vues augmenter de 300% en seulement un mois grâce aux analyses et conseils personnalisés !",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    stars: 5,
  },
  {
    name: "Marc Dubois",
    role: "Comédien TikTok",
    testimonial:
      "La fonctionnalité de génération de scripts est incroyable. Je n'ai plus jamais à me soucier du blocage créatif. Mes vidéos sont maintenant beaucoup plus engageantes.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    stars: 5,
  },
  {
    name: "Aminata Diallo",
    role: "Influenceuse mode",
    testimonial:
      "L'analyse des tendances m'a permis de rester toujours à la pointe. Je peux désormais prévoir quels contenus vont fonctionner avant même de les créer !",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    stars: 5,
  },
  {
    name: "Thomas Leroy",
    role: "Entrepreneur digital",
    testimonial:
      "Le calculateur de revenus est d'une précision étonnante. J'ai pu planifier ma stratégie de monétisation et atteindre mes objectifs financiers beaucoup plus rapidement.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    stars: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-900/50 rounded-full border border-purple-700/50 mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white neon-glow">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-gray-300 text-lg">
            Découvrez comment TikViral aide les créateurs à transformer leur présence sur TikTok.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={currentIndex}
              className="gradient-border p-1 rounded-2xl"
            >
              <div className="dark-glass-card p-8 md:p-10 rounded-2xl">
                <div className="absolute -top-5 -left-5 text-purple-400 opacity-30">
                  <Quote size={80} />
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-sm"></div>
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="relative w-20 h-20 rounded-full object-cover border-2 border-white/20"
                      />
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[currentIndex].stars
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl italic text-gray-200 mb-4">
                      "{testimonials[currentIndex].testimonial}"
                    </blockquote>
                    <div>
                      <h4 className="font-semibold text-lg text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-purple-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-gray-300 hover:bg-purple-800/50 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-purple-500"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-gray-300 hover:bg-purple-800/50 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
