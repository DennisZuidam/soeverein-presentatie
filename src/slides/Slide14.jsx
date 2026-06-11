import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const movers = [
  { who: '37signals', what: 'Cloud-exit naar eigen infra. Circa $10M besparing over vijf jaar.' },
  { who: 'FTM + De Correspondent', what: 'Migratie weg van Amerikaanse tools — transparant, in het openbaar.' },
  { who: 'Airbus', what: 'Aanbesteding (jan 2026, €50M+) voor bedrijfskritische apps. Schat zelf 80% kans op een geschikte EU-provider.' },
  { who: 'Gemeente Amsterdam', what: 'Digitale autonomie als inkoopcriterium (2025). Koos KPN voor soevereine cloud (€74M).' },
  { who: 'Rijksoverheid', what: 'Raamovereenkomst met STACKIT (Schwarz Gruppe), april 2026 — inclusief exitclausule bij overname buiten de EER.' },
  { who: 'De Nederlandsche Bank', what: 'Contract met STACKIT om afhankelijkheid van Amerikaanse cloud te verminderen.' },
  { who: 'DNS4EU', what: 'Europese DNS-resolver van de EU. Draait op Europese infra (Scaleway, Hetzner).' },
  { who: 'Jij, morgen?', what: 'De drempel is lager dan je denkt — daarover zo meer.', ghost: true },
]

export default function Slide14() {
  return (
    <Slide kicker="Deel 2 — Wie zichzelf al de vrijheid gaf">
      <Reveal i={1}>
        <h2 className="title">De beweging is al gaande</h2>
      </Reveal>
      <div className="cards four" style={{ gap: 16 }}>
        {movers.map((m, k) => (
          <Reveal key={m.who} i={2 + k * 0.5} className="card" style={{ padding: '20px 20px 18px', opacity: m.ghost ? 0.75 : undefined, borderStyle: m.ghost ? 'dashed' : undefined }}>
            <h3 style={{ fontSize: 17 }} className={m.ghost ? 'gold' : undefined}>{m.who}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.5 }}>{m.what}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={7}>
        De gemeenschappelijke deler: <span className="gold">niemand deed dit omdat het moest.</span>
      </Punchline>
    </Slide>
  )
}
