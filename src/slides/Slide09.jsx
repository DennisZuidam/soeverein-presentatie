import { Slide, Reveal } from '../components/ui.jsx'

export default function Slide09() {
  return (
    <Slide className="center">
      <Reveal i={0}>
        <h2 className="display" style={{ fontSize: 84 }}>
          Soevereiniteit is
          <br />
          niet het doel.
        </h2>
      </Reveal>
      <Reveal i={2}>
        <h2 className="display gold" style={{ fontSize: 84, marginTop: 8 }}>
          Keuzevrijheid wel.
        </h2>
      </Reveal>
    </Slide>
  )
}
