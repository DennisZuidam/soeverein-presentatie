import { motion } from 'framer-motion'
import { Slide, Reveal, Icon } from '../components/ui.jsx'

const ease = [0.22, 1, 0.36, 1]

const principles = [
  {
    icon: 'standard',
    title: 'Gebruik open standaarden',
    text: 'S3, PostgreSQL, Kubernetes, OIDC. Niet DynamoDB, Bedrock of Cognito.',
  },
  {
    icon: 'globe',
    title: 'Config via environment variables',
    text: 'Geen hardcoded credentials of regio’s in je code. Twelve-factor is geen trend, maar de basis.',
  },
  {
    icon: 'filecode',
    title: 'Infrastructure as Code',
    text: 'Terraform of Pulumi. Een provider-wissel wordt een config-aanpassing, geen migratie.',
  },
  {
    icon: 'box',
    title: 'Stateless applicaties',
    text: 'State hoort in een database of object storage, niet in je container.',
  },
]

// De EU Data Act-kaart verschijnt op pijltje-rechts (step 1), zodat de spreker
// eerst de vier principes vertelt en de wet als "en de wet helpt mee" toevoegt.
export default function Slide17({ step = 0 }) {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title">Hoe bouw je voor keuzevrijheid?</h2>
      </Reveal>
      <div className="cards four">
        {principles.map((p, k) => (
          <Reveal key={p.title} i={2 + k} className="card">
            <div className="icon">
              <Icon name={p.icon} />
            </div>
            <h3 style={{ fontSize: 18.5 }}>{p.title}</h3>
            <p style={{ fontSize: 14.5 }}>{p.text}</p>
          </Reveal>
        ))}
      </div>
      <motion.div
        style={{ marginTop: 'auto' }}
        initial={{ opacity: 0, y: 20 }}
        animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: 22, padding: '20px 26px', borderColor: 'rgba(255,204,51,0.35)' }}>
          <div className="icon gold-bg" style={{ margin: 0, flex: 'none' }}>
            <Icon name="scale" />
          </div>
          <p style={{ fontSize: 15.5, color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--text)' }}>EU Data Act (2025)</strong>: overstappen moet wettelijk kunnen, zonder blokkerende egress-kosten.
            <strong style={{ color: 'var(--gold)' }}> Maar bouw alsof de wet niet bestaat.</strong>
          </p>
        </div>
      </motion.div>
    </Slide>
  )
}
