import { image } from '@/config/constant/image'
import { ProductCard } from '@/ui/user/organisms/landing/featuredCollection/ProductCard'

const FeaturedCollection = () => {
  return (
    <section className="bg-white w-full py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Wrapper */}
        <div className="flex flex-col">

          {/* Text Section */}
          <div className="mb-12 text-center sm:text-left max-w-2xl">
            <h1 className="text-4xl font-medium text-gray-900 mb-4">
              Featured <span className="text-[#18406F]">Collection</span>
            </h1>

            <p className="text-sm text-[#8b8b8b] tracking-[0.012rem]">
              We're committed to providing exceptional eyewear and service that exceeds your expectations
            </p>
          </div>

          {/* Product Cards */}
          <div className="flex flex-col justify-center items-center sm:flex-row sm:flex-wrap gap-6 lg:gap-8">
            <ProductCard image={image.essinoxGlass} title="glasses" />
            <ProductCard image={image.designerCollection} title="designerCollection" />
            <ProductCard image={image.designerCollection2} title="designerCollection" />
            <ProductCard image={image.designerCollection3} title="designerCollection" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection
