# Draaiboek: de demo-opname

De demo van de talk is de migratie van **deze presentatie zelf**: van GitHub
Pages (Microsoft) naar Scaleway (nl-ams). De demo-slide speelt een opname af —
bewust geen live demo, dus op het podium kan niets misgaan.

De repo bevat alles om de migratie echt uit te voeren: `Dockerfile` (nginx,
twee regels) en `config/deploy.yml` (Kamal).

## 1. Voorbereiding (eenmalig)

1. Maak een Scaleway-instance aan (DEV1-S is genoeg) in `nl-ams`, Ubuntu LTS,
   met je SSH-key.
2. Maak een Container Registry-namespace aan: `rg.nl-ams.scw.cloud/<naam>`.
3. Vul in `config/deploy.yml` het instance-IP, je domein en de registry in.
4. Zet de Scaleway secret key in `.kamal/secrets`:
   `KAMAL_REGISTRY_PASSWORD=$SCW_SECRET_KEY`
5. DNS: maak een A-record (`talk.xprtz.cloud → <instance-ip>`) en zet de
   **TTL laag** (300s of minder) ruim vóór de opnamedag.
6. Eerste keer: `kamal setup` (installeert Docker + kamal-proxy op de server).
   Daarna is elke deploy `kamal deploy`.

## 2. De opname

Neem de terminal op met je normale schermrecorder (QuickTime/OBS), of gebruik
`asciinema rec` als je een tekstopname wilt. Opnametips:

- Terminal fullscreen, donker thema, lettergrootte 18+ (leesbaar achterin de zaal).
- Script van de opname (exact wat de slide nu ook als replay toont):
  1. `cat Dockerfile` — laat zien: twee regels.
  2. `cat config/deploy.yml` — wijs de twee regels aan die de bestemming bepalen.
  3. `kamal deploy` — laat de hele run lopen; de eindtijd is je nummer.
  4. `dig +short talk.xprtz.cloud` — het bewijs.
- Doe eerst een oefenrun (image staat dan gecached en de echte run is snel en strak).
- Laat fouten die je tegenkomt in de voorbereiding niet weggooien — dat is
  materiaal voor een "wat er misging"-moment in de talk.

## 3. De opname in de presentatie zetten

Zet het bestand als `public/demo.webm` (of `public/demo.mp4`) in de repo en
push. De demo-slide detecteert het bestand en speelt automatisch de video af
in plaats van de gescripte replay. Geen bestand = replay als vangnet.

Webm met VP9 blijft het kleinst; mp4 (H.264) werkt overal. Houd het bestand
onder de ~50 MB voor een vlotte eerste load via Pages.

## 4. Live-variant (optioneel, voor de durfals)

Wil je het tóch live doen: draai vooraf `kamal setup` + één deploy zodat alles
warm staat, en doe op het podium alleen de laatste `kamal deploy` + `dig`.
Fallback is altijd de slide met de opname — één toets verder.
