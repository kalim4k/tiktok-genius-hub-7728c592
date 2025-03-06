
import React from 'react';
import { motion } from 'framer-motion';

interface DemoVideoProps {
  src: string;
  title: string;
  description?: string;
  className?: string;
}

const DemoVideo = ({ src, title, description, className }: DemoVideoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative group ${className}`}
    >
      <div className="glow-effect rounded-2xl">
        <div className="dark-glass-card overflow-hidden rounded-xl p-1">
          <div className="relative rounded-xl overflow-hidden">
            <video 
              className="w-full rounded-xl" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={src} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-400/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-400 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full opacity-30 blur-2xl"></div>
      
      {(title || description) && (
        <div className="mt-6 text-center">
          {title && <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>}
          {description && <p className="text-gray-400">{description}</p>}
        </div>
      )}
    </motion.div>
  );
};

export default DemoVideo;
