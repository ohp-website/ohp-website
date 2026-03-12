import Nav from '@/components/Nav'
import HeroV02 from '@/components/v02/HeroV02'
import KennisKuurV03 from '@/components/v03/KennisKuurV03'
import MissieV03 from '@/components/v03/MissieV03'
import PillarsV03 from '@/components/v03/PillarsV03'
import TestimonialsV03 from '@/components/v03/TestimonialsV03'
import LeadMagnetV02 from '@/components/v02/LeadMagnetV02'
import PublicatiesV02 from '@/components/v02/PublicatiesV02'
import Footer from '@/components/Footer'

export default function VoorstelV03() {
  return (
    <>
      <Nav />
      <main>
        <HeroV02 />
        <KennisKuurV03 />
        <MissieV03 />
        <PillarsV03 />
        <TestimonialsV03 />
        <LeadMagnetV02 />
        <PublicatiesV02 />
      </main>
      <Footer />
    </>
  )
}
