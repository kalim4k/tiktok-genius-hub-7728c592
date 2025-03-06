
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Download, Apple, Smartphone, CreditCard, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const keyBenefits = ["Créez du contenu viral facilement", "Augmentez vos vues et votre engagement", "Monétisez efficacement votre compte", "Recevez des bonus exclusifs"];

const CTA = () => {
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: "Licence non disponible",
      description: "Désolé, les licences et l'application ne sont pas disponibles dans votre pays pour le moment.",
      variant: "destructive",
      duration: 5000,
    });
  };

  return <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      
      <div className="container-wide relative z-10">
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
      }} className="gradient-border p-10 md:p-16 max-w-4xl mx-auto">
          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-600 flex items-center justify-center rounded-2xl shadow-[0_0_30px_rgba(162,89,255,0.7)]">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white neon-glow">
              Prêt à transformer votre présence sur TikTok ?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Rejoignez des milliers de créateurs qui utilisent TikViral pour créer du contenu captivant et monétiser leur audience.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {keyBenefits.map((benefit, index) => <div key={index} className="flex items-center backdrop-blur-sm bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  <span className="text-sm font-medium text-gray-200">{benefit}</span>
                </div>)}
            </div>

            {/* Download and purchase buttons */}
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white group text-lg px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300 shadow-purple-600/30 rounded-xl" onClick={handlePurchase}>
                  <CreditCard className="h-5 w-5 mr-2" />
                  <span>Acheter une licence mensuelle</span>
                  <span className="text-sm ml-2 bg-white/20 px-2 py-0.5 rounded">9,99€/mois</span>
                </Button>
              </div>
              
              <div>
                <p className="text-gray-300 mb-4">Ou téléchargez l'application gratuitement</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" className="border-purple-500/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 px-6 py-5 rounded-xl" onClick={handlePurchase}>
                    <Apple className="h-5 w-5 mr-2" />
                    <span>Télécharger pour iOS</span>
                  </Button>
                  <Button variant="outline" size="lg" className="border-purple-500/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 px-6 py-5 rounded-xl" onClick={handlePurchase}>
                    <Smartphone className="h-5 w-5 mr-2" />
                    <span>Télécharger pour Android</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-gray-400 text-sm">
              Garantie satisfait ou remboursé de 30 jours. Sans engagement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default CTA;
