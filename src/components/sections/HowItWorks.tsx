'use client'

import { useEffect, useRef } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

const STEPS = [
  {
    num: '01',
    tag: 'Simulate',
    title: 'Real-work scenario',
    desc: 'Candidates complete a task built to mirror the actual role — contextualised, time-pressured, producing real output. No multiple choice.',
  },
  {
    num: '02',
    tag: 'Assess',
    title: 'Human panel review',
    desc: 'Trained assessors evaluate the work against a calibrated marking framework. A panel — not a single reviewer — before any verdict is recorded.',
  },
  {
    num: '03',
    tag: 'Verify',
    title: 'Five-band verdict',
    desc: 'A verdict from five calibrated bands is assigned and anchored to a tamper-evident record tied to the candidate and the work they produced.',
  },
  {
    num: '04',
    tag: 'Carry',
    title: 'Portable evidence',
    desc: 'The evidence follows the candidate across roles, organisations and time. Partner-neutral. Openly verifiable by anyone, anywhere.',
  },
]

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export default function HowItWorks() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = scrollRef.current
    if (!section) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cardRefs.current.forEach(card => {
        if (!card) return
        card.style.transform = 'none'
        card.style.opacity = '1'
      })
      return
    }

    function update() {
      const rect = section!.getBoundingClientRect()
      const scrollable = section!.offsetHeight - window.innerHeight
      if (scrollable <= 0) return

      const progress = Math.max(0, Math.min(1, -rect.top / scrollable))

      // Three equal phases — each drives one card into origin
      const p1 = easeInOut(Math.max(0, Math.min(1, progress * 3)))
      const p2 = easeInOut(Math.max(0, Math.min(1, (progress - 1 / 3) * 3)))
      const p3 = easeInOut(Math.max(0, Math.min(1, (progress - 2 / 3) * 3)))

      const w = window.innerWidth

      // Card 1: starts slightly larger, scales to 1 as card 2 arrives
      const c1 = cardRefs.current[0]
      if (c1) {
        c1.style.transform = `scale(${1.06 - p1 * 0.06})`
      }

      // Card 2: slides in from left
      const c2 = cardRefs.current[1]
      if (c2) {
        c2.style.transform = `translateX(${(1 - p1) * -w}px)`
        c2.style.opacity = p1 > 0.01 ? '1' : '0'
      }

      // Card 3: slides in from right
      const c3 = cardRefs.current[2]
      if (c3) {
        c3.style.transform = `translateX(${(1 - p2) * w}px)`
        c3.style.opacity = p2 > 0.01 ? '1' : '0'
      }

      // Card 4: rises and expands from below
      const c4 = cardRefs.current[3]
      if (c4) {
        c4.style.transform = `translateY(${(1 - p3) * 80}px) scale(${0.88 + p3 * 0.12})`
        c4.style.opacity = String(p3)
      }
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <>
      {/* Section head scrolls normally — separate from the sticky animation */}
      <section className="how-section how-head-section section-pad-sm">
        <div className="wrap">
          <RevealWrapper>
            <SectionHead
              eyebrow="How it works"
              heading="Four steps from task to verified evidence."
              lead="The model is simple. The rigour is not."
            />
          </RevealWrapper>
        </div>
      </section>

      {/* Scroll animation — card stage centered in 100vh, no heading competing for space */}
      <div ref={scrollRef} className="how-scroll-section">
        <div className="how-sticky">
          <div className="wrap">
            <div className="how-card-stage">
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  ref={el => { cardRefs.current[i] = el }}
                  className={`how-flow-card how-stack-card how-stack-card-${i + 1}`}
                >
                  <div className="how-flow-watermark" aria-hidden="true">{step.num}</div>
                  <div className="how-flow-tag">{step.tag}</div>
                  <h3 className="how-flow-title">{step.title}</h3>
                  <p className="how-flow-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
