import { Slide, Reveal } from '../components/ui.jsx'

export default function Slide03() {
  return (
    <Slide className="center">
      <Reveal i={0}>
        <h2 className="display" style={{ maxWidth: 980 }}>
          Wanneer heb jij voor het laatst <span className="gold">bewust gekozen</span> voor je cloudprovider?
        </h2>
      </Reveal>
      <Reveal i={3}>
        <p className="lede" style={{ marginTop: 38, fontSize: 27 }}>
          Of was het gewoon de default?
        </p>
      </Reveal>
    </Slide>
  )
}
