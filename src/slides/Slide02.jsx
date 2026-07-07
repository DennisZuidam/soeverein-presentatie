import { Slide, Reveal } from '../components/ui.jsx'

// Echte kennismaking: naam plus drie categorieen met een ascii-icoon, elk per
// pijltje-rechts onthuld (het aantal fragmenten staat als `steps` in index.jsx).
const items = [
  {
    label: 'werk',
    value: 'XPRTZ · Podcasts',
    art: `   ___
  /:::\\
  |:::|
  \\___/
   |_|
  _/ \\_`,
  },
  {
    label: 'gezin',
    value: 'Verloofde · 2 dochters',
    art: `,d88b.d88b,
88888888888
\`Y8888888Y'
  \`Y888Y'
    \`Y'`,
  },
  {
    label: 'hobby',
    value: 'Koken · bakken · sporten',
    art: ` _n_n_n_
(_______)
 |     |
 |_____|`,
  },
]

export default function Slide02({ step = 0 }) {
  return (
    <Slide kicker="Even voorstellen" className="center">
      <Reveal i={1}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 16, letterSpacing: '0.06em', color: 'var(--faint)', marginBottom: 10 }}>
          <span className="gold">$</span> whoami
        </div>
      </Reveal>
      <Reveal i={2}>
        <h2 className="display" style={{ fontSize: 68 }}>
          Dennis <span className="gold">Zuidam</span>
        </h2>
      </Reveal>
      <div style={{ display: 'flex', gap: 40, marginTop: 48, justifyContent: 'center', alignItems: 'flex-start' }}>
        {items.map((it, i) => (
          <div
            key={it.label}
            style={{ width: 240, textAlign: 'center', opacity: step >= i + 1 ? 1 : 0, transition: 'opacity 0.35s ease' }}
          >
            <div style={{ height: 104, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <pre style={{ margin: 0, color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: 14, lineHeight: 1.15, textAlign: 'left' }}>{it.art}</pre>
            </div>
            <div className="accent" style={{ fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 22 }}>{it.label}</div>
            <div style={{ fontSize: 20, marginTop: 6, color: 'var(--text)' }}>{it.value}</div>
          </div>
        ))}
      </div>
    </Slide>
  )
}
