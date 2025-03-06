
import React from 'react';
import { motion } from 'framer-motion';
import DemoVideo from './DemoVideo';

const DemoSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-purple-900/20"></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-900/50 rounded-full border border-purple-700/50 mb-4">
            Démonstration
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Découvrez <span className="purple-gradient-text">TikViral</span> en action
          </h2>
          <p className="text-gray-300 text-lg">
            Explorez nos fonctionnalités à travers des démonstrations interactives
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2 lg:gap-16">
          <DemoVideo
            src="https://orawin.fun/wp-content/uploads/2025/03/video_2025-03-06_09-47-59.mp4"
            title="Analyse des Tendances"
            description="Découvrez les contenus viraux et les tendances du moment"
            className="max-w-full"
          />
          <DemoVideo
            src="https://orawin.fun/wp-content/uploads/2025/03/video_2025-03-06_09-48-29.mp4"
            title="Suivi des Revenus"
            description="Visualisez et analysez vos revenus en temps réel"
            className="max-w-full"
          />
          <DemoVideo
            src="https://orawin.fun/wp-content/uploads/2025/03/video_2025-03-06_09-48-33.mp4"
            title="Analyse de Compte"
            description="Obtenez des insights détaillés sur la performance de votre compte"
            className="max-w-full"
          />
          <DemoVideo
            src="https://orawin.fun/wp-content/uploads/2025/03/video_2025-03-06_09-48-35.mp4"
            title="Connexion TikTok"
            description="Intégration simple et sécurisée de votre compte TikTok"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
