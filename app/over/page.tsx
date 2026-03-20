import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './over.module.css'

const beliefs = [
  {
    number: '01',
    title: 'Zonlicht gaat voor supplementen.',
    body: 'Je lichaam is ontworpen om informatie uit licht te halen. Vitamine D is maar een fractie van wat zonlicht doet — de rest kennen de meeste artsen niet.',
    img: '/images/hero-v02-2.jpg',
    href: '/kennisbank/zonlicht-lichttherapie/',
  },
  {
    number: '02',
    title: 'Je bioritme is de dirigent.',
    body: 'Wanneer je eet, slaapt en beweegt is minstens zo belangrijk als wát je doet. Timing is biologie.',
    img: '/images/hero-v02.jpg',
    href: null,
  },
  {
    number: '03',
    title: 'Voeding is context, geen religie.',
    body: 'Ik eet carnivoor — niet als identiteit, maar als tool. Whole foods, dierlijke eiwitten, zo min mogelijk verstoring. Simpel.',
    img: '/images/hero-v04.jpg',
    href: null,
  },
  {
    number: '04',
    title: 'Wetenschap boven mening.',
    body: 'Elk standpunt dat ik inneem is gebaseerd op peer-reviewed onderzoek. Ik verander van mening als de data dat vraagt.',
    img: '/images/hero-v02-3.jpg',
    href: null,
  },
  {
    number: '05',
    title: 'Geen quick fixes.',
    body: 'Echte gezondheid bouw je over maanden en jaren. Ik ben hier voor mensen die dat begrijpen.',
    img: '/images/hero-v02-4.jpg',
    href: null,
  },
  {
    number: '06',
    title: 'Kennis is genoeg.',
    body: 'Ik vertel je niet wat je moet doen. Ik geef je de kennis. Jij beslist.',
    img: '/images/food.jpg',
    href: null,
  },
]

export const metadata = {
  title: 'Over Philip Sliwinski — Optimal Health Performance',
  description:
    'Philip Sliwinski is oprichter van Optimal Health Performance. Evidence-based leefstijl op basis van zonlicht, bioritme en voeding — voor mensen die serieus willen investeren in hun gezondheid.',
}

