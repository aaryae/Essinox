import { image } from '@/config/constant/image'
import { ProductCard } from '@/ui/user/organisms/landing/featuredCollection/ProductCard'

const FeaturedCollection = () => {
  return (
    <section className='w-full sm:px-6 md:px-12 lg:px-20 bg-[#e9eef3] py-20'>
      <div className='text-center mb-8 sm:mb-12 md:mb-16'>
        <h1 className='text-2xl sm:text-4xl md:text-4xl font-medium text-gray-900 mb-3 sm:mb-4'>Why Choose Us</h1>
        <p className='text-sm text-[#8b8b8b] max-w-2xl mx-auto tracking-[0.012rem]'>
          We're committed to providing exceptional eyewear and service that exceeds your expectations
        </p>
      </div>
      <div className='flex'>
        <ProductCard image={image.essinoxGlass} title={'glasses'} />
        <ProductCard image={image.essinoxGlass} title={'glasses'} />
        <ProductCard image={image.essinoxGlass} title={'glasses'} />
        <ProductCard image={image.essinoxGlass} title={'glasses'} />
      </div>
    </section>
  )
}

export default FeaturedCollection
