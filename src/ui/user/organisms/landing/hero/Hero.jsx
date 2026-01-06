import { image } from '@/config/constant/image'

const Hero = () => {
  return (
    <section className='relative w-full overflow-hidden '>
      <div className='hidden md:hidden lg:block '>
        {/* Background Image / GIF */}
        <img
          src={image.heroVideo}
          alt='Hero background'
          className='hidden md:hidden lg:block w-full h-[70vh] sm:h-[85vh] object-cover'
        />
        {/* Overlay */}
        <div className='inset-0 bg-black/30' />
        {/* Content */}
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='absolute mx-auto px-6 sm:px-12 lg:px-20 w-full'>
            <div className='flex flex-col max-w-xl'>
              <p className='text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-[0.9rem] text-blue-200 mb-4 uppercase tracking-wider'>
                Lorem Ipsum
              </p>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight'>
                Stylish & Comfortable <br />{' '}
                <span className='font-medium flex flex-col'>
                  Eyewear for <span> Everyone</span>
                </span>
              </h1>
              <p className='text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[0.9rem] text-blue-100 mb-8'>
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
            <img src={image.centerImg} alt='' className='' />
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className='block lg:hidden relative bg-[#173f6a] pl-7  '>
        <div className='flex flex-col items-center justify-center  px-6 py-5'>
          <p className='text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] text-blue-200 mb-4 uppercase tracking-wider'>
            Lorem Ipsum
          </p>

          <h1 className='text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 leading-tight'>
            Stylish & Comfortable <br />
            <span className='font-medium text-2xl sm:text-3xl md:text-4xl'>Eyewear for Everyone</span>
          </h1>

          <p className='text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] text-blue-100 mb-6'>
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
          <img src={image.responsiveVideo} alt='' className='w-full  h-full object-cover' />

          {/* Center image on the left side */}
          <div
            className='absolute top-1/2 left-0 -translate-y-1/2 bg-[#173f6a] flex justify-center items-center '
            style={{
              width: '99px', // width of the half-circle
              height: '99px', // height same as width for a perfect circle
              borderTopRightRadius: '150px',
              borderBottomRightRadius: '150px',
              borderTopLeftRadius: '0',
              borderBottomLeftRadius: '0',
              left:"-39px"
            }}
          >
            <img
              src={image.centerImg}
              alt=''
              className='w-19'
              style={{
                marginLeft: '5px', // adjust for positioning
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
