import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MessagesSquare, ChevronDown } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useToast } from "@/components/ui/use-toast";

const genAI = new GoogleGenerativeAI("AIzaSyDvW1Ts20gJ0juw7uPBCLvKYrOhoo2j1UQ");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const fallbackUsernames = [
  // African names
  "Aicha", "Mouna", "Kodjo", "Mamadou", "Mouhamed", "Moussa", 
  "Malik", "Fatou", "Bouba", "Fatima", "Ibrahim", "Mariam",
  // Western names
  "Emma", "Liam", "Olivia", "Noah", "Charlotte", "James",
  "Sophia", "Lucas", "Mia", "Benjamin", "Amelia", "Ethan",
  // Asian names
  "Wei", "Keiko", "Jin", "Mei", "Hiroshi", "Seo-Yun",
  "Arjun", "Priya", "Liu", "Yuna", "Chen", "Raj",
  // Hispanic names
  "Sofia", "Miguel", "Isabella", "Alejandro", "Valentina", "Diego",
  "Camila", "Mateo", "Gabriela", "Santiago", "Luna", "Carlos"
];

const fallbackMessages = [
  "Cette app est vraiment la meilleure pour devenir populaire sur TikTok 🔥",
  "Je viens d'atteindre 10k abonnés grâce aux conseils de l'application",
  "Les formations sont trop bien faites 👌",
  "Merci pour les templates, ils font gagner tellement de temps",
  "Enfin une app qui comprend comment marche l'algo TikTok",
  "J'ai eu ma première vidéo en tendance hier 🙌",
  "Le support répond super vite, merci!",
  "Les analyses de performance m'ont vraiment aidé",
  "Je recommande la licence premium, ça vaut le coup",
  "Les outils d'édition sont faciles à utiliser même pour un débutant",
  "Je suis passée de 0 à 5000 vues en 1 semaine",
  "Le programme de monétisation n'a plus de secret pour moi maintenant",
  "Les bonus exclusifs sont vraiment utiles 🎁",
  "L'outil de recherche de tendances est incroyable",
  "Merci pour les idées de contenu quand je suis en panne d'inspiration",
  "L'analyse des hashtags a boosté ma visibilité ✨",
  "Grâce à l'app j'ai enfin compris le bon timing pour poster",
  "Les filtres exclusifs font vraiment la différence 👏",
  "Mes vidéos sont beaucoup plus pro depuis que j'utilise l'app",
  "J'ai reçu ma première offre de partenariat hier!"
];

interface Message {
  id: number;
  username: string;
  message: string;
  isUser?: boolean;
}

