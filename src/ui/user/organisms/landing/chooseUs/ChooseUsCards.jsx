import { useEffect, useRef } from 'react'
import { image } from '@/config/constant/image'
import Card from '@/ui/user/organisms/landing/chooseUs/Card'

const chooseUsData = [
  {
    title: 'Premium Lens Coating',
    description: 'Advanced high-quality coatings designed for modern, fast-paced lifestyles.',
    image: image.glass1,
  },
  {
    title: 'Digital Screen Friendly',
    description: 'Specially developed for digital device users to reduce eye strain and blue light exposure.',
    image: image.glass2,
  },
  {
    title: 'Enhanced Daily Comfort',
    description: 'Lightweight lenses that provide balanced, comfortable vision for extended wear.',
    image: image.glass3,
  },
  {
    title: 'Long-Lasting Durability',
    description: 'Scratch-resistant and protective coatings ensure extended lens performance and reliability.',
    image: image.glass4,
  },
  {
    title: 'Crystal-Clear Vision',
    description: 'Precision optics deliver sharp clarity in all lighting conditions.',
    image: image.glass5,
  },
  {
    title: 'UV Protection & Eye Safety',
    description: 'Protects your eyes from harmful UV rays for safe and healthy vision.',
    image: image.glass6,
  },
]

const ChooseUsCards = () => {
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
    <section className='w-full sm:px-6 md:px-12 lg:px-20 bg-[#e9eef3] py-20 px-4'>
      {/* Heading — fades up on scroll */}
      <div
        ref={headingRef}
        className='text-center mb-8 sm:mb-12 md:mb-16'
        style={{
          opacity: 0,
          transform: 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <h1 className='text-2xl sm:text-4xl md:text-4xl font-medium text-gray-900 mb-3 sm:mb-4'>Why Choose Us</h1>
        <p className='text-sm text-[#8b8b8b] max-w-2xl mx-auto tracking-[0.012rem]'>
          We're committed to providing exceptional eyewear and service that exceeds your expectations
        </p>
      </div>

      {/* Cards — staggered fade-up on scroll */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-2 place-items-center p-2'>
        {chooseUsData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              opacity: 0,
              transform: 'translateY(32px)',
              transition: `opacity 0.5s ease, transform 0.5s ease`,
              transitionDelay: `${index * 80}ms`,
            }}
          >
            <Card title={item.title} description={item.description} image={item.image} className='w-[320px]' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ChooseUsCards
