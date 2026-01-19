import emailjs from 'emailjs-com'
import { Mail, MessageSquare, Phone, User } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const SERVICE_ID = 'service_ftl0n4a'
const TEMPLATE_ID = 'template_ls2c4gb'
const PUBLIC_KEY = 'saMKFNpDe5tk4rw3j'

const ContactForm = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [services, setServices] = useState([])
  const [agree, setAgree] = useState(false)

  const handleServiceChange = (value, checked) => {
    setServices((prev) => (checked ? [...prev, value] : prev.filter((s) => s !== value)))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!agree) {
      toast.error('Please agree to the terms and conditions.')
      return
    }

    setLoading(true)

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)

      toast.success('Message sent successfully.')
      formRef.current.reset()
      setServices([])
      setAgree(false)
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='max-w-2xl w-full space-y-6'>
      <h2 className='text-2xl font-semibold text-gray-900'>Fill out this form</h2>

      {/* Name */}
      <div>
        <label className='flex items-center gap-2 text-sm font-medium'>
          <User size={16} color='#173f6a' /> Full Name *
        </label>
        <input
          name='from_name'
          required
          className='mt-2 w-full rounded-lg border border-gray-600 px-4 py-3 text-sm focus:border-[#173f6a] outline-none'
        />
      </div>

      {/* Phone */}
      <div>
        <label className='flex items-center gap-2 text-sm font-medium'>
          <Phone size={16} color='#173f6a' /> Phone *
        </label>
        <input
          name='phone'
          required
          className='mt-2 w-full rounded-lg border border-gray-600 px-4 py-3 text-sm focus:border-[#173f6a] outline-none'
        />
      </div>

      {/* Email */}
      <div>
        <label className='flex items-center gap-2 text-sm font-medium'>
          <Mail size={16} color='#173f6a' /> Email *
        </label>
        <input
          name='from_email'
          type='email'
          required
          className='mt-2 w-full rounded-lg border border-gray-600 px-4 py-3 text-sm focus:border-[#173f6a] outline-none'
        />
      </div>

      {/* Message */}
      <div>
        <label className='flex items-center gap-2 text-sm font-medium'>
          <MessageSquare size={16} color='#173f6a' /> Inquiry *
        </label>
        <textarea
          name='message'
          rows={5}
          required
          className='mt-2 w-full rounded-lg border border-gray-600 px-4 py-3 text-sm focus:border-[#173f6a] outline-none'
        />
      </div>

      {/* Services */}
      <div className='space-y-3'>
        {['General Inquiry', 'Dealership Request'].map((s) => (
          <label key={s} className='flex gap-3 text-sm'>
            <input
              type='checkbox'
              value={s}
              checked={services.includes(s)}
              onChange={(e) => handleServiceChange(s, e.target.checked)}
              className='w-5 h-5 accent-[#173f6a]'
            />
            {s}
          </label>
        ))}
        <input type='hidden' name='services' value={services.join(', ')} />
      </div>

      {/* Agreement */}
      <label className='flex gap-3 text-sm border-t pt-4'>
        <input
          type='checkbox'
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className='w-5 h-5 accent-[#173f6a]'
        />
        <Link to='/terms-and-condition' className='font-medium'>
          I agree to the terms and conditions
        </Link>
      </label>

      {/* Submit */}
      <button
        type='submit'
        disabled={loading}
        className='px-8 py-3 border border-[#173f6a] text-[#173f6a] rounded-lg hover:bg-[#173f6a] hover:text-white transition disabled:opacity-50'
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>
    </form>
  )
}

export default ContactForm
