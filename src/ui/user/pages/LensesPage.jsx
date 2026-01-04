import { image } from '@/config/constant/image'
import { FAQSection } from '@/ui/user/organisms/landing/FAQ/FAQSection'
import LensesHero from '@/ui/user/organisms/lenses/LensesHero'
import LensesBlueCarePhotoZ from '@/ui/user/organisms/lenses/LensesHeroBluecarePhotoZ'
import LensesProgressivePhotoZ from '@/ui/user/organisms/lenses/LensesHeroProgressivePhotoZ'
import LensesWideProgressive from '@/ui/user/organisms/lenses/LensesHeroWideProgressive'

const LensesPage = () => {
  return (
    <>
      <LensesHero />
      <LensesProgressivePhotoZ />
      <LensesWideProgressive />
      <LensesBlueCarePhotoZ />
      <img
        src={image.styleGlass}
        alt='Stylish eyewear'
        className='object-cover scale-x-[-1] brightness-[0.75]  '
      />{' '}
      <FAQSection/>
    </>
  )
}

export default LensesPage
