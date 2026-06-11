import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const rows = [
  { city: 'Dublin', role: 'De servers staan hier', law: false },
  { city: 'Seattle', role: 'Het bedrijf staat hier', law: false },
  { city: 'Washington', role: 'De wet staat hier', law: true },
  { city: 'Amsterdam', role: 'Jij staat hier', law: false },
]

export default function Slide07() {
  return (
    <Slide kicker="Deel 1 — Waarom keuzevrijheid waarde heeft">
      <Reveal i={1}>
        <h2 className="title">
          <span className="mono accent" style={{ fontWeight: 600 }}>eu-west-1</span> klinkt Europees.
          <br />
          Het is AWS Ireland.
        </h2>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
        {rows.map((r, k) => (
          <Reveal key={r.city} i={2 + k}>
            <div className={`geo-row${r.law ? ' law' : ''}`}>
              <span className="city">{r.city}</span>
              <span className="role">{r.role}</span>
              {r.law && (
                <span className="pill" style={{ marginLeft: 'auto', borderColor: 'rgba(255,204,51,0.5)', color: 'var(--gold)' }}>
                  CLOUD Act · FISA 702
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
      <Punchline i={7}>
        Juridisch telt er maar <span className="gold">één</span>.
      </Punchline>
    </Slide>
  )
}
