import { Slide, Reveal, Punchline, Icon } from '../components/ui.jsx'

const wins = [
  {
    icon: 'scale',
    title: 'Onderhandelingspositie',
    text: 'Wie kan vertrekken, hoeft nooit te smeken. Het prijsgesprek met je provider voelt anders met een werkende exit op zak.',
  },
  {
    icon: 'standard',
    title: 'Betere architectuur',
    text: 'Stateless, twelve-factor, infra als code: dezelfde keuzes die je porteerbaar maken, maken je systeem testbaar en begrijpelijk.',
  },
  {
    icon: 'box',
    title: 'Reproduceerbaarheid',
    text: 'Dev, CI en productie draaien hetzelfde artefact. Onboarding van een nieuwe collega: docker compose up.',
  },
  {
    icon: 'globe',
    title: 'Soevereiniteit',
    text: 'Als bijproduct. Het vinkje waar anderen een programma voor optuigen, krijg jij gratis bij je architectuur.',
  },
]

export default function SlidePayoff() {
  return (
    <Slide kicker="Deel 3 — Zo bouw je voor keuzevrijheid">
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
        Keuzevrijheid is geen verzekering die geld kost — <span className="gold">het is architectuur die zich dubbel terugbetaalt.</span>
      </Punchline>
    </Slide>
  )
}
