import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './artikel.module.css'

const artikelen: Record<string, {
  title: string
  editie: string
  intro: string
  zoekwoord: string
  teaser: string[]
}> = {
  'roodlichttherapie': {
    title: 'Roodlichttherapie: de complete gids voor beginners',
    editie: 'KennisKuur Editie 20',
    zoekwoord: 'roodlichttherapie voordelen',
    intro: 'Roodlichttherapie is een van de best onderzochte lichttherapieën die er bestaat — en toch weten maar weinig mensen wat het precies is, hoe het werkt en wat je er realistisch van mag verwachten. In dit artikel behandelen we de wetenschappelijke basis, de praktische toepassing en de meestgemaakte fouten.',
    teaser: [
      'Rood- en infraroodlicht liggen in het spectrum tussen 600 en 1100 nanometer. In die range zijn ze in staat door de huid te penetreren en mitochondriën direct te stimuleren. Het mechanisme: cytochroom-c-oxidase — een enzym in de mitochondriale ademhalingsketen — absorbeert deze golflengtes en produceert meer ATP. Dat is celenergie. Meer energie betekent betere herstelprestaties van het weefsel.',
      'De wetenschappelijke literatuur is opvallend consistent. Studies tonen positieve effecten op wondgenezing, spierherstel, gewrichtspijn, collageenanmaak en zelfs neurologie. Wat deze therapie onderscheidt van veel andere interventies is dat de werkingsmechanismen goed beschreven zijn en reproduceerbaar in meerdere onafhankelijke onderzoeken.',
      'Tegelijkertijd worden er in de markt overdreven claims gemaakt. Niet elk apparaat is gelijkwaardig — golflengte, vermogensdichtheid en afstand tot de huid bepalen of er überhaupt een biologisch effect optreedt. Goedkope panelen met alleen zichtbaar rood licht zonder near-infrared component missen een groot deel van de therapeutische werking.',
    ],
  },
  'vitamine-d-zon': {
    title: 'Vitamine D: hoeveel zon heb je echt nodig?',
    editie: 'KennisKuur Editie 10',
    zoekwoord: 'vitamine D aanmaken zon',
    intro: 'Vitamine D is technisch gezien geen vitamine maar een hormoon — en bijna iedereen in Nederland heeft een tekort. Niet door te weinig supplementen, maar door te weinig zon op het juiste moment. In dit artikel leer je hoe vitamine D-aanmaak echt werkt en wat dat betekent voor jouw dagelijkse routine.',
    teaser: [
      'Vitamine D3 wordt in de huid aangemaakt wanneer UV-B-straling — golflengtes tussen 280 en 320 nanometer — 7-dehydrocholesterol in de huid raakt. Dit cholesterolderivaat wordt omgezet naar pre-vitamine-D3, dat vervolgens via lever en nieren wordt geactiveerd tot calcitriol: de biologisch actieve vorm. Dit is een licht-afhankelijk hormonaal proces, geen voedingskwestie.',
      'In Nederland is UV-B slechts aanwezig van ruwweg maart tot oktober, en dan alleen rond het middaguur op zonnige dagen. Buiten dit venster produceert de huid nauwelijks vitamine D — ongeacht hoeveel je buiten bent. Dit heeft directe implicaties voor suppletiebeleid en seizoensstrategieën.',
      'Belangrijk detail: vitamine D-aanmaak via de huid heeft een ingebouwd regulerend mechanisme. Na overproductie breekt UV-licht het overtollige pre-vitamine-D af. Dit mechanisme bestaat niet bij orale suppletie. Dat is een van de redenen waarom zonblootstelling en suppletie fysiologisch niet identiek zijn — ook al worden ze in de klinische praktijk vaak als equivalent behandeld.',
    ],
  },
  'blauw-licht-gevaar': {
    title: 'Blauw licht: de sloopkogel voor je gezondheid',
    editie: 'KennisKuur Editie 25',
    zoekwoord: 'blauw licht schadelijk',
    intro: 'We badden nog nooit zo veel in kunstlicht als nu. Schermen, TL-buizen en led-verlichting stralen constant blauw licht uit — en dat heeft structurele gevolgen voor je melatonine, slaap, metabolisme en celfunctie. Dit artikel legt uit wat er precies gebeurt en hoe je jezelf beschermt.',
    teaser: [
      'Blauw licht — golflengtes rond 400 tot 490 nanometer — heeft in de natuur een specifieke functie: het synchroniseert de biologische klok in de ochtend. Melanopsine-cellen in het oog registreren blauw licht en signaleren aan de suprachiasmatische kern dat het dag is. Dit is een essentieel biologisch mechanisme. Het probleem is niet blauw licht op zich, maar de timing en context ervan.',
      'Wanneer blauw licht in de avond of nacht aanwezig is — via smartphones, laptops of LED-verlichting — ontvangt het circadiane systeem een vals daglichtsignaal. Melatonineproductie wordt onderdrukt, cortisolpatronen verschuiven en cellen gaan later over op herstelprocessen. Dit heeft cumulatieve effecten op slaapkwaliteit, insulinegevoeligheid en immuunfunctie.',
      'In de huid zijn ook lichtgevoelige eiwitten aanwezig, waaronder opsines zoals OPN3. Deze reageren op blauw licht en kunnen calciumsignalering in huidcellen beïnvloeden. Overmatige blootstelling aan geïsoleerd blauw licht — zonder het balancerende effect van rood en infrarood — lijkt de productie van vrije radicalen in huidcellen te verhogen.',
    ],
  },
  'zonnebrandcreme': {
    title: 'Zonnebrandcrème: bescherming of schade?',
    editie: 'KennisKuur Editie 17',
    zoekwoord: 'zonnebrandcrème schadelijk',
    intro: 'Zonnebrandcrème wordt gepresenteerd als onmisbare bescherming tegen huidkanker. Maar wat zegt de wetenschap werkelijk? En wat zijn de gevolgen van het structureel blokkeren van UV-straling voor je vitamine D-aanmaak, immuunsysteem en hormoonhuishouding?',
    teaser: [
      'De consensus dat zonnebrandcrème huidkanker voorkomt is minder eenduidig dan campagneboodschappen doen voorkomen. Studies die aantonen dat regelmatig gebruik van zonnebrandcrème melanoom reduceert zijn schaars en methodologisch complex. Wat wél duidelijk is: zonnebrandcrème blokkeert effectief UV-B — en daarmee ook vitamine D-aanmaak en de adaptieve pigmentatieopbouw via melanocyten.',
      'Melanocyten — de pigmentcellen in de huid — reageren op UV-straling door melanine te produceren. Dit is een biologische beschermingsreactie die over weken opbouwt. Wanneer UV structureel geblokkeerd wordt, ontwikkelt de huid geen adaptieve pigmentatie. Het paradoxale gevolg: een huid die niet heeft leren omgaan met zon wordt er kwetsbaarder voor bij incidentele intensieve blootstelling.',
      'Daarnaast bevatten veel chemische zonnebrandfilters stoffen — zoals oxybenzon en octinoxaat — die in onderzoek hormonale activiteit vertonen en in de bloedbaan worden opgenomen. De FDA classificeerde in 2019 slechts twee ingrediënten (zinoxide en titaandioxide) als veilig en effectief. Over de overige filters bleef de veiligheidsclassificatie onduidelijk.',
    ],
  },
  'huid-lichtgevoelig': {
    title: 'De huid als lichtgevoelig orgaan',
    editie: 'KennisKuur Editie 16 & 24',
    zoekwoord: 'huid en zonlicht',
    intro: 'Je huid is het grootste orgaan van je lichaam — en het enige dat direct aan licht wordt blootgesteld. Wat de meeste mensen niet weten: de huid heeft zijn eigen circadiane klok en reageert op specifieke lichtfrequenties op manieren die ver voorbij "bruin worden" gaan.',
    teaser: [
      "De huid is geen passief omhulsel. Het bevat een volledig functioneel circadiaan systeem: keratinocyten, melanocyten, fibroblasten en Langerhans-cellen hebben elk klokgenen die hun activiteit over de dag reguleren. Overdag domineren beschermende en antioxidatieve processen; 's nachts schakelen cellen over op herstel en celvernieuwing. Dit is geen metafoor — het is moleculaire tijdsregulatie.",
      'Chromoforen zijn moleculen in de huid die specifiek lichtfrequenties absorberen. Melanine absorbeert breed spectrum maar heeft een piek in UV. Water absorbeert infrarood. Cytochroom-c-oxidase in mitochondriën absorbeert rood en near-infrared. Hemoglobine absorbeert groenlicht. Elk van deze moleculen vertaalt licht naar een biologisch signaal in de cel.',
      'Dit betekent dat de huid functioneert als lichtinterface: een orgaan dat informatie uit de lichtomgeving vertaalt naar fysiologische regulatie. Wanneer de lichtomgeving fundamenteel verandert — meer blauw kunstlicht, minder breed-spectrum zonlicht — verandert ook de informatiestroom die de huid ontvangt. Met gevolgen voor alles van ontstekingsregulatie tot hormoonproductie.',
    ],
  },
  'zonlicht-medicijn': {
    title: 'Zonlicht als medicijn: de wetenschap',
    editie: 'KennisKuur Editie 22 & 41',
    zoekwoord: 'zonlicht als medicijn',
    intro: 'Zonlicht verlaagt bloeddruk, moduleert het immuunsysteem, verbetert de stemming en heeft aantoonbare antivirale effecten. Toch behandelt de moderne geneeskunde zonlicht primair als risicofactor. Dit artikel presenteert de wetenschap die je arts waarschijnlijk niet kent.',
    teaser: [
      'UV-A-straling stimuleert in de huid de productie van stikstofoxide (NO). Stikstofoxide is een vaatverwijder: het ontspant gladde spiercellen in bloedvatwanden en verlaagt zo de bloeddruk. Studies van de Universiteit van Edinburgh toonden aan dat tien minuten zonblootstelling de bloeddruk meetbaar verlaagde — onafhankelijk van vitamine D. Dit effect is direct en fysiologisch reproduceerbaar.',
      'Zonlicht moduleert ook het immuunsysteem via meerdere routes. Vitamine D reguleert de expressie van meer dan 200 genen, waaronder genen betrokken bij immuunrespons. UV-straling heeft daarnaast directe immunomodulerende effecten op huidcellen en T-cel-regulatie. Historisch werd heliotherapie — therapeutische zonblootstelling — gebruikt voor tuberculose-behandeling, lang voordat antibiotica beschikbaar waren.',
      "Het effect van zonlicht op stemming en neurologisch functioneren is wellicht het bekendste: serotonineproductie stijgt bij zonblootstelling via licht-geïnduceerde mechanismen in de hersenen. Maar minder bekend is dat zonlicht ook bèta-endorfinen vrijmaakt in de huid — vergelijkbaar met de runner's high na inspanning. Dit geeft een fysiologische verklaring voor het welzijnsgevoel dat mensen ervaren na buiten zijn.",
    ],
  },
  'chromoforen': {
    title: 'Chromoforen: hoe licht je cellen aanstuurt',
    editie: 'KennisKuur Editie 13 & 29',
    zoekwoord: 'chromoforen licht cellen',
    intro: 'Diep in je mitochondriën bevinden zich moleculen die direct reageren op specifieke lichtfrequenties. Deze chromoforen zijn de schakel tussen zonlicht en celenergie — een verbinding die fundamenteel is voor je gezondheid, maar zelden wordt besproken.',
    teaser: [
      'Een chromofoor is een molecuul of molecuulgroep dat licht absorbeert. In biologische systemen zijn chromoforen de basis van licht-biologische interacties. De bekendste biologische chromoforen zijn melanine in de huid, hemoglobine in bloed, myoglobine in spieren, en cytochroom-c-oxidase in mitochondriën. Elk absorbeert een specifieke range van het lichtspectrum en zet die energie om in een biologisch signaal.',
      'Cytochroom-c-oxidase is het meest bestudeerde doelwit in fotobiomodulatie-onderzoek. Dit enzym — de vierde stap in de mitochondriale elektronentransportketen — absorbeert licht in de rood- en near-infrared-range (600–1100 nm). Wanneer het dit licht absorbeert, neemt de activiteit toe: meer ATP-productie, minder reactieve zuurstofcomponenten en betere mitochondriale membraanpotentiaal.',
      'Water is een onderschatte chromofoor in de context van infraroodlicht. Near-infrared licht wordt deels geabsorbeerd door water in cellen, wat leidt tot lokale verwarmingseffecten en veranderingen in waterstructuur rondom eiwitten. Dit beïnvloedt enzymactiviteit en celstofwisseling op manieren die nog actief onderzocht worden. De implicatie: zonlicht doet meer dan vitamines aanmaken — het activeert direct de energiemachines van elke cel.',
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(artikelen).map((slug) => ({ artikel: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ artikel: string }> }) {
  const { artikel } = await params
  const data = artikelen[artikel]
  if (!data) return {}
  return {
    title: `${data.title} | OHP Kennisbank`,
    description: data.intro.slice(0, 155),
  }
}

export default async function ArtikelPage({ params }: { params: Promise<{ artikel: string }> }) {
  const { artikel } = await params
  const data = artikelen[artikel]
  if (!data) notFound()

  return (
    <>
      <Nav solid />
      {/* paddingTop = hoogte scrolled nav: 130px logo + 2×16px padding */}
      <main style={{ paddingTop: '162px' }}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/kennisbank/">Kennisbank</Link>
          <span>→</span>
          <Link href="/kennisbank/zonlicht-lichttherapie/">Zonlicht & Lichttherapie</Link>
          <span>→</span>
          <span>{data.title}</span>
        </div>

        {/* Artikel header */}
        <header className={styles.header}>
          <p className={styles.editie}>{data.editie}</p>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.intro}>{data.intro}</p>
          <div className={styles.meta}>
            <span>Door Philip Sliwinski</span>
            <span>·</span>
            <span>Optimal Health Performance</span>
          </div>
        </header>

        {/* Artikel body: volledig leesbaar (open voor SEO) */}
        <article className={styles.article}>
          <div className={styles.teaser}>
            {data.teaser.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Navigatie terug */}
        <div className={styles.footer}>
          <Link href="/kennisbank/zonlicht-lichttherapie/" className={styles.backLink}>
            ← Terug naar Zonlicht &amp; Lichttherapie
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
