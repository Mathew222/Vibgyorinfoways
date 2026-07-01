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

  // Animation variants for full-screen hero staggered entrance
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Modern Full-Screen Hero Section with High-Quality Background & Readability Overlay */}
      <motion.section 
        variants={heroContainerVariants}
        initial="hidden"
        animate="show"
        className="relative w-full min-h-[85vh] lg:h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center overflow-hidden px-4 md:px-8 py-16"
      >
        {/* Background Image: High-Quality Industrial Barcode Logistics Operations with Zoom-in Effect */}
        <motion.div 
          initial={{ scale: 1.02 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat select-none pointer-events-none"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000')`
          }}
        />

        {/* High-Contrast Corporate Dark Overlay for Perfect Typography Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85 backdrop-blur-[1.5px]" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8">
          
          {/* Badge: Staggered Fade-in */}
          <motion.div 
            variants={heroItemVariants}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/40 text-primary px-4 py-2 rounded-full font-mono text-xs font-bold tracking-widest uppercase shadow-glow"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>Authorized Enterprise Systems Integrator</span>
          </motion.div>

          {/* Large Bold Headline */}
          <motion.h1 
            variants={heroItemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight max-w-4xl font-sans"
          >
            Mission-Critical <span className="text-primary bg-clip-text">Industrial Hardware</span> for the Supply Chain
          </motion.h1>

          {/* Short Description */}
          <motion.p 
            variants={heroItemVariants}
            className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl font-light leading-relaxed font-sans"
          >
            Vibgyor Infoways delivers high-performance barcode scanning systems, automated biometrics, and heavy-duty thermal printing hardware. Built for 99.9% uptime compliance to ensure your logistics, warehousing, and enterprise operations never halt.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div 
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => {
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-primary text-on-primary px-8 py-4 font-bold text-sm rounded-lg hover:shadow-glow-strong hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider shadow-lg duration-200"
            >
              <span>Explore Equipment Portfolio</span>
              <ArrowRight size={16} />
            </button>
            
            <button 
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white/10 text-white border border-white/25 px-8 py-4 font-bold text-sm rounded-lg hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer uppercase tracking-wider backdrop-blur-xs duration-200 flex items-center justify-center"
            >
              Technical Helpdesk
            </button>
          </motion.div>

          {/* Horizontal Stats Trust row */}
          <motion.div 
            variants={heroItemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-10 border-t border-white/10 w-full max-w-3xl mt-6"
          >
            <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-white font-black text-2xl sm:text-3xl tracking-tight">16+ Years</span>
              <span className="text-white/60 font-mono text-xs uppercase tracking-wider mt-1">Industry Excellence</span>
            </div>
            <div className="text-center sm:text-left flex flex-col items-center sm:items-start border-y sm:border-y-0 sm:border-x border-white/10 py-3 sm:py-0 sm:px-8">
              <span className="text-white font-black text-2xl sm:text-3xl tracking-tight">99.9% SLA</span>
              <span className="text-white/60 font-mono text-xs uppercase tracking-wider mt-1">Operational Uptime</span>
            </div>
            <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-white font-black text-2xl sm:text-3xl tracking-tight">Direct OEM</span>
              <span className="text-white/60 font-mono text-xs uppercase tracking-wider mt-1">Certified Solutions</span>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Structured Constraints Content Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-16 pb-28 md:pb-12 space-y-24 text-center">

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

    </div>
  );
}
