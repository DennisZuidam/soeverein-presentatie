import Slide01 from './Slide01.jsx'
import Slide02 from './Slide02.jsx'
import Slide03 from './Slide03.jsx'
import Slide04 from './Slide04.jsx'
import Slide05 from './Slide05.jsx'
import Slide06 from './Slide06.jsx'
import Slide07 from './Slide07.jsx'
import Slide08 from './Slide08.jsx'
import Slide09 from './Slide09.jsx'
import Slide10 from './Slide10.jsx'
import Slide11 from './Slide11.jsx'
import Slide12 from './Slide12.jsx'
import SlideContainer from './Slide13.jsx'
import Slide14 from './Slide14.jsx'
import Slide15 from './Slide15.jsx'
import Slide16 from './Slide16.jsx'
import Slide17 from './Slide17.jsx'
import Slide18 from './Slide18.jsx'
import Slide19 from './Slide19.jsx'
import Slide20 from './Slide20.jsx'
import Slide21 from './Slide21.jsx'
import Slide22 from './Slide22.jsx'
import Slide23 from './Slide23.jsx'
import SlidePayoff from './Slide24.jsx'
import SlidePrime from './Slide25.jsx'
import SlideTwoMoves from './Slide26.jsx'
import SlideHow from './Slide27.jsx'
import SlideAiGate from './Slide28.jsx'
import SlideDivider3 from './Slide29.jsx'
import SlideDivider1 from './Slide30.jsx'
import SlideDivider2 from './Slide31.jsx'
import SlideLockinLoan from './Slide32.jsx'
import SlideExamples from './Slide33.jsx'
import SlideSovereigntyNumber from './Slide34.jsx'
import SlideScorecard from './Slide35.jsx'

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
      'Welkom. De titel is letterlijk de stelling van vandaag: een regio die "eu" heet, maakt je cloud nog niet Europees. Drie delen: waarom je vastzit, wie zich al bevrijdde, en hoe je het zelf bouwt (met de demo als climax). Daarna een korte epiloog.',
  },
  {
    Component: Slide02,
    notes:
      'Open koud en persoonlijk. Begin NIET met je cv, begin met het scenario op de slide: een account dat zomaar dichtgaat. Laat dat even hangen.\n\n[JOUW ANEKDOTE, vul hier een echt, waargebeurd moment in, ~20 tot 30 seconden]: een keer dat een provider iets veranderde, afsloot of fors duurder maakte en jij het moest oplossen; een migratie die maanden kostte door één managed service; een egress-rekening waar je van schrok; of het moment dat je besloot je eigen stack op Europese cloud te zetten en waarom. Eén concreet beeld, eindigend op: toen wist ik dat ik hier niet zomaar vanaf kon zonder pijn. Verzin niets; heb je geen scherp moment, vertel dan eerlijk waarom je zelf op Europese cloud bent gaan bouwen.\n\nDaarna kort de framing: directeur bij XPRTZ, ik bouw en draai onze eigen software op een Europese cloud, maar ik sta hier niet als activist en kom niemand bekeren. Dit is een risicoverhaal. Teaser: de vraag is niet Amerikaans of Europees, de vraag is of je überhaupt weg kunt. De container is straks het makkelijke deel; waar je vastzit is je data, je identiteit en het aantal partijen dat je provider kan dwingen.',
  },
  {
    Component: Slide03,
    notes:
      'Even stil laten vallen. Handen hoeven niet omhoog, het punt is dat bijna niemand dit ooit bewust besloten heeft. De default heeft gekozen, niet jij.',
  },

  // ---- Deel 1 · Waarom je vastzit ----
  {
    Component: SlideDivider1,
    notes:
      'Divider die Deel 1 opent. Op de slide alleen de kicker, het grote statement en de subline. Kernthese meteen neergezet: lock-in zit niet in de container maar in state, identiteit en coercion points. Toon: geen verwijt, wel het ongemakkelijke inzicht dat de keuze nooit bewust is gemaakt.',
  },
  {
    Component: Slide04,
    notes:
      'Lock-in begint niet bij contractonderhandelingen. Het begint bij "aws configure" in een README, een collega die het al kende, een tutorial die het voordeed. Niemand zei nee, maar niemand zei ja.',
  },
  {
    Component: Slide05,
    notes:
      'Lock-in is geen abstract begrip, het zit in concrete keuzes. DynamoDB: gekozen omdat Postgres "te veel werk" leek; nu kost migratie maanden, single-table design is gemodelleerd rond je query-patronen, veranderen die dan moet de hele tabel op de schop. IAM: rollen zo diep verweven dat overstappen bijna onmogelijk is. Egress: AWS rekent $0,09/GB na 100 GB gratis; bij Hetzner zit 20 TB per server inbegrepen. 300 TB/maand is ~$21.000 bij AWS, vrijwel €0 bij Hetzner/Scaleway. Geen toeval, zo werkt het model. En geen AWS-bashing: Azure en Google doen exact hetzelfde. Bronnen: wz-it.com/en/blog/aws-egress-fees-vs-hetzner-traffic-costs · dev.to/gpuperhour',
  },
  {
    Component: SlideLockinLoan,
    notes:
      'Het verrassende, nuchtere punt: lock-in is geen zonde maar een lening. Soms is lenen precies goed (startup, snelheid, weinig state). De vraag is niet "vermijd lock-in" maar "ken je de rente en weet je wanneer de aflossing komt". Links slim lenen, rechts wanneer de rekening komt. Kernidee: reken je exit door vóór je instapt. En de rente betaal je in state, identiteit en coercion points, niet in containers. Dit koopt geloofwaardigheid: je bent geen dogmaticus.',
  },
  {
    Component: Slide06,
    notes:
      'Drie gevallen uit één jaar. ICC-aanklager verloor zijn Microsoft-account na een Trump-sanctie; de ICC stapte daarna over op OpenDesk. FTM nam afscheid van Cloudflare, niet om een dreiging maar om de leverancier zelf. En in de Franse Senaat, 10 juni 2025: senator Simon Uzenat vroeg Anton Carniaux (Microsoft France) of hij kon garanderen dat Franse data nooit zonder Franse toestemming aan de VS wordt overgedragen. Antwoord onder ede: "Non, je ne peux pas le garantir", en: "Als een Amerikaanse rechterlijke beslissing ons dwingt, moeten we de data overdragen." Bronnen: senat.fr/compte-rendu-commissions/20250609/ce_commande_publique.html · actuia.com',
  },
  {
    Component: Slide07,
    notes:
      'De naam zegt "eu", maar alleen de servers staan in Europa. Het bedrijf zit in Seattle, de wet in Washington (CLOUD Act, FISA 702). Voor jouw data telt juridisch maar één plek, en dat is niet Dublin.',
  },
  {
    Component: Slide08,
    notes:
      'Solvinity is het bedrijf achter DigiD, iedereen in deze zaal gebruikt het. 2025: Amsterdam en J&V kozen er bewust voor, juist om Amerikaanse afhankelijkheid te vermijden. November 2025: Kyndryl (ex-IBM) wil Solvinity overnemen, de soevereine keuze zou opeens Amerikaans worden. EZK blokkeerde de overname. De les: een leverancier kan van eigenaar wisselen. Het enige wat je echt in de hand hebt, is of je kunt vertrekken.',
  },
  {
    Component: SlideAiGate,
    notes:
      'De nieuwste rung op dezelfde ladder, en de meest actuele. Eerst zagen we dat je data onder de CLOUD Act valt, toen dat een account zomaar dicht kan (ICC). Nu reikt dezelfde jurisdictie tot de AI-modellen zelf. Executive Order 14409, "Promoting Advanced Artificial Intelligence Innovation and Security", 2 juni 2026: de NSA-directeur bepaalt via een geheime benchmark wanneer een model een "covered frontier model" is, en ontwikkelaars mogen de Amerikaanse overheid tot 30 dagen vóór release toegang geven. Blijf eerlijk: het is nu nog vrijwillig, geen verplichte licensing, zeg dus "de VS bouwt een poort", niet "de VS blokkeert AI". De AI Diffusion Rule (jan 2025) is in mei 2025 ingetrokken; noem die alleen als richting. Brug: het antwoord is hetzelfde principe als bij de S3-API, open in plaats van closed. Open-weight modellen zoals Mistral zijn voor AI wat open standaarden zijn voor infra. Haakje: deze EO is van 2 juni, het EU-pakket van 3 juni, één dag ertussen (komt terug bij "de wind in je rug"). Bronnen: whitehouse.gov/presidential-actions/2026/06 · skadden.com · ropesgray.com',
  },
  {
    Component: Slide09,
    notes:
      'De kernzin van de talk, en de afsluiting van Deel 1. Soevereiniteit als doel leidt tot vlaggetjes-denken. Keuzevrijheid als doel leidt tot goede architectuur, en soevereiniteit krijg je er gratis bij.',
  },

  // ---- Deel 2 · Wie zich al bevrijdde ----
  {
    Component: SlideDivider2,
    notes:
      'Overgang naar Deel 2. Deel 1 was het waarom, vanaf hier gaat het over mensen die het al deden. Toon: geen manifest, een deploylog. Namen lopen van 37signals (tachtig man) tot Airbus, DNB en de Rijksoverheid, groot en klein door elkaar. Rode draad: niemand deed het omdat het moest, het waren keuzes.',
  },
  {
    Component: SlideTwoMoves,
    notes:
      'Belangrijk onderscheid voordat de voorbeelden komen, want deze twee worden constant door elkaar gehaald. Europees kiezen is een bestemming: je verhuist je afhankelijkheid naar een andere vlag. Zonder porteerbaarheid sta je daar net zo vast (Solvinity liet zien dat ook een Europese keuze van eigenaar kan wisselen). Keuzevrijheid is een eigenschap van je architectuur: containers, open standaarden, porteerbare data. Die werkt voor elke bestemming, ook een Europese, en maakt de Europese keuze pas veilig. De voorbeelden hierna doen soms het één, soms het ander, soms allebei.',
  },
  {
    Component: SlideExamples,
    notes:
      'Groot en klein, dezelfde les: de compute verhuist makkelijk, de state is het werk. GEICO: tien jaar public cloud (multi-cloud, Azure de grootste, NIET all-in AWS, dat is fout in veel samenvattingen), rekening 2,5x omhoog, terug naar eigen OpenStack/Kubernetes, 50%+ goedkoper per core (Open Compute Project white paper, 2024). Dropbox: ~500 PB grotendeels (~90%) van S3 naar eigen Magic Pocket, $74,6M bespaard op cost of revenue over 2016-2017 (S-1, 2018). 37signals: apps met Kamal, ~10 PB / ~5 mld objecten uit S3 (18 PB is de Pure Storage-capaciteit), de $10M is DHH zijn eigen 5-jaars projectie. Klein: OneUptime, $38k/mnd AWS naar bare metal (MicroK8s+Ceph), na twee jaar $1,2M/jaar bespaard, 99,993% uptime (goed onderbouwd). Datapult, ~90% lagere kosten met ISO 27001 behouden (zelf-gerapporteerd op Medium, breng voorzichtig). hank.parts, compute/storage/auth moeiteloos naar EU maar vast bij Apple, Google Play en Google Ads, precies de coercion points (The Register, feb 2026). Bronnen: thestack.technology (GEICO) · geekwire.com (Dropbox) · oneuptime.com/blog · theregister.com/2026/02/20',
  },
  {
    Component: Slide14,
    notes:
      'Van een softwarebedrijf van 80 man (37signals) tot Airbus, DNB en de Rijksoverheid: de beweging is breed. De labels laten het onderscheid van de vorige slides zien: de meesten kozen een Europese bestemming, 37signals bouwde keuzevrijheid. De Rijksoverheid deed allebei, Europese bestemming én een contractuele exitclausule bij overname buiten de EER. En niemand deed dit omdat het moest.',
  },
  {
    Component: SlideHow,
    notes:
      'De concrete techniek, want "ze stapten over" is geen recept. 37signals: apps zaten al in Docker, dus de cloud-exit was vooral orkestratie, ze bouwden Kamal (open source), zetten Percona MySQL 8 op bare metal in plaats van RDS, en tilden later ~10 PB van S3 naar dual-datacenter Pure Storage. ICC: openDesk van ZenDiS met Collabora (documenten), Nextcloud (bestanden), Open-Xchange (mail), OpenProject (projecten). FTM + De Correspondent: site en app al eigen bouw op EU-servers met Matomo; nu vervangen ze stapsgewijs Slack, ActiveCampaign, Shopify en Google Workspace, en publiceren elke afweging. Bronnen: dev.37signals.com · openproject.org/blog · ftm.nl',
  },
  {
    Component: SlidePrime,
    notes:
      'Het Prime Video VQA-team bouwde volgens het boekje: Step Functions, Lambda, S3 als tussenopslag. Het liep vast op 5% van de verwachte load (Step Functions rekent per state-transitie, meerdere per seconde stream) plus hoge S3-kosten. Herbouwd als één ECS-task, frames in-memory: ruim 90% goedkoper. De les is niet "serverless is slecht", maar dat zelfs AWS-teams hun eigen defaults heroverwegen als de architectuur niet past. Bron: Prime Video techblog (maart 2023) · thestack.technology',
  },
  {
    Component: Slide10,
    notes:
      'DHH: ruim tien jaar AWS, toen cloud-exit naar eigen hardware. Cijfers: infra van $3,2M naar minder dan $1M per jaar. De S3-exit: ~10 PB / 5 mld objecten uit S3 naar dual-datacenter Pure Storage (18 PB capaciteit), $1,5M eenmalig, <$200K/jaar beheer. Let op: de "$10M over vijf jaar" is DHH zijn eigen projectie, geen audit; gerealiseerd ~$1-2M/jaar. Zomer 2025 ging het complete AWS-account dicht. Niet naar Europese cloud, naar eigen infra, zijn keuze. En hij bouwde Kamal, het deploy-tool uit de demo. Bronnen: world.hey.com/dhh · theregister.com/2025/05/09',
  },
  {
    Component: Slide11,
    notes:
      'Kelsey Hightower vat het samen: kunnen bewegen zonder toestemming ís een vorm van soevereiniteit. Niet politiek, maar praktisch.',
  },
  {
    Component: Slide12,
    notes:
      'Jeff Geerling over zijn vaatwasser die een cloud-account eist. Grappig voorbeeld, serieus principe: geforceerde cloud-afhankelijkheid voor iets dat prima zelfstandig werkt. Lokaal eerst, cloud als keuze, of het nu je vaatwasser is of je productie-database.',
  },
  {
    Component: Slide15,
    notes:
      'EU Tech Sovereignty Package (3 juni 2026): open source centraal in EU-beleid, voorstel Cloud and AI Development Act, €2 miljard voor open source. De cijfers laten zien waarom: 80% van de digitale technologie geïmporteerd, 70% van de AI-modellen uit de VS. Callback naar de NSA-poort: die EO is van 2 juni, dit pakket van 3 juni, twee grootmachten die in dezelfde week hun AI-soevereiniteit afbakenen, de één met een poort, de ander met open source. Voor de zaal: porteerbaar kunnen deployen wordt letterlijk een aanbestedingscriterium.',
  },
  {
    Component: Slide16,
    notes:
      'Loop de lagen langs. Linkerkolom is waar je nu waarschijnlijk zit, rechterkolom de open standaard. Groen betekent: de standaard bestaat al, je hoeft alleen de provider te kiezen. Observability als illustratie: Coinbase betaalde Datadog $65 miljoen voor één jaar (2021), ontdekt via een earnings call en teruggerekend door een JPMorgan-analist. DNS-rij: DNS4EU draait op Knot Resolver 6, open source van CZ.NIC, dezelfde software die delen van Cloudflare aandrijft, 100% EU-gehost. Bronnen: newsletter.pragmaticengineer.com · whalebone.io/dns4eu',
  },
  {
    Component: Slide18,
    notes:
      'Eerlijk zijn: kleinere community, minder managed services, minder StackOverflow-antwoorden, Microsoft-integraties soms stroever. Maar voor een standaard cloud-native stack is het verschil klein en het wordt kleiner. En wie op open standaarden bouwt, kan altijd terug. Deze slide sluit Deel 2 af: de alternatieven zijn echt, met eerlijke kanttekeningen.',
  },

  // ---- Deel 3 · Hoe je het zelf bouwt ----
  {
    Component: SlideDivider3,
    notes:
      'Divider Deel 3. Pivot van analyse naar actie, zonder te preken. Plant de kernthese: de container is een avondje werk, de echte lock-in zit in state, identiteit en coercion points. De subline is de agenda voor de rest van het deel. Spreektekst: klaar met waarom en wie; de verleiding is nu "containeriseer alles en je bent vrij", maar de container is het makkelijke deel.',
  },
  {
    Component: SlideContainer,
    notes:
      'De vorige versie zei "de container is je exitstrategie". Te makkelijk. De container is juist het enige stuk dat altijd al porteerbaar was (OCI, elke runtime draait hem). Dat is het lokaas. De echte binding zit op drie plekken zonder commando: state (je data verhuist niet vanzelf), identiteit (je IAM-model is provider-specifiek, je herschrijft het), en coercion points (hoeveel partijen kunnen je provider dwingen). Dat laatste is wat "Europees kiezen" pretendeert op te lossen maar eigenlijk over architectuur gaat. Kernthese: keuzevrijheid telt, niet het label. Bouw zo dat wisselen een keuze blijft, dan krijg je soevereiniteit gratis. Brug: hoe houd je die drie lagen porteerbaar (volgende slide).',
  },
  {
    Component: Slide17,
    notes:
      'Vier bouwprincipes: open standaarden (S3 API, PostgreSQL, K8s), config via environment variables (twelve-factor), infrastructure as code (Terraform/Pulumi), stateless applicaties. Voor identity: bouw tegen OIDC/OAuth2 in plaats van Cognito/Entra-SDK\'s, dan is de provider inwisselbaar (Keycloak van Red Hat/CNCF, of het Zwitserse Zitadel). De Data Act werkt nu al: alle drie de hyperscalers schrapten begin 2024 hun exit-egress-kosten. Vanaf januari 2027 zijn switching fees volledig verboden. Maar bouw alsof die wet niet bestaat, dan heb je hem ook niet nodig. Bronnen: aws.amazon.com/blogs/aws · european-alternatives.eu',
  },
  {
    Component: SlideSovereigntyNumber,
    notes:
      '"Cloud-agnostisch" is een marketingsprookje, niemand is het en niemand hoeft het te zijn. Het bruikbare doel is replaceability: hoe snel en hoe duur kom je los. Maak er twee getallen van, time-to-exit en cost-to-exit, en behandel ze als een SLA die je afdwingt en jaarlijks test (een echte exit-oefening, zoals een chaos-drill). Coercion points is het verrassende punt: een juridisch-geopolitiek getal, geen technisch, en het overrulet al je mooie architectuur. Omkering aan het eind: soevereiniteit is geen doel dat je afvinkt, maar een bijproduct als die exit-getallen laag genoeg zijn.',
  },
  {
    Component: SlidePayoff,
    notes:
      'Dit is waarom je het doet, los van soevereiniteit. Onderhandelingspositie: wie kan vertrekken hoeft nooit te smeken. Betere architectuur: porteerbaar bouwen dwingt dezelfde discipline af als testbaar bouwen. Reproduceerbaarheid: één artefact van laptop tot productie. En soevereiniteit krijg je er gratis bij, als bijproduct.',
  },
  {
    Component: Slide19,
    notes:
      'De demo is uitgebreid: niet alleen de stateless presentatie, maar een echte app plus PostgreSQL van een Amerikaanse provider naar Scaleway nl-ams. De hele pointe: de container is in 8 seconden klaar, de datamigratie duurt 40 minuten. Dat verschil ís de boodschap: de container was nooit je lock-in, je data wel. En dezelfde deploy.yml wijst met één regel ook naar Hetzner of STACKIT. Zie DEMO.md voor het opname-draaiboek.',
  },
  {
    Component: Slide20,
    notes:
      'Opgenomen run, geen live demo. Volgorde: kamal deploy (8,4s, container healthy in nl-ams), dan bewijzen dat de app nog naar us-east-1 praat, dan het echte werk: pg_dump (14 GB) en pg_restore met index-herbouw (38 minuten), cutover naar de nl-ams database, en tot slot git diff die met één regel naar Hetzner wijst. Laat de tijden zien: 8 seconden versus 38 minuten. Zodra public/demo.webm bestaat speelt de slide de echte opname. Zie DEMO.md.',
  },
  {
    Component: SlideScorecard,
    notes:
      'Lees de scorecard van boven naar beneden, bewust oplopend. Compute, registry en DNS reken je af in seconden tot minuten, want die draaien op open standaarden (OCI, DNS). Dat is het deel dat iedereen als "de migratie" ziet, en het is triviaal. De twee onderste rijen doen pijn: bij data is pg_dump niet het probleem maar de operationele realiteit (downtime, volume, extensions, replicatie), en bij identiteit gaat het om het aantal coercion points. Landing: reken je soevereiniteit niet af in "is dit Europees", maar in de langste time-to-exit in je stack. Staat dat getal bij je container, dan heb je niets gemeten.',
  },

  // ---- Epiloog ----
  {
    Component: Slide21,
    notes:
      'Vier concrete stappen voor morgen: audit je dependencies (waar zit je vast?), containerize het volgende project (niet alles in één keer), zet je infra in code, en oefen je exit, deploy in CI ook eens naar een tweede provider. Een exit die je nooit geoefend hebt bestaat niet, net als een backup die je nooit hebt teruggezet.',
  },
  {
    Component: Slide22,
    notes:
      'De demo-code staat op GitHub. Dat is Microsoft. Ja, ironisch. Maar dat is precies het punt: ik zit er niet aan vast. Komt er een beter, vrijer alternatief, dan push ik naar Forgejo of waar dan ook. De code is porteerbaar, dus de keuze blijft van mij. Zo werkt het, de hele boodschap in drie woorden.',
  },
  {
    Component: Slide23,
    notes:
      'Bedankt! Links voor wie verder wil: de demo-repo, Kamal en european-alternatives.eu voor het vinden van Europese alternatieven per categorie.',
  },
]
