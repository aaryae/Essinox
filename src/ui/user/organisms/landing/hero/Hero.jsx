import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate()

  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(60px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      /* HEAVY FLOATING ORB 1 */
      @keyframes floatOrb1 {
        0%   { transform: translate(0px, 0px) scale(1) rotate(0deg); }
        20%  { transform: translate(150px, -120px) scale(1.2) rotate(20deg); }
        40%  { transform: translate(-200px, -180px) scale(1.1) rotate(60deg); }
        60%  { transform: translate(180px, 120px) scale(1.25) rotate(120deg); }
        80%  { transform: translate(-120px, 200px) scale(1.15) rotate(200deg); }
        100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
      }

      /* HEAVY FLOATING ORB 2 */
      @keyframes floatOrb2 {
        0%   { transform: translate(0px, 0px) scale(1) rotate(0deg); }
        25%  { transform: translate(-180px, 150px) scale(1.2) rotate(-30deg); }
        50%  { transform: translate(220px, -200px) scale(1.3) rotate(-120deg); }
        75%  { transform: translate(-200px, -100px) scale(1.15) rotate(-200deg); }
        100% { transform: translate(0px, 0px) scale(1) rotate(-360deg); }
      }
        @keyframes pulseGlow {
  0%   { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
  50%  { box-shadow: 0 0 25px rgba(255,255,255,0.4); }
  100% { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
}
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <div className='relative min-h-[70vh] bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white overflow-hidden'>
      {/* Animated Gradient Background */}
      <div
        className='absolute inset-0 opacity-30'
        style={{
          background: 'linear-gradient(-45deg, #0f172a, #0e2742, #1e3a8a, #0f172a)',
          backgroundSize: '400% 400%',
          animation: 'gradientMove 12s ease infinite',
        }}
      />

      {/* Floating Orbs (Heavy Visible Animation) */}
      <div
        className='absolute top-[-100px] right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[80px]'
        style={{
          animation: 'floatOrb1 12s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      <div
        className='absolute bottom-[-100px] left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[80px]'
        style={{
          animation: 'floatOrb2 14s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Hero Content */}
      <div className='relative min-h-[70vh] flex items-center justify-center px-6'>
        <div className='text-center max-w-5xl space-y-10'>
          {/* Badge */}
          <div
            className='inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 opacity-0'
            style={{ animation: 'fadeUp 0.8s ease forwards' }}
          >
            <span className='text-xs uppercase tracking-widest text-cyan-400 font-bold'>Optical Innovation</span>
          </div>

          {/* Headline */}
          <h1 className='text-6xl sm:text-8xl font-black leading-[0.95] tracking-tighter'>
            <span className='block opacity-0' style={{ animation: 'fadeUp 1s ease forwards 0.2s' }}>
              Lenses
            </span>

            <span
              className='block relative opacity-0
             bg-gradient-to-r from-white via-gray-300 to-white
             bg-clip-text text-transparent'
              style={{
                backgroundSize: '200% 200%',
                WebkitTextStroke: '1px white',
                animation:
                  'fadeUp 1s ease forwards 0.4s, gradientMove 8s ease infinite, textPulse 2.5s ease-in-out infinite',
              }}
            >
              for Clearer
            </span>

            <span className='block opacity-0' style={{ animation: 'fadeUp 1s ease forwards 0.6s' }}>
              Vision
            </span>
          </h1>

          {/* Description */}
          <p
            className='text-lg text-gray-400 max-w-2xl mx-auto opacity-0'
            style={{ animation: 'fadeUp 1s ease forwards 0.8s' }}
          >
            Advanced optical solutions engineered for clarity, comfort, and performance. Experience next-generation
            visual precision.
          </p>

          {/* Buttons */}
          <div
            className='flex flex-col sm:flex-row gap-6 justify-center pt-4 opacity-0'
            style={{ animation: 'fadeUp 1s ease forwards 1s' }}
          >
            <button
              onClick={() => navigate('/lenses')}
              className='relative py-3 px-6 border border-white text-white bg-[#ffffff44] rounded-xl w-fit cursor-pointer overflow-hidden group transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)]'
            >
              <span className='absolute inset-0 overflow-hidden rounded-xl'>
                <span className='absolute -left-[120%] top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[120%]' />
              </span>
              <span className='relative z-10'>Explore Lenses</span>
            </button>

            <button
              onClick={() => navigate('/contact')}
              className='cursor-pointer group relative px-6 py-3 rounded-xl font-semibold text-[14px] bg-white text-[#2f5b8f] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]'
            >
              <span className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/40 via-white/0 to-white/40 blur-xl' />
              <span className='relative flex items-center gap-2'>
                Become an Essinox Dealer
                <span className='transition-all duration-300 group-hover:translate-x-2'>→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
