import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import SupportView from './components/SupportView';
import AboutView from './components/AboutView';
import ChatbotWidget from './components/ChatbotWidget';
import WarrantyModal from './components/WarrantyModal';

// Mobile icons
import { Home, Printer, Headset, Info } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [prefilledProduct, setPrefilledProduct] = useState<string>('');
  const [warrantyOpen, setWarrantyOpen] = useState(false);

  // When a user requests an inquiry for a specific product
  const handleInquireProduct = (productName: string) => {
    setPrefilledProduct(productName);
    setActiveTab('services'); // Redirects to inquiry form services page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch which main content view is rendered
  const renderContentView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView 
            setActiveTab={setActiveTab} 
            onInquireClick={() => setActiveTab('services')} 
          />
        );
      case 'products':
        return (
          <ProductsView 
            onInquireProduct={handleInquireProduct} 
            onTalkToExpert={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        );
      case 'services':
      case 'contact':
        return (
          <SupportView 
            prefilledProduct={prefilledProduct}
            setPrefilledProduct={setPrefilledProduct}
          />
        );
      case 'about':
        return (
          <AboutView 
            onTalkToExpert={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onInquireCatalog={() => {
              setPrefilledProduct('Full Brand Product Catalog');
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        );
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background industrial-grid text-on-background flex flex-col font-sans selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Structural Glass Header bar */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Container Stage with Premium Motion Transitions */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-8 pb-28 md:pb-12 text-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {renderContentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Structured Multi-Column Corporate Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onWarrantyClick={() => setWarrantyOpen(true)} 
      />

      {/* Floating Interactive Chatbot Assist Desk */}
      <ChatbotWidget />

      {/* Interactive Warranty Checker dialog popover */}
      <WarrantyModal 
        isOpen={warrantyOpen} 
        onClose={() => setWarrantyOpen(false)} 
      />

      {/* Fixed Bottom bar specifically for mobile/touch layouts */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-white/90 backdrop-blur-md border-t border-outline-variant/50 flex justify-around items-center z-40 shadow-lg px-2">
        <button
          onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
            activeTab === 'home' 
              ? 'text-primary font-bold scale-105' 
              : 'text-on-surface-variant'
          }`}
        >
          <Home size={18} className={activeTab === 'home' ? 'stroke-[2.5px]' : 'stroke-[2px]'} />
          <span className="text-[10px] uppercase font-bold tracking-tight mt-0.5">Home</span>
        </button>

        <button
          onClick={() => { setActiveTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
            activeTab === 'products' 
              ? 'text-primary font-bold scale-105' 
              : 'text-on-surface-variant'
          }`}
        >
          <Printer size={18} className={activeTab === 'products' ? 'stroke-[2.5px]' : 'stroke-[2px]'} />
          <span className="text-[10px] uppercase font-bold tracking-tight mt-0.5">Products</span>
        </button>

        <button
          onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
            activeTab === 'services' || activeTab === 'contact'
              ? 'text-primary font-bold scale-105' 
              : 'text-on-surface-variant'
          }`}
        >
          <Headset size={18} className={activeTab === 'services' || activeTab === 'contact' ? 'stroke-[2.5px]' : 'stroke-[2px]'} />
          <span className="text-[10px] uppercase font-bold tracking-tight mt-0.5">Support</span>
        </button>

        <button
          onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
            activeTab === 'about' 
              ? 'text-primary font-bold scale-105' 
              : 'text-on-surface-variant'
          }`}
        >
          <Info size={18} className={activeTab === 'about' ? 'stroke-[2.5px]' : 'stroke-[2px]'} />
          <span className="text-[10px] uppercase font-bold tracking-tight mt-0.5">About</span>
        </button>
      </nav>
    </div>
  );
}
