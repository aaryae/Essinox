import { image } from '@/config/constant/image'
import BecomeDealer from '@/ui/user/organisms/landing/becomeDealer/BecomeDealer'
import ChooseUs from '@/ui/user/organisms/landing/chooseUs/ChooseUs'
import ChooseUsCards from '@/ui/user/organisms/landing/chooseUs/ChooseUsCards'
import ExploreLenses from '@/ui/user/organisms/landing/exploreLenses/ExploreLenses'
import { FAQSection } from '@/ui/user/organisms/landing/FAQ/FAQSection'
import FeaturedCollection from '@/ui/user/organisms/landing/featuredCollection/FeaturedCollection'
import Hero1 from '@/ui/user/organisms/landing/hero/Hero1'

const LandingPage = () => {
  return (
    <>
      {/* <Hero /> */}
      <Hero1/>
      <ChooseUs />
      <ChooseUsCards />
      <FeaturedCollection />
      <ExploreLenses />
      <BecomeDealer />
      <img src={image.cloth} alt='cloth' className='w-full object-fit h-full' />
      <FAQSection />
    </>
  )
}

export default LandingPage
