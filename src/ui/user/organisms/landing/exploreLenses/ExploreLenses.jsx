import { image } from '@/config/constant/image'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ExploreLenses() {
  const [isBgLoaded, setIsBgLoaded] = useState(false)
  const navigate = useNavigate()

  return (
    <section className='relative min-h-130 w-full overflow-hidden'>
      {/* Fallback Background */}
      {!isBgLoaded && (
        <img src={image.fallback} alt='Loading...' className='absolute w-full h-full object-cover scale-x-[-1]' />
      )}

      {/* Background Image */}
      <img
        src={image.styleGlass}
        alt='Stylish Lenses'
        className={`absolute w-full h-full object-cover scale-x-[-1] transition-opacity duration-700 ${
          isBgLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsBgLoaded(true)}
      />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/45' />

      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center px-4 my-40'>
        <div className='text-center max-w-3xl text-white'>
          {/* Heading */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight'>
            Premium Lenses for Everyday Comfort
          </h1>

          {/* Subtext */}
          <p className='mt-4 text-sm sm:text-base text-white/80 max-w-xl mx-auto'>
            Essinox lenses go through a series of strict quality checks before reaching you, ensuring clarity,
            durability, and reliable visual performance.
          </p>

          {/* Buttons */}
          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            {/* Primary Button */}
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
    </section>
  )
}
