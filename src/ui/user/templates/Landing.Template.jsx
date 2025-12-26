import { Outlet } from 'react-router-dom'


const LandingTemplate = () => {
  return (
    <div className='flex flex-col h-screen '>
     <div>hellow roslds</div>
      <Outlet />
    
    </div>
  )
}

export default LandingTemplate
