export default function ProjectsSection() {
  const projects = [
    {
      title: "傳承信託",
      description: "連通香港最大的三家信託公司，管理金融資產，企業資產，非金融資産和另類資産",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      projects: null,
    },
    {
      title: "傳統中西教育",
      description: "提供全球教育規劃，培養優秀家族人才",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
      projects: null,
    },
    {
      title: "傳媒融資平臺",
      description: "投資優質影視文化娛樂項目，推動產業發展",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      projects: ["卧虎藏龙", "信者", "不可能的任务", "哪吒之魔童降世"],
    },
    {
      title: "傳播醫療科技",
      description: "提供全球醫療合作，守護家族健康未來",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
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
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* 图片区域 */}
              <div className="w-full md:w-1/2">
                <div
                  className="w-full h-[300px] bg-cover bg-center bg-no-repeat rounded-lg"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                  }}
                />
              </div>

              {/* 内容区域 */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                  {project.description}
                </p>
                {project.projects && (
                  <div className="mt-6">
                    <p className="text-sm text-gray-500 mb-2">項目案例：</p>
                    <div className="flex flex-wrap gap-2">
                      {project.projects.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
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

