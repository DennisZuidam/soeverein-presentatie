import { Slide, Reveal } from '../components/ui.jsx'

// Slotwoord: het hele verhaal komt hier samen in één woord. Bewust stark en
// leeg; de meetlat-vraag (volgende slide) blijft daarna staan tijdens de Q&A.
export default function Slide38() {
  return (
    <Slide className="center">
      <Reveal i={1}>
        <h2 className="display gold" style={{ fontSize: 118 }}>
          Keuzevrijheid.
        </h2>
      </Reveal>
    </Slide>
  )
}
