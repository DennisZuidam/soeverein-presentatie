import Slide01 from './Slide01.jsx'
import Slide02 from './Slide02.jsx'
import Slide04 from './Slide04.jsx'
import Slide05 from './Slide05.jsx'
import Slide06 from './Slide06.jsx'
import Slide07 from './Slide07.jsx'
import SlideEncryption from './SlideEncryption.jsx'
import Slide08 from './Slide08.jsx'
import Slide09 from './Slide09.jsx'
import Slide10 from './Slide10.jsx'
import Slide11 from './Slide11.jsx'
import SlideContainer from './Slide13.jsx'
import Slide14 from './Slide14.jsx'
import Slide15 from './Slide15.jsx'
import Slide16 from './Slide16.jsx'
import Slide17 from './Slide17.jsx'
import Slide18 from './Slide18.jsx'
import SlideGartner from './SlideGartner.jsx'
import Slide19 from './Slide19.jsx'
import Slide21 from './Slide21.jsx'
import Slide22 from './Slide22.jsx'
import Slide23 from './Slide23.jsx'
import SlidePayoff from './Slide24.jsx'
import SlideTwoMoves from './Slide26.jsx'
import SlideAiGate from './Slide28.jsx'
import SlideDivider3 from './Slide29.jsx'
import SlideDivider1 from './Slide30.jsx'
import SlideDivider2 from './Slide31.jsx'
import SlideLockinLoan from './Slide32.jsx'
import SlideExamples from './Slide33.jsx'
import SlideSovereigntyNumber from './Slide34.jsx'
import SlideScorecard from './Slide35.jsx'
import SlideScenario from './Slide36.jsx'
import SlideSenate from './Slide37.jsx'
import SlideClosing from './Slide38.jsx'
import SlideLiveDemo from './SlideLiveDemo.jsx'
import SlideThanks from './SlideThanks.jsx'
import SlideBronnen from './SlideBronnen.jsx'

