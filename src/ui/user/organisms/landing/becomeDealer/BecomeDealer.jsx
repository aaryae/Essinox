import { Link } from 'react-router-dom'

const BecomeDealer = () => {
  return (
    <section className='flex flex-col items-center py-30 gap-4 bg-[#205187] text-white px-4'>
      <div className='flex flex-col items-center gap-4'>
        <p>Become an Authoritative Essinox partner</p>
        <p className='text-justify'>
          Join our growing network of trusted opticians and eyewear professionals. Offer your customers premium-quality
          Essinox lenses with reliable performance, competitive pricing, and dedicated support.
        </p>
        <Link
          to='/contact'
          className='flex items-center gap-2 px-6 py-2.5 rounded-md w-fit
              bg-white text-gray-900 text-sm font-medium
              hover:bg-gray-100 transition'
        >
          Become a Dealer
        </Link>
      </div>
      <div className='flex gap-4 pt-8 flex-wrap items-center justify-center '>
        <div className='flex flex-col gap-2 justify-center items-center p-5 bg-[#ffffff17] border border-[#ffffffa9] rounded-2xl sm:w-100  text-center '>
          <h1>Premium Lens Portfolio</h1>
          <p cl>Access a complete range of high-quality optical lenses designed for modern vision needs.</p>
        </div>

        <div className='flex flex-col gap-2 justify-center items-center p-5 bg-[#ffffff17] border border-[#ffffffa9] rounded-2xl sm:w-100 text-center'>
          <h1>Competitive Pricing</h1>
          <p>Enjoy attractive dealer margins with consistent quality and transparent pricing.</p>
        </div>

        <div className='flex flex-col gap-2 justify-center items-center p-5 bg-[#ffffff17] border border-[#ffffffa9] rounded-2xl sm:w-100 text-center'>
          <h1>Reliable Support & Supply</h1>
          <p>Benefit from timely delivery, technical assistance, and ongoing partner support.</p>
        </div>
      </div>
    </section>
  )
}

export default BecomeDealer
