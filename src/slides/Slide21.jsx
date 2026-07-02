import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const steps = [
  {
    n: '01',
    title: 'Audit je dependencies',
    text: 'Loop je stack langs. Per service: draait dit op een open standaard of op iets vendor-specifieks? Noteer waar je vastzit.',
  },
  {
    n: '02',
    title: 'Containerize je volgende project',
    text: 'Niet alles in één keer. Gewoon het volgende nieuwe project: Docker, environment variables voor config, stateless.',
  },
  {
    n: '03',
    title: 'Schrijf je infra als code',
    text: 'Terraform of Pulumi. Staat je infra in code, dan is een provider-wissel een pull request, geen migratie.',
  },
  {
    n: '04',
    title: 'Oefen je exit',
    text: 'Deploy in CI óók eens naar een tweede provider. Een exit die je nooit geoefend hebt bestaat niet, net als een backup die je nooit hebt teruggezet.',
  },
]

export default function Slide21() {
  return (
    <Slide kicker="Epiloog">
      <Reveal i={1}>
        <h2 className="title">Hoe begin je morgen?</h2>
      </Reveal>
      <div className="steps" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {steps.map((s, k) => (
          <Reveal key={s.n} i={2 + k} className="step">
            <span className="n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={6}>
        Je hoeft niet alles te migreren. <span className="gold">Begin met het volgende project.</span>
      </Punchline>
    </Slide>
  )
}
