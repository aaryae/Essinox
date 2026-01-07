import { image } from '@/config/constant/image'

const LensesBlueCarePhotoZ = () => {
  return (
    <section className='w-full bg-white flex  justify-center px-4 md:px-0 pt-8 md:pt-14 py-7'>
      <div className='w-full max-w-350 flex flex-col flex-wrap items-center gap-6 md:gap-10'>
        {/* Left Text */}
        <div>
          <h2 className='text-lg md:text-2xl font-bold text-gray-900'>Why Bluecare Photo-Z?</h2>
          <p className='text-xs md:text-sm text-gray-600 mt-2 leading-relaxed text-justify'>
            Founded with a vision to make quality eyewear accessible to everyone, Essinox has been serving the community
            for over a decade. What started as a small optical shop has grown into a destination for those who
            appreciate the perfect blend of style, comfort, and quality.
          </p>
        </div>

        {/* Right Images */}
        <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-4'>
          <img
            src={image.essinoxGlass}
            alt='Photo-Z collection'
            className='w-full h-86.25 object-cover rounded-[14px]'
          />
          <img
            src={image.designerCollection3}
            alt='Designer collection'
            className='w-full h-86.25 object-cover rounded-[14px]'
          />
        </div>
      </div>
    </section>
  )
}

export default LensesBlueCarePhotoZ
