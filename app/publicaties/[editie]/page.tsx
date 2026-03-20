import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import KennisKuurPaywall from '@/components/KennisKuurPaywall'
import styles from './editie.module.css'

const edities: Record<string, {
  nummer: string
  title: string
  intro: string
  datum: string
  leestijd: string
  teaser: (string | { type: 'h2' | 'h3'; text: string })[]
}> = {
  'editie-41': {
    nummer: 'KennisKuur Editie 41',
    title: 'Zonlicht als medicijn: de complete gids',
    intro: 'UV-A verlaagt bloeddruk via stikstofoxide. UV-B maakt vitamine D aan. Infraroodlicht stimuleert mitochondriën. Bèta-endorfinen worden vrijgemaakt bij zonblootstelling. Zonlicht is geen risicofactor — het is een primaire regulator van menselijke fysiologie. In deze editie de volledige wetenschappelijke basis.',
    datum: 'Maart 2026',
    leestijd: '28 min',
    teaser: [
      { type: 'h2', text: 'Zonlicht en bloeddruk: het stikstofoxide-mechanisme' },
      'UV-A-straling — golflengtes tussen 315 en 400 nanometer — stimuleert in de huid de afgifte van stikstofoxide (NO). Stikstofoxide is een krachtige vaatverwijder: het ontspant de gladde spiercellen in bloedvatwanden, waardoor de perifere weerstand daalt en de bloeddruk meetbaar afneemt. Dit effect werd aangetoond in studies van de Universiteit van Edinburgh: tien minuten UV-A-blootstelling verlaagde de systolische bloeddruk significant, volledig onafhankelijk van vitamine D-productie. Het mechanisme is direct en fysiologisch reproduceerbaar.',
      'Wat dit bijzonder maakt: de huid slaat stikstofoxideverbindingen op in de vorm van nitrieten en nitrosoverbindingen. UV-A-straling maakt deze verbindingen vrij, waarna ze als NO in de bloedbaan terechtkomen. Dit verklaart waarom mensen die meer buiten zijn structureel lagere bloeddrukwaarden laten zien in epidemiologisch onderzoek — los van beweeggedrag of vitamine D-status. Het is een licht-specifiek effect dat niet gesimuleerd kan worden via suppletie of dieet.',
      'In de context van cardiovasculaire gezondheid is dit een fundamentele bevinding. Bloeddruk wordt in de moderne geneeskunde bijna uitsluitend behandeld via medicatie, dieet en zoutreductie. Het licht-NO-mechanisme ontbreekt vrijwel volledig in klinische richtlijnen, ondanks de consistente wetenschappelijke onderbouwing. Blootstelling aan daglicht in de buitenlucht — specifiek zonlicht dat UV-A bevat — heeft een directe, meetbare invloed op cardiovasculair risico die door de meeste artsen niet wordt meegenomen in het behandeladvies.',
      { type: 'h2', text: 'Immuunmodulatie: verder dan vitamine D' },
      'Het verband tussen zonlicht en immuunfunctie wordt in de populaire pers bijna altijd gereduceerd tot vitamine D. Vitamine D reguleert inderdaad de expressie van meer dan 200 genen, waaronder genen betrokken bij immuunrespons, ontstekingsregulatie en antimicrobiële peptideproductie. Maar dit is slechts één van de mechanismen waarmee zonlicht het immuunsysteem beïnvloedt.',
      'UV-straling heeft directe immunomodulerende effecten op huidcellen en T-cellen die onafhankelijk zijn van vitamine D-synthese. Langerhans-cellen in de huid — gespecialiseerde immuuncellen — reageren op UV door de migratie naar lymfeklieren aan te passen. Dit heeft implicaties voor de balans tussen Th1- en Th2-immuunresponsen: een balans die relevant is voor autoimmune aandoeningen, allergieën en infectieziekten. Historisch werd heliotherapie — therapeutische blootstelling aan zonlicht — ingezet bij tuberculose, lupus vulgaris en psoriasis, lang voordat de mechanismen begrepen werden.',
    ],
  },
  'editie-40': {
    nummer: 'KennisKuur Editie 40',
    title: 'Testosteron en leefstijl: wat werkt écht',
    intro: 'Slaap, zonlicht, voeding en stressregulatie zijn de primaire regulatoren van testosteronproductie — geen supplementen, geen protocollen, geen biohacks. In deze editie de volledige fysiologie van testosteron en de leefstijlfactoren die er daadwerkelijk toe doen.',
    datum: 'Februari 2026',
    leestijd: '31 min',
    teaser: [
      { type: 'h2', text: 'De fysiologie van testosteronproductie' },
      'Testosteron wordt aangemaakt in de Leydig-cellen van de testikels, onder aansturing van het hypothalamus-hypofyse-gonadale systeem. De hypothalamus produceert GnRH (gonadotropin-releasing hormone), dat de hypofyse stimuleert tot afgifte van LH (luteïniserend hormoon). LH bereikt via de bloedbaan de testikels, waar het de Leydig-cellen activeert om testosteron te produceren uit cholesterol. Dit cascade-mechanisme is essentieel om te begrijpen: testosteron is een downstream hormoon. Problemen in de productie ontstaan bijna altijd upstream — in de regulatie door hypothalamus of hypofyse — en niet in de testikels zelf.',
      'Testosteron circuleert grotendeels gebonden aan eiwitten: SHBG (sex hormone-binding globulin) en albumine. Slechts 1 tot 3 procent is vrij beschikbaar voor cellulaire werking. SHBG-niveaus worden sterk beïnvloed door insulineresistentie, schildklierfunctie en leverbelasting: hoge insuline verlaagt SHBG, waardoor de verhouding vrij/totaal testosteron verandert. Dit verklaart waarom totaal testosteron in bloedonderzoek een beperkt beeld geeft. De functioneel relevante maat is vrij testosteron in de context van SHBG en insulinestatus.',
      { type: 'h3', text: 'Slaap als primaire testosteronregulator' },
      'Van alle leefstijlfactoren heeft slaapkwaliteit de grootste en meest directe invloed op testosteronproductie. Het merendeel van de dagelijkse testosteronproductie vindt plaats tijdens de slaap — specifiek tijdens de REM- en diepe-slaapfasen. Studies tonen aan dat één week met vijf uur slaap per nacht bij jonge mannen testosteronniveaus verlaagt met 10 tot 15 procent. Dit is vergelijkbaar met het verouderingseffect van 10 tot 15 jaar. Geen supplement bereikt dit effect in omgekeerde richting.',
      'De mechanieken zijn tweeledig: ten eerste verhoogt slaapgebrek cortisolproductie, en cortisol en testosteron zijn in directe competitie voor gemeenschappelijke voorlopers in de steroïdensyntheseroute. Ten tweede verstoort slaapgebrek de pulsatieve afgifte van GnRH en LH — het dag-nacht-ritme van hypothalamische output is sterk circadiaan gestuurd. Structureel slaaptekort ondermijnt daarmee de upstream signaalroute die testosteronproductie aandrijft.',
    ],
  },
  'editie-39': {
    nummer: 'KennisKuur Editie 39',
    title: 'Insulineresistentie en metabole gezondheid',
    intro: 'Insulineresistentie is niet slechts een diabetesrisico — het is een centraal mechanisme achter vermoeidheid, hormonale disbalans, chronische ontsteking en cardiovasculaire schade. In deze editie de volledige pathofysiologie en het evidence-based herstelprotocol.',
    datum: 'Januari 2026',
    leestijd: '34 min',
    teaser: [
      { type: 'h2', text: 'Insuline als signaalmolecuul' },
      'Insuline is primair een signaalmolecuul, geen opslaghormoon. Het wordt afgegeven door bètacellen in de pancreas als reactie op stijgende bloedglucose en stuurt cellen aan om glucose op te nemen, glycogeen op te slaan en vetzuuroxidatie te remmen. Insuline bindt aan receptoren op celoppervlakken en activeert een intracellulaire signaalketen die uitloopt op de translocatie van GLUT4-glucosetransporters naar de celmembraan. Dit mechanisme is essentieel voor glucoseopname in spiercellen en vetweefsel.',
      'Bij insulineresistentie is de gevoeligheid van cellen voor dit signaal verminderd. Dezelfde hoeveelheid insuline sorteert minder effect, waarna de pancreas compenseert door meer insuline te produceren. Chronisch verhoogde insulinespiegels — hyperinsulinemie — zijn het functionele gevolg. Dit heeft cascade-effecten: verhoogd SHBG-onttrekking, verstoring van oestrogeen/androgeenbalans, verhoogde triglycerideproductie in de lever, remming van lipolyse en versnelde vetopslag in ectopische weefsels zoals lever en spierweefsel.',
      { type: 'h3', text: 'Mitochondriën en energiestofwisseling' },
      'Op mitochondriaal niveau gaat insulineresistentie gepaard met verminderde oxidatieve capaciteit. Spiercellen bij insulineresistente individuen tonen een lager mitochondriaal volume, verminderde elektronentransportketenactiviteit en hogere intracellulaire lipidenaccumulatie — specifiek ceramiden en diacylglycerol, die insuline-signaaltransductie direct remmen. Dit schept een zichzelf versterkende cyclus: verminderde mitochondriale functie verergert insulineresistentie, wat de metabole last op mitochondriën verder vergroot.',
      'Beweging — met name hoge-intensiteitsintervaltraining en weerstandstraining — is de krachtigste interventie voor het herstel van mitochondriale densiteit en insulinegevoeligheid. Het mechanisme loopt via AMPK-activatie en PGC-1α-expressie, die mitochondriale biogenese aandrijven. Maar het effect is acuut en tijdgebonden: één sessie verhoogt insulinegevoeligheid voor 24 tot 72 uur. Structurele, consistente inspanning is vereist voor duurzaam metabole verbetering.',
    ],
  },
  'editie-38': {
    nummer: 'KennisKuur Editie 38',
    title: 'Melatonine: slaaphormoon én mitochondriale antioxidant',
    intro: 'Melatonine wordt gereduceerd tot slaaphormoon. Maar biologisch functioneert het breder: als mitochondriale antioxidant, regulator van genexpressie en modulator van het darmmicrobioom. Deze editie gaat verder dan slaap.',
    datum: 'December 2025',
    leestijd: '26 min',
    teaser: [
      { type: 'h2', text: 'Melatonine als mitochondriale antioxidant' },
      'Het grootste deel van het melatonine in het lichaam wordt niet aangemaakt door de pijnappelklier — het wordt intracellulair geproduceerd, in mitochondriën zelf. Mitochondriaal melatonine functioneert als frontlinie-antioxidant: het neutraliseert reactieve zuurstofcomponenten (ROS) die vrijkomen bij oxidatieve fosforylering, beschermt mitochondriaal DNA (mtDNA) tegen oxidatieve mutaties en ondersteunt de efficiëntie van de elektronentransportketen. Dit is een fundamenteel ander mechanisme dan de slaap-waakregulatie via de pijnappelklier.',
      'In de context van heteroplasmie — de verhouding tussen gezond en gemuteerd mtDNA — speelt mitochondriaal melatonine een beschermende rol. Verhoogde ROS-productie, bijvoorbeeld door blauw LED-licht in de avond of chronische stressrespons, vergroot oxidatieve schade aan mtDNA. Wanneer melatonineproductie vermindert — door nachtelijk licht, nachtwerk of ouderdom — neemt de bescherming af en kan het aandeel gemuteerd mtDNA stijgen. Dit mechanisme verbindt circadiane disruptie rechtstreeks met mitochondriale veroudering en chronische ziekte.',
      { type: 'h3', text: 'Darmmicrobioom en melatonineproductie' },
      'Enterochromaffiene cellen in de darmen produceren melatonine — in grotere hoeveelheden dan de pijnappelklier. Specifieke darmbacteriën, waaronder Bifidobacterium en Lactobacillus-soorten, kunnen het melatoninesignaal moduleren. Dysbiose — verstoring van de microbiële samenstelling — gaat in studies consequent samen met verlaagde melatoninespiegels en verhoogde oxidatieve stress. De mechanistische keten loopt via tryptofaan: darmbacteriën beïnvloeden de beschikbaarheid van tryptofaan voor omzetting naar serotonine en vervolgens melatonine.',
      'Dit heeft praktische implicaties. Slaapproblemen die niet reageren op circadiane interventies — licht, tijdstip, donkerte — kunnen een microbioomcomponent hebben. Het herstellen van een gezonde darmmicrobiota via voeding, prebiotica en circadiaan-gesynchroniseerde maaltijdtiming kan melatonineproductie indirect verbeteren. Dit is een mechanisme dat in de klinische praktijk zelden wordt meegenomen in slaapbehandeling.',
    ],
  },
  'editie-37': {
    nummer: 'KennisKuur Editie 37',
    title: 'Het darmmicrobioom als circadiaan orgaan',
    intro: 'Het darmmicrobioom fluctueert in 24-uurscycli, onafhankelijk van voedingsinname. Maaltijdtiming, licht en seizoenen sturen microbiële ritmiek aan. Dysbiose is dan ook niet alleen een voedingsprobleem — het is een biologisch-tijdsprobleem.',
    datum: 'November 2025',
    leestijd: '29 min',
    teaser: [
      { type: 'h2', text: 'De microbiële klok' },
      'Het darmmicrobioom is geen statische populatie. De samenstelling en metabole activiteit van bacteriën fluctueren gedurende 24 uur in voorspelbare patronen — een fenomeen dat in recente microbioomstudies steeds duidelijker naar voren komt. Bepaalde bacteriësoorten domineren overdag, anderen nemen toe tijdens nachtelijk vasten. Metabolieten zoals acetaat, propionaat en butyraat variëren in de loop van de dag. Dit ritmische gedrag is gedeeltelijk gestuurd door de gastheer — door licht-donker-cycli, maaltijdtiming en circadiane genexpressie in het darmepitheel — en gedeeltelijk autonoom.',
      'Dat het microbioom een circadiaan orgaan is, heeft vergaande implicaties. Het klassieke advies dat darmgezondheid primair bepaald wordt door wat je eet, is onvolledig. Wanneer je eet — en wanneer je vast — beïnvloedt evenzeer de microbiële ritmiek. Late avondmaaltijden verstoren de nachtelijke herstelcyclus van het darmepitheel. Nachtelijk eten, zoals bij nachtwerk, correleert met pro-inflammatoire bacterieprofielen. Vroeg eten en vroegtijdig vasten ondersteunen microbiële diversiteit en gunstige metabolietproductie.',
      { type: 'h3', text: 'Licht en darmgezondheid' },
      'Een minder bekende maar intrigerende bevinding betreft de invloed van zonlichtblootstelling op het darmmicrobioom. UV-B-blootstelling van de huid — met name bij individuen met lage vitamine D-spiegels — blijkt de diversiteit van het darmmicrobioom te verhogen. Het mechanisme is niet volledig opgehelderd, maar verloopt waarschijnlijk via vitamine D-gemedieerde regulatie van tight junctions in het darmepitheel en via immuunmodulatie. Een gezondere darmbarrière ondersteunt gunstigere microbiomecondities.',
      'Seizoensgebonden variatie in het microbioom is ook gedocumenteerd bij traditionele populaties zoals de Hadza in Tanzania. Hun microbioomsamenstelling verschilt significant tussen het droge en natte seizoen, parallel aan veranderingen in voedselaanbod én lichtblootstelling. Moderne westerse populaties vertonen aanzienlijk minder seizoensvariatie — vermoedelijk een gevolg van uniforme voeding, verlichting en binnenleven. Of dit een negatief gezondheidseffect heeft via het microbioom, is een actief onderzoeksgebied.',
    ],
  },
  'editie-36': {
    nummer: 'KennisKuur Editie 36',
    title: 'Cortisol: het meest misverstane stresshormoon',
    intro: 'Cortisol is geen vijand — het is een ritmehormoon. Het ochtendpiek is essentieel voor wakker worden, metabole activering en immuunmodulatie. Pathologie ontstaat niet door cortisol op zich, maar door verstoring van zijn ritme. In deze editie de volledige fysiologie en het hersteldprotocol.',
    datum: 'Oktober 2025',
    leestijd: '32 min',
    teaser: [
      { type: 'h2', text: 'Cortisol als ritmehormoon' },
      'Cortisol is een glucocorticoïd dat geproduceerd wordt in de bijnierschors, onder aansturing van de hypothalamus-hypofyse-bijnieras (HPA-as). De hypothalamus geeft CRH (corticotropin-releasing hormone) af, dat de hypofyse stimuleert tot ACTH-afgifte, wat de bijnieren aanzet tot cortisolproductie. Dit systeem heeft een uitgesproken circadiaan ritme: cortisol piekt kort na het ontwaken — het zogenaamde cortisol awakening response (CAR) — en daalt gedurende de dag naar een laagste punt in de vroege nacht. Dit ritme is essentieel voor metabole activering, cognitieve scherpheid en immuunfunctie.',
      'Het CAR is geen bijproduct van stress: het is een biologisch programma dat elke ochtend het lichaam activeert. Cortisol stimuleert gluconeogenese in de lever, verhoogt de beschikbaarheid van vrije vetzuren, moduleert ontstekingsresponsen en beïnvloedt geheugensconsolidatie. Zonder een adequaat CAR — zoals bij adrenale uitputting of ernstige slaapstoornis — is de functionele start van de dag biologisch gecompromitteerd. Mensen die dit herkennen als "ochtendmoeheid die pas later op de dag verbetert" ervaren precies dit fenomeen.',
      { type: 'h3', text: 'Chronische stressrespons en ritme-disruptie' },
      'Pathologie ontstaat niet door cortisol op zich, maar door verstoring van zijn ritme. Chronische psychosociale stress, slaapgebrek, nachtelijk blauw licht en circadiane disruptie leiden tot afvlakking van het cortisolprofiel: de ochtendpiek daalt, de avondwaarden stijgen. Dit resulteert in een vlak, permanent verhoogd cortisolprofiel in plaats van een dynamisch dag-nacht-ritme. De gevolgen zijn metabolisch (insulineresistentie, vetopslag), immunologisch (chronische laaggradige ontsteking) en neurologisch (verminderde hippocampale neuroplasticiteit en geheugenfunctie).',
      'Cortisol en testosteron delen voorlopers in de steroïdensyntheseroute — pregnenolon. Bij chronische HPA-activatie wordt pregnenolon preferentieel richting cortisol gestuurd, ten koste van androgeenproductie. Dit mechanisme — soms beschreven als "pregnenolone steal" — verklaart waarom chronische stress consequent gepaard gaat met verlaagde testosteron- en DHEA-spiegels. Het is geen parallelle ontwikkeling: het is hetzelfde biochemische pad dat in twee richtingen gestuurd kan worden.',
    ],
  },
  'editie-35': {
    nummer: 'KennisKuur Editie 35',
    title: 'Schildklier, energie en koud-intolerantie',
    intro: 'TSH alleen geeft een onvolledig beeld van schildklierfunctie. T3, T4, omgekeerd T3 en de rol van seleniumstatus, stressrespons en calorierestrictie bepalen samen of schildklierhormoon functioneel actief is op celniveau. In deze editie de complete schildklierfysiologie.',
    datum: 'September 2025',
    leestijd: '27 min',
    teaser: [
      { type: 'h2', text: 'De schildklieras: T4 naar T3' },
      'De schildklier produceert voornamelijk T4 (thyroxine) — een relatief inactief prohormooon. In perifere weefsels, met name de lever, nieren en spieren, wordt T4 via deiodasen omgezet naar het actieve T3 (trijoodthyronine). T3 is het biologisch werkzame hormoon dat de kern van cellen binnenkomt en genexpressie aanstuurt. Dit omzettingsproces is de sleutel tot functionele schildklierfunctie — en tevens het punt waar het het vaakst misgaat.',
      'Deiodinase type 1 en type 2 zetten T4 om naar T3. Deiodinase type 3 zet T4 om naar reverse T3 (rT3) — een inactieve vorm die T3-receptoren blokkeert zonder biologische activiteit. Bij chronische stress, calorie-restrictie, infectie of systemische ontsteking verschuift de balans richting rT3-productie. Dit is een fysiologische energiebesparingsmaatregel, evolutionair zinvol bij schaarste of ziekte. In de moderne context van chronische stressrespons resulteert het in functionele hypothyreoïdie met normale TSH- en T4-waarden: een laboratoriumpatroon dat door de meeste artsen als normaal beoordeeld wordt.',
      { type: 'h3', text: 'Selenium, jodium en cofactoren' },
      'Schildklierfunctie is cofactorafhankelijk. Selenium is essentieel voor deiodinase-activiteit: zonder adequate seleniumstatus kan T4 niet efficiënt worden omgezet naar T3. Jodium is de bouwstof van schildklierhormonen zelf: T4 bevat vier jodiumatomen, T3 drie. Jodiumtekort is wereldwijd een van de meest voorkomende micronutriëntendeficiënties, ook in westerse landen bij mensen die zout vermijden of weinig zeeproducten consumeren. Zink speelt een rol in de binding van T3 aan zijn receptor.',
      'De meeste schildklierprotocollen richten zich uitsluitend op TSH-normalisatie via levothyroxine (T4-suppletie). Maar wanneer de T4-naar-T3-conversie gestoord is — door seleniumdeficiëntie, stressrespons of rT3-dominantie — lost T4-suppletie het onderliggende probleem niet op. Combinatietherapie met T3 of cofactorherstel geeft in deze gevallen betere functionele uitkomsten, maar wordt zelden overwogen in standaardzorg.',
    ],
  },
  'editie-1': {
    nummer: 'KennisKuur Editie 1',
    title: 'De basis van evidence-based leefstijl',
    intro: 'Wat betekent het om evidence-based te leven? Niet het slaafs volgen van meta-analyses, maar het zorgvuldig integreren van wetenschappelijk bewijs binnen de biologische context van het individu. In deze eerste editie de methodologische basis van de OHP-aanpak.',
    datum: 'Januari 2023',
    leestijd: '24 min',
    teaser: [
      { type: 'h2', text: 'Evidence-based is niet evidence-limited' },
      'Het begrip "evidence-based" is in de gezondheidssector verworden tot een marketingterm. Producenten van supplementen claimen het. Dieetboeken claimen het. Zorgverzekeraars gebruiken het als selectiecriterium. Maar in de praktijk wordt evidence-based vaak gebruikt om aanpakken te legitimeren die binnen de bestaande medische consensus vallen — en aanpakken die daarbuiten vallen te diskwalificeren, ook wanneer het bewijs daarvoor solide is. Dit is geen evidence-based denken. Het is consensus-based denken met een ander label.',
      'Evidence-based geneeskunde in zijn oorspronkelijke definitie — geformuleerd door Sackett en collega\'s in de jaren negentig — integreert drie componenten: wetenschappelijk bewijs, klinische expertise en patiëntwaarden. Het is per definitie een integratiemethode, geen dogma. Het vraagt om voortdurende herbeoordeling van het bewijs, inclusief bewijs dat de heersende praktijk uitdaagt. Wanneer studies consistent laten zien dat zonlicht bloeddruk verlaagt, is het afwijzen van die bevinding omdat ze niet past in het cardiovasculaire behandelparadigma niet evidence-based — het is paradigma-conservatisme.',
      { type: 'h3', text: 'De vijf kernpijlers van OHP' },
      'Optimal Health Performance is gebouwd op vijf pijlers die in de wetenschappelijke literatuur consequent naar voren komen als primaire determinanten van metabole gezondheid, hormonale balans en energieniveaus. De volgorde is bewust: de pijlers bouwen op elkaar voort.',
      'Licht en bioritme vormen de eerste pijler — en de meest onderschatte. Het circadiaan ritme is het organiserende principe van menselijke fysiologie. Hormonen, metabolisme, celherstel, immuunfunctie en zelfs microbioomsamenstelling volgen licht-donker-cycli. Zonder een gesynchroniseerd bioritme functioneren de overige pijlers suboptimaal, hoe goed ze ook geïmplementeerd worden. Ochtendlichtblootstelling, beperking van avond-blauwlicht en consistente slaap-waaktijden zijn geen biohacks — het zijn biologische basisvereisten.',
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(edities).map((slug) => ({ editie: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ editie: string }> }) {
  const { editie } = await params
  const data = edities[editie]
  if (!data) return {}
  return {
    title: `${data.title} | OHP Publicaties`,
    description: data.intro.slice(0, 155),
  }
}

export default async function EditiePage({ params }: { params: Promise<{ editie: string }> }) {
  const { editie } = await params
  const data = edities[editie]
  if (!data) notFound()

  return (
    <>
      <Nav solid />
      <main style={{ paddingTop: '162px' }}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/publicaties/">Publicaties</Link>
          <span>→</span>
          <span>{data.nummer}</span>
        </div>

        {/* Header */}
        <header className={styles.header}>
          <p className={styles.editie}>{data.nummer}</p>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.intro}>{data.intro}</p>
          <div className={styles.meta}>
            <span>{data.datum}</span>
            <span>·</span>
            <span>{data.leestijd} leestijd</span>
            <span>·</span>
            <span>Door Philip Sliwinski</span>
          </div>
        </header>

        {/* Artikel body: teaser + blur + paywall */}
        <article className={styles.article}>
          <div className={styles.teaser}>
            {data.teaser.map((item, i) => {
              if (typeof item === 'string') {
                return <p key={i}>{item}</p>
              }
              if (item.type === 'h2') {
                return <h2 key={i}>{item.text}</h2>
              }
              return <h3 key={i}>{item.text}</h3>
            })}
          </div>

          {/* Blurred preview — geeft visueel aan dat er meer content is */}
          <div className={styles.paywallSection}>
            <div className={styles.blurred} aria-hidden="true">
              <p>De volledige editie gaat dieper in op de protocollen, de onderliggende biochemie en de praktische implementatie. Alle relevante studies worden besproken met kritische noten bij de methodologie. Elk mechanisme wordt vertaald naar concrete aanbevelingen die aansluiten bij jouw individuele context en gezondheidsdoelen.</p>
              <p>In het tweede deel van deze editie behandelt Philip de meest voorkomende fouten bij het toepassen van deze kennis, de interactie met andere leefstijlfactoren en de specifieke protocollen die in de praktijk het meeste effect sorteren. Inclusief volledige bronvermelding en aanbevolen vervolgstudies voor wie dieper wil.</p>
            </div>
            <div className={styles.blurOverlay} aria-hidden="true" />
            <div className={styles.blurCtaWrap}>
              <Link href="/kenniskuur/" className={styles.blurCta}>
                Volledige editie voor leden
              </Link>
            </div>
          </div>

          <KennisKuurPaywall editie={data.nummer} />
        </article>

        {/* Navigatie terug */}
        <div className={styles.footer}>
          <Link href="/publicaties/" className={styles.backLink}>
            ← Terug naar alle publicaties
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
