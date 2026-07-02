import { Slide, Reveal, Punchline, Icon } from '../components/ui.jsx'

const cards = [
  {
    icon: 'briefcase',
    title: 'Wat ik doe',
    text: 'Directeur bij XPRTZ. Ik bouw en draai onze eigen software op een Europese cloud, omdat het beter uitkwam, niet omdat het moest.',
  },
  {
    icon: 'scale',
    title: 'Waarom ik hier sta',
    text: 'Niet als activist met een vlag, maar als engineer die de rekening en het afbreukrisico ziet.',
  },
  {
    icon: 'standard',
    title: 'Wat je meeneemt',
    text: 'Geen bekeringsverhaal. Aan het eind snap je waar je écht vastzit, en wat het kost om weg te kunnen.',
  },
]

export default function Slide02() {
  return (
    <Slide kicker="Even voorstellen">
      <Reveal i={1}>
        <h2 className="title" style={{ maxWidth: 1080 }}>
          Stel: morgen staat je productie-account op slot.
          <span className="muted" style={{ display: 'block', fontSize: 22, fontWeight: 450, marginTop: 12, letterSpacing: 0, lineHeight: 1.4 }}>
            Niet gehackt. Gewoon dichtgezet door iemand die je nooit gesproken hebt.
            Wat is dan je plan B?
          </span>
        </h2>
      </Reveal>
      <div className="cards three">
        {cards.map((c, k) => (
          <Reveal key={c.title} i={2 + k} className="card">
            <div className="icon">
              <Icon name={c.icon} />
            </div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={6} sub="De vraag van vandaag is niet Amerikaans of Europees. De vraag is: kun je weg als je weg wilt?">
        Ik kom je niet bekeren. <span className="gold">Dit is een risicoverhaal, geen kruistocht.</span>
      </Punchline>
    </Slide>
  )
}
