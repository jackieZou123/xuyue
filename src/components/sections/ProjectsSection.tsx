import Image from 'next/image';

export default function ProjectsSection() {
  const projects = [
    {
      title: "傳承信託",
      description: "連通香港最大的三家信託公司，管理金融資產，企業資產，非金融資産和另類資産",
      image: "xy9.webp",
      projects: null,
    },
    {
      title: "傳統中西教育",
      description: "提供全球教育規劃，培養優秀家族人才",
      image: "xy16.webp",
      projects: null,
    },
    {
      title: "傳媒融資平臺",
      description: "投資優質影視文化娛樂項目，推動產業發展",
      image: "xy5.webp",
      projects: ["卧虎藏龙", "信者", "不可能的任务", "哪吒之魔童降世"],
    },
    {
      title: "傳播醫療科技",
      description: "提供全球醫療合作，守護家族健康未來",
      image: "xy14.webp",
      projects: ["康方生物", "陞罄生技", "全心醫藥生物", "蔚流生物科技"],
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8 gap-4">
            <div className="w-[100px] h-px bg-gray-300"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-nowrap">
              旭越項目
            </h2>
            <div className="w-[100px] h-px bg-gray-300"></div>
          </div>
        </div>

        {/* 项目列表 */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-8 opacity-0 animate-fade-in-up`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* 图片区域 */}
              <div className="w-full md:w-1/2 group">
                <div
                  className={`w-full ${project.title === "傳承信託"
                      ? "h-[300px] md:h-[450px]"
                      : "h-[250px] md:h-[300px]"
                    } bg-cover bg-center bg-no-repeat rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden`}
                  style={{
                    backgroundImage: `url('${project.image}')`,
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/5 group-hover:to-black/0 transition-all duration-500"></div>
                </div>
              </div>

              {/* 内容区域 */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-[#C5A059] relative inline-block group">
                  <span className="relative z-10">{project.title}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] group-hover:w-full transition-all duration-500"></span>
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                  {project.description}
                </p>
                {project.title === "傳承信託" && (
                  <div className="mb-4">
                    <Image
                      src="/ccxt.png"
                      alt="傳承信託"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
                {project.projects && (
                  <div className="mt-4 md:mt-6">
                    <p className="text-sm text-gray-500 mb-2">項目案例：</p>
                    <div className="flex flex-wrap gap-2">
                      {project.projects.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-amber-100 hover:text-[#C5A059] transition-colors duration-300 cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

