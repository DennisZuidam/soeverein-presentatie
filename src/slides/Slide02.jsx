import { Slide, Reveal, Punchline, Icon } from '../components/ui.jsx'

const facts = [
  { icon: 'briefcase', title: 'Directeur', text: 'bij XPRTZ, IT-dienstverlener uit Utrecht' },
  { icon: 'heart', title: 'Thuis', text: 'getrouwd, twee kinderen' },
  { icon: 'activity', title: 'Sport', text: 'gym en hardlopen' },
  { icon: 'bread', title: 'Eigen brood', text: 'ik bak het zelf' },
]

export default function Slide02() {
  return (
    <Slide kicker="Even voorstellen">
      <Reveal i={1}>
        <h2 className="title">Dennis Zuidam</h2>
      </Reveal>
      <div className="intro-grid">
        {facts.map((f, k) => (
          <Reveal key={f.title} i={2 + k} className="card">
            <div className="icon">
              <Icon name={f.icon} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={7}>
        Vandaag niet als verkoper, maar als iemand die zelf bouwt en draait op een Europese cloud.
      </Punchline>
    </Slide>
  )
}
