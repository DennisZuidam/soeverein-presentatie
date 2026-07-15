import { Slide, Reveal } from '../components/ui.jsx'

// Bijlage: bronvermelding. Naslag, geen verteltekst; mag daarom dichter.
const groups = [
  {
    tag: 'Jurisdictie & wet',
    items: [
      ['Carniaux onder ede, Franse Senaat (10 jun 2025)', 'senat.fr'],
      ['CLOUD Act (2018) · FISA 702', 'congress.gov'],
      ['Encryptie verslaat jurisdictie niet', 'eliatra.com'],
      ['Executive Order 14409 (2 jun 2026)', 'federalregister.gov'],
      ['Fable 5 / GPT-5.6 (jun–jul 2026)', 'anthropic.com · axios.com'],
      ['Solvinity-verbod (WOZT, mei 2026)', 'nos.nl · ictrecht.nl'],
    ],
  },
  {
    tag: 'Cases & cijfers',
    items: [
      ['GEICO terug naar OpenStack (2024)', 'Open Compute Project'],
      ['Dropbox $74,6M bespaard (S-1, 2018)', 'sec.gov'],
      ['OneUptime → eigen bare metal', 'oneuptime.com'],
      ['Spotify: Apple €1,84 mld EU-boete (2024)', 'ec.europa.eu'],
      ['Epic/Fortnite uit App Store & Play', 'theregister.com'],
      ['37signals / DHH cloud-exit', 'world.hey.com'],
      ['Coinbase / Datadog ~$65M', 'pragmaticengineer.com'],
    ],
  },
  {
    tag: 'Beleid, normen & onderzoek',
    items: [
      ['Rijk + DNB → STACKIT (apr 2026)', 'rijksoverheid.nl'],
      ['EU Tech Sovereignty Package (3 jun 2026)', 'commission.europa.eu'],
      ['EU Data Act · switching fees jan 2027', 'eur-lex.europa.eu'],
      ['Vendor lock-in: 94% bezorgd (2025)', 'Parallels'],
      ['Geopolitiek → lokale cloud: 61% (2025)', 'Gartner'],
      ['ISO/IEC 19941 · DORA (EU 2022/2554)', 'iso.org · eur-lex'],
      ['Soevereiniteit als kwaliteitsattribuut', 'arXiv 2606.31590'],
    ],
  },
]

export default function SlideBronnen() {
  return (
    <Slide kicker="Bijlage">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 20 }}>Bronnen</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28, flex: 1, alignItems: 'start' }}>
        {groups.map((g, i) => (
          <Reveal key={g.tag} i={2 + i}>
            <div className="card-tag" style={{ fontSize: 12, marginBottom: 12 }}>{g.tag}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {g.items.map(([claim, src]) => (
                <li key={claim} style={{ fontSize: 13, lineHeight: 1.35 }}>
                  <span style={{ color: 'var(--text)' }}>{claim}</span>
                  <br />
                  <span className="mono" style={{ fontSize: 10.5, color: 'var(--gold)' }}>{src}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}
