import { image } from '@/config/constant/image'
import { FAQSection } from '@/ui/user/organisms/landing/FAQ/FAQSection'
import LensesHero from '@/ui/user/organisms/lenses/LensesHero'
import LensesProgressivePhotoZ from '@/ui/user/organisms/lenses/LensesHeroProgressivePhotoZ'

const LensesPage = () => {
  return (
    <>
      <LensesHero />

      {/* Gradient background div */}
      <div className='bg-[linear-gradient(to_bottom,#f4f6f9,white)]'>
        <h2 className='text-lg md:text-2xl font-medium text-gray-900 w-fit mx-auto'> Essinox SUNSYNC</h2>

        <p className='text-xs md:text-sm text-gray-600 mt-2 leading-relaxed text-justify w-fit mx-auto '>
          SUNSYNC lenses adapt to light, darkening in sunlight and clearing indoors for comfortable, optimal vision.
        </p>

        <img src={image.sun} alt='sun' loading='lazy' className='mx-auto py-10' />
      </div>

      <LensesProgressivePhotoZ />

      <img src={image.styleGlass} alt='Stylish eyewear' className='object-cover scale-x-[-1] brightness-[0.75]' />

      <FAQSection />
    </>
  )
}

export default LensesPage
