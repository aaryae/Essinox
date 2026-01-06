import { image } from '@/config/constant/image'

export const ContactHero = () => {
  return (
    <div className='relative w-full h-80 md:h-96 bg-gray-900 overflow-hidden'>
      <img src={image.contact} alt='Eyewear' className='w-full h-full object-cover opacity-60' />
      {/* Grainy texture overlay */}
      <div
        className='absolute inset-0 opacity-65 pointer-events-none'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4'>
        <p className='text-sm uppercase tracking-wider mb-2'>ABOUT ESSINOX</p>
        <h1 className='text-3xl md:text-4xl font-bold text-center'>Your trusted partner in eyewear excellence</h1>
      </div>
    </div>
  )
}
