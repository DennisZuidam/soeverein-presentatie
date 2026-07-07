import { Slide, Reveal } from '../components/ui.jsx'

// De schrik-opener: het scenario vóór de introductie.
export default function SlideScenario() {
  return (
    <Slide className="center">
      <Reveal i={0}>
        <h2 className="display" style={{ fontSize: 72, maxWidth: 1040 }}>
          Stel: morgen staat je productie-account <span className="gold">op slot.</span>
        </h2>
      </Reveal>
      <Reveal i={3}>
        <p className="lede" style={{ marginTop: 38, fontSize: 25, maxWidth: 880 }}>
          Niet gehackt. Gewoon dichtgezet.
        </p>
      </Reveal>
      <Reveal i={5}>
        <p className="lede" style={{ marginTop: 20, fontSize: 25, color: 'var(--text)', fontWeight: 600 }}>
          Wat is dan je plan B?
        </p>
      </Reveal>
    </Slide>
  )
}
