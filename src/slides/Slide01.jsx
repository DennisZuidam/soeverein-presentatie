import { Slide, Reveal, EuStars } from '../components/ui.jsx'

export default function Slide01() {
  return (
    <Slide className="center" >
      <EuStars />
      <Reveal i={1}>
        <h1 className="display" style={{ fontSize: 92 }}>
          <span className="mono accent" style={{ fontWeight: 600 }}>eu-west-1</span>
          <br />
          is nog geen Europa
        </h1>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ marginTop: 30, maxWidth: 760 }}>
          Een verhaal over waarom soevereiniteit
          <br />
          een bijproduct is
        </p>
      </Reveal>
      <Reveal i={4}>
        <div style={{ marginTop: 56, display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontWeight: 600 }}>Dennis Zuidam</span>
          <span style={{ color: 'var(--faint)' }}>·</span>
          <span className="muted">XPRTZ</span>
        </div>
      </Reveal>
    </Slide>
  )
}
