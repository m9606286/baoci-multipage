import React from 'react';

export default function BrandLogo() {
  return (
    <div className="flex items-center space-x-3">
      {/* 如果 logo.png 圖片本身已經包含「寶慈生命事業」文字，這裡只需保留 img 即可 */}
      <img
        src="/images/logo.png"
        alt="寶慈生命事業 Logo"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
