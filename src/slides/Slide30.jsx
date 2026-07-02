import { Slide, Reveal } from '../components/ui.jsx'

// Divider Deel 1
export default function SlideDivider1() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit" className="center">
      <Reveal i={0}>
        <h2 className="display" style={{ fontSize: 82 }}>
          Je hebt je cloud
          <br />
          <span className="gold">nooit gekozen.</span>
        </h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ marginTop: 38, maxWidth: 920 }}>
          Iemand deed ooit een <span className="mono">terraform apply</span>, en zeven jaar later zit je vast.
          Niet aan de container (die tilt zo over), maar aan je state, je identiteit en het aantal
          partijen dat je provider kan dwingen.
        </p>
      </Reveal>
    </Slide>
  )
}
