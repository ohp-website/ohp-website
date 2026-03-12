import Nav from '@/components/Nav'
import HeroV04 from '@/components/v04/HeroV04'
import KennisKuurV04 from '@/components/v04/KennisKuurV04'
import MissieV03 from '@/components/v03/MissieV03'
import PillarsV04 from '@/components/v04/PillarsV04'
import TestimonialsV03 from '@/components/v03/TestimonialsV03'
import LeadMagnetV02 from '@/components/v02/LeadMagnetV02'
import PublicatiesV02 from '@/components/v02/PublicatiesV02'
import Footer from '@/components/Footer'

export default function VoorstelV04() {
  return (
    <>
      <Nav light />
      <main>
        <HeroV04 />
        <KennisKuurV04 />
        <MissieV03 />
        <PillarsV04 />
        <TestimonialsV03 />
        <LeadMagnetV02 />
        <PublicatiesV02 />
      </main>
      <Footer />
    </>
  )
}
