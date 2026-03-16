import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Missie from '@/components/Missie'
import PillarsV05 from '@/components/v05/PillarsV05'
import KennisKuur from '@/components/KennisKuur'
import KennisKuurPakkettenV05 from '@/components/v05/KennisKuurPakkettenV05'
import Ticker from '@/components/Ticker'
import TestimonialsV05 from '@/components/v05/TestimonialsV05'
import Publicaties from '@/components/Publicaties'
import LeadMagnet from '@/components/LeadMagnet'
import Boek from '@/components/Boek'
import Footer from '@/components/Footer'

export default function V05Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Missie />
        <PillarsV05 />
        <KennisKuur />
        <KennisKuurPakkettenV05 />
        <Ticker />
        <TestimonialsV05 />
        <Publicaties />
        <LeadMagnet />
        <Boek />
      </main>
      <Footer />
    </>
  )
}
