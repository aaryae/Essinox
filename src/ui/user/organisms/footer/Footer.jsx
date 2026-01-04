import { image } from '@/config/constant/image'
import Logo from '@/ui/user/atoms/Logo'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-[#173f6a] text-white'>
      {/* Top CTA Section */}
      <div className='border-b border-white/20'>
        <div className='max-w-7xl mx-auto px-4 py-16 text-center'>
          <h2 className='text-3xl md:text-4xl font-medium'>Expert Team, Personal Service</h2>

          <p className='mt-4 text-sm text-white/80 max-w-2xl mx-auto leading-relaxed'>
            Our trained opticians and style consultants are here to help you find frames that perfectly match your
            prescription, lifestyle, and personal aesthetic. We take the time to understand your needs and preferences,
            ensuring you leave with eyewear you'll love to wear every day.
          </p>

          <a
            href='/about'
            className='inline-block mt-8 bg-white text-[#173f6a]
            px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition'
          >
            Meet Our Team
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        {/* LEFT / TEXT */}
        <div className='order-2 md:order-1 flex items-center mx-auto'>
          <div className='w-full max-w-xl px-6 md:px-12 py-2 space-y-8'>
            {/* Brand */}
            <div>
              <Logo />
            </div>

            {/* Description */}
            <p className='text-sm leading-relaxed text-white/80'>
              Our trained opticians and style consultants help you discover frames that complement your prescription,
              lifestyle, and personal style — ensuring comfort and confidence every day.
            </p>

            {/* Divider */}
            <div className='h-px w-12 bg-white/30' />

            {/* Contact Info */}
            <ul className='space-y-2 text-sm'>
              <li className='group flex items-center gap-4'>
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10'>
                  <Phone className='w-4 h-4 text-white/80' />
                </span>
                <span className='text-white/90 group-hover:text-white transition'>Contact Us</span>
              </li>

              <li className='group flex items-center gap-4'>
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10'>
                  <Mail className='w-4 h-4 text-white/80' />
                </span>
                <span className='text-white/90 group-hover:text-white transition'>Email Address</span>
              </li>

              <li className='group flex items-center gap-4'>
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10'>
                  <MapPin className='w-4 h-4 text-white/80' />
                </span>
                <span className='text-white/90 group-hover:text-white transition'>Location Address</span>
              </li>
            </ul>

            {/* Social */}
            <div className='pt-2'>
              <p className='text-sm font-medium text-white/90 mb-3'>Follow us</p>

              <div className='flex gap-4'>
                <a
                  href='#'
                  className='group flex h-10 w-10 items-center justify-center rounded-full bg-white/10
    hover:bg-white hover:text-[#173f6a] transition-all duration-300'
                  aria-label='Facebook'
                >
                  <Facebook className='w-5 h-5' />
                </a>

                <a
                  href='#'
                  className='group flex h-10 w-10 items-center justify-center rounded-full bg-white/10
    hover:bg-white hover:text-[#173f6a] transition-all duration-300'
                  aria-label='LinkedIn'
                >
                  <Linkedin className='w-5 h-5' />
                </a>

                <a
                  href='#'
                  className='group flex h-10 w-10 items-center justify-center rounded-full bg-white/10
    hover:bg-white hover:text-[#173f6a] transition-all duration-300'
                  aria-label='Instagram'
                >
                  <Instagram className='w-5 h-5' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT / IMAGE */}
        <div className='h-120 order-1 md:order-2'>
          <img src={image.footerGlass} alt='Eyewear' className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/20 py-4 text-center text-sm text-white/70'>© 2025 Essinox</div>
    </footer>
  )
}
