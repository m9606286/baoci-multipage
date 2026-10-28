import React from 'react';

type BrandLogoProps = {
  variant?: 'header' | 'footer';
};

const logoSource = '/images/logo.png';

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const isFooter = variant === 'footer';

  return (
    <div className="flex items-center gap-2.5 shrink-0 group">
      <img
        src={logoSource}
        alt="寶慈生命事業"
        className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span
        className={`font-serif-tc text-lg md:text-xl font-bold tracking-wider ${
          isFooter ? 'text-white/90' : 'text-slate-800'
        }`}
      >
        寶慈生命事業
      </span>
    </div>
  );
}
