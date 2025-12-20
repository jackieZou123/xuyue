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
                    <div className="w-[100px] h-px bg-gray-300"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">
                        我們的使命
                    </h3>
                    <div className="w-[100px] h-px bg-gray-300"></div>
                </div>   
                {/* 使命部分 */}
                <div className="text-center mb-16">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-amber-800 leading-relaxed max-w-4xl mx-auto">
                        以跨時代思維，協助家族實現長期財務穩定與家族和諧，在財富穩健增長的同時，傳承家族價值觀與傳統，建構跨代際的永續發展基石。
                    </p>
                </div>

                {/* 核心價值觀部分 */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-8 gap-4">
                        <div className="w-[100px] h-px bg-gray-300"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">
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

