import ContactForm from '@/components/forms/contact.form'
import { Dot, Home, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Contact' }

export default function Page() {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
        <h2 className='text-center text-4xl section-title font-creteRound mt-2'>
          <span>Contact</span>
        </h2>
        <div className='flex gap-1 items-center mt-4'>
          <Home className='w-4 h-4' />
          <Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
            Home
          </Link>
          <Dot />
          <p className='text-muted-foreground'>Contact</p>
        </div>
      </div>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-y-16 md:gap-x-4 mt-6'>
        <div className='flex flex-col'>
          <h1 className='text-4xl font-creteRound'>Contact Tulaganov</h1>
          <p className='mt-2 text-muted-foreground'>
            I am here to help and answer any question you might have. I look forward to hearing from
            you
          </p>
          <div className='mt-12 flex items-center gap-3'>
            <Mail className='w-4 h-4' />
            <p className='text-sm'>tulaganovok04@gmail.com</p>
          </div>
          <div className='flex items-center gap-3 mt-2'>
            <Phone className='w-4 h-4' />
            <p className='text-sm'>+998(94) 368-62-65</p>
          </div>
        </div>
        <div>
          <h1 className='text-4xl font-creteRound mb-2'>Contact form</h1>
          <div className='flex flex-col space-y-3'>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
