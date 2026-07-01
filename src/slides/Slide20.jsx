import { useEffect, useState } from 'react'
import { Slide, Reveal } from '../components/ui.jsx'
import TerminalPlayer from '../components/TerminalPlayer.jsx'

const out = (text, cls, delay) => ({ type: 'out', text, cls, delay })

// Gescripte replay van de migratie van deze presentatie zelf.
// Zodra public/demo.webm of public/demo.mp4 bestaat (de echte opname),
// speelt de slide die af in plaats van dit script.
const script = [
  { type: 'cmd', text: 'cat Dockerfile', after: 500 },
  out('FROM nginx:alpine', 'dim'),
  out('COPY dist/ /usr/share/nginx/html/', 'dim', 300),
  { type: 'gap', delay: 900 },
  { type: 'cmd', text: 'cat config/deploy.yml', after: 500 },
  out('service: euwest1-presentatie', 'dim'),
  out('servers:', 'dim'),
  out('  web:', 'dim'),
  out('    - 51.158.234.12          # Scaleway DEV1-S · nl-ams', 'add'),
  out('registry:', 'dim'),
  out('  server: rg.nl-ams.scw.cloud/presentatie', 'add'),
  out('proxy:', 'dim'),
  out('  host: talk.xprtz.cloud', 'dim', 300),
  { type: 'gap', delay: 1000 },
  { type: 'cmd', text: 'kamal deploy', after: 400 },
  { type: 'timer-start' },
  out('Acquiring the deploy lock...', 'dim', 600),
  out('Building image presentatie:4f7d2e9...', 'dim', 900),
  out('  => exporting to image                             1.2s', 'dim', 500),
  out('Pushing image to rg.nl-ams.scw.cloud...', 'dim', 900),
  out('Ensuring kamal-proxy is running on 51.158.234.12...', 'dim', 700),
  out('Starting new container 4f7d2e9...', 'dim', 700),
  out('Waiting for container to become healthy... (1/3)', 'dim', 800),
  out('Container is healthy!', 'add', 500),
  out('Routing traffic to new container...', 'dim', 500),
  out('Released the deploy lock', 'dim', 400),
  { type: 'gap', delay: 500 },
  out('✔ Deploy completed in 47.3s', 'add', 200),
  { type: 'timer-stop' },
  { type: 'gap', delay: 900 },
  { type: 'cmd', text: 'dig +short talk.xprtz.cloud', after: 500 },
  out('51.158.234.12', 'add', 400),
  out('  Deze presentatie draait nu op Europese grond.', 'hl-line', 300),
]

function useRecordedVideo() {
  const [video, setVideo] = useState(null)
  useEffect(() => {
    let active = true
    ;(async () => {
      for (const file of ['demo.webm', 'demo.mp4']) {
        try {
          const res = await fetch(file, { method: 'HEAD' })
          const type = res.headers.get('content-type') || ''
          if (res.ok && type.startsWith('video') && active) {
            setVideo(file)
            return
          }
        } catch {
          // bestand bestaat niet, scripted replay als vangnet
        }
      }
    })()
    return () => { active = false }
  }, [])
  return video
}

export default function Slide20() {
  const video = useRecordedVideo()

  return (
    <Slide kicker="Deel 4 · Demo">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 24 }}>
          Deze presentatie, van Microsoft naar Europese grond
          <span className="muted" style={{ display: 'block', fontSize: 18, fontWeight: 450, marginTop: 8, letterSpacing: 0 }}>
            Opgenomen run, exact deze commando's.
          </span>
        </h2>
      </Reveal>
      <Reveal i={2} style={{ flex: 1, minHeight: 0 }}>
        {video ? (
          <div className="terminal player">
            <div className="terminal-bar">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="terminal-title">migratie · opname</span>
            </div>
            <video src={video} controls style={{ flex: 1, minHeight: 0, width: '100%', background: '#0d111a' }} />
          </div>
        ) : (
          <TerminalPlayer
            script={script}
            title="migratie van deze presentatie · opgenomen"
            timer={{ target: 47.3, playbackMs: 8800 }}
          />
        )}
      </Reveal>
    </Slide>
  )
}
