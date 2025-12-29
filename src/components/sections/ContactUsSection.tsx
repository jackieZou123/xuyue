export default function ContactUsSection() {
  return (
    <section id="contact-us" className="w-full py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8 gap-4">
            <div className="w-[100px] h-px bg-gray-300"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-nowrap">
              聯絡我們
            </h2>
            <div className="w-[100px] h-px bg-gray-300"></div>
          </div>
        </div>
        
        {/* 联系信息和品牌理念 */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* 左侧：联系信息 */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                旭越家族辦公室
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium min-w-[60px]">網站：</span>
                  <a
                    href="https://www.grandmoon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5A059] hover:text-amber-900 hover:underline"
                  >
                    www.grandmoon.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium min-w-[60px]">郵箱：</span>
                  <a
                    href="mailto:admin@grandmoon.com"
                    className="text-[#C5A059] hover:text-amber-900 hover:underline"
                  >
                    admin@grandmoon.com
                  </a>
                </div>
              </div>
            </div>

            {/* 右侧：品牌理念 */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                品牌理念
              </h3>
              <p className="text-xl md:text-2xl font-semibold text-[#C5A059] mb-6 leading-relaxed">
                旭日初升，越創財富傳承
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                我們期待與您共同規劃家族百年基業
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

