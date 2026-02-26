import { useEffect, useRef } from 'react'
import { image } from '@/config/constant/image'

const FramesSpecial = () => {
  const textRef = useRef(null)
  const imgRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            el.style.opacity = '1'
            el.style.transform = 'translateY(0) scale(1)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    if (textRef.current) observer.observe(textRef.current)
    imgRefs.current.forEach((ref) => ref && observer.observe(ref))

    return () => observer.disconnect()
  }, [])

  const images = [
    { src: image.whySpecial1, alt: 'Colorful eyewear collection' },
    { src: image.whySpecial2, alt: 'Reading glasses on document' },
    { src: image.whySpecial3, alt: 'Variety of frames on display' },
    { src: image.whySpecial4, alt: 'Designer eyewear collection' },
  ]

  return (
    <section className='w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* Left: Text Content */}
        <div
          ref={textRef}
          className='space-y-6'
          style={{
            opacity: 0,
            transform: 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <h2 className='text-3xl md:text-4xl font-medium text-gray-900'>
            Why <span className='text-[#387bbf]'>Our Lenses Are Special ?</span>
          </h2>

          <p className='text-gray-600 leading-relaxed'>
            Essinox lenses are crafted to meet the visual demands of modern life while maintaining comfort and clarity.
          </p>

          <ul className='space-y-4 text-justify'>
            <li className='flex items-start gap-3'>
              <div>
                <strong className='text-gray-900'>• Advanced Coatings: </strong>
                <span className='text-gray-600'> Reduce glare, resist scratches, and improve visual clarity </span>
              </div>
            </li>
            <li className='flex items-start gap-3'>
              <div>
                <strong className='text-gray-900'>• Digital-Friendly Design:</strong>
                <span className='text-gray-600'> Helps minimize eye fatigue from prolonged screen exposure</span>
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
                <strong className='text-gray-900'>• Precision Manufacturing:</strong>
                <span className='text-gray-600'> Ensures accurate vision and dependable performance</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: Image Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {images.map((img, i) => (
            <img
              key={i}
              ref={(el) => (imgRefs.current[i] = el)}
              src={img.src}
              alt={img.alt}
              className='w-full h-64 object-cover rounded-2xl shadow-md'
              style={{
                opacity: 0,
                transform: 'translateY(32px) scale(0.97)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FramesSpecial
