import Footer from '@/components/landing/footer'
import Header from '@/components/landing/header'
import { cn } from '@/lib/utils'
import { Nunito } from 'next/font/google'
 
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default function NotFound() {
  return (
    <main className={cn("bg-white text-[#A1AAC9] overflow-x-hidden h-full flex flex-col justify-between", nunito.className)}>
    <Header/>
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Page not found.</h2>
          <p className="text-gray-600">The page you are looking for does not exist.</p>
        </div>
      </div>
    <Footer/> 
</main>
  )
}