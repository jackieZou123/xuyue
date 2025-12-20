export default function WhatWeCanDoSection() {
  const services = [
    {
      icon: "🏛️",
      title: "全方位家族服務",
      subtitle: "財富傳承・風險隔離・代際共創",
      description: "尊享全方位家族辦公室構建指導，包括家族辦公室架構設計，滿足財富和家族需求。",
    },
    {
      icon: "🔑",
      title: "傳承信託",
      subtitle: "個性化投資策略",
      description: "股票・債券・房地產・另類投資。專業團隊將持續監測和調整投資組合，確保資產的增值和風險的有效控制。",
    },
    {
      icon: "📚",
      title: "中西教育",
      subtitle: "全球化學習體驗",
      description: "國際課程・文化交流・全球視野。通過與國際知名學校的合作，提供多元化的課程選擇和文化交流機會。",
    },
    {
      icon: "🌐",
      title: "傳媒融資",
      subtitle: "香港×北京等平台",
      description: "文化IP出海・產業創新・全球傳播。連接香港與內地，致力於推動文化產業的創新與投資。",
    },
    {
      icon: "🏥",
      title: "醫療科技",
      subtitle: "頂級健康管理",
      description: "高端檢查・專科診療・個性化方案。與全球頂尖醫療機構合作，為客戶提供專業的健康管理服務。",
    },
  ];

  return (
    <section id="what-we-can-do" className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4 gap-4">
            <div className="hidden md:block w-[100px] h-px bg-gray-300"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              我們能為您的家族做什麼
            </h2>
            <div className="hidden md:block w-[100px] h-px bg-gray-300"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mt-4">解決方案</p>
        </div>
        
        {/* 服务网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer group flex flex-col h-full"
            >
              {/* 图标 */}
              <div className="text-5xl mb-4 text-amber-800 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* 标题和副标题 */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-amber-800 font-medium mb-4">
                {service.subtitle}
              </p>

              {/* 描述 - 使用 grow 填充空间 */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 grow wrap-break-word">
                {service.description}
              </p>

              {/* 箭头链接 - 固定在底部 */}
              <div className="flex items-center text-amber-800 text-sm font-medium mt-auto">
                <span>了解更多</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

