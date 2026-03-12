import Nav from '@/components/Nav'
import HeroV02 from '@/components/v02/HeroV02'
import KennisKuurV02 from '@/components/v02/KennisKuurV02'
import MissieV02 from '@/components/v02/MissieV02'
import PillarsV02 from '@/components/v02/PillarsV02'
import TestimonialsV02 from '@/components/v02/TestimonialsV02'
import LeadMagnetV02 from '@/components/v02/LeadMagnetV02'
import PublicatiesV02 from '@/components/v02/PublicatiesV02'
import Footer from '@/components/Footer'

export default function VoorstelV02() {
  return (
    <>
      <Nav />
      <main>
        <HeroV02 />
        <KennisKuurV02 />
        <MissieV02 />
        <PillarsV02 />
        <TestimonialsV02 />
        <LeadMagnetV02 />
        <PublicatiesV02 />
      </main>
      <Footer />
    </>
  )
}
