import ChooseUs from "@/ui/user/organisms/landing/chooseUs/ChooseUs"
import ChooseUsCards from "@/ui/user/organisms/landing/chooseUs/ChooseUsCards"
import Hero from "@/ui/user/organisms/landing/hero/Hero"
import Navbar from "@/ui/user/organisms/landing/navbar/Navbar"

const LandingPage = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <ChooseUs/>
     <ChooseUsCards/>
    </>
  )
}

export default LandingPage
