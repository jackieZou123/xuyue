import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "香港誕生「金融+影視文化」雙軌服務體：GRAND MOON FAMILY OFFICE與KONG BROS STUDIO雙雙啓航",
  description: "2025年1月21日，GRAND MOON FAMILY OFFICE與KONG BROS STUDIO在香港的聯合啓幕，構建「財富管理-文化創造」閉環生態。",
};

export default function NewsDetailPage() {
  const articleContent = [
    {
      type: "image",
      src: "/news/IMG_0232.jpg",
      alt: "GRAND MOON FAMILY OFFICE與KONG BROS STUDIO啓航",
    },
    {
      type: "paragraph",
      text: "2025年1月21日，香港——當傳統財富管理遇上現代文化產業，會碰撞出怎樣的未來？今日，GRAND MOON FAMILY OFFICE與KONG BROS STUDIO在香港的聯合啓幕，給出了一個頗具開創性的答案。這並非兩個獨立機構的簡單相鄰開業，而是一次旨在構建「財富管理-文化創造」閉環生態的戰略性協同嘗試，直接回應超高淨值客群對「資產配置與精神價值一體化管理」的深度需求。",
    },
    {
      type: "image",
      src: "/news/IMG_0435.JPG",
      alt: "GRAND MOON與KONG BROS STUDIO聯合啓幕",
    },
    {
      type: "heading",
      text: "從「管理財富」到「經營價值」：一種新服務哲學的浮現",
    },
    {
      type: "paragraph",
      text: "「財富的本質，早已超越數字的增長範疇，它更是價值、傳承與責任的載體。」GRAND MOON創始人Phoebe YU在致辭中開宗明義。她指出，新一代財富持有者的需求正在發生深刻演變，從單純的資產保值增值，擴展到家族聲譽、文化影響力乃至社會價值的塑造。GRAND MOON的使命，正是搭建一個融合金融專業、人文智慧與持久溫度的平台，提供超越傳統財務規劃的綜合解決方案。",
    },
    {
      type: "image",
      src: "/news/IMG_0432.JPG",
      alt: "GRAND MOON創始人Phoebe YU致辭",
    },
    {
      type: "paragraph",
      text: "這一理念得到了文化視角的共鳴。特邀嘉賓三明道長在分享中，將傳統文化中「德財兼備」、「穩中求進」的智慧與當代家族傳承相結合，為現代金融服務業注入了厚重的文化根基與長遠視角。",
    },
    {
      type: "image",
      src: "/news/PHOTO-327.jpg",
      alt: "三明道長分享傳統文化智慧",
    },
    {
      type: "heading",
      text: "當金融架構力注入內容創造力：一個可落地的協同模型",
    },
    {
      type: "paragraph",
      text: "協同的另一端，KONG BROS STUDIO展現了其將抽象文化力轉化為可持續資產的能力。其核心發起人萬軍老師闡述願景：「KONG BROS STUDIO旨在打造一個開放、協同、創新的內容創作與產業運營平台。我們將致力於挖掘優質故事，整合兩岸三地資源，探索影視內容與多元商業形態的結合，推動華語影視邁向新高度」。",
    },
    {
      type: "image",
      src: "/news/PHOTO-317.jpg",
      alt: "萬軍老師闡述KONG BROS STUDIO願景",
    },
    {
      type: "paragraph",
      text: "這意味著，未來雙方可為客戶提供的，可能不再局限於一份投資組合或一份信託方案，而是涵蓋「文化IP孵化-價值賦能-資產化運作」的全鏈條服務。",
    },
    {
      type: "heading",
      text: "行業矚目：一場雲集雙界標桿人物的開業禮",
    },
    {
      type: "paragraph",
      text: "此次開業的高規格，印證了行業對其模式創新性的關注。金融專場匯聚了香港主流信託機構及資深業內人士；影視專場則吸引了包括著名藝人鐘鎮濤夫婦、資深電影人文雋、知名製片人蕭定一等在內的多位業界標桿。現場來自知名演員高海寧等眾多行業夥伴的致賀，進一步體現了跨界融合所引發的廣泛共鳴。",
    },
    {
      type: "image",
      src: "/news/IMG_0232.jpg",
      alt: "開業典禮現場",
    },
    {
      type: "image",
      src: "/news/IMG_0249.JPG",
      alt: "行業嘉賓雲集",
    },
    {
      type: "heading",
      text: "前瞻：「雙軌生態」能否定義未來服務標準？",
    },
    {
      type: "paragraph",
      text: "在當前全球家族辦公室行業日益強調「軟性資產」配置、文化影響力投資興起的背景下，GRAND MOON FAMILY OFFICE與KONG BROS STUDIO的此次協同，可被視為一次超前實驗。它試圖打破金融與文創行業的傳統壁壘，將冰冷的資本與溫暖的文化敘事相結合，探索為頂尖財富群體提供「硬財富」與「軟實力」並舉的下一代服務方案。",
    },
    {
      type: "image",
      src: "/news/IMG_0233.jpg",
      alt: "雙軌生態服務模式",
    },
    {
      type: "paragraph",
      text: "此次開業，或將成為觀察香港作為國際財富管理中心，其專業服務能否向更高維度的「價值整合」階段演進的關鍵風向標。其探索的「金融賦能文化，文化反哺價值」閉環能否跑通，值得長期關注。",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* 返回按钮 */}
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <Link
            href="/#news"
            className="inline-flex items-center text-[#C5A059] hover:text-[#A0884A] transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>返回新聞列表</span>
          </Link>
        </div>

        {/* 文章内容 */}
        <article className="max-w-[900px] mx-auto px-4 pb-20">
          {/* 标题区域 */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              香港誕生「金融+影視文化」雙軌服務體：GRAND MOON FAMILY OFFICE與KONG BROS STUDIO雙雙啓航
            </h1>
            <div className="flex items-center text-gray-600 text-sm md:text-base">
              <time dateTime="2025-01-21">2025年1月21日</time>
              <span className="mx-2">•</span>
              <span>站内报道</span>
            </div>
          </header>

          {/* 文章正文 */}
          <div className="prose prose-lg max-w-none">
            {articleContent.map((item, index) => {
              if (item.type === "image") {
                return (
                  <figure
                    key={index}
                    className="my-8 md:my-12 rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </figure>
                );
              } else if (item.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 leading-tight"
                  >
                    {item.text}
                  </h2>
                );
              } else if (item.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed text-base md:text-lg mb-6"
                  >
                    {item.text}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* 文章底部 */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/#news"
              className="inline-flex items-center text-[#C5A059] hover:text-[#A0884A] transition-colors font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>返回新聞列表</span>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

