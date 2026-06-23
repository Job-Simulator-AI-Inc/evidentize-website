import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'
import AssessmentTicker from '@/components/ui/AssessmentTicker'
import AnimatedStat from '@/components/ui/AnimatedStat'
import type { SolutionConfig } from '@/data/solutionData'

const BRIDGE_STATS = [
  { num: '4', label: 'Steps from task\nto verified evidence' },
  { num: '5', label: 'Calibrated verdict\nbands — no grey area' },
  { num: 'Human', label: 'Every assessment\nreviewed by a person' },
]

export default function SolutionPageTemplate({
  eyebrow,
  h1,
  lead,
  breadcrumbLabel,
  primaryCta,
  primaryCtaHref,
  pains,
  benefitsLabel,
  benefitsHeading,
  benefitsBody,
  benefits,
  ctaHeading,
  ctaBody,
}: SolutionConfig) {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — dark, persona watermark, live ticker
      ══════════════════════════════════════════ */}
      <section className="page-hero">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="page-hero-grid" aria-hidden="true" />
        <div
          className="hero-watermark"
          aria-hidden="true"
          style={{
            fontSize: 'clamp(72px, 14vw, 220px)',
            bottom: '2%',
            right: '-1%',
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          {breadcrumbLabel.toUpperCase()}
        </div>

        <div className="wrap">
          <div className="page-hero-inner">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="page-breadcrumb-sep" aria-hidden="true">›</span>
              <Link href="/#ecosystem">Solutions</Link>
              <span className="page-breadcrumb-sep" aria-hidden="true">›</span>
              <span aria-current="page">{breadcrumbLabel}</span>
            </nav>

            <div className="eyebrow on-ink" style={{ marginBottom: '22px' }}>{eyebrow}</div>

            <h1 style={{ maxWidth: '820px' }}>{h1}</h1>

            <p className="page-hero-lead">{lead}</p>

            <div className="page-hero-ctas">
              <Button href={primaryCtaHref} variant="primary" arrow>
                {primaryCta}
              </Button>
              <Button href="/demo" variant="ghost">
                Book a demo
              </Button>
            </div>

            {/* Live discipline ticker */}
            <AssessmentTicker />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PAIN — editorial rows, staggered entry
      ══════════════════════════════════════════ */}
      <section className="sol-pain-section section-pad-sm">
        <div className="wrap">
          <RevealWrapper>
            <div className="sol-pain-header">
              <div className="eyebrow on-ink" style={{ marginBottom: '16px' }}>The challenge</div>
              <h2 style={{
                color: 'var(--paper-on-ink)',
                fontSize: 'clamp(1.7rem, 1.1rem + 2.2vw, 2.8rem)',
                letterSpacing: '-0.028em',
                lineHeight: 1.06,
                maxWidth: '540px',
              }}>
                What you are up against.
              </h2>
            </div>
          </RevealWrapper>

          <div className="sol-pain-rows">
            {pains.map((pain, i) => (
              <RevealWrapper key={pain.title} delay={i * 110}>
                <div className="sol-pain-row">
                  <span className="sol-pain-num" aria-hidden="true">0{i + 1}</span>
                  <p className="sol-pain-title">{pain.title}</p>
                  <p className="sol-pain-desc">{pain.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRIDGE — animated count-up stats
      ══════════════════════════════════════════ */}
      <div className="sol-bridge">
        <div className="wrap">
          <div className="sol-bridge-inner">
            <div className="sol-bridge-stats">
              {BRIDGE_STATS.map((stat) => (
                <AnimatedStat key={stat.num} num={stat.num} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BENEFITS — 2×2 card grid, staggered entry
      ══════════════════════════════════════════ */}
      <section className="sol-benefits-section section-pad">
        <div className="wrap">
          <RevealWrapper>
            <div className="sol-benefits-header">
              <div className="eyebrow" style={{ marginBottom: '18px' }}>{benefitsLabel}</div>
              <h2 style={{
                letterSpacing: '-0.025em',
                lineHeight: 1.08,
                marginBottom: '14px',
              }}>
                {benefitsHeading}
              </h2>
              <p className="sec-lead">{benefitsBody}</p>
            </div>
          </RevealWrapper>

          <div className="sol-benefits-grid">
            {benefits.map((b, i) => (
              <RevealWrapper key={b.title} delay={i * 90}>
                <div className="sol-benefit-card">
                  <span className="sol-benefit-num">0{i + 1}</span>
                  <p className="sol-benefit-title">{b.title}</p>
                  <p className="sol-benefit-desc">{b.desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section className="solution-cta-section">
        <div className="solution-cta-glow" aria-hidden="true" />
        <div className="wrap">
          <RevealWrapper>
            <div className="solution-cta-inner">
              <h2>{ctaHeading}</h2>
              <p>{ctaBody}</p>
              <div className="solution-cta-btns">
                <Button href={primaryCtaHref} variant="primary" arrow>
                  {primaryCta}
                </Button>
                <Button href="/partners" variant="ghost">
                  Partner programme
                </Button>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
