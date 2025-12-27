export default function ServicesSection() {
    const values = [
        {
            title: "專業深耕",
            description: "融合多元領域專業知識，提供深度定制化的家族解決方案",
        },
        {
            title: "誠信為本",
            description: "恪守最高誠信標準，建立透明、可信賴的世代合作關係",
        },
        {
            title: "全心承諾",
            description: "以家族長遠福祉為核心，提供極致專注的服務體驗",
        },
        {
            title: "永續傳承",
            description: "專注跨代際規劃，讓家族精神財富與物質財富同步傳承",
        },
    ];

    return (
        <section id="services" className="w-full py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex items-center justify-center mb-8 gap-4">
                    <div className="w-[100px] h-px bg-amber-800"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-800 whitespace-nowrap">
                        我們的使命
                    </h3>
                    <div className="w-[100px] h-px bg-amber-800"></div>
                </div>   
                {/* 使命部分 */}
                <div className="mb-16">
                    {/* 主标题 */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 text-center mb-8 leading-tight">
                        以極致專業為卓越家族賦能
                    </h2>
                    
                    {/* 描述段落 - 左对齐 */}
                    <div className="max-w-4xl mx-auto space-y-4 text-left">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            GRAND MOON 旭越家族辦公室（Global Family Office, GFO）堅持以極致專業為卓越家族賦能，力求幫助其家族、企業乃至其家族辦公室解決全生命周期面臨的諸多挑戰。
                        </p>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            為其提供全面化、定制化、機構化的服務。
                        </p>
                    </div>
                </div>

                {/* 核心價值觀部分 */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-8 gap-4">
                        <div className="w-[100px] h-px bg-gray-300"></div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-nowrap">
                            核心價值觀
                        </h3>
                        <div className="w-[100px] h-px bg-gray-300"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-lg border-l-4 border-amber-800"
                            >
                                <h4 className="text-xl font-semibold mb-3 text-amber-800">
                                    ● {value.title}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 底部小字 */}
                <div className="text-center pt-8 border-t border-gray-200">
                    <p className="text-sm md:text-base text-gray-500 italic leading-relaxed max-w-3xl mx-auto">
                        我們深信，真正的家族傳承不僅是財富的延續，更是價值觀、智慧與文化的永恆傳遞。
                    </p>
                </div>
            </div>
        </section>
    );
}

