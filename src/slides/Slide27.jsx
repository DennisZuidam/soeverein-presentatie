import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const cases = [
  {
    who: '37signals',
    what: 'cloud-exit naar eigen infra',
    steps: [
      'Apps zaten al in Docker-containers',
      'Bouwde Kamal als deploy-tool — open source',
      'RDS → Percona MySQL 8 op bare metal',
      'S3 → 18 PB Pure Storage, dual datacenter',
    ],
  },
  {
    who: 'ICC',
    what: 'weg van Microsoft 365',
    steps: [
      'openDesk — open source suite van ZenDiS',
      'Collabora → documenten in de browser',
      'Nextcloud → bestanden · Open-Xchange → mail',
      'OpenProject → projecten',
    ],
  },
  {
    who: 'FTM + De Correspondent',
    what: 'stapsgewijs, in het openbaar',
    steps: [
      'Site en app: eigen bouw, op EU-servers',
      'Analytics: Matomo in plaats van Google',
      'Nu aan de beurt: Slack, ActiveCampaign, Shopify, Google Workspace',
      'Elke afweging gepubliceerd',
    ],
  },
]

export default function SlideHow() {
  return (
    <Slide kicker="Deel 2 — Wie zichzelf al de vrijheid gaf">
      <Reveal i={1}>
        <h2 className="title">Hoe dan? De concrete stappen</h2>
      </Reveal>
      <div className="cards three" style={{ flex: 1, alignItems: 'stretch' }}>
        {cases.map((c, k) => (
          <Reveal key={c.who} i={2 + k} className="card">
            <h3 style={{ marginBottom: 2 }}>{c.who}</h3>
            <div className="card-tag" style={{ marginBottom: 16 }}>{c.what}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {c.steps.map((s) => (
                <div key={s} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                  <span className="mono gold" style={{ fontSize: 13, flex: 'none' }}>→</span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--muted)' }}>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <Punchline i={6}>
        Geen big bang. <span className="gold">Component voor component.</span>
      </Punchline>
    </Slide>
  )
}
