import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.13, duration: 0.65, ease },
  }),
}

export function Reveal({ i = 0, className = '', style, children }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={reveal}
      initial="hidden"
      animate="show"
      custom={i}
    >
      {children}
    </motion.div>
  )
}

export function Slide({ kicker, className = '', children }) {
  return (
    <div className={`slide ${className}`}>
      {kicker && <Reveal className="kicker">{kicker}</Reveal>}
      {children}
    </div>
  )
}

export function Punchline({ i = 3, children, sub }) {
  return (
    <Reveal i={i} className="punchline">
      <span className="bar" />
      {children}
      {sub && <span className="sub">{sub}</span>}
    </Reveal>
  )
}

export function Terminal({ title = 'bash', children, style }) {
  return (
    <div className="terminal" style={style}>
      <div className="terminal-bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="terminal-title">{title}</span>
      </div>
      <pre className="terminal-body">{children}</pre>
    </div>
  )
}

const paths = {
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </>
  ),
  heart: (
    <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3.4 1-4.5 2.5C10.9 4 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
  ),
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  bread: (
    <>
      <path d="M4 9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4c0 1.5-.8 2.6-2 3.2V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6.8C4.8 11.6 4 10.5 4 9z" />
      <path d="M9 12v4M13 12v4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
      <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  euro: (
    <>
      <path d="M18 6.5A7.5 7.5 0 0 0 6.8 9M18 17.5A7.5 7.5 0 0 1 6.8 15" />
      <path d="M3 10.5h9M3 13.5h8" />
    </>
  ),
  standard: (
    <>
      <path d="M8 4l-5 8 5 8M16 4l5 8-5 8" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z" />
    </>
  ),
  filecode: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9.5 13l-2 2 2 2M14.5 13l2 2-2 2" />
    </>
  ),
  box: (
    <>
      <path d="M21 8l-9-5-9 5v8l9 5 9-5z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M5 7l7-2 7 2" />
      <path d="M2 13l3-6 3 6a3 3 0 0 1-6 0zM16 13l3-6 3 6a3 3 0 0 1-6 0z" />
    </>
  ),
}

export function Icon({ name, className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

export function EuStars({ className = 'eu-stars' }) {
  const stars = Array.from({ length: 12 }, (_, k) => {
    const a = (k / 12) * Math.PI * 2 - Math.PI / 2
    return { x: 50 + 40 * Math.cos(a), y: 50 + 40 * Math.sin(a) }
  })
  return (
    <svg className={className} viewBox="0 0 100 100">
      {stars.map((s, k) => (
        <g key={k} transform={`translate(${s.x} ${s.y})`}>
          <motion.path
            d="M0-3.2L0.96-0.99 3.04-0.99 1.34 0.5 1.88 2.59 0 1.3 -1.88 2.59 -1.34 0.5 -3.04-0.99 -0.96-0.99Z"
            fill="#ffcc33"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5 + k * 0.07, duration: 0.5, ease }}
          />
        </g>
      ))}
    </svg>
  )
}
