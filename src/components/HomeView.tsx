import React from 'react';
import { motion } from 'motion/react';
import { ActiveTab } from '../types';
import { GLOBAL_PARTNERS } from '../data';
import { 
  Award, 
  ArrowRight, 
  QrCode, 
  Fingerprint, 
  Printer, 
  Radio, 
  Handshake, 
  ShieldCheck, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onInquireClick?: () => void;
}

export default function HomeView({ setActiveTab, onInquireClick }: HomeViewProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="space-y-20 font-sans">
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden glass-panel rounded-2xl p-6 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-white/50 shadow-premium hover:shadow-premium-hover transition-all duration-500 text-left"
      >
        {/* Abstract light bubbles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="flex-1 space-y-6 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-sans text-xs font-bold border border-white/40 shadow-sm"
          >
            <Award size={14} className="text-primary fill-primary" />
            <span>16 Years Excellence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-on-surface leading-tight tracking-tight"
          >
            Precision in <span className="text-primary border-b-2 border-primary/20 pb-1">Industrial Hardware</span> Solutions
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-on-surface-variant max-w-xl font-normal leading-relaxed"
          >
            Vibgyor Infoways provides mission-critical IT equipment for barcode scanning, biometrics, and thermal printing. Partnering with global leaders like Zebra and Motorola to ensure your supply chain never stops.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button 
              onClick={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-primary text-on-primary px-6 py-3.5 font-semibold text-sm rounded-lg hover:shadow-premium hover:bg-primary/95 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider shadow-md"
            >
              <span>Explore Catalog</span>
              <ChevronRight size={16} />
            </button>
            <button 
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="glass-panel border border-primary/25 text-primary px-6 py-3.5 font-semibold text-sm rounded-lg hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer uppercase tracking-wider"
            >
              Technical Support
            </button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl filter blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
          <motion.img 
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            alt="Vibgyor Thermal Printer Hero" 
            className="w-full h-[320px] md:h-[400px] object-contain drop-shadow-xl relative z-10 cursor-zoom-in" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJbmTXE2ZM-0jG1wPrfVXjIBrw6F50K7x-4r5a0bP63HZeC2K8A2AdKPMuL87AWPfZqe4RHHlLgo4p0DOMn5ThiAUtdfIa82L_WQZEJwLKZoFPEOjJ-trapnWs-MSdnzBfUrty90pDAr4iHBlDfI0ZccWIhffV_cQU8gY8e1oO70i4djWFitu3-LwdMD7lBw4lo-UuW_ES9CDAOya2CJekAzd7Xr63ICqU01V-3pFN4J_8oD-1s0lCPJYI7jZhLe1N60gj-ZuinjJ1" 
          />
        </motion.div>
      </motion.section>

      {/* Product Categories Bento Grid */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-outline">Showcase</span>
            <h3 className="text-2xl md:text-3xl font-bold text-on-surface">Primary Product Categories</h3>
            <p className="text-sm text-on-surface-variant">Industrial grade hardware for enterprise-scale operations.</p>
          </div>
          <button 
            onClick={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-primary font-bold text-sm flex items-center gap-1 hover:underline cursor-pointer group"
          >
            <span>View All</span> 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          
          {/* Category Card 1: Barcode Systems */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="md:col-span-2 group relative overflow-hidden glass-panel p-6 rounded-xl hover:border-primary/20 transition-all border border-white/50 cursor-pointer flex flex-col justify-between shadow-premium hover:shadow-premium-hover text-left"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs text-secondary font-bold uppercase tracking-wider">SOLUTIONS</span>
                <h4 className="text-xl font-bold mt-1 text-primary">Barcode Systems</h4>
              </div>
              <div className="p-2.5 rounded bg-primary/5 text-primary">
                <QrCode size={24} />
              </div>
            </div>
            
            <div className="glass-panel-dark px-3 py-1.5 rounded mb-4 inline-flex gap-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant w-fit bg-white/30 border border-white/60">
              <span>Scanners</span>
              <span className="text-outline-variant">•</span>
              <span>Printers</span>
              <span className="text-outline-variant">•</span>
              <span>Labels</span>
            </div>
            
            <div className="h-44 rounded-lg overflow-hidden relative">
              <img 
                alt="Barcode laser scanner close up" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNUWoctDWC5KhFImmmlPPmZcyrUEFspp4J4IjNBtMTBVCdsPbUgZxjxvHMVMx1kjs4uz2Fm92iDXKorV7f6hdFGkRw7HuJI9YJ_6uDbdAed4OBjZNTj-Dp88HUP_-vhRfz1nhEMqXunTdIoEs_AbOirpgSD7t9wBwFcA6FbhgXm011nXWZ8BMI1GMCaGnp5TL1stZZIXky4qjKnxFTEgiYtE3A23P2yQ3orEXhP0abdKhjw90Ex7GxIxsAn01TKa7vwSFjiSygeyGP" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Category Card 2: Biometric Devices */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="md:col-span-1 group glass-panel p-6 rounded-xl hover:border-primary/20 transition-all border border-white/50 cursor-pointer flex flex-col justify-between shadow-premium hover:shadow-premium-hover text-left"
          >
            <div className="space-y-4">
              <div className="p-2.5 rounded bg-secondary-container/50 text-primary w-fit border border-white">
                <Fingerprint size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Biometrics</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Secure attendances, facial ID terminals, and access control.</p>
              </div>
            </div>
            
            <div className="h-44 rounded-lg overflow-hidden mt-4">
              <img 
                alt="Biometric face and fingerprint scanner" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxIuEpuurjMK0FxqwYBAv3Ce2NLQTU9Hrg0YMeMiBxQEQIekniYn8ecv54UCsbkEcydBPL-MlF0Z-UkAMxyoWrbMvkcHp9lafL2W6XMmxHqYHyrTpvBNWB-SmLYaGgNUqZ03qUNWoeMUwjgjLWswNuORi1nDQfK-hIkPwpdyit2m0eRQyc1EX9DnAmCCQ_hBBdSmJ-Z15pEhmci9vLJ-bAku1qxIKBBwv-J5nrS6RjweKlB6gDtmUjaggIog4sxLhLVxt-gybHs2CB" 
              />
            </div>
          </motion.div>

          {/* Category Card 3 & 4: Small Blocks (Thermal Printers & RFID Solutions) */}
          <motion.div variants={itemVariants} className="md:col-span-1 flex flex-col gap-5 text-left">
            {/* Thermal Printers Quick Card */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-1 bg-primary/95 hover:bg-primary backdrop-blur-xs text-on-primary p-6 rounded-xl transition-all cursor-pointer border border-primary-container shadow-premium hover:shadow-premium-hover flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-75 text-white">Hardware</span>
                <Printer size={18} className="text-primary-fixed-dim" />
              </div>
              <div className="pt-4">
                <h4 className="font-semibold text-base text-white">Thermal Printers</h4>
                <p className="text-xs text-white/80 mt-1 leading-normal">High-volume transfer &amp; thermal receipt systems.</p>
              </div>
            </motion.div>

            {/* RFID Solutions Quick Card */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex-1 bg-secondary-container/85 hover:bg-secondary-container text-on-secondary-container p-6 rounded-xl transition-all cursor-pointer border border-white/50 shadow-premium hover:shadow-premium-hover flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-widest uppercase text-secondary">Advanced Tech</span>
                <Radio size={18} className="text-primary" />
              </div>
              <div className="pt-4">
                <h4 className="font-semibold text-base text-primary">RFID Solutions</h4>
                <p className="text-xs text-on-secondary-container/90 mt-1 leading-normal">Real-time inventory mapping &amp; tracking readers.</p>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>

      {/* Trust & Features Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 border-t border-outline-variant/30 text-left">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-outline">The Vibgyor Edge</span>
            <h3 className="text-2xl md:text-3xl font-bold text-on-surface">Why Industry Leaders Trust Vibgyor</h3>
            <p className="text-sm text-on-surface-variant max-w-md">Our focus is building mission-critical resilience. We support your operations directly, ensuring continuous hardware uptime.</p>
          </div>

          <div className="space-y-6">
            <motion.div 
              whileHover={{ x: 4 }}
              className="flex gap-4 p-4 rounded-xl hover:glass-panel hover:bg-white/40 transition-all border border-transparent shadow-xs"
            >
              <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center shrink-0 border border-white/60 text-primary shadow-sm">
                <Handshake size={20} />
              </div>
              <div>
                <h5 className="font-bold text-base text-primary mb-1">World-Class Service Model</h5>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  On-site technical support and hardware maintenance contracts (AMC) designed for strict 99.9% uptime compliance.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 4 }}
              className="flex gap-4 p-4 rounded-xl hover:glass-panel hover:bg-white/40 transition-all border border-transparent shadow-xs"
            >
              <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center shrink-0 border border-white/60 text-primary shadow-sm">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h5 className="font-bold text-base text-primary mb-1">Authentic OEM Consumables</h5>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Direct hardware partnerships ensure you receive certified OEM parts, printheads, and premium-grade labels.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Partners Panel */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-8 md:p-10 border border-white/40 flex flex-col justify-between shadow-premium hover:shadow-premium-hover transition-all duration-500"
        >
          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-1.5 text-xs font-bold text-outline uppercase tracking-wider">
              <Sparkles size={12} className="text-primary animate-pulse" />
              <span>Technology Ecosystem</span>
            </div>
            <p className="text-sm text-on-surface-variant">We align with world-class manufacturers to supply reliable IT standards.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {GLOBAL_PARTNERS.map((partner, index) => (
              <motion.div 
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, shadow: "0 8px 20px rgba(46, 111, 64, 0.08)" }}
                className="flex flex-col items-center justify-center p-4 bg-white/45 backdrop-blur-xs border border-white/80 rounded-lg hover:bg-white transition-all text-center cursor-pointer shadow-xs"
              >
                <span className="font-sans font-extrabold text-base md:text-lg text-primary tracking-wider">
                  {partner.name}
                </span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase mt-1 opacity-75">
                  {partner.description}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant/30 text-center text-xs text-on-surface-variant font-medium">
            Authorized Solutions Provider for Core Logistics &amp; Manufacturing Sectors
          </div>
        </motion.div>
      </section>

    </div>
  );
}
