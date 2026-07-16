import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from './slides/index.jsx'
import SpeakerView from './components/SpeakerView.jsx'

const ease = [0.22, 1, 0.36, 1]
const clamp = (n) => Math.max(0, Math.min(slides.length - 1, n))

function fromHash() {
  const n = parseInt(window.location.hash.replace(/\D/g, ''), 10)
  return Number.isFinite(n) ? clamp(n - 1) : 0
}

// ?view=speaker opent het spreker-venster; zonder param blijft dit het normale,
// standalone slides-venster.
function isSpeakerView() {
  return new URLSearchParams(window.location.search).get('view') === 'speaker'
}

function useFitScale() {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const fit = () => {
      const vw = window.visualViewport?.width ?? window.innerWidth
      const vh = window.visualViewport?.height ?? window.innerHeight
      // op kleine schermen overlapt de chrome-balk de stage; reserveer dan niets
      const reserve = vw < 900 ? 8 : 50
      setScale(Math.min(vw / 1280, (vh - reserve) / 720))
    }
    fit()
    window.addEventListener('resize', fit)
    window.visualViewport?.addEventListener('resize', fit)
    return () => {
      window.removeEventListener('resize', fit)
      window.visualViewport?.removeEventListener('resize', fit)
    }
  }, [])
  return scale
}

