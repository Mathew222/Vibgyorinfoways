import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryFormState } from '../types';
import { FAQs } from '../data';
import { 
  Award, 
  Settings, 
  ShieldCheck, 
  User, 
  Building2, 
  Mail, 
  Briefcase, 
  FileText, 
  Send, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Navigation,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';

interface SupportViewProps {
  prefilledProduct: string;
  setPrefilledProduct: (product: string) => void;
}

export default function SupportView({ prefilledProduct, setPrefilledProduct }: SupportViewProps) {
  const [form, setForm] = useState<InquiryFormState>({
    fullName: '',
    companyName: '',
    workEmail: '',
    category: 'Barcode Solutions',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [directionMessage, setDirectionMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // If a product was clicked for inquiry, populate the message form!
  useEffect(() => {
    if (prefilledProduct) {
      setForm((prev) => ({
        ...prev,
        category: 'Barcode Solutions',
        message: `Hello Vibgyor Team,\n\nI am interested in acquiring information/specifications for the product: "${prefilledProduct}".\n\nPlease send us a quotation for custom enterprise supply.`,
      }));
      // Clear after populating so user can edit freely without overrides
      setPrefilledProduct('');
      // Scroll to the form element smoothly
      const formEl = document.getElementById('inquiry-form-element');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [prefilledProduct, setPrefilledProduct]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.workEmail) {
      alert('Please fill out all mandatory fields.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Reset form
      setForm({
        fullName: '',
        companyName: '',
        workEmail: '',
        category: 'Barcode Solutions',
        message: '',
      });
      setTimeout(() => setSuccess(false), 6000);
    }, 1500);
  };

  const handleGetDirections = (hubName: string) => {
    setDirectionMessage(`Requesting navigation parameters for ${hubName}... Coordinates successfully calculated!`);
    setTimeout(() => setDirectionMessage(null), 4000);
  };

  return (
    <div className="space-y-16 font-sans">
      
      {/* Hero Header */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-sans text-xs font-bold border border-white/40 shadow-xs">
            <Award size={14} className="text-primary fill-primary" />
            <span>16 Years of Excellence</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight tracking-tight">
            Precision Support for Your Infrastructure
          </h2>
          
          <p className="text-sm md:text-base text-on-surface-variant max-w-lg leading-relaxed">
            Connect with our technical field engineers. From thermal hardware diagnostics to custom firmware configuration, we ensure your daily industrial flow never experiences latency.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#inquiry-form-element" 
              className="bg-primary text-on-primary px-8 py-3.5 rounded font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-premium flex items-center gap-2"
            >
              <span>Submit Inquiry</span>
              <Send size={12} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#headquarters-panel" 
              className="border border-primary text-primary px-8 py-3.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-primary/5 transition-all text-center shadow-2xs"
            >
              Support Hub Locations
            </motion.a>
          </div>
        </motion.div>

        {/* SLA Card Panel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative h-80 md:h-96 rounded-xl overflow-hidden shadow-premium border border-outline-variant/30"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10" />
          <img 
            alt="Vibgyor IT Support Center Lab" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJxF46a-rZFV087cJWmm78jdYTf3nDcDD4nIJEEwgqBcpS9IpxreoHXqL9Q9hOnVbeoF5TWHgKw6tg8jRUf1ka2Bpx9QUw8Z2PaR45KDX0JvYR0SWqqpSfoAnIiWcu-UZI0iV598laU7pbssKnjZIAN4wYY36D1fhZoIk7ZV_9_UX2z0aVvecRj8h9c0s5ScYl9Vh6eB5M2pHhuD9eNkKe3r_tZWM-RZqJP06GzGualt4dIFsDbzsOMh6QzArfvusH1TmrgBXnAxRN" 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md p-5 rounded-lg border-l-4 border-secondary shadow-premium"
          >
            <p className="text-3xl font-extrabold text-primary leading-none m-0">99.8%</p>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mt-1">SLA Compliance Rate</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SLA & Help Hotline Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
        
        {/* Hotline Contact channels */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="lg:col-span-2 glass-panel p-6 md:p-8 rounded-xl relative overflow-hidden group shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-white/60"
        >
          <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div>
                <Settings className="text-secondary animate-spin-slow mb-3" size={32} />
                <h3 className="text-xl font-bold text-primary">Technical Helpdesk</h3>
                <p className="text-xs text-on-surface-variant mt-1">Direct corporate ticketing system.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">24/7 Hotline Tier</p>
                <p className="text-xs text-on-surface-variant mt-0.5">For active AMC contract holders</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Global Hotline</p>
                <p className="text-lg md:text-xl font-bold text-primary hover:text-secondary transition-colors cursor-pointer">+91 11 4500 0000</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Email Ticketing</p>
                <p className="text-lg md:text-xl font-bold text-primary hover:text-secondary transition-colors cursor-pointer">support@vibgyor.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantee details */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-primary text-on-primary p-6 md:p-8 rounded-xl border border-primary-container shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="shimmer-bg absolute inset-0 pointer-events-none opacity-40" />
          <div className="relative z-10 space-y-3">
            <h3 className="text-lg font-bold text-white">Service Guarantee</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              We resolve hardware and biometric sensor degradation with direct parts hot-swap. Backup units are provided on-site immediately.
            </p>
          </div>

          <ul className="space-y-2.5 relative z-10 pt-4 text-xs font-medium text-white/90">
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary-fixed-dim shrink-0" />
              <span>Standard On-Site Calibration</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary-fixed-dim shrink-0" />
              <span>100% Genuine Certified OEM Spares</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary-fixed-dim shrink-0" />
              <span>Full Technical Team Training Session</span>
            </li>
          </ul>
        </motion.div>

      </div>

      {/* Inquiry Form & Headquarters directions panels */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="headquarters-panel">
        
        {/* Interactive form block */}
        <div className="lg:col-span-7 text-left" id="inquiry-form-element">
          <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-premium border border-white/60">
            <h2 className="text-2xl font-bold text-primary">Technical Inquiry Desk</h2>
            <p className="text-xs text-on-surface-variant mt-1 mb-6">
              Detail your hardware layout specifications. Our consulting engineering division responds with proposals within 1 business day.
            </p>

            <AnimatePresence mode="wait">
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 bg-green-50 border border-green-200 rounded-xl text-center space-y-4 shadow-sm"
                >
                  <CheckCircle className="mx-auto text-green-600 animate-bounce" size={48} />
                  <h4 className="text-lg font-bold text-green-900">Proposal Request Received</h4>
                  <p className="text-sm text-green-700 leading-relaxed max-w-sm mx-auto">
                    Thank you! Your inquiry has been routed to our technical support desk. An executive will get back to you with specs and catalog pricing shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
                        <User size={12} className="text-outline" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                        className="w-full bg-white/50 border border-outline-variant/60 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg outline-none shadow-inner"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
                        <Building2 size={12} className="text-outline" />
                        <span>Company Name</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleInputChange}
                        placeholder="Logistics Solutions Ltd"
                        className="w-full bg-white/50 border border-outline-variant/60 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg outline-none shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
                        <Mail size={12} className="text-outline" />
                        <span>Work Email *</span>
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        required
                        value={form.workEmail}
                        onChange={handleInputChange}
                        placeholder="jane@logistics.com"
                        className="w-full bg-white/50 border border-outline-variant/60 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg outline-none shadow-inner"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
                        <Briefcase size={12} className="text-outline" />
                        <span>Inquiry Category</span>
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleInputChange}
                        className="w-full bg-white/50 border border-outline-variant/60 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg outline-none cursor-pointer shadow-sm"
                      >
                        <option value="Barcode Solutions">Barcode Solutions</option>
                        <option value="RFID Systems">RFID Systems</option>
                        <option value="Networking Hardware">Networking Hardware</option>
                        <option value="Technical AMC">Technical AMC / Maintenance</option>
                        <option value="Biometric systems">Biometrics Attendance</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
                      <FileText size={12} className="text-outline" />
                      <span>Message / Hardware Specifications</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Specify target barcode volumes, biometric system capacity, thermal ribbon types, etc..."
                      className="w-full bg-white/50 border border-outline-variant/60 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg outline-none resize-y shadow-inner"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-on-primary py-3.5 font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 rounded-lg shadow-premium cursor-pointer"
                  >
                    {submitting ? 'Routing Ticket...' : 'Send inquiry'}
                    <Send size={12} />
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Corporate Address & Hub Maps panel */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          {/* Map panel */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="glass-panel overflow-hidden rounded-2xl shadow-premium border border-white/60 transition-all duration-300"
          >
            <div className="h-44 bg-surface-variant relative overflow-hidden">
              <div 
                className="absolute inset-0 grayscale opacity-45 contrast-125 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASIsnsQSHI3E1wloLemLFAKoBHQBrMUZlMtbq4jQASo9i8OauooD4yHt54M-k_1rN9ZgYz9Z26sTB5HgFFdKNBJio01HX4c3Ue9mR5V0n-jqEYMrwyOxDW5VWXG1oZpTH6GbRq9Tj5srhLhXzAEaUGSGpbE3kewhqEnh2GWV5ZvM3lg321_2UXcqPJBeeGh9dp6aYA1Jovt_V_Uq9s-Ifz0t45dNecGXDe4iLCnrmYVa6UdMgr6nvNBLS9vcAz-3nAILQ58_5_r4rU')" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-on-primary p-3 rounded-full shadow-lg animate-bounce">
                  <MapPin size={24} className="text-white fill-white/25" />
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-lg font-bold text-primary">Corporate Headquarters</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                  Plot No. 42, Industrial Area Phase II,<br />
                  Okhla Phase III, New Delhi - 110020, India
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-outline-variant/20 text-xs font-semibold">
                <div className="flex items-center gap-3 text-primary">
                  <Phone size={14} className="text-outline animate-pulse" />
                  <span>+91 9999 123 456</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <Mail size={14} className="text-outline" />
                  <span>info@vibgyor.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regional hubs directions card */}
          <div className="glass-panel p-6 border border-white/60 rounded-xl shadow-premium text-left">
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Regional Hubs</h4>
            
            <AnimatePresence>
              {directionMessage && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 text-xs font-semibold text-green-700 bg-green-50 p-2 border border-green-200 rounded-lg shadow-sm"
                >
                  {directionMessage}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                <div>
                  <p className="text-xs font-bold text-on-surface">Mumbai Hub</p>
                  <p className="text-[11px] text-on-surface-variant">Andheri East Tech Park, Maharashtra</p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => handleGetDirections('Mumbai Hub')}
                  className="text-primary hover:bg-primary/5 p-2 rounded-full transition-colors cursor-pointer"
                  title="Calculate Directions to Mumbai"
                >
                  <Navigation size={16} />
                </motion.button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-on-surface">Bangalore Branch</p>
                  <p className="text-[11px] text-on-surface-variant">Electronics City Phase I, Karnataka</p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => handleGetDirections('Bangalore Hub')}
                  className="text-primary hover:bg-primary/5 p-2 rounded-full transition-colors cursor-pointer"
                  title="Calculate Directions to Bangalore"
                >
                  <Navigation size={16} />
                </motion.button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="space-y-6 pt-6 border-t border-outline-variant/20 text-left">
        <div className="text-center">
          <HelpCircle className="mx-auto text-secondary mb-2" size={32} />
          <h3 className="text-2xl font-bold text-primary">Helpdesk FAQs</h3>
          <p className="text-xs text-on-surface-variant">Common quick solutions for hardware procurement &amp; support.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {FAQs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white/45 border border-outline-variant/30 rounded-lg overflow-hidden transition-all shadow-premium">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center px-5 py-4 font-sans text-sm font-semibold text-primary text-left cursor-pointer hover:bg-surface-container-low/20"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <Minus size={16} className="shrink-0 text-secondary" /> : <Plus size={16} className="shrink-0 text-primary" />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 pt-1 text-xs md:text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
