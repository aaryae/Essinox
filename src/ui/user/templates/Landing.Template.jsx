import Footer from '@/ui/user/organisms/footer/Footer'
import Navbar from '@/ui/user/organisms/landing/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LandingTemplate = () => {
  return (
    <div className='flex flex-col h-screen '>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LandingTemplate
