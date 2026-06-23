'use client'

import { useState, useEffect } from 'react'

const DISCIPLINES = [
  'Product Management',
  'DevOps',
  'Business Analysis',
  'Project Management',
  'SOC Analyst',
  'Cyber Threat Intelligence',
]

function SealIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-label="Evidentize verification seal"
      className="record-seal"
    >
      <circle cx="22" cy="22" r="19" stroke="#b08442" strokeWidth="1.25" strokeDasharray="3 2.2" />
      <circle cx="22" cy="22" r="13.5" stroke="#b08442" strokeWidth="0.75" opacity="0.55" />
      <text
        x="22"
        y="20"
        textAnchor="middle"
        fill="#b08442"
        fontSize="6.5"
        fontFamily="'IBM Plex Mono', monospace"
        fontWeight="500"
        letterSpacing="0.08em"
      >
        EVZ
      </text>
      <text
        x="22"
        y="27.5"
        textAnchor="middle"
        fill="#b08442"
        fontSize="4.5"
        fontFamily="'IBM Plex Mono', monospace"
        fontWeight="400"
        letterSpacing="0.06em"
        opacity="0.75"
      >
        VERIFIED
      </text>
    </svg>
  )
}

export default function EvidenceRecord() {
  const [verified, setVerified] = useState(false)
  const [discIndex, setDiscIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVerified(true), 1900)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setDiscIndex((i) => (i + 1) % DISCIPLINES.length)
        setFading(false)
      }, 280)
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-[50rem] record" role="article" aria-label="Verified Evidence Record">
      {/* Top bar */}
      <div className="record-topbar">
        <div className="record-wordmark">
          <span className="record-live-dot" aria-hidden="true" />
          Evidentize
        </div>
        <span className="record-chip">EVZ · 2026</span>
      </div>

      {/* Doc label */}
      <div className="record-label-row">
        <span className="record-doc-label">Verified Evidence Record</span>
      </div>

      {/* Data rows */}
      <div className="record-body">
        <div className="record-row">
          <span className="record-key">Candidate ID</span>
          <span className="record-val">EVZ-2026-0847</span>
        </div>
        <div className="record-row">
          <span className="record-key">Discipline</span>
          <span className={`record-val record-discipline-val${fading ? ' fading' : ''}`}>
            {DISCIPLINES[discIndex]}
          </span>
        </div>
        <div className="record-row">
          <span className="record-key">Tier</span>
          <span className="record-val">Practitioner</span>
        </div>
        <div className="record-row">
          <span className="record-key">Submitted</span>
          <span className="record-val">12 Jun 2026</span>
        </div>
        <div className="record-row">
          <span className="record-key">Assessed by</span>
          <span className="record-val">Human · Panel of 2</span>
        </div>
      </div>

      {/* Verdict band */}
      <div className="record-verdict" role="status" aria-label="Verdict: Distinction">
        <span className="verdict-label-key">Verdict</span>
        <span className="verdict-label-val">Distinction</span>
      </div>

      {/* Footer: verify status + seal */}
      <div className="record-footer">
        <div
          className={`verify-status ${verified ? 'verified' : 'verifying'}`}
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="verify-indicator" aria-hidden="true" />
          {verified ? 'Verified' : 'Verifying…'}
        </div>
        <SealIcon />
      </div>
    </div>
  )
}
