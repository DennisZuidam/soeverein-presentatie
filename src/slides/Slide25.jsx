import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const facts = [
  {
    title: 'De opzet',
    text: 'Audio/video-monitoring van duizenden streams, gebouwd zoals het hoort: Step Functions, Lambda, S3 als tussenopslag.',
  },
  {
    title: 'De realiteit',
    text: 'Vastgelopen op 5% van de verwachte load. Step Functions rekent per state-transitie — meerdere per seconde stream.',
  },
  {
    title: 'De oplossing',
    text: 'Herbouwd als één proces in één ECS-task. Videoframes in-memory in plaats van via S3.',
  },
]

export default function SlidePrime() {
  return (
    <Slide kicker="Deel 2 — Wie zichzelf al de vrijheid gaf">
      <Reveal i={1}>
        <h2 className="title">Zelfs AWS-teams kiezen opnieuw</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 48, alignItems: 'center', flex: 1 }}>
        <Reveal i={2}>
          <div className="num" style={{ fontSize: 110, fontWeight: 750, letterSpacing: '-0.04em', color: 'var(--gold)' }}>
            −90%
          </div>
          <p className="muted" style={{ fontSize: 17, marginTop: 4 }}>
            infrastructuurkosten
            <br />
            <span style={{ color: 'var(--text)', fontWeight: 600 }}>Amazon Prime Video</span>, 2023
          </p>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {facts.map((f, k) => (
            <Reveal key={f.title} i={3 + k} className="card" style={{ padding: '18px 24px' }}>
              <h3 style={{ fontSize: 17, marginBottom: 6 }}>{f.title}</h3>
              <p style={{ fontSize: 15 }}>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <Punchline i={6}>
        Niet de managed service is het doel — <span className="gold">de passende architectuur.</span>
      </Punchline>
    </Slide>
  )
}
