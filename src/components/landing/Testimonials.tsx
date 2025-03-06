
import React from "react";
import { motion } from "framer-motion";
import { Check, Users, Heart, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Khaby Lame",
    handle: "@khaby.lame",
    followers: "161.7M followers",
    age: "24 ans",
    testimonial: "J'ai commencé par poster des vidéos simples pendant le confinement... avec TikViral j'ai pu comprendre les tendances et optimiser mon contenu pour atteindre encore plus de personnes.",
    highlightedText: "avec TikViral j'ai pu comprendre les tendances",
    avatar: "/creators/khaby-lame.jpg",
    verified: true,
  },
  {
    name: "Mya Le Bras",
    handle: "@myaspinktoes",
    followers: "1.2M followers",
    age: "21 ans",
    testimonial: "J'ai gagné plus de 800 000 abonnés en seulement 3 mois après avoir suivi les stratégies recommandées par TikViral. Leur analyse des tendances a changé ma vie!",
    highlightedText: "800 000 abonnés en seulement 3 mois",
    avatar: "/creators/mya-le-bras.jpg",
    verified: true,
  },
  {
    name: "Nathalie Koah",
    handle: "@nathaliekoah2",
    followers: "672K followers",
    age: "34 ans",
    testimonial: "En tant qu'entrepreneure camerounaise, TikViral m'a aidée à comprendre comment monétiser mon audience et créer un revenu stable à partir de TikTok. C'est incroyable!",
    highlightedText: "comprendre comment monétiser mon audience",
    avatar: "/creators/nathalie-koah.jpg",
    verified: true,
  },
  {
    name: "Ayze",
    handle: "@ayzeee",
    followers: "3.9M followers",
    age: "19 ans",
    testimonial: "J'étais bloqué à 100K followers depuis des mois. Après avoir appliqué les conseils de TikViral, j'ai explosé à presque 4 millions en moins d'un an!",
    highlightedText: "j'ai explosé à presque 4 millions en moins d'un an!",
    avatar: "/creators/ayze.jpg",
    verified: true,
  },
  {
    name: "Esther Kamatari",
    handle: "@princesseburundi",
    followers: "419K followers",
    age: "26 ans",
    testimonial: "Venant du Burundi, je ne savais pas comment percer sur TikTok. TikViral m'a donné des stratégies adaptées au marché africain qui ont fonctionné immédiatement.",
    highlightedText: "des stratégies adaptées au marché africain",
    avatar: "/creators/esther-kamatari.jpg",
    verified: true,
  },
  {
    name: "Abdou Rozik",
    handle: "@abdu_rozik",
    followers: "8.6M followers",
    age: "20 ans",
    testimonial: "Avant TikViral, mes vidéos avaient peu de vues. Maintenant, j'ai plusieurs vidéos avec plus de 10 millions de vues et je peux vivre de ma passion!",
    highlightedText: "plusieurs vidéos avec plus de 10 millions de vues",
    avatar: "/creators/abdou-rozik.jpg",
    verified: true,
  },
];

const TestimonialCard = ({ testimonial }) => {
  const { name, handle, followers, age, testimonial: text, highlightedText, avatar, verified } = testimonial;
  
  // Split the testimonial text to highlight the specific part
  const parts = text.split(highlightedText);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="dark-glass-card rounded-xl p-6 relative overflow-hidden h-full flex flex-col"
    >
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-600/30 to-pink-400/30 rounded-full blur-xl"></div>
      
      <div className="flex items-center mb-4 z-10">
        <div className="relative mr-3">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-[1px]"></div>
          <img 
            src={avatar} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-white/10 relative z-10"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-white mr-1">{name}</h3>
            {verified && (
              <span className="text-xs bg-gradient-to-r from-blue-400 to-blue-600 rounded-full p-0.5">
                <Check size={12} className="text-white" />
              </span>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-400">
            <span className="mr-2">{handle}</span>
            <div className="flex items-center">
              <Users size={10} className="mr-1" />
              <span>{followers}</span>
            </div>
            <span className="mx-1">•</span>
            <span>{age}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-3 flex-1">
        <p className="text-gray-300 text-sm">
          {parts[0]}
          <span className="font-bold text-white">{highlightedText}</span>
          {parts[1] || ""}
        </p>
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-800/50">
        <div className="flex items-center">
          <Heart size={12} className="mr-1 text-pink-500" />
          <span>14.3K</span>
        </div>
        <div className="flex items-center">
          <TrendingUp size={12} className="mr-1 text-green-500" />
          <span>+27% growth rate</span>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white neon-glow">
            Créateurs TikTok à succès<span className="text-pink-500">.</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Découvrez comment des créateurs de contenu réels ont transformé leur présence sur TikTok grâce à nos stratégies
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded ml-2 inline-block">
              résultats vérifiés
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
