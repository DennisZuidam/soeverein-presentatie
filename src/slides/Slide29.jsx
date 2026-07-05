import { Slide, Reveal, PartMarker } from '../components/ui.jsx'

// Divider Deel 3
export default function SlideDivider3() {
  return (
    <Slide kicker="Deel 3" className="center">
      <Reveal i={0}>
        <h2 className="display" style={{ fontSize: 78 }}>
          De container is
          <br />
          het <span className="gold">makkelijke</span> deel.
        </h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ marginTop: 38, maxWidth: 900 }}>
          Nu het deel dat niet vanzelf meeverhuist. Daar zit de lock-in, en daar begint jouw werk.
        </p>
      </Reveal>
      <PartMarker current={2} />
    </Slide>
  )
}
