import { Slide, Reveal } from '../components/ui.jsx'

const links = [
  { what: 'LinkedIn', where: 'linkedin.com/in/denniszuidam' },
  { what: 'GitHub', where: 'github.com/xprtz/sovereign-demo' },
  { what: 'Kamal', where: 'kamal-deploy.org' },
  { what: 'Lees meer', where: 'european-alternatives.eu' },
]

// Dit scherm staat de hele Q&A aan. Niet het bedankje maar de meetlat
// verdient die schermtijd.
export default function Slide23() {
  return (
    <Slide className="center">
      <Reveal i={0}>
        <p className="lede" style={{ fontSize: 22 }}>De vraag om mee naar huis te nemen:</p>
      </Reveal>
      <Reveal i={1}>
        <h2 className="display" style={{ fontSize: 60, maxWidth: 1080, marginTop: 18 }}>
          In hoeveel weken en voor hoeveel euro <span className="gold">zijn we weg?</span>
        </h2>
      </Reveal>
      <Reveal i={3}>
        <p className="lede" style={{ marginTop: 26, fontSize: 20 }}>
          Leg hem ook langs de sprekers van vanavond.
        </p>
      </Reveal>
      <Reveal i={4} style={{ marginTop: 56, width: '100%' }}>
        <div className="link-cards">
          {links.map((l) => (
            <div key={l.what} className="link-card">
              <div className="what">{l.what}</div>
              <div className="where mono" style={{ fontSize: 14 }}>{l.where}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Slide>
  )
}
