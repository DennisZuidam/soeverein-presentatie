import { Slide, Reveal, Punchline } from '../components/ui.jsx'

// Links: bedrijven die vertrokken en er beter van werden (groot én klein).
// Rechts: de coercion-poort die je juist niet kunt verhuizen (Spotify hoofdcase,
// Epic/Fortnite als klapstuk) — precies buiten de infra-laag.
const left = [
  { who: 'GEICO', text: '10 jaar public cloud, rekening 2,5× omhoog. Terug naar eigen OpenStack/K8s: 50% goedkoper per core.' },
  { who: 'Dropbox', text: '~500 PB grotendeels van S3 naar eigen Magic Pocket. $74,6M bespaard in twee jaar.' },
  { who: 'OneUptime', text: '$38k per maand op AWS, naar eigen bare metal. Besparing groeide in twee jaar tot ruim $1,2M per jaar, 99,993% uptime.' },
]

const right = [
  { who: 'Spotify', text: 'Europees, draait z’n techniek waar het wil. Toch klem: op je iPhone kom je alleen via Apples App Store. EU beboette Apple €1,8 mld (2024).' },
  { who: 'Epic · Fortnite', text: 'Bouwde een eigen betaalsysteem in en vloog er in 2020 bij Apple én Google uit. Jarenlang van een miljard telefoons af.' },
]

function Column({ tag, items, i }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Reveal i={i}>
        <div className="card-tag" style={{ fontSize: 13 }}>{tag}</div>
      </Reveal>
      {items.map((m, k) => (
        <Reveal key={m.who} i={i + 0.5 + k * 0.5} className="card" style={{ padding: '20px 24px' }}>
          <h3 style={{ fontSize: 19, marginBottom: 6 }}>{m.who}</h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.55 }}>{m.text}</p>
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
