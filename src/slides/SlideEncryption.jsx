import { Slide, Reveal, Punchline } from '../components/ui.jsx'

// Minimale tekst: alleen steekwoorden. De spreker brengt het verhaal.
// De ladder van "schijn-ontsnappingen": elke technische truc faalt op
// dezelfde reden, de eigenaar valt onder de jurisdictie.
const rows = [
  { m: 'Encryptie', why: 'Provider heeft de sleutel' },
  { m: 'Air-gap · isolatie', why: 'Zelfde eigenaar, zelfde wet' },
  { m: 'Enclaves · Nitro, Azure', why: 'Eigenaar patcht mee' },
  { m: 'Zero-knowledge', why: 'Sealed order, geheim' },
  { m: '“Sovereign cloud”', why: 'Microsoft, onder ede: geen garantie' },
]

export default function SlideEncryption() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 26 }}>Geen technische truc houdt de wet tegen</h2>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {rows.map((r, k) => (
          <Reveal key={r.m} i={2 + k}>
            <div className="geo-row">
              <span className="city" style={{ width: 300 }}>{r.m}</span>
              <span className="role">{r.why}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Punchline i={8}>
        “Sovereign” is <span className="gold">marketing, geen spec.</span>
      </Punchline>
    </Slide>
  )
}
