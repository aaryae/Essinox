import { image } from '@/config/constant/image'

const Hero = () => {
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-wrap">
        
      <img
        src={image.heroVideo}
        alt="Hero background"
        className=" top-0 left-0 w-full h-210 "
      />
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-white text-center px-4 max-w-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure blanditiis commodi, 
          veritatis numquam fugit nisi ipsum harum explicabo nesciunt quibusdam eveniet ratione dicta!
        </p>
      </div>
    </div>
  )
}

export default Hero