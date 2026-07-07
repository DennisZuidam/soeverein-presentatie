import { Slide, Reveal } from '../components/ui.jsx'

// Persoonlijke intro: per categorie een klein ascii-icoon, regel voor regel
// onthuld (elke pijl toont het volgende blok; `steps` staat in index.jsx).
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
  const punchlineIn = step >= items.length + 1

  return (
    <Slide kicker="Even voorstellen">
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.08fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Reveal i={1}>
            <h2 className="title" style={{ marginBottom: 24 }}>
              Dit verhaal draait bij ons <span className="gold">al in productie.</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="lede">
              Geen plan voor anderen, maar de keuze die wij voor onze eigen software
              allang gemaakt hebben.
            </p>
          </Reveal>
        </div>
        <Reveal i={3}>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="terminal-title">dennis@xprtz:~</span>
            </div>
            <div className="terminal-body" style={{ whiteSpace: 'normal' }}>
              <div style={{ fontFamily: 'var(--mono)' }}>
                <span className="prompt">$ </span>whoami
              </div>
              <div style={{ color: 'var(--gold)', fontWeight: 600, fontFamily: 'var(--mono)', marginTop: 6, marginBottom: 4 }}>
                Dennis Zuidam
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12 }}>
                {items.map((it, i) => (
                  <div
                    key={it.label}
                    style={{ display: 'flex', alignItems: 'center', gap: 20, opacity: step >= i + 1 ? 1 : 0, transition: 'opacity 0.3s ease' }}
                  >
                    <pre style={{ margin: 0, color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.15, width: 104 }}>{it.art}</pre>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 16 }}>
                      <div className="accent" style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{it.label}</div>
                      <div style={{ marginTop: 2 }}>{it.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="punchline" style={{ opacity: punchlineIn ? 1 : 0, transition: 'opacity 0.35s ease' }}>
        <span className="bar" />
        Ik kom je niet bekeren. <span className="gold">Dit is een risicoverhaal, geen kruistocht.</span>
        <span className="sub">Wel een engineer die de rekening en het afbreukrisico ziet.</span>
      </div>
    </Slide>
  )
}
