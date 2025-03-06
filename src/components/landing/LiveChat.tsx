
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

// Initial sample messages
const initialMessages = [
  { id: 1, username: "Aicha", message: "Merci, top le site" },
  { id: 2, username: "Mouna", message: "Je suis à 57000 F sur mon compte🤣" },
  { id: 3, username: "Kodjo", message: "je vais devenir riche les gars" },
  { id: 4, username: "Mamadou", message: "ça marche" },
  { id: 5, username: "Mouhamed", message: "Ce site est trop cool" },
  { id: 6, username: "Moussa", message: "svp ne partagez pas le site sinon ils vont fermer" },
  { id: 7, username: "Malik", message: "Je suis maintenant à 49000F pour aujourd'hui" },
  { id: 8, username: "Fatou", message: "j'utilise 2 phones pour gagner plus 🤣" },
  { id: 9, username: "Bouba", message: "Fini la galère🤣🤣" },
  { id: 10, username: "Fatima", message: "Je vais tout bousillé ce soir chez les kpoclés 😄" },
];

interface Message {
  id: number;
  username: string;
  message: string;
}

const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newUsername, setNewUsername] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Add a new message
  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newUsername.trim() && newMessage.trim()) {
      const newMsg = {
        id: Date.now(),
        username: newUsername,
        message: newMessage
      };
      
      setMessages(prevMessages => [...prevMessages, newMsg]);
      setNewMessage("");
    }
  };

  // Get random color for usernames
  const getUsernameColor = (username: string) => {
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
          {/* Chat messages display */}
          <div className="dark-glass-card rounded-xl p-4 h-[500px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-xl blur-sm"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <h3 className="text-xl font-semibold text-white">Messages en direct</h3>
                <div className="flex items-center px-2 py-1 bg-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs text-green-300">En ligne</span>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-2 space-y-2 chat-messages">
                <AnimatePresence initial={false}>
                  {messages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ 
                        duration: 0.5,
                        delay: 0.05 * index,
                        ease: "easeOut"
                      }}
                      className="message-item py-2"
                    >
                      <div className="flex">
                        <span className={`font-bold mr-2 ${getUsernameColor(msg.username)}`}>
                          {msg.username} :
                        </span>
                        <span className="text-white">{msg.message}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          {/* Message input form */}
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
