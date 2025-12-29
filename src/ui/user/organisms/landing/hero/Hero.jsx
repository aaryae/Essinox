import { image } from '@/config/constant/image'

const Hero = () => {
  return (
    <div className='relative w-full h-full '>
      {/* bg-[#1f5187] */}

      {/* Desktop: Full width background image - CROPPED */}
      <div className='hidden sm:block absolute inset-0 w-full  '>
        <img src={image.heroVideo} alt='Hero background' className='hidden sm:block 1'  />
      </div>

      {/* 
        <div className=' relative flex flex-col h-full w-1/2 max-w-lg  p-5'>
           <p className="text-sm text-blue-200 mb-4 uppercase tracking-wider">LOREM IPSUM</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Stylish & Comfortable Eyewear for Everyone
            </h1>
            <p className="text-blue-100 text-base lg:text-lg mb-8">
              Discover the perfect frames that complement your unique style and personality
            </p>
          <button className='px-8 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-[#1f5187] transition-colors'>
            Explore Now
          </button>
          <button className='px-8 py-3 bg-white text-[#1f5187] rounded hover:bg-blue-50 transition-colors flex items-center justify-center gap-2'>
            Become a Essinox Dealer
            <span>→</span>
          </button>
        </div>

      {/* Mobile: Image below content - ALSO CROPPED */}
      {/* <div className="sm:hidden w-full overflow-hidden">
        <img
          src={image.heroVideo}
          alt="Hero background"
          className="w-full object-cover"
          style={{ 
            objectPosition: 'left center',
            transform: 'scale(1.2) translateX(-11%)'
          }}
        />
      </div> */}
    </div>
  )
}

export default Hero
