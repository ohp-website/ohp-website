import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './publicaties.module.css'

export const metadata = {
  title: 'Publicaties — Optimal Health Performance',
  description: 'Alle KennisKuur-edities van Philip Sliwinski. Evidence-based verdieping over zonlicht, hormonen, voeding en metabolisme. Exclusief voor leden.',
}

const edities = [
  {
    slug: 'editie-41',
    nummer: 'Editie 41',
    title: 'Zonlicht als medicijn: de complete gids',
    description: 'UV-A verlaagt bloeddruk via stikstofoxide, immuunmodulatie via vitamine D en bèta-endorfinen bij zonblootstelling. De wetenschap achter heliotherapie.',
    datum: 'Maart 2026',
    leestijd: '28 min',
  },
  {
    slug: 'editie-40',
    nummer: 'Editie 40',
    title: 'Testosteron en leefstijl: wat werkt écht',
    description: 'Slaap, zonlicht, voeding en stressregulatie als primaire hormoonregulatoren. Waarom de meeste testosteron-protocollen het fundament missen.',
    datum: 'Februari 2026',
    leestijd: '31 min',
  },
  {
    slug: 'editie-39',
    nummer: 'Editie 39',
    title: 'Insulineresistentie en metabole gezondheid',
    description: 'Van glucosedynamiek tot mitochondriale functie: hoe insulineresistentie ontstaat, waarom het zo breed doorwerkt en wat het evidence-based keerpunt is.',
    datum: 'Januari 2026',
    leestijd: '34 min',
  },
  {
    slug: 'editie-38',
    nummer: 'Editie 38',
    title: 'Melatonine: slaaphormoon én mitochondriale antioxidant',
    description: 'Melatonine als antioxidant in mitochondriën, bescherming tegen heteroplasmie en de relatie met het darmmicrobioom. Ver voorbij slaap.',
    datum: 'December 2025',
    leestijd: '26 min',
  },
  {
    slug: 'editie-37',
    nummer: 'Editie 37',
    title: 'Het darmmicrobioom als circadiaan orgaan',
    description: 'Het microbioom fluctueert in 24-uurscycli onafhankelijk van voedingsinname. Maaltijdtiming, licht en seizoenen sturen microbiële ritmiek aan.',
    datum: 'November 2025',
    leestijd: '29 min',
  },
  {
    slug: 'editie-36',
    nummer: 'Editie 36',
    title: 'Cortisol: het meest misverstane stresshormoon',
    description: 'Cortisol is geen vijand maar een ritmeregulator. Hoe het ochtendhormoon werkt, wanneer het pathologisch wordt en hoe je het herstelt zonder suppletie.',
    datum: 'Oktober 2025',
    leestijd: '32 min',
  },
  {
    slug: 'editie-35',
    nummer: 'Editie 35',
    title: 'Schildklier, energie en koud-intolerantie',
    description: 'T3, T4, omgekeerd T3 en de rol van seleniumstatus, stressrespons en calorierestrictie. Waarom TSH alleen een onvolledig beeld geeft.',
    datum: 'September 2025',
    leestijd: '27 min',
  },
  {
    slug: 'editie-1',
    nummer: 'Editie 1',
    title: 'De basis van evidence-based leefstijl',
    description: 'De eerste KennisKuur-editie: waarom evidence-based niet hetzelfde is als evidence-limited. Het fundament van de OHP-methode en de vijf kernpijlers.',
    datum: 'Januari 2023',
    leestijd: '24 min',
  },
]

export default function PublicatiesPage() {
  return (
    <>
      <Nav solid />
      <main style={{ paddingTop: '162px' }}>
        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Publicaties — KennisKuur Archief</p>
          <h1 className={styles.title}>
            Alle edities —<br />
            voor leden.
          </h1>
          <p className={styles.intro}>
            Elke maand publiceert Philip een nieuwe KennisKuur-editie: een diepgaande,
            wetenschappelijk onderbouwde verkenning van één onderwerp. Het volledige
            archief — 41+ edities — is exclusief beschikbaar voor KennisKuur-leden.
          </p>
          <div className={styles.meta}>
            <span>41+ edities</span>
            <span>·</span>
            <span>Maandelijkse verdieping</span>
            <span>·</span>
            <span>98% retentie</span>
          </div>
        </section>

        {/* Editie grid */}
        <section className={styles.edities}>
          <div className={styles.editiesInner}>
            <div className={styles.editiesHeader}>
              <h2 className={styles.editiesTitle}>Recente edities</h2>
              <span className={styles.editiesBadge}>Exclusief voor leden</span>
            </div>
            <div className={styles.editiesGrid}>
              {edities.map((editie) => (
                <Link
                  key={editie.slug}
                  href={`/publicaties/${editie.slug}/`}
                  className={styles.editieCard}
                >
                  <p className={styles.editieNummer}>{editie.nummer}</p>
                  <h3 className={styles.editieTitle}>{editie.title}</h3>
                  <p className={styles.editieDescription}>{editie.description}</p>
                  <div className={styles.editieMeta}>
                    <span>{editie.datum}</span>
                    <span>·</span>
                    <span>{editie.leestijd} leestijd</span>
                  </div>
                  <span className={styles.editieCta}>Lees editie →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <p className={styles.ctaEyebrow}>KennisKuur abonnement</p>
          <h2 className={styles.ctaTitle}>Toegang tot alle 41+ edities.</h2>
          <p className={styles.ctaText}>
            Word lid en lees het volledige archief direct. Elke maand een nieuwe editie,
            altijd met volledige bronvermelding en concrete protocollen.
          </p>
          <Link href="/kenniskuur/" className={styles.ctaBtn}>
            Bekijk abonnementen
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
