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
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50" role="banner">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <nav className="flex items-center justify-between" aria-label="主要導航">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')} 
              className="flex items-center gap-2 group"
              aria-label="返回首頁 - GRAND MOON 旭越家族辦公室"
            >
              <div className="relative">
                <div className="text-xl md:text-2xl font-bold text-amber-800 group-hover:text-amber-900 transition-colors">
                  GRAND MOON
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-800 group-hover:w-full transition-all duration-300" aria-hidden="true"></div>
              </div>
              <span className="hidden md:block text-xs text-gray-500 font-light">旭越家族辦公室</span>
            </a>

            {/* 桌面端导航 */}
            <ul className="hidden lg:flex gap-4 xl:gap-6 items-center" role="list">
              {navItems.map((item, index) => (
                <li key={index} role="listitem">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm xl:text-base text-gray-700 hover:text-amber-800 transition-colors whitespace-nowrap relative group"
                    aria-label={`導航至 ${item.label}`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* 移动端菜单按钮 */}
            <button
              className="lg:hidden text-gray-700 hover:text-amber-800 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "關閉選單" : "打開選單"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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
        </div>
      </header>

      {/* 移动端侧边栏菜单 */}
      {isMenuOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* 侧边栏 */}
          <div 
            id="mobile-menu"
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out"
            role="navigation"
            aria-label="移動端導航選單"
          >
            <div className="flex flex-col h-full">
              {/* 侧边栏头部 */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="text-xl font-bold text-amber-800">GRAND MOON</div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2"
                  aria-label="關閉選單"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* 菜单项 */}
              <nav className="flex-1 overflow-y-auto py-4" aria-label="導航連結">
                <ul className="flex flex-col" role="list">
                  {navItems.map((item, index) => (
                    <li key={index} role="listitem">
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-800 transition-colors border-l-4 border-transparent hover:border-amber-800"
                        aria-label={`導航至 ${item.label}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* 底部信息 */}
              <div className="p-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">旭越家族辦公室</p>
                <p className="text-xs text-gray-400">旭日初升，越創財富傳承</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

