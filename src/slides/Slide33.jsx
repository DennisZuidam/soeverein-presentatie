import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const big = [
  { who: 'GEICO', text: '10 jaar public cloud, rekening 2,5× omhoog. Terug naar eigen OpenStack/K8s: 50% goedkoper per core.' },
  { who: 'Dropbox', text: '~500 PB grotendeels van S3 naar eigen Magic Pocket. $74,6M bespaard in twee jaar.' },
]

const small = [
  { who: 'OneUptime', text: '$38k per maand op AWS, naar eigen bare metal. Besparing groeide in twee jaar van $230k naar ruim $1,2M per jaar, 99,993% uptime.' },
  { who: 'hank.parts', text: 'Compute en storage moeiteloos naar de EU. Vast bij Apple, Google Play en Ads: de echte coercion points.' },
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
        <h2 className="title" style={{ marginBottom: 26 }}>Groot en klein, dezelfde les</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 34, flex: 1, alignItems: 'start' }}>
        <Column tag="Groot" items={big} i={2} />
        <Column tag="Klein" items={small} i={3} />
      </div>
      <Punchline i={7}>
        De compute verhuist in een middag. <span className="gold">De data in jaren.</span>
      </Punchline>
    </Slide>
  )
}
