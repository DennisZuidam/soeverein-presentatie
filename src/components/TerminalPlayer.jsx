import { useEffect, useRef, useState } from 'react'

// A deterministic, scripted terminal replay. Plays like a screen recording,
// so the live demo can never fail on stage.
//
// Event types:
//   cmd  — typed character by character after a prompt
//   out  — printed as a whole line after `delay` ms
//   gap  — pause without output

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

export default function TerminalPlayer({ script, title = 'kamal deploy — opgenomen' }) {
  const [events, setEvents] = useState([])
  const [playing, setPlaying] = useState(false)
  const [done, setDone] = useState(false)
  const bodyRef = useRef(null)
  const timer = useRef(null)
  const state = useRef({ idx: 0, char: 0 })

  const stop = () => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = null
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
        timer.current = setTimeout(tick, TYPE_MS)
      } else {
        state.current = { idx: idx + 1, char: 0 }
        timer.current = setTimeout(tick, ev.after ?? 350)
      }
    } else if (ev.type === 'gap') {
      state.current = { idx: idx + 1, char: 0 }
      setEvents((prev) => {
        const next = prev.slice()
        next[idx] = { type: 'out', text: '' }
        return next
      })
      timer.current = setTimeout(tick, ev.delay ?? 400)
    } else {
      setEvents((prev) => {
        const next = prev.slice()
        next[idx] = ev
        return next
      })
      state.current = { idx: idx + 1, char: 0 }
      timer.current = setTimeout(tick, ev.delay ?? 120)
    }
  }

  const play = () => {
    stop()
    state.current = { idx: 0, char: 0 }
    setEvents([])
    setDone(false)
    setPlaying(true)
    timer.current = setTimeout(tick, 500)
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
