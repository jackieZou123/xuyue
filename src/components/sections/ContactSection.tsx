export default function ContactSection() {
  const services = [
    {
      title: "傳承信託服務",
      description: "通過深入分析市場趨勢和客戶需求，我們制定個性化的投資策略，涵蓋股票、債券、房地產和另類投資。專業團隊將持續監測和調整投資組合，確保資產的增值和風險的有效控制。",
      image: "xy6.webp",
    },
    {
      title: "傳統中西教育",
      description: "旨在為家族的子女提供全球化的學習體驗。通過與國際知名學校的合作，提供多元化的課程選擇和文化交流機會。從學術指導到文化活動，全方位支持學生的成長，培養全球視野和人際交往能力。",
      image: "xy7.webp",
    },
    {
      title: "傳媒融資平台",
      description: "連接香港與內地，致力於推動文化產業的創新與投資。作為中西文化交匯的最佳聚合點，香港為中國文化IP的出海提供獨特機遇。通過整合兩地的優勢，幫助創作者獲取資金與市場，推動中國文化在全球的傳播與發展，成為促進文化繁榮的重要橋樑。",
      image: "xy1.webp",
    },
    {
      title: "傳播醫療科技",
      description: "為家族成員提供高端健康管理方案。與全球頂尖醫療機構合作，為客戶提供專業的健康檢查、專科診療和康復服務。醫療團隊將根據每位成員的健康需求，制定個性化的健康計劃。",
      image: "xy14.webp",
    },
  ];

  return (
    <section id="contact" className="w-full bg-white">
      {/* 顶部深色Header区域 */}
      <div className="bg-[#C5A059] text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-sm md:text-base mb-4 opacity-90">我們的服務</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            為卓越家族提供全方位的財富傳承與事務管理服務
          </h2>
          <p className="text-base md:text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
            通過深入分析市場趨勢和客戶需求，我們制定個性化的投資策略，涵蓋股票、債券、房地產和另類投資。專業團隊將持續監測和調整投資組合，確保資產的增值和風險的有效控制。
          </p>
          
          {/* 向下箭头分隔符 */}
          <div className="mt-12 flex justify-center">
            <svg
              className="w-8 h-8 text-white opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 服务卡片区域 */}
      <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* 图片区域 */}
              <div className="w-full h-[200px] relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                />
              </div>

              {/* 内容区域 */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#C5A059]">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

