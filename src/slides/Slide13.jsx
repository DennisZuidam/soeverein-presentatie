import { Slide, Reveal, Punchline, Terminal } from '../components/ui.jsx'

const runsOn = [
  { where: 'je laptop' },
  { where: 'Azure' },
  { where: 'Scaleway · Hetzner · STACKIT' },
  { where: 'de server in de meterkast' },
]

export default function SlideContainer() {
  return (
    <Slide kicker="Deel 3 · Zo bouw je voor keuzevrijheid">
      <Reveal i={1}>
        <h2 className="title">De container is je exitstrategie</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, alignItems: 'start' }}>
        <Reveal i={2}>
          <Terminal title="~/app · bash">
            <span className="prompt">$</span> docker build -t app .{'\n'}
            <span className="prompt">$</span> docker run -p 8080:8080 app{'\n'}
            <span className="dim">Listening on :8080</span>
          </Terminal>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.6, marginTop: 20 }}>
            OCI is een open standaard: elke runtime, elke registry, elke
            orchestrator. <strong style={{ color: 'var(--text)' }}>Eén artefact,
            overal hetzelfde gedrag.</strong>
          </p>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
          {runsOn.map((r, k) => (
            <Reveal key={r.where} i={3 + k}>
              <div className="geo-row" style={{ padding: '14px 22px' }}>
                <span className="green mono" style={{ fontSize: 15 }}>✓</span>
                <span style={{ fontSize: 18, fontWeight: 600 }}>{r.where}</span>
              </div>
            </Reveal>
          ))}
          <Reveal i={7}>
            <p className="muted" style={{ fontSize: 15, margin: '10px 0 8px' }}>Zelfde principe voor je data:</p>
            <Terminal title="storage.py">
              s3 = boto3.client(<span className="hl">"s3"</span>,{'\n'}
              {'  '}endpoint_url=<span className="hl">"https://s3.nl-ams.scw.cloud"</span>)
            </Terminal>
          </Reveal>
        </div>
      </div>
      <Punchline i={8}>
        Build once, run anywhere. <span className="gold">Deze keer echt.</span>
      </Punchline>
    </Slide>
  )
}