const LiveChat = () => {
  const MAX_MESSAGES = 6;
  const [messages, setMessages] = useState<Message[]>([]);
  const [newUsername, setNewUsername] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(false); // Désactivé par défaut
  const [showScrollButton, setShowScrollButton] = useState(true); // Toujours montrer le bouton
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const generationIntervalRef = useRef<number | null>(null);
  const usedUsernames = useRef<Set<string>>(new Set());
  const usedMessages = useRef<Set<string>>(new Set());

  // Fonction de scroll manuelle uniquement - ne sera appelée que par le bouton
  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  // Check if user is at bottom of chat container
  const isUserAtBottom = useCallback(() => {
    if (!chatContainerRef.current) return false;
    
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    // Consider "at bottom" if within 50px of the bottom
    return scrollHeight - scrollTop - clientHeight <= 50;
  }, []);

  // Handle scroll events to determine auto-scroll behavior
  const handleScroll = useCallback(() => {
    if (!chatContainerRef.current) return;
    
    const atBottom = isUserAtBottom();
    // N'active jamais l'auto-scroll, juste gère l'affichage du bouton
    setShowScrollButton(!atBottom);
  }, [isUserAtBottom]);

  const generateGeminiMessage = useCallback(async () => {
    try {
      setIsGenerating(true);
      const prompt = `
        Génère un message unique qu'un utilisateur pourrait poster dans un chat en direct à propos d'une application qui aide les créateurs de contenu à réussir sur TikTok.
        Le message doit:
        1. Être en français
        2. Être très positif sur l'une des fonctionnalités suivantes (choisis-en une aléatoirement):
           - Conseils pour augmenter les abonnés
           - Outils d'analyse de performance
           - Templates et filtres exclusifs
           - Formations sur l'algorithme TikTok
           - Programme de monétisation
           - Bonus pour les détenteurs de licence
           - Outils de recherche de tendances
           - Support client réactif
           - Idées de contenu viral
           - Statistiques et analyses
        3. Inclure des expressions familières si appropriées
        4. NE PAS mentionner de montants d'argent spécifiques
        5. Inclure 1-2 émojis appropriés
        6. Ne pas dépasser 100 caractères
        7. Être différent des messages précédents
        8. Génère aussi un prénom (pas de nom de famille) d'origine quelconque (occidentale, asiatique, africaine, hispanique, etc.)
        
        Format ta réponse exactement comme ceci sans mots ou explications supplémentaires:
        NOM: [prénom uniquement]
        MESSAGE: [le message court]
      `;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      
      const nameMatch = text.match(/NOM:\s*([^\n]+)/);
      const messageMatch = text.match(/MESSAGE:\s*([^\n]+)/);
      
      if (nameMatch && messageMatch) {
        const username = nameMatch[1].trim();
        const message = messageMatch[1].trim();
        
        // Check if this username or message has been used already
        if (usedUsernames.current.has(username) || usedMessages.current.has(message)) {
          throw new Error("Duplicate username or message generated");
        }
        
        usedUsernames.current.add(username);
        usedMessages.current.add(message);
        
        addMessage({
          id: Date.now(),
          username,
          message,
          isUser: false
        });
      } else {
        throw new Error("Failed to parse Gemini response");
      }
    } catch (error) {
      console.error("Error generating message with Gemini:", error);
      
      // Find unused username and message from fallbacks
      let randomUsername, randomMessage;
      let attempts = 0;
      const maxAttempts = 20;
      
      // Try to find unused username
      do {
        randomUsername = fallbackUsernames[Math.floor(Math.random() * fallbackUsernames.length)];
        attempts++;
      } while (usedUsernames.current.has(randomUsername) && attempts < maxAttempts);
      
      // Reset attempts counter
      attempts = 0;
      
      // Try to find unused message
      do {
        randomMessage = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)];
        attempts++;
      } while (usedMessages.current.has(randomMessage) && attempts < maxAttempts);
      
      // If we've exhausted our options, just use the first fallbacks
      if (attempts >= maxAttempts) {
        // Reset the used sets if we're cycling through all options
        if (usedUsernames.current.size >= fallbackUsernames.length * 0.8 || 
            usedMessages.current.size >= fallbackMessages.length * 0.8) {
          usedUsernames.current.clear();
          usedMessages.current.clear();
        }
      }
      
      usedUsernames.current.add(randomUsername);
      usedMessages.current.add(randomMessage);
      
      addMessage({
        id: Date.now(),
        username: randomUsername,
        message: randomMessage,
        isUser: false
      });
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const addMessage = useCallback((newMsg: Message) => {
    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages, newMsg].slice(-MAX_MESSAGES);
      return updatedMessages;
    });
  }, []);

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newUsername.trim()) {
      toast({
        title: "Nom d'utilisateur requis",
        description: "Veuillez entrer un nom d'utilisateur pour envoyer un message",
        variant: "destructive"
      });
      return;
    }
    
    if (!newMessage.trim()) {
      toast({
        title: "Message vide",
        description: "Veuillez entrer un message avant d'envoyer",
        variant: "destructive" 
      });
      return;
    }
    
    const userMsg = {
      id: Date.now(),
      username: newUsername,
      message: newMessage,
      isUser: true
    };
    
    addMessage(userMsg);
    setNewMessage("");
    // Ne pas activer l'auto-scroll ici
    
    toast({
      title: "Message envoyé",
      description: "Votre message a été ajouté au chat en direct",
      variant: "default"
    });
  };

  // Initialize chat with messages
  useEffect(() => {
    const initialMsgs: Message[] = [];
    
    // Generate 4 initial messages with unique usernames and messages
    for (let i = 0; i < 4; i++) {
      let username, message;
      
      // Find unused username
      do {
        username = fallbackUsernames[Math.floor(Math.random() * fallbackUsernames.length)];
      } while (usedUsernames.current.has(username));
      usedUsernames.current.add(username);
      
      // Find unused message
      do {
        message = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)];
      } while (usedMessages.current.has(message));
      usedMessages.current.add(message);
      
      initialMsgs.push({
        id: Date.now() - i * 1000,
        username,
        message,
        isUser: false
      });
    }
    setMessages(initialMsgs);

    // Initialisation sans scroll auto, juste ajout du listener de scroll
    chatContainerRef.current?.addEventListener('scroll', handleScroll);

    generateGeminiMessage();
    
    const scheduleNextGeneration = () => {
      // Increased interval to 10-20 seconds for more natural chat flow
      const randomInterval = 10000 + Math.floor(Math.random() * 10000);
      generationIntervalRef.current = window.setTimeout(() => {
        generateGeminiMessage();
        scheduleNextGeneration();
      }, randomInterval);
    };
    
    scheduleNextGeneration();

    return () => {
      if (generationIntervalRef.current) {
        clearTimeout(generationIntervalRef.current);
      }
      chatContainerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [generateGeminiMessage, handleScroll]);

  // Suppression du useEffect qui gérait l'auto-scroll sur les nouveaux messages

  const getUsernameColor = (username: string, isUser: boolean = false) => {
    if (isUser) return "text-cyan-400";
    
    const colors = ["text-red-500", "text-pink-500", "text-purple-500", "text-blue-500", "text-green-500", "text-yellow-500"];
    const hash = username.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <section id="live-chat" className="section-padding bg-purple-900/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-900/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-900/50 rounded-full border border-purple-700/50 mb-4">
            Live Chat
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white neon-glow">
            Communauté en Direct<span className="text-pink-500">.</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Discutez en temps réel avec notre communauté d'utilisateurs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="dark-glass-card rounded-xl p-4 h-[500px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-xl blur-sm"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <MessagesSquare className="h-5 w-5 text-purple-400" />
                  Messages en direct
                </h3>
                <div className="flex items-center px-2 py-1 bg-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs text-green-300">{messages.length} en ligne</span>
                </div>
              </div>
              
              <div 
                ref={chatContainerRef} 
                className="flex-1 overflow-y-auto pr-2 chat-container custom-scrollbar"
              >
                <AnimatePresence initial={false} mode="popLayout">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      className={`message-item py-2 ${msg.isUser ? 'pl-2 border-l-2 border-cyan-500/50' : ''}`}
                    >
                      <div className="flex items-start">
                        <span className={`font-bold mr-2 ${getUsernameColor(msg.username, !!msg.isUser)}`}>
                          {msg.username}:
                        </span>
                        <span className="text-white break-words">{msg.message}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>
              
              {/* Bouton toujours visible quand pas au bas du chat */}
              {showScrollButton && (
                <Button
                  onClick={scrollToBottom}
                  className="absolute bottom-2 right-2 p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-all shadow-lg z-10"
                  size="sm"
                  variant="default"
                >
                  <ChevronDown className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>

          <div className="dark-glass-card rounded-xl p-6 h-auto">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-4">Rejoindre la conversation</h3>
              
              <form onSubmit={handleAddMessage} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm text-gray-300">
                    Votre nom
                  </label>
                  <Input 
                    id="username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="Entrez votre pseudo"
                    maxLength={20}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-300">
                    Votre message
                  </label>
                  <div className="flex">
                    <Input 
                      id="message"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="bg-white/5 border-white/10 text-white rounded-r-none"
                      placeholder="Votre message..."
                      maxLength={100}
                    />
                    <Button 
                      type="submit" 
                      className="rounded-l-none bg-gradient-to-r from-purple-600 to-pink-600"
                      disabled={!newUsername.trim() || !newMessage.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  disabled={!newUsername.trim() || !newMessage.trim()}
                >
                  Envoyer le message
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-purple-600/20 rounded-lg border border-purple-500/20">
                <p className="text-sm text-gray-300">
                  Rejoignez notre communauté et partagez votre expérience avec TikViral. 
                  Les messages sont visibles par tous les utilisateurs en ligne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveChat;
