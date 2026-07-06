import { Slide, Reveal, Punchline } from '../components/ui.jsx'

const smart = [
  'Startup die snelheid koopt: managed alles, time-to-market boven alles. Bewust toekomstige vrijheid ruilen voor een voorsprong nu.',
  'Kort aflosbaar: weinig state, kleine dataset, exit past in een weekend.',
  'Je kent de rente: switchkosten doorgerekend vóór je tekent, niet ontdekt als je weg wil.',
]

const bill = [
  'Drie jaar state in een proprietary datamodel: exporteren bestaat niet, je herschrijft.',
  'Identiteit verweven met de provider: IAM, SSO, org policies. Niet je servers zitten vast, jij zit vast.',
  'De aflosdatum kiest je leverancier: een prijsverhoging, een licentiewijziging, een coercion point.',
]

export default function SlideLockinLoan() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title">Lock-in is geen zonde, het is een lening</h2>
      </Reveal>
      <div className="cards two" style={{ flex: 1, alignItems: 'start' }}>
        <Reveal i={2} className="card" style={{ height: '100%', borderColor: 'rgba(74,222,128,0.3)' }}>
          <div className="card-tag" style={{ color: 'var(--green)' }}>Slim lenen · lage rente</div>
          <div className="checklist pro" style={{ marginTop: 6 }}>
            {smart.map((s) => (
              <div key={s} className="item" style={{ fontSize: 16 }}>{s}</div>
            ))}
          </div>
        </Reveal>
        <Reveal i={3} className="card" style={{ height: '100%', borderColor: 'rgba(248,113,113,0.32)' }}>
          <div className="card-tag" style={{ color: 'var(--red)' }}>Dan komt de rekening</div>
          <div className="checklist" style={{ marginTop: 6 }}>
            {bill.map((b) => (
              <div key={b} className="item" style={{ fontSize: 16 }}>{b}</div>
            ))}
          </div>
        </Reveal>
      </div>
      <Punchline i={5} sub="De rente betaal je niet in containers, maar in state, identiteit en het aantal partijen dat je provider kan dwingen.">
        Reken je exit door <span className="gold">vóór je instapt.</span>
      </Punchline>
    </Slide>
  )
}
