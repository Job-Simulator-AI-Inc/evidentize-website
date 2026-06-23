'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

function GradCapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3.33 2 8.67 2 12 0v-5" />
    </svg>
  )
}

function ClipboardCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="9" width="18" height="13" rx="1" />
      <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

const PARTNERS = [
  {
    Icon: GradCapIcon,
    num: '01',
    title: 'Universities',
    desc: 'Build employability evidence into your curriculum. Give graduates proof of capability that stands up in interviews — not just a degree classification.',
    href: '/solutions/universities',
  },
  {
    Icon: ClipboardCheckIcon,
    num: '02',
    title: 'Training Providers',
    desc: 'Turn completions into verifiable outcomes. Show employers not just who finished, but what they can actually do in the role.',
    href: '/solutions/training-providers',
  },
  {
    Icon: ZapIcon,
    num: '03',
    title: 'Coaching & Bootcamps',
    desc: 'Give graduates evidence, not just certificates. Differentiate your programme with verified capability your cohorts can carry into any interview.',
    href: '/solutions/coaching',
  },
  {
    Icon: BuildingIcon,
    num: '04',
    title: 'Employers',
    desc: 'Hire on proof. Onboard with confidence. Comparable, calibrated verdicts across every candidate — replacing gut feel with defensible data.',
    href: '/solutions/employers',
  },
  {
    Icon: SearchIcon,
    num: '05',
    title: 'Recruiters',
    desc: 'Shortlist on verified capability, de-risk placements, and give clients evidence — not just CVs and gut-feel recommendations.',
    href: '/solutions/recruiters',
  },
]

export default function Ecosystem() {
  const railRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    function getActiveIndex(): number {
      const first = rail!.querySelector<HTMLElement>('.eco-mob-card')
      if (!first) return 0
      const stride = first.offsetWidth + 14
      const cards = rail!.querySelectorAll('.eco-mob-card')
      return Math.min(Math.round(rail!.scrollLeft / stride), cards.length - 1)
    }

    function triggerRing(index: number): void {
      const cards = [...rail!.querySelectorAll<HTMLElement>('.eco-mob-card')]
      // Remove class from all, then re-add to active after a paint — restarts animation
      cards.forEach(c => c.classList.remove('ring-active'))
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          cards[index]?.classList.add('ring-active')
        })
      })
    }

    // Activate ring on first card immediately
    triggerRing(0)

    // scrollend fires once when snap settles (Chrome 114+, Firefox 109+, Safari 17.4+)
    // Fallback: debounced scroll for older browsers
    if ('onscrollend' in window) {
      const onScrollEnd = () => triggerRing(getActiveIndex())
      rail.addEventListener('scrollend', onScrollEnd)
      return () => rail.removeEventListener('scrollend', onScrollEnd)
    } else {
      let timer: ReturnType<typeof setTimeout>
      const onScroll = () => {
        clearTimeout(timer)
        timer = setTimeout(() => triggerRing(getActiveIndex()), 160)
      }
      rail.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        rail.removeEventListener('scroll', onScroll)
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <section className="ecosystem-section section-pad">
      <div className="wrap">
        <RevealWrapper>
          <SectionHead
            eyebrow="Who it's for"
            heading="Infrastructure for everyone who develops, assesses or places people."
            lead="Evidentize is partner-led. Organisations run it under their own brand, for their own learners, graduates and candidates."
          />
        </RevealWrapper>

        {/* Desktop: editorial index list */}
        <RevealWrapper delay={80}>
          <nav className="eco-index" aria-label="Partner solutions">
            {PARTNERS.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="eco-index-row"
                aria-label={`Evidentize for ${p.title}`}
              >
                <span className="eco-index-num">{p.num}</span>
                <span className="eco-index-icon">
                  <p.Icon />
                </span>
                <span className="eco-index-body">
                  <span className="eco-index-title">{p.title}</span>
                  <span className="eco-index-desc">{p.desc}</span>
                </span>
                <span className="eco-index-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>
        </RevealWrapper>

        {/* Mobile/tablet: swipeable carousel with animated focus ring */}
        <div className="eco-mob-rail-wrap">
          <div ref={railRef} className="eco-mob-rail">
            {PARTNERS.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="eco-mob-card"
                aria-label={`Evidentize for ${p.title}`}
              >
                <span className="eco-mob-num">{p.num}</span>
                <span className="eco-mob-icon" aria-hidden="true">
                  <p.Icon />
                </span>
                <span className="eco-mob-title">{p.title}</span>
                <p className="eco-mob-desc">{p.desc}</p>
                <span className="eco-mob-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <p className="eco-drag-hint" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            Drag to explore
          </p>
        </div>
      </div>
    </section>
  )
}
