import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import NextTopLoader from 'nextjs-toploader'

const creteRound = Crete_Round({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-crete-round',
})

const workSans = Work_Sans({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tulaganov-blog.uz'),
  title: 'Tulaganov | Blog',
  description:
    'Programming news, tips and the latest programming news. You can find a guide to learning and developing programming on our blog.',
  authors: [{ name: 'Otabek Tulaganov', url: 'https://t.me/tulaganovok' }],
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Tulaganov - blogs about information technologies',
    description:
      'Programming news, tips and the latest programming news. You can find a guide to learning and developing programming on our blog.',
    type: 'website',
    url: 'https://www.tulaganov-blog.uz',
    locale: 'en-US',
    countryName: 'Uzbekustan',
    siteName: 'Tulaganov | Blog',
    emails: 'tulaganovok04@gmail.com',
    images: 'https://i.postimg.cc/SNy9LRqQ/Screenshot-2024-11-13-220103.png',
  },
}

export default function RootLayout({ children }: Readonly<ChildProps>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden font-work-sans`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          {children}
          <Toaster position='bottom-center' />
        </ThemeProvider>
      </body>
    </html>
  )
}
