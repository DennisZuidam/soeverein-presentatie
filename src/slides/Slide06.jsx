import { Slide, Reveal } from '../components/ui.jsx'

const cases = [
  {
    tag: 'ICC × Microsoft',
    title: 'De aanklager verloor zijn account',
    text: 'Na een Trump-sanctie verloor de aanklager van het Internationaal Strafhof de toegang tot zijn Microsoft-account. Microsoft betwist dat het "blokkeerde". Het effect was er. De ICC stapte over op OpenDesk.',
  },
  {
    tag: 'Follow the Money',
    title: '"Dit Amerikaanse bedrijf weet te veel over ons."',
    text: 'FTM nam na anderhalf jaar afscheid van Cloudflare. Niet om een concrete dreiging, maar om de leverancier zelf.',
  },
]

export default function Slide06() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title">Dan komt de buitenwereld erbij</h2>
      </Reveal>
      <div className="cards two" style={{ flex: 1, alignItems: 'start' }}>
        {cases.map((c, k) => (
          <Reveal key={c.tag} i={2 + k} className="card">
            <div className="card-tag">{c.tag}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </Reveal>
        ))}
      </div>
    </Slide>
  )
}
