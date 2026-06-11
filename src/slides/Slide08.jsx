import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const moments = [
  {
    when: '2025',
    title: 'Solvinity gekozen',
    text: 'Amsterdam en het ministerie van J&V kiezen bewust voor de Nederlandse provider achter DigiD — juist om Amerikaanse afhankelijkheid te vermijden.',
  },
  {
    when: "nov '25",
    title: 'Amerikaanse overname',
    text: 'Kyndryl (afgesplitst van IBM) wil Solvinity inlijven. De soevereine keuze zou opeens onder Amerikaanse jurisdictie vallen.',
  },
  {
    when: 'daarna',
    title: 'Overname geblokkeerd',
    text: 'Het ministerie van EZK blokkeert de overname. Het contract blijft staan — maar de boodschap is duidelijk.',
  },
]

export default function Slide08() {
  return (
    <Slide kicker="Deel 1 — Waarom keuzevrijheid waarde heeft">
      <Reveal i={1}>
        <h2 className="title">
          En kies je wél Europees?
          <span className="muted" style={{ display: 'block', fontSize: 19, fontWeight: 450, marginTop: 10, letterSpacing: 0 }}>
            Solvinity — het bedrijf achter DigiD. Iedereen hier gebruikt het.
          </span>
        </h2>
      </Reveal>
      <div className="timeline">
        {moments.map((m, k) => (
          <Reveal key={m.when} i={2 + k} className="moment">
            <div className="when">{m.when}</div>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={6} sub="Een leverancier kan van eigenaar wisselen, een jurisdictie kan veranderen. Daarom gaat het niet om Europees kiezen — maar om porteerbaar blijven.">
        Het enige wat je echt in de hand hebt, is <span className="gold">of je kunt vertrekken</span>.
      </Punchline>
    </Slide>
  )
}
