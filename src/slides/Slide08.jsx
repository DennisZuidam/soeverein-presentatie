import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const moments = [
  {
    when: 'al jaren',
    title: 'Britse eigenaar',
    text: 'Solvinity is van oorsprong Nederlands, maar de eigenaar zit al jaren in het VK. "Gewoon Europees kiezen" wankelde dus al.',
  },
  {
    when: "nov '25",
    title: 'Amerikaanse overname',
    text: 'Kyndryl (afgesplitst van IBM) wil Solvinity inlijven. Het bedrijf achter DigiD zou onder Amerikaanse jurisdictie vallen.',
  },
  {
    when: "mei '26",
    title: 'Overname verboden',
    text: 'Het kabinet verbiedt de overname, ter bescherming van het publieke belang, op advies van toetsingsorgaan BTI.',
  },
  {
    when: "juli '26",
    title: 'En het loopt nog',
    text: 'Solvinity vecht het verbod aan bij de rechtbank Rotterdam. De zitting dient dezer dagen. De uitkomst is open.',
  },
]

export default function Slide08() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title">
          En kies je wél Europees?
          <span className="muted" style={{ display: 'block', fontSize: 19, fontWeight: 450, marginTop: 10, letterSpacing: 0 }}>
            Solvinity: het bedrijf achter DigiD. Iedereen hier gebruikt het.
          </span>
        </h2>
      </Reveal>
      <div className="timeline" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {moments.map((m, k) => (
          <Reveal key={m.when} i={2 + k} className="moment">
            <div className="when">{m.when}</div>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={7} sub="Zelfs een overheidsverbod is geen zekerheid. Alleen je eigen exitvermogen is dat wel.">
        Het enige wat je echt in de hand hebt, is <span className="gold">of je kunt vertrekken</span>.
      </Punchline>
    </Slide>
  )
}
