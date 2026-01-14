import { image } from '@/config/constant/image'

const LensesHero = () => {
  return (
    <section className='w-full bg-[#f4f6f9] flex justify-center py-5 px-4 pb-20'>
      <div className='w-full max-w-350'>
        {/* Title Block */}
        <div className='text-center pt-6 md:pt-10 pb-5 md:pb-7'>
          <h1 className='text-xl md:text-4xl font-medium text-gray-900 tracking-wide text-center'>Essinox Bluecare</h1>
          <p className='text-sm text-gray-600  md:mt-2 py-1 md:max-w-[70%] mx-auto'>
            Designed for digital lifestyles, Bluecare lenses reduce eye strain and provide comfortable, clear vision
            throughout the day.
          </p>
        </div>

        {/* Large Hero Image */}
        <div className='w-full flex justify-center  '>
          <img
            src={image.wideDesignerCollection3}
            alt='Essinox Glass'
            className='w-full hidden md:block rounded-[18px]'
            loading='lazy'
          />
        </div>

        <div className='flex flex-wrap gap-7 mt-2 justify-start  '>
          {/* Image */}
          {/* Bottom Grid */}
          <div className='flex  gap-16 md:gap-4 mt-3 md:mt-5 flex-wrap max-[1425px]:justify-center '>
            {/* Left small image */}
            <div className='w-fit flex justify-center'>
              <img
                src={image.lens2}
                alt='Essinox Glass small'
                className='w-86.25  h-86.25 object-cover rounded-[14px] '
                loading='lazy'
              />
            </div>

            {/* Right small image */}
            <div className='w-fit flex justify-center'>
              <img
                src={image.designerCollection3}
                alt='Designer Collection'
                className='86.25  h-86.25 object-cover rounded-[14px]'
                loading='lazy'
              />
            </div>
         

          {/* Text */}
          <div className='max-w-2xl pl-0  my-auto '>
            <h2 className='text-lg md:text-2xl font-medium text-gray-900'>Why Bluecare?</h2>
            <p className='text-[11px] md:text-sm text-gray-600 mt-2 md:mt-3 leading-relaxed text-justify md:w-xl'>
              Prolonged use of digital devices can cause eye fatigue, dryness, and discomfort. Essinox Bluecare lenses
              feature advanced blue light filtering technology that reduces harmful blue light exposure while preserving
              natural color perception. Ideal for office work, online learning, and everyday screen use.
            </p>
          </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default LensesHero
