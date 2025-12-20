export default function AboutSection() {
    return (
        <section id="about" className="w-full bg-gray-50 py-12 md:py-10">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col md:flex-row min-h-[400px] items-center gap-8 md:gap-10">
                    {/* 左侧图片区域 */}
                    <div className="w-full md:w-1/2 relative h-[300px] mt-0 md:mt-0">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80')"
                            }}
                        />
                    </div>

                    {/* 右侧文字内容区域 */}
                    <div className="w-full md:w-1/2 flex items-center bg-gray-50">
                        <div className="w-full px-0 md:px-8 lg:px-12 py-6 md:py-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                關於旭越
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                                <p className="text-base md:text-lg mb-2">
                                    <span className="font-semibold">GRAND MOON 旭越家族辦公室</span>
                                </p>
                                <p className="text-base md:text-lg">
                                    由跨領域專業團隊共同創立，匯聚文化底蘊、東方智慧與現代金融視野，致力為卓越家族提供全方位的財富傳承與事務管理服務。
                                </p>
                            </div>

                            {/* 查看更多按钮 */}
                            <div className="mt-10">
                                <button className="px-8 py-3 border-2 cursor-pointer border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white transition-colors duration-300 font-medium">
                                    查看更多
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

