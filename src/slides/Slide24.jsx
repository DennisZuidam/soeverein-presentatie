import { motion } from 'framer-motion'
import { Slide, Reveal, Icon } from '../components/ui.jsx'

const ease = [0.22, 1, 0.36, 1]

const wins = [
  { icon: 'scale', title: 'Onderhandelingspositie', text: 'Wie kan vertrekken, hoeft nooit te smeken.' },
  { icon: 'standard', title: 'Betere architectuur', text: 'Porteerbaar bouwen maakt je systeem ook testbaar en begrijpelijk.' },
  { icon: 'box', title: 'Reproduceerbaarheid', text: 'Dev, CI en productie draaien hetzelfde artefact.' },
  { icon: 'globe', title: 'Soevereiniteit', text: 'Krijg je er gratis bij.' },
]

// Stap-gestuurd: elk blokje op een pijltje-rechts, de punchline als slot.
//   step 1-4 · de vier blokjes, één voor één
//   step 5   · de punchline
export default function SlidePayoff({ step = 0 }) {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title">Dit krijg je ervoor terug</h2>
      </Reveal>
      <div className="cards four">
        {wins.map((w, k) => (
          <motion.div
            key={w.title}
            className="card"
            initial={{ opacity: 0, y: 26 }}
            animate={step >= k + 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
            transition={{ duration: 0.45, ease }}
          >
            <div className="icon green-bg">
              <Icon name={w.icon} />
            </div>
            <h3 style={{ fontSize: 18.5 }}>{w.title}</h3>
            <p style={{ fontSize: 14.5 }}>{w.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="punchline"
        initial={{ opacity: 0, y: 26 }}
        animate={step >= wins.length + 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="bar" />
        Geen verzekering die geld kost, maar <span className="gold">architectuur die zich dubbel terugbetaalt.</span>
      </motion.div>
    </Slide>
  )
}
