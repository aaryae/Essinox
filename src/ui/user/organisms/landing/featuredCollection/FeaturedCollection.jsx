import { useEffect, useRef } from 'react'
import { image } from '@/config/constant/image'
import { ProductCard } from '@/ui/user/organisms/landing/featuredCollection/ProductCard'

const products = [
  { image: image.whySpecial1, title: 'Vision Lenses' },
  { image: image.whySpecial2, title: 'Digital Protection Lenses' },
  { image: image.whySpecial3, title: 'Signature Lens Series' },
  { image: image.whySpecial4, title: 'Classic Collection' },
]

const FeaturedCollection = () => {
  const headingRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (headingRef.current) observer.observe(headingRef.current)
    cardRefs.current.forEach((ref) => ref && observer.observe(ref))

    return () => observer.disconnect()
  }, [])

  return (
    <section className='bg-white w-full py-20 px-4 sm:px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col'>
          {/* Text Section */}
          <div
            ref={headingRef}
            className='mb-12 text-center sm:text-left max-w-2xl mx-auto'
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <h1 className='text-4xl font-medium text-gray-900 mb-4'>
              Featured <span className='text-[#18406F]'>Collection</span>
            </h1>
            <p className='text-sm text-[#8b8b8b] tracking-[0.012rem]'>
              Essinox lenses for clear vision and reliable eye protection.
            </p>
          </div>

          {/* Product Cards */}
          <div className='flex flex-col justify-center items-center sm:flex-row sm:flex-wrap gap-6 lg:gap-8'>
            {products.map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                style={{
                  opacity: 0,
                  transform: 'translateY(32px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <ProductCard image={item.image} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection
