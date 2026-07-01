import { Slide, Reveal, Punchline } from '../components/ui.jsx'

export default function Slide19() {
  return (
    <Slide kicker="Deel 4 · Demo">
      <Reveal i={1}>
        <h2 className="title">De demo: deze presentatie</h2>
      </Reveal>
      <div className="demo-flow">
        <Reveal i={2} className="demo-box from">
          <div className="head">GitHub Pages</div>
          <div className="sub red">Microsoft · VS-jurisdictie</div>
          <p className="meta">Waar deze slides nu vandaan komen.</p>
        </Reveal>
        <Reveal i={3} className="demo-arrow">
          <div style={{ textAlign: 'center' }}>
            <div className="mono gold" style={{ fontSize: 15, marginBottom: 10 }}>kamal deploy</div>
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none" stroke="var(--gold)" strokeWidth="2">
              <path d="M2 12h54M48 4l10 8-10 8" />
            </svg>
          </div>
        </Reveal>
        <Reveal i={4} className="demo-box to">
          <div className="head">Scaleway</div>
          <div className="sub green">nl-ams · EU-jurisdictie</div>
          <p className="meta">Waar ze zo draaien. Zelfde container, zelfde slides.</p>
        </Reveal>
      </div>
      <Reveal i={5} style={{ marginTop: 34 }}>
        <p style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>
          Dezelfde Dockerfile.&ensp;Dezelfde app.&ensp;Het bewijs kijkt je nu aan.
        </p>
      </Reveal>
      <Punchline i={6}>
        Scaleway is het voorbeeld. Het had <span className="gold">elke provider</span> kunnen zijn.
      </Punchline>
    </Slide>
  )
}
