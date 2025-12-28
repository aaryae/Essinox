import { image } from '@/config/constant/image';


const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#1f5187] overflow-hidden">
      
      {/* Desktop: Full width background image */}
      <div className="hidden sm:block absolute inset-0 w-full h-screen">
        <img
          src={image.heroVideo}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col sm:flex-row w-full min-h-screen">
        
        {/* Text content - Left side on desktop, top on mobile */}
        <div className="w-full sm:w-1/2 flex items-center justify-center px-6 sm:px-8 lg:px-16 py-16 sm:py-0 bg-[#1f5187]">
          <div className="max-w-xl w-full">
            <p className="text-sm text-blue-200 mb-4 uppercase tracking-wider">LOREM IPSUM</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Stylish & Comfortable Eyewear for Everyone
            </h1>
            <p className="text-blue-100 text-base lg:text-lg mb-8">
              Discover the perfect frames that complement your unique style and personality
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-[#1f5187] transition-colors">
                Explore Now
              </button>
              <button className="px-8 py-3 bg-white text-[#1f5187] rounded hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                Become a Essinox Dealer
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side spacer on desktop */}
        <div className="hidden sm:block sm:w-1/2"></div>
      </div>

      {/* Mobile: Image below content */}
      <div className="sm:hidden w-full">
        <img
          src={image.heroVideo}
          alt="Hero background"
          className="w-full h-auto object-cover min-h-[350px] max-h-[500px]"
        />
      </div>

      {/* Decorative eye element */}
      <div className="absolute left-1/2 sm:left-[45%] top-[40%] sm:top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 z-20">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-dashed border-blue-300 rounded-full"></div>
          <div className="absolute inset-3 sm:inset-4 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#1f5187] rounded-full"></div>
          </div>
          <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full"></div>
          <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
          <div className="absolute bottom-6 right-0 sm:bottom-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;