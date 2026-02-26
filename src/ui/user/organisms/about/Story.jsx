import { useEffect, useRef } from 'react'

const Story = () => {
  const sectionRef = useRef(null)

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

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className='w-full bg-white flex justify-center px-4 md:px-0 py-10 md:py-14'>
      <div
        ref={sectionRef}
        className='w-full max-w-250 text-center'
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <h2 className='text-xl md:text-4xl font-medium text-gray-900 mb-4'>Our Story</h2>
        <p className='text-xs md:text-sm text-gray-700 leading-relaxed tracking-wide'>
          Essinox was founded to provide high-quality lenses that keep up with modern lifestyles. We understand how much
          your eyes work every day, from digital screens to daily tasks and craft lenses for clarity, comfort, and
          lasting performance.
          <br />
          Using advanced lens technology and precision craftsmanship, we ensure every lens supports your vision needs
          while delivering reliable, long-lasting quality.
          <br />
          Driven by innovation, trust, and a passion for better vision, Essinox is committed to helping you see clearly
          and comfortably, every day.
        </p>
      </div>
    </section>
  )
}

export default Story
