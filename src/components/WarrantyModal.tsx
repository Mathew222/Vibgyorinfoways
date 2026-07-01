import React, { useState } from 'react';
import { X, ShieldCheck, ShieldAlert, Calendar, Printer, Search } from 'lucide-react';

interface WarrantyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WarrantyResult {
  serial: string;
  product: string;
  status: 'Active' | 'Expired';
  startDate: string;
  endDate: string;
  amcCovered: boolean;
}

export default function WarrantyModal({ isOpen, onClose }: WarrantyModalProps) {
  const [serial, setSerial] = useState('');
  const [result, setResult] = useState<WarrantyResult | null>(null);
  const [searched, setSearched] = useState(false);

  const mockDb: { [key: string]: WarrantyResult } = {
    'Z-SERIES': {
      serial: 'Z-880921-X',
      product: 'Vibgyor Z-Series Pro (Thermal Printer)',
      status: 'Active',
      startDate: '2025-01-15',
      endDate: '2027-01-14',
      amcCovered: true,
    },
    'FACEID': {
      serial: 'FID-339281',
      product: 'V-Secure Face ID X (Biometric attendance)',
      status: 'Active',
      startDate: '2025-06-01',
      endDate: '2026-05-31',
      amcCovered: false,
    },
    'TRACK900': {
      serial: 'TRK-900445',
      product: 'Vibgyor Track-900 (RFID Handheld Reader)',
      status: 'Expired',
      startDate: '2024-03-10',
      endDate: '2025-03-09',
      amcCovered: false,
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = serial.trim().toUpperCase();
    if (!query) return;

    setSearched(true);
    // Direct matching or fuzzy matching
    let found: WarrantyResult | null = null;
    for (const key of Object.keys(mockDb)) {
      if (query.includes(key) || key.includes(query)) {
        found = mockDb[key];
        break;
      }
    }

    if (found) {
      setResult(found);
    } else {
      setResult(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs font-sans">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-outline-variant/50 overflow-hidden animate-scale-up">
        
        {/* Header */}
        <div className="bg-primary text-white px-5 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-left">
            <ShieldCheck size={20} className="text-primary-fixed-dim" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Warranty Verification</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-xs text-on-surface-variant leading-relaxed text-left">
            Verify if your industrial IT scanner, biometric panel, or thermal printer is registered under global Vibgyor warranty or covered by active AMC contracts.
          </p>

          <form onSubmit={handleSearch} className="space-y-3">
            <label className="block text-xs font-bold text-on-surface-variant text-left">
              Serial Number or Keyword
            </label>
            <div className="relative">
              <input
                type="text"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                placeholder="Type e.g. Z-SERIES, FACEID, or TRACK900"
                className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl text-xs outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all uppercase"
              />
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-2.5 font-bold text-xs uppercase tracking-wider rounded-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              Verify System Status
            </button>
          </form>

          {/* Result Area */}
          {searched && (
            <div className="pt-4 border-t border-outline-variant/30 text-left animate-fade-in">
              {result ? (
                <div className="space-y-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/40">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-outline uppercase">Database Record</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide border ${
                      result.status === 'Active' 
                        ? 'text-green-700 bg-green-50 border-green-200' 
                        : 'text-red-700 bg-red-50 border-red-200'
                    }`}>
                      {result.status}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-primary">{result.product}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-[11px] text-on-surface-variant font-medium pt-1">
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-outline uppercase tracking-wider font-bold">Start Date</p>
                      <p className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{result.startDate}</span>
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-outline uppercase tracking-wider font-bold">End Date</p>
                      <p className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{result.endDate}</span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-2.5 mt-2 border-t border-outline-variant/20 flex justify-between items-center">
                    <span className="text-[11px] font-semibold text-on-surface-variant">Active AMC Support Coverage:</span>
                    <span className={`text-[11px] font-bold ${result.amcCovered ? 'text-green-600' : 'text-outline-variant'}`}>
                      {result.amcCovered ? '✓ Covered' : '✗ No AMC'}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3 items-start">
                  <ShieldAlert size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-red-900">Serial Number Not Found</p>
                    <p className="text-[11px] text-red-700 leading-normal">
                      We found no registered warranty record for code "{serial.toUpperCase()}". Please confirm the accuracy of your serial sticker or submit an inquiry ticket.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-surface-container-low/50 border-t border-outline-variant/30 text-center">
          <p className="text-[10px] text-outline font-semibold uppercase tracking-wider">Vibgyor Infoways Database Systems</p>
        </div>

      </div>
    </div>
  );
}
