import { Slide, Reveal } from '../components/ui.jsx'

// Divider Deel 3
export default function SlideDivider3() {
  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt" className="center">
      <Reveal i={0}>
        <h2 className="display" style={{ fontSize: 78 }}>
          De container is
          <br />
          het <span className="gold">makkelijke</span> deel.
        </h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ marginTop: 38, maxWidth: 900 }}>
          Nu de rest: je data, je identiteit, en het aantal partijen dat je provider kan dwingen.
          Daar zit de lock-in, en daar begint jouw werk.
        </p>
      </Reveal>
    </Slide>
  )
}
