import { Slide, Reveal, Punchline } from '../components/ui.jsx'

export default function Slide19() {
  return (
    <Slide kicker="Deel 4 — Demo">
      <Reveal i={1}>
        <h2 className="title">Keuzevrijheid in twee regels</h2>
      </Reveal>
      <div className="demo-flow">
        <Reveal i={2} className="demo-box from">
          <div className="head">Azure</div>
          <div className="sub red">westeurope · VS-jurisdictie</div>
          <p className="meta">Waar de app vandaag draait.</p>
        </Reveal>
        <Reveal i={3} className="demo-arrow">
          <div style={{ textAlign: 'center' }}>
            <div className="mono gold" style={{ fontSize: 15, marginBottom: 10 }}>2 regels config</div>
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none" stroke="var(--gold)" strokeWidth="2">
              <path d="M2 12h54M48 4l10 8-10 8" />
            </svg>
          </div>
        </Reveal>
        <Reveal i={4} className="demo-box to">
          <div className="head">Elke provider</div>
          <div className="sub green">EU-jurisdictie · jouw keuze</div>
          <p className="meta">Hetzner · STACKIT · OVHcloud · Scaleway · eigen datacenter · …</p>
        </Reveal>
      </div>
      <Reveal i={5} style={{ marginTop: 34 }}>
        <p style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>
          Dezelfde Dockerfile.&ensp;Dezelfde app.&ensp;Dezelfde deploy-tool.
        </p>
      </Reveal>
      <Punchline i={6}>
        De demo gebruikt <span className="accent">Scaleway</span> als voorbeeld.
        Het punt is dat het <span className="gold">elke provider</span> had kunnen zijn.
      </Punchline>
    </Slide>
  )
}
