import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        {/* Question */}
        <span className="text-[15px] font-medium text-gray-900">
          {question}
        </span>

        {/* Chevron */}
        <span
          className={`text-gray-500 transition-transform duration-300
            ${open ? 'rotate-180' : ''}
          `}
        >
         <ChevronDown />
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  )
}
