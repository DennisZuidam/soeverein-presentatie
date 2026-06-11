import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const cons = [
  'Kleinere community dan AWS of Azure',
  'Minder managed services in het portfolio',
  'Minder StackOverflow-antwoorden',
  'Diepere Microsoft-integraties werken soms minder soepel',
]

const pros = [
  'Voor een standaard cloud-native stack — compute, opslag, Kubernetes, database — is het verschil klein',
  'En het wordt elk jaar kleiner',
  'Bouw je op open standaarden, dan kost terugkeren ook niets',
]

export default function Slide18() {
  return (
    <Slide kicker="Deel 2 — Wie zichzelf al de vrijheid gaf">
      <Reveal i={1}>
        <h2 className="title">Eerlijkheid over de gaps</h2>
      </Reveal>
      <div className="cards two" style={{ flex: 1, alignItems: 'start' }}>
        <Reveal i={2} className="card" style={{ height: '100%' }}>
          <div className="card-tag" style={{ color: 'var(--red)' }}>Wat je inlevert</div>
          <div className="checklist" style={{ marginTop: 6 }}>
            {cons.map((c) => (
              <div key={c} className="item">{c}</div>
            ))}
          </div>
        </Reveal>
        <Reveal i={3} className="card" style={{ height: '100%', borderColor: 'rgba(74,222,128,0.3)' }}>
          <div className="card-tag" style={{ color: 'var(--green)' }}>Wat daar tegenover staat</div>
          <div className="checklist pro" style={{ marginTop: 6 }}>
            {pros.map((p) => (
              <div key={p} className="item">{p}</div>
            ))}
          </div>
        </Reveal>
      </div>
      <Punchline i={5}>
        Geen religie, maar een afweging — <span className="gold">en de balans verschuift.</span>
      </Punchline>
    </Slide>
  )
}
