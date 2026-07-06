# Draaiboek: de demo-opname

De demo van de talk is de migratie van een **app plus PostgreSQL** van een
Amerikaanse provider naar Scaleway (nl-ams) met Kamal. De demo-slide speelt
een opname af, bewust geen live demo, dus op het podium kan niets misgaan.
Zolang er geen opname is toont de slide een gescripte replay; het label op de
slide zegt dat dan ook eerlijk ("gescripte weergave van de echte run").

De pointe van de demo: de container is in seconden klaar, de data kost
38 minuten. Dat verschil is de boodschap.

Er is ook een simpele variant (alleen deze stateless presentatie migreren,
`Dockerfile` en `config/deploy.yml` staan in de repo), maar die mist het
datacontrast. Gebruik hem alleen als fallback.

## 1. Voorbereiding (eenmalig)

1. Maak een Scaleway-instance aan (DEV1-S is genoeg) in `nl-ams`, Ubuntu LTS,
   met je SSH-key.
2. Maak een Container Registry-namespace aan: `rg.nl-ams.scw.cloud/<naam>`.
3. Vul in `config/deploy.yml` het instance-IP, je domein en de registry in.
4. Zet de registry secret key in `.kamal/secrets`:
   `KAMAL_REGISTRY_PASSWORD=$SCW_SECRET_KEY`
5. DNS: maak een A-record (`talk.xprtz.cloud → <instance-ip>`) en zet de
   **TTL laag** (300s of minder) ruim vóór de opnamedag.
6. Eerste keer: `kamal setup` (installeert Docker + kamal-proxy op de server).
   Daarna is elke deploy `kamal deploy`.
7. Voor het datacontrast: een testdatabase van ~14 GB. Vul een Postgres bij de
   bronprovider bijvoorbeeld met `pgbench -i -s 1000` en een paar extra
   tabellen met indexes, zodat de restore echt tijd kost. Doe een geklokte
   oefenrun, dan weet je het echte getal en kun je 38 minuten waarmaken of
   bijstellen (slide, terminal-script en notes gebruiken hetzelfde getal).

## 2. De opname

Neem de terminal op met je normale schermrecorder (QuickTime/OBS), of gebruik
`asciinema rec` als je een tekstopname wilt. Opnametips:

- Terminal fullscreen, donker thema, lettergrootte 18+ (leesbaar achterin de
  zaal).
- Houd secrets buiten beeld: gebruik `$SOURCE_URL` / `$TARGET_URL` uit de env.
- Script van de opname (exact wat de slide nu als replay toont):
  1. `kamal deploy`: container healthy in nl-ams, noteer de tijd (bijv. 8,4s).
  2. `curl -s https://<domein>/up`: bewijs dat de app nog naar de
     Amerikaanse database praat (host plus recordcount in de output). Dit is
     de nulmeting voor de symmetrische controle na de cutover.
  3. `pg_dump --format=directory --jobs=4 --verbose "$SOURCE_URL" -f dump/`
     en daarna `pg_restore --jobs=4 --verbose --dbname="$TARGET_URL" dump/`.
     Parallelle dump kan alleen met het directory-format; `--verbose` zorgt
     dat je per tabel en index output ziet (zonder die vlag zijn beide tools
     stil, wat op de opname vreemd oogt). Laat de omvang (GB) en de tijd
     (minuten, vooral index-herbouw) zichtbaar staan. Optioneel: benoem
     logical replication voor near-zero-downtime.
  4. Cutover (Kamal 2): zet `DATABASE_URL` in `.kamal/secrets` om naar de
     nl-ams database en draai `kamal app boot`. Er bestaat geen
     `kamal env push` meer in Kamal 2.
  5. Dezelfde `curl -s https://<domein>/up`: nu `db: nl-ams` met dezelfde
     recordcount. Dat is het bewijs.
  6. `git diff config/deploy.yml`: één regel wisselt Scaleway voor Hetzner of
     STACKIT. Sterkste slotbeeld: keuzevrijheid is een one-liner, de state was
     het werk.
- Knip het `pg_restore`-wachten strak in, maar laat de timer en omvang staan.
- Doe eerst een oefenrun (image gecached, en je weet hoe lang de restore
  duurt).
- Laat fouten uit de voorbereiding niet weggooien: dat is materiaal voor een
  "wat er misging"-moment in de talk.

