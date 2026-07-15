import { motion } from 'framer-motion'
import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const ease = [0.22, 1, 0.36, 1]

const steps = [
  { n: '01', title: 'Audit je dependencies', text: 'Waar zit je vast?' },
  { n: '02', title: 'Containeriseer je volgende project', text: 'Niet alles, gewoon het volgende' },
  { n: '03', title: 'Schrijf je infra als code', text: 'Wissel = pull request' },
  { n: '04', title: 'Oefen je exit', text: 'Klok de tijd = time-to-exit' },
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
            <p>Geen backup buiten de deur? Dan is dít stap nul.</p>
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
