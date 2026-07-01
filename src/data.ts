import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'z-series-pro',
    name: 'Vibgyor Z-Series Pro',
    category: 'Barcode Printers',
    specRibbon: 'Thermal Transfer',
    status: 'In Stock',
    description: 'Industrial-grade 300 DPI barcode printer with high-speed processing and dual-ribbon capacity.',
    specs: {
      icon1: 'Zap',
      label1: '14 ips Speed',
      icon2: 'Cpu',
      label2: 'Multi-Port I/O',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZm4KGNsXW_kIBbFVaXgAz79MgNSONHI9g3yzbsERSGfnDG6y8kD7uKWwn5U4OsZ0yaateYmagmJgLf1mZmGqw29tHO05W4sNr_MCzuWbQrpdsVbDO5Laa-ykOtLwLY7NCp4DKzIdcUf5yjetgRcZJT6aqP321wpjpt1b1iusHJLtJRYubs1_q5XMjvjqYbT3c2kS1-biomFlsQQVHcxEuvtF5JYZqoARaxshEvWa7XfzLkFXov_BX9SO8TztnKLr3-qVJPP2Epgrx',
  },
  {
    id: 'v-secure-face-id-x',
    name: 'V-Secure Face ID X',
    category: 'Biometric',
    specRibbon: 'AI Biometric',
    status: 'In Stock',
    description: 'Contactless facial recognition attendance system with masked-face detection technology.',
    specs: {
      icon1: 'Users',
      label1: '10k Capacity',
      icon2: 'ShieldCheck',
      label2: '0.5s Match',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2CaElPKsFig-AhnUoTLe3asSS_URgCQ1GoepXuwwznknI4FoUKLxjGX5wZTa-XfSkiaRdRlpUqBjfFGV3fUA08iIKgLHn5etZvqArCC7RbuH8RSaZbRFVVIKs9Wvezqa00Vayr40yjZqTRrhZCjcyV2LZkrK7SonH274gnuF64tNJ-suCZGKwrnlpr16PY7lbRCxJM9w0xvqd6SIt-kAwfsSvNQvebJtoi0eMuTZq6MsOt25R3f_RG5ahgIfaHV8lutx5bz-DEjnU',
  },
  {
    id: 'vibgyor-track-900',
    name: 'Vibgyor Track-900',
    category: 'RFID Solutions',
    specRibbon: 'RFID Solutions',
    status: 'Pre-Order',
    description: 'High-performance UHF RFID handheld reader with 15m read range and rugged IP65 protection.',
    specs: {
      icon1: 'Radio',
      label1: 'Multi-tag Read',
      icon2: 'BatteryCharging',
      label2: '12h Use',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDorZsMdHxD9pgAtMDfzYdsiiwji-GuRDqRpslyGql_nrmVuDzX9-GuLbvJL2OzHsb_oUbr_Bi2mF3hnykmjCGM47EWMywCkl58YRxX-LVvTaT35Fj_3GDD3iPCttjMAIPBW_O4pQzTZ7qySVDGB1U7q1EHH6n8NsHtXvWGcczDauFX2BE95YC8iQDugnbnDoGQDZdbBP8B6DyCmQ4VlDTpdgcNlt5KBNCc-B7DG3fo00IWTa-X3SO3UR_sA-TSNhr92Jibxw34ScMF',
  },
  {
    id: 'v-link-48g-managed',
    name: 'V-Link 48G Managed',
    category: 'Networking',
    specRibbon: 'Networking',
    status: 'In Stock',
    description: 'L3 Managed PoE+ Switch with 48 Gigabit ports and 4 SFP+ 10G uplinks for core enterprise networks.',
    specs: {
      icon1: 'Activity',
      label1: '740W PoE',
      icon2: 'Lock',
      label2: 'Advanced Security',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwzJIKYWK40oLPKkmnxNRXABdI9oNp4BXcpe6bs6ErlCW10Cudb1bH5fSynKilA407e6YQadnU9_rUDPdT52Up48srPCIgqikb4KaLwWrgy4wLmYjUMmWvURcMozGmcYMBsufqa99JGcht0u69Nf41IWAx7NMk90xL41PQthWW2KrsMl9PVPDmzLjSttkuDnih9FPyAO9uGuJVIncpVDE2XICeEaBKXkFsh1EzUavFuz5zt0cWbSSDC-wOvfJIDF2I7S_VHmflUCLj',
  },
  {
    id: 'v-print-80r-elite',
    name: 'V-Print 80R Elite',
    category: 'Barcode Printers',
    specRibbon: 'Thermal Receipt',
    status: 'In Stock',
    description: '80mm high-speed thermal receipt printer with auto-cutter for modern retail and POS terminals.',
    specs: {
      icon1: 'Scissors',
      label1: 'Auto-Cutter',
      icon2: 'Printer',
      label2: '250mm/s Speed',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh3OaoQPbqobb722ewdZBu1J_ckOHmQGbc3vveg7IqkpOLrYdyivBxXkOZ-0AbguahaE9AbSZaVCvb8sBzWozAdIKxJogsrCT1LtVbHXhbxnlAIhcdCxTsWx5jIhlJSIwPe_CrNZgvwmDz0J8RVQkXoJGDYGUpCY05VsTUwjxr8ppyWuqlGGvMQNj_SbBrwzdCDdsS7Xs2SAzfs6DJIdUgvjkwDMGdQzrV41dI6jC5iCwgCsTqsdHvPrGoU-YJXmLb-xcYoJ7R-CFR',
  },
  {
    id: 'v-scan-ultra-2d',
    name: 'V-Scan Ultra 2D Scanner',
    category: 'Scanners',
    specRibbon: '2D Laser Scanners',
    status: 'In Stock',
    description: 'Professional handheld 2D scanner with precise laser alignment and high-density code reading capabilities.',
    specs: {
      icon1: 'QrCode',
      label1: 'Fast 1D/2D Scan',
      icon2: 'Layers',
      label2: 'Rugged IP54 Rated',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNUWoctDWC5KhFImmmlPPmZcyrUEFspp4J4IjNBtMTBVCdsPbUgZxjxvHMVMx1kjs4uz2Fm92iDXKorV7f6hdFGkRw7HuJI9YJ_6uDbdAed4OBjZNTj-Dp88HUP_-vhRfz1nhEMqXunTdIoEs_AbOirpgSD7t9wBwFcA6FbhgXm011nXWZ8BMI1GMCaGnp5TL1stZZIXky4qjKnxFTEgiYtE3A23P2yQ3orEXhP0abdKhjw90Ex7GxIxsAn01TKa7vwSFjiSygeyGP',
  }
];

export const GLOBAL_PARTNERS = [
  { name: 'ZEBRA', description: 'Premier Partner' },
  { name: 'MOTOROLA', description: 'Authorized Solutions' },
  { name: 'HONEYWELL', description: 'Enterprise Elite' },
  { name: 'TOSHIBA', description: 'Hardware Specialist' },
];

export const ABOUT_PARTNERS = [
  { name: 'ZEBRA', desc: 'Technologies' },
  { name: 'CITIZEN', desc: 'Systems' },
  { name: 'MOTOROLA', desc: 'Symbol' },
  { name: 'ESSL', desc: 'Biometrics' },
  { name: 'METROLOGIC', desc: 'Instruments' },
  { name: 'HONEYWELL', desc: 'Automation' },
  { name: 'EPSON', desc: 'Digital Solutions' },
  { name: 'TVS', desc: 'Electronics' },
];

export const FAQs = [
  {
    q: 'What brand partnerships do you have?',
    a: 'Vibgyor Infoways has direct partnerships with Zebra, Motorola Symbol, Honeywell, Citizen, TVS Electronics, Metrologic, and ESSL Biometrics, ensuring 100% genuine hardware and direct technical backing.',
  },
  {
    q: 'How does your AMC (Annual Maintenance Contract) support work?',
    a: 'We offer structured 24/7 priority support with SLA compliance up to 99.8%. Our team guarantees on-site service within 4 hours for critical operations failure.',
  },
  {
    q: 'Do you provide SDKs and integration support for biometric systems?',
    a: 'Yes, all biometric systems like V-Secure Face ID X include full SDK integration documentation, drivers, and API support for popular ERP, HR, and payroll platforms.',
  },
];
