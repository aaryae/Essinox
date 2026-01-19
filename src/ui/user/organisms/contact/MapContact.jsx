import { image } from '@/config/constant/image'
import { MapPin, Phone, Smartphone } from 'lucide-react'

const MapContact = () => {
  return (
    <div className='space-y-10 '>
      {/* MAP */}
      <div className='w-full h-95 rounded-2xl overflow-hidden shadow-md'>
        <img src={image.map} alt='Map' className='w-full h-full object-cover' />
      </div>

      {/* CONTACT */}
      <div className='py-3'>
        <h3 className='text-3xl py-2 font-semibold text-gray-900'>
          Contact us <span className='text-[#3271b1]'>Directly</span>
        </h3>
        <p className='text-sm text-gray-500 mt-1'>Call Our Team Sunday - Friday 9am to 5pm</p>

        <div className='mt-4 space-y-3 text-sm text-gray-700'>
          <div className='flex items-center gap-3'>
            <Phone size={18} style={{ color: '#387bbf' }} />
            <span className='font-medium'>015914844</span>
          </div>
          <div className='flex items-center gap-3'>
            <Smartphone size={18} style={{ color: '#387bbf' }} />
            <span className='font-medium'>+977 9851107617</span>
          </div>
        </div>
      </div>

      {/* VISIT */}
      <div className='py-1'>
        <h3 className='text-3xl py-2 font-semibold text-gray-900'>
          Visit <span className='text-[#3271b1]'>Us</span>
        </h3>
        <p className='text-sm text-gray-500 mt-1'>Call our team Sunday - Friday 9am to 7pm</p>

        <div className='mt-4 flex items-center gap-3 text-sm text-gray-700'>
          <MapPin size={18} style={{ color: '#387bbf' }} />
          <span className='font-medium'>Tripureshwor, Kathmandu, Nepal</span>
        </div>
      </div>
    </div>
  )
}

export default MapContact
