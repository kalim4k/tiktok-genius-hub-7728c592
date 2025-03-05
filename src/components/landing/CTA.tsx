
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const keyBenefits = [
  "Créez du contenu viral facilement",
  "Augmentez vos vues et votre engagement",
  "Monétisez efficacement votre compte",
  "Recevez des bonus exclusifs",
];

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-500 to-teal-400 text-white">
      <div className="container-wide relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Prêt à transformer votre présence sur TikTok ?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Rejoignez des milliers de créateurs qui utilisent TikViral pour créer du contenu captivant et monétiser leur audience.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {keyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <CheckCircle className="h-5 w-5 mr-2 text-white" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-white/90 group text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="mr-2">Commencer maintenant</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="mt-6 text-white/80 text-sm">
              Garantie satisfait ou remboursé de 30 jours. Sans engagement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
