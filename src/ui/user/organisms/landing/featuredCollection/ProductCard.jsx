export function ProductCard({ image, title }) {
  return (
    <div className='w-72 text-center'>
      <div className='overflow-hidden rounded-2xl bg-white shadow-md'>
        <img src={image} alt={title} className='h-72 w-full object-cover' />
      </div>
      <h3 className='mt-4 text-lg font-medium text-gray-900'>{title}</h3>
    </div>
  )
}
