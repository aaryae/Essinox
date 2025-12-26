import LandingPage from '@/ui/user/pages/LandingPage'
import LandingTemplate from '@/ui/user/templates/Landing.Template'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',

    element:<LandingTemplate/>,
    children: [
      { index: true, element:<LandingPage/> }
    ]

  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      
      <Toaster position='bottom-right' reverseOrder={false} />
    </>
  )
}

export default App
