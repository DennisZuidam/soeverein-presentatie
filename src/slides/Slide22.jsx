import { Slide, Reveal } from '../components/ui.jsx'

export default function Slide22() {
  return (
    <Slide className="center">
      <Reveal i={0}>
        <p className="lede" style={{ fontSize: 26, maxWidth: 900 }}>
          Mijn code vind je op GitHub. <span className="muted">Ja, dat is Microsoft.</span>
        </p>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ fontSize: 26, marginTop: 18, color: 'var(--text)' }}>
          Maar morgen misschien op Forgejo.
        </p>
      </Reveal>
      <Reveal i={4}>
        <h2 className="display gold" style={{ marginTop: 48 }}>
          Easy peasy.
        </h2>
      </Reveal>
    </Slide>
  )
}
