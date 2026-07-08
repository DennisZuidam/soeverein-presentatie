import { Slide, Reveal, Punchline } from '../components/ui.jsx'

export default function Slide19() {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title">
          Deze presentatie, live van Azure naar Scaleway.
          <span className="muted" style={{ display: 'block', fontSize: 21, fontWeight: 450, marginTop: 10, letterSpacing: 0 }}>
            Geen database. Dus dit is de makkelijke helft: seconden, en de url verspringt.
          </span>
        </h2>
      </Reveal>
      <div className="demo-flow">
        <Reveal i={2} className="demo-box from">
          <div className="head">Azure</div>
          <div className="sub red">deze site (container) · VS-jurisdictie</div>
          <p className="meta">Draait bij Microsoft, gedeployed met Kamal vanuit de terminal.</p>
        </Reveal>
        <Reveal i={3} className="demo-arrow">
          <div style={{ textAlign: 'center' }}>
            <div className="mono gold" style={{ fontSize: 15, marginBottom: 10 }}>kamal setup -d scaleway</div>
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none" stroke="var(--gold)" strokeWidth="2">
              <path d="M2 12h54M48 4l10 8-10 8" />
            </svg>
          </div>
        </Reveal>
        <Reveal i={4} className="demo-box to">
          <div className="head">Scaleway nl-ams</div>
          <div className="sub green">zelfde image · EU-jurisdictie</div>
          <p className="meta">In seconden live in nl-ams. De url verspringt mee, dat is je bewijs. Dezelfde config wijst met één vlag ook naar Hetzner.</p>
        </Reveal>
      </div>
      <Punchline i={6} sub="Het echte werk zit niet in je container, maar in data, identiteit en coercion points. Precies wat de scorecard zo meet.">
        Geen state? Dan is verhuizen <span className="gold">bijna gratis.</span>
      </Punchline>
    </Slide>
  )
}
