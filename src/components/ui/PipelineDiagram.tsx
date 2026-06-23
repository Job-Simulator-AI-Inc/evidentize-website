'use client'

import { useEffect, useRef } from 'react'

export interface PipelineStep {
  num: string
  title: string
  desc: string
}

export default function PipelineDiagram({ steps }: { steps: PipelineStep[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mq.matches) {
      el.classList.add('pipeline-active', 'pipeline-instant')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('pipeline-active')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const elements: React.ReactNode[] = []

  steps.forEach((step, i) => {
    elements.push(
      <div
        key={step.num}
        className="pipeline-col"
        style={{ '--step-i': i } as React.CSSProperties}
      >
        <div className="pipeline-node-wrap">
          <div className="pipeline-node">
            <span className="pipeline-node-num">{step.num}</span>
          </div>
          <div className="pipeline-pulse" aria-hidden="true" />
        </div>
        <p className="pipeline-step-title">{step.title}</p>
        <p className="pipeline-step-desc">{step.desc}</p>
      </div>
    )

    if (i < steps.length - 1) {
      elements.push(
        <div
          key={`conn-${i}`}
          className="pipeline-conn"
          style={{ '--conn-i': i } as React.CSSProperties}
          aria-hidden="true"
        >
          <div className="pipeline-conn-line" />
          <svg
            className="pipeline-conn-arrow"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              d="M1 1l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )
    }
  })

  return (
    <div ref={ref} className="pipeline-diagram">
      {elements}
    </div>
  )
}
