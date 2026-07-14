import { motion } from 'framer-motion'
import { Slide, Reveal } from '../components/ui.jsx'

const ease = [0.22, 1, 0.36, 1]

const moments = [
  {
    when: 'al jaren',
    title: 'Britse eigenaar',
    text: 'Solvinity is van oorsprong Nederlands, maar de eigenaar zit al jaren in het VK. "Gewoon Europees kiezen" wankelde dus al.',
  },
  {
    when: "nov '25",
    title: 'Amerikaanse overname',
    text: 'Kyndryl (afgesplitst van IBM) wil Solvinity inlijven. DigiD zou daarmee onder Amerikaanse jurisdictie vallen.',
  },
  {
    when: "mei '26",
    title: 'Overname verboden',
    text: 'Het kabinet verbiedt de overname, ter bescherming van het publieke belang, op advies van toetsingsorgaan BTI.',
  },
  {
    when: "juli '26",
    title: 'En het loopt nog',
    text: 'Solvinity vecht het verbod aan bij de rechtbank Rotterdam; een uitspraak volgt later dit jaar. De uitkomst is nog open.',
  },
]

// Stap-gestuurd, zodat de spreker het als opbouw kan vertellen: elk tijdlijn-
// blokje komt op een pijltje-rechts, de punchline verschijnt als slot.
//   step 0 · alleen de titel
//   step 1-4 · de vier momenten, één voor één
//   step 5 · de punchline
export default function Slide08({ step = 0 }) {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title">En kies je wél Europees?</h2>
      </Reveal>
      <div className="timeline" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {moments.map((m, k) => (
          <motion.div
            key={m.when}
            className="moment"
            initial={{ opacity: 0, y: 26 }}
            animate={step >= k + 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="when">{m.when}</div>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="punchline"
        initial={{ opacity: 0, y: 26 }}
        animate={step >= moments.length + 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="bar" />
        Het enige wat je echt in de hand hebt, is <span className="gold">of je kunt vertrekken</span>.
        <span className="sub">Zelfs een overheidsverbod is geen zekerheid.</span>
      </motion.div>
    </Slide>
  )
}
