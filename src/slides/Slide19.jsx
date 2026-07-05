import { Slide, Reveal, Punchline } from '../components/ui.jsx'

export default function Slide19() {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title">
          De container is klaar in 8 seconden.
          <span className="muted" style={{ display: 'block', fontSize: 21, fontWeight: 450, marginTop: 10, letterSpacing: 0 }}>
            De data kost 38 minuten. Dáár zit de migratie.
          </span>
        </h2>
      </Reveal>
      <div className="demo-flow">
        <Reveal i={2} className="demo-box from">
          <div className="head">us-east</div>
          <div className="sub red">app + PostgreSQL · VS-jurisdictie</div>
          <p className="meta">De container én de database bij een Amerikaanse provider.</p>
        </Reveal>
        <Reveal i={3} className="demo-arrow">
          <div style={{ textAlign: 'center' }}>
            <div className="mono gold" style={{ fontSize: 15, marginBottom: 10 }}>kamal + pg_restore</div>
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none" stroke="var(--gold)" strokeWidth="2">
              <path d="M2 12h54M48 4l10 8-10 8" />
            </svg>
          </div>
        </Reveal>
        <Reveal i={4} className="demo-box to">
          <div className="head">Scaleway nl-ams</div>
          <div className="sub green">app + PostgreSQL · EU-jurisdictie</div>
          <p className="meta">Container in seconden. Data pas na de restore. Dezelfde deploy.yml wijst ook naar Hetzner of STACKIT.</p>
        </Reveal>
      </div>
      <Punchline i={6} sub="Het coercion point zit niet in je YAML, maar bij de partij die je database vasthoudt.">
        Verhuizen is een <span className="mono">kamal deploy</span>. De data verhuizen is <span className="gold">je hele weekend.</span>
      </Punchline>
    </Slide>
  )
}
