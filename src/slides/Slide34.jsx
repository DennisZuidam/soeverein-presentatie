import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const rows = [
  ['Container', 'seconden tot dagen', 'Een OCI-image draait overal, in de demo 27,8s. Hoeveel langer het duurt hangt af van de state eromheen. Hier zit je probleem dus niet.'],
  ['State · data', 'weken', 'Egress-euro’s plus de tijd om terabytes te verplaatsen en te hervalideren. Proprietary formaten (DynamoDB, BigQuery) tellen dubbel: je exporteert niet, je herschrijft.'],
  ['Identiteit', 'weken', 'IAM, SSO, service accounts, verweven in elke call. Meet je in herbouwen, niet in een export-knop. Iedereen vergeet dit tot de dag van de wissel.'],
  ['Coercion points', 'juridisch', 'Hoeveel partijen kunnen je provider dwingen? Geen technische maat, wel degene die bepaalt of de andere drie er ooit toe doen.'],
]

export default function SlideSovereigntyNumber() {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 30 }}>Soevereiniteit is een getal, geen badge</h2>
      </Reveal>
      <Reveal i={3}>
        <table className="stack-table">
          <thead>
            <tr>
              <th>Laag</th>
              <th style={{ whiteSpace: 'nowrap' }}>Time-to-exit</th>
              <th>Waar het zit</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([layer, tte, why], k) => (
              <tr key={layer}>
                <td>{layer}</td>
                <td className={k === 0 ? 'open' : 'risk'} style={{ whiteSpace: 'nowrap' }}>{tte}</td>
                <td className="muted" style={{ color: 'var(--muted)' }}>{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
      <Punchline i={5}>
        Zet het als SLA op papier: <span className="gold">binnen 6 weken weg, voor €40k, elk jaar getest.</span>
      </Punchline>
    </Slide>
  )
}
