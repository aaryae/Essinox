import { image } from '@/config/constant/image'
import { values } from '@/config/constant/values.data'
import { useEffect, useRef } from 'react'

// Match border/glow color to each image's dominant color
const imageColors = [
  '#c9dcfa', // blue  — lens3
  '#bb84dc', // purple/pink — lens4
  '#ecd6d8', // beige/pink — lens5
  '#afc2ae', // green — lens6
]

const Values = () => {
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
    <>
      <style>{`
        @keyframes float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0px var(--ring-color); opacity: 0.8; }
          70%  { box-shadow: 0 0 0 8px var(--ring-color); opacity: 0; }
          100% { box-shadow: 0 0 0 0px var(--ring-color); opacity: 0; }
        }

        .float-img-wrap {
          animation: float 3.5s ease-in-out infinite;
          position: relative;
          border-radius: 9999px;
        }

        .float-img-wrap::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          border: 2.5px solid var(--ring-color);
          animation: pulse-ring 2.4s ease-out infinite;
        }
      `}</style>

      <section className='w-full bg-[#f0f3f7] flex justify-center px-4 md:px-0 py-12 md:py-16'>
        <div className='w-full max-w-325 text-center'>
          {/* Heading */}
          <div
            ref={headingRef}
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <h2 className='text-xl md:text-4xl font-medium text-gray-900 mb-4'>What we stand for</h2>
            <p className='text-sm text-gray-700 mb-8 max-w-[60%] mx-auto tracking-wide'>
              Our values guide everything we do, from lens selection to customer care.
            </p>
          </div>

          {/* Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 md:gap-10 py-6'>
            {values.map((v, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className='flex flex-col items-center py-5'
                style={{
                  opacity: 0,
                  transform: 'translateY(32px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {/* Floating image with colored pulsing ring */}
                <div
                  className='float-img-wrap w-16 h-16 md:w-20 md:h-20 mb-3'
                  style={{
                    animationDelay: `${i * 0.4}s`,
                    '--ring-color': imageColors[i],
                  }}
                >
                  {/* Solid colored border ring */}
                  <div
                    style={{
                      padding: '3px',
                      borderRadius: '9999px',
                      background: `linear-gradient(135deg, ${imageColors[i]}, ${imageColors[i]}55)`,
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <div className='w-full h-full rounded-full overflow-hidden shadow-sm'>
                      <img
                        src={image[`lens${i + 3}`]}
                        alt={v.title}
                        className='w-full h-full object-cover'
                        loading='lazy'
                      />
                    </div>
                  </div>
                </div>

                <h3 className='text-sm font-medium text-gray-900 tracking-wide'>{v.title}</h3>
                <p className='text-[10px] md:text-xs text-gray-600 mt-1 max-w-[85%] leading-relaxed'>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Values
