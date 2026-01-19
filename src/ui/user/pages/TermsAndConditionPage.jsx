export default function TermsAndConditions() {
  return (
    <main className='bg-[#f4f6f8] text-[#0f172a]'>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0 bg-[#173f6a]' />

        {/* Ambient glow */}
        <div className='absolute -top-32 -right-32 w-130 h-130 bg-blue-500/10 blur-[140px] rounded-full' />

        <div className='relative max-w-6xl mx-auto px-6 py-28'>
          <div className='max-w-2xl'>
            <p className='text-xs tracking-[0.35em] uppercase text-white/80'>Legal Information</p>

            <h1 className='mt-6 text-5xl md:text-6xl font-medium tracking-tight text-white'>Terms & Conditions</h1>

            <p className='mt-8 text-lg text-white/90 leading-relaxed'>
              These Terms & Conditions govern the sale, warranty, and usage of Essinox optical lenses and related
              products.
            </p>

            <p className='mt-4 text-sm text-white/70'>Effective from January 18, 2026</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className='max-w-6xl mx-auto px-6'>
        <div className='h-px bg-linear-to-r from-transparent via-blue-300/40 to-transparent' />
      </div>

      {/* Content Section */}
      <section className='max-w-6xl mx-auto px-6 py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20'>
          {[
            {
              title: 'Warranty Coverage',
              text: 'All Essinox lenses are covered by a one (1) year coating peel-off warranty, effective from the date of invoice.',
            },
            {
              title: 'Non-Adaptation Warranty',
              text: 'A one-month non-adaptation warranty applies exclusively to progressive lenses and is valid for 30 days from the invoice date.',
            },
            {
              title: 'Power Range Availability',
              text: 'Essinox lenses are supplied strictly within the power ranges defined in the official and current price list.',
            },
            {
              title: 'Pricing & Taxes',
              text: 'All prices are stated in Nepalese Rupees (NPR) per pair and are inclusive of applicable Value Added Tax (VAT).',
            },
            {
              title: 'Warranty Exclusions',
              text: 'Warranty claims or exchanges will not be entertained for cosmetic concerns, lens thickness or weight preferences, improper handling, misuse, or any form of physical damage.',
            },
            {
              title: 'Price Revisions',
              text: 'Essinox reserves the right to revise product pricing at any time without prior notice.',
            },
            {
              title: 'Dispute Resolution',
              text: 'In the event of any dispute, the decision of Essinox shall be final and binding to the fullest extent permitted by law.',
            },
          ].map((item, index) => (
            <div key={index} className='relative'>
              {/* Accent line */}
              <div className='absolute -left-6 top-1 h-6 w-0.5 bg-linear-to-b from-blue-600 to-transparent' />

              <h2 className='text-lg font-medium tracking-tight mb-4'>{item.title}</h2>

              <p className='text-slate-600 leading-relaxed max-w-md'>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
