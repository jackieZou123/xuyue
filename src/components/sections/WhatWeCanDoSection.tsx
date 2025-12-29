export default function WhatWeCanDoSection() {
  // 线条图标组件
  const LineIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center ${className}`}>
      {children}
    </div>
  );

  const services = [
    {
      icon: (
        <LineIcon>
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            {/* 桌子 */}
            <rect x="8" y="32" width="48" height="4" rx="1" />
            <rect x="12" y="36" width="4" height="20" />
            <rect x="48" y="36" width="4" height="20" />
            {/* 椅子 */}
            <rect x="20" y="40" width="12" height="16" rx="1" />
            <circle cx="26" cy="44" r="2" />
            {/* 植物 */}
            <circle cx="50" cy="28" r="4" />
            <path d="M50 24v4M48 26h4" />
          </svg>
        </LineIcon>
      ),
      title: "全方位家族服務",
      description: "尊享全方位家族辦公室構建指導，包括家族辦公室架構設計，滿足財富和家族需求。",
    },
    {
      icon: (
        <LineIcon>
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            {/* 房子/建筑 */}
            <path d="M32 8L12 24v32h40V24z" />
            <path d="M12 24h40M32 8v16" />
            <rect x="24" y="36" width="16" height="20" />
            <circle cx="32" cy="46" r="2" />
          </svg>
        </LineIcon>
      ),
      title: "傳承信託",
      description: "股票・債券・房地產・另類投資。專業團隊將持續監測和調整投資組合，確保資產的增值和風險的有效控制。",
    },
    {
      icon: (
        <LineIcon>
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            {/* 书本 */}
            <rect x="14" y="12" width="36" height="40" rx="1" />
            <path d="M14 24h36M14 32h28M14 40h32" />
            <circle cx="32" cy="48" r="2" />
          </svg>
        </LineIcon>
      ),
      title: "中西教育",
      description: "國際課程・文化交流・全球視野。通過與國際知名學校的合作，提供多元化的課程選擇和文化交流機會。",
    },
    {
      icon: (
        <LineIcon>
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            {/* 文档/文件 */}
            <path d="M16 8h28l8 8v36H16V8z" />
            <path d="M44 8v8h8M20 24h24M20 32h20M20 40h24" />
            {/* $ 符号 */}
            <path d="M36 28c0-2 1.5-4 4-4s4 2 4 4c0 2-1.5 4-4 4s-4 2-4 4c0 2 1.5 4 4 4s4-2 4-4M40 20v32" />
          </svg>
        </LineIcon>
      ),
      title: "傳媒融資",
      description: "文化IP出海・產業創新・全球傳播。連接香港與內地，致力於推動文化產業的創新與投資。",
    },
    {
      icon: (
        <LineIcon>
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            {/* 医疗/健康 */}
            <circle cx="32" cy="24" r="8" />
            <path d="M24 32v16h16V32M28 40h8" />
            <path d="M20 48h24" />
          </svg>
        </LineIcon>
      ),
      title: "醫療科技",
      description: "高端檢查・專科診療・個性化方案。與全球頂尖醫療機構合作，為客戶提供專業的健康管理服務。",
    },
  ];

  return (
    <section id="what-we-can-do" className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            我們能為您的家族做什麼
          </h2>
        </div>

        {/* 服务网格 - 参考图片的2x3布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white flex flex-col h-full group cursor-pointer text-center items-center"
            >
              {/* 线条图标 */}
              <div className="mb-6 text-[#C5A059] flex justify-center">
                {service.icon}
              </div>

              {/* 标题 */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {service.title}
              </h3>

              {/* 描述 */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 grow">
                {service.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

