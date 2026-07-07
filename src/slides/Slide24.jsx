import { Slide, Reveal, Punchline, Icon } from '../components/ui.jsx'

const wins = [
  {
    icon: 'scale',
    title: 'Onderhandelingspositie',
    text: 'Wie kan vertrekken, hoeft nooit te smeken.',
  },
  {
    icon: 'standard',
    title: 'Betere architectuur',
    text: 'Porteerbaar bouwen maakt je systeem ook testbaar en begrijpelijk.',
  },
  {
    icon: 'box',
    title: 'Reproduceerbaarheid',
    text: 'Dev, CI en productie draaien hetzelfde artefact.',
  },
  {
    icon: 'globe',
    title: 'Soevereiniteit',
    text: 'Krijg je er gratis bij.',
  },
]

export default function SlidePayoff() {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title">Dit krijg je ervoor terug</h2>
      </Reveal>
      <div className="cards four">
        {wins.map((w, k) => (
          <Reveal key={w.title} i={2 + k} className="card">
            <div className="icon green-bg">
              <Icon name={w.icon} />
            </div>
            <h3 style={{ fontSize: 18.5 }}>{w.title}</h3>
            <p style={{ fontSize: 14.5 }}>{w.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={6}>
        Geen verzekering die geld kost, maar <span className="gold">architectuur die zich dubbel terugbetaalt.</span>
      </Punchline>
    </Slide>
  )
}
