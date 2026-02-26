import { image } from '@/config/constant/image'
import { useEffect, useRef, useState } from 'react'

const LensesHero = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false)
  const [isLens2Loaded, setIsLens2Loaded] = useState(false)
  const [isDesigner3Loaded, setIsDesigner3Loaded] = useState(false)

  const titleRef = useRef(null)
  const heroImgRef = useRef(null)
  const leftImgRef = useRef(null)
  const rightImgRef = useRef(null)
  const textRef = useRef(null)

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

    const refs = [titleRef, heroImgRef, leftImgRef, rightImgRef, textRef]
    refs.forEach((ref) => ref.current && observer.observe(ref.current))

    return () => observer.disconnect()
  }, [])

  return (
    <section className='w-full bg-[#f4f6f9] flex justify-center py-5 px-4 pb-20'>
      <div className='w-full max-w-350'>
        {/* Title Block */}
        <div
          ref={titleRef}
          className='text-center pt-6 md:pt-10 pb-5 md:pb-7'
          style={{
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h1 className='text-xl md:text-4xl font-medium text-gray-900 tracking-wide text-center'>Essinox Bluecare</h1>
          <p className='text-sm text-gray-600 md:mt-2 py-1 md:max-w-[70%] mx-auto'>
            Designed for modern digital lifestyles, Bluecare lenses reduce eye strain and deliver comfortable, clear
            vision all day.
          </p>
        </div>

        {/* Large Hero Image */}
        <div
          ref={heroImgRef}
          className='w-full flex justify-center relative'
          style={{
            opacity: 0,
            transform: 'translateY(32px) scale(0.98)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            transitionDelay: '100ms',
          }}
        >
          {!isHeroLoaded && (
            <img
              src={image.fallback}
              alt='Loading...'
              className='absolute top-0 left-0 w-full h-full object-cover rounded-[18px]'
            />
          )}
          <img
            src={image.lensesHero}
            alt='Essinox Glass'
            className='w-full rounded-[18px]'
            loading='lazy'
            onLoad={() => setIsHeroLoaded(true)}
          />
        </div>

        <div className='flex flex-wrap gap-7 mt-2 justify-start'>
          <div className='flex gap-16 md:gap-4 mt-3 md:mt-5 flex-wrap max-[1425px]:justify-center'>
            {/* Left small image */}
            <div
              ref={leftImgRef}
              className='w-fit flex justify-center relative'
              style={{
                opacity: 0,
                transform: 'translateY(32px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: '180ms',
              }}
            >
              {!isLens2Loaded && (
                <img
                  src={image.fallback}
                  alt='Loading...'
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-[14px]'
                />
              )}
              <img
                src={image.lenses1}
                alt='Essinox Glass small'
                className='w-86.25 h-86.25 object-cover rounded-[14px]'
                loading='lazy'
                onLoad={() => setIsLens2Loaded(true)}
              />
            </div>

            {/* Right small image */}
            <div
              ref={rightImgRef}
              className='w-fit flex justify-center relative'
              style={{
                opacity: 0,
                transform: 'translateY(32px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: '260ms',
              }}
            >
              {!isDesigner3Loaded && (
                <img
                  src={image.fallback}
                  alt='Loading...'
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-[14px]'
                />
              )}
              <img
                src={image.lenses2}
                alt='Designer Collection'
                className='w-86.25 h-86.25 object-cover rounded-[14px]'
                loading='lazy'
                onLoad={() => setIsDesigner3Loaded(true)}
              />
            </div>

            {/* Text */}
            <div
              ref={textRef}
              className='max-w-2xl pl-0 my-auto'
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                transitionDelay: '340ms',
              }}
            >
              <h2 className='text-lg md:text-2xl font-medium text-gray-900'>Why Bluecare?</h2>
              <p className='text-[11px] md:text-sm text-gray-600 mt-2 md:mt-3 leading-relaxed text-justify md:w-xl'>
                Prolonged screen use can cause eye fatigue, dryness, and discomfort. Essinox Bluecare lenses feature
                advanced blue light filtering technology to protect your eyes from harmful blue light while maintaining
                natural color perception. Perfect for office work, online learning, and everyday digital device use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LensesHero
