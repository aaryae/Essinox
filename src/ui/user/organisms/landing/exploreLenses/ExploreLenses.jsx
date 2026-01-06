import { image } from '@/config/constant/image'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ExploreLenses() {
  return (
    <section className='relative  min-h-130 w-full overflow-hidden'>
      {/* Background Image */}
      <img
        src={image.styleGlass}
        alt='Stylish eyewear'
        className='absolute  w-full h-full object-cover scale-x-[-1] '
      />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/45 ' />

      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center px-4 my-40 '>
        <div className='text-center max-w-3xl text-white'>
          {/* Heading */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight'>
            Stylish & Comfortable
            <br />
            <span className='font-normal'>Eyewear for Everyone</span>
          </h1>

          {/* Subtext */}
          <p className='mt-4 text-sm sm:text-base text-white/80 max-w-xl mx-auto'>
            Discover the perfect frames that complement your unique style and personality
          </p>

          {/* Buttons */}
          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            {/* Primary Button */}
            <Link
              to='/lenses'
              className='px-6 py-2.5 rounded-md text-sm font-medium
              bg-white/20 text-white border border-white/30
              backdrop-blur-sm hover:bg-white/30 transition'
            >
              Explore Lenses
            </Link>

            {/* Secondary Button */}
            <Link
              to='/dealer'
              className='flex items-center gap-2 px-6 py-2.5 rounded-md
              bg-white text-gray-900 text-sm font-medium
              hover:bg-gray-100 transition'
            >
              Become a Essinox Dealer
              <ArrowUpRight className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
