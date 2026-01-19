import { image } from '@/config/constant/image'

const Hero = () => {
  return (
    <section className='w-full bg-[#205187] py-12 px-8 pr-0 md:pr-8'>
      <div className='max-w-8xl mx-auto flex justify-between max-[1120px]:flex-wrap max-[1120px]:justify-end'>
        <div className='my-auto max-[1120px]:w-full'>
          <div className='flex flex-col max-w-xl py-10 ml-40 max-[1340px]:ml-2 relative' style={{ zIndex: 1 }}>
            <h1 className='text-6xl max-[1452px]:text-4xl max-[1120px]:w-full max-[1120px]:text-6xl font-light text-white mb-4 leading-tight max-[1805px]:w-1/2'>
              Stylish & Comfortable <br />
              <span className='font-medium flex flex-col text-7xl max-[1452px]:text-6xl'>
                EyeWear for <span>Everyone</span>
              </span>
            </h1>

            <p className='text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[0.9rem] text-blue-100 mb-8 max-[1805px]:w-[60%]'>
              Discover the perfect frames that complement your unique style and personality
            </p>

            <div className='flex flex-wrap gap-5'>
              <button className='py-3 px-6 border border-white text-white bg-[#ffffff28] rounded-xl w-fit cursor-pointer'>
                Explore Now
              </button>

              <button className='px-6 py-3 bg-white text-[#1f5187] rounded-xl flex items-center gap-2 text-[14px] font-semibold cursor-pointer'>
                Become an Essinox Dealer <span>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className='relative flex flex-col flex-nowrap'>
          <div
            className='
              absolute top-1/2 -translate-y-1/2
              bg-[#205187] flex justify-center items-center
              h-32.5 w-27.5
              lg:w-49.75 lg:h-59.75
              rounded-tr-[150px] rounded-br-[150px]
              -left-10 lg:-left-30
            '
          >
            <img src={image.centerImg} alt='' loading='lazy' className='p-6 w-full lg:pt-10' style={{ zIndex: 2 }} />
          </div>

          {/* Use poster attribute as fallback */}
          <video src={image.hero1} autoPlay muted loop playsInline poster={image.fallback} className='w-full h-auto' />
          <video src={image.hero2} autoPlay muted loop playsInline poster={image.fallback} className='w-full h-auto' />
        </div>
      </div>
    </section>
  )
}

export default Hero
