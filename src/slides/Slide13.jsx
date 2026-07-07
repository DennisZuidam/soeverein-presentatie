import { Slide, Reveal, Punchline, Icon } from '../components/ui.jsx'

const layers = [
  {
    icon: 'database',
    tag: 'state · je data',
    title: 'Verhuist niet mee',
    text: 'Een container is stateless, daarom til je hem zo over. Je data, storage, queues en indexen blijven staan. Geen docker run, maar een migratie met downtime.',
  },
  {
    icon: 'lock',
    tag: 'identiteit · IAM',
    title: 'Herschrijven, niet exporteren',
    text: 'Je autorisatiemodel spreekt de taal van je provider: rollen, policies, service accounts. Dat exporteer je niet, dat herschrijf je.',
  },
  {
    icon: 'scale',
    tag: 'coercion · jurisdictie',
    title: 'Wie kan je dwingen?',
    text: 'Wie kan je provider een bevel geven? Eén moederbedrijf, één jurisdictie, één wet. Hoe minder partijen aan de knoppen, hoe beter.',
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
          Het makkelijke deel zat nooit vast. De echte binding zit in drie dingen die geen{' '}
          <span className="mono accent">docker run</span> oplost.
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
      <Punchline i={7}>
        Verhuist het met <span className="mono">docker run</span>, dan was het <span className="gold">nooit je lock-in.</span>
      </Punchline>
    </Slide>
  )
}
