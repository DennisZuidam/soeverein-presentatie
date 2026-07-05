import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const rows = [
  ['CDN / DDoS', 'Cloudflare', 'Meerdere Europese CDN-providers beschikbaar'],
  ['DNS', '1.1.1.1 · 8.8.8.8', 'DNS4EU: Europees, draait op EU-infra'],
  ['Code hosting', 'GitHub (Microsoft)', 'Git is open, self-host op elke server'],
  ['Compute', 'EC2 · Azure VM', 'Elke VPS- of bare-metal-provider'],
  ['Kubernetes', 'EKS · AKS (vendor-specifiek)', 'K8s is de standaard, draait overal'],
  ['Object storage', 'S3 · Azure Blob', 'S3 API is open: MinIO, Hetzner, eigen infra'],
  ['Observability', 'Datadog', 'OpenTelemetry + Prometheus, draait overal'],
  ['Enterprise / overheid', 'AWS European Sovereign Cloud · MS Cloud for Sovereignty', 'Europees eigendom, open contracten'],
]

export default function Slide16() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 26 }}>De kaart van je stack</h2>
      </Reveal>
      <Reveal i={2}>
        <table className="stack-table">
          <thead>
            <tr>
              <th>Laag</th>
              <th>Lock-in-risico</th>
              <th>Open standaard</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([layer, risk, open]) => (
              <tr key={layer}>
                <td>{layer}</td>
                <td className="risk">
                  {risk} <span className="vs">VS</span>
                </td>
                <td className="open">{open}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
      <Punchline i={4} sub="Observability ter illustratie: Coinbase betaalde Datadog naar verluidt $65 miljoen. Voor één jaar.">
        <span className="green">Groen</span> = de standaard bestaat. De provider is jouw keuze.
      </Punchline>
    </Slide>
  )
}
