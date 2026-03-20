import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AddBoekButton from '@/components/AddBoekButton'
import styles from './boek.module.css'

export const metadata = {
  title: 'Een lang leven vitaal — Boek | Optimal Health Performance',
  description:
    'Bestel het boek "Een lang leven vitaal" van Philip Sliwinski. Een evidence-based gids over zonlicht, bioritme en voeding voor mensen die serieus willen investeren in hun gezondheid.',
}

const highlights = [
  { number: '320', label: 'Pagina\'s' },
  { number: '100+', label: 'Wetenschappelijke bronnen' },
  { number: '6', label: 'Hoofdstukken' },
  { number: '2024', label: 'Publicatiejaar' },
]

const chapters = [
  { num: '01', title: 'De biologie van licht', body: 'Hoe zonlicht je hormonen, immuunsysteem en celenergie aanstuurt — en waarom de meeste artsen dit missen.' },
  { num: '02', title: 'Je circadiane klok', body: 'Het ritme dat alles bepaalt: slaap, metabolisme, vruchtbaarheid en celreparatie.' },
  { num: '03', title: 'Hormonen & metabolisme', body: 'Van testosteron tot cortisol — hoe je hormonale architectuur werkt en wat je eraan kunt doen.' },
  { num: '04', title: 'Voeding als tool', body: 'Het carnivoor perspectief: waarom whole foods en dierlijke eiwitten de basis zijn, niet het verhaal.' },
  { num: '05', title: 'Leefstijlinterventies', body: 'Koude blootstelling, sauna, bewegingstiming en omgevingsfactoren met bewezen effect.' },
  { num: '06', title: 'Een lang leven vitaal', body: 'Hoe je alles samenvoegt tot een werkende aanpak — voor de komende maanden en jaren.' },
]

export default function BoekPage() {
  return (
    <>
      <Nav solid />
      <main>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCover}>
              <Image
                src="/images/kaft.png"
                alt="Een lang leven vitaal — Philip Sliwinski"
                width={380}
                height={520}
                className={styles.coverImg}
                priority
              />
            </div>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>Boek — Philip Sliwinski</p>
              <h1 className={styles.heroTitle}>Een lang leven vitaal</h1>
              <p className={styles.heroSubtitle}>Philip Sliwinski</p>
              <p className={styles.heroIntro}>
                Een evidence-based gids voor mensen die langer vitaal willen blijven.
                Geen protocol, geen dieet — maar een onderbouwde blik op de systemen
                die bepalen hoe je je voelt, hoe je oud wordt en wat je daaraan kunt doen.
              </p>
              <div className={styles.priceRow}>
                <span className={styles.price}>€ 24,95</span>
                <span className={styles.priceNote}>incl. BTW · gratis verzending</span>
              </div>
              <div className={styles.ctaRow}>
                <AddBoekButton />
                <Link href="/kenniskuur/" className={styles.btnSecondary}>
                  Word lid — KennisKuur
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.stats}>
          {highlights.map((h, i, arr) => (
            <Fragment key={h.label}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{h.number}</span>
                <span className={styles.statLabel}>{h.label}</span>
              </div>
              {i < arr.length - 1 && <div className={styles.statDivider} />}
            </Fragment>
          ))}
        </section>

        {/* Over het boek */}
        <section className={styles.about}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutText}>
              <p className={styles.sectionEyebrow}>Over het boek</p>
              <h2 className={styles.aboutTitle}>
                Niet wat je moet eten.<br />Maar hoe je lichaam werkt.
              </h2>
              <div className={styles.aboutBody}>
                <p>
                  De meeste gezondheidsboeken beginnen met voeding. Dit boek begint met biologie.
                  Philip Sliwinski neemt je mee door de wetenschap van zonlicht, circadiane ritmes
                  en hormonale systemen — en laat zien hoe die samenwerken om je gezond of ziek te maken.
                </p>
                <p>
                  Voeding komt als laatste. Niet omdat het onbelangrijk is, maar omdat het
                  context is — geen religie. Dit boek geeft je de kennis om zelf betere keuzes te maken,
                  elke dag een klein beetje beter dan gisteren.
                </p>
              </div>
            </div>
            <div className={styles.chapterList}>
              <p className={styles.sectionEyebrow}>Inhoudsopgave</p>
              {chapters.map((c) => (
                <div key={c.num} className={styles.chapter}>
                  <span className={styles.chapterNum}>{c.num}</span>
                  <div>
                    <p className={styles.chapterTitle}>{c.title}</p>
                    <p className={styles.chapterBody}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <p className={styles.ctaEyebrow}>Klaar om te beginnen?</p>
          <h2 className={styles.ctaTitle}>
            Bestel het boek en<br />begin vandaag nog.
          </h2>
          <div className={styles.ctaBtns}>
            <Link href="/boek/bestellen/" className={styles.ctaBtnPrimary}>
              Bestel nu — € 24,95
            </Link>
            <Link href="/kenniskuur/" className={styles.ctaBtnSecondary}>
              Of word lid van de KennisKuur →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
