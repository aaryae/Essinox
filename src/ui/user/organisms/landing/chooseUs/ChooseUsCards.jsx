import { image } from '@/config/constant/image'
import Card from '@/ui/user/organisms/landing/chooseUs/Card'

const ChooseUsCards = () => {
  return (
    <section className='w-full sm:px-6 md:px-12 lg:px-20 bg-[#e9eef3] py-20 px-4'>
      <div className='text-center mb-8 sm:mb-12 md:mb-16'>
        <h1 className='text-2xl sm:text-4xl md:text-4xl font-medium text-gray-900 mb-3 sm:mb-4'>Why Choose Us</h1>
        <p className='text-sm text-[#8b8b8b] max-w-2xl mx-auto tracking-[0.012rem]'>
          We're committed to providing exceptional eyewear and service that exceeds your expectations
        </p>
      </div>

      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  sm:gap-6 gap-2 place-items-center p-2'>
        <Card
          title={'Premium Lens Coating'}
          description={'Advanced high-quality coatings designed for modern, fast-paced lifestyles. '}
          image={image.essinoxGlass}
          className='w-[320px]'
        />
        <Card
          title={'Digital Screen Friendly'}
          description={'Specially developed for digital device users to reduce eye strain and blue light exposure.'}
          image={image.essinoxGlass}
          className='w-[320px]'
        />
        <Card
          title={'Enhanced Daily Comfort'}
          description={'Lightweight lenses that provide balanced, comfortable vision for long hours.'}
          image={image.essinoxGlass}
          className='w-[320px]'
        />
        <Card
          title={'Long-Lasting Durability'}
          description={'Scratch-resistant and protective coatings ensure extended lens performance.'}
          image={image.essinoxGlass}
          className='w-[320px]'
        />
        <Card
          title={'Crystal-Clear Vision'}
          description={'Precision optics deliver sharp clarity in all lighting conditions.'}
          image={image.essinoxGlass}
          className='w-[320px]'
        />
        <Card
          title={'UV Protection & Eye Safety'}
          description={'Protects your eyes from harmful UV rays for safe and healthy vision.'}
          image={image.essinoxGlass}
          className='w-[320px]'
        />
      </div>
    </section>
  )
}

export default ChooseUsCards
