
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const revenueImages = [
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-24.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-26.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-28.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-29.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-31.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-32.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-33.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-34.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-35.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-37.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-38.jpg",
  "/wp-content/uploads/2025/03/photo_2025-03-06_13-21-39.jpg",
].map(path => `https://orawin.fun${path}`);

const ClientRevenues = () => {
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 8000, // Increased delay for better performance
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section id="revenues" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-900/50 rounded-full border border-purple-700/50 mb-4">
            Revenus Clients
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Résultats Prouvés<span className="text-pink-500">.</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Découvrez les revenus réels générés par nos clients grâce à notre programme
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {revenueImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                <div className="relative group">
                  <img
                    src={image}
                    alt={`Revenue Screenshot ${index + 1}`}
                    className="rounded-lg w-full h-64 object-cover border border-white/10"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientRevenues;