## 3. De opname in de presentatie zetten

Zet het bestand als `public/demo.webm` (of `public/demo.mp4`) in de repo en
push. De demo-slide detecteert het bestand en speelt automatisch de video af
in plaats van de gescripte replay. Geen bestand = replay als vangnet.

**Let op:** pas bij het toevoegen van de echte opname ook de subtitel op de
demo-slide (`src/slides/Slide20.jsx`) aan van "Gescripte weergave van de
echte run" naar "Opgenomen run".

Webm met VP9 blijft het kleinst; mp4 (H.264) werkt overal. Houd het bestand
onder de ~50 MB voor een vlotte eerste load via Pages.

## 4. Azure-eerst variant (aanbevolen voor de opname)

De sterkste vorm van de demo: de app draait eerst echt bij Microsoft (Azure),
gedeployed via GitHub Actions, en migreert dan naar Scaleway. Dan is
"van Microsoft naar Europese grond" letterlijk waar, en toont de `curl /up`
vóór de cutover een echte `*.postgres.database.azure.com`-host in plaats van
een voorbeeldnaam. Dit hoort thuis in de demo-app-repo
(github.com/xprtz/sovereign-demo), niet in deze presentatie-repo.

**Opzet Azure (de "voor"-situatie):**

1. Eén Ubuntu-VM (B2s is genoeg) met publiek IP en je SSH-key: het
   Kamal-target. Plus een Azure Database for PostgreSQL Flexible Server
   (kleinste burstable tier), zelfde PostgreSQL-major als bij Scaleway
   (anders klaagt pg_restore). Zet SSL aan in de URL (`sslmode=require`)
   en laat de VM door de PG-firewall.
2. Vul de database naar ~14 GB, bijvoorbeeld `pgbench -i -s 1000` plus een
   paar tabellen met extra indexes (de index-herbouw is wat de restore traag
   en dus interessant maakt). Doe een geklokte oefenrun.
3. Kamal 2 kent destinations: houd `config/deploy.yml` op Scaleway (de
   "na"-situatie) en maak een `config/deploy.azure.yml` met het Azure-VM-IP
   en registry. Secrets per destination: `.kamal/secrets-common` voor wat
   gedeeld is, `.kamal/secrets.azure` met de Azure-`DATABASE_URL`.
4. GitHub Actions deployt naar Azure met `kamal deploy -d azure`. Minimaal
   recept in de demo-app-repo:

   ```yaml
   # .github/workflows/deploy-azure.yml
   name: Deploy naar Azure
   on: workflow_dispatch
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: ruby/setup-ruby@v1
           with: { ruby-version: '3.3' }
         - run: gem install kamal
         - uses: webfactory/ssh-agent@v0.9.0
           with: { ssh-private-key: ${{ secrets.KAMAL_SSH_KEY }} }
         - run: kamal deploy -d azure
           env:
             KAMAL_REGISTRY_PASSWORD: ${{ secrets.KAMAL_REGISTRY_PASSWORD }}
   ```

   Kamal draait prima op een Actions-runner: het is build + push + SSH.
   Leuke bijvangst voor het verhaal: de pipeline (GitHub, Microsoft) deployt
   naar Azure (Microsoft), en precies dezelfde pipeline wijst met één
   destination-vlag naar Scaleway.

**De migratie zelf (de opname):** exact het script uit sectie 2, met
`$SOURCE_URL` = Azure PG en `$TARGET_URL` = Scaleway PG. De cutover is
`DATABASE_URL` omzetten in `.kamal/secrets` en `kamal app boot`. De
egress-rekening van 14 GB uit Azure is ongeveer één dollar; ook dat is een
leuk detail voor op het podium.

**Daarna:** zodra de opname op Azure echt gemaakt is, mag de kop van de
demo-slide (`src/slides/Slide20.jsx`) terug naar "van Microsoft naar Europese
grond"; tot die tijd staat er bewust "van een Amerikaanse cloud". Ruim de
Azure-resources na de opname op.

## 5. Live-variant (optioneel, voor de durfals)

Wil je het tóch live doen: draai vooraf `kamal setup` plus één deploy zodat
alles warm staat, en doe op het podium alleen de laatste `kamal deploy` plus
`dig`. Fallback is altijd de slide met de replay, één toets verder.
