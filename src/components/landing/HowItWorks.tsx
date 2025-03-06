import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, FileText, BarChart3, Hash, Zap } from "lucide-react";
const steps = [{
  icon: Lightbulb,
  title: "Générez des idées",
  description: "Commencez par générer des idées de vidéos adaptées aux tendances actuelles de TikTok.",
  color: "bg-amber-500"
}, {
  icon: FileText,
  title: "Créez votre script",
  description: "Obtenez un script optimisé et des conseils de montage pour captiver votre audience.",
  color: "bg-blue-500"
}, {
  icon: BarChart3,
  title: "Analysez les performances",
  description: "Évaluez les performances de vos vidéos et recevez des suggestions d'amélioration.",
  color: "bg-teal-500"
}, {
  icon: Hash,
  title: "Optimisez vos hashtags",
  description: "Générez des hashtags pertinents pour maximiser la portée de vos vidéos.",
  color: "bg-purple-500"
}, {
  icon: Zap,
  title: "Devenez viral",
  description: "Utilisez nos ressources et analyses pour augmenter vos chances de créer du contenu viral.",
  color: "bg-red-500"
}];
const HowItWorks = () => {
  return <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      
    </section>;
};
export default HowItWorks;