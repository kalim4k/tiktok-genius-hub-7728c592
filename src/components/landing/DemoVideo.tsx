
import React from 'react';

interface DemoVideoProps {
  src: string;
  title: string;
  description?: string;
  className?: string;
}

const DemoVideo = ({ src, title, description, className }: DemoVideoProps) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="rounded-2xl">
        <div className="dark-glass-card overflow-hidden rounded-xl p-1">
          <div className="relative rounded-xl overflow-hidden">
            <video 
              className="w-full h-auto rounded-xl" 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ maxHeight: '240px' }}
            >
              <source src={src} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-400/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
      
      {(title || description) && (
        <div className="mt-4 text-center">
          {title && <h3 className="text-base md:text-xl font-semibold text-white mb-1 md:mb-2">{title}</h3>}
          {description && <p className="text-xs md:text-sm text-gray-400">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default DemoVideo;
