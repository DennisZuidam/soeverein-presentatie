import { Slide, Reveal, Punchline } from '../components/ui.jsx'

// Onderzoek voorop, geen componentnamen: de drie lagen als besef, niet als tech.
const layers = [
  { tag: 'Je data', text: 'Vast in een format dat alleen dáár draait. Migreren is herontwerpen.' },
  { tag: 'Je identiteit', text: 'Je toegangsmodel zit verweven met je provider. Herbouwen, niet exporteren.' },
  { tag: 'Je verkeer', text: 'Binnenkomen gratis, eruit kost geld. Alles ernaast wordt vanzelf te duur.' },
]

export default function Slide05() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 18 }}>Zo ziet lock-in eruit</h2>
      </Reveal>
      <Reveal i={2}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 22, marginBottom: 24 }}>
          <span className="gold" style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.9, letterSpacing: -3 }}>94%</span>
          <span className="lede" style={{ fontSize: 20, maxWidth: 560 }}>van de IT-leiders vreest vendor lock-in</span>
        </div>
      </Reveal>
      <div className="cards three" style={{ gap: 16 }}>
        {layers.map((l, k) => (
          <Reveal key={l.tag} i={3 + k} className="card" style={{ padding: '18px 22px' }}>
            <div className="card-tag" style={{ color: 'var(--red)' }}>{l.tag}</div>
            <p style={{ fontSize: 14.5, marginTop: 6 }}>{l.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal i={6}>
        <p style={{ fontSize: 12.5, marginTop: 14, color: 'var(--faint)' }}>
          Parallels, State of Cloud Computing Survey, nov 2025
        </p>
      </Reveal>
      <Punchline i={7}>
        Lock-in is <span className="gold">het verdienmodel</span>, geen bijeffect.
      </Punchline>
    </Slide>
  )
}
