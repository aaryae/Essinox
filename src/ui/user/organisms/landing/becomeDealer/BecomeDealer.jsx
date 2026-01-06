import { Link } from 'react-router-dom'

const BecomeDealer = () => {
  return (
    <section className='flex flex-col items-center py-30 gap-4 bg-[#205187] text-white'>
      <div className='flex flex-col items-center gap-4'>
        <p>Become an Authoritative Essinox partner</p>
        <p>
          Join our network of trusted opticians and offer your clients the highest quality lenses, competitive pricing
          and exceptional support
        </p>
        <Link
          to='/dealer'
          className='flex items-center gap-2 px-6 py-2.5 rounded-md w-fit
              bg-white text-gray-900 text-sm font-medium
              hover:bg-gray-100 transition'
        >
          Become a Dealer
        </Link>
      </div>
      <div className='flex gap-4 pt-8 flex-wrap items-center justify-center '>
        <div className='flex flex-col gap-2 justify-center items-center p-5 bg-[#ffffff49] border border-white rounded-2xl'>
          <h1>premium products</h1>
          <p>access to our premium lens catalog</p>
        </div>

        <div className='flex flex-col gap-2 justify-center items-center p-5 bg-[#ffffff49] border border-white rounded-2xl'>
          <h1>premium products</h1>
          <p>access to our premium lens catalog</p>
        </div>

        <div className='flex flex-col gap-2 justify-center items-center p-5 bg-[#ffffff49] border border-white rounded-2xl'>
          <h1>premium products</h1>
          <p>access to our premium lens catalog</p>
        </div>
      </div>
    </section>
  )
}

export default BecomeDealer
