export default function NewsSection() {
  const newsItems = [
    {
      title: "香港誕生「金融+影視文化」雙軌服務體：GRAND MOON FAMILY OFFICE與KONG BROS STUDIO雙雙啓航",
      image: "new1.webp",
      link: "/news/grand-moon-launch",
      source: "站内报道",
    },
    {
      title: "《信者》制片人于越：在感性与理性间打磨好故事",
      image: "new2.webp",
      link: "https://news.sina.com.cn/sx/2025-09-30/detail-infsecqm3301362.shtml",
      source: "新浪新闻",
    },
    {
      title: "在价值回归中寻找影视创作新坐标——从制片人于越的实践看行业转型",
      image: "new3.webp",
      link: "https://news.bjd.com.cn/2025/11/14/11406451.shtml",
      source: "北京日报",
    },
  ];

  return (
    <section id="news" className="w-full py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8 gap-4">
            <div className="w-[100px] h-px bg-gray-300"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-nowrap">
              旭越新聞
            </h2>
            <div className="w-[100px] h-px bg-gray-300"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            外接新聞報道 + 站內報道，整理事件進行發布
          </p>
        </div>
        
        {/* 新闻卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <a
              key={index}
              href={news.link}
              target={news.link.startsWith('http') ? '_blank' : '_self'}
              rel={news.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                {/* 图片区域 */}
                <div className="relative w-full h-[250px] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('${news.image}')`,
                    }}
                  />
                  
                  {/* 标题横幅 - 覆盖在图片底部，固定高度 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-900/50 backdrop-blur-sm p-4 min-h-[100px] flex flex-col justify-end">
                    <h3 className="text-white font-semibold text-base md:text-lg leading-tight mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-200 text-xs">{news.source}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