function usePortraitPhone() {
  const [portrait, setPortrait] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(orientation: portrait) and (max-width: 820px)')
    const update = () => setPortrait(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return portrait
}

export default function App() {
  const speaker = isSpeakerView()
  const [index, setIndex] = useState(fromHash)
  const [step, setStep] = useState(0)
  const dir = useRef(1)
  const [showNotes, setShowNotes] = useState(false)
  const [hintDismissed, setHintDismissed] = useState(false)
  const scale = useFitScale()
  const portrait = usePortraitPhone()
  const touch = useRef(null)

  const { Component, notes, steps = 0 } = slides[index]

  // refs zodat de key-handler en de sync altijd de actuele waardes zien zonder
  // opnieuw te binden
  const indexRef = useRef(0)
  const stepRef = useRef(0)
  const stepsRef = useRef(0)
  indexRef.current = index
  stepRef.current = step
  stepsRef.current = steps

  // ---- synchronisatie tussen slides-venster en spreker-venster ----
  const channelRef = useRef(null)

  // stuur de nieuwe stand naar het andere venster
  const broadcast = useCallback((i, s) => {
    channelRef.current?.postMessage({ type: 'sync', index: i, step: s })
  }, [])

  // pas een binnengekomen stand toe; NIET terugsturen, anders krijg je een
  // echo-lus (BroadcastChannel levert niet aan de eigen instantie, dus door hier
  // enkel te zetten settelt het na één rondje)
  const applyRemote = useCallback((ri, rs) => {
    if (ri !== indexRef.current) {
      dir.current = ri >= indexRef.current ? 1 : -1
      setIndex(clamp(ri))
    }
    setStep(rs)
  }, [])

  useEffect(() => {
    const ch = new BroadcastChannel('euwest1-deck')
    channelRef.current = ch
    ch.onmessage = (e) => {
      const msg = e.data
      if (!msg) return
      if (msg.type === 'sync') applyRemote(msg.index, msg.step)
      // een net geopend venster vraagt de huidige stand op; antwoord met sync
      else if (msg.type === 'hello') ch.postMessage({ type: 'sync', index: indexRef.current, step: stepRef.current })
    }
    // bij mount: vraag de huidige stand op zodat een later geopend venster
    // meteen goed staat
    ch.postMessage({ type: 'hello' })
    return () => { channelRef.current = null; ch.close() }
  }, [applyRemote])

  // sprong (hash, Home/End): naar de slide en terug naar fragment 0
  const go = useCallback((target) => {
    const next = clamp(target)
    dir.current = next >= indexRef.current ? 1 : -1
    setIndex(next)
    setStep(0)
    broadcast(next, 0)
  }, [broadcast])

  // pijltje vooruit: eerst de fragmenten van deze slide onthullen, dan pas verder
  const goNext = useCallback(() => {
    if (stepRef.current < stepsRef.current) {
      const s = stepRef.current + 1
      setStep(s)
      broadcast(indexRef.current, s)
      return
    }
    const next = clamp(indexRef.current + 1)
    if (next === indexRef.current) return
    dir.current = 1
    setIndex(next)
    setStep(0)
    broadcast(next, 0)
  }, [broadcast])

  const goPrev = useCallback(() => {
    if (stepRef.current > 0) {
      const s = stepRef.current - 1
      setStep(s)
      broadcast(indexRef.current, s)
      return
    }
    const prev = clamp(indexRef.current - 1)
    if (prev === indexRef.current) return
    dir.current = -1
    setIndex(prev)
    setStep(0)
    broadcast(prev, 0)
  }, [broadcast])

  const onTouchStart = (e) => {
    const t = e.touches[0]
    touch.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e) => {
    if (!touch.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touch.current.x
    const dy = t.clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) goNext()
      else goPrev()
    }
  }

  useEffect(() => {
    history.replaceState(null, '', `#${index + 1}`)
  }, [index])

  useEffect(() => {
    const onHash = () => go(fromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [go])

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      // navigatie moet altijd werken; alleen niet kapen terwijl je in een tekstveld typt
      if (e.target instanceof Element && e.target.closest('input, textarea, select, [contenteditable="true"]')) return
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          goNext()
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          goPrev()
          break
        case 'Home':
          go(0)
          break
        case 'End':
          go(slides.length - 1)
          break
        case 'n':
        case 'N':
          setShowNotes((v) => !v)
          break
        case 'f':
        case 'F':
          if (document.fullscreenElement) document.exitFullscreen()
          else document.documentElement.requestFullscreen?.()
          break
        case 'p':
        case 'P':
          // open het spreker-venster; alleen zinvol vanuit het slides-venster
          if (!speaker) {
            window.open(
              location.pathname + '?view=speaker' + location.hash,
              'euwest1-speaker',
              'width=1200,height=820',
            )
          }
          break
        default:
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, goNext, goPrev, speaker])

  // het spreker-venster: notities + previews op de laptop, synchroon via de
  // dezelfde state, sync en key-handler hierboven
  if (speaker) {
    return (
      <SpeakerView
        index={index}
        step={step}
        goPrev={goPrev}
        goNext={goNext}
        detail={showNotes}
        onToggleDetail={() => setShowNotes((v) => !v)}
      />
    )
  }

  return (
    <div className="app" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="progress">
        <div style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
      </div>

      <div className="stage-wrap">
        <div className="stage" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="slide-host"
              initial={{ opacity: 0, x: 42 * dir.current }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.42, ease } }}
              exit={{ opacity: 0, x: -30 * dir.current, transition: { duration: 0.2, ease: 'easeIn' } }}
            >
              <Component step={step} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {showNotes && (
        <div className="notes-panel">
          <div className="label">Sprekersnotities · slide {index + 1}</div>
          <p>{notes || 'Geen notities voor deze slide.'}</p>
        </div>
      )}

      {portrait && !hintDismissed && (
        <div className="rotate-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="3" width="10" height="18" rx="2" />
            <path d="M20 8a8 8 0 0 0-3-4M4 16a8 8 0 0 0 3 4" />
          </svg>
          <p>
            Draai je telefoon, deze presentatie is gemaakt
            <br />
            voor liggend beeld.
          </p>
          <button onClick={() => setHintDismissed(true)}>Toch doorgaan →</button>
        </div>
      )}

      <div className="chrome">
        <span className="deck-title">eu-west-1 is nog geen Europa · Dennis Zuidam · XPRTZ</span>
        <div className="right">
          <span className="keys-hint" style={{ opacity: 0.7 }}>←/→ navigeren · N notities · P spreker · F fullscreen</span>
          <span className="counter">
            {String(index + 1).padStart(2, '0')} / {slides.length}
          </span>
          <button onClick={(e) => { e.currentTarget.blur(); goPrev() }} aria-label="Vorige slide">‹</button>
          <button onClick={(e) => { e.currentTarget.blur(); goNext() }} aria-label="Volgende slide">›</button>
        </div>
      </div>
    </div>
  )
}
