export default function PartnersSection() {
  // 合并所有合作伙伴到一个列表，按参考图片顺序
  const partners = [
    { name: "華盛玩具", description: "世界領先的玩具製造商之一" },
    { name: "四海旅遊", description: "全港最優秀的三家機票代理商之一" },
    { name: "南華地產", description: "房地產顧問及項目投資" },
    { name: "BLITZ NETWORK", description: "早期加密貨幣投資者聯盟（礦工+跨境貿易）" },
    { name: "COIN HERO", description: "全球最大的比特幣ATM網絡" },
    { name: "FGA", description: "一流的金融科技財富管理解決方案" },
    { name: "Merit Capital", description: "運用Web3技術提升社區" },
    { name: "星輝海外", description: "致力將中國文化IP推向國際市場" },
    { name: "寰亞電影", description: "高質量華語電影的投資製作和發行" },
    { name: "UTGL", description: "領先的全球私人信托專家" },
    { name: "高盛集團", description: "世界領先的投資銀行、證券和投資管理公司" },
    { name: "嘉實基金", description: "大陸最早成立的10家基金管理公司之一" },
    { name: "新火科技", description: "一站式的數字資產服務平台" },
    { name: "北京亞全能生物科技", description: "與全球頂尖實驗室合作" },
  ];

  return (
    <section id="partners" className="w-full py-20 relative overflow-hidden">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
           backgroundImage: "url('/bg_w.webp')"
        }}
      />03

      {/* 淡色遮罩层，确保内容清晰 */}
2.      <div className="absolute inset-0 bg-white/60"></div>
..0

      {/* 内容区域 */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#C5A059] mb-3">
            STRATEGIC PARTNER
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#C5A059]">
            &gt;戰略合作伙伴&gt;
          </p>
        </div>

        {/* 合作伙伴列表 - 两列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-5 hover:bg-white transition-colors shadow-sm"
            >
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {partner.name}
              </h4>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

