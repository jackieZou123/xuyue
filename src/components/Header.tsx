'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: '首頁', href: '#home' },
    { label: '關於旭越', href: '#about' },
    { label: '我們的使命', href: '#services' },
    { label: '旭越服務', href: '#contact' },
    { label: '旭越項目', href: '#projects' },
    { label: '核心團隊', href: '#team' },
    { label: '解決方案', href: '#what-we-can-do' },
    { label: '旭越新聞', href: '#news' },
    { label: '合作夥伴', href: '#partners' },
    { label: '聯絡我們', href: '#contact-us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-amber-800">
            GRAND MOON
          </div>

          {/* 桌面端导航 */}
          <ul className="hidden lg:flex gap-4 xl:gap-6 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm xl:text-base text-gray-700 hover:text-amber-800 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 移动端菜单按钮 */}
          <button
            className="lg:hidden text-gray-700 hover:text-amber-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* 移动端下拉菜单 */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <ul className="flex flex-col gap-2 pt-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-2 text-gray-700 hover:text-amber-800 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

