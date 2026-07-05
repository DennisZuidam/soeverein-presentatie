import { Slide, Reveal } from '../components/ui.jsx'

// De Franse Senaatsquote, onder ede. Het sterkste dramatische moment van Deel 1.
export default function SlideSenate() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit" className="center">
      <Reveal i={1} className="quote-mark" style={{ alignSelf: 'flex-start', marginLeft: 100 }}>“</Reveal>
      <Reveal i={1}>
        <p className="quote large">
          Non, je ne peux pas
          <br />
          <span className="gold">le garantir.</span>
        </p>
      </Reveal>
      <Reveal i={3} className="quote-attrib" style={{ justifyContent: 'center' }}>
        <span className="who">Anton Carniaux</span>
        <span className="sep">·</span>
        <span>Microsoft France</span>
        <span className="sep">·</span>
        <span>Franse Senaat, onder ede</span>
        <span className="sep">·</span>
        <span>10 juni 2025</span>
      </Reveal>
      <Reveal i={5}>
        <p className="lede" style={{ marginTop: 40, fontSize: 21, maxWidth: 900 }}>
          De vraag was of Franse data ooit zonder Franse toestemming aan de VS wordt overgedragen.
          Dit was het antwoord.
        </p>
      </Reveal>
    </Slide>
  )
}
