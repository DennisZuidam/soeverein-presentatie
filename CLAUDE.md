# CLAUDE.md — Projectgids

Dit is de slidedeck voor de talk **"eu-west-1 is nog geen Europa"** van Dennis
Zuidam (XPRTZ), voor het eerst gehouden op Werkspoort Talks, 16 juli 2026.
Live: https://denniszuidam.github.io/soeverein-presentatie/

## Wat voor talk dit is (belangrijk voor elke inhoudelijke keuze)

Dit is een **bewustwordingspraatje**, geen technisch college. De rode draad:
"Europees kiezen" is een bestemming, **keuzevrijheid** (porteerbaarheid) is een
eigenschap van je architectuur — en pas dat tweede maakt je echt vrij. De enige
technische diepte zit in de **live demo** (deze presentatie zelf live van Azure
naar Scaleway verplaatsen met Kamal). Alle andere slides bouwen op onderbouwde
feiten en onderzoek (Gartner, ISO 19941, DORA, DHH/37signals, Franse Senaat,
EO 14409, EU Tech Sovereignty Package), niet op techniek.

Verhaallijn in drie delen met intro en epiloog:
- **Intro** — de haak (koud scenario) + wie ik ben
- **Deel 1 · Waarom je vastzit**
- **Deel 2 · Wie zich al bevrijdde**
- **Deel 3 · Hoe je het zelf bouwt** (incl. demo)
- **Epiloog** — begin morgen
- **Bijlage** — reserveslides voor de Q&A

## Harde conventies (niet overtreden)

- **Weinig tekst op slides.** Alleen steekwoorden en cijfers. Dennis brengt het
  verhaal; de slide is een geheugensteun, geen script. Bij twijfel: schrap tekst.
- **Geen koppelstreepjes (— of –) in lopende zinnen.** Niet in slide-prose, niet
  in de spreektekst-prose, niet in de reminder-mail. Een middenpunt `·` als
  scheidingsteken in korte labels/programmaregels mag wel. Gebruik gewone komma's,
  puntkomma's of losse zinnen in plaats van gedachtestreepjes.
- **De punchline onderaan een slide is een verticale gouden accentlijn**, geen
  geel balkje. Zie `.punchline` in `src/styles.css` (border-left, geen `.bar`).
- **Modelnaam/‑ID hoort nergens in de repo** (geen commits, PR's, comments of
  bestanden). Alleen in de chat.

## Wat NIET in de repo hoort

- **De spreektekst** (`SPREEKTEKST.md`) staat bewust buiten de repo, in de
  scratchpad van de werksessie. Nooit committen.
- **De sprekerskaartjes** (A5 PDF + genereer-scripts) horen ook niet in de repo.
- Tijdelijke helper-scripts (screenshot, kaartjes bouwen) na gebruik weer
  verwijderen zodat de repo schoon blijft.

## Techniek

- **React + Vite + framer-motion**, 16:9 stage die automatisch schaalt naar het
  scherm (`useFitScale` in `src/App.jsx`, basis 1280×720).
- **Navigatie via de URL-hash**: `#17` toont slide 17 (1-geïndexeerd).
  Pijltjes links/rechts navigeren; binnen een slide met `steps` lopen ze eerst
  door de reveals.
- **Slide-registratie: `src/slides/index.jsx`.** Dat is de bron van waarheid voor
  de **volgorde** en de **spreeknotities**. De bestandsnaam (`Slide33.jsx`) zegt
  NIETS over de plek in de deck — alleen de volgorde in de `slides`-array telt.
  Elk item: `{ Component, steps?, notes }`.
- **Stap-reveals:** zet `steps: N` op een slide-item; de component krijgt dan een
  `step`-prop en gate't content met `step >= k`. Slides zónder `steps` gebruiken
  `Reveal` dat bij mount automatisch gestaggerd inkomt (delay op basis van `i`).

### UI-componenten (`src/components/ui.jsx`)

`Slide` (kicker + children), `Reveal` (gestaggerde fade-in, prop `i`),
`Punchline` (verticale accentlijn onderaan), `Icon`, `Terminal`,
`TerminalPlayer`.

### CSS (`src/styles.css`)

Klassen: `.card`, `.cards.two/.three/.four`, `.geo-row`/`.city`/`.role`,
`.card-tag`, `.punchline`/`.sub`, `.title`, `.lede`, `.mono`, `.gold`, `.kicker`.
Kleur-vars: `--gold`, `--red`, `--text`, `--faint`, `--muted`.

