import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const cons = [
  'Een kleinere community: minder Stack Overflow-antwoorden en kant-en-klare voorbeelden',
  'Minder managed services: sommige dingen draai je voortaan zelf',
  'Diepe Microsoft- of AWS-integraties werken soms stroever',
]

const pros = [
  'Voor een standaard cloud-native stack (compute, opslag, Kubernetes, database) is het verschil klein',
  'En het wordt elk jaar kleiner',
  'Bouw je op open standaarden, dan kun je altijd terug, het is geen enkele reis',
]

export default function Slide18() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 10 }}>Eerlijk: wat lever je in?</h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ fontSize: 17, marginBottom: 18, maxWidth: 1000 }}>
          Zonder dit is het een verkooppraatje. Het echte bezwaar: managed services zijn een
          <strong style={{ color: 'var(--text)' }}> ops-team dat je inhuurt</strong>. Zonder hen moet je dat zelf kunnen, of elders inkopen.
        </p>
      </Reveal>
      <div className="cards two" style={{ flex: 1, alignItems: 'start' }}>
        <Reveal i={3} className="card" style={{ height: '100%' }}>
          <div className="card-tag" style={{ color: 'var(--red)' }}>Wat je inlevert</div>
          <div className="checklist" style={{ marginTop: 6 }}>
            {cons.map((c) => (
              <div key={c} className="item">{c}</div>
            ))}
          </div>
        </Reveal>
        <Reveal i={4} className="card" style={{ height: '100%', borderColor: 'rgba(74,222,128,0.3)' }}>
          <div className="card-tag" style={{ color: 'var(--green)' }}>Wat daar tegenover staat</div>
          <div className="checklist pro" style={{ marginTop: 6 }}>
            {pros.map((p) => (
              <div key={p} className="item">{p}</div>
            ))}
          </div>
        </Reveal>
      </div>
      <Punchline i={6}>
        Het gat is kleiner dan je denkt, en <span className="gold">wordt elk jaar kleiner.</span>
      </Punchline>
    </Slide>
  )
}
