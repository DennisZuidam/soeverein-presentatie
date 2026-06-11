import { Slide, Reveal } from '../components/ui.jsx'

const cases = [
  {
    tag: 'ICC × Microsoft',
    title: 'De aanklager verloor zijn account',
    text: 'Na een Trump-sanctie verloor de aanklager van het Internationaal Strafhof de toegang tot zijn Microsoft-account. Microsoft betwist dat het "blokkeerde" — het effect was er. De ICC stapte over op OpenDesk.',
  },
  {
    tag: 'Follow the Money',
    title: '"Dit Amerikaanse bedrijf weet te veel over ons."',
    text: 'FTM nam na anderhalf jaar afscheid van Cloudflare. De reden was niet een concrete dreiging, maar de leverancier zelf.',
  },
  {
    tag: 'Microsoft × Franse Senaat',
    title: '"Non, je ne peux pas le garantir."',
    text: 'Senator Uzenat vroeg of Franse data nooit zonder Franse toestemming naar de VS gaat. Anton Carniaux (Microsoft France), onder ede, 10 juni 2025: "Als een Amerikaanse rechter ons dwingt, moeten we de data overdragen."',
  },
]

export default function Slide06() {
  return (
    <Slide kicker="Deel 1 — Waarom keuzevrijheid waarde heeft">
      <Reveal i={1}>
        <h2 className="title">Dan komt de buitenwereld erbij</h2>
      </Reveal>
      <div className="cards three">
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
