import { Slide, Reveal, Punchline, Icon } from '../components/ui.jsx'

const layers = [
  {
    icon: 'database',
    tag: 'state · je data',
    title: 'Verhuist niet mee',
    text: 'Een container is met opzet stateless, daarom tilt hij zo over. Je database, object storage, queues en zoekindex blijven staan. Dat is geen docker run, dat is een migratie met downtime en een terugrol-plan.',
  },
  {
    icon: 'lock',
    tag: 'identiteit · IAM',
    title: 'Herschrijf je, niet exporteren',
    text: 'Je hele autorisatiemodel is geschreven in de taal van je provider: rollen, policies, service accounts. Dat exporteer je niet, dat herschrijf je. En zolang dat niet klaar is, ben je er niet weg.',
  },
  {
    icon: 'scale',
    tag: 'coercion · jurisdictie',
    title: 'Wie kan je dwingen?',
    text: 'De vraag die niemand stelt: wie kan je provider een bevel geven? Eén moederbedrijf, één jurisdictie, één wet met extraterritoriale reach. Minder partijen aan die knoppen is minder dat buiten jouw wil kan gebeuren.',
  },
]

export default function SlideContainer() {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 12 }}>De container is het lokaas</h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ fontSize: 19, marginBottom: 28, maxWidth: 1000 }}>
          Het makkelijke deel zat nooit vast. Portabiliteit woont in drie dingen die je niet kunt{' '}
          <span className="mono accent">docker run</span>.
        </p>
      </Reveal>
      <div className="cards three">
        {layers.map((l, k) => (
          <Reveal key={l.title} i={3 + k} className="card">
            <div className="icon red-bg">
              <Icon name={l.icon} />
            </div>
            <div className="card-tag" style={{ color: 'var(--red)' }}>{l.tag}</div>
            <h3 style={{ fontSize: 19 }}>{l.title}</h3>
            <p style={{ fontSize: 14.5 }}>{l.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={7} sub="Soevereiniteit kies je niet. Het is een bijproduct van waar je state, je identiteit en je jurisdictie liggen.">
        Verhuist het met <span className="mono">docker run</span>, dan was het <span className="gold">nooit je lock-in.</span>
      </Punchline>
    </Slide>
  )
}
