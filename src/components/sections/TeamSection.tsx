'use client';

import { useState } from 'react';

export default function TeamSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "萬軍",
      title: "影視文化產業專家 | 資深製片人 | 電影投資顧問",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      coreAreas: [
        "電影項目開發與製作管理",
        "影視項目投資與風險控制",
        "國際電影市場發行策略",
      ],
      currentPositions: [
        "巔峰影視文化產業集團總裁",
        "創力影視文化傳媒合夥人",
        "中國人權發展基金會華益基金電影產業顧問",
      ],
      achievements: [
        "操盤多部國際獲獎影片，《雪豹》獲東京電影節金麒麟大獎",
        "引進發行《摔跤吧！爸爸》創行業投資回報紀錄",
        "20年行業經驗，累計參與作品票房超50億",
      ],
    },
    {
      name: "三明道长",
      title: "道家文化傳承人 | 風水命理專家 | 家族傳承顧問",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      coreAreas: [
        "傳統風水與現代環境規劃",
        "易學智慧與企業決策諮詢",
        "家族精神傳承與文化建設",
      ],
      professionalBackground: [
        "道教正一派出身，龍虎山天師府受籙",
        "五代風水世家傳承，深諳傳統術數",
        "二十年實戰經驗，服務眾多家族企業",
      ],
      advantages: [
        "融合道家智慧與現代管理",
        "為家族提供精神傳承與決策支持",
      ],
    },
    {
      name: "于越 Phoebe Yu",
      title: "旭越家族辦公室創辦人 | 影視製片人 | 出品人 | 投資人",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      coreAreas: [
        "家族財富傳承與資產配置",
        "影視文化項目投資製作",
        "跨境法律服務與風險管理",
      ],
      currentPositions: [
        "旭越家族辦公室創辦人兼CEO",
        "多部影視作品製片人、出品人、投资人",
        "北京孔氏兄弟影業有限公司投資人兼製作人",
        "南華集團控股有限公司法律顧問",
        "香港遼寧社團總會理事",
      ],
      advantages: [
        "獨特的法律+影視+投資跨領域背景",
        "深耕影視文化投資，精準把握內容價值",
        "熟悉內地與香港兩地法律與商業環境",
        "擅長為超高淨值家族定製多元化資產配置方案",
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // 渲染详细信息的辅助函数
  const renderDetails = (member: typeof teamMembers[0]) => {
    const sections = [];
    if (member.coreAreas) sections.push({ title: '核心領域', items: member.coreAreas });
    if (member.currentPositions) sections.push({ title: '現任職務', items: member.currentPositions });
    if (member.professionalBackground) sections.push({ title: '專業背景', items: member.professionalBackground });
    if (member.achievements) sections.push({ title: '行業成就', items: member.achievements });
    if (member.advantages) sections.push({ title: '專業優勢', items: member.advantages });

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {sections.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">{section.title}：</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="text-gray-700 text-xs md:text-sm flex items-start leading-relaxed">
                  <span className="text-[#C5A059] mr-2 shrink-0">●</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="team" className="w-full py-12 md:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-6 md:mb-8 gap-4">
            <div className="w-[100px] h-px bg-gray-300"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-nowrap">
              旭越核心團隊
            </h2>
            <div className="w-[100px] h-px bg-gray-300"></div>
          </div>
        </div>

        {/* 介绍段落 */}
        <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            我們的專業團隊來自於國內外知名院校，曾任職於包括美世集團、上海證券、諾亞財富、安聯集團、博時資本、華寶證券、國泰基金等國內外大型金融機構，具備豐富的基金研究投資經驗，擁有跨地域的視野與眼光。
          </p>
        </div>

        {/* 团队成员卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              {/* 卡片主体 - 固定高度 */}
              <div
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow md:cursor-pointer flex flex-col h-full"
                onClick={() => toggleExpand(index)}
              >
                {/* 头像区域 - 固定高度 */}
                <div className="w-full h-[250px] md:h-[300px] relative bg-gray-200 shrink-0">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${member.image}')`,
                    }}
                  />
                </div>

                {/* 基本信息 - 固定最小高度 */}
                <div className="p-4 md:p-6 grow flex flex-col justify-between min-h-[140px] md:min-h-[180px]">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {member.title}
                    </p>
                  </div>

                  {/* 展开指示 - 仅桌面端显示 */}
                  <div className="hidden md:flex items-center justify-between text-[#C5A059] mt-auto">
                    <span className="text-sm font-medium">
                      {expandedIndex === index ? '收起' : '查看詳情'}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''
                        }`}
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

              {/* 移动端：详细信息直接显示在卡片下方 */}
              <div className="md:hidden mt-3 bg-white rounded-lg shadow-lg border border-gray-200 overflow-visible">
                <div className="px-4 py-4">
                  {renderDetails(member)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 桌面端：详细信息 - 全宽展开区域 */}
        {expandedIndex !== null && (
          <div className="hidden md:block mt-8 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div className="px-8 py-6">
              {renderDetails(teamMembers[expandedIndex])}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

