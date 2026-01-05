import { image } from '@/config/constant/image'

const Hero = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      <div className='hidden md:hidden lg:block'>
        {/* Background Image / GIF */}
        <img
          src={image.heroVideo}
          alt='Hero background'
          className='hidden md:hidden lg:block w-full h-[70vh] sm:h-[85vh] object-cover'
        />
        {/* Overlay */} <div className='inset-0 bg-black/30' /> {/* Content */}
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='absolute mx-auto px-6 sm:px-12 lg:px-20 w-full'>
            <div className='flex flex-col max-w-xl'>
              <p className='text-[0.9rem] text-blue-200 mb-4 uppercase tracking-wider'>Lorem Ipsum</p>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight'>
                Stylish & Comfortable <br /> <span className='font-medium'>Eyewear for Everyone</span>
              </h1>
              <p className='text-blue-100 text-[0.9rem] mb-8'>
                Discover the perfect frames that complement your unique style and personality
              </p>
              <div className='flex flex-wrap gap-5'>
                <button className='px-8 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-[#1f5187] transition-colors'>
                  Explore Now
                </button>
                <button className='px-8 py-3 bg-white text-[#1f5187] rounded hover:bg-blue-50 transition-colors flex items-center gap-2'>
                  Become an Essinox Dealer <span>→</span>
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={image.centerImg} alt='' />
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className='block lg:hidden relative bg-[#1f5187]'>
        <div className='px-6 py-5'>
          <p className='text-[0.9rem] text-blue-200 mb-4 uppercase tracking-wider'>Lorem Ipsum</p>

          <h1 className='text-4xl font-light text-white mb-4 leading-tight'>
            Stylish & Comfortable <br />
            <span className='font-medium'>Eyewear for Everyone</span>
          </h1>

          <p className='text-blue-100 text-[0.9rem] mb-6'>
            Discover the perfect frames that complement your unique style and personality
          </p>

          <div className='flex flex-col w-fit gap-4'>
            <button className='px-6 py-3 border-2 border-white text-white rounded'>Explore Now</button>

            <button className='px-6 py-3 bg-white text-[#1f5187] rounded flex items-center justify-center gap-2'>
              Become an Essinox Dealer <span>→</span>
            </button>
          </div>
        </div>
        {/* Mobile image section */}
        <div className='relative w-full'>
          {/* Background responsive image */}
          <img src={image.responsiveImg} alt='' className='w-93.75 h-73.5 object-cover' />

          {/* Center image inside */}
          <img src={image.centerImg} alt='' className='absolute left-1 top-1/2 -translate-y-1/2 w-18' />
        </div>
      </div>
    </section>
  )
}

export default Hero
