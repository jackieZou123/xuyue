export default function PartnersSection() {
  const partnerCategories = [
    {
      category: "傳統產業夥伴",
      color: "amber",
      partners: [
        { name: "華盛玩具", description: "世界領先的玩具製造商之一" },
        { name: "四海旅遊", description: "全港最優秀的三家機票代理商之一" },
        { name: "南華地產", description: "房地產顧問及項目投資" },
      ],
    },
    {
      category: "金融科技夥伴",
      color: "blue",
      partners: [
        { name: "BLITZ NETWORK", description: "早期加密貨幣投資者聯盟（礦工+跨境貿易）" },
        { name: "COIN HERO", description: "全球最大的比特幣ATM網絡" },
        { name: "FGA", description: "一流的金融科技財富管理解決方案" },
        { name: "Merit Capital", description: "運用Web3技術提升社區" },
      ],
    },
    {
      category: "文化娛樂夥伴",
      color: "purple",
      partners: [
        { name: "星輝海外", description: "致力將中國文化IP推向國際市場" },
        { name: "寰亞電影", description: "高質量華語電影的投資製作和發行" },
      ],
    },
    {
      category: "金融服務夥伴",
      color: "green",
      partners: [
        { name: "UTGL", description: "領先的全球私人信托專家" },
        { name: "高盛集團", description: "世界領先的投資銀行、證券和投資管理公司" },
        { name: "嘉實基金", description: "大陸最早成立的10家基金管理公司之一" },
        { name: "新火科技", description: "一站式的數字資產服務平台" },
      ],
    },
    {
      category: "生物科技夥伴",
      color: "teal",
      partners: [
        { name: "北京亞全能生物科技", description: "與全球頂尖實驗室合作" },
      ],
    },
  ];

  const colorClasses = {
    amber: "border-l-amber-800 bg-amber-50",
    blue: "border-l-blue-800 bg-blue-50",
    purple: "border-l-purple-800 bg-purple-50",
    green: "border-l-green-800 bg-green-50",
    teal: "border-l-teal-800 bg-teal-50",
  };

  return (
    <section id="partners" className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8 gap-4">
            <div className="w-[100px] h-px bg-gray-300"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-nowrap">
              戰略合作夥伴
            </h2>
            <div className="w-[100px] h-px bg-gray-300"></div>
          </div>
        </div>
        
        {/* 合作伙伴分类展示 */}
        <div className="space-y-8">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* 分类标题 */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {category.category}
              </h3>
              
              {/* 合作伙伴列表 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.partners.map((partner, partnerIndex) => (
                  <div
                    key={partnerIndex}
                    className={`border-l-4 ${colorClasses[category.color as keyof typeof colorClasses]} p-5 rounded-r-lg hover:shadow-md transition-shadow`}
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
          ))}
        </div>
      </div>
    </section>
  );
}

