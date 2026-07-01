export type ActiveTab = 'home' | 'products' | 'services' | 'about' | 'contact';

export interface Product {
  id: string;
  name: string;
  category: 'Biometric' | 'Barcode Printers' | 'Scanners' | 'RFID Solutions' | 'Networking';
  specRibbon: string;
  status: 'In Stock' | 'Pre-Order' | 'Out of Stock';
  description: string;
  specs: {
    icon1: string; // lucide icon name
    label1: string;
    icon2: string; // lucide icon name
    label2: string;
  };
  image: string;
  pdfUrl?: string;
}

export interface InquiryFormState {
  fullName: string;
  companyName: string;
  workEmail: string;
  category: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface Partner {
  name: string;
  role: string;
}
