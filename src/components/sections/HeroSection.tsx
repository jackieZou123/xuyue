export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.webp')"
        }}
      >
        {/* 背景遮罩层，确保文字可读性 */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* 英文标题 */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-light tracking-widest opacity-90">
            GRAND MOON FAMILY OFFICE
          </h2>
        </div>

        {/* 中文主标题 */}
        <h1 className="text-5xl md:text-7xl font-bold mb-10 md:mb-12 tracking-tight">
          旭越家族办公室
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl mb-16 md:mb-20 font-light tracking-wide">
          旭日初升，越創財富傅承
        </p>

        {/* 标语区域 */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-24">
          <div className="space-y-6 md:space-y-8 text-lg md:text-xl font-light leading-relaxed">
            <p className="opacity-90">融文載道，資盈百年</p>
            <p className="opacity-95">基業長青，傳承安心</p>
          </div>
        </div>

        {/* 底部说明文字 */}
        <div className="max-w-3xl mx-auto mt-24 md:mt-28 pt-8 border-t border-white/20">
          <p className="text-sm md:text-base font-light opacity-80 leading-relaxed">
            我們提供全方位的財富管理和家族事務管理服務，協助家族傳承和資產保護。
          </p>
        </div>
      </div>
    </section>
  );
}

