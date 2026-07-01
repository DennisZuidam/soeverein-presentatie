import { Slide, Reveal, Punchline } from '../components/ui.jsx'

export default function SlideTwoMoves() {
  return (
    <Slide kicker="Deel 2 · Wie zichzelf al de vrijheid gaf">
      <Reveal i={1}>
        <h2 className="title">
          Europees kiezen <span className="gold">≠</span> keuzevrijheid
        </h2>
      </Reveal>
      <div className="cards two" style={{ flex: 1, alignItems: 'stretch' }}>
        <Reveal i={2} className="card" style={{ borderColor: 'rgba(110,160,255,0.4)', justifyContent: 'center' }}>
          <div className="card-tag">Europees kiezen</div>
          <h3 style={{ fontSize: 26 }}>Een bestemming</h3>
          <p style={{ fontSize: 17, lineHeight: 1.6 }}>
            Je verhuist de afhankelijkheid. Andere vlag, zelfde risico zodra je
            er niet meer weg kunt. Zie Solvinity.
          </p>
        </Reveal>
        <Reveal i={3} className="card" style={{ borderColor: 'rgba(255,204,51,0.4)', justifyContent: 'center' }}>
          <div className="card-tag" style={{ color: 'var(--gold)' }}>Keuzevrijheid</div>
          <h3 style={{ fontSize: 26 }}>Een eigenschap van je architectuur</h3>
          <p style={{ fontSize: 17, lineHeight: 1.6 }}>
            Containers, open standaarden, porteerbare data. Werkt voor élke
            bestemming: Europees, eigen infra, of toch een hyperscaler.
          </p>
        </Reveal>
      </div>
      <Punchline i={5}>
        Keuzevrijheid maakt Europees kiezen pas <span className="gold">veilig</span>, niet andersom.
      </Punchline>
    </Slide>
  )
}
