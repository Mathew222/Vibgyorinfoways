import React from 'react';
import { ActiveTab } from '../types';
import { MapPin, Globe, Mail, FileText, Shield, Award } from 'lucide-react';
import VibgyorLogo from './Logo';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onWarrantyClick?: () => void;
}

export default function Footer({ setActiveTab, onWarrantyClick }: FooterProps) {
  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface mt-20 py-16 px-4 md:px-12 border-t border-white/5 font-sans relative overflow-hidden">
      {/* Background industrial Grid decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,51,102,0.15),_transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Company Intro */}
        <div className="col-span-1 md:col-span-1.5 space-y-4">
          <div className="flex items-center gap-2">
            <VibgyorLogo light={true} className="scale-95 origin-left" />
          </div>
          <p className="text-sm text-outline-variant/80 leading-relaxed max-w-sm">
            Leading provider of mission-critical IT equipment and industrial solutions for over 16 years. Delivering unmatched reliability through expert engineering and direct global brand partnerships.
          </p>
          <div className="flex gap-3 pt-2">
            <a 
              href="https://vibgyor.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-outline/30 flex items-center justify-center hover:bg-surface-variant/20 hover:text-white transition-all text-outline-variant"
              title="Official Website"
            >
              <Globe size={16} />
            </a>
            <a 
              href="mailto:info@vibgyor.com" 
              className="w-9 h-9 rounded-full border border-outline/30 flex items-center justify-center hover:bg-surface-variant/20 hover:text-white transition-all text-outline-variant"
              title="Email Corporate Office"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Navigation Solutions */}
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-widest text-outline-variant mb-6 border-b border-outline/20 pb-2">
            Quick Navigation
          </h5>
          <ul className="space-y-3 text-sm text-outline-variant/80">
            <li>
              <button 
                onClick={() => handleNavClick('home')} 
                className="hover:text-primary-fixed-dim transition-colors cursor-pointer text-left"
              >
                Home Overview
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('products')} 
                className="hover:text-primary-fixed-dim transition-colors cursor-pointer text-left"
              >
                Product Catalog
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('services')} 
                className="hover:text-primary-fixed-dim transition-colors cursor-pointer text-left"
              >
                Inquiry &amp; Support
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')} 
                className="hover:text-primary-fixed-dim transition-colors cursor-pointer text-left"
              >
                About Company
              </button>
            </li>
          </ul>
        </div>

        {/* Support Services */}
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-widest text-outline-variant mb-6 border-b border-outline/20 pb-2">
            Professional Support
          </h5>
          <ul className="space-y-3 text-sm text-outline-variant/80">
            <li>
              <a href="#drivers" className="hover:text-primary-fixed-dim transition-colors block">
                Drivers &amp; SDKs
              </a>
            </li>
            <li>
              <a href="#amc" className="hover:text-primary-fixed-dim transition-colors block">
                On-Site AMC Services
              </a>
            </li>
            <li>
              <button 
                onClick={onWarrantyClick}
                className="hover:text-primary-fixed-dim transition-colors text-left font-medium text-white flex items-center gap-1.5 cursor-pointer"
              >
                <Shield size={14} className="text-primary-fixed-dim" />
                <span>Warranty Lookup Tool</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('services')}
                className="hover:text-primary-fixed-dim transition-colors text-left"
              >
                Submit Technical Ticket
              </button>
            </li>
          </ul>
        </div>

        {/* Headquarter Address & Trust Badge */}
        <div className="space-y-6">
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-outline-variant mb-4 border-b border-outline/20 pb-2">
              Corporate Office
            </h5>
            <div className="flex items-start gap-2.5 text-sm text-outline-variant/80">
              <MapPin size={16} className="text-primary-fixed-dim shrink-0 mt-0.5" />
              <p>
                Vibgyor Infoways Pvt. Ltd.<br />
                Plot No. 42, Industrial Area Phase II,<br />
                New Delhi - 110020, India
              </p>
            </div>
          </div>

          <div className="glass-panel-dark p-4 rounded-lg border border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <Award className="text-primary-fixed-dim" size={24} />
              <div>
                <p className="text-xs font-bold text-white uppercase leading-tight">16 Years of Trust</p>
                <p className="text-[10px] text-primary-fixed-dim font-semibold tracking-wide uppercase">Authorized OEM Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-wider text-outline-variant/60 uppercase">
        <p>© 2026 Vibgyor Infoways Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
