import { image } from '@/config/constant/image'
import Logo from '@/ui/user/atoms/Logo'
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-[#173f6a] text-white'>
      {/* Top CTA Section */}
      <div className='border-b border-white/20'>
        <div className='max-w-7xl mx-auto px-4 py-16 text-center'>
          <h2 className='text-3xl md:text-4xl font-medium'>Your Vision, Our Expertise </h2>

          <p className='mt-4 text-sm text-white/80 max-w-2xl mx-auto leading-relaxed'>
            We believe eyewear should be as unique as you are. Our team takes the time to understand your daily life and
            personal taste, guiding you toward the perfect frames. From clinical precision to personal style, we’re here
            to help you love what you wear.
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
              Discover frames that perfectly balance your vision needs with your personal style, guided by our expert
              opticians.
            </p>

            {/* Divider */}
            <div className='h-px w-12 bg-white/30' />

            {/* Contact Info */}
            <ul className='space-y-2 text-sm'>
              {/* Phone */}
              <li className='group flex items-center gap-4 '>
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10'>
                  <Phone className='w-4 h-4 text-white/80' />
                </span>

                <Link className='text-white/90 group-hover:text-white transition'>015914844</Link>

                <Link className='ml-auto w-fit flex ' to='/'>
                  Home <ArrowRight size={20} />{' '}
                </Link>
              </li>

              {/* Email */}
              <li className='group flex items-center gap-4'>
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10'>
                  <Mail className='w-4 h-4 text-white/80' />
                </span>

                <Link
                  to='https://mail.google.com/mail/u/0/#inbox?compose=VpCqJZMhcXnmZqzdNzXKNmRJlztGzvHmPvRvrDnXWlvNrWZphslPLBGjRCGnTRcVhSpZTJv'
                  className='text-white/90 group-hover:text-white transition'
                >
                  info@essinoxlens.com
                </Link>
                <Link className='ml-auto w-fit flex ' to='/about'>
                  About <ArrowRight size={20} />{' '}
                </Link>
              </li>

              {/* Location */}
              <li className='group flex items-center gap-4'>
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-white/10'>
                  <MapPin className='w-4 h-4 text-white/80' />
                </span>

                <Link
                  to='https://www.google.com/maps/place/Tripureshwor,+Kathmandu+44600/@27.6951562,85.3146119,2098m/data=!3m2!1e3!4b1!4m10!1m2!2m1!1sessinox+tripureshowr!3m6!1s0x39eb19ac7c7c0e35:0x5d153025334f3c1e!8m2!3d27.6949964!4d85.3149142!15sChRlc3Npbm94IHRyaXB1cmVzaHdvcpIBDHN1YmxvY2FsaXR5MeABAA!16s%2Fg%2F1w6_m742?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D'
                  target='_blank'
                  className='text-white/90 group-hover:text-white transition'
                >
                  Tripureshwor, Kathmandu, Nepal
                </Link>
                <Link className='ml-auto w-fit flex ' to='/contact'>
                  Contact <ArrowRight size={20} />{' '}
                </Link>
              </li>
            </ul>

            {/* Social */}
            <div className='pt-2'>
              <p className='text-sm font-medium text-white/90 mb-3'>Follow us</p>

              <div className='flex gap-4'>
                <Link
                  to=' https://www.facebook.com/people/Essinox/61583761424872/'
                  className='group flex h-10 w-10 items-center justify-center rounded-full bg-white/10
    hover:bg-white hover:text-[#173f6a] transition-all duration-300'
                  aria-label='Facebook'
                >
                  <Facebook className='w-5 h-5' />
                </Link>

                <Link
                  to='https://www.instagram.com/essinox.lenses/#'
                  className='group flex h-10 w-10 items-center justify-center rounded-full bg-white/10
    hover:bg-white hover:text-[#173f6a] transition-all duration-300'
                  aria-label='LinkedIn'
                >
                  <Instagram className='w-5 h-5' />
                </Link>
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
