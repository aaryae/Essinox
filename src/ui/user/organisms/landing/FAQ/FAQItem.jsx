export function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className='rounded-xl border border-gray-200 bg-gray-50'>
      <button
        onClick={() => setOpen(!open)}
        className='flex w-full items-center justify-between px-5 py-4 text-left text-gray-800 font-medium'
      >
        <span>{question}</span>
        <span className='text-xl'>{open ? '−' : '+'}</span>
      </button>

      {open && <div className='px-5 pb-4 text-sm text-gray-600'>{answer}</div>}
    </div>
  )
}
