import Footer from '@/ui/user/organisms/footer/Footer'
import Navbar from '@/ui/user/organisms/landing/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LandingTemplate = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-20  flex-1">
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LandingTemplate
