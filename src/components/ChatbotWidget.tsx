import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';
import { MessageSquare, X, Send, HelpCircle, Bot, User, Check } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! Welcome to the Vibgyor Infoways Support Desk. I am your automated industrial hardware guide. How can I assist you with your biometrics, barcode printers, or AMC contracts today?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    { label: "Do you supply Zebra printheads?", text: "Do you supply genuine Zebra printheads and thermal ribbons?" },
    { label: "How to setup V-Secure Face ID?", text: "How do I configure the V-Secure Face ID X attendance terminal?" },
    { label: "What is your support SLA?", text: "What is your guaranteed on-site technical support response time (SLA)?" },
    { label: "Do you offer AMC contracts?", text: "How do I request a custom Annual Maintenance Contract (AMC) quote?" }
  ];

  const getBotResponse = (userText: string): string => {
    const text = userText.toLowerCase();
    if (text.includes('zebra') || text.includes('printhead') || text.includes('ribbon') || text.includes('consumables')) {
      return "Yes! As a certified Zebra Premier Partner, Vibgyor Infoways supplies 100% authentic printheads, thermal transfer ribbons (wax, resin, or hybrid), and durable labels for all industrial Z-Series barcode printers.";
    }
    if (text.includes('face id') || text.includes('biometric') || text.includes('attendance') || text.includes('v-secure')) {
      return "The V-Secure Face ID X terminal includes standard TCP/IP networking, USB backup, and can be connected directly to your server via our integrated SDK. To request drivers, manuals, or API integration spreadsheets, please submit a Technical Inquiry on our Services page.";
    }
    if (text.includes('sla') || text.includes('support') || text.includes('hours') || text.includes('response')) {
      return "For AMC contract holders, Vibgyor provides priority helpdesk support with a guaranteed 4-hour on-site resolution for critical failures and a 99.8% SLA compliance rating.";
    }
    if (text.includes('amc') || text.includes('contract') || text.includes('quote') || text.includes('expert')) {
      return "We offer custom Annual Maintenance Contracts for large enterprise IT installations. Please fill out the Inquiry form on the Services & Support tab, and a senior networks engineer will schedule a site survey within 1 business day.";
    }
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
      return "Hello! I hope your operations are running smoothly. Let me know if you need part specifications, driver links, or AMC quotation guidelines!";
    }
    return "Thank you for your message. Your query has been logged with our Technical Helpdesk. For custom pricing or direct support, please call our global hotline +91 11 4500 0000 or submit an inquiry ticket on our Services tab!";
  };

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate natural typing delay
    setTimeout(() => {
      const botReplyText = getBotResponse(textToSend);
      const botMsg: ChatMessage = {
        id: Math.random().toString(),
        sender: 'bot',
        text: botReplyText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence mode="wait">
        {/* Trigger FAB */}
        {!isOpen && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="bg-primary text-on-primary w-14 h-14 rounded-full shadow-glow-strong flex items-center justify-center cursor-pointer border border-white/20 group relative"
            aria-label="Open support chat"
          >
            <MessageSquare size={24} className="group-hover:rotate-6 transition-transform text-white" />
            <span className="absolute right-full mr-3 bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded shadow-premium uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Live Hardware Assistant
            </span>
            {/* Notification bubble */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}

        {/* Floating Chat window */}
        {isOpen && (
          <motion.div 
            key="chat"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="w-[320px] sm:w-[380px] h-[480px] bg-white rounded-2xl shadow-float border border-outline-variant/50 overflow-hidden flex flex-col"
          >
            
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Bot size={18} className="text-primary-fixed-dim text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white leading-none">Vibgyor Assistant</h4>
                  <p className="text-[10px] text-green-300 font-semibold flex items-center gap-1 mt-1 leading-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Technical Engineer Online</span>
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages list */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-surface-container-low/30 scrollbar-thin">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={msg.id} 
                    className={`flex gap-2 max-w-[85%] ${isBot ? 'mr-auto text-left' : 'ml-auto flex-row-reverse text-right'}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                      isBot ? 'bg-primary/5 text-primary border-primary/20' : 'bg-secondary-container text-primary border-white'
                    }`}>
                      {isBot ? <Bot size={12} /> : <User size={12} />}
                    </div>

                    <div className={`p-3 rounded-lg text-xs leading-relaxed shadow-xs ${
                      isBot 
                        ? 'bg-white text-on-surface border border-outline-variant/40' 
                        : 'bg-primary text-white shadow-premium'
                    }`}>
                      <p>{msg.text}</p>
                      <span className={`block text-[8px] mt-1 opacity-60 ${isBot ? 'text-left' : 'text-right'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2 max-w-[80%] mr-auto text-left">
                  <div className="w-6 h-6 rounded-full bg-primary/5 text-primary border border-primary/20 flex items-center justify-center shrink-0">
                    <Bot size={12} />
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-outline-variant/40 shadow-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-outline animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-outline animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick FAQ Helper Chips */}
            <div className="px-4 py-2 bg-white border-t border-outline-variant/30 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
              {quickQuestions.map((q, idx) => (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  key={idx}
                  onClick={() => handleSend(q.text)}
                  className="px-3 py-1 bg-surface-container-low hover:bg-secondary-container text-primary hover:text-on-secondary-container rounded-full text-[10px] font-bold border border-outline-variant/20 transition-all cursor-pointer whitespace-nowrap"
                >
                  {q.label}
                </motion.button>
              ))}
            </div>

            {/* Input field footer */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="p-3 bg-white border-t border-outline-variant/30 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about spares, AMC support, specs..."
                className="flex-1 bg-surface-container-low border border-outline-variant/50 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline shadow-inner"
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="submit"
                disabled={!input.trim()}
                className="bg-primary text-white p-2 rounded-full hover:brightness-110 transition-all disabled:opacity-40 cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send size={14} className="text-white" />
              </motion.button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
