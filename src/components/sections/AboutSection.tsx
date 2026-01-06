export default function AboutSection() {
    // 照片拼图数据
    const galleryImages = [
        {
            url: "xy3.webp",
            alt: "开业典礼"
        },
        {
            url: "xy2.webp",
            alt: "团队会议"
        },
        {
            url: "xy4.webp",
            alt: "商务活动"
        },
        {
            url: "xy13.webp",
            alt: "合作签约"
        },
    ];

    return (
        <section id="about" className="w-full bg-gray-50 py-12 md:py-20">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* 上半部分：主图和文字 */}
                <div className="flex flex-col md:flex-row min-h-[400px] items-center gap-8 md:gap-10 mb-12 md:mb-16">
                    {/* 左侧图片区域 */}
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
                            style={{
                                backgroundImage: "url('xy10.webp')"
                            }}
                        />
                    </div>

                    {/* 右侧文字内容区域 */}
                    <div className="w-full md:w-1/2 flex items-center bg-gray-50">
                        <div className="w-full px-0 md:px-8 lg:px-12 py-6 md:py-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                關於旭越
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-base md:text-lg mb-2">
                                    <span className="font-semibold">GRAND MOON 旭越家族辦公室</span>
                                </p>
                                <p className="text-base md:text-lg">
                                    由跨領域專業團隊共同創立，匯聚文化底蘊、東方智慧與現代金融視野，致力為卓越家族提供全方位的財富傳承與事務管理服務。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 下半部分：照片拼图 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative h-[200px] md:h-[250px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat hover:scale-110 transition-transform duration-300"
                                style={{
                                    backgroundImage: `url('${image.url}')`
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

