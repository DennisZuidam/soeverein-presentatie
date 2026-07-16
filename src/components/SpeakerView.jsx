import { useEffect, useState } from 'react'
import { slides } from '../slides/index.jsx'

// De stage is 1280x720 en elke slide staat op position:absolute; inset:0.
// Voor een preview tekenen we de echte component op ware grootte in een frame
// van 1280x720 en schalen dat geheel naar de gewenste breedte.
function SlidePreview({ index, step = 0, width }) {
  const item = slides[index]
  const scale = width / 1280
  return (
    <div className="sv-frame" style={{ width, height: 720 * scale }}>
      {item && (
        <div key={index} className="sv-frame-inner" style={{ transform: `scale(${scale})` }}>
          <item.Component step={step} />
        </div>
      )}
    </div>
  )
}

// Twee cijfers met een voorloopnul (00:07).
const two = (n) => String(n).padStart(2, '0')

// Het spreker-venster: draait op de laptop, loopt via BroadcastChannel synchroon
// met het slides-venster op het externe scherm. Toont de huidige slide (preview),
// de volgende slide, de spreeknotities, een meelopende timer en de kloktijd.
export default function SpeakerView({ index, step, goPrev, goNext, detail, onToggleDetail }) {
  // Meelopende timer en kloktijd, elke seconde bijgewerkt.
  const [start, setStart] = useState(() => Date.now())
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const elapsed = Math.max(0, Math.floor((now - start) / 1000))
  const clock = new Date(now).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })

  const current = slides[index]
  const steps = current?.steps ?? 0
  const cues = current?.cues
  const notes = current?.notes || 'Geen notities voor deze slide.'
  const hasNext = index + 1 < slides.length

  // standaard tonen we de korte steekwoord-bullets; met de detail-toets (N) of de
  // knop komt de volledige notitie tevoorschijn (handig voor de Q&A-cijfers)
  const showProse = detail || !cues?.length

  return (
    <div className="sv">
      <header className="sv-top">
        <div className="sv-clock">
          <span className="sv-label">klok</span>
          <span className="sv-clock-val mono">{clock}</span>
        </div>

        <div className="sv-timer">
          <span className="sv-label">timer</span>
          <div className="sv-timer-row">
            <span className="sv-timer-val mono">{two(Math.floor(elapsed / 60))}:{two(elapsed % 60)}</span>
            <button className="sv-reset" onClick={(e) => { e.currentTarget.blur(); setStart(Date.now()) }}>
              reset
            </button>
          </div>
        </div>

        <div className="sv-count">
          <span className="sv-label">slide</span>
          <span className="sv-count-val mono">
            {index + 1} / {slides.length}
            {steps > 0 && <span className="sv-step"> · stap {step}/{steps}</span>}
          </span>
        </div>
      </header>

      <div className="sv-stage">
        <div className="sv-now">
          <span className="sv-label">nu</span>
          <SlidePreview index={index} step={step} width={560} />
        </div>
        <div className="sv-next">
          <span className="sv-label">straks</span>
          {hasNext ? (
            <SlidePreview index={index + 1} step={0} width={320} />
          ) : (
            <div className="sv-frame sv-frame-empty" style={{ width: 320, height: 180 }}>einde</div>
          )}
        </div>
      </div>

      <div className="sv-notes">
        <div className="sv-notes-head">
          <span className="sv-label">{showProse ? 'sprekersnotities' : 'steekwoorden'}</span>
          {cues?.length > 0 && (
            <button className="sv-detail-toggle" onClick={(e) => { e.currentTarget.blur(); onToggleDetail?.() }}>
              {detail ? 'bullets' : 'detail'}
            </button>
          )}
        </div>
        <div className="sv-notes-body">
          {showProse ? (
            <pre className="sv-notes-prose">{notes}</pre>
          ) : (
            <ul className="sv-cues">
              {cues.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          )}
        </div>
      </div>

      <footer className="sv-bottom">
        <div className="sv-nav">
          <button onClick={(e) => { e.currentTarget.blur(); goPrev() }} aria-label="Vorige slide">‹ vorige</button>
          <button onClick={(e) => { e.currentTarget.blur(); goNext() }} aria-label="Volgende slide">volgende ›</button>
        </div>
        <span className="sv-hint">Pijltjes navigeren · N voor de volledige notitie · slides op het externe scherm.</span>
      </footer>
    </div>
  )
}
