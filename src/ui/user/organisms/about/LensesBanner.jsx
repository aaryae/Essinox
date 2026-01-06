import { image } from '@/config/constant/image'

const LensesBanner = () => {
  return (
    <section className='relative w-full flex justify-center overflow-hidden'>
      <img
        src={image.aboutVideo}
        alt='Hero banner'
        className='absolute inset-0 w-full h-full object-cover brightness-[0.65] scale-x-[1]'
      />

      <div
        className='absolute inset-0 opacity-65 pointer-events-none'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className='w-full max-w-350 aspect-28/14 md:aspect-28/13 lg:aspect-[28/12.25] relative'>
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
          <p className='text-sm font-bold uppercase tracking-widest text-white opacity-80 mb-6'>About Essinox</p>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-white drop-shadow-md'>
            Your trusted partner in eyewear excellence
          </h1>
        </div>
      </div>
    </section>
  )
}

export default LensesBanner
