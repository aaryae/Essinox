import { image } from '@/config/constant/image'

const LensesBlueCarePhotoZ = () => {
  return (
    <section className='w-full bg-white flex  flex-col   justify-center  pt-8 md:pt-14 py-7 max-w-350 mx-auto px-4'>
        {/* Top Title */}
        <div className='text-center mb-8  mx-auto '>
          <h2 className='text-xl md:text-4xl font-medium text-gray-900 tracking-wide w-fit'>Essinox Progressive Photo-Z</h2>
          <p className='text-sm text-gray-600 mt-2   text-center'>
            Combines blue light protection with light-adaptive technology for comfort indoors and protection outdoors.
          </p>
        </div>
      <div className='w-full max-w-350 mx-auto flex flex-wrap  justify-center items-center gap-6 md:gap-10'>
        {/* Left Text */}
        <div className='max-w-xl'>
          <h2 className='text-lg md:text-2xl font-bold text-gray-900'>Why Bluecare Photo-Z?</h2>
          <p className='text-xs md:text-sm text-gray-600 mt-2 leading-relaxed text-justify'>
            Bluecare Photo-Z lenses transition seamlessly between indoor and outdoor environments. They reduce blue
            light from digital screens indoors and darken automatically under sunlight, providing UV protection and
            visual comfort without the need to change glasses.
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
