import '../styles/globals.css';

import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Highlights from '@/components/HighLights'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import Location from '@/components/Location'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsappButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <WhatsappButton />
      <Header />
      <Hero />
      <Highlights />
      <About />
      <Reviews />
      <Location />
      <CTA />
      <Footer />
    </main>
  )
}
