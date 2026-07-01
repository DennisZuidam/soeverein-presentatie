import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const rungs = [
  {
    what: 'Je data',
    role: 'Ligt op EU-servers — valt onder de CLOUD Act',
    now: false,
  },
  {
    what: 'Je toegang',
    role: 'De ICC-aanklager verloor zijn account na één sanctie',
    now: false,
  },
  {
    what: 'Je AI-modellen',
    role: 'Frontier-modellen langs een geheime NSA-cyberbenchmark, 30 dagen vóór release',
    now: true,
  },
]

export default function SlideAiGate() {
  return (
    <Slide kicker="Deel 1 — Waarom keuzevrijheid waarde heeft">
      <Reveal i={1}>
        <h2 className="title">
          En nu ook de modellen zelf
        </h2>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
        {rungs.map((r, k) => (
          <Reveal key={r.what} i={2 + k}>
            <div className={`geo-row${r.now ? ' law' : ''}`}>
              <span className="city" style={{ width: 210 }}>{r.what}</span>
              <span className="role">{r.role}</span>
              {r.now && (
                <span className="pill" style={{ marginLeft: 'auto', flex: 'none', borderColor: 'rgba(255,204,51,0.5)', color: 'var(--gold)' }}>
                  EO 14409 · 2 juni 2026
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
      <Punchline
        i={6}
        sub="Vrijwillig — voorlopig. Het antwoord blijft hetzelfde als bij opslag: open weights, zoals Mistral. Wat open is, kan niemand poorten."
      >
        Eerst je data. Toen je toegang. <span className="gold">Nu de modellen.</span>
      </Punchline>
    </Slide>
  )
}
