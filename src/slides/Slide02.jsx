import { Slide, Reveal, Punchline, Terminal } from '../components/ui.jsx'

// Positie 3 · persoonlijke intro: wie is deze man en waarom vertelt hij dit verhaal.
// Concept "skin in the game": geen cv, maar het bewijs dat hij zelf allang doet
// waar de talk over gaat. Het terminaltje stelt de vragen, de punchline geeft antwoord.
export default function Slide02() {
  return (
    <Slide kicker="Even voorstellen">
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1.08fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div>
          <Reveal i={1}>
            <h2 className="title" style={{ marginBottom: 24 }}>
              Dit verhaal draait bij ons <span className="gold">al in productie.</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="lede">
              Wat je vanavond hoort is geen plan voor anderen. Het is de keuze die wij
              voor onze eigen software allang gemaakt hebben.
            </p>
          </Reveal>
        </div>
        <Reveal i={3}>
          <Terminal title="dennis@xprtz:~">
            <span className="prompt">$</span> whoami{'\n'}
            dennis zuidam · directeur bij XPRTZ{'\n'}
            {'\n'}
            <span className="prompt">$</span> waar draait jullie eigen software{'\n'}
            op een <span className="hl">europese cloud</span>{'\n'}
            {'\n'}
            <span className="prompt">$</span> waarom{'\n'}
            omdat het beter uitkwam. niet omdat het moest.{'\n'}
            {'\n'}
            <span className="prompt">$</span> en waarom sta je hier dan <span className="cursor">▌</span>
          </Terminal>
        </Reveal>
      </div>
      <Punchline i={7} sub="Geen activist met een vlag. Wel een engineer die de rekening en het afbreukrisico ziet.">
        Ik kom je niet bekeren. <span className="gold">Dit is een risicoverhaal, geen kruistocht.</span>
      </Punchline>
    </Slide>
  )
}