## Slidevolgorde (38 slides, stand 16 juli 2026)

```
Intro
  1  Slide01            Titel / stelling
  2  Slide36            Koud scenario (plan B?)
  3  Slide02  (3 st.)   whoami / kennismaking
Deel 1 · Waarom je vastzit
  4  Slide30            Divider Deel 1
  5  Slide04            Waar begint lock-in
  6  Slide05            Lock-in concreet (data/identiteit/verkeer)
  7  Slide32            Lock-in is een lening
  8  Slide06            Buitenwereld reikt in je cloud (4 cases)
  9  Slide37            Franse Senaat, onder ede
  10 Slide08  (5 st.)   Solvinity / DigiD
  11 Slide07            eu-west-1: alleen de servers staan hier
  12 SlideEncryption    Geen technische truc houdt de wet tegen
  13 Slide28            AI-poort (EO 14409)
  14 Slide09            Kernzin: keuzevrijheid, niet soevereiniteit
Deel 2 · Wie zich al bevrijdde
  15 Slide26            Twee bewegingen (bestemming vs porteerbaarheid)
  16 Slide31            Divider Deel 2
  17 Slide33            Wie al vertrok, en wat vast blijft zitten
  18 Slide14            De beweging is breed (FtM, Airbus, DNB, Rijk)
  19 Slide10            DHH / 37signals
  20 Slide11            Kelsey Hightower
  21 Slide15            Je hebt de wind mee (EU-beleid)
  22 SlideGartner       En het is geen niche (61%)
Deel 3 · Hoe je het zelf bouwt
  23 Slide29            Divider Deel 3
  24 Slide13            De container is het makkelijke deel
  25 Slide34            Time-to-exit / cost-to-exit (de meetlat)
  26 Slide24  (5 st.)   Wat krijg je ervoor terug
  27 Slide19            Demo-intro
  28 SlideLiveDemo (6)  De live demo (gescript)
  29 Slide35            Scorecard per laag
Epiloog
  30 Slide21  (1 st.)   Begin morgen (4 stappen)
  31 Slide22            Code staat op GitHub (ironie = het punt)
  32 Slide38            Slotwoord: keuzevrijheid
  33 Slide23            Meetlat-vraag (blijft staan tijdens Q&A)
  34 SlideThanks        Bedankt
Bijlage · reserveslides
  35 Slide16            Lagen + open standaarden
  36 Slide18            Eerlijke kanttekeningen bij alternatieven
  37 Slide17  (1 st.)   Vier plekken vast-of-vrij
  38 SlideBronnen       Bronvermelding (alleen tonen bij Q&A-vraag)
```

## Sprekerskaartjes (buiten de repo)

A5-liggend (210×148mm), één kaart per slide: screenshot + slidenummer + titel +
de volledige spreektekst, met auto-fit lettergrootte (binary search) zodat elke
kaart de ruimte vult. Pipeline (allemaal in de scratchpad):
1. Parse `src/slides/index.jsx` → volgorde + notities.
2. Parse `SPREEKTEKST.md` → per slide de gesproken tekst.
3. Playwright-screenshots per slide (chromium op
   `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`, viewport 1600×900,
   deviceScaleFactor 2). Reveals komen vanzelf op; wachten ~3,5s per slide.
4. HTML → PDF (`Sprekerskaartjes-A5.pdf`).

Playwright-scripts moeten vanuit de **repo-dir** draaien (voor module-resolutie);
schrijf een tijdelijk `.mjs` in de repo-root, draai het, verwijder het weer.

## Git

- Ontwikkelbranch: **`claude/multi-cloud-presentation-demo-6jrknh`**.
- Commitberichten eindigen op de vaste `Co-Authored-By:`- en
  `Claude-Session:`-trailers (zie bestaande commits).
- Push met `git push -u origin <branch>`.

## Handige commando's

```
npm run dev      # dev-server (poort 5173, soms 5174)
npm run build    # productiebuild
npm run preview  # build lokaal bekijken
```

## Netwerk

Directe fetches naar veel externe sites (arxiv.org, gartner.com, meetup.com,
werkspoortalks.events) worden door het egress-beleid geblokkeerd (403). Gebruik
`WebSearch` om feiten te verifiëren.
