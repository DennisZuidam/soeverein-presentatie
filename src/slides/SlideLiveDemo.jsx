import { useEffect, useState } from 'react'
import { Slide, Reveal } from '../components/ui.jsx'

const LS = { azure: 'demoAzureHost', scw: 'demoScwHost' }

// De twee hosts worden lokaal onthouden, zodat een reload van de deck ze niet
// kwijtraakt. Plak tijdens de talk het <ip>.sslip.io-adres in het veld.
function useLiveHost(key) {
  const [host, setHost] = useState(() => {
    try { return localStorage.getItem(key) || '' } catch { return '' }
  })
  const update = (v) => {
    setHost(v)
    try { localStorage.setItem(key, v) } catch { /* private mode */ }
  }
  return [host, update]
}

// Bereikbaarheid pollen met een no-cors fetch: lukt = online, faalt = offline.
// Een afgebroken Azure-VM slaat zo binnen enkele seconden om naar "not found".
function useReachable(host) {
  const [up, setUp] = useState(null) // null = nog niet getest
  useEffect(() => {
    if (!host) { setUp(null); return }
    let active = true
    const ping = async () => {
      const ctrl = new AbortController()
      const t = setTimeout(() => ctrl.abort(), 3000)
      try {
        await fetch(`https://${host}/live.html`, { mode: 'no-cors', cache: 'no-store', signal: ctrl.signal })
        if (active) setUp(true)
      } catch {
        if (active) setUp(false)
      } finally {
        clearTimeout(t)
      }
    }
    ping()
    const id = setInterval(ping, 4000)
    return () => { active = false; clearInterval(id) }
  }, [host])
  return up
}

function Panel({ cloud, sub, host, onHost, accent }) {
  const up = useReachable(host)
  const label = up === true ? 'online' : up === false ? 'niet bereikbaar' : 'wachten'
  return (
    <div className="live-panel" style={{ borderColor: up === false ? 'var(--red)' : 'var(--border)' }}>
      <div className="live-head">
        <div>
          <span className="live-cloud" style={{ color: accent }}>{cloud}</span>
          <span className="live-sub">{sub}</span>
        </div>
        <span className={`live-status ${up === true ? 'on' : up === false ? 'off' : ''}`}>
          <span className="live-dot" />{label}
        </span>
      </div>
      <input
        className="live-input mono"
        value={host}
        onChange={(e) => onHost(e.target.value.trim())}
        placeholder="plak hier <ip>.sslip.io"
        spellCheck={false}
      />
      <div className="live-frame">
        {!host ? (
          <div className="live-empty">wachten op deploy…</div>
        ) : up === false ? (
          <div className="live-down">
            <div className="big">not found</div>
            <div className="small">{host} reageert niet meer</div>
          </div>
        ) : (
          <iframe title={cloud} src={`https://${host}/live.html?c=${encodeURIComponent(cloud)}`} />
        )}
      </div>
    </div>
  )
}

export default function SlideLiveDemo() {
  const [azure, setAzure] = useLiveHost(LS.azure)
  const [scw, setScw] = useLiveHost(LS.scw)
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
      <Reveal i={2} style={{ flex: 1, minHeight: 0 }}>
        <div className="live-grid">
          <Panel cloud="Azure" sub="Microsoft · West Europe" host={azure} onHost={setAzure} accent="var(--red)" />
          <Panel cloud="Scaleway" sub="nl-ams · Europese bodem" host={scw} onHost={setScw} accent="var(--green)" />
        </div>
      </Reveal>
    </Slide>
  )
}
