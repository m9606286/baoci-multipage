import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: '關於我們', path: '/' },
    { name: '生前契約', path: '/preneed' },
    { name: '服務項目', path: '/services' },
    { name: '契約商品', path: '/products' },
    { name: '信託公開', path: '/trust' },
    { name: '聯絡我們', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <BrandLogo />
            <div className="flex flex-col">
              <span className="font-serif-tc text-2xl font-bold tracking-wider text-ink-900 group-hover:text-gold-600 transition-colors">
                寶慈生命事業
              </span>
            </div>
          </Link>

          {/* 桌機版導覽選單 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-gold-600 relative py-2 ${
                  isActive(item.path)
                    ? 'text-gold-600 font-semibold'
                    : 'text-ink-600'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* 免費諮詢專線 */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0800600603"
              className="inline-flex items-center space-x-2 bg-ink-900 hover:bg-ink-800 text-stone-100 px-4 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>0800-600-603</span>
            </a>
          </div>

          {/* 行動裝置漢堡選單按鈕 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-ink-700 hover:text-gold-600 hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 行動裝置選單展開區塊 */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive(item.path)
                  ? 'bg-gold-50 text-gold-700 font-semibold'
                  : 'text-ink-700 hover:bg-stone-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:0800600603"
            className="flex items-center justify-center space-x-2 bg-ink-900 text-stone-100 px-4 py-3 rounded-xl text-sm font-medium mt-4"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>0800-600-603 免費諮詢</span>
          </a>
        </div>
      )}
    </header>
  );
}
