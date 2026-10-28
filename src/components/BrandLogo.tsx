import React from 'react';

export default function BrandLogo() {
  return (
    <div className="flex items-center space-x-3">
      {/* 品牌 圖示 / Icon */}
      <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
        寶
      </div>

      {/* 品牌名稱：只保留這一組文字 */}
      <span className="font-serif-tc text-2xl font-bold tracking-wider text-ink-900 group-hover:text-gold-600 transition-colors">
        寶慈生命事業
      </span>
    </div>
  );
}
