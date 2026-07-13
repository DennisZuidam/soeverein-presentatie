import { Slide, Reveal, Punchline } from '../components/ui.jsx'

// Bewust maar één hard getal (de gemeten 27,8s uit de demo). De onderste twee
// rijen zijn kwalitatief: die migratie is nooit getest, dus geen schijnprecisie.
const rows = [
  ['Snel · compute, registry, DNS', '27,8 s gemeten', 'open', 'Open standaarden (OCI, DNS). Dit liet de demo zien — het makkelijke deel.'],
  ['Data', 'minuten → weken', 'risk', 'Kopiëren kan, maar downtime, volumes en proprietary formaten zijn het werk. Klein is minuten, terabytes zijn weken.'],
  ['Identiteit', 'weken', 'risk', 'Je herbouwt je IAM-model, je exporteert het niet. En een bevel van buitenaf komt via je account binnen.'],
]

const cls = { open: 'open', risk: 'risk' }

export default function SlideScorecard() {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 8 }}>Time-to-exit-scorecard</h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ fontSize: 18, marginBottom: 22, maxWidth: 1000 }}>
          De demo toonde de bovenste rij. Drie lagen, één vraag per laag: hoe lang tot je echt weg bent?
        </p>
      </Reveal>
      <Reveal i={3}>
        <table className="stack-table">
          <thead>
            <tr>
              <th>Laag</th>
              <th>Time-to-exit</th>
              <th>Waarom</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([layer, tte, tone, why]) => (
              <tr key={layer}>
                <td>{layer}</td>
                <td className={cls[tone]} style={{ whiteSpace: 'nowrap' }}>{tte}</td>
                <td className="muted" style={{ color: 'var(--muted)' }}>{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
      <Punchline i={5} sub="Meestal staat dat getal niet bij je container, maar bij je data of identiteit.">
        Je soevereiniteit is <span className="gold">de langste rij in deze tabel.</span>
      </Punchline>
    </Slide>
  )
}
