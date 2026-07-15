import { Slide, Reveal, Punchline } from '../components/ui.jsx'

// Deel 2-afsluiter: het is geen niche meer, de hele markt kantelt.
// Weinig tekst, één groot getal. Cijfers: Gartner-enquête mei-juli 2025.
const stats = [
  { n: '55%', l: 'Open source cruciaal in hun cloudstrategie' },
  { n: '53%', l: 'Gaat globale providers beperken' },
  { n: '>75%', l: 'Buiten de VS met soevereiniteitsstrategie in 2030' },
]

export default function SlideGartner() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 16 }}>En het is geen niche</h2>
      </Reveal>
      <Reveal i={2}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, marginBottom: 26 }}>
          <span className="gold" style={{ fontSize: 104, fontWeight: 800, lineHeight: 0.82, letterSpacing: -3 }}>61%</span>
          <span className="lede" style={{ fontSize: 21, maxWidth: 560, paddingBottom: 4 }}>
            van West-Europese CIO's zet méér in op lokale cloud, door geopolitiek
          </span>
        </div>
      </Reveal>
      <div className="cards three" style={{ gap: 16 }}>
        {stats.map((s, k) => (
          <Reveal key={s.n} i={3 + k} className="card" style={{ padding: '16px 22px' }}>
            <div className="gold" style={{ fontSize: 32, fontWeight: 800, lineHeight: 1 }}>{s.n}</div>
            <p style={{ fontSize: 13.5, marginTop: 6 }}>{s.l}</p>
          </Reveal>
        ))}
      </div>
      <Reveal i={6}>
        <p style={{ fontSize: 12.5, marginTop: 16, color: 'var(--faint)' }}>
          Gartner, nov 2025 · enquête onder 241 CIO's in West-Europa
        </p>
      </Reveal>
      <Punchline i={7}>
        Geen repatriation. <span className="gold">Dit is geopatriation.</span>
      </Punchline>
    </Slide>
  )
}
