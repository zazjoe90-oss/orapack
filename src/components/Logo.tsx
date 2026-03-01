import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://i.postimg.cc/HTXv9d9p/ORAPACK-ORA-PACK-MAROC-LOGO.png" 
        alt="ORA PACK" 
        className={`${iconOnly ? 'h-10' : 'h-12 md:h-14'} w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
