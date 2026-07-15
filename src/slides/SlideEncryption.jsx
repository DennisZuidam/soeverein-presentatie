import { Slide, Reveal, Punchline } from '../components/ui.jsx'

// Volgt op slide 12 (eu-west-1 / CLOUD Act): techniek verslaat jurisdictie niet.
// Encryptie en "sovereign clouds" verplaatsen de data, niet de bevoegdheid.
const cards = [
  {
    tag: 'Sleutel bij de provider',
    title: 'Dan ontsleutelt de provider',
    text: 'De CLOUD Act eist data in "possession, custody, or control", in leesbare vorm. Staat je data versleuteld in Frankfurt maar beheert AWS de sleutel? Dan gebruiken ze die als een rechter dat beveelt.',
  },
  {
    tag: 'BYOK verschuift het alleen',
    title: 'Escrow zet de toegang terug',
    text: 'Bring Your Own Key voelt veiliger, maar voor de werking wil de provider je sleutel in escrow. Daarmee is het toegangspad er weer. Alleen een sleutel die de provider nóóit heeft, valt buiten bereik.',
  },
  {
    tag: 'Ook de "sovereign clouds"',
    title: 'Alle drie geprobeerd',
    text: 'AWS European Sovereign Cloud, Microsoft EU Data Boundary, Google S3NS met Thales: EU-entiteit, lokale partner, eigen personeel. En tóch gaf Microsoft onder ede toe dat het geen garantie kan geven.',
  },
]

export default function SlideEncryption() {
  return (
    <Slide kicker="Deel 1 · Waarom je vastzit">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 10 }}>Encryptie is geen ontsnapping</h2>
      </Reveal>
      <Reveal i={2}>
        <p className="lede" style={{ fontSize: 18, marginBottom: 22, maxWidth: 1000 }}>
          De CLOUD Act pakt niet de plek van je server, maar de{' '}
          <strong style={{ color: 'var(--text)' }}>controle</strong> over je data. Kan je provider bij de sleutel, dan telt dat als "in hun beheer".
        </p>
      </Reveal>
      <div className="cards three">
        {cards.map((c, k) => (
          <Reveal key={c.tag} i={3 + k} className="card" style={{ padding: '22px 24px' }}>
            <div className="card-tag" style={{ color: 'var(--red)' }}>{c.tag}</div>
            <h3 style={{ fontSize: 18 }}>{c.title}</h3>
            <p style={{ fontSize: 14.5 }}>{c.text}</p>
          </Reveal>
        ))}
      </div>
      <Punchline i={7}>
        Techniek verplaatst je data. <span className="gold">Niet de jurisdictie.</span>
      </Punchline>
    </Slide>
  )
}
