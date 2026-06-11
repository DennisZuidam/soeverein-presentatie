import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from './slides/index.jsx'

const ease = [0.22, 1, 0.36, 1]
const clamp = (n) => Math.max(0, Math.min(slides.length - 1, n))

function fromHash() {
  const n = parseInt(window.location.hash.replace(/\D/g, ''), 10)
  return Number.isFinite(n) ? clamp(n - 1) : 0
}

function useFitScale(ref) {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const fit = () =>
      setScale(Math.min(window.innerWidth / 1280, (window.innerHeight - 50) / 720))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [ref])
  return scale
}

export default function App() {
  const [index, setIndex] = useState(fromHash)
  const dir = useRef(1)
  const [showNotes, setShowNotes] = useState(false)
  const scale = useFitScale()

  const go = useCallback((target) => {
    setIndex((prev) => {
      const next = clamp(target)
      dir.current = next >= prev ? 1 : -1
      return next
    })
  }, [])

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
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          setIndex((p) => { dir.current = 1; return clamp(p + 1) })
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          setIndex((p) => { dir.current = -1; return clamp(p - 1) })
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
        default:
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const { Component, notes } = slides[index]

  return (
    <div className="app">
      <div className="progress">
        <div style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
      </div>

      <div className="stage-wrap">
        <div className="stage" style={{ transform: `scale(${scale})` }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="slide-host"
              initial={{ opacity: 0, x: 42 * dir.current }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.42, ease } }}
              exit={{ opacity: 0, x: -30 * dir.current, transition: { duration: 0.2, ease: 'easeIn' } }}
            >
              <Component />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {showNotes && (
        <div className="notes-panel">
          <div className="label">Sprekersnotities — slide {index + 1}</div>
          <p>{notes || 'Geen notities voor deze slide.'}</p>
        </div>
      )}

      <div className="chrome">
        <span className="deck-title">eu-west-1 is nog geen Europa — Dennis Zuidam · XPRTZ</span>
        <div className="right">
          <span style={{ opacity: 0.7 }}>←/→ navigeren · N notities · F fullscreen</span>
          <span className="counter">
            {String(index + 1).padStart(2, '0')} / {slides.length}
          </span>
          <button onClick={() => go(index - 1)} aria-label="Vorige slide">‹</button>
          <button onClick={() => go(index + 1)} aria-label="Volgende slide">›</button>
        </div>
      </div>
    </div>
  )
}
