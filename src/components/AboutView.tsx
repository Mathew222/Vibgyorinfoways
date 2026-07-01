import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ABOUT_PARTNERS } from '../data';
import { 
  Award, 
  History, 
  Users, 
  ShieldCheck, 
  CircleDollarSign, 
  HeartHandshake, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

interface AboutViewProps {
  onTalkToExpert: () => void;
  onInquireCatalog: () => void;
}

export default function AboutView({ onTalkToExpert, onInquireCatalog }: AboutViewProps) {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  const partnerDetails: { [key: string]: string } = {
    'ZEBRA': 'Zebra Technologies is a global leader in enterprise-class barcode scanners, RFID readers, and industrial thermal printers used extensively in logistics, retail, and manufacturing sectors.',
    'CITIZEN': 'Citizen Systems delivers premium, ultra-rugged desktop label and receipt printing hardware with unique self-calibration engines and durable alloy mechanism layouts.',
    'MOTOROLA': 'Motorola Symbol offers industry-grade hand scanners and high-performance mobile computers capable of high-density 1D/2D label scanning in rugged warehouse environments.',
    'ESSL': 'ESSL Biometrics is India\'s premier provider of automated face recognition attendance systems, standalone fingerprint scanners, and physical access controllers.',
    'METROLOGIC': 'Metrologic Instruments (by Honeywell) designs precise, high-speed multi-laser omnidirectional barcode systems used for continuous high-volume product sorting.',
    'HONEYWELL': 'Honeywell Automation manufactures state-of-the-art enterprise-grade mobile terminals, wireless handheld scanners, and secure IoT sensory networks.',
    'EPSON': 'Epson Digital Solutions delivers leading high-speed POS thermal printers, label printers, and digital color printheads optimized for long-term checkout lanes.',
    'TVS': 'TVS Electronics provides cost-effective, high-reliability dot matrix printers, retail receipt thermal printers, and mechanical keyboards across South Asia.'
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 py-8 pb-28 md:pb-12 space-y-16 font-sans">
      
      {/* Hero legacy section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative min-h-[440px] flex items-center justify-center overflow-hidden rounded-2xl glass-hero shadow-premium text-center p-6 border border-white/10"
      >
        <div className="absolute inset-0 industrial-grid opacity-20" />
        
        <div className="relative z-10 max-w-3xl space-y-8 py-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold uppercase tracking-widest shadow-md border border-white/25"
          >
            16 Years Legacy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto"
          >
            Engineered for Precision, Driven by Passion
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="glass-panel-dark p-6 rounded-xl max-w-2xl mx-auto shadow-lg bg-white/5 border border-white/10"
          >
            <p className="text-sm md:text-base text-primary-fixed leading-relaxed">
              For over sixteen years, Vibgyor Infoways has been the cornerstone of industrial automation and IT infrastructure. We deliver world-class reliability with an uncompromising commitment to long-term hardware integrity.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Legacy of Excellence and Stats */}
      <section className="max-w-7xl mx-auto industrial-grid relative py-6 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Timeline copy block */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 glass-panel p-6 md:p-10 flex flex-col justify-center rounded-xl border border-white/60 shadow-premium"
          >
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              <History size={24} />
              <span>Our Legacy of Excellence</span>
            </h2>
            <p className="text-sm text-on-surface-variant mt-4 leading-relaxed">
              Founded in 2008, Vibgyor Infoways began with a simple mission: to bridge the gap between complex, rugged industrial hardware and end-user deployment accessibility. What started as a focused technical support hub in New Delhi has evolved into a powerhouse of barcode technology, thermal printing solutions, and enterprise networking hardware.
            </p>
            <p className="text-sm text-on-surface-variant mt-4 leading-relaxed">
              Our journey is marked by a relentless pursuit of technical mastery. We do not just sell equipment; we construct the operational backbone for logistics hubs, high-volume retail chains, and manufacturing plants across the region. Our engineers treat every specification with surgical precision.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="lg:col-span-4 grid grid-rows-2 gap-6">
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel-dark text-on-primary p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-primary hover:text-white transition-all duration-300 border border-white/25 shadow-sm"
            >
              <span className="text-4xl font-extrabold text-primary group-hover:text-white leading-none">16+</span>
              <span className="text-xs font-semibold uppercase tracking-widest mt-2 text-on-surface-variant group-hover:text-white/80">Years in Industry</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel-dark text-on-primary p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 border border-white/25 shadow-sm"
            >
              <span className="text-4xl font-extrabold text-primary group-hover:text-primary leading-none">5k+</span>
              <span className="text-xs font-semibold uppercase tracking-widest mt-2 text-on-surface-variant group-hover:text-on-secondary-container/80">Global Clients Served</span>
            </motion.div>
          </div>

          {/* Office Photo and Passion Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-72 md:h-80 bg-cover bg-center border border-outline-variant/40 rounded-xl shadow-premium grayscale hover:grayscale-0 transition-all duration-500" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2ow-t0MUriAOlLOqE5BMvzlQn5KI41LHV4Z2Y-A6CupUU_ZQ3Xt-MK2VpMZqV_Pf14Gy9UsJdXNBjfPVY64ZLPNycZtdJ6MCAPG1JlZTpMwFkQhNonF_2CohV7FXMYJts2GvAC4CvIyW8PQKenh_CTuyWFxuq1ognxbOnY5cnaRNEFtVDSGBqznBr1Sw28b5hs3MW1wRQ6-2HzsI3s24iLSN4GT6IrKSuRFV29Y4HcOukN77ogw1T7Uwv_V1rA7BsdKAOA9ICzKY5')" }}
          />

          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-panel p-6 md:p-8 flex items-center rounded-xl border border-white/60 shadow-premium"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-primary p-3.5 rounded-xl text-white shadow-md">
                <Users size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-primary">Passion-Driven Professionals</h3>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Our team consists of engineers and consultants who live and breathe technical telemetry. From troubleshooting RFID database discrepancies to configuring high-security biometric systems, our experts are committed to your uptime. We believe that professional support should be as reliable as the robust hardware we deploy.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Values section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary text-on-primary py-16 px-6 rounded-2xl relative overflow-hidden text-left border border-primary-container shadow-premium"
      >
        <div className="absolute inset-0 industrial-grid opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-panel-dark p-8 rounded-xl bg-white/5 border border-white/10 space-y-4 shadow-sm"
          >
            <CircleDollarSign size={36} className="text-primary-fixed-dim" />
            <h4 className="text-lg font-bold text-white">Affordable Quality</h4>
            <p className="text-xs text-primary-fixed/80 leading-relaxed">
              Enterprise solutions shouldn't carry an artificial premium. We optimize global supply chains to route factory savings directly to your margins.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-panel-dark p-8 rounded-xl bg-white/5 border border-white/10 space-y-4 shadow-sm"
          >
            <ShieldCheck size={36} className="text-primary-fixed-dim" />
            <h4 className="text-lg font-bold text-white">Technical Integrity</h4>
            <p className="text-xs text-primary-fixed/80 leading-relaxed">
              Every hardware module is subject to strenuous functional stress-testing to guarantee continuous operation before dispatching.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-panel-dark p-8 rounded-xl bg-white/5 border border-white/10 space-y-4 shadow-sm"
          >
            <HeartHandshake size={36} className="text-primary-fixed-dim" />
            <h4 className="text-lg font-bold text-white">Direct Technical Support</h4>
            <p className="text-xs text-primary-fixed/80 leading-relaxed">
              No robotic prompts, no delays. When you submit technical inquiries to Vibgyor Infoways, you reach engineers directly.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* Brand partners section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-outline">MANUFACTURER COALITION</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Authorized Brand Partners</h2>
          <p className="text-xs md:text-sm text-on-surface-variant max-w-xl mx-auto">
            Strategic alignments with the world's leading hardware manufacturers deliver authentic procurement. Click any logo for details.
          </p>
        </div>

        {/* Interactive descriptions */}
        <AnimatePresence mode="wait">
          {selectedPartner && (
            <motion.div 
              initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              className="p-4 bg-secondary-container/50 text-on-secondary-container rounded-xl border border-white max-w-2xl mx-auto flex items-start gap-3 text-left shadow-premium"
            >
              <Info size={20} className="text-primary shrink-0 mt-0.5 animate-pulse" />
              <div className="space-y-1">
                <p className="text-xs font-bold text-primary">Partner Insight: {selectedPartner}</p>
                <p className="text-xs leading-relaxed">{partnerDetails[selectedPartner] || 'Authorized distributor and service contract partner.'}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-outline-variant/30 border border-outline-variant/30 rounded-2xl overflow-hidden shadow-premium bg-white">
          {ABOUT_PARTNERS.map((partner) => {
            const isSelected = selectedPartner === partner.name;
            return (
              <motion.div 
                whileHover={{ scale: isSelected ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={partner.name}
                onClick={() => setSelectedPartner(isSelected ? null : partner.name)}
                className={`p-8 flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 ${
                  isSelected ? 'bg-primary text-white' : 'bg-white hover:bg-primary/5'
                }`}
              >
                <p className={`text-lg font-bold tracking-tight ${
                  isSelected ? 'text-white' : 'text-primary'
                }`}>
                  {partner.name}
                </p>
                <p className={`text-[10px] font-bold uppercase mt-1 tracking-wider ${
                  isSelected ? 'text-white/80' : 'text-on-surface-variant'
                }`}>
                  {partner.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Optimize Infrastructure CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 bg-surface-container-high/65 rounded-2xl relative overflow-hidden border border-outline-variant/20 shadow-premium"
      >
        <div className="absolute inset-0 industrial-grid opacity-15" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="glass-panel p-8 md:p-10 rounded-xl border border-white/60 space-y-6 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary leading-tight">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
              Schedule an AMC consult or receive a direct physical catalog of our certified biometrics, scanners, and thermal solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onTalkToExpert}
                className="bg-primary text-on-primary px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:shadow-premium hover:brightness-110 transition-all rounded-lg cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
              >
                <PhoneCall size={14} />
                <span>Speak with an Expert</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onInquireCatalog}
                className="border-2 border-primary text-primary px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-lg cursor-pointer shadow-2xs"
              >
                Download Full Catalog
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
