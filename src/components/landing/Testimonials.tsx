
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
    <section id="testimonials" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-gray-600 text-lg">
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
              className="glass-card p-8 md:p-10 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].stars
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl italic text-gray-700 mb-4">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
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
                      ? "bg-blue-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
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
