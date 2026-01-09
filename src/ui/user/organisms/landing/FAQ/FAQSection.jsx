import { FAQItem } from '@/ui/user/organisms/landing/FAQ/FAQItem'

export function FAQSection() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-16'>
      <h2 className='text-center text-3xl font-semibold text-gray-900'>FAQ</h2>
      <p className='mt-2 text-center text-gray-500'>
        We're committed to providing exceptional eyewear and service that exceeds your expectations
      </p>

      <div className='mt-8 space-y-4'>
        <FAQItem
          question='What makes Essinox lenses different?'
          answer='Essinox lenses are made with advanced optical technology and premium coatings to deliver clear vision, comfort, and durability.'
        />
        <FAQItem
          question='Are Essinox lenses suitable for digital screen use?'
          answer='Yes, Essinox lenses help reduce eye strain and blue light exposure caused by prolonged digital device use.'
        />
        <FAQItem
          question='Do Essinox lenses provide UV protection?'
          answer='All Essinox lenses offer effective UV protection to help safeguard your eyes from harmful ultraviolet rays.'
        />
        <FAQItem
          question='Are Essinox lenses suitable for daily wear?'
          answer='Essinox lenses are lightweight and comfortable, making them ideal for long hours of everyday use.'
        />
        <FAQItem
          question='Can I get Essinox lenses with different coatings?'
          answer='Yes. Essinox lenses are available with various coatings, including anti-reflective, blue filter, UV protection, and hydrophobic coatings.'
        />
      </div>
    </section>
  )
}
