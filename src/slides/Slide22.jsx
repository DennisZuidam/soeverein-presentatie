import { Slide, Reveal } from '../components/ui.jsx'

export default function Slide22() {
  return (
    <Slide className="center">
      <Reveal i={0}>
        <p className="lede" style={{ fontSize: 26 }}>
          De code staat op GitHub. <span className="muted">Dat is Microsoft.</span>
        </p>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ fontSize: 26, marginTop: 18, color: 'var(--text)' }}>
          Komt er een beter alternatief, dan push ik naar Forgejo.
        </p>
      </Reveal>
      <Reveal i={4}>
        <h2 className="display gold" style={{ marginTop: 48 }}>
          Zo werkt het.
        </h2>
      </Reveal>
    </Slide>
  )
}
