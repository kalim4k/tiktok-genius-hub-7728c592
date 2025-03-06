import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MessagesSquare } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useToast } from "@/components/ui/use-toast";

const genAI = new GoogleGenerativeAI("AIzaSyDvW1Ts20gJ0juw7uPBCLvKYrOhoo2j1UQ");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const fallbackUsernames = [
  "Aicha", "Mouna", "Kodjo", "Mamadou", "Mouhamed", "Moussa", 
  "Malik", "Fatou", "Bouba", "Fatima", "Ibrahim", "Mariam"
];

const fallbackMessages = [
  "Merci, top le site",
  "Je suis à 57000 F sur mon compte🤣",
  "je vais devenir riche les gars",
  "ça marche vraiment bien",
  "Ce site est trop cool",
  "svp ne partagez pas le site sinon ils vont fermer",
  "Je suis maintenant à 49000F pour aujourd'hui",
  "j'utilise 2 phones pour gagner plus 🤣",
  "Fini la galère🤣🤣",
  "Je vais tout bousillé ce soir chez les kpoclés 😄",
  "C'est super facile à utiliser",
  "300F en à peine 5 minutes 🔥",
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
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const generationIntervalRef = useRef<number | null>(null);

  const generateGeminiMessage = useCallback(async () => {
    try {
      setIsGenerating(true);
      const prompt = `
        Generate a single short message that an African user might post in a live chat about making money from a mobile app.
        The message should:
        1. Be in French
        2. Be extremely positive about the money they've made
        3. Include African expressions or slang
        4. Mention a specific amount of money between 100F and 100,000F
        5. Include 1-2 appropriate emojis
        6. Be no longer than 100 characters
        7. Also generate a typical African first name from West Africa
        
        Format your response exactly like this without any extra words or explanation:
        NAME: [first name only]
        MESSAGE: [the short message]
      `;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      
      const nameMatch = text.match(/NAME:\s*([^\n]+)/);
      const messageMatch = text.match(/MESSAGE:\s*([^\n]+)/);
      
      if (nameMatch && messageMatch) {
        const username = nameMatch[1].trim();
        const message = messageMatch[1].trim();
        
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
      
      const randomUsername = fallbackUsernames[Math.floor(Math.random() * fallbackUsernames.length)];
      const randomMessage = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)];
      
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
    
    toast({
      title: "Message envoyé",
      description: "Votre message a été ajouté au chat en direct",
      variant: "default"
    });
  };

  useEffect(() => {
    const initialMsgs: Message[] = [];
    for (let i = 0; i < 4; i++) {
      initialMsgs.push({
        id: Date.now() - i * 1000,
        username: fallbackUsernames[Math.floor(Math.random() * fallbackUsernames.length)],
        message: fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)],
        isUser: false
      });
    }
    setMessages(initialMsgs);

    generateGeminiMessage();
    generationIntervalRef.current = window.setInterval(() => {
      generateGeminiMessage();
    }, 8000);

    return () => {
      if (generationIntervalRef.current) {
        clearInterval(generationIntervalRef.current);
      }
    };
  }, [generateGeminiMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
              
              <div className="flex-1 overflow-hidden pr-2 chat-container">
                <AnimatePresence initial={false} mode="popLayout">
                  {messages.map((msg, index) => (
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
