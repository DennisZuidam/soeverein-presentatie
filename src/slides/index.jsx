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

// Verhaallijn in vier delen:
//   Deel 1 — waarom keuzevrijheid waarde heeft (het probleem)
//   Deel 2 — wie zichzelf al de vrijheid gaf (de voorbeelden)
//   Deel 3 — zo bouw je voor keuzevrijheid (het engineering-deel)
//   Deel 4 — demo + afsluiting
export const slides = [
  {
    Component: Slide01,
    notes:
      'Welkom. De titel is letterlijk de stelling van vandaag: een regio die "eu" heet, maakt je cloud nog niet Europees. Vier delen: waarom keuzevrijheid waarde heeft, wie zichzelf die vrijheid al gaf, hoe je ervoor bouwt, en een demo.',
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
      'Lock-in is geen abstract begrip, het zit in concrete keuzes. DynamoDB: gekozen omdat Postgres "te veel werk" leek; nu kost migratie maanden — single-table design is gemodelleerd rond je query-patronen, veranderen die, dan moet de hele tabel op de schop. IAM: rollen zo diep verweven dat overstappen bijna onmogelijk is. Egress: AWS rekent $0,09/GB na 100 GB gratis; bij Hetzner zit 20 TB per server inbegrepen. 300 TB/maand ≈ $21.000 bij AWS, vrijwel €0 bij Hetzner/Scaleway. Geen toeval — zo werkt het model. En geen AWS-bashing: Azure en Google doen exact hetzelfde. — Bronnen: wz-it.com/en/blog/aws-egress-fees-vs-hetzner-traffic-costs · dev.to/gpuperhour (44 providers vergeleken)',
  },
  {
    Component: Slide06,
    notes:
      'Drie gevallen uit één jaar. ICC-aanklager verloor zijn Microsoft-account na een Trump-sanctie; de ICC stapte daarna over op OpenDesk. FTM nam afscheid van Cloudflare — niet om een dreiging, maar om de leverancier zelf. En in de Franse Senaat, 10 juni 2025: senator Simon Uzenat vroeg Anton Carniaux (Microsoft France) of hij kon garanderen dat Franse data nooit zonder Franse toestemming aan de VS wordt overgedragen. Antwoord onder ede: "Non, je ne peux pas le garantir" — en: "Als een Amerikaanse rechterlijke beslissing ons dwingt, moeten we de data overdragen." — Bronnen: senat.fr/compte-rendu-commissions/20250609/ce_commande_publique.html · actuia.com (Engelstalig verslag)',
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
    Component: SlideTwoMoves,
    notes:
      'Belangrijk onderscheid voordat de voorbeelden komen, want deze twee worden constant door elkaar gehaald. Europees kiezen is een bestemming: je verhuist je afhankelijkheid naar een andere vlag. Zonder porteerbaarheid sta je daar net zo vast — Solvinity liet zien dat ook een Europese keuze van eigenaar kan wisselen. Keuzevrijheid is een eigenschap van je architectuur: containers, open standaarden, porteerbare data. Die eigenschap werkt voor elke bestemming, ook een Europese — en maakt de Europese keuze pas veilig, want je kunt altijd weer weg. De voorbeelden hierna doen soms het één, soms het ander, soms allebei; de labels op de kaarten laten dat zien.',
  },
  {
    Component: Slide10,
    notes:
      'DHH: ruim tien jaar AWS, toen cloud-exit naar eigen hardware. De cijfers: infra-rekening van $3,2M naar minder dan $1M per jaar, ruim $10M besparing over vijf jaar. De S3-exit: 18 petabyte naar een dual-datacenter Pure Storage-setup — $1,5M eenmalig, minder dan $200K per jaar beheer, tegenover ~$1,5M per jaar bij S3. Zomer 2025 ging het complete AWS-account dicht. Let op: niet naar een Europese cloud, naar eigen infra — het was zíjn keuze. En hij bouwde Kamal, het deploy-tool uit de demo straks. — Bronnen: world.hey.com/dhh/our-cloud-exit-savings-will-now-top-ten-million-over-five-years-c7d9b5bd · theregister.com/2025/05/09/37signals_cloud_repatriation_storage_savings',
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
    Component: SlidePrime,
    notes:
      'Het Prime Video VQA-team (audio/video-kwaliteitsmonitoring) bouwde volgens het boekje: Step Functions voor orkestratie, Lambda, S3 als tussenopslag voor videoframes. Het liep vast op 5% van de verwachte load: Step Functions rekent per state-transitie en het systeem deed er meerdere per seconde stream, plus hoge S3-kosten voor de frames. Herbouwd als één proces in één ECS-task, frames in-memory: ruim 90% goedkoper én beter schaalbaar. De les is niet "serverless is slecht" — de les is dat zelfs AWS-teams hun eigen defaults heroverwegen als de architectuur niet past. Kies de architectuur, niet de default. — Bronnen: Prime Video techblog "Scaling up the audio/video monitoring service and reducing costs by 90%" (maart 2023) · thestack.technology/amazon-prime-video-microservices-monolith',
  },
  {
    Component: Slide14,
    notes:
      'Van een softwarebedrijf van 80 man (37signals) tot Airbus, DNB en de Rijksoverheid: de beweging is breed. De labels laten het onderscheid van de vorige slide zien: de meesten kozen een Europese bestemming; 37signals bouwde keuzevrijheid. De Rijksoverheid deed allebei — Europese bestemming én een contractuele exitclausule bij overname buiten de EER. Dat is porteerbaarheid juridisch vastgelegd. En niemand deed dit omdat het moest: het waren allemaal keuzes.',
  },
  {
    Component: SlideHow,
    notes:
      'De concrete techniek, want "ze stapten over" is geen recept. 37signals: apps zaten al in Docker, dus de cloud-exit was vooral orkestratie — ze bouwden Kamal (open source) als vervanger, zetten Percona MySQL 8 op bare metal in plaats van RDS (met cron-based backups), zero-touch provisioning en full-disk encryption op eigen Dell-hardware, en later 18 PB van S3 naar dual-datacenter Pure Storage. ICC: openDesk van ZenDiS (Duitse overheids-organisatie) — Collabora voor documenten in de browser, Nextcloud voor bestanden, Open-Xchange voor mail/groupware, OpenProject voor projecten. FTM + De Correspondent: site en app waren al eigen bouw op Europese servers met Matomo en Metabase; nu vervangen ze stapsgewijs Slack, ActiveCampaign, 1Password, Shopify en Google Workspace — en publiceren elke afweging. — Bronnen: dev.37signals.com/bringing-our-apps-back-home · openproject.org/blog/digital-sovereignty-government-germany-opendesk · ftm.nl/artikelen/follow-the-money-en-de-correspondent-willen-onaf-hankelijker-worden-van-amerikaanse-tech-en-iedereen-mag-meekijken',
  },
  {
    Component: Slide15,
    notes:
      'EU Tech Sovereignty Package (3 juni 2026): open source centraal in EU-beleid, voorstel Cloud and AI Development Act, €2 miljard voor open source. De cijfers laten zien waarom: 80% van de digitale technologie geïmporteerd, 70% van de AI-modellen uit de VS. Voor de zaal: porteerbaar kunnen deployen wordt letterlijk een aanbestedingscriterium — dat is jouw skill die ineens geld waard is.',
  },
  {
    Component: SlideContainer,
    notes:
      'Nu het engineering-deel. De container is het hele verhaal in één artefact: OCI is een open standaard, dus elke runtime, registry en orchestrator kan ermee overweg. Dezelfde image draait op je laptop, op Azure, op Scaleway, op de server in de meterkast. En hetzelfde geldt voor data: de S3-API is de standaard, dus de wissel naar Scaleway Object Storage (of MinIO, of Hetzner) is letterlijk één regel — endpoint_url aanpassen. Dezelfde aws-cli en rclone werken ongewijzigd. — Bron: scaleway.com/en/docs/object-storage/api-cli/object-storage-aws-cli',
  },
  {
    Component: Slide16,
    notes:
      'Loop de lagen langs. De linkerkolom is waar je nu waarschijnlijk zit, de rechterkolom is de open standaard. Groen betekent: de standaard bestaat al, je hoeft alleen de provider te kiezen. Observability als illustratie: Coinbase betaalde Datadog $65 miljoen voor één jaar (2021) — ontdekt via een earnings call en teruggerekend door een JPMorgan-analist. Ze wilden in-house gaan voor "full control and ownership", Datadog redde het contract met een deal. DNS-rij: DNS4EU draait op Knot Resolver 6, open source van CZ.NIC — dezelfde software die delen van Cloudflare aandrijft. 100% EU-gehost, anycast dat Europese geo-nabijheid prioriteert. — Bronnen: newsletter.pragmaticengineer.com/p/datadogs-65m-year-customer-mystery · whalebone.io/dns4eu',
  },
  {
    Component: Slide17,
    notes:
      'Vier bouwprincipes: open standaarden (S3 API, PostgreSQL, K8s), config via environment variables (twelve-factor), infrastructure as code (Terraform/Pulumi), stateless applicaties. Voor identity: bouw tegen OIDC/OAuth2 in plaats van Cognito/Entra-SDK\'s — dan is de provider inwisselbaar (Keycloak van Red Hat/CNCF, of het Zwitserse Zitadel). De Data Act werkt nu al: alle drie de hyperscalers schrapten begin 2024 hun exit-egress-kosten (Google januari, AWS maart, Azure maart — al eist Azure dat je je account binnen 60 dagen sluit). Vanaf januari 2027 zijn switching fees volledig verboden. Maar bouw alsof die wet niet bestaat, dan heb je hem ook niet nodig. — Bronnen: aws.amazon.com/blogs/aws/free-data-transfer-out-to-internet-when-moving-out-of-aws · ciodive.com (Azure) · european-alternatives.eu/alternative-to/auth0',
  },
  {
    Component: SlidePayoff,
    notes:
      'Dit is waarom je het doet, los van soevereiniteit. Onderhandelingspositie: wie kan vertrekken hoeft nooit te smeken. Betere architectuur: porteerbaar bouwen dwingt dezelfde discipline af als testbaar bouwen. Reproduceerbaarheid: één artefact van laptop tot productie. En soevereiniteit krijg je er gratis bij — als bijproduct.',
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
      'Vier concrete stappen voor morgen: audit je dependencies (waar zit je vast?), containerize het volgende project (niet alles in één keer), zet je infra in code, en oefen je exit — deploy in CI ook eens naar een tweede provider. Een exit die je nooit geoefend hebt bestaat niet, net als een backup die je nooit hebt teruggezet.',
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
