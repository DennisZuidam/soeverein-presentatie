import { Slide, Reveal } from '../components/ui.jsx'

export default function Slide10() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1} className="quote-mark">“</Reveal>
      <Reveal i={1}>
        <p className="quote">
          The cloud is great for startups and variable workloads. But once you have
          predictable patterns, you're just paying a massive premium for flexibility
          you don't need.
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
          <span>Infra-rekening: van <strong>$3,2M naar minder dan $1M per jaar</strong>. Ruim $10M besparing in vijf jaar</span>
        </Reveal>
        <Reveal i={4} className="fact">
          <span>S3-exit: <strong>~10 PB</strong> uit S3 naar eigen Pure Storage (18 PB capaciteit). $1,5M eenmalig, &lt;$200K/jaar beheer</span>
        </Reveal>
        <Reveal i={5} className="fact">
          <span>Zomer 2025: het complete AWS-account verwijderd. Niet naar een Europese cloud, maar eigen infra. <strong>Zijn keuze.</strong></span>
        </Reveal>
      </div>
      <Reveal i={6} style={{ marginTop: 'auto' }}>
        <p className="muted" style={{ fontSize: 16.5 }}>
          <span className="gold">→</span>&ensp;DHH maakte ook Kamal, het deploy-tool dat straks in de demo te zien is. Geen toeval.
        </p>
      </Reveal>
    </Slide>
  )
}
