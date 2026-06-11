import { Slide, Reveal } from '../components/ui.jsx'

const links = [
  { what: 'LinkedIn', where: 'linkedin.com/in/denniszuidam' },
  { what: 'GitHub', where: 'github.com/xprtz/sovereign-demo' },
  { what: 'Kamal', where: 'kamal-deploy.org' },
  { what: 'Lees meer', where: 'european-alternatives.eu' },
]

export default function Slide23() {
  return (
    <Slide className="center">
      <Reveal i={0}>
        <h2 className="display" style={{ fontSize: 96 }}>Vragen?</h2>
      </Reveal>
      <Reveal i={2} style={{ marginTop: 56, width: '100%' }}>
        <div className="link-cards">
          {links.map((l) => (
            <div key={l.what} className="link-card">
              <div className="what">{l.what}</div>
              <div className="where mono" style={{ fontSize: 12.5 }}>{l.where}</div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal i={4}>
        <p className="lede" style={{ marginTop: 52, fontStyle: 'italic' }}>
          “Soevereiniteit is niet het doel. <span className="gold">Keuzevrijheid wel.</span>”
        </p>
      </Reveal>
    </Slide>
  )
}
