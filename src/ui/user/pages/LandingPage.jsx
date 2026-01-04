import ChooseUs from "@/ui/user/organisms/landing/chooseUs/ChooseUs"
import ChooseUsCards from "@/ui/user/organisms/landing/chooseUs/ChooseUsCards"
import { FAQSection } from "@/ui/user/organisms/landing/FAQ/FAQSection"
import FeaturedCollection from "@/ui/user/organisms/landing/featuredCollection/FeaturedCollection"
import Hero from "@/ui/user/organisms/landing/hero/Hero"
import Navbar from "@/ui/user/organisms/landing/navbar/Navbar"
import FeaturedCollection from "../organisms/landing/featuredCollection/FeaturedCollection"

const LandingPage = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <ChooseUs/>
      <ChooseUsCards />
      <FeaturedCollection/>
    </>
  )
}

export default LandingPage
