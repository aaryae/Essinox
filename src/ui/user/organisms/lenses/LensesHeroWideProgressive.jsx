import { useState } from 'react'
import { image } from '@/config/constant/image'

const LensesWideProgressive = () => {
  const [isLens6Loaded, setIsLens6Loaded] = useState(false)
  const [isLens7Loaded, setIsLens7Loaded] = useState(false)

  return (
    <section className='w-full bg-[#f8f8f8] flex justify-center px-4 md:px-0 py-10 md:py-16'>
      <div className='w-full max-w-350 flex flex-wrap justify-center items-center gap-6 md:gap-12 px-4'>
        {/* Left Images */}
        <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4'>
          {/* Lens 6 */}
          <div className='relative w-86.25 h-86.25'>
            {!isLens6Loaded && (
              <img
                src={image.fallback}
                alt='Loading...'
                className='absolute top-0 left-0 w-full h-full object-cover rounded-[14px]'
              />
            )}
            <img
              src={image.lens6}
              alt='Wide progressive'
              className='w-full h-full object-cover rounded-[14px]'
              loading='lazy'
              onLoad={() => setIsLens6Loaded(true)}
            />
          </div>

          {/* Lens 7 */}
          <div className='relative w-86.25 h-86.25'>
            {!isLens7Loaded && (
              <img
                src={image.fallback}
                alt='Loading...'
                className='absolute top-0 left-0 w-full h-full object-cover rounded-[14px]'
              />
            )}
            <img
              src={image.lens7}
              alt='Designer progressive'
              className='w-full h-full object-cover rounded-[14px]'
              loading='lazy'
              onLoad={() => setIsLens7Loaded(true)}
            />
          </div>
        </div>

        {/* Right Text */}
        <div className='max-w-xl'>
          <h2 className='text-lg md:text-2xl font-bold text-gray-900'>Essinox Wide Progressive</h2>
          <p className='text-xs md:text-sm text-gray-600 mt-2 leading-relaxed text-justify'>
            Provides smooth, natural vision across near, intermediate, and far distances with a wider viewing area.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LensesWideProgressive
