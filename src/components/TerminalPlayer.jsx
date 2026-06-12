import { useEffect, useRef, useState } from 'react'

// A deterministic, scripted terminal replay. Plays like a screen recording,
// so the live demo can never fail on stage.
//
// Event types:
//   cmd         — typed character by character after a prompt
//   out         — printed as a whole line after `delay` ms
//   gap         — pause without output
//   timer-start — start the on-screen stopwatch
//   timer-stop  — freeze the stopwatch at `timer.target`
//
// The stopwatch maps real playback time onto the scripted deploy duration:
// timer = { target: 47.3, playbackMs: 9000 } shows 0 → 47.3s while the
// deploy section plays back in ~9s, then freezes at the exact target.

const TYPE_MS = 28

function Line({ ev }) {
  if (ev.type === 'cmd') {
    return (
      <div>
        <span className="prompt">$ </span>
        <span>{ev.shown}</span>
        {ev.cursor && <span className="cursor">▋</span>}
      </div>
    )
  }
  return <div className={ev.cls || ''}>{ev.text}</div>
}

export default function TerminalPlayer({ script, title = 'opgenomen', timer }) {
  const [events, setEvents] = useState([])
  const [playing, setPlaying] = useState(false)
  const [done, setDone] = useState(false)
  const [clock, setClock] = useState(null)
  const bodyRef = useRef(null)
  const timeout = useRef(null)
  const raf = useRef(null)
  const state = useRef({ idx: 0, char: 0 })

  const stop = () => {
    if (timeout.current) clearTimeout(timeout.current)
    if (raf.current) cancelAnimationFrame(raf.current)
    timeout.current = null
    raf.current = null
  }

  const startClock = () => {
    if (!timer) return
    const began = performance.now()
    const rate = timer.target / timer.playbackMs
    const loop = () => {
      const shown = Math.min((performance.now() - began) * rate, timer.target * 0.97)
      setClock(shown)
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)
  }

  const stopClock = () => {
    if (raf.current) cancelAnimationFrame(raf.current)
    raf.current = null
    if (timer) setClock(timer.target)
  }

  const tick = () => {
    const { idx, char } = state.current
    if (idx >= script.length) {
      setPlaying(false)
      setDone(true)
      return
    }
    const ev = script[idx]
    if (ev.type === 'cmd') {
      const shown = ev.text.slice(0, char + 1)
      setEvents((prev) => {
        const next = prev.slice()
        next[idx] = { ...ev, shown, cursor: char + 1 < ev.text.length }
        return next
      })
      if (char + 1 < ev.text.length) {
        state.current = { idx, char: char + 1 }
        timeout.current = setTimeout(tick, TYPE_MS)
      } else {
        state.current = { idx: idx + 1, char: 0 }
        timeout.current = setTimeout(tick, ev.after ?? 350)
      }
    } else if (ev.type === 'timer-start') {
      startClock()
      state.current = { idx: idx + 1, char: 0 }
      timeout.current = setTimeout(tick, 0)
    } else if (ev.type === 'timer-stop') {
      stopClock()
      state.current = { idx: idx + 1, char: 0 }
      timeout.current = setTimeout(tick, 0)
    } else if (ev.type === 'gap') {
      state.current = { idx: idx + 1, char: 0 }
      setEvents((prev) => {
        const next = prev.slice()
        next[idx] = { type: 'out', text: '' }
        return next
      })
      timeout.current = setTimeout(tick, ev.delay ?? 400)
    } else {
      setEvents((prev) => {
        const next = prev.slice()
        next[idx] = ev
        return next
      })
      state.current = { idx: idx + 1, char: 0 }
      timeout.current = setTimeout(tick, ev.delay ?? 120)
    }
  }

  const play = () => {
    stop()
    state.current = { idx: 0, char: 0 }
    setEvents([])
    setDone(false)
    setClock(null)
    setPlaying(true)
    timeout.current = setTimeout(tick, 500)
  }

  useEffect(() => {
    play()
    return stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [events])

  return (
    <div className="terminal player">
      <div className="terminal-bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="terminal-title">{title}</span>
        {clock !== null && (
          <span className="timer">⏱ {clock.toFixed(1)}s</span>
        )}
        <button className="replay" onClick={play} title="Opnieuw afspelen">
          {playing ? '● rec' : done ? '↺ replay' : '▶ play'}
        </button>
      </div>
      <pre className="terminal-body scroll" ref={bodyRef}>
        {events.map((ev, k) => (ev ? <Line key={k} ev={ev} /> : null))}
      </pre>
    </div>
  )
}
