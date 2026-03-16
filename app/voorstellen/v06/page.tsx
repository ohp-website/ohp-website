import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Missie from '@/components/Missie'
import PillarsV06 from '@/components/v06/PillarsV06'
import KennisKuur from '@/components/KennisKuur'
import KennisKuurPakkettenV05 from '@/components/v05/KennisKuurPakkettenV05'
import Ticker from '@/components/Ticker'
import TestimonialsV06 from '@/components/v06/TestimonialsV06'
import Publicaties from '@/components/Publicaties'
import LeadMagnet from '@/components/LeadMagnet'
import Boek from '@/components/Boek'
import Footer from '@/components/Footer'

export default function V06Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Missie />
        <PillarsV06 />
        <KennisKuur />
        <KennisKuurPakkettenV05 />
        <Ticker />
        <TestimonialsV06 />
        <Publicaties />
        <LeadMagnet />
        <Boek />
      </main>
      <Footer />
    </>
  )
}
