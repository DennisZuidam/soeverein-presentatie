import { Slide, Reveal, Punchline, Terminal } from '../components/ui.jsx'

const reasons = [
  { n: '01', text: 'De README gebruikte het' },
  { n: '02', text: 'De collega kende het' },
  { n: '03', text: 'De tutorial deed het' },
]

export default function Slide04() {
  return (
    <Slide kicker="Deel 1 · Waarom keuzevrijheid waarde heeft">
      <Reveal i={1}>
        <h2 className="title">Defaults zijn geen keuzes</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 40, alignItems: 'start' }}>
        <Reveal i={2}>
          <Terminal title="~ · bash">
            <span className="prompt">$</span> aws configure{'\n'}
            <span className="dim">AWS Access Key ID:</span> ••••••••{'\n'}
            <span className="dim">AWS Secret Access Key:</span> ••••••••{'\n'}
            <span className="dim">Default region name:</span> <span className="hl">eu-west-1</span>
          </Terminal>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {reasons.map((r, k) => (
            <Reveal key={r.n} i={3 + k}>
              <div className="geo-row" style={{ padding: '15px 22px' }}>
                <span className="mono gold" style={{ fontSize: 14 }}>{r.n}</span>
                <span style={{ fontSize: 19, fontWeight: 600 }}>{r.text}</span>
              </div>
            </Reveal>
          ))}
          <Reveal i={6}>
            <p className="muted" style={{ fontSize: 16.5, lineHeight: 1.55, paddingLeft: 4, marginTop: 6 }}>
              Niemand zei nee. Maar niemand zei <em>ja</em>.
            </p>
          </Reveal>
        </div>
      </div>
      <Punchline i={7}>
        Zo begint lock-in. Niet met een handtekening, maar <span className="gold">met een README.</span>
      </Punchline>
    </Slide>
  )
}
