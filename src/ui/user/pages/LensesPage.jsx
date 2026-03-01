import { image } from '@/config/constant/image'
import { FAQSection } from '@/ui/user/organisms/landing/FAQ/FAQSection'
import LensesHero from '@/ui/user/organisms/lenses/LensesHero'
import LensesProgressivePhotoZ from '@/ui/user/organisms/lenses/LensesHeroProgressivePhotoZ'

const LensesPage = () => {
  return (
    <>
      <LensesHero />

      {/* Gradient background div */}
      <h2 className='text-lg md:text-2xl font-medium text-gray-900 w-fit mx-auto'>Why Bluecare?</h2>
      <div className='bg-[linear-gradient(to_bottom,#f4f6f9,white)]'>
        <img src={image.sun} alt='sun' loading='lazy' className='mx-auto' />
      </div>

      <LensesProgressivePhotoZ />

      <img src={image.styleGlass} alt='Stylish eyewear' className='object-cover scale-x-[-1] brightness-[0.75]' />

      <FAQSection />
    </>
  )
}

export default LensesPage
