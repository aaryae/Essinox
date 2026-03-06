import { image } from '@/config/constant/image'
import { useEffect, useRef, useState } from 'react'

/* Reusable reveal animation */
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: 'all .6s ease',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* Reusable lazy image with fallback */
const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className='relative'>
      {!loaded && (
        <img
          src={image.fallback}
          alt='loading'
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      )}

      <img src={src} alt={alt} loading='lazy' className={className} onLoad={() => setLoaded(true)} />
    </div>
  )
}

const LensesHero = () => {
  return (
    <section className='w-full bg-[#f4f6f9] flex justify-center py-5 px-4 pb-20'>
      <div className='w-full max-w-[1400px]'>
        {/* Title */}
        <Reveal>
          <div className='text-center pt-6 md:pt-10 pb-5 md:pb-7'>
            <h1 className='text-xl md:text-4xl font-medium text-gray-900 tracking-wide'>Essinox BlueCare</h1>

            <p className='text-sm text-gray-600 md:mt-2 py-1 md:max-w-[70%] mx-auto'>
              Designed for modern digital lifestyles, BlueCare lenses reduce eye strain and deliver comfortable, clear
              vision all day.
            </p>
          </div>
        </Reveal>

        {/* Large Image */}
        <Reveal delay={100}>
          <div className='flex justify-center'>
            <LazyImage src={image.lensesHero} alt='Essinox Glass' className='w-full rounded-[18px]' />
          </div>
        </Reveal>

        <div className='flex flex-wrap gap-7 mt-2 justify-start'>
          <div className='flex gap-16 md:gap-4 mt-3 md:mt-5 flex-wrap max-[1425px]:justify-center'>
            {/* Left Image */}
            <Reveal delay={180}>
              <LazyImage
                src={image.lenses1}
                alt='Essinox Glass small'
                className='w-[345px] h-[345px] object-cover rounded-[14px]'
              />
            </Reveal>

            {/* Right Image */}
            <Reveal delay={260}>
              <LazyImage
                src={image.lenses2}
                alt='Designer Collection'
                className='w-[345px] h-[345px] object-cover rounded-[14px]'
              />
            </Reveal>

            {/* Text */}
            <Reveal delay={340}>
              <div className='max-w-2xl my-auto'>
                <h2 className='text-lg md:text-2xl font-medium text-gray-900'>Why Bluecare?</h2>

                <p className='text-[11px] md:text-sm text-gray-600 mt-2 md:mt-3 leading-relaxed text-justify md:w-xl'>
                  Prolonged screen use can cause eye fatigue, dryness, and discomfort. Essinox Bluecare lenses feature
                  advanced blue light filtering technology to protect your eyes from harmful blue light while
                  maintaining natural color perception. Perfect for office work, online learning, and everyday digital
                  device use.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LensesHero
