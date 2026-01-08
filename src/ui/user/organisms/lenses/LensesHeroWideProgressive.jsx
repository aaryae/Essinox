import { image } from '@/config/constant/image'

const LensesWideProgressive = () => {
  return (
    <section className='w-full bg-[#f8f8f8] flex justify-center px-4 md:px-0 py-10 md:py-16'>
      <div className='w-full max-w-350 flex flex-wrap justify-center items-center gap-6 md:gap-12 px-4'>
        {/* Left Images */}
        <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-4'>
          <img src={image.essinoxGlass} alt='Wide progressive' className='w-full h-86.25 object-cover rounded-[14px]' />
          <img
            src={image.designerCollection3}
            alt='Designer progressive'
            className='w-full h-86.25 object-cover rounded-[14px]'
          />
        </div>

        {/* Right Text */}
        <div className='max-w-xl'>
          <h2 className='text-lg md:text-2xl font-bold text-gray-900'>Essinox Wide Progressive</h2>
          <p className='text-xs md:text-sm text-gray-600 mt-2 leading-relaxed text-justify'>
            Founded with a vision to make quality eyewear accessible to everyone, Essinox has been serving the community
            for over a decade. We believe that eyewear is an extension of your personality.
          </p>
          <p className='text-xs md:text-sm text-gray-600 mt-3 leading-relaxed text-justify'>
            Our commitment goes beyond style and design — we are dedicated to providing expert guidance, personalized
            service, and ongoing support to ensure your frames not only look great but feel great too.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LensesWideProgressive
