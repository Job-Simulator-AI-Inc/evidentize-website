'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedStatProps {
  num: string
  label: string
}

export default function AnimatedStat({ num, label }: AnimatedStatProps) {
  const isNumeric = !Number.isNaN(Number(num))
  const [display, setDisplay] = useState(isNumeric ? '0' : num)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    if (!isNumeric) return

    const target = Number(num)
    const duration = 900
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      setDisplay(String(Math.round(eased * target)))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [visible, num, isNumeric])

  return (
    <div ref={ref} className="sol-bridge-stat">
      <span className={`anim-stat-num${visible ? ' is-visible' : ''}`}>
        {display}
      </span>
      <span className="sol-bridge-stat-label" style={{ whiteSpace: 'pre-line' }}>
        {label}
      </span>
    </div>
  )
}
