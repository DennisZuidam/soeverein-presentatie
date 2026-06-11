import { Slide, Reveal } from '../components/ui.jsx'
import TerminalPlayer from '../components/TerminalPlayer.jsx'

const out = (text, cls, delay) => ({ type: 'out', text, cls, delay })

const script = [
  { type: 'cmd', text: 'git diff config/deploy.yml', after: 500 },
  out('-  servers:', 'del'),
  out('-    - demo-vm.westeurope.cloudapp.azure.com', 'del'),
  out('-  registry: demoacr.azurecr.io', 'del', 300),
  out('+  servers:', 'add'),
  out('+    - 51.158.234.12        # Scaleway DEV1-M · nl-ams', 'add'),
  out('+  registry: rg.nl-ams.scw.cloud/sovereign-demo', 'add'),
  { type: 'gap', delay: 1100 },
  { type: 'cmd', text: 'kamal deploy', after: 600 },
  out('Acquiring the deploy lock...', 'dim', 600),
  out('Building image xprtz/sovereign-demo:7f3a2c1...', 'dim', 900),
  out('  => [build 4/4] COPY . /app                        0.4s', 'dim', 350),
  out('  => exporting to image                             1.2s', 'dim', 500),
  out('Pushing image to rg.nl-ams.scw.cloud...', 'dim', 900),
  out('Ensuring kamal-proxy is running on 51.158.234.12...', 'dim', 700),
  out('Starting new container 7f3a2c1...', 'dim', 700),
  out('Waiting for container to become healthy... (1/3)', 'dim', 800),
  out('Container is healthy!', 'add', 500),
  out('Routing traffic to new container...', 'dim', 500),
  out('Pruning old containers and images...', 'dim', 400),
  out('Released the deploy lock', 'dim', 400),
  { type: 'gap', delay: 500 },
  out('✔ Deploy completed in 47.3s', 'add', 200),
  out('  App live op https://demo.xprtz.cloud — nu op Europese grond.', 'hl-line', 300),
]

export default function Slide20() {
  return (
    <Slide kicker="Deel 3 — Demo">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 24 }}>
          Dezelfde deploy, andere grond
          <span className="muted" style={{ display: 'block', fontSize: 18, fontWeight: 450, marginTop: 8, letterSpacing: 0 }}>
            Opgenomen run — exact deze commando's, geen demo-goden nodig.
          </span>
        </h2>
      </Reveal>
      <Reveal i={2} style={{ flex: 1, minHeight: 0 }}>
        <TerminalPlayer script={script} />
      </Reveal>
    </Slide>
  )
}
