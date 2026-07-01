import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean; // If true, uses white text/dark background styling
}

export default function VibgyorLogo({ className = "h-10", light = false }: LogoProps) {
  // Brand colors matching the uploaded logo:
  // Green base: #2E6F40 (primary) or #1b261f (dark)
  // Yellow accent: #E8C807 / #E2E31C
  // Orange accent: #F17A21 / #E95D0F
  
  const textColor = light ? 'text-white' : 'text-primary';
  const taglineColor = light ? 'text-yellow-300' : 'text-secondary';
  const subtextColor = light ? 'text-white/95' : 'text-primary';

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-1">
        {/* Main Brand Logo Graphic */}
        <svg 
          viewBox="0 0 280 85" 
          className="h-10 w-auto"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Custom Stylized "V" */}
          <path 
            d="M 12 18 C 12 18, 25 8, 48 8 C 30 22, 28 42, 38 60 C 42 68, 45 72, 40 72 C 34 72, 24 52, 18 36 C 14 28, 12 24, 12 18 Z" 
            fill={light ? "#FFFFFF" : "#2E6F40"} 
          />
          <path 
            d="M 16 14 C 18 10, 48 8, 85 8 C 65 24, 45 42, 36 68" 
            stroke={light ? "#FFFFFF" : "#2E6F40"} 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          
          {/* Custom Stylized "i" with dual swooshes */}
          {/* Orange crescent */}
          <path 
            d="M 64 30 C 58 35, 54 45, 62 58 C 58 48, 60 38, 64 30 Z" 
            fill="#F17A21" 
          />
          {/* Yellow/Green crescent */}
          <path 
            d="M 66 32 C 72 38, 76 52, 60 72 C 74 58, 72 44, 66 32 Z" 
            fill="#E2E31C" 
          />
          {/* Dot of the 'i' */}
          <circle cx="82" cy="22" r="4.5" fill="#E2E31C" />

          {/* Letters "b", "g" in geometric font style */}
          <text 
            x="86" 
            y="54" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="800" 
            fontSize="32" 
            fill={light ? "#FFFFFF" : "#2E6F40"}
            letterSpacing="-1"
          >
            bg
          </text>

          {/* Custom Stylized "j" tail swoop */}
          <path 
            d="M 125 32 L 125 45 C 125 58, 120 74, 98 80 C 120 78, 130 68, 130 45 L 130 32 Z" 
            fill="#68BA7F" 
          />
          <path 
            d="M 125 32 C 125 32, 128 58, 150 78 C 132 76, 126 62, 125 32 Z" 
            fill="#E2E31C" 
          />

          {/* Letters "or" */}
          <text 
            x="132" 
            y="54" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="800" 
            fontSize="32" 
            fill={light ? "#FFFFFF" : "#2E6F40"}
            letterSpacing="-1"
          >
            or
          </text>

          {/* Tagline: "...the man machine interface" */}
          <text 
            x="126" 
            y="70" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="500" 
            fontSize="8.5" 
            fill={light ? "#E2E31C" : "#687d6d"}
          >
            ...the man machine interface
          </text>
        </svg>
      </div>
      
      {/* Brand Text below */}
      <span 
        className={`font-sans text-[11px] font-bold uppercase tracking-[0.24em] mt-0.5 leading-none ${subtextColor}`}
      >
        Vibgyor Infoways
      </span>
    </div>
  );
}
