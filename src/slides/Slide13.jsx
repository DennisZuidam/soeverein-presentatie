import { Slide, Reveal, Punchline } from '../components/ui.jsx'

// Minimaal: één besef + drie steekwoorden. De spreker brengt de uitleg.
const layers = [
  { tag: 'Je state', why: 'Verhuist niet vanzelf' },
  { tag: 'Je identiteit', why: 'Herbouwen, niet exporteren' },
  { tag: 'Coercion points', why: 'Wie kan je provider dwingen?' },
]

export default function SlideContainer() {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 14 }}>De container is het makkelijke deel</h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ fontSize: 20, marginBottom: 30, maxWidth: 900 }}>
          Die onthoudt niks, dus je gooit 'm weg en start 'm overal opnieuw. Wat wél onthoudt, verhuis je niet zomaar.
        </p>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {layers.map((l, k) => (
          <Reveal key={l.tag} i={3 + k}>
            <div className="geo-row">
              <span className="city" style={{ width: 280 }}>{l.tag}</span>
              <span className="role">{l.why}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Punchline i={7}>
        Verhuist het met <span className="mono">docker run</span>, dan was het <span className="gold">nooit je lock-in.</span>
      </Punchline>
    </Slide>
  )
}
