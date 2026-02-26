import { image } from '@/config/constant/image'
import { useEffect, useRef, useState } from 'react'

const LensesProgressivePhotoZ = () => {
  const [isLens3Loaded, setIsLens3Loaded] = useState(false)
  const [isLens5Loaded, setIsLens5Loaded] = useState(false)

  const textRef = useRef(null)
  const img3Ref = useRef(null)
  const img5Ref = useRef(null)

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

    const refs = [textRef, img3Ref, img5Ref]
    refs.forEach((ref) => ref.current && observer.observe(ref.current))

    return () => observer.disconnect()
  }, [])

  return (
    <section className='w-full bg-white flex justify-center px-4 md:px-0 py-12 md:py-18'>
      <div className='w-full max-w-350 px-4'>
        <div className='flex flex-wrap md:justify-center justify-start gap-6'>
          {/* Left Text */}
          <div
            ref={textRef}
            className='max-w-xl my-auto'
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <h3 className='text-base md:text-xl font-semibold text-gray-900'>Why SUNSYNC?</h3>
            <p className='text-xs md:text-sm text-gray-600 mt-2 leading-relaxed text-justify'>
              Exposure to bright sunlight can cause glare, eye strain, and UV damage. Essinox SUNSYNC lenses protect
              your eyes from harmful UV rays, reduce glare, and enhance visual clarity and contrast—perfect for outdoor
              activities, driving, and everyday use.
            </p>
          </div>

          {/* Right Images */}
          <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-4'>
            {/* Lens 3 */}
            <div
              ref={img3Ref}
              className='relative w-86.25 h-86.25'
              style={{
                opacity: 0,
                transform: 'translateY(32px) scale(0.97)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: '120ms',
              }}
            >
              {!isLens3Loaded && (
                <img
                  src={image.fallback}
                  alt='Loading...'
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-[14px]'
                />
              )}
              <img
                src={image.lenses3}
                alt='Progressive lens'
                className='w-full h-full object-cover rounded-[14px]'
                loading='lazy'
                onLoad={() => setIsLens3Loaded(true)}
              />
            </div>

            {/* Lens 5 */}
            <div
              ref={img5Ref}
              className='relative w-86.25 h-86.25'
              style={{
                opacity: 0,
                transform: 'translateY(32px) scale(0.97)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: '220ms',
              }}
            >
              {!isLens5Loaded && (
                <img
                  src={image.fallback}
                  alt='Loading...'
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-[14px]'
                />
              )}
              <img
                src={image.lenses5}
                alt='Photo-Z lens design'
                className='w-full h-full object-cover rounded-[14px]'
                loading='lazy'
                onLoad={() => setIsLens5Loaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LensesProgressivePhotoZ
