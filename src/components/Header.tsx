import React, { useState } from 'react';
import { Menu, X, Headset, Award } from 'lucide-react';
import { ActiveTab } from '../types';
import VibgyorLogo from './Logo';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as ActiveTab, label: 'Home' },
    { id: 'products' as ActiveTab, label: 'Products' },
    { id: 'services' as ActiveTab, label: 'Services & Support' },
    { id: 'about' as ActiveTab, label: 'About Us' },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-16 border-b border-outline-variant/40 bg-surface/85 backdrop-blur-md flex items-center justify-between px-4 md:px-12 transition-all">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 text-primary hover:bg-surface-container-high rounded-full transition-all active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 cursor-pointer group active:scale-98 transition-all"
          >
            <VibgyorLogo className="scale-90 origin-left" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-sm font-medium px-4 py-2 rounded transition-all cursor-pointer ${
                  isActive
                    ? 'text-primary bg-primary/5 font-semibold shadow-2xs'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Support Hotline CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 bg-secondary-container/50 text-on-secondary-container px-3 py-1.5 rounded-full border border-white/40">
            <Award size={14} className="text-primary-container fill-primary-container" />
            <span className="text-xs font-semibold tracking-wide uppercase">16 Years of Excellence</span>
          </div>

          <button
            onClick={() => handleNavClick('services')}
            className="p-2 text-primary hover:bg-primary/5 rounded-full transition-all active:scale-95 flex items-center gap-1.5"
            title="Access Helpdesk & Services"
          >
            <Headset size={20} />
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-primary">Helpdesk</span>
          </button>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/25 backdrop-blur-xs md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white border-r border-outline-variant shadow-xl p-4 flex flex-col gap-2 animate-slide-right"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2 px-3">Navigation Menu</p>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between text-left font-sans text-sm font-medium px-4 py-3 rounded transition-all w-full ${
                    isActive
                      ? 'text-primary bg-primary/10 font-bold'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
              );
            })}
            
            <div className="mt-auto border-t border-outline-variant/30 pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary-container bg-secondary-container/35 p-3 rounded border border-white/50">
                <Award size={16} />
                <span className="text-xs font-semibold tracking-wide uppercase">16 Years Experience</span>
              </div>
              <p className="text-center text-[11px] text-outline font-sans">
                Vibgyor Infoways © 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
