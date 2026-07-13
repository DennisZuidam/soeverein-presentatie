import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const rungs = [
  { what: 'Je data', role: 'Ligt op EU-servers, valt onder de CLOUD Act', now: false },
  { what: 'Je toegang', role: 'De ICC-aanklager verloor zijn account na één sanctie', now: false },
  { what: 'Je AI-modellen', role: 'Frontier-modellen langs een geheime NSA-cyberbenchmark', now: true },
]

// Twee echte, verse gevallen (juni-juli 2026): dezelfde jurisdictie, twee hefbomen.
const cases = [
  {
    tag: 'Anthropic · Fable 5',
    text: 'In juni wereldwijd op bevel offline — een NSA-red-team vond autonome inbraak. Pas terug na een safety-fix.',
  },
  {
    tag: 'OpenAI · GPT-5.6',
    text: 'Pas op 9 juli publiek, ná ~30 dagen overheidsreview. Het eerste grote model door de poort.',
  },
]

export default function SlideAiGate() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title">En nu ook de modellen zelf</h2>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rungs.map((r, k) => (
          <Reveal key={r.what} i={2 + k}>
            <div className={`geo-row${r.now ? ' law' : ''}`}>
              <span className="city" style={{ width: 190 }}>{r.what}</span>
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
      <div className="cards two" style={{ marginTop: 16, gap: 16 }}>
        {cases.map((c, k) => (
          <Reveal key={c.tag} i={5 + k * 0.5} className="card" style={{ padding: '16px 22px' }}>
            <div className="card-tag">{c.tag}</div>
            <p style={{ fontSize: 14.5, margin: 0 }}>{c.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={7} sub="Een poort (GPT-5.6) én een noodrem (Fable 5) — allebei deze weken.">
        Eerst je data. Toen je toegang. <span className="gold">Nu de modellen.</span>
      </Punchline>
    </Slide>
  )
}
