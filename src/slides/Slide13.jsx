import { Slide, Reveal } from '../components/ui.jsx'

export default function Slide13() {
  return (
    <Slide kicker="Deel 2 — Wie zichzelf al de vrijheid gaf">
      <Reveal i={1} className="quote-mark">“</Reveal>
      <Reveal i={1}>
        <p className="quote" style={{ fontSize: 36 }}>
          Onze infrastructuur draait in eigen beheer of op platformen met Europese
          eigenaren. Dat is soms duurder, onhandig of minder efficiënt. Maar het geeft
          ons de vrijheid om Big Tech aan te pakken <span className="gold">zonder bang te zijn dat onze
          systemen offline worden gehaald</span>.
        </p>
      </Reveal>
      <Reveal i={3} className="quote-attrib">
        <span className="who">The Firewall</span>
        <span className="sep">·</span>
        <span>journalistieke waakhond, opgericht door Eric Smit (mede-oprichter FTM)</span>
      </Reveal>
      <div className="quote-facts">
        <Reveal i={4} className="fact">
          <span>Spande een rechtszaak aan om de overname van Solvinity (DigiD) tegen te houden</span>
        </Reveal>
        <Reveal i={5} className="fact">
          <span>Kiest bewust voor <strong>duurder en onhandiger</strong>, in ruil voor keuzevrijheid</span>
        </Reveal>
        <Reveal i={6} className="fact">
          <span>Eerlijk over de grens: hun banken zijn volledig Big Tech-afhankelijk. <strong>Daar is geen keuze.</strong></span>
        </Reveal>
      </div>
    </Slide>
  )
}
