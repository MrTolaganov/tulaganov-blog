import { ChildProps } from '@/types'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Layout({ children }: ChildProps) {
  return (
    <main>
      <Navbar />
      <div className='container'>{children}</div>
      <Footer />
    </main>
  )
}
