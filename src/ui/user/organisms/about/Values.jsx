import { image } from '@/config/constant/image'

const Values = () => {
  const values = [
    { title: 'Passion For Design', desc: "We believe eyewear is more than fashion, it's self-expression." },
    { title: 'Quality Materials', desc: 'Every frame is crafted for durability, clarity and comfort.' },
    { title: 'Customer Satisfaction', desc: 'Your confidence matters, we’re here to support your style.' },
    { title: 'Perfect Fit Promise', desc: 'Precision-built frames that feel as good as they look.' },
  ]

  return (
    <section className='w-full bg-[#f0f3f7] flex justify-center px-4 md:px-0 py-12 md:py-16'>
      <div className='w-full max-w-325 text-center'>
        <h2 className='text-xl md:text-4xl font-medium text-gray-900 mb-4'>What we stand for</h2>
        <p className='text-sm  text-gray-700 mb-8 max-w-[60%] mx-auto tracking-wide'>
          Our values guide everything we do, from lens selection to customer care.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 md:gap-10 py-6'>
          {values.map((v, i) => (
            <div key={i} className='flex flex-col items-center py-5'>
              <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 shadow-sm'>
                <img src={image.essinoxGlass} alt={v.title} className='w-full h-full object-cover' />
              </div>
              <h3 className='text-sm  font-medium text-gray-900 tracking-wide'>{v.title}</h3>
              <p className='text-[10px] md:text-xs text-gray-600 mt-1 max-w-[85%] leading-relaxed'>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
