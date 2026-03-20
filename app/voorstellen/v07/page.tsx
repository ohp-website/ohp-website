import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Missie from '@/components/Missie'
import PillarsV06 from '@/components/v06/PillarsV06'
import KennisKuurV07 from '@/components/v07/KennisKuurV07'
import KennisKuurPakkettenV05 from '@/components/v05/KennisKuurPakkettenV05'
import Ticker from '@/components/Ticker'
import TestimonialsQuoteV07 from '@/components/v07/TestimonialsQuoteV07'
import TestimonialsV06 from '@/components/v06/TestimonialsV06'
import Publicaties from '@/components/Publicaties'
import LeadMagnetV02 from '@/components/v02/LeadMagnetV02'
import Boek from '@/components/Boek'
import Footer from '@/components/Footer'

export default function V07Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Missie />
        <PillarsV06 />
        <KennisKuurV07 />
        <KennisKuurPakkettenV05 />
        <Ticker />
        <TestimonialsQuoteV07 />
        <TestimonialsV06 />
        <Publicaties />
        <LeadMagnetV02 />
        <Boek />
      </main>
      <Footer />
    </>
  )
}
