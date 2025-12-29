export default function Footer() {
  return (
    <footer className="w-full text-white" style={{ backgroundColor: '#3a2818' }} role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 公司信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C5A059]">GRAND MOON</h3>
            <p className="text-lg font-semibold mb-2 text-white">旭越家族辦公室</p>
            <p className="text-white-300 text-sm mb-4 leading-relaxed">
              旭日初升，越創財富傳承
            </p>
            <p className="text-white-400 text-xs">
              為卓越家族提供全方位的財富傳承與事務管理服務
            </p>
          </div>

          {/* 快速导航 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C5A059]">快速導航</h3>
            <ul className="space-y-2 text-white-300 text-sm">
              <li>
                <a href="#home" className="hover:text-[#C5A059] transition-colors">
                  首頁
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C5A059] transition-colors">
                  關於旭越
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A059] transition-colors">
                  我們的服務
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C5A059] transition-colors">
                  旭越項目
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#C5A059] transition-colors">
                  核心團隊
                </a>
              </li>
            </ul>
          </div>

          {/* 更多信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C5A059]">更多信息</h3>
            <ul className="space-y-2 text-white-300 text-sm">
              <li>
                <a href="#what-we-can-do" className="hover:text-[#C5A059] transition-colors">
                  我們能為您做什麼
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#C5A059] transition-colors">
                  旭越新聞
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#C5A059] transition-colors">
                  戰略合作夥伴
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-[#C5A059] transition-colors">
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C5A059]">聯繫我們</h3>
            <ul className="space-y-3 text-white-300 text-sm">
              <li>
                <span className="block text-white-400 mb-1">網站</span>
                <a
                  href="https://www.grandmoon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] hover:text-[#D4B068] transition-colors"
                >
                  www.grandmoon.com
                </a>
              </li>
              <li>
                <span className="block text-white-400 mb-1">郵箱</span>
                <a
                  href="mailto:admin@grandmoon.com"
                  className="text-[#C5A059] hover:text-[#D4B068] transition-colors"
                >
                  admin@grandmoon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="pt-8 border-t border-[#C5A059]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white-400 text-sm">
            <p>&copy; 2025 GRAND MOON 旭越家族辦公室. 保留所有權利.</p>
            <p className="text-xs text-white-500">我們期待與您共同規劃家族百年基業</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

