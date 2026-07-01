import { Slide, Reveal } from '../components/ui.jsx'

export default function SlideTransition() {
  return (
    <Slide kicker="Deel 3 · Zo bouw je voor keuzevrijheid" className="center">
      <Reveal i={0}>
        <h2 className="display" style={{ fontSize: 84 }}>
          Zij deden het.
          <br />
          <span className="gold">Nu jij.</span>
        </h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ marginTop: 40, maxWidth: 820 }}>
          Hoe bouw je zo dat wisselen van provider een keuze blijft,
          en geen project wordt?
        </p>
      </Reveal>
    </Slide>
  )
}
