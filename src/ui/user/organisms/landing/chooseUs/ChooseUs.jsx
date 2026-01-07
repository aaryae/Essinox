import { image } from '@/config/constant/image'
import { useState } from 'react'

const ChooseUs = () => {
  const [widthTracker, setWidthTracker] = useState(false)

  return (
    <div className='w-full  py-12  sm:py-16 md:py-20'>
      {/* Header */}
      <div className='text-center mb-8 sm:mb-12 md:mb-16 '>
        <h1 className='text-2xl sm:text-4xl md:text-4xl font-medium text-gray-900 mb-3 sm:mb-4'>Why Choose Us</h1>
        <p className='text-sm  text-[#8b8b8b] max-w-2xl mx-auto  tracking-[0.012rem] '>
          We're committed to providing exceptional eyewear and service that exceeds your expectations
        </p>
      </div>

      {/* Glasses with overlaid text */}
      <div className='relative max-w-7xl mx-auto'>
        <div className='relative w-full overflow-hidden'>
          {/* Your glasses image */}
          <img
            src={image.glass}
            alt='glasses'
            className='
                h-auto
                min-w-xl

                relative
                left-1/2
                -translate-x-1/2

                xl:left-0
                xl:translate-x-0
                xl:mx-auto
              '
          />

          {/* Left text - Quality Materials */}
          <div className='absolute left-[15%] max-[632px]:left-[13%] max-[480px]:left-[5%] top-1/2 -translate-y-1/2 max-w-[35%] sm:max-w-[30%] tracking-[0.012rem]'>
            <h2 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2'>
              Quality Materials
            </h2>
            <p className='text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed max-w-72'>
              Premium materials and craftsmanship in every frame we offer.
            </p>
          </div>

          {/* Right text - Wide Frame Selection */}
          <div
            className='
                absolute right-[15%] max-[632px]:right-[10%] max-[480px]:right-[10%] top-1/2 -translate-y-1/2 max-w-[35%] sm:max-w-[30%]

                max-xl:left-1/2
                max-xl:translate-x-[25%]
                max-xl:right-auto
              '
          >
            <h2 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2'>
              Wide Frame Selection
            </h2>
            <p className='text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed max-w-72'>
              Hundreds of styles from classic to contemporary designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
