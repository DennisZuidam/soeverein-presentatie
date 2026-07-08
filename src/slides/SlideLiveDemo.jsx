import { AnimatePresence, motion } from 'framer-motion'
import { Slide, Reveal } from '../components/ui.jsx'
import TerminalPlayer from '../components/TerminalPlayer.jsx'

// Gescripte weergave van de échte run (juli 2026): deze presentatie van Azure
// (Microsoft · West Europe) naar Scaleway (nl-ams), en daarna Azure afbreken.
// Volledig deterministisch, zodat de opname nooit op live infra kan sneuvelen.
// De output is gecureerd uit de echte kamal-logs; de hosts zijn de echte IP's.
const AZURE_HOST = '51-124-164-67.sslip.io'
const SCW_HOST = '51-15-113-112.sslip.io'
const ease = [0.22, 1, 0.36, 1]

const out = (text, cls, delay) => ({ type: 'out', text, cls, delay })

// Beat 1 · deploy naar Azure (eerste run installeert Docker → ~103s)
const azureScript = [
  { type: 'cmd', text: 'kamal setup -d azure', after: 600 },
  { type: 'timer-start' },
  out('Ensure Docker is installed…', 'dim', 600),
  out('Missing Docker on 51.124.164.67. Installing…', 'dim', 800),
  out('Build and push app image → ghcr.io…', 'dim', 800),
  out('Pull image on 51.124.164.67 (Azure · West Europe)…', 'dim', 700),
  out('Start container euwest1-presentatie-web-azure…', 'dim', 600),
  out('Deploy to kamal-proxy → 51-124-164-67.sslip.io  (TLS)…', 'dim', 700),
  { type: 'timer-stop' },
  out('First web container is healthy!', 'add', 400),
  out('✔ Finished all in 103.6 seconds', 'add', 300),
]

// Beat 2 · deploy naar Scaleway — mét de echte hapering: een verse VM waarvan
// poort 22 nog dicht is (sshd start na de boot), dan de geslaagde retry.
const scalewayScript = [
  { type: 'cmd', text: 'kamal setup -d scaleway', after: 500 },
  out('Running mkdir -p .kamal on 51.15.113.112…', 'dim', 600),
  out('ERROR (Errno::ECONNREFUSED): Connection refused — connect(2) for 51.15.113.112:22', 'del', 800),
  { type: 'gap', delay: 500 },
  out('# verse VM — poort 22 nog dicht, sshd start na de boot. even wachten…', 'dim', 1000),
  { type: 'gap', delay: 400 },
  { type: 'cmd', text: 'kamal setup -d scaleway', after: 500 },
  { type: 'timer-start' },
  out('Ensure Docker is installed…', 'dim', 600),
  out('Build and push app image → ghcr.io…', 'dim', 700),
  out('Pull image on 51.15.113.112 (Scaleway · nl-ams)…', 'dim', 700),
  out('Start container euwest1-presentatie-web-scaleway…', 'dim', 600),
  out('Deploy to kamal-proxy → 51-15-113-112.sslip.io  (TLS)…', 'dim', 700),
  { type: 'timer-stop' },
  out('First web container is healthy!', 'add', 400),
  out('✔ Finished all in 27.8 seconds', 'add', 300),
]

// Beat 3 · Azure afbreken — het linkerframe klapt zo naar "not found".
const killScript = [
  out('# De presentatie draait nu in Amsterdam. Microsoft heb ik niet meer nodig.', 'dim', 800),
  { type: 'cmd', text: 'az group delete -n rg-euwest1 --yes', after: 700 },
  out('Deleting resource group "rg-euwest1"…', 'dim', 1000),
  out('✔ 51-124-164-67.sslip.io reageert niet meer.', 'del', 400),
]

// Welke terminal-beat hoort bij welke stap. Tussenstappen (2, 4, 6) hebben geen
// terminal: die onthullen het resultaat in de panelen erachter.
const BEATS = {
  1: { key: 'azure', title: 'terminal · deploy → azure', script: azureScript, timer: { target: 103.6, playbackMs: 6000 } },
  3: { key: 'scaleway', title: 'terminal · deploy → scaleway', script: scalewayScript, timer: { target: 27.8, playbackMs: 5200 } },
  5: { key: 'kill', title: 'terminal · az group delete', script: killScript },
}

function Panel({ cloud, sub, host, accent, state }) {
  const label = state === 'online' ? 'online' : state === 'down' ? 'niet bereikbaar' : 'wachten'
  return (
    <div className="live-panel" style={state === 'down' ? { borderColor: 'var(--red)' } : undefined}>
      <div className="live-head">
        <div>
          <span className="live-cloud" style={{ color: accent }}>{cloud}</span>
          <span className="live-sub">{sub}</span>
        </div>
        <span className={`live-status ${state === 'online' ? 'on' : state === 'down' ? 'off' : ''}`}>
          <span className="live-dot" />{label}
        </span>
      </div>
      <div className={`live-addr mono${state === 'empty' ? ' empty' : ''}`}>
        {state === 'empty' ? 'wacht op <ip>.sslip.io' : host}
      </div>
      <div className="live-frame">
        {state === 'empty' ? (
          <div className="live-empty">wachten op deploy…</div>
        ) : state === 'down' ? (
          <div className="live-down">
            <div className="big">not found</div>
            <div className="small">{host} reageert niet meer</div>
          </div>
        ) : (
          <div className="live-online">
            <div className="live-online-cloud" style={{ color: accent }}>{cloud}</div>
            <div className="live-online-host mono">{host}</div>
            <div className="live-online-badge"><span className="live-dot" />online</div>
          </div>
        )}
      </div>
    </div>
  )
}

// Stap-gestuurde choreografie (pijltje-rechts loopt de beats af):
//   0 · beide leeg              4 · Scaleway online → beide live
//   1 · terminal: deploy Azure  5 · terminal: Azure afbreken
//   2 · Azure online            6 · Azure "not found", Amsterdam draait door
//   3 · terminal: deploy Scaleway
export default function SlideLiveDemo({ step = 0 }) {
  const azureState = step >= 6 ? 'down' : step >= 2 ? 'online' : 'empty'
  const scwState = step >= 4 ? 'online' : 'empty'
  const beat = BEATS[step]

  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 18 }}>
          Zelfde site, twee clouds. Live.
          <span className="muted" style={{ display: 'block', fontSize: 18, fontWeight: 450, marginTop: 8, letterSpacing: 0 }}>
            Deploy links naar Azure, rechts naar Scaleway. Breek Azure af en kijk wat er gebeurt.
          </span>
        </h2>
      </Reveal>
      <Reveal i={2} style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <div className="live-grid">
          <Panel cloud="Azure" sub="Microsoft · West Europe" host={AZURE_HOST} accent="var(--red)" state={azureState} />
          <Panel cloud="Scaleway" sub="nl-ams · Europese bodem" host={SCW_HOST} accent="var(--green)" state={scwState} />
        </div>
        <AnimatePresence>
          {beat && (
            <motion.div
              key={beat.key}
              className="live-term-overlay"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease } }}
              exit={{ opacity: 0, y: 26, transition: { duration: 0.28, ease: 'easeIn' } }}
            >
              <TerminalPlayer key={beat.key} script={beat.script} title={beat.title} timer={beat.timer} />
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </Slide>
  )
}