// Verhaallijn in drie delen, met intro en epiloog:
//   Intro    — de haak + wie ik ben
//   Deel 1 · Waarom je vastzit
//   Deel 2 · Wie zich al bevrijdde
//   Deel 3 · Hoe je het zelf bouwt (incl. demo)
//   Epiloog  — begin morgen
export const slides = [
  {
    Component: Slide01,
    notes:
      "Welkom. De titel is letterlijk de stelling van vandaag: een regio die \"eu\" heet, maakt je cloud nog niet Europees. Vanavond neem ik jullie mee langs wat er op dit moment in de wereld speelt, in drie delen: waarom je vastzit, wie zich al bevrijdde, en hoe je het zelf bouwt (met de demo als climax). Daarna een korte epiloog. Zet in de eerste minuut ook de rolverdeling van de avond neer: de sprekers na mij gaan de AI-diepte in; ik laat vooral zien wat er speelt en geef jullie een meetlat om hun verhalen straks te kunnen plaatsen.",
  },
  {
    Component: SlideScenario,
    notes:
      "Koud openen. Geen naam, geen agenda, meteen het scenario. Laat na \"Wat is dan je plan B?\" tien seconden stilte vallen; niet invullen, niet grappen. Het doel is besef, geen doembeeld: laat de zaal even voelen hoe weinig ze hier eigenlijk over nagedacht hebben. Het is ook een meetvraag: aan het eind van de avond heb je hier een getal als antwoord (time-to-exit). Nog niet verklappen; door naar wie ik ben.",
  },
  {
    Component: Slide02,
    steps: 3,
    notes:
      "Een echte, warme kennismaking na de schrik-opener. Houd het licht. Je landt op \"whoami\" en je naam; elke druk op pijltje-rechts onthult een categorie (werk, gezin, hobby). Vertel er bij elk kort iets persoonlijks bij: XPRTZ en de podcasts, je gezin, en waar je energie van krijgt (koken, bakken, sporten). Geen cv-opsomming, gewoon even mens zijn voor de zaal.\n\nPlant je geloofwaardigheid niet als expert maar als iemand die dit volgt en duidt: dit onderwerp houdt me bezig, ik lees het nieuws, de hoorzittingen en de wetgeving die straks langskomen op de voet, en daarom sta ik hier. Wat volgt is geen les, maar wat ik zie gebeuren in de wereld.\n\nBrug naar de volgende slide: en toch, hoe bewust kies je zoiets eigenlijk? Wanneer koos jij voor het laatst bewust je cloudprovider?",
  },

  // ---- Deel 1 · Waarom je vastzit ----
  {
    Component: SlideDivider1,
    notes:
      "Divider die Deel 1 opent. De deel-indicator onderin laat alle drie de delen zien; wijs er kort naar zodat de zaal het patroon herkent (hij komt op elke divider terug). Het besef dat je hier wilt wekken: lock-in zit niet in de container maar in state, identiteit en coercion points, en bijna niemand heeft die binding ooit bewust gekozen. Toon: geen verwijt, gewoon laten zien hoe het echt zit.",
  },
  {
    Component: Slide04,
    notes:
      "Waar begint lock-in eigenlijk? Niet bij contractonderhandelingen, maar bij 'aws configure' in een README, een collega die het al kende, een tutorial die het voordeed. Het besef dat je hier wilt planten: niemand zei nee, maar niemand zei ja, de keuze is nooit echt gemaakt.",
  },
  {
    Component: Slide05,
    notes:
      "Laat zien dat lock-in geen abstractie is maar in concrete keuzes zit, zodat de zaal ze herkent in de eigen stack. DynamoDB: ooit gekozen omdat Postgres 'te veel werk' leek; nu kost migratie maanden, want single-table design is gemodelleerd rond je query-patronen, veranderen die dan gaat de hele tabel op de schop. IAM: rollen zo diep verweven dat overstappen bijna onmogelijk wordt. Egress: let op de precisie hier, want exit-egress (eenmalig, volledig vertrek onder voorwaarden) is sinds 2024 bij alle drie de hyperscalers gratis. Het verdienmodel zit in het doorlopende verkeer: $0,09/GB na 100 GB gratis bij AWS; 300 TB/maand is orde twintigduizend dollar, bij Hetzner zit 20 TB per server inbegrepen. Zo wordt elke dienst buiten de muren vanzelf te duur en voelt alles binnenshuis 'gratis'. En geen AWS-bashing: Azure en Google doen exact hetzelfde. Bronnen: wz-it.com/en/blog/aws-egress-fees-vs-hetzner-traffic-costs · dev.to/gpuperhour",
  },
  {
    Component: SlideLockinLoan,
    notes:
      "Het verrassende, nuchtere inzicht dat je hier wilt overbrengen: lock-in is geen zonde maar een lening. Soms is lenen precies goed (startup, snelheid, weinig state). De vraag is dus niet 'vermijd lock-in' maar 'ken je de rente en weet je wanneer de aflossing komt'. Links slim lenen, rechts wanneer de rekening komt. En die rente betaal je in state, identiteit en coercion points, niet in containers. Zo laat je de zaal zien dat het niet om dogma gaat maar om bewust kiezen: weet welke exit je later betaalt vóór je instapt.",
  },
  {
    Component: Slide06,
    notes:
      "Vier gevallen, verspreid over vijftien jaar, allemaal van dezelfde soort: de buitenwereld reikt tot in je cloud. Het besef dat je wilt wekken: dit zijn geen losse incidenten maar een terugkerend mechanisme. ICC-aanklager Khan verloor de toegang tot zijn Microsoft-account na een Amerikaanse sanctie; let op de formulering: zijn e-mailaccount werd afgesloten, en Microsoft stelt dat het zijn diensten aan het ICC als organisatie nooit heeft opgeschort. Houd die nuance paraat voor de Q&A. AWS haalde Parler in januari 2021 binnen 24 uur offline, na de bestorming van het Capitool. Amazon zette WikiLeaks in 2010 van zijn servers na politieke druk uit Washington. En na de invasie van Oekraïne schortten AWS, Azure en Google aanmeldingen en diensten in Rusland op. Niet allemaal onterecht, wél telkens buiten de macht van de klant. Brug: en dit is geen speculatie; Microsoft zei dit soort dingen zelf, onder ede. Bronnen: reuters/AP over Parler (jan 2021) · nyt over WikiLeaks/Amazon (dec 2010) · AWS/Azure/Google statements over Rusland (maart 2022) · ICC-berichtgeving (mei 2025, Microsoft betwist de lezing).",
  },
  {
    Component: SlideSenate,
    notes:
      "Het sterkste moment van Deel 1, dus neem rust. Hier wil je dat het echt landt: dit is geen speculatie maar een uitspraak onder ede. Franse Senaat, hoorzitting van 10 juni 2025. Senator Simon Uzenat vroeg Anton Carniaux (directeur juridische en publieke zaken, Microsoft France) of hij kan garanderen dat Franse data nooit zonder Franse toestemming aan de VS wordt overgedragen. Antwoord, onder ede: 'Non, je ne peux pas le garantir.' En daarna: 'Als een Amerikaanse rechterlijke beslissing ons dwingt, moeten we de data overdragen.' Laat de quote even staan voordat je praat. Brug: dit gaat over een Amerikaanse provider. Maar denk je dat Europees kiezen je redt? Kijk naar Solvinity. Bronnen: senat.fr/compte-rendu-commissions/20250609/ce_commande_publique.html · actuia.com",
  },
  {
    Component: Slide08,
    steps: 5,
    notes:
      "Solvinity is het bedrijf achter DigiD, iedereen in deze zaal gebruikt het, dus dit komt dichtbij. Het besef dat je wilt wekken: zelfs 'gewoon Europees kiezen' geeft geen zekerheid. De tijdlijn: Solvinity is van oorsprong Nederlands maar zit al jaren in Britse handen (het VK is geen EU, dus die Europese keuze wankelde al). November 2025: Kyndryl (ex-IBM) wil Solvinity overnemen. Mei 2026: staatssecretaris Willemijn Aerdts (Digitale Economie en Soevereiniteit) verbiedt de overname 'ter bescherming van het publieke belang', op advies van toetsingsorgaan BTI. En het is niet afgelopen: Solvinity is in beroep gegaan; rond 6 juli dient bij de rechtbank Rotterdam een verzoek om een voorlopige voorziening. Dat is dágen na deze presentatie: CHECK DE ACTUELE STAND vlak voor de avond. Dat open einde is precies de les: zelfs een overheidsverbod is geen zekerheid, alleen je eigen exitvermogen. Niet claimen dat Amsterdam of J&V 'bewust kozen' voor Solvinity; dat is niet te bevestigen. Brug: en bij een Amerikaanse provider is dat mechanisme nog directer; kijk maar waar alles juridisch staat. Bronnen: nos.nl/artikel/2615885 · nos.nl/artikel/2618922 · ictrecht.nl (Solvinity-verbod en de grenzen van het publiek belang)",
  },
  {
    Component: Slide07,
    notes:
      "De naam zegt 'eu', maar alleen de servers staan in Europa. Laat de zaal dat gat zien: het bedrijf zit in Seattle, de wet in Washington (CLOUD Act, FISA 702). Voor jouw data telt juridisch maar één plek, en dat is niet Dublin. Dit is het onderliggende mechanisme achter alle voorbeelden hiervoor; als dat besef valt, klikt de rest op zijn plek. Brug: 'ja maar dan versleutel ik het toch, of ik kies een sovereign cloud?' — precies dat pak ik nu.",
  },
  {
    Component: SlideEncryption,
    notes:
      "Weinig tekst op de slide, jij brengt het verhaal. Kern: geen enkele technische truc ontsnapt aan de jurisdictie, want de eigenaar valt eronder. Loop de rijen langs. (1) Encryptie: de CLOUD Act pakt niet de locatie maar de 'control' (possession, custody, or control); kan de provider bij je sleutel, dan moet hij ontsleutelen bij een bevel. BYOK verschuift het alleen (escrow), alleen HYOK (sleutel die de provider nooit heeft) valt buiten bereik. (2) Air-gap/isolatie: dedicated of region-locked maakt niet uit, zelfde moederbedrijf is zelfde jurisdictie; de juridische entiteit telt, niet de netwerktopologie. (3) Enclaves (AWS Nitro, Azure Confidential Computing): de eigenaar kan gedwongen worden de omgeving aan te passen via patches en hypervisor-toegang. (4) Zero-knowledge: hangt op de implementatie; onder een sealed order kan een VS-bedrijf een gericht lek moeten inbouwen en mag dat niet vertellen. (5) 'Sovereign clouds' (AWS European Sovereign Cloud, Microsoft EU Data Boundary/Bleu, Google S3NS met Thales): structurele pogingen, maar Microsoft gaf onder ede toe dat het geen garantie kan geven (terugverwijzing naar de Senaatsquote). Kill-quote voor de zaal: behandel de soevereiniteitsclaims van een VS-provider als marketing, niet als technische specificatie. Blijf eerlijk: het verkleint de risico's, maar neemt de coercion points niet weg. Brug: en diezelfde jurisdictie reikt inmiddels tot de AI-modellen zelf. Bronnen: eliatra.com (The Sovereignty Illusion) · julsimon.medium.com (The Sovereignty Mirage) · infoq.com (AWS European Sovereign Cloud).",
  },
  {
    Component: SlideAiGate,
    notes:
      "De nieuwste rung op dezelfde ladder, en de meest actuele. Bouw het besef stap voor stap op: eerst zagen we dat je data onder de CLOUD Act valt, toen dat een account zomaar dicht kan (ICC), en nu reikt dezelfde jurisdictie tot de AI-modellen zelf. Executive Order 14409, 'Promoting Advanced Artificial Intelligence Innovation and Security', 2 juni 2026: de NSA-directeur bepaalt via een geclassificeerde cyberbenchmark (specifiek cybercapaciteiten, niet algemene modelcapaciteit) wanneer een model een 'covered frontier model' is, en ontwikkelaars mogen de Amerikaanse overheid tot 30 dagen vóór release toegang geven. Blijf eerlijk: het is vrijwillig, de order sluit een verplicht licentie- of preclearance-regime expliciet uit. Zeg dus 'de VS bouwt een poort', niet 'de VS blokkeert AI'. Brug: het antwoord is hetzelfde principe als bij de S3-API, open in plaats van closed. Open-weight modellen zoals Mistral zijn voor AI wat open standaarden zijn voor infra. Haakje: deze EO is van 2 juni, het EU-pakket van 3 juni (komt terug bij 'de wind in je rug'). Bronnen: federalregister.gov/public-inspection/2026-11415 · techpolicy.press",
  },
  {
    Component: Slide09,
    notes:
      "De kernzin van de talk, en de afsluiting van Deel 1. Het besef waar alles naartoe werkte: soevereiniteit als doel leidt tot vlaggetjes-denken, keuzevrijheid als doel leidt tot goede architectuur, en soevereiniteit krijg je er dan gratis bij. Laat het even hangen.",
  },

  // ---- Deel 2 · Wie zich al bevrijdde ----
  {
    Component: SlideTwoMoves,
    notes:
      "Belangrijk onderscheid voordat de voorbeelden komen, want deze twee worden constant door elkaar gehaald en juist dat verschil bepaalt of iemand écht vrij is. Europees kiezen is een bestemming: je verhuist je afhankelijkheid naar een andere vlag. Zonder porteerbaarheid sta je daar net zo vast, en Solvinity liet zien dat ook een Europese keuze van eigenaar kan wisselen. Keuzevrijheid is iets anders: die zit in je architectuur, in containers, open standaarden en porteerbare data, en werkt voor elke bestemming, ook een Europese. Het besef dat je wilt planten: pas dat tweede maakt de Europese keuze veilig. De voorbeelden hierna doen soms het één, soms het ander, soms allebei; laat de zaal zelf herkennen wat wat is.",
  },
  {
    Component: SlideDivider2,
    notes:
      "Overgang naar Deel 2. Deel 1 was het waarom; vanaf hier laat je zien dat dit geen toekomstmuziek is maar al gebeurt. Het besef dat je wilt wekken: mensen en organisaties zijn hier nu al mee bezig. Geen manifest, gewoon wat er feitelijk gebeurt. Blijf eerlijk over \"al onderweg\": DNB en Airbus zijn intenties en contracten, geen afgeronde migraties. Tempo vasthouden in dit deel; de cases delen één les en de zaal heeft het patroon snel door.",
  },
  {
    Component: SlideExamples,
    notes:
      "Groot en klein, telkens hetzelfde patroon dat je wilt laten zien: de compute verhuist makkelijk, de state is het echte werk. GEICO: tien jaar public cloud (multi-cloud, Azure de grootste, NIET all-in AWS, dat is fout in veel samenvattingen), rekening 2,5x omhoog, terug naar eigen OpenStack/Kubernetes, 50%+ goedkoper per core (Open Compute Project white paper, 2024). Dropbox: ~500 PB grotendeels (~90%) van S3 naar eigen Magic Pocket, $74,6M bespaard op cost of revenue over 2016-2017 (S-1, 2018). OneUptime: van $38k/mnd AWS naar eigen bare metal (MicroK8s+Ceph); de besparing groeide in twee jaar van $230k naar ruim $1,2M per jaar (76% goedkoper dan AWS), 99,993% uptime over 730+ dagen. LET OP: het is een jaarlijkse run-rate, geen cumulatief totaal (eigen blog, goed onderbouwd). Spotify (hoofdcase coercion points): Europees/Zweeds, kan z'n infra draaien waar het wil, maar komt alleen op iPhones via Apples App Store. EU beboette Apple €1,84 mld (4 mrt 2024) voor de anti-steering-regels na Spotify's klacht. Epic/Fortnite als klapstuk: eigen betaalsysteem ingebouwd, in aug 2020 door Apple én Google uit hun stores gegooid, jarenlang van iOS af (terug in de EU via de DMA in 2024). Punt: distributie én advertenties (Google Ads) zijn coercion points BUITEN je infra, niet te vervangen. 37signals bewaar ik even: die case gaat zo de diepte in. Bronnen: thestack.technology (GEICO) · geekwire.com (Dropbox) · oneuptime.com/blog · ec.europa.eu + newsroom.spotify.com (Apple-boete) · engadget.com (Epic-Fortnite)",
  },
  {
    Component: Slide14,
    notes:
      "Laat zien hoe breed de beweging al is: van onderzoeksjournalistiek tot Airbus, DNB en de Rijksoverheid. De labels laten het onderscheid van de vorige slide zien: de meesten kozen een Europese bestemming, de Rijksoverheid deed allebei: Europese bestemming én een contractuele exitclausule bij overname buiten de EER (raamovereenkomst STACKIT, 23 april 2026; raamwerk zonder afnameverplichting, dus geen migratie). The Firewall: kort geding om het DigiD-contract te blokkeren, afgewezen omdat opzegging de werking van DigiD in gevaar zou brengen. Airbus is een aanbesteding, een intentie. Venijnige vraag om te zien aankomen: \"waarom Duits STACKIT en geen Nederlandse provider?\" Antwoord: precies de these, de exitclausule telt, de vlag niet. Bronnen: rijksoverheid.nl (raamovereenkomst 23 april 2026) · techzine.eu · computable.nl (kritiek DCC)",
  },
  {
    Component: Slide10,
    notes:
      "Een verhaal dat blijft hangen: DHH, ruim tien jaar AWS, toen cloud-exit naar eigen hardware. De quote op de slide komt letterlijk uit \"Why we're leaving the cloud\" (world.hey.com/dhh, okt 2022); laat die even landen. Cijfers: infra van $3,2M naar minder dan $1M per jaar. De S3-exit: ~10 PB / 5 mld objecten uit S3 naar dual-datacenter Pure Storage (18 PB is de gekochte capaciteit), $1,5M eenmalig, <$200K/jaar beheer. Let op: de \"$10M over vijf jaar\" is DHH zijn eigen projectie, geen audit; gerealiseerd ~$1-2M/jaar. Zomer 2025 ging het complete AWS-account dicht. Niet naar Europese cloud, naar eigen infra, zijn keuze. En hij bouwde Kamal, het deploy-tool uit de demo. Belangrijk om erbij te zeggen (dit kwam van de geschrapte 'hoe dan'-slide): niemand deed dit in één grote sprong, ze pakten het component voor component, geen big bang. Dat maakt het behapbaar. Bronnen: world.hey.com/dhh · theregister.com/2025/05/09",
  },
  {
    Component: Slide11,
    notes:
      "Laat Kelsey Hightower het samenvatten: kunnen bewegen zonder toestemming ís een vorm van soevereiniteit. Niet politiek, maar praktisch, en juist dat besef wil je meegeven. Let op: controleer vóór de avond of deze bewoording letterlijk uit de Civo Navigate London 2025-opname komt; zo niet, kondig hem aan als parafrase (\"zoals Hightower het ongeveer zei\").",
  },
  {
    Component: Slide15,
    notes:
      "Laat zien dat ook het beleid meebeweegt. EU Tech Sovereignty Package (3 juni 2026): voor het eerst zit open source in het hart van een industriepolitiek pakket, met wetgeving en budget (de Commissie had al een Open Source Strategy uit 2020, dus niet zeggen \"voor het eerst open source in EU-beleid\"). Voorstel Cloud and AI Development Act inclusief open-source-first principe voor overheidsinkoop, €2 miljard gespreid over zeven jaar. De cijfers laten zien waarom het besef groeit: 80% van de digitale technologie geïmporteerd, 70% van de AI-modellen uit de VS. Callback naar de NSA-poort: die EO is van 2 juni, dit pakket van 3 juni. Breng het als veelzeggend toeval, niet als schaakspel; het pakket was meermaals uitgesteld. Voor de zaal: porteerbaar kunnen deployen wordt letterlijk een aanbestedingscriterium. Bronnen: commission.europa.eu (3 juni 2026) · techpolicy.press · interoperable-europe.ec.europa.eu",
  },
  {
    Component: SlideGartner,
    notes:
      "De afsluiter van Deel 2, en bewust datagedreven: geen anekdotes maar een Gartner-cijfer, zodat de zaal ziet dat dit de mainstream-richting is. Eén groot getal: 61% van de West-Europese CIO's zet méér in op lokale/regionale cloud door geopolitiek (Gartner-enquête mei-juli 2025, 241 CIO's in West-Europa). De drie kleine cijfers erbij: 55% noemt open source cruciaal in hun cloudstrategie, 53% gaat globale providers beperken, en Gartner voorspelt dat in 2030 meer dan 75% van de bedrijven buiten de VS een soevereiniteitsstrategie heeft. De punchline is Gartners eigen woord: dit is geen repatriation maar 'geopatriation', migreren om geopolitieke in plaats van kostenredenen. Breng de cijfers, lees ze niet op; laat het grote getal even hangen. Brug naar Deel 3: genoeg over wie het al doet, nu hoe je het zelf doet. Bronnen: gartner.com (persbericht 12 nov 2025) · theregister.com/2025/11/13 · channelweb.co.uk (geopatriation).",
  },

  // ---- Deel 3 · Hoe je het zelf bouwt (incl. demo) ----
  {
    Component: SlideDivider3,
    notes:
      "Divider Deel 3. Kader het bewust: geen technisch college, ik laat het je zo zien met een demo. De techniek zit in de demo, niet in de slides. Plant de kernthese als besef: de container is een avondje werk, de echte lock-in zit in state, identiteit en coercion points. KLOK-CHECKPOINT: ben je hier nog niet op tweederde van je slot, gebruik de noodsnit die nog vóór je ligt (Payoff-slide overslaan en bij de scorecard alleen de onderste twee rijen uitlichten). Spreektekst: klaar met waarom en wie; de verleiding is nu 'containeriseer alles en je bent vrij', en juist dat misverstand wil je laten zien; de container is het makkelijke deel.",
  },
  {
    Component: SlideContainer,
    notes:
      "De slide leest bijna als 'de container is je exitstrategie', en dat is precies te makkelijk; laat de zaal dat zelf ontdekken. De container is juist het enige stuk dat altijd al porteerbaar was (OCI, elke runtime draait hem). Dat is het lokaas. De echte binding zit op drie plekken zonder commando: state (je data verhuist niet vanzelf), identiteit (je IAM-model is provider-specifiek, je herschrijft het), en coercion points (hoeveel partijen kunnen je provider dwingen). Dat laatste is wat 'Europees kiezen' pretendeert op te lossen, maar het gaat eigenlijk over architectuur. Kernthese: keuzevrijheid telt, niet het label. Wie zo bouwt dat wisselen een keuze blijft, krijgt soevereiniteit gratis. Brug: waar zitten die drie lagen en hoe blijven ze porteerbaar (volgende slide).",
  },
  {
    Component: SlideSovereigntyNumber,
    notes:
      "Dit is de meetlat van de avond, het kernbesef, dus tijd nemen. 'Cloud-agnostisch' is een marketingsprookje, niemand is het en niemand hoeft het te zijn. Het bruikbare besef is replaceability: hoe snel en hoe duur kom je los. Dat laat zich in twee getallen vangen, time-to-exit en cost-to-exit, en die kun je als SLA op papier zetten: binnen zes weken weg, voor veertig mille, elk jaar echt geoefend (een exit-oefening, zoals een chaos-drill). De getallen zijn een voorbeeld, geijkt op een middelgrote stack; laat een architect ze zelf herijken. Voor de IT-managers in de zaal: dit is de zin die naar het contract en het risicoregister kan. Coercion points is het verrassende punt: een juridisch-geopolitiek getal, geen technisch, en het overrulet al je mooie architectuur. Omkering aan het eind: soevereiniteit is geen doel dat je afvinkt, maar een bijproduct als die exit-getallen laag genoeg zijn.",
  },
  {
    Component: SlidePayoff,
    steps: 5,
    notes:
      'De vier blokjes komen één voor één op pijltje-rechts, de punchline als vijfde. SCHRAPKANDIDAAT BIJ TIJDNOOD: de kern kan als gesproken zin bij de scorecard. Dit is waarom je het doet, los van soevereiniteit. Onderhandelingspositie: wie kan vertrekken hoeft nooit te smeken. Betere architectuur: porteerbaar bouwen dwingt dezelfde discipline af als testbaar bouwen. Reproduceerbaarheid: één artefact van laptop tot productie. En soevereiniteit krijg je er gratis bij, als bijproduct.',
  },
  {
    Component: Slide19,
    notes:
      'De demo: deze presentatie zelf, live van Azure (Microsoft) naar Scaleway nl-ams, met Kamal vanuit de terminal. Bewust stateless: je ziet de makkelijke helft, container in seconden en de url verspringt per cloud (sslip.io = het IP). Zeg er eerlijk bij: geen state betekent een time-to-exit van bijna nul; het echte werk zit in data, identiteit en coercion points, en dat meet de scorecard zo. Dezelfde config wijst met één vlag ook naar Hetzner. Als "jij werkt toch ook met Scaleway?" komt: klopt, en alles geldt óók tegen Scaleway, daarom eindigt de demo met -d hetzner. Zie demo/record-demo.sh voor het opname-draaiboek.',
  },
  {
    Component: SlideLiveDemo,
    steps: 6,
    notes:
      "De demo, de climax — nu volledig gescript in de deck, dus niets kan op live infra sneuvelen, maar elk getal en elke host komt uit een echte run. Je stuurt het met pijltje-rechts, zes beats:\n\n1 · Terminal verschijnt vóór de panelen en deployt naar Azure (eerste run installeert Docker, ~103s, de stopwatch loopt mee). 2 · Terminal weg: het linkerframe toont slide 1 van déze presentatie, live op 51-124-164-67.sslip.io (Microsoft, West Europe) — wijs op de host in de adresbalk. 3 · Terminal deployt naar Scaleway — mét de echte hapering: een verse VM waarvan poort 22 nog dicht is (ECONNREFUSED), dan de geslaagde retry in 27,8s. Dit is het bewustzijnsmoment; zeg het hardop: 'dit is geen gepolijste video, dit is een machine die net geboekt is; sshd moet nog wakker worden, zo gedraagt echte infra zich.' 4 · Terminal weg: het rechterframe toont dezelfde slide 1 op 51-15-113-112.sslip.io. Zelfde site, twee clouds, alleen het IP in de balk verschilt. 5 · Terminal: az group delete op Azure. 6 · Het linkerframe klapt naar \"not found\", terwijl Amsterdam gewoon doordraait. Dat is het hele verhaal in beeld.\n\nDe output komt uit de echte run; de hosts zijn de echte IP's. Volledig gescript, dus geen live infra nodig.",
  },
  {
    Component: SlideScorecard,
    notes:
      'Lees de scorecard van boven naar beneden, bewust oplopend. Compute, registry en DNS reken je af in seconden tot minuten, want die draaien op open standaarden (OCI, DNS). Dat is het deel dat iedereen als "de migratie" ziet, en het is triviaal; de demo liet precies die bovenste rij zien. De twee onderste rijen doen pijn. Zeg de schaalzin hardop: een echte 14 GB-database zonder downtime-eis is al minuten, bij terabytes weken. Bij identiteit gaat het om herbouwen, niet exporteren, en een bevel van buitenaf komt via je account binnen. Landing: reken je soevereiniteit niet af in "is dit Europees", maar in de langste time-to-exit in je stack. Staat dat getal bij je container, dan heb je niets gemeten.',
  },

  // ---- Epiloog ----
  {
    Component: Slide21,
    steps: 1,
    notes:
      "Vier stappen, maar het gaat om één besef: je weet pas hoe vast je zit als je het een keer probeert. De eerste drie brengen het in beeld (waar zit je vast, wat draait al in een container, staat je infra in code), maar de vierde maakt het meetbaar: zet je laatste productie-backup terug bij een tweede provider en klok de tijd. Dat getal is je time-to-exit, en de meesten kennen het niet. Heb je geen backup buiten je provider? Dan is dat het eerste wat je je realiseert: bij een bevroren account begint je exit bij een backup die al buiten de deur ligt. Concreet om mee te geven aan de zaal: één dag dit jaar, één service, een tweede provider. Niet om te verhuizen, maar om te wéten waar je staat.",
  },
  {
    Component: Slide22,
    notes:
      "De demo-code staat op GitHub. Dat is Microsoft. Ja, ironisch, en laat die ironie even landen. Maar precies dáár zit het punt: porteerbare code betekent dat de keuze open blijft. Komt er een beter of vrijer alternatief, dan kan het mee, naar Forgejo of waar dan ook. Het label van de host doet er niet toe, de porteerbaarheid wel. Dat is keuzevrijheid, de hele boodschap in drie woorden.",
  },
  {
    Component: SlideClosing,
    notes:
      'Slotwoord, mic-drop. Laat het even hangen: dit is waar alles naartoe werkte. Niet "Europees kiezen", niet soevereiniteit als doel, maar keuzevrijheid. Zeg het rustig, één woord, en klik dan door naar de meetlat-vraag die de hele Q&A blijft staan. Die vraag maakt dit woord meetbaar: keuzevrijheid is geen gevoel maar weken en euro.',
  },
  {
    Component: Slide23,
    notes:
      "Dit scherm staat de hele Q&A aan; de meetlat-vraag blijft staan. Bedank kort, wijs op de links (demo-repo, Kamal, european-alternatives.eu) en geef de vraag mee aan de rest van de avond. Q&A-voorbereiding:\n\n1. \"AWS heeft nu een European Sovereign Cloud, is je titel niet achterhaald?\" Andere vlag op hetzelfde moederbedrijf; de Carniaux-quote onder ede ging exact hierover. Een sovereign cloud is een bestemming, geen keuzevrijheid.\n2. \"Het EU-US Data Privacy Framework regelt dit toch?\" Schrems I en II bewijzen dat zo'n besluit aan één rechtszaak of presidentieel besluit hangt. Juridische paraplu's klappen; architectuur niet. Check de actuele DPF-status vlak voor de avond.\n3. \"Jij werkt toch met Scaleway?\" Klopt. En juist daarom is de eerlijke lijn: alles wat ik zei geldt óók tegen Scaleway; daarom eindigt de demo met -d hetzner. De presentatie zelf is stateless, dus de exit is er seconden; bij een app met echte state meet je het net zo (data, identiteit).\n4. \"Je opent met een bevroren account, maar pg_dump vereist een werkend account.\" Onderscheid vrijwillige en gedwongen exit: bij de tweede begint je exit bij een backup die al buiten je provider ligt. Ligt je enige dump bij dezelfde provider, dan is je time-to-exit oneindig.\n5. \"Egress bij exit is sinds 2024 gratis, klopt je verdienmodel-punt nog?\" Klopt voor de eenmalige exit onder voorwaarden; de rente zit in doorlopende egress, dual-run tijdens migratie en dagelijks verkeer.\n6. \"Waarom koos het Rijk Duits STACKIT en geen Nederlandse provider?\" Precies de these: de exitclausule telt, de vlag niet.\n7. \"Al je cases zijn successen; wie zijn exit verprutste blogt daar niet over.\" Toegeven en omdraaien: klopt, en juist daarom is meten belangrijker dan verhuizen. De cases bewijzen dat het kán en wat het kost per laag, niet dat iedereen moet.\n8. \"Mistral heeft zelf een Microsoft-deal; hoe soeverein zijn open weights?\" Zelfde meetlat: open weights verhuizen naar een andere host in uren; een fine-tune bij een closed provider krijg je nooit mee. Diepte is aan de sprekers hierna.",
  },
  {
    Component: SlideThanks,
    notes:
      'Afsluiter, helemaal aan het eind. Bedank de zaal en breng de kernboodschap nog een keer: keuzevrijheid is geen vlag maar een eigenschap van je architectuur. Kort en warm.',
  },

  // ---- Bijlage · reserveslides voor de Q&A ----
  {
    Component: Slide16,
    notes:
      "Loop de lagen langs, niet als checklist maar om te laten zien wat er al klaarligt. Linkerkolom is waar je nu waarschijnlijk zit, rechterkolom de open standaard; groen betekent dat die standaard al bestaat en je alleen nog de provider hoeft te kiezen. Observability als illustratie van wat afhankelijkheid kan kosten: Coinbase betaalde Datadog naar verluidt $65 miljoen voor één jaar (2021); het bedrag komt uit een Datadog earnings call waar de klant niet bij naam werd genoemd, de identificatie is breed gerapporteerd maar afgeleid, vandaar \"naar verluidt\". DNS-rij: DNS4EU draait op Knot Resolver, open source van CZ.NIC, 100% EU-gehost. Bronnen: newsletter.pragmaticengineer.com · whalebone.io/dns4eu",
  },
  {
    Component: Slide18,
    notes:
      "Eerlijk zijn, en deze slide werkt juist omdat hij niet klapt; die eerlijkheid is zelf het bewustwordingspunt. Kleinere community, minder managed services, en benoem de ops-kanttekening expliciet: managed services zijn een ops-team dat je huurt; zonder hen moet je dat zelf kunnen of inhuren. Dat is het echte bezwaar van elke IT-manager in de zaal, en het maakt de besparingscases juist geloofwaardiger (die bedrijven namen die ops-taak bewust terug). Maar voor een standaard cloud-native stack is het verschil klein en het wordt kleiner. Brug naar de afsluiter: de alternatieven zijn echt, met eerlijke kanttekeningen, en het is allang geen niche meer.",
  },
  {
    Component: Slide17,
    steps: 1,
    notes:
      "Vier plekken waar de keuze tussen vast en vrij valt; breng het als herkenning, niet als recept. Voor elke laag ligt het open alternatief allang klaar: open standaarden (S3 API, PostgreSQL, K8s), config via environment variables (twelve-factor), infrastructure as code (Terraform/Pulumi), stateless applicaties. Het besef voor de zaal: elke keer dat iets tegen een provider-SDK wordt gebouwd, is de binding een keuze, want het open equivalent bestaat al. Identiteit maakt dat tastbaar: wie tegen OIDC/OAuth2 werkt in plaats van de Cognito- of Entra-SDK houdt de provider inwisselbaar (Keycloak van Red Hat/CNCF, of het Zwitserse Zitadel). En de wet beweegt mee: de Data Act werkt nu al, alle drie de hyperscalers schrapten begin 2024 hun exit-egress-kosten, en vanaf januari 2027 zijn switching fees volledig verboden. Veelzeggend: wie porteerbaar bouwt, heeft die wet niet eens nodig. Bronnen: aws.amazon.com/blogs/aws · european-alternatives.eu",
  },
  {
    Component: SlideBronnen,
    notes:
      "Bronvermelding, puur naslag. Alleen tonen als iemand in de Q&A om bronnen vraagt; niet vertellen. Drie kolommen: jurisdictie en wet, cases en cijfers, en beleid/normen/onderzoek. De volledige bronnenlijst met exacte links staat in de spreektekst.",
  },
]
