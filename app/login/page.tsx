import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ComingSoon from '@/components/ComingSoon'

export const metadata = {
  title: 'Inloggen — Optimal Health Performance',
}

export default function LoginPage() {
  return (
    <>
      <Nav solid />
      <main>
        <ComingSoon
          eyebrow="Ledenportaal"
          title="Inloggen komt eraan."
          body="Het ledenportaal voor KennisKuur-abonnees is momenteel in ontwikkeling. Abonnees ontvangen bericht zodra toegang beschikbaar is."
        />
      </main>
      <Footer />
    </>
  )
}
