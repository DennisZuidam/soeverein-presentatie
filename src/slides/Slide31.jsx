import { Slide, Reveal, PartMarker } from '../components/ui.jsx'

// Divider Deel 2
export default function SlideDivider2() {
  return (
    <Slide kicker="Deel 2" className="center">
      <Reveal i={0}>
        <h2 className="display" style={{ fontSize: 86 }}>
          Dit is <span className="gold">geen theorie.</span>
        </h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ marginTop: 34, fontSize: 24 }}>
          Van een team van tien tot een centrale bank: ze zijn al onderweg.
        </p>
      </Reveal>
      <PartMarker current={1} />
    </Slide>
  )
}
