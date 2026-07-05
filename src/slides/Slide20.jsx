import { useEffect, useState } from 'react'
import { Slide, Reveal } from '../components/ui.jsx'
import TerminalPlayer from '../components/TerminalPlayer.jsx'

const out = (text, cls, delay) => ({ type: 'out', text, cls, delay })

// Gescripte replay van de uitgebreide migratie: app + PostgreSQL van een
// Amerikaanse cloud naar nl-ams met Kamal. Toont dat de container triviaal is
// en de data het echte werk. Zodra public/demo.webm bestaat speelt de echte
// opname. Het bewijs is symmetrisch: dezelfde curl /up vóór en na de cutover,
// zelfde recordcount, andere database.
const script = [
  { type: 'cmd', text: 'kamal deploy', after: 500 },
  out('Building and pushing image...', 'dim', 700),
  out('Ensuring kamal-proxy on 51.15.xx.xx (nl-ams)...', 'dim', 700),
  out('Starting new container 8b3c...', 'dim', 600),
  out('Waiting for the first healthy web container...', 'dim', 700),
  out('Container is healthy!', 'add', 500),
  out('✔ Finished all in 8.4 seconds', 'add', 300),
  { type: 'gap', delay: 700 },
  out('# 8 seconden. In nl-ams. Maar de app praat nog naar Virginia:', 'dim', 500),
  { type: 'cmd', text: 'curl -s https://app.example.eu/up', after: 400 },
  out('{"status":"ok","db":"us-east-1.rds.example-cloud.com","records":1284993}', 'del', 700),
  { type: 'gap', delay: 900 },
  out('# Het echte werk: 14 GB PostgreSQL verhuizen', 'dim', 500),
  { type: 'cmd', text: 'pg_dump --format=directory --jobs=4 "$SOURCE_URL" -f dump/', after: 500 },
  out('pg_dump: dumping contents of table "public.events"', 'dim', 500),
  out('pg_dump: dumping contents of table "public.invoices"', 'dim', 600),
  out('  dump/  →  4.2 GB', 'dim', 500),
  { type: 'cmd', text: 'pg_restore --jobs=4 --dbname="$TARGET_URL" dump/', after: 500 },
  out('pg_restore: processing data for table "public.users"', 'dim', 600),
  out('pg_restore: creating INDEX "index_events_on_created_at"', 'dim', 700),
  out('pg_restore: creating CONSTRAINT "invoices_pkey"', 'dim', 600),
  out('⏱  restore + indexes: 38m 12s', 'hl-line', 500),
  { type: 'gap', delay: 700 },
  out('# Cutover: DATABASE_URL in .kamal/secrets wijst nu naar nl-ams', 'dim', 400),
  { type: 'cmd', text: 'kamal app boot', after: 500 },
  { type: 'cmd', text: 'curl -s https://app.example.eu/up', after: 400 },
  out('{"status":"ok","db":"nl-ams","records":1284993}', 'add', 500),
  { type: 'gap', delay: 900 },
  out('# En de andere provider? Eén regel:', 'dim', 400),
  { type: 'cmd', text: 'git diff config/deploy.yml', after: 400 },
  out('-    - 51.15.xx.xx    # nl-ams', 'del'),
  out('+    - 5.75.xx.xx     # Hetzner fsn1', 'add', 500),
  out('  Keuzevrijheid is een one-liner. De state was het werk.', 'hl-line', 300),
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
          App plus database, van een Amerikaanse cloud naar Europese grond
          <span className="muted" style={{ display: 'block', fontSize: 18, fontWeight: 450, marginTop: 8, letterSpacing: 0 }}>
            Gescripte weergave van de echte run; de code staat in de repo. Let op het verschil: 8 seconden versus 38 minuten.
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
          <TerminalPlayer script={script} title="app + postgres → nl-ams · gescripte run" />
        )}
      </Reveal>
    </Slide>
  )
}
