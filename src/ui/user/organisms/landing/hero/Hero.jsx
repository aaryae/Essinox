import { image } from '@/config/constant/image'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className='w-full bg-[#205187] py-12 px-8 pr-0 md:pr-8'>
      <div className='max-w-445.5 mx-auto flex justify-between max-[1120px]:flex-wrap max-[1120px]:justify-end'>
        <div className='my-auto max-[1120px]:w-full ml-20'>
          <div className='flex flex-col max-w-xl py-10  max-[1340px]:ml-2 relative' style={{ zIndex: 1 }}>
            <h1 className='text-4xl max-[1452px]:text-4xl max-[1120px]:w-full max-[1120px]:text-6xl font-light text-white mb-4 leading-tight max-[1805px]:w-1/2'>
              <span className='font-medium flex flex-col text-6xl max-[1452px]:text-5xl'>
                Lenses for clearer <br />
                and Comfortable Vision
              </span>
            </h1>

            <p className='text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[0.9rem] text-blue-100 mb-4 max-[1805px]:w-[60%]'>
              Advanced optical solutions built for comfort, clarity, and daily use.
            </p>

            <div className='flex flex-wrap gap-5'>
              <button
                onClick={() => navigate('/lenses')}
                className='relative py-3 px-6 border border-white text-white bg-[#ffffff44] rounded-xl w-fit cursor-pointer overflow-hidden group transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)]'
              >
                {/* Shine effect */}
                <span className='absolute inset-0 overflow-hidden rounded-xl'>
                  <span className='absolute -left-[120%] top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[120%]' />
                </span>
                <span className='relative z-10'>Explore Lenses</span>
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => navigate('/contact')}
                className='cursor-pointer group relative px-6 py-3 rounded-xl font-semibold text-[14px] bg-white text-[#2f5b8f] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]'
              >
                {/* Glow background */}
                <span className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/40 via-white/0 to-white/40 blur-xl' />
                {/* Content */}
                <span className='relative flex items-center gap-2'>
                  Become an Essinox Dealer
                  <span className='transition-all duration-300 group-hover:translate-x-2'>→</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className='relative flex flex-col flex-nowrap gap-4'>
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
          <video
            src={image.hero1}
            autoPlay
            muted
            loop
            playsInline
            poster={image.fallback}
            className='w-[800px] max-[1113px]:w-[600px] max-[1113px]:h-[200px] h-[400px] object-cover'
          />

          <video
            src={image.hero2}
            autoPlay
            muted
            loop
            playsInline
            poster={image.fallback}
            className='w-[800px] max-[1113px]:w-[600px] max-[1113px]:h-[200px] h-[400px] object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
