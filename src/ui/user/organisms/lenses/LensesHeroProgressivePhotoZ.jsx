import { image } from '@/config/constant/image'

const LensesProgressivePhotoZ = () => {
  return (
    <section className='w-full bg-white flex justify-center px-4 md:px-0 py-12 md:py-18'>
      <div className='w-full max-w-350 px-4'>
        {/* Bottom Content */}
        <div className='flex flex-wrap md:justify-center justify-start gap-6  '>
          {/* Left Text */}
          <div className='max-w-xl my-auto '>
            <h3 className='text-base md:text-xl font-semibold text-gray-900'>Why Progressive Photo-Z?</h3>
            <p className='text-xs md:text-sm text-gray-600 mt-2 leading-relaxed text-justify '>
              Bluecare Photo-Z lenses transition seamlessly between indoor and outdoor environments. They reduce blue
              light from digital screens indoors and darken automatically under sunlight, providing UV protection and
              visual comfort without the need to change glasses.
            </p>
          </div>

          {/* Right Images */}
          <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-4 '>
            <img
              src={image.lens3}
              alt='Progressive lens'
              className='w-86.25  h-86.25  object-cover rounded-[14px]'
              loading='lazy'
            />
            <img
              src={image.lens5}
              alt='Photo-Z lens design'
              className='w-86.25  h-86.25  object-cover rounded-[14px]'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LensesProgressivePhotoZ
