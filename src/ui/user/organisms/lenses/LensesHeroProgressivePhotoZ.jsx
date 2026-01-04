import { image } from '@/config/constant/image'

const LensesProgressivePhotoZ = () => {
  return (
    <section className='w-full bg-white flex justify-center px-4 md:px-0 py-12 md:py-18'>
      <div className='w-full max-w-350'>
        {/* Top Title */}
        <div className='text-center mb-16'>
          <h2 className='text-xl md:text-4xl font-medium text-gray-900 tracking-wide'>Essinox Progressive Photo-Z</h2>
          <p className='text-sm text-gray-600 mt-2 max-w-[60%] mx-auto'>
            Each lens is meticulously crafted with the finest materials, designed to provide the perfect night’s sleep
            you deserve.
          </p>
        </div>

        {/* Bottom Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12'>
          {/* Left Text */}
          <div>
            <h3 className='text-base md:text-xl font-semibold text-gray-900'>Why Progressive Photo-Z?</h3>
            <p className='text-xs md:text-sm text-gray-600 mt-2 leading-relaxed text-justify'>
              We believe that eyewear is an extension of your personality. That’s why we curate our collections with
              care, ensuring every frame meets our high standards for craftsmanship, durability, and design.
            </p>
            <p className='text-xs md:text-sm text-gray-600 mt-3 leading-relaxed text-justify'>
              Our commitment goes beyond design — we’re dedicated to providing expert guidance, personalized service,
              and ongoing support to ensure your frames look and feel great.
            </p>
          </div>

          {/* Right Images */}
          <div className='flex justify-center md:justify-end gap-4'>
            <img
              src={image.essinoxGlass}
              alt='Progressive lens'
              className='w-full h-86.25 object-cover rounded-[14px]'
            />
            <img
              src={image.designerCollection3}
              alt='Photo-Z lens design'
              className='w-full h-86.25 object-cover rounded-[14px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LensesProgressivePhotoZ
