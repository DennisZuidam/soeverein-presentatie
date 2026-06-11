import { Slide, Reveal, Punchline, Terminal } from '../components/ui.jsx'

const runsOn = [
  { where: 'je laptop', how: 'docker run' },
  { where: 'Azure', how: 'vandaag' },
  { where: 'Scaleway · Hetzner · STACKIT', how: 'morgen, als jij dat wil' },
  { where: 'de server in de meterkast', how: 'als het moet' },
]

export default function SlideContainer() {
  return (
    <Slide kicker="Deel 3 — Zo bouw je voor keuzevrijheid">
      <Reveal i={1}>
        <h2 className="title">De container is je exitstrategie</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, alignItems: 'start' }}>
        <Reveal i={2}>
          <Terminal title="~/app — bash">
            <span className="prompt">$</span> docker build -t app .{'\n'}
            <span className="prompt">$</span> docker run -p 8080:8080 app{'\n'}
            <span className="dim">Listening on :8080 — waar dan ook.</span>
          </Terminal>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.6, marginTop: 20 }}>
            OCI is de open standaard: elke runtime, elke registry, elke
            orchestrator. Je Dockerfile is het contract — <strong style={{ color: 'var(--text)' }}>één
            artefact, overal hetzelfde gedrag</strong>.
          </p>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
          {runsOn.map((r, k) => (
            <Reveal key={r.where} i={3 + k}>
              <div className="geo-row" style={{ padding: '14px 22px' }}>
                <span className="green mono" style={{ fontSize: 15 }}>✓</span>
                <span style={{ fontSize: 18, fontWeight: 600 }}>{r.where}</span>
                <span className="muted" style={{ marginLeft: 'auto', fontSize: 14.5 }}>{r.how}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Punchline i={7}>
        Build once, run anywhere. <span className="gold">Deze keer echt.</span>
      </Punchline>
    </Slide>
  )
}
