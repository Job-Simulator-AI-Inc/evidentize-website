import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'
import AssessmentModel from '@/components/sections/platform/AssessmentModel'
import RecordAnatomy from '@/components/sections/platform/RecordAnatomy'
import PartnerInfra from '@/components/sections/platform/PartnerInfra'
import VerdictBands from '@/components/sections/VerdictBands'

export const metadata: Metadata = {
  title: 'Evidentize Platform — The Infrastructure Behind Verified Capability',
  description:
    'Evidentize is not an LMS, a job board or a certificate issuer. It is the evidence layer — the infrastructure that turns what candidates do into something employers can trust.',
}

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="wrap">
          <div className="page-hero-inner">
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="page-breadcrumb-sep" aria-hidden="true">›</span>
              <span aria-current="page">Platform</span>
            </nav>

            <div className="eyebrow on-ink" style={{ marginBottom: '20px' }}>The platform</div>
            <h1>The infrastructure behind verified capability.</h1>
            <p className="page-hero-lead">
              Evidentize is not an LMS, a job board or a certificate issuer. It is the evidence layer — the infrastructure that turns what candidates do into something employers can trust.
            </p>

            <div className="page-hero-ctas">
              <Button href="/partners" variant="primary" arrow>
                Become a partner
              </Button>
              <Button href="/demo" variant="ghost">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── What it is (not) ──────────────────── */}
      <section className="platform-not-section section-pad-sm">
        <div className="wrap">
          <RevealWrapper>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>What it is not</div>
            <h2 style={{ maxWidth: '560px', marginBottom: '4px' }}>Infrastructure, not another tool in the stack.</h2>
          </RevealWrapper>
          <RevealWrapper delay={70}>
            <div className="platform-not-rows">
              {[
                {
                  label: 'Not an LMS',
                  desc: 'Evidentize does not host content, deliver learning or manage enrolments. It sits alongside the tools partners already use — it does not replace them.',
                },
                {
                  label: 'Not a job board',
                  desc: 'Evidentize does not place candidates or connect them to employers directly. It produces the evidence that makes those connections more credible when they happen.',
                },
                {
                  label: 'Not a certification body',
                  desc: 'Evidentize does not issue qualifications or accreditations. It issues evidence — calibrated verdicts tied to specific work, in a specific context, against a defined standard.',
                },
              ].map((item) => (
                <div key={item.label} className="platform-not-row">
                  <svg className="platform-not-x" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <p className="platform-not-label">{item.label}</p>
                  <p className="platform-not-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Assessment model ──────────────────── */}
      <AssessmentModel />

      {/* ── Verdict bands ─────────────────────── */}
      <VerdictBands />

      {/* ── Record anatomy ────────────────────── */}
      <RecordAnatomy />

      {/* ── Partner infrastructure ────────────── */}
      <PartnerInfra />

      {/* ── CTA ───────────────────────────────── */}
      <section className="solution-cta-section">
        <div className="solution-cta-glow" aria-hidden="true" />
        <div className="wrap">
          <RevealWrapper>
            <div className="solution-cta-inner">
              <h2>Ready to build on it?</h2>
              <p>
                Talk to the team about the partner programme — or book a demo to see the platform and the assessment experience in full.
              </p>
              <div className="solution-cta-btns">
                <Button href="/partners" variant="primary" arrow>
                  See the partner programme
                </Button>
                <Button href="/demo" variant="ghost">
                  Book a demo
                </Button>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