export default function OverPage() {
  return (
    <>
      <Nav solid />
      <main>

        {/* Hero — foto + openingszin */}
        <section className={styles.hero}>
          <div className={styles.heroPhoto}>
            <Image
              src="/images/philip.png"
              alt="Philip Sliwinski — Optimal Health Performance"
              fill
              className={styles.heroImg}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Over Philip</p>
            <h1 className={styles.heroTitle}>
              Ik neem je<br />bij de hand.
            </h1>
            <p className={styles.heroIntro}>
              Niet om je te vertellen wat je moet eten of laten. Maar om je de wetenschappelijke
              bouwstenen te geven waarmee je zelf betere keuzes maakt — elke dag, een klein beetje beter dan gisteren.
            </p>
          </div>
        </section>

        {/* Persoonlijk verhaal */}
        <section className={styles.story}>
          <div className={styles.storyInner}>
            <p className={styles.sectionEyebrow}>Mijn verhaal</p>
            <div className={styles.storyGrid}>
              <div className={styles.storyLeft}>
                <h2 className={styles.storyTitle}>
                  Ik was gefrustreerd door wat ik niet wist.
                </h2>
                <blockquote className={styles.storyQuote}>
                  <span className={styles.quoteMark}>"</span>
                  Voeding is het laatste stukje van de puzzel, niet het eerste.
                </blockquote>
              </div>
              <div className={styles.storyText}>
                <p>
                  Jarenlang deed ik alles "goed" — maar voelde me niet goed. Ik at gezond,
                  bewoog, sliep genoeg. Toch klopte er iets niet. Toen begon ik te graven.
                  Niet in populaire dieetboeken of lifestyle-magazines, maar in de wetenschap zelf.
                </p>
                <p>
                  Wat ik vond veranderde alles. Zonlicht is geen luxe — het is een signaal
                  dat je biologie aanstuurt. Je circadiane ritme bepaalt wanneer je hormonen
                  afgaan, wanneer je cellen herstellen, wanneer je vetverbranding op gang komt.
                  Voeding is het laatste stukje van de puzzel, niet het eerste.
                </p>
                <p>
                  Ik richtte Optimal Health Performance op om die kennis te delen.
                  Niet als coach, niet als diëtist — maar als iemand die de literatuur leest,
                  de connecties legt en dat vertaalt naar iets wat je vandaag nog kunt toepassen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.stats}>
          {[
            { number: '400+', label: 'KennisKuur leden' },
            { number: '41+', label: 'Edities gepubliceerd' },
            { number: '98%', label: 'Retentie' },
            { number: '1', label: 'Boek gepubliceerd' },
          ].map((s, i, arr) => (
            <Fragment key={s.label}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{s.number}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
              {i < arr.length - 1 && <div className={styles.statDivider} />}
            </Fragment>
          ))}
        </section>

        {/* Wat ik geloof */}
        <section className={styles.beliefs}>
          <div className={styles.beliefsInner}>
            <div className={styles.beliefsHeader}>
              <p className={styles.sectionEyebrow}>Waar ik in geloof</p>
              <h2 className={styles.beliefsTitle}>
                Gezondheid is geen toeval.<br />Het is biologie.
              </h2>
              <p className={styles.beliefsSubtitle}>
                Zes overtuigingen die ten grondslag liggen aan alles wat ik doe en schrijf.
              </p>
            </div>
            <div className={styles.beliefsGrid}>
              {beliefs.map((b) => {
                const cardContent = (
                  <div className={styles.flipInner}>
                    <div className={styles.flipFront}>
                      <span className={styles.flipNumber}>{b.number}</span>
                      <div className={styles.flipDivider} />
                      <h3 className={styles.flipTitle}>{b.title}</h3>
                      <p className={styles.flipBody}>{b.body}</p>
                    </div>
                    <div
                      className={styles.flipBack}
                      style={{ backgroundImage: `url(${b.img})` }}
                    >
                      <div className={styles.flipBackOverlay} />
                      <div className={styles.flipBackContent}>
                        <h3 className={styles.flipBackTitle}>{b.title}</h3>
                      </div>
                    </div>
                  </div>
                )

                return b.href ? (
                  <Link key={b.number} href={b.href} className={styles.flipWrap}>
                    {cardContent}
                  </Link>
                ) : (
                  <div key={b.number} className={styles.flipWrap}>
                    {cardContent}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Boek */}
        <section className={styles.boek}>
          <div className={styles.boekInner}>
            <div className={styles.boekCover}>
              <Image
                src="/images/kaft.png"
                alt="Een lang leven vitaal — Philip Sliwinski"
                width={340}
                height={480}
                className={styles.boekImg}
              />
            </div>
            <div className={styles.boekText}>
              <p className={styles.sectionEyebrow}>Publicatie</p>
              <h2 className={styles.boekTitle}>Een lang leven vitaal</h2>
              <p className={styles.boekBody}>
                Mijn eerste boek is een evidence-based gids voor mensen die langer vitaal
                willen blijven. Geen dieetboek, geen protocol — maar een onderbouwde
                blik op de systemen die bepalen hoe je je voelt, hoe je oud wordt
                en wat je daaraan kunt doen.
              </p>
              <div className={styles.boekMeta}>
                <span className={styles.boekMetaItem}>Philip Sliwinski</span>
                <span className={styles.boekMetaDot}>·</span>
                <span className={styles.boekMetaItem}>2024</span>
                <span className={styles.boekMetaDot}>·</span>
                <span className={styles.boekMetaItem}>Nederlandstalig</span>
              </div>
              <Link href="/boek/" className={styles.boekBtn}>Meer over het boek →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <p className={styles.ctaEyebrow}>KennisKuur</p>
          <h2 className={styles.ctaTitle}>
            Klaar om elke maand<br />een stap verder te gaan?
          </h2>
          <p className={styles.ctaBody}>
            De KennisKuur is mijn maandelijkse wetenschappelijke publicatie.
            41+ edities. 400+ leden. 98% retentie. Niet omdat ik goed vermarkt —
            maar omdat de kennis werkt.
          </p>
          <Link href="/kenniskuur/" className={styles.ctaBtn}>Bekijk de KennisKuur</Link>
        </section>

      </main>
      <Footer />
    </>
  )
}
