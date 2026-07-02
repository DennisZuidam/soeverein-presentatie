import { Slide, Reveal } from '../components/ui.jsx'

export default function Slide11() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde" className="center">
      <Reveal i={1} className="quote-mark" style={{ alignSelf: 'flex-start', marginLeft: 100 }}>“</Reveal>
      <Reveal i={1}>
        <p className="quote large">
          The ability to move the needle
          <br />
          <span className="gold">without permission</span>
          <br />
          is a form of sovereignty.
        </p>
      </Reveal>
      <Reveal i={3} className="quote-attrib" style={{ justifyContent: 'center' }}>
        <span className="who">Kelsey Hightower</span>
        <span className="sep">·</span>
        <span>voormalig Google</span>
        <span className="sep">·</span>
        <span>Civo Navigate London 2025</span>
      </Reveal>
    </Slide>
  )
}
