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
import Slide13 from './Slide13.jsx'
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

export const slides = [
  {
    Component: Slide01,
    notes:
      'Welkom. De titel is letterlijk de stelling van vandaag: een regio die "eu" heet, maakt je cloud nog niet Europees. Drie delen: waarom keuzevrijheid waarde heeft, wie zichzelf die vrijheid al gaf, en een demo.',
  },
  {
    Component: Slide02,
    notes:
      'Korte intro. Directeur bij XPRTZ, IT-dienstverlener uit Utrecht. Getrouwd, twee kinderen. Sport in de gym en hardloop wat. En ik bak mijn eigen brood. Vandaag praat ik niet als verkoper, maar als iemand die zelf software bouwt en draait op een Europese cloud. Waarom dat een architectuurkeuze was en geen politieke, daar gaat deze talk over.',
  },
  {
    Component: Slide03,
    notes:
      'Even stil laten vallen. Handen hoeven niet omhoog — het punt is dat bijna niemand dit ooit bewust besloten heeft. De default heeft gekozen, niet jij.',
  },
  {
    Component: Slide04,
    notes:
      'Lock-in begint niet bij contractonderhandelingen. Het begint bij "aws configure" in een README, een collega die het al kende, een tutorial die het voordeed. Niemand zei nee — maar niemand zei ja.',
  },
  {
    Component: Slide05,
    notes:
      'Lock-in is geen abstract begrip, het zit in concrete keuzes. DynamoDB: gekozen omdat Postgres "te veel werk" leek; nu kost migratie maanden. IAM: rollen zo diep verweven dat overstappen bijna onmogelijk is. Egress: data eruit halen is zo duur dat weggaan financieel onhaalbaar wordt. Geen toeval — zo werkt het model. En geen AWS-bashing: Azure en Google doen exact hetzelfde.',
  },
  {
    Component: Slide06,
    notes:
      'Drie gevallen uit het afgelopen jaar. ICC-aanklager verloor zijn Microsoft-account na een Trump-sanctie; de ICC stapte daarna over op OpenDesk. FTM nam afscheid van Cloudflare — niet om een dreiging, maar om de leverancier zelf. En Microsoft Frankrijk verklaarde onder ede dat het geen garantie kan geven dat Europese data veilig is voor Amerikaanse autoriteiten.',
  },
  {
    Component: Slide07,
    notes:
      'De naam zegt "eu", maar alleen de servers staan in Europa. Het bedrijf zit in Seattle, de wet in Washington (CLOUD Act, FISA 702). Voor jouw data telt juridisch maar één plek — en dat is niet Dublin.',
  },
  {
    Component: Slide08,
    notes:
      'Solvinity is het bedrijf achter DigiD — iedereen in deze zaal gebruikt het. 2025: Amsterdam en J&V kozen er bewust voor, juist om Amerikaanse afhankelijkheid te vermijden. November 2025: Kyndryl (ex-IBM) wil Solvinity overnemen — de soevereine keuze zou opeens Amerikaans worden. EZK blokkeerde de overname. De les: een leverancier kan van eigenaar wisselen. Het enige wat je echt in de hand hebt, is of je kunt vertrekken. Porteerbaar blijven dus.',
  },
  {
    Component: Slide09,
    notes:
      'De kernzin van de talk. Soevereiniteit als doel leidt tot vlaggetjes-denken. Keuzevrijheid als doel leidt tot goede architectuur — en soevereiniteit krijg je er gratis bij.',
  },
  {
    Component: Slide10,
    notes:
      'DHH: ruim tien jaar AWS, toen cloud-exit naar eigen hardware — anderhalf miljoen dollar besparing per jaar. Let op: niet naar een Europese cloud, naar eigen infra. Dat is precies het punt: het was zíjn keuze. En hij bouwde Kamal, het deploy-tool uit de demo straks.',
  },
  {
    Component: Slide11,
    notes:
      'Kelsey Hightower vat het samen: kunnen bewegen zonder toestemming ís een vorm van soevereiniteit. Niet politiek, maar praktisch.',
  },
  {
    Component: Slide12,
    notes:
      'Jeff Geerling over zijn vaatwasser die een cloud-account eist. Grappig voorbeeld, serieus principe: geforceerde cloud-afhankelijkheid voor iets dat prima zelfstandig werkt. Lokaal eerst, cloud als keuze — of het nu je vaatwasser is of je productie-database.',
  },
  {
    Component: Slide13,
    notes:
      'The Firewall, opgericht door Eric Smit (FTM), spande een rechtszaak aan om de Solvinity-overname tegen te houden. Ze kiezen bewust voor duurder en onhandiger, in ruil voor onafhankelijkheid. En ze zijn eerlijk over de grens: hun banken zijn volledig Big Tech-afhankelijk — daar is simpelweg geen keuze.',
  },
  {
    Component: Slide14,
    notes:
      'Van een bouwbedrijfje van 80 man (37signals) tot Airbus, DNB en de Rijksoverheid: de beweging is breed. Let op de exitclausule in het STACKIT-contract — porteerbaarheid wordt contractueel vastgelegd. En niemand deed dit omdat het moest: het waren allemaal keuzes.',
  },
  {
    Component: Slide15,
    notes:
      'EU Tech Sovereignty Package (3 juni 2026): open source centraal in EU-beleid, voorstel Cloud and AI Development Act, €2 miljard voor open source. De cijfers laten zien waarom: 80% van de digitale technologie geïmporteerd, 70% van de AI-modellen uit de VS. EuroStack raamt €300 miljard voor een eigen Europese stack. Beleid, budget en richting.',
  },
  {
    Component: Slide16,
    notes:
      'Loop de lagen langs. De linkerkolom is waar je nu waarschijnlijk zit, de rechterkolom is de open standaard. Groen betekent: de standaard bestaat al, je hoeft alleen de provider te kiezen. Voor bijna elke laag is dat vandaag al realistisch.',
  },
  {
    Component: Slide17,
    notes:
      'Vier bouwprincipes: open standaarden (S3 API, PostgreSQL, K8s), config via environment variables (twelve-factor), infrastructure as code (Terraform/Pulumi), stateless applicaties. De EU Data Act verplicht providers om overstappen te faciliteren — maar bouw alsof die wet niet bestaat, dan heb je hem ook niet nodig.',
  },
  {
    Component: Slide18,
    notes:
      'Eerlijk zijn: kleinere community, minder managed services, minder StackOverflow-antwoorden, Microsoft-integraties soms stroever. Maar voor een standaard cloud-native stack is het verschil klein en het wordt kleiner. En wie op open standaarden bouwt, kan ook altijd terug.',
  },
  {
    Component: Slide19,
    notes:
      'De opzet van de demo: dezelfde Dockerfile, dezelfde app, hetzelfde deploy-tool (Kamal). Het enige verschil tussen Azure en Scaleway: twee regels config. Scaleway is het voorbeeld — het punt is dat het elke provider had kunnen zijn.',
  },
  {
    Component: Slide20,
    notes:
      'Dit is een opgenomen, gescripte run van exact deze commando\'s — bewust geen live demo, dus hier kan niets misgaan. git diff toont de twee regels (server + registry), daarna doet "kamal deploy" de rest: image bouwen, pushen naar de Scaleway-registry, health checks, traffic switchen. Klaar in minder dan een minuut.',
  },
  {
    Component: Slide21,
    notes:
      'Drie concrete stappen voor morgen: audit je dependencies (waar zit je vast?), containerize het volgende project (niet alles in één keer), en zet je infra in code. Dan is een provider-wissel een pull request, geen migratieproject.',
  },
  {
    Component: Slide22,
    notes:
      'De demo-code staat op GitHub. Dat is Microsoft. Ja, ironisch. Maar dat is precies het punt: ik zit er niet aan vast. Komt er een beter, vrijer alternatief, dan push ik naar Forgejo of waar dan ook. De code is porteerbaar, dus de keuze blijft van mij. Zo werkt het — de hele boodschap in drie woorden.',
  },
  {
    Component: Slide23,
    notes:
      'Bedankt! Links voor wie verder wil: de demo-repo, Kamal en european-alternatives.eu voor het vinden van Europese alternatieven per categorie.',
  },
]
