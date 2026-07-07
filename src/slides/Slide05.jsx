import { Slide, Reveal, Punchline, Icon } from '../components/ui.jsx'

const locks = [
  {
    icon: 'database',
    tag: 'je data',
    title: 'DynamoDB',
    text: 'Ooit gekozen omdat Postgres te veel werk leek. Nu draait het nergens anders.',
  },
  {
    icon: 'lock',
    tag: 'je identiteit',
    title: 'IAM',
    text: 'Rollen zo diep verweven dat overstappen bijna onmogelijk wordt.',
  },
  {
    icon: 'euro',
    tag: 'je verkeer',
    title: 'Egress',
    text: 'Alles naar buiten kost geld. Elke dienst ernaast wordt vanzelf te duur.',
  },
]

export default function Slide05() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title">Zo ziet lock-in eruit</h2>
      </Reveal>
      <div className="cards three">
        {locks.map((l, k) => (
          <Reveal key={l.title} i={2 + k} className="card">
            <div className="icon red-bg">
              <Icon name={l.icon} />
            </div>
            <div className="card-tag" style={{ color: 'var(--red)' }}>{l.tag}</div>
            <h3 className="mono" style={{ fontWeight: 600 }}>{l.title}</h3>
            <p>{l.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={6}>
        Lock-in is <span className="gold">het verdienmodel</span>, geen bijeffect.
      </Punchline>
    </Slide>
  )
}
