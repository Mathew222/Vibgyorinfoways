import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import { 
  Search, 
  Download, 
  CheckCircle, 
  Info, 
  Zap, 
  Cpu, 
  Users, 
  ShieldCheck, 
  Radio, 
  BatteryCharging, 
  Activity, 
  Lock, 
  Scissors, 
  Printer, 
  QrCode, 
  Layers, 
  Construction,
  MessageSquare
} from 'lucide-react';

// Maps icon name strings to Lucide elements safely
const IconHelper = ({ name, size = 16, className = "" }: { name: string; size?: number; className?: string }) => {
  switch (name) {
    case 'Zap': return <Zap size={size} className={className} />;
    case 'Cpu': return <Cpu size={size} className={className} />;
    case 'Users': return <Users size={size} className={className} />;
    case 'ShieldCheck': return <ShieldCheck size={size} className={className} />;
    case 'Radio': return <Radio size={size} className={className} />;
    case 'BatteryCharging': return <BatteryCharging size={size} className={className} />;
    case 'Activity': return <Activity size={size} className={className} />;
    case 'Lock': return <Lock size={size} className={className} />;
    case 'Scissors': return <Scissors size={size} className={className} />;
    case 'Printer': return <Printer size={size} className={className} />;
    case 'QrCode': return <QrCode size={size} className={className} />;
    case 'Layers': return <Layers size={size} className={className} />;
    default: return <Info size={size} className={className} />;
  }
};

interface ProductsViewProps {
  onInquireProduct: (productName: string) => void;
  onTalkToExpert: () => void;
}

export default function ProductsView({ onInquireProduct, onTalkToExpert }: ProductsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Equipment');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const categories = [
    'All Equipment',
    'Biometric',
    'Barcode Printers',
    'Scanners',
    'RFID Solutions',
    'Networking',
  ];

  // Filtering products list based on search and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specRibbon.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All Equipment' || 
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleDownloadManual = (id: string, name: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      
      // Simulate direct file download by creating a virtual text file
      const blob = new Blob([
        `VIBGYOR INFOWAYS - TECHNICAL DATASHEET\nProduct: ${name}\nGenerated timestamp: ${new Date().toISOString()}\nSLA Rating: 99.8%\nFor support: support@vibgyor.com`
      ], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${name.toLowerCase().replace(/\s+/g, "_")}_datasheet.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1200);
  };

  return (
    <div className="space-y-12 font-sans">
      
      {/* Header & Search */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-outline-variant/30">
        <div className="text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-outline">EQUIPMENT PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-1">Industrial IT Solutions</h2>
          <p className="text-sm md:text-base text-on-surface-variant max-w-xl mt-1">
            Precision hardware with dual backup, direct driver integration, and certified high-durability seals.
          </p>
        </div>

        {/* Real-time search */}
        <div className="relative w-full lg:w-96 shadow-sm rounded-xl">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search parts, specs, or attributes..."
            className="w-full pl-11 pr-4 py-3 bg-white/50 border border-outline-variant/60 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline text-sm shadow-inner"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary text-xs font-bold"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Category Chips Ribbon */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none snap-x scroll-smooth">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-sans text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-primary text-on-primary border-primary shadow-premium'
                  : 'bg-white/45 text-on-surface-variant hover:bg-white/95 border-outline-variant/50 shadow-xs'
              }`}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-16 rounded-xl text-center border border-dashed border-outline-variant max-w-lg mx-auto space-y-4 shadow-premium"
        >
          <Construction className="mx-auto text-outline animate-bounce" size={40} />
          <h4 className="text-lg font-bold text-primary">No Matching Hardware Found</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            We couldn't find any products in "{selectedCategory}" matching your query "{searchQuery}". Try updating your spelling or contact our helpdesk for bespoke configurations.
          </p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All Equipment'); }}
            className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded hover:bg-primary-container transition-colors uppercase tracking-wider shadow-sm"
          >
            Reset Filters
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProducts.map((product, index) => (
            <motion.article 
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.05, 0.3), type: "spring", stiffness: 150, damping: 18 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel overflow-hidden group hover:bg-white/65 transition-all duration-300 rounded-xl border border-white/50 flex flex-col justify-between shadow-premium hover:shadow-premium-hover"
            >
              {/* Product Header Photo */}
              <div className="relative h-56 bg-surface-container-low/25 overflow-hidden border-b border-white/30 flex items-center justify-center p-4">
                <img 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-[1.04] transition-transform duration-500 opacity-95 mix-blend-multiply" 
                  src={product.image} 
                />
                <div className="absolute top-4 left-4 spec-ribbon px-2.5 py-1 text-[10px] font-bold text-white tracking-widest uppercase rounded-xs shadow-md">
                  {product.specRibbon}
                </div>
              </div>

              {/* Product Details info */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-bold text-primary tracking-tight">
                      {product.name}
                    </h3>
                    <div className={`flex items-center gap-1 shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
                      product.status === 'In Stock' 
                        ? 'text-green-700 bg-green-50 border-green-200 shadow-2xs' 
                        : 'text-amber-700 bg-amber-50 border-amber-200 shadow-2xs'
                    }`}>
                      {product.status === 'In Stock' ? (
                        <CheckCircle size={10} className="fill-green-100 animate-pulse" />
                      ) : (
                        <Info size={10} />
                      )}
                      <span>{product.status}</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Specs badges */}
                <div className="grid grid-cols-2 gap-3 py-2 border-y border-outline-variant/20 text-xs font-semibold text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <IconHelper name={product.specs.icon1} className="text-outline shrink-0" />
                    <span className="truncate">{product.specs.label1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconHelper name={product.specs.icon2} className="text-outline shrink-0" />
                    <span className="truncate">{product.specs.label2}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2 pt-2">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onInquireProduct(product.name)}
                    className="flex-1 bg-primary text-on-primary py-2.5 px-4 text-xs font-bold rounded-lg hover:bg-primary-container transition-all uppercase tracking-wider shadow-md cursor-pointer text-center"
                  >
                    Inquire Now
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDownloadManual(product.id, product.name)}
                    disabled={downloadingId !== null}
                    className="p-2.5 glass-panel border border-outline-variant/60 rounded-lg text-primary hover:bg-white/80 hover:text-primary transition-all cursor-pointer shrink-0 disabled:opacity-50 shadow-2xs"
                    title="Download Datasheet / Manual"
                  >
                    {downloadingId === product.id ? (
                      <span className="animate-spin text-xs inline-block">⏳</span>
                    ) : (
                      <Download size={14} />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Custom Configuration CTA card */}
          <motion.div 
            whileHover={{ y: -6, scale: 1.01 }}
            className="border-2 border-dashed border-outline/30 flex flex-col items-center justify-center p-6 text-center glass-panel rounded-xl hover:border-primary/50 transition-all duration-300 group shadow-premium hover:shadow-premium-hover cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary shadow-sm">
              <Construction size={24} className="group-hover:rotate-12 transition-transform" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Custom Setup Needs?</h3>
            <p className="text-xs md:text-sm text-on-surface-variant mb-6 max-w-xs leading-relaxed">
              Need specialized OEM hardware, high-temperature labels, or multi-port biometric endpoints for a large scale enterprise?
            </p>
            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onTalkToExpert}
              className="px-6 py-2.5 bg-secondary text-on-secondary font-bold text-xs rounded-lg uppercase tracking-wider hover:bg-primary transition-all shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare size={14} />
              <span>Talk to Expert</span>
            </motion.button>
          </motion.div>
        </div>
      )}

    </div>
  );
}
