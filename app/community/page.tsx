import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'

export const metadata = {
  title: 'Community — Optimal Health Performance',
}

export default function CommunityPage() {
  return (
    <>
      <Nav solid />
      <main>
        <ComingSoon
          eyebrow="Community"
          title="De community is in opbouw."
          body="Een besloten omgeving voor KennisKuur-leden om te verbinden, vragen te stellen en ervaringen te delen. Meer informatie volgt binnenkort."
        />
      </main>
      <Footer />
    </>
  )
}
