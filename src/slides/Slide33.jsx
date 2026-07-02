import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const big = [
  { who: 'GEICO', text: '10 jaar public cloud, rekening 2,5× omhoog. Terug naar eigen OpenStack/K8s: 50% goedkoper per core.' },
  { who: 'Dropbox', text: '~500 PB grotendeels van S3 naar eigen Magic Pocket. $74,6M bespaard in twee jaar.' },
  { who: '37signals', text: 'Apps eruit met Kamal in een weekend. Het werk: ~10 PB uit S3 naar eigen Pure Storage.' },
]

const small = [
  { who: 'OneUptime', text: '$38k/mnd op AWS → eigen bare metal. Na twee jaar $1,2M/jaar eraf, 99,993% uptime.' },
  { who: 'Datapult', text: 'Weg bij AWS: ~90% lagere kosten, ISO 27001 behouden, eigen Prometheus/Grafana.' },
  { who: 'hank.parts', text: 'Compute en storage moeiteloos naar EU. Vast bij Apple, Google Play en Ads: de echte coercion points.' },
]

function Column({ tag, items, i }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Reveal i={i}>
        <div className="card-tag" style={{ fontSize: 13 }}>{tag}</div>
      </Reveal>
      {items.map((m, k) => (
        <Reveal key={m.who} i={i + 0.5 + k * 0.5} className="card" style={{ padding: '16px 20px' }}>
          <h3 style={{ fontSize: 17, marginBottom: 4 }}>{m.who}</h3>
          <p style={{ fontSize: 14, lineHeight: 1.5 }}>{m.text}</p>
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
