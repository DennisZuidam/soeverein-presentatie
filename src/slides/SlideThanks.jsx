import { Slide, Reveal, EuStars } from '../components/ui.jsx'

// Afsluitende bedank-slide, helemaal aan het eind.
export default function SlideThanks() {
  return (
    <Slide className="center">
      <EuStars />
      <Reveal i={1}>
        <h1 className="display" style={{ fontSize: 96 }}>Bedankt.</h1>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ marginTop: 28, maxWidth: 720 }}>
          Keuzevrijheid is geen vlag, maar een eigenschap van je architectuur.
        </p>
      </Reveal>
      <Reveal i={4}>
        <div style={{ marginTop: 48, display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontWeight: 600 }}>Dennis Zuidam</span>
          <span style={{ color: 'var(--faint)' }}>·</span>
          <span className="muted">XPRTZ</span>
        </div>
      </Reveal>
    </Slide>
  )
}
