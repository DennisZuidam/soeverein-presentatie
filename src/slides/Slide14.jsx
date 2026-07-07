import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const movers = [
  { who: 'FTM · De Correspondent · The Firewall', tag: 'Europees gekozen', what: 'Openlijk weg van Amerikaanse tools. The Firewall daagde zelfs het DigiD-contract voor de rechter.' },
  { who: 'Airbus', tag: 'Europees gekozen', what: 'Aanbesteding (€50M+) voor bedrijfskritische apps bij een EU-provider.' },
  { who: 'Gemeente Amsterdam', tag: 'Europees gekozen', what: 'Digitale autonomie als inkoopcriterium (2025). Koos KPN voor soevereine cloud (€74M).' },
  { who: 'Rijksoverheid', tag: 'Europees + exit geregeld', gold: true, what: 'Raamovereenkomst met STACKIT (Schwarz Gruppe), april 2026, inclusief exitclausule bij overname buiten de EER.' },
  { who: 'De Nederlandsche Bank', tag: 'Europees gekozen', what: 'Contract met STACKIT om afhankelijkheid van Amerikaanse cloud te verminderen.' },
  { who: 'DNS4EU', tag: 'Europees gebouwd', what: 'Europese DNS-resolver van de EU. Draait volledig op Europese infra.' },
]

export default function Slide14() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1}>
        <h2 className="title">De beweging is al gaande</h2>
      </Reveal>
      <div className="cards three" style={{ gap: 16 }}>
        {movers.map((m, k) => (
          <Reveal key={m.who} i={2 + k * 0.5} className="card" style={{ padding: '18px 20px 16px' }}>
            <div className="card-tag" style={{ fontSize: 10.5, marginBottom: 8, color: m.gold ? 'var(--gold)' : undefined }}>
              {m.tag}
            </div>
            <h3 style={{ fontSize: 17 }}>{m.who}</h3>
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
