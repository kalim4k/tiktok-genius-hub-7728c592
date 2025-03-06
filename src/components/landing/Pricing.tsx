import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const features = [
  "Générateur d'idées de vidéos", 
  "Générateur de scripts", 
  "Analyse de performances", 
  "Générateur de hashtags", 
  "Calcul de revenus", 
  "Analyse des tendances", 
  "Accès à CapCut Pro", 
  "Accès à Canva Pro", 
  "Ebooks sur la monétisation", 
  "Ebook sur la création d'un compte PayPal vérifié en Afrique",
  "Ebook sur la monétisation de compte TikTok en Afrique",
  "1000 clips de hook TikTok", 
  "Templates CapCut viraux", 
  "Support prioritaire"
];

const Pricing = () => {
  const { toast } = useToast();
  
  const handlePurchase = () => {
    toast({
      title: "Licence non disponible",
      description: "Désolé, les licences et l'application ne sont pas disponibles dans votre pays pour le moment.",
      variant: "destructive",
      duration: 5000
    });
  };
  
  return <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-900/50 rounded-full border border-purple-700/50 mb-4">
            Tarification
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Investissez dans votre succès sur TikTok
          </h2>
          <p className="text-gray-300 text-lg">
            Un abonnement simple qui comprend tout ce dont vous avez besoin pour réussir sur TikTok.
          </p>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="max-w-4xl mx-auto">
          <div className="gradient-border relative overflow-hidden">
            <div className="dark-glass-card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-500 to-pink-500 text-white py-1 px-6 rounded-bl-lg font-medium">
                Offre limitée
              </div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />)}
                    </div>
                    <span className="ml-2 text-gray-300 text-sm">5.0 (230+ avis)</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white">Pack Complet TikViral</h3>
                  <p className="text-gray-400 mb-6">
                    Tout ce dont vous avez besoin pour créer du contenu viral sur TikTok.
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">9,99€</span>
                    <span className="text-gray-500 line-through ml-2">19,99€</span>
                    <p className="text-sm text-gray-400 mt-1">par mois, annulable à tout moment</p>
                  </div>
                  
                  <Button onClick={handlePurchase} className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white group text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 shadow-purple-600/30 rounded-xl">
                    <span className="mr-2">Commencer maintenant</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-sm text-gray-400 mt-3 text-center">
                    Garantie satisfait ou remboursé de 14 jours
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-gray-200">Fonctionnalités incluses :</h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-800">
                <h4 className="font-semibold mb-3 text-gray-300">Moyens de paiement acceptés :</h4>
                <div className="flex items-center space-x-4">
                  <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-white text-xs">Visa</span>
                  </div>
                  <div className="h-8 w-20 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-white text-xs">Mastercard</span>
                  </div>
                  <div className="h-8 w-16 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-white text-xs">PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default Pricing;
