import { useEffect, useState } from 'react'
import { Slide, Reveal } from '../components/ui.jsx'
import TerminalPlayer from '../components/TerminalPlayer.jsx'

const out = (text, cls, delay) => ({ type: 'out', text, cls, delay })

// Gescripte replay van de terminal-demo: deze presentatie van Azure (Microsoft)
// naar Scaleway nl-ams met Kamal. De site is stateless, dus het bewijs is de
// url die per cloud verspringt (sslip.io = het IP). Zodra public/demo.webm
// bestaat speelt de echte opname; pas dan ook de subtitel aan naar
// "Opgenomen run".
const script = [
  { type: 'cmd', text: 'kamal setup -d azure', after: 500 },
  out('Building and pushing image to ghcr.io...', 'dim', 700),
  out('Ensuring kamal-proxy on 20.56.xx.xx (Azure, West Europe)...', 'dim', 700),
  out('Starting new container 8b3c...', 'dim', 600),
  out('Waiting for the first healthy web container...', 'dim', 700),
  out('Container is healthy!', 'add', 500),
  out('✔ Finished all in 9.1 seconds', 'add', 300),
  { type: 'gap', delay: 700 },
  out('# Draait bij Microsoft. Bewijs via de url (sslip.io = het IP):', 'dim', 500),
  { type: 'cmd', text: 'curl -sI https://20-56-12-9.sslip.io/', after: 400 },
  out('HTTP/2 200      server: nginx', 'dim', 600),
  { type: 'gap', delay: 900 },
  out('# De migratie: zelfde image, andere bak', 'dim', 500),
  { type: 'cmd', text: 'kamal setup -d scaleway', after: 500 },
  out('Ensuring kamal-proxy on 51.15.xx.xx (nl-ams)...', 'dim', 700),
  out('Starting new container 4f2a...', 'dim', 600),
  out('Container is healthy!', 'add', 500),
  out('✔ Finished all in 8.4 seconds', 'add', 300),
  { type: 'gap', delay: 700 },
  out('# De url verspringt mee. Zelfde site, nu in nl-ams:', 'dim', 500),
  { type: 'cmd', text: 'curl -sI https://51-15-234-12.sslip.io/', after: 400 },
  out('HTTP/2 200      server: nginx', 'add', 600),
  { type: 'gap', delay: 900 },
  out('# En nog een provider? Eén vlag:', 'dim', 400),
  { type: 'cmd', text: 'kamal deploy -d hetzner', after: 400 },
  out('  Keuzevrijheid is een one-liner. De rekening staat bij je state.', 'hl-line', 300),
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
  const [videoFailed, setVideoFailed] = useState(false)
  const showVideo = video && !videoFailed

  return (
    <Slide kicker="Deel 3 · Hoe je het zelf bouwt">
      <Reveal i={1}>
        <h2 className="title" style={{ marginBottom: 24 }}>
          Van Microsoft naar Europese bodem
          <span className="muted" style={{ display: 'block', fontSize: 18, fontWeight: 450, marginTop: 8, letterSpacing: 0 }}>
            Gescripte weergave van de echte run; de code staat in de repo.
          </span>
        </h2>
      </Reveal>
      <Reveal i={2} style={{ flex: 1, minHeight: 0 }}>
        {showVideo ? (
          <div className="terminal player">
            <div className="terminal-bar">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="terminal-title">migratie · opname</span>
            </div>
            <video
              src={video}
              controls
              onError={() => setVideoFailed(true)}
              style={{ flex: 1, minHeight: 0, width: '100%', background: '#0d111a' }}
            />
          </div>
        ) : (
          <TerminalPlayer script={script} title="presentatie · azure → nl-ams · gescripte run" />
        )}
      </Reveal>
    </Slide>
  )
}
