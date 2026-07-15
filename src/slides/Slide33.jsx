import { Slide, Reveal, Punchline } from '../components/ui.jsx'

// Weinig tekst: naam groot, één cijfer/hook klein. De spreker vertelt de rest.
const left = [
  { who: 'GEICO', hook: '50% goedkoper per core' },
  { who: 'Dropbox', hook: '$74,6M bespaard' },
  { who: 'OneUptime', hook: 'terug naar eigen bare metal' },
]
const right = [
  { who: 'Spotify', hook: '€1,8 mld EU-boete voor Apple' },
  { who: 'Epic · Fortnite', hook: 'uit App Store én Play gegooid' },
]

function Column({ tag, items, i }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Reveal i={i}>
        <div className="card-tag" style={{ fontSize: 13 }}>{tag}</div>
      </Reveal>
      {items.map((m, k) => (
        <Reveal key={m.who} i={i + 0.5 + k * 0.5} className="card" style={{ padding: '20px 26px' }}>
          <h3 style={{ fontSize: 27, margin: 0, letterSpacing: -0.5 }}>{m.who}</h3>
          <p className="gold" style={{ fontSize: 15, margin: '7px 0 0', fontWeight: 600 }}>{m.hook}</p>
        </Reveal>
      ))}
    </div>
  )
}

export default function SlideExamples() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 26 }}>Wie al vertrok, en wat vast blijft zitten</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 34, flex: 1, alignItems: 'start' }}>
        <Column tag="Vertrekken loont" items={left} i={2} />
        <Column tag="De poort buiten je infra" items={right} i={3} />
      </div>
      <Punchline i={7}>
        De compute verhuist in een middag. <span className="gold">Sommige poorten verhuizen nooit.</span>
      </Punchline>
    </Slide>
  )
}
