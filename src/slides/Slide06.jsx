import { Slide, Reveal } from '../components/ui.jsx'

const cases = [
  {
    tag: 'ICC × Microsoft',
    title: 'Account dicht na een sanctie',
    text: 'De aanklager van het Strafhof verloor de toegang tot zijn Microsoft-account. Microsoft betwist de lezing, maar het effect was er.',
  },
  {
    tag: 'AWS × Parler',
    title: 'Binnen 24 uur offline',
    text: 'Na de bestorming van het Capitool trok AWS in 2021 de stekker uit Parler. Eén beslissing, geen platform meer.',
  },
  {
    tag: 'Amazon × WikiLeaks',
    title: 'Eruit onder politieke druk',
    text: 'Amazon zette WikiLeaks in 2010 van zijn servers, na druk uit Washington. Niets illegaals, wel weg.',
  },
  {
    tag: 'Cloud × Rusland',
    title: 'Diensten opgeschort',
    text: 'Na de invasie van Oekraïne schortten AWS, Azure en Google aanmeldingen en diensten in Rusland op.',
  },
]

export default function Slide06() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title">De grote boze buitenwereld</h2>
      </Reveal>
      <div className="cards two" style={{ flex: 1, alignItems: 'stretch', gap: 18 }}>
        {cases.map((c, k) => (
          <Reveal key={c.tag} i={2 + k * 0.5} className="card" style={{ padding: '22px 24px' }}>
            <div className="card-tag">{c.tag}</div>
            <h3 style={{ fontSize: 20 }}>{c.title}</h3>
            <p style={{ fontSize: 15 }}>{c.text}</p>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}
