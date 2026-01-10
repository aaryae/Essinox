import { image } from '@/config/constant/image'

const FramesSpecial = () => {
  return (
    <section className='w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* Left: Text Content */}
        <div className='space-y-6'>
          <h2 className='text-3xl md:text-4xl font-medium text-gray-900'>
            Why Our <span className='text-[#387bbf]'>Why Our Lenses Are Special</span>
          </h2>

          <p className='text-gray-600 leading-relaxed'>
            Essinox lenses are crafted to meet the visual demands of modern life while maintaining comfort and clarity.
          </p>

          <ul className='space-y-4'>
            <li className='flex items-start gap-3'>
              <div>
                <strong className='text-gray-900'>• Advanced Coatings:</strong>
                <span className='text-gray-600'> Reduce glare, resist scratches, and improve visual clarity </span>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <div>
                <strong className='text-gray-900'>• Digital-Friendly Design:</strong>
                <span className='text-gray-600'>Helps minimize eye fatigue from prolonged screen exposure</span>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <div>
                <strong className='text-gray-900'>• Lightweight & Comfortable:</strong>
                <span className='text-gray-600'> Designed for long hours of effortless wear</span>
              </div>
            </li>

            <li className='flex items-start gap-3'>
              <div>
                <strong className='text-gray-900'>• Precision Manufacturing :</strong>
                <span className='text-gray-600'>Ensures accurate vision and dependable performance</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: Image Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <img
            src={image.essinoxGlass}
            alt='Colorful eyewear collection'
            className='w-full h-64 object-cover rounded-2xl shadow-md'
          />
          <img
            src={image.footerGlass}
            alt='Reading glasses on document'
            className='w-full h-64 object-cover rounded-2xl shadow-md'
          />
          <img
            src={image.designerCollection2}
            alt='Variety of frames on display'
            className='w-full h-64 object-cover rounded-2xl shadow-md'
          />
          <img
            src={image.designerCollection3}
            alt='Designer eyewear collection'
            className='w-full h-64 object-cover rounded-2xl shadow-md'
          />
        </div>
      </div>
    </section>
  )
}

export default FramesSpecial
