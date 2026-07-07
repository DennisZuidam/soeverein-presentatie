import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const smart = [
  'Startup die snelheid koopt: managed alles, vrijheid later.',
  'Weinig state: je exit past in een weekend.',
  'Je kent de rente: switchkosten vooraf doorgerekend.',
]

const bill = [
  'Jaren state in een eigen datamodel: herschrijven, niet exporteren.',
  'Identiteit verweven: niet je servers, jíj zit vast.',
  'De aflosdatum kiest je leverancier: prijs, licentie, coercion point.',
]

export default function SlideLockinLoan() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title">Lock-in is een lening</h2>
      </Reveal>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div className="cards two" style={{ width: '100%' }}>
          <Reveal i={2} className="card" style={{ borderColor: 'rgba(74,222,128,0.3)' }}>
            <div className="card-tag" style={{ color: 'var(--green)' }}>Slim lenen · lage rente</div>
            <div className="checklist pro" style={{ marginTop: 6 }}>
              {smart.map((s) => (
                <div key={s} className="item" style={{ fontSize: 16 }}>{s}</div>
              ))}
            </div>
          </Reveal>
          <Reveal i={3} className="card" style={{ borderColor: 'rgba(248,113,113,0.32)' }}>
            <div className="card-tag" style={{ color: 'var(--red)' }}>Dan komt de rekening</div>
            <div className="checklist" style={{ marginTop: 6 }}>
              {bill.map((b) => (
                <div key={b} className="item" style={{ fontSize: 16 }}>{b}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <Punchline i={5}>
        Bereken je exit door <span className="gold">vóór je instapt.</span>
      </Punchline>
    </Slide>
  )
}
