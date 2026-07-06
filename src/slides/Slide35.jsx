import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const rows = [
  ['Compute / container', '8,4 s in de demo', 'open', 'OCI-image, draait morgen op elke runtime.'],
  ['Registry', 'minuten', 'open', 'docker push naar een andere registry, klaar.'],
  ['DNS', 'je TTL', 'open', 'Zet ’m vooraf laag en je knipt in vijf minuten om.'],
  ['Data · Postgres', '38 min bij 14 GB', 'half', 'pg_dump is makkelijk. Downtime, volumes en extensions zijn het werk. Bij terabytes praat je over weken.'],
  ['Identiteit', 'weken', 'risk', 'OIDC/SAML redt je, een dichtgetimmerde Cognito of Entra niet. En een bevel van buitenaf komt via je account binnen.'],
]

const cls = { open: 'open', half: 'risk', risk: 'risk' }

export default function SlideScorecard() {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 8 }}>Time-to-exit-scorecard</h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ fontSize: 18, marginBottom: 22, maxWidth: 1000 }}>
          Dezelfde app, vijf lagen. Per laag: hoe lang tot je weg bent, en of het op een open standaard draait.
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
      <Punchline i={5} sub="Staat dat getal bij je container, dan heb je niets gemeten. Meestal staat het bij data of identiteit.">
        Je soevereiniteit is <span className="gold">de langste rij in deze tabel.</span>
      </Punchline>
    </Slide>
  )
}
