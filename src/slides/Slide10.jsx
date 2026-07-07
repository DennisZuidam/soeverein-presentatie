import { Slide, Reveal } from '../components/ui.jsx'

export default function Slide10() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1} className="quote-mark">“</Reveal>
      <Reveal i={1}>
        <p className="quote">
          Renting computers is (mostly) a bad deal for medium-sized companies
          like ours with stable growth. The savings promised in reduced
          complexity never materialized.
        </p>
      </Reveal>
      <Reveal i={2} className="quote-attrib">
        <span className="who">David Heinemeier Hansson (DHH)</span>
        <span className="sep">·</span>
        <span>CTO 37signals</span>
        <span className="sep">·</span>
        <span>maker van Ruby on Rails &amp; Kamal</span>
      </Reveal>
      <div className="quote-facts">
        <Reveal i={3} className="fact">
          <span>Infra van <strong>$3,2M naar minder dan $1M</strong> per jaar</span>
        </Reveal>
        <Reveal i={4} className="fact">
          <span>S3-exit: <strong>~10 PB</strong> naar eigen opslag</span>
        </Reveal>
        <Reveal i={5} className="fact">
          <span>Zomer 2025: het complete AWS-account weg. <strong>Zijn keuze.</strong></span>
        </Reveal>
      </div>
    </Slide>
  )
}
