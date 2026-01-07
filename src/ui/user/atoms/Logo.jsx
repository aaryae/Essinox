import { image } from '@/config/constant/image'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <div className={`flex justify-center items-center w-fit p-1 gap-2 cursor-pointer  px-4`}>
        <div className='flex gap-3'>
          <img src={image.groupLogo1} alt='groupLogo' className='w-25 h-[49.26px]' />
          <img src={image.groupLogo2} alt='groupLogo' className='w-25 h-[30.25px] my-auto' />
        </div>
      </div>
    </Link>
  )
}

export default Logo
