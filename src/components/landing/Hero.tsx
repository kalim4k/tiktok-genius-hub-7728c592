import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Video, DollarSign, ChartBar, BarChart3, TrendingDown, Apple, Smartphone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return;
      
      const { left, top, width, height } = videoRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      videoRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handlePurchase = () => {
    toast({
      title: "Licence non disponible",
      description: "Désolé, les licences et l'application ne sont pas disponibles dans votre pays pour le moment.",
      variant: "destructive",
      duration: 5000,
    });
  };

  const downloadAndroid = () => {
    window.open("https://orawin.fun/wp-content/uploads/2025/03/TikViral1.apk", "_blank");
  };

  const downloadIOS = () => {
    window.open("https://orawin.fun/TikViral.aab", "_blank");
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-900/50 rounded-full border border-purple-700/50">
                Transformez votre contenu TikTok
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Créez du contenu <span className="purple-gradient-text">viral</span> sur <span className="cyan-gradient-text">TikTok</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                TikViral vous aide à chaque étape de la création, de la génération d'idées jusqu'à l'analyse des performances, pour maximiser votre impact sur TikTok.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button onClick={handlePurchase} className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-8 py-6 rounded-xl group shadow-[0_0_20px_rgba(162,89,255,0.5)]">
                <CreditCard className="mr-2 h-5 w-5" />
                <span>Acheter une licence</span>
                <span className="text-sm ml-2 bg-white/20 px-2 py-0.5 rounded">9,99€/mois</span>
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={downloadIOS} variant="outline" className="text-lg font-semibold border-purple-500/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 px-4 py-6 rounded-xl">
                  <Apple className="h-5 w-5 mr-2" />
                  <span>iOS</span>
                </Button>
                <Button onClick={downloadAndroid} variant="outline" className="text-lg font-semibold border-purple-500/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 px-4 py-6 rounded-xl">
                  <Smartphone className="h-5 w-5 mr-2" />
                  <span>Android</span>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/50 text-purple-300 mb-3 border border-purple-700/50">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200">Génération d'idées</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/50 text-blue-300 mb-3 border border-blue-700/50">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200">Scripts optimisés</h3>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-900/50 text-pink-300 mb-3 border border-pink-700/50">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200">Monétisation facile</h3>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-6 floating hidden md:block"
            ref={videoRef}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-full transition-all duration-200">
              <div className="glow-effect rounded-2xl">
                <div className="dark-glass-card overflow-hidden rounded-xl p-1">
                  <div className="relative rounded-xl overflow-hidden bg-[#121212]">
                    <div className="relative p-6">
                      {/* TikTok Monetization Dashboard */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <DollarSign className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-xl">TikTok Creator Fund</h3>
                          <p className="text-gray-400">Programme de monétisation</p>
                        </div>
                      </div>
                      
                      {/* Revenue Overview Card */}
                      <div className="bg-black/30 rounded-xl p-4 mb-5 border border-white/10">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-white font-bold">Revenus Totaux</h4>
                          <span className="text-green-400 font-bold flex items-center">
                            +24% <TrendingUp className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">$12,458.95</div>
                        <div className="text-gray-400 text-sm">Derniers 30 jours</div>
                        
                        {/* Fake Chart */}
                        <div className="h-16 mt-4 flex items-end gap-1">
                          {[35, 45, 30, 65, 40, 55, 45, 60, 50, 65, 75, 70, 60, 80].map((height, i) => (
                            <div 
                              key={i} 
                              className="flex-1 bg-gradient-to-t from-purple-600 to-pink-500 rounded-t-sm"
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                          <div className="flex items-center gap-2 mb-1 text-gray-400 text-sm">
                            <ChartBar className="h-4 w-4" />
                            <span>Revenus par vue</span>
                          </div>
                          <div className="text-xl font-bold text-white">$0.032</div>
                          <div className="text-green-400 text-xs flex items-center mt-1">
                            +12% <TrendingUp className="ml-1 h-3 w-3" />
                          </div>
                        </div>
                        <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                          <div className="flex items-center gap-2 mb-1 text-gray-400 text-sm">
                            <BarChart3 className="h-4 w-4" />
                            <span>Revenus du jour</span>
                          </div>
                          <div className="text-xl font-bold text-white">$483.21</div>
                          <div className="text-red-400 text-xs flex items-center mt-1">
                            -3% <TrendingDown className="ml-1 h-3 w-3" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Recent Revenue */}
                      <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                        <h4 className="text-white font-bold mb-3">Revenus récents</h4>
                        <div className="space-y-3">
                          {[
                            { title: "Viral Dance Challenge", views: "1.4M", amount: "$328.45" },
                            { title: "Review produit tech", views: "845K", amount: "$176.30" },
                            { title: "Storytelling lifestyle", views: "625K", amount: "$98.75" }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                              <div>
                                <div className="text-white font-medium">{item.title}</div>
                                <div className="text-gray-400 text-xs">{item.views} vues</div>
                              </div>
                              <div className="text-green-400 font-bold">{item.amount}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-400/10 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-400 rounded-full opacity-40 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full opacity-30 blur-2xl hidden md:block"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="dark-glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Nombre de créateurs</p>
              <p className="text-lg font-semibold text-white">+10,000 <span className="text-green-400 text-sm">+24%</span></p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
