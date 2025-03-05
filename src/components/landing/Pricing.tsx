
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
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
    "1000 clips de hook TikTok",
    "Templates CapCut viraux",
    "Support prioritaire",
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
            Tarification
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investissez dans votre succès sur TikTok
          </h2>
          <p className="text-gray-600 text-lg">
            Un seul forfait qui comprend tout ce dont vous avez besoin pour réussir sur TikTok.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-500 to-teal-400 text-white py-1 px-6 rounded-bl-lg font-medium">
              Offre limitée
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-2">Pack Complet TikViral</h3>
                <p className="text-gray-600 mb-6">
                  Tout ce dont vous avez besoin pour créer du contenu viral sur TikTok.
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold">199€</span>
                  <span className="text-gray-500 line-through ml-2">399€</span>
                  <p className="text-sm text-gray-600 mt-1">Paiement unique, accès à vie</p>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-6 group">
                  <span className="mr-2">Obtenir l'accès maintenant</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Garantie satisfait ou remboursé de 30 jours
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Fonctionnalités incluses :</h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-3">Moyens de paiement acceptés :</h4>
              <div className="flex items-center space-x-4">
                <img src="https://placehold.co/80x30/FAFAFA/A3A3A3?text=Visa" alt="Visa" className="h-8" />
                <img src="https://placehold.co/80x30/FAFAFA/A3A3A3?text=Mastercard" alt="Mastercard" className="h-8" />
                <img src="https://placehold.co/80x30/FAFAFA/A3A3A3?text=Paypal" alt="PayPal" className="h-8" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
