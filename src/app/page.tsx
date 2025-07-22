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
import Reveal from '@/components/utils/Reveal'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <WhatsappButton />
      <Header />
      <Reveal><Hero /></Reveal>
      <Reveal delay={0.1}><Highlights /></Reveal>
      <Reveal delay={0.1}><About /></Reveal>
      <Reveal delay={0.1}><Reviews /></Reveal>
      <Reveal delay={0.1}><Location /></Reveal>
      <Reveal delay={0.1}><CTA /></Reveal>
      <Footer />
    </main>
  )
}
