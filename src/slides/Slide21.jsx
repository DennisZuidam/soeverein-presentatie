import { motion } from 'framer-motion'
import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const ease = [0.22, 1, 0.36, 1]

const steps = [
  {
    n: '01',
    title: 'Audit je dependencies',
    text: 'Loop je stack langs. Per service: draait dit op een open standaard of op iets vendor-specifieks? Noteer waar je vastzit.',
  },
  {
    n: '02',
    title: 'Containeriseer je volgende project',
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
    text: 'Zet je laatste productie-backup terug bij een tweede provider en klok de tijd. Dat getal is je time-to-exit.',
  },
]

// Op pijltje-rechts (step 1) verschijnt "stap 00" vóór de rij en schuiven 1-4
// door: geen backup buiten je provider = je echte startpunt.
export default function Slide21({ step = 0 }) {
  const showZero = step >= 1
  return (
    <Slide kicker="Epiloog">
      <Reveal i={1}>
        <h2 className="title">Hoe begin je morgen?</h2>
      </Reveal>
      <div className="steps" style={{ gridTemplateColumns: `repeat(${showZero ? 5 : 4}, 1fr)` }}>
        {showZero && (
          <motion.div
            className="step"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease }}
            style={{ borderColor: 'rgba(255,204,51,0.45)' }}
          >
            <span className="n" style={{ color: 'var(--gold)' }}>00</span>
            <h3>Backup buiten je provider</h3>
            <p>Heb je die niet, dan is dít stap nul. Bij een bevroren account begint je exit bij een backup die al buiten de deur ligt.</p>
          </motion.div>
        )}
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
