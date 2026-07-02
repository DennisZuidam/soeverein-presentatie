import { Slide, Reveal, Punchline } from '../components/ui.jsx'

export default function Slide12() {
  return (
    <Slide kicker="Deel 2 · Wie zich al bevrijdde">
      <Reveal i={1} className="quote-mark">“</Reveal>
      <Reveal i={1}>
        <p className="quote large">
          I won't connect my dishwasher
          <br />
          to your <span className="red">stupid cloud</span>.
        </p>
      </Reveal>
      <Reveal i={3} className="quote-attrib">
        <span className="who">Jeff Geerling</span>
        <span className="sep">·</span>
        <span>blog, maart 2025</span>
      </Reveal>
      <Reveal i={4}>
        <p className="lede" style={{ marginTop: 36, fontSize: 20, maxWidth: 860 }}>
          Gedwongen afhankelijk van de cloud, voor iets dat prima op zichzelf werkt.
        </p>
      </Reveal>
      <Punchline i={5}>
        Hetzelfde principe, of het nu je vaatwasser is of je productie-database:
        <br />
        <span className="gold" style={{ paddingLeft: 50 }}>lokaal eerst, cloud als keuze.</span>
      </Punchline>
    </Slide>
  )
}
