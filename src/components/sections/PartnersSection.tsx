export default function PartnersSection() {
  // 合并所有合作伙伴到一个列表，按参考图片顺序
  const partners = [
    { name: "華德資訊", description: "華德資訊是製造業之一" },
    { name: "閃海集團", description: "全球領先的區塊鏈應用之一" },
    { name: "南華物業", description: "房地產開發及物業投資" },
    { name: "BLITZ NETWORK", description: "基于區塊鏈加密貨幣投資者聯盟" },
    { name: "COIN HERO", description: "全球最大的比特幣ATM網絡" },
    { name: "星輝網絡", description: "致力于打造中國文化IP的自媒體市場" },
    { name: "寶安電影", description: "致力于數字影視電影的投資、製作和發行" },
    { name: "UTGL", description: "領先的金融和人信託專家" },
    { name: "FGA", description: "為客戶提供一流的金融和財富管理企業" },
    { name: "Merit Capital", description: "WEB3區塊鏈的投資者和孵化器" },
    { name: "尚泰集團", description: "世界領先的投資銀行、證券和投資管理公司" },
    { name: "富育基金", description: "亞洲最頂尖的私募股權基金管理公司之一" },
    { name: "新大科技", description: "一流的數字資產服務平台" },
    { name: "Q企鵝下個飯", description: "合作企業領先的研發單位" },
  ];

  return (
    <section id="partners" className="w-full py-20 relative overflow-hidden">
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80')"
        }}
      />
      {/* 淡色遮罩层，确保内容清晰 */}
      <div className="absolute inset-0 bg-white/60"></div>
      
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

