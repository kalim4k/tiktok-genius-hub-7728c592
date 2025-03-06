
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    handle: "@sophielifestyle",
    followers: "307K followers",
    age: "22 ans",
    testimonial: "Je n'avais jamais eu de stratégie qui fonctionnait constamment... jusqu'à ce que j'utilise TikViral.",
    highlightedText: "jusqu'à ce que j'utilise TikViral.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    verified: true,
  },
  {
    name: "Marc Dubois",
    handle: "@marcocomedy",
    followers: "250K+ followers",
    age: "26 ans",
    testimonial: "Après avoir rejoint, j'ai eu 5 vidéos dépassant le million de vues... grâce à l'analyse et aux conseils de TikViral.",
    highlightedText: "grâce à l'analyse et aux conseils de TikViral.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    verified: true,
  },
  {
    name: "Aminata Diallo",
    handle: "@aminatafashion",
    followers: "136K followers",
    age: "19 ans",
    testimonial: "Nous avons réussi à faire passer mon TikTok de 0... à plus de 136K followers et atteindre plus de 1M+ de vues en 30 jours!",
    highlightedText: "1M+ de vues en 30 jours!",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    verified: false,
  },
  {
    name: "Thomas Leroy",
    handle: "@thomascreator",
    followers: "670K abonnés",
    age: "24 ans",
    testimonial: "Juste quelques semaines après l'inscription, j'ai LITTÉRALEMENT explosé les vues... Je suis en bonne voie pour atteindre mon meilleur mois!",
    highlightedText: "j'ai LITTÉRALEMENT explosé les vues...",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    verified: true,
  },
  {
    name: "Julie Moreau",
    handle: "@juliemoment",
    followers: "150K abonnés",
    age: "21 ans",
    testimonial: "La toute première vidéo que j'ai postée a obtenu 483K vues! Tout ça grâce aux conseils de contenu de TikViral.",
    highlightedText: "483K vues!",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    verified: true,
  },
  {
    name: "Karim Benhaddou",
    handle: "@karimcooks",
    followers: "129K followers",
    age: "28 ans",
    testimonial: "J'ai quitté mon emploi parce que je gagnais tellement d'argent... Apprenez tout ce que TikViral enseigne!",
    highlightedText: "je gagnais tellement d'argent...",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    verified: false,
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
          <p className="text-xs text-gray-400">{followers} • {age}</p>
        </div>
      </div>
      
      <div className="mb-3 flex-1">
        <p className="text-gray-300 text-sm">
          {parts[0]}
          <span className="font-bold text-white">{highlightedText}</span>
          {parts[1] || ""}
        </p>
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
            Des Résultats Qui Durent<span className="text-pink-500">.</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Succès de nos utilisateurs — découvrez comment ils transforment leurs efforts en réussite, 
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded ml-2 inline-block">
              vous le pouvez aussi!
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
