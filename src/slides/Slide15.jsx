import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const stats = [
  { num: '€300 mld', text: 'geschatte investering in een eigen Europese stack (EuroStack, ~10 jaar)' },
  { num: '80%', text: "van Europa's digitale technologie wordt nu geïmporteerd" },
  { num: '70%', text: 'van de wereldwijd gebruikte AI-modellen komt uit de VS' },
]

export default function Slide15() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1}>
        <h2 className="title">De wind staat in je rug</h2>
      </Reveal>
      <Reveal i={2}>
        <div className="card" style={{ marginBottom: 22, borderColor: 'rgba(110,160,255,0.35)' }}>
          <div className="card-tag">EU Tech Sovereignty Package · 3 juni 2026</div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--text)' }}>
            Voor het eerst staat open source centraal in EU-beleid: een Open Source Strategy,
            een voorstel voor een <strong>Cloud and AI Development Act</strong> en <strong>€2 miljard</strong> voor
            open source over zeven jaar. Cloudbedrijven die niet aan EU-soevereiniteitscriteria
            voldoen, kunnen worden geweerd uit gevoelige overheidscontracten.
          </p>
        </div>
      </Reveal>
      <div className="stats">
        {stats.map((s, k) => (
          <Reveal key={s.num} i={3 + k} className="stat">
            <div className="num">{s.num}</div>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={6}>
        Dit is geen niche meer. Het is <span className="gold">beleid, budget en richting.</span>
      </Punchline>
    </Slide>
  )
}
