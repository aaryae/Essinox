import AboutPage from '@/ui/user/pages/AboutPage'
import ContactPage from '@/ui/user/pages/ContactPage'
import LandingPage from '@/ui/user/pages/LandingPage'
import LensesPage from '@/ui/user/pages/LensesPage'
import LandingTemplate from '@/ui/user/templates/Landing.Template'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',

    element: <LandingTemplate />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/lenses', element: <LensesPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster position='bottom-right' reverseOrder={false}  />
     
    </>
  )
}


export default App
