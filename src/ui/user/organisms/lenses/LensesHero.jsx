import { image } from '@/config/constant/image'

const LensesHero = () => {
  return (
    <section className='w-full bg-[#f4f6f9] flex justify-center py-5 px-3 pb-20'>
      <div className='w-full max-w-350'>
        {/* Title Block */}
        <div className='text-center pt-6 md:pt-10 pb-5 md:pb-7'>
          <h1 className='text-xl md:text-4xl font-medium text-gray-900 tracking-wide'>Essinox Bluecare</h1>
          <p className='text-sm text-gray-600 mt md:mt-2 py-1 max-w-[70%] mx-auto'>
            Each sleeping hat is meticulously crafted with the finest materials, designed to provide the perfect night's
            sleep you deserve.
          </p>
        </div>

        {/* Large Hero Image */}
        <div className='w-full flex justify-center  '>
          <img
            src={image.wideDesignerCollection3}
            alt='Essinox Glass'
            className='w-full hidden md:block rounded-[18px]'
          />
        </div>

        <div className='flex flex-wrap gap-4 mt-2 justify-center'>
          {/* Image */}
          {/* Bottom Grid */}
          <div className='flex  gap-3 md:gap-4 mt-3 md:mt-5 flex-wrap md:flex-nowrap'>
            {/* Left small image */}
            <div className='w-full flex justify-center'>
              <img
                src={image.essinoxGlass}
                alt='Essinox Glass small'
                className='w-full h-86.25 object-cover rounded-[14px]'
              />
            </div>

            {/* Right small image */}
            <div className='w-full flex justify-center'>
              <img
                src={image.designerCollection3}
                alt='Designer Collection'
                className='w-full h-86.25 object-cover rounded-[14px]'
              />
            </div>
          </div>

          {/* Text */}
          <div className='max-w-2xl pl-0 md:pl-10 my-auto '>
            <h2 className='text-lg md:text-2xl font-medium text-gray-900'>Why Bluecare?</h2>
            <p className='text-[11px] md:text-sm text-gray-600 mt-2 md:mt-3 leading-relaxed text-justify'>
              Founded with a vision to make quality eyewear accessible to everyone, Essinox has been serving the
              community for over a decade. What started as a small optical shop has grown into a destination for those
              who appreciate the perfect blend of style, comfort, and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LensesHero
