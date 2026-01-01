export function FAQSection() {
  return (
    <section className='mx-auto max-w-3xl px-4 py-16'>
      <h2 className='text-center text-3xl font-semibold text-gray-900'>FAQ</h2>
      <p className='mt-2 text-center text-gray-500'>
        We're committed to providing exceptional eyewear and service that exceeds your expectations
      </p>

      <div className='mt-8 space-y-4'>
        <FAQItem
          question='What coatings are available?'
          answer='We offer anti-reflective, scratch-resistant, UV-protection, and blue-light filtering coatings.'
        />
        <FAQItem
          question='What are the benefits of each coating?'
          answer='Each coating improves comfort, durability, and eye protection depending on your needs.'
        />
        <FAQItem
          question='How long do the coatings last?'
          answer='With proper care, our coatings can last several years.'
        />
        <FAQItem
          question='Can coatings be applied to any surface?'
          answer='Most coatings can be applied to prescription and non-prescription lenses.'
        />
        <FAQItem
          question='What is the application process for coatings?'
          answer='Coatings are applied during lens manufacturing using advanced technology.'
        />
      </div>
    </section>
  )
}
