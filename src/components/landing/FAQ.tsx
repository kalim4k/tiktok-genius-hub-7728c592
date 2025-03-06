import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "Comment fonctionne le générateur de contenu de TikViral ?",
  answer: "Notre générateur de contenu vous guide à travers un processus en plusieurs étapes : génération d'idée, création de script, analyse du script, conseils de montage et génération de hashtags. Chaque étape est optimisée pour maximiser l'engagement et la viralité de vos vidéos TikTok."
}, {
  question: "Puis-je analyser mes vidéos TikTok existantes ?",
  answer: "Absolument ! La fonction d'analyse vous permet d'importer vos vidéos TikTok existantes ou d'entrer votre nom d'utilisateur pour obtenir une analyse complète de vos performances et des recommandations personnalisées pour améliorer votre contenu."
}, {
  question: "Le calcul de revenus est-il précis ?",
  answer: "Notre calculateur de revenus utilise des algorithmes avancés basés sur les données actuelles du marché, le nombre de vues, l'engagement et d'autres facteurs pour fournir une estimation aussi précise que possible des revenus potentiels de votre compte."
}, {
  question: "Que contiennent les ebooks inclus ?",
  answer: "Les ebooks inclus couvrent des sujets essentiels tels que la monétisation de TikTok en Afrique, la création d'un compte TikTok monétisé, les stratégies de croissance rapide et les techniques avancées pour créer du contenu viral."
}, {
  question: "Comment puis-je accéder à CapCut Pro et Canva Pro ?",
  answer: "Après votre achat, vous recevrez un email avec les instructions détaillées pour accéder à CapCut Pro, Canva Pro et tous les autres bonus. Vous aurez un accès complet à ces outils pendant la durée spécifiée dans votre forfait."
}, {
  question: "Y a-t-il une garantie de remboursement ?",
  answer: "Oui, nous offrons une garantie satisfait ou remboursé de 30 jours. Si vous n'êtes pas satisfait de TikViral pour quelque raison que ce soit, contactez notre support client et nous vous rembourserons intégralement."
}];
const FAQ = () => {
  return <section id="faq" className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
            Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vous avez des questions ?
          </h2>
          <p className="text-gray-600 text-lg">
            Nous avons les réponses à vos questions les plus fréquentes sur TikViral.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-xl overflow-hidden border-none shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gray-900 hover:bg-gray-800">
                  <span className="text-left font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white/30">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQ;