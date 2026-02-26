import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const featureCards = [
  {
    title: 'Premium Lens Portfolio',
    description: 'A complete range of high-quality lenses for modern vision needs.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Attractive dealer margins with consistent quality and transparent pricing.',
  },
  {
    title: 'Reliable Support & Supply',
    description: 'Timely delivery, technical assistance, and ongoing partner support.',
  },
]

const BecomeDealer = () => {
  const navigate = useNavigate()
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
    <section className='flex flex-col items-center py-30 gap-4 bg-[#205187] text-white px-4'>
      {/* Heading + Button */}
      <div
        ref={headingRef}
        className='flex flex-col items-center gap-4'
        style={{
          opacity: 0,
          transform: 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <p>Become an Authoritative Essinox partner</p>
        <p className='text-justify'>
          Join our network of trusted opticians and vision professionals. Offer premium-quality Essinox lenses with
          reliable performance, competitive pricing, and dedicated support.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className='cursor-pointer group relative px-6 py-3 rounded-xl font-semibold text-[14px] bg-white text-[#2f5b8f] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]'
        >
          {/* Glow background */}
          <span className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/40 via-white/0 to-white/40 blur-xl' />
          {/* Content */}
          <span className='relative flex items-center gap-2'>
            Become Essinox Dealer
            <span className='transition-all duration-300 group-hover:translate-x-2'>→</span>
          </span>
        </button>
      </div>

      {/* Feature Cards */}
      <div className='flex gap-4 pt-8 flex-wrap items-center justify-center'>
        {featureCards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className='flex flex-col gap-2 justify-center items-center p-5 bg-[#ffffff17] border border-[#ffffffa9] rounded-2xl sm:w-100 text-center'
            style={{
              opacity: 0,
              transform: 'translateY(32px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              transitionDelay: `${index * 80}ms`,
            }}
          >
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BecomeDealer
