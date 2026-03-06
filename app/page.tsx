import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Missie from '@/components/Missie'
import Pillars from '@/components/Pillars'
import KennisKuur from '@/components/KennisKuur'
import Testimonials from '@/components/Testimonials'
import Ticker from '@/components/Ticker'
import Publicaties from '@/components/Publicaties'
import LeadMagnet from '@/components/LeadMagnet'
import Boek from '@/components/Boek'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Missie />
        <Pillars />
        <KennisKuur />
        <Ticker />
        <Testimonials />
        <Publicaties />
        <LeadMagnet />
        <Boek />
      </main>
      <Footer />
    </>
  )
}
