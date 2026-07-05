# eu-west-1 is nog geen Europa

Presentatie-app voor de talk van Dennis Zuidam (XPRTZ) over keuzevrijheid,
porteerbaar bouwen en waarom soevereiniteit een bijproduct is.

Gebouwd met Vite + React + Framer Motion: een fullscreen slidedeck (16:9,
schaalt automatisch mee met het scherm) met vloeiende animaties, donker
design en EU-blauw/goud accenten.

**Live:** https://denniszuidam.github.io/soeverein-presentatie/. Elke push
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

De demo van de talk is de migratie van een **app plus PostgreSQL** van een
Amerikaanse provider naar Scaleway (nl-ams), met Kamal. De repo bevat de
deploy-artefacten (`Dockerfile`, `config/deploy.yml`); zie `DEMO.md` voor
het volledige draaiboek, inclusief opnametips en de simpele fallback-variant
(alleen deze stateless presentatie migreren).

De demo-slide toont een **gescripte terminal-replay** als vangnet, eerlijk
gelabeld als gescripte weergave. Zet de echte opname als `public/demo.webm`
of `public/demo.mp4` in de repo en de slide speelt automatisch de video af.
Het replay-script staat in `src/slides/Slide20.jsx`.

## Structuur

```
src/
  App.jsx                  # shell: navigatie, voortgang, notities, schaling
  styles.css               # design-systeem
  components/
    ui.jsx                 # Slide, Reveal (animaties), Terminal, iconen
    TerminalPlayer.jsx     # gescripte terminal-replay (demo)
  slides/
    SlideNN.jsx            # losse slides (bestandsnaam ≠ volgorde)
    index.jsx              # slide-volgorde + sprekersnotities (bron van waarheid)
```
