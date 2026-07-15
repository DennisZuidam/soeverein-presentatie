import { Slide, Reveal, Punchline } from '../components/ui.jsx'

// Bewust weinig tekst: ankers om over te vertellen, niet om voor te lezen.
const stats = [
  { num: '3 juni', text: 'EU Tech Sovereignty Package — één dag na de Amerikaanse AI-order' },
  { num: '€2 mld', text: 'voor open source over 7 jaar; open-source-first in overheidsinkoop (Cloud & AI Act)' },
  { num: 'criterium', text: 'niet-soevereine providers kunnen uit gevoelige overheidscontracten' },
]

export default function Slide15() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1}>
        <h2 className="title">Je hebt de wind mee</h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ fontSize: 18, marginBottom: 26, maxWidth: 900 }}>
          Voor het eerst zet Europa open source in het hart van industriepolitiek — met wetgeving én budget.
        </p>
      </Reveal>
      <div className="stats">
        {stats.map((s, k) => (
          <Reveal key={s.num} i={3 + k} className="stat">
            <div className="num">{s.num}</div>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={6} sub="Voor jou concreet: porteerbaar kunnen deployen wordt een aanbestedingscriterium.">
        Dit is geen sentiment. Het is <span className="gold">beleid, budget en richting.</span>
      </Punchline>
    </Slide>
  )
}
