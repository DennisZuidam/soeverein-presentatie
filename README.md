# eu-west-1 is nog geen Europa

Presentatie-app voor de talk van Dennis Zuidam (XPRTZ) over keuzevrijheid,
cloud-agnostisch bouwen en waarom soevereiniteit een bijproduct is.

Gebouwd met Vite + React + Framer Motion: een fullscreen slidedeck (16:9,
schaalt automatisch mee met het scherm) met vloeiende animaties, donker
design en EU-blauw/goud accenten.

**Live:** https://denniszuidam.github.io/soeverein-presentatie/ — elke push
wordt automatisch gebouwd en gedeployed via GitHub Actions
(`.github/workflows/deploy.yml`).

## Starten

```bash
npm install
npm run dev        # ontwikkelserver
npm run build      # productie-build naar dist/
npm run preview    # serveer de build lokaal
```

## Bediening

| Toets | Actie |
| --- | --- |
| `→` `Space` `PageDown` | volgende slide |
| `←` `PageUp` | vorige slide |
| `Home` / `End` | eerste / laatste slide |
| `N` | sprekersnotities tonen/verbergen |
| `F` | fullscreen |

Elke slide heeft een eigen URL (`#12`), dus je kunt direct naar een slide
linken of na een refresh verdergaan waar je was.

## Demo zonder risico

Slide 20 bevat een **gescripte terminal-replay** van de Azure → Scaleway
migratie met Kamal: het `git diff` van de twee gewijzigde configregels en
de volledige `kamal deploy`-output spelen automatisch af als een opname.
Geen live demo, dus er kan op het podium niets misgaan. Opnieuw afspelen
kan met de replay-knop in de terminalbalk.

Het script staat in `src/slides/Slide20.jsx` en is regel voor regel aan te
passen aan de echte deploy-output.

## Structuur

```
src/
  App.jsx                  # shell: navigatie, voortgang, notities, schaling
  styles.css               # design-systeem
  components/
    ui.jsx                 # Slide, Reveal (animaties), Terminal, iconen
    TerminalPlayer.jsx     # gescripte terminal-replay (demo)
  slides/
    Slide01.jsx … Slide23.jsx
    index.jsx              # slide-volgorde + sprekersnotities
```
