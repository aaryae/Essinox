import { Mail, MessageSquare, Phone, User } from 'lucide-react'

const ContactForm = () => {
  return (
    <div className='max-w-2xl w-full'>
      <h2 className='text-2xl font-semibold text-gray-900'>Fill out this form</h2>
      <div className='mt-8 space-y-6'>
        {/* Full Name */}
        <div>
          <label className='flex items-center gap-2 text-sm font-medium text-gray-800'>
            <User size={16} style={{ color: '#387bbf' }} />
            Full Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            placeholder='eg. eye care'
            className='
              mt-2 w-full rounded-lg
              border  border-gray-600
              px-4 py-3 text-sm
              placeholder:text-gray-400
              focus:border-[#3271b1] focus:ring-0 focus:outline-none
            '
          />
        </div>

        {/* Phone */}
        <div>
          <label className='flex items-center gap-2 text-sm font-medium text-gray-800'>
            <Phone size={16} style={{ color: '#387bbf' }} />
            Phone Number <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            placeholder='eg. 9808976767'
            className='
              mt-2 w-full rounded-lg
              border  border-gray-600
              px-4 py-3 text-sm
              placeholder:text-gray-400
              focus:border-[#3271b1] focus:ring-0 focus:outline-none
            '
          />
        </div>

        {/* Email */}
        <div>
          <label className='flex items-center gap-2 text-sm font-medium text-gray-800'>
            <Mail size={16} style={{ color: '#387bbf' }} />
            Email Address <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            placeholder='eg. john@essinox.com'
            className='
              mt-2 w-full rounded-lg
              border  border-gray-600
              px-4 py-3 text-sm
              placeholder:text-gray-400
              focus:border-[#3271b1] focus:ring-0 focus:outline-none
            '
          />
        </div>

        {/* Inquiry */}
        <div>
          <label className='flex items-center gap-2 text-sm font-medium text-gray-800'>
            <MessageSquare size={16} style={{ color: '#387bbf' }} />
            Inquiry Detail <span className='text-red-500'>*</span>
          </label>
          <textarea
            rows='5'
            className='
              mt-2 w-full rounded-lg
              border  border-gray-600
              px-4 py-3 text-sm
              focus:border-[#3271b1] focus:ring-0 focus:outline-none
            '
          />
        </div>

        {/* Services */}
        <div>
          <p className='text-sm font-medium text-gray-800 mb-3'>Services</p>
          <div className='space-y-3 text-sm text-gray-700'>
            <label className='flex items-center gap-3 cursor-pointer group'>
              <input
                type='checkbox'
                className='
                  w-5 h-5 rounded border  border-gray-600
                  text-[#3271b1]
                  focus:ring-2 focus:ring-[#3271b1] focus:ring-offset-0
                  cursor-pointer
                  transition-all duration-200
                '
              />
              <span className='group-hover:text-gray-900 transition-colors'>General Inquiry</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer group'>
              <input
                type='checkbox'
                className='
                  w-5 h-5 rounded border  border-gray-600
                  text-[#3271b1] 
                  focus:ring-2 focus:ring-[#3271b1] focus:ring-offset-0
                  cursor-pointer
                  transition-all duration-200
                '
              />
              <span className='group-hover:text-gray-900 transition-colors'>Dealership Request</span>
            </label>
          </div>
        </div>

        {/* Privacy */}
        <label className='flex items-start gap-3 text-sm text-gray-700 cursor-pointer group  border-t pt-4 mt-10 border-gray-400 w-fit'>
          <input
            type='checkbox'
            className='
              mt-0.5 w-5 h-5 rounded border  border-gray-600
              text-[#3271b1]
              focus:ring-2 focus:ring-[#3271b1] focus:ring-offset-0
              cursor-pointer
              transition-all duration-200
            '
          />
          <span className='leading-relaxed font-bold my-auto'>
            Please agree to our
            <span className='text-[#3271b1] hover:text-[#3271b1] cursor-pointer ml-1 font-medium'>
              Privacy Policy
            </span>{' '}
            to contact us.
          </span>
        </label>

        {/* Submit */}
        <button
          type='button'
          onClick={() => alert('Form submitted!')}
          className='
            mt-4 rounded-lg
            border border-[#3271b1]
            px-7 py-2.5
            text-sm font-medium text-[#3271b1]
            hover:bg-[#3271b1] hover:text-white
            transition
          '
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default ContactForm
