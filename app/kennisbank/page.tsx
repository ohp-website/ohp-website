import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './kennisbank.module.css'

export const metadata = {
  title: 'Kennisbank — Optimal Health Performance',
  description:
    'Wetenschappelijk onderbouwde artikelen over zonlicht, circadiaans ritme, hormonen, voeding en leefstijl. Door Philip Sliwinski van Optimal Health Performance.',
}

const pillars = [
  {
    slug: 'zonlicht-lichttherapie',
    title: 'Zonlicht & Lichttherapie',
    description: 'Roodlichttherapie, vitamine D, blauw licht en de kracht van zonlicht als medicijn.',
    clusters: 7,
    available: true,
  },
  {
    slug: 'carnivoor-dieet',
    title: 'Voeding & Dieet',
    description: 'Carnivoor dieet, ketogeen eten, grasgevoerd vlees en de waarheid over cholesterol.',
    clusters: 11,
    available: false,
  },
  {
    slug: 'circadiaans-ritme',
    title: 'Circadiaans Ritme & Bioritme',
    description: 'Je biologische klok, slaap, darmgezondheid en hoe bioritme je gezondheid stuurt.',
    clusters: 6,
    available: false,
  },
  {
    slug: 'hormonen-bloedwaarden',
    title: 'Hormonen & Bloedwaarden',
    description: 'Testosteron, cortisol, PCOS, vruchtbaarheid en het begrijpen van je bloedwaarden.',
    clusters: 7,
    available: false,
  },
  {
    slug: 'mitochondrien',
    title: 'Mitochondriën & Celgezondheid',
    description: 'De energiefabriek van je cellen, oxidatieve stress en biohacking.',
    clusters: 4,
    available: false,
  },
  {
    slug: 'leefstijlinterventies',
    title: 'Leefstijlinterventies',
    description: 'IJsbaden, infrarood sauna, stress verminderen en andere bewezen interventies.',
    clusters: 5,
    available: false,
  },
]

export default function KennisbankPage() {
  return (
    <>
      <Nav />
      <main>
        <section className={styles.header}>
          <p className={styles.eyebrow}>Kennisbank</p>
          <h1 className={styles.title}>Wetenschap die werkt.</h1>
          <p className={styles.subtitle}>
            Diepgaande artikelen over de zes pijlers van optimale gezondheid —
            gebaseerd op peer-reviewed onderzoek, geschreven door Philip Sliwinski.
          </p>
        </section>

        <section className={styles.grid}>
          {pillars.map((pillar) => (
            <div key={pillar.slug} className={`${styles.card} ${!pillar.available ? styles.cardComingSoon : ''}`}>
              {pillar.available ? (
                <Link href={`/kennisbank/${pillar.slug}/`} className={styles.cardLink}>
                  <p className={styles.cardClusters}>{pillar.clusters} artikelen</p>
                  <h2 className={styles.cardTitle}>{pillar.title}</h2>
                  <p className={styles.cardDescription}>{pillar.description}</p>
                  <span className={styles.cardCta}>Lees verder →</span>
                </Link>
              ) : (
                <>
                  <p className={styles.cardClusters}>{pillar.clusters} artikelen</p>
                  <h2 className={styles.cardTitle}>{pillar.title}</h2>
                  <p className={styles.cardDescription}>{pillar.description}</p>
                  <span className={styles.comingSoon}>Binnenkort</span>
                </>
              )}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
