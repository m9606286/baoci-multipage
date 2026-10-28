import React from 'react';

export default function BrandLogo() {
  return (
    <div className="flex items-center space-x-3">
      <img src="/images/logo.png" alt="寶慈生命事業 Logo" className="h-10 w-auto object-contain" />
      <span className="font-serif-tc text-2xl font-bold tracking-wider text-ink-900">
        寶慈生命事業
      </span>
    </div>
  );
}
