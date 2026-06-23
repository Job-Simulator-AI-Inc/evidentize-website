import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

export const metadata: Metadata = {
  title: 'Evidentize Partner Programme — Build on the Evidence Layer',
  description:
    'Run Evidentize under your own brand, for your own learners and candidates. The partner programme is open to universities, training providers, bootcamps, employers and recruiters.',
}

const WHAT_YOU_GET = [
  {
    num: '01',
    title: 'White-label tenancy',
    desc: 'Your learners and candidates experience your organisation throughout. Evidentize is the infrastructure underneath — the platform never surfaces to them as a separate product.',
  },
  {
    num: '02',
    title: 'Your disciplines, your tiers',
    desc: 'Choose the disciplines that match your programmes and your market. Configure Foundation or Practitioner-level assessments per cohort. New disciplines are added regularly.',
  },
  {
    num: '03',
    title: 'Portable evidence for your candidates',
    desc: 'Every verified record belongs to the candidate — not to you or to us. When they move on, their evidence goes with them. Which reflects well on the organisation that issued it.',
  },
  {
    num: '04',
    title: 'A commercial model that makes sense',
    desc: 'Evidentize invoices your organisation per assessment. You decide how it fits your learner or client pricing. No minimum commitment and no revenue share required.',
  },
]

const PARTNER_TYPES = [
  {
    num: '01',
    title: 'Universities',
    desc: 'Embed evidence capture into curriculum. Give graduates verified proof of capability beyond a degree classification.',
    href: '/solutions/universities',
  },
  {
    num: '02',
    title: 'Training Providers',
    desc: 'Turn completions into verifiable outcomes. Show employers what your learners can actually do in the role.',
    href: '/solutions/training-providers',
  },
  {
    num: '03',
    title: 'Coaching & Bootcamps',
    desc: 'Give graduates independent evidence employers trust — not a badge you issued, but a verdict from trained assessors.',
    href: '/solutions/coaching',
  },
  {
    num: '04',
    title: 'Employers',
    desc: 'Build evidence into your hiring pipeline. Comparable verdicts across every candidate, before the first interview.',
    href: '/solutions/employers',
  },
  {
    num: '05',
    title: 'Recruiters',
    desc: 'Shortlist on verified capability and share evidence with clients — not just CVs and assurances.',
    href: '/solutions/recruiters',
  },
  {
    num: '06',
    title: 'Other organisations',
    desc: 'If you develop, assess or place people — and you want evidence to underpin what you do — get in touch.',
    href: '/contact',
  },
]

const COMMERCIAL_STEPS = [
  {
    num: '01',
    title: 'Apply to the partner programme',
    desc: 'Tell us about your organisation, your learners and the disciplines you are interested in. We will come back to you within a few working days.',
  },
  {
    num: '02',
    title: 'Configure your tenancy',
    desc: 'We set up your white-label environment and work with you to configure disciplines, tiers and cohort structure before your first candidates begin.',
  },
  {
    num: '03',
    title: 'Run assessments, issue records',
    desc: 'Your learners complete assessments through your branded environment. Verified records are issued automatically. Evidentize invoices you per assessment completed.',
  },
]

export default function PartnersPage() {
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
              <span aria-current="page">Partners</span>
            </nav>

            <div className="eyebrow on-ink" style={{ marginBottom: '20px' }}>Partner programme</div>
            <h1>Build on the evidence layer.</h1>
            <p className="page-hero-lead">
              Run Evidentize under your own brand, for your own learners and candidates. The partner programme is open to any organisation that develops, assesses or places people.
            </p>

            <div className="page-hero-ctas">
              <Button href="/contact" variant="primary" arrow>
                Apply to partner
              </Button>
              <Button href="/demo" variant="ghost">
                Book a demo first
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ──────────────────────── */}
      <section className="benefits-section section-pad">
        <div className="wrap">
          <RevealWrapper>
            <div className="benefits-layout">
              <aside className="benefits-aside">
                <span className="benefits-aside-label">What partners get</span>
                <p className="benefits-aside-heading">Everything you need to run verified assessments at scale.</p>
                <p className="benefits-aside-body">
                  The partner programme is designed for organisations running programmes — not individuals discovering a product. Everything ships configured and ready.
                </p>
              </aside>

              <div className="benefits-rows">
                {WHAT_YOU_GET.map((item, i) => (
                  <div key={item.num} className="benefit-row" style={{ transitionDelay: `${i * 60}ms` }}>
                    <span className="benefit-num">{item.num}</span>
                    <div className="benefit-content">
                      <p className="benefit-title">{item.title}</p>
                      <p className="benefit-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Who partners ──────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--edge)' }}>
        <div className="wrap">
          <RevealWrapper>
            <SectionHead
              eyebrow="Who partners with us"
              heading="If you develop, assess or place people — you can build on Evidentize."
              lead="The partner programme is open to a wide range of organisations. If what you do involves developing capability or evidencing it, there is a model for you."
            />
          </RevealWrapper>

          <RevealWrapper delay={80}>
            <div className="partner-types-grid">
              {PARTNER_TYPES.map((type) => (
                <Link key={type.num} href={type.href} className="partner-type-card">
                  <span className="partner-type-label">{type.num}</span>
                  <p className="partner-type-title">{type.title}</p>
                  <p className="partner-type-desc">{type.desc}</p>
                  <span className="partner-type-arrow" aria-hidden="true">Learn more →</span>
                </Link>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Commercial model ──────────────────── */}
      <section className="section-pad on-ink">
        <div className="wrap">
          <RevealWrapper>
            <SectionHead
              eyebrow="The commercial model"
              heading="Simple. No surprises."
              lead="Evidentize invoices partner organisations per assessment. Partners decide how it fits their own learner or client model."
            />
          </RevealWrapper>

          <RevealWrapper delay={80}>
            <div className="commercial-steps">
              {COMMERCIAL_STEPS.map((step) => (
                <div key={step.num} className="commercial-step">
                  <span className="commercial-step-num">{step.num}</span>
                  <p className="commercial-step-title">{step.title}</p>
                  <p className="commercial-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="solution-cta-section">
        <div className="solution-cta-glow" aria-hidden="true" />
        <div className="wrap">
          <RevealWrapper>
            <div className="solution-cta-inner">
              <h2>Ready to apply?</h2>
              <p>
                Tell us about your organisation and the programmes you run. We will come back to you within a few working days.
              </p>
              <div className="solution-cta-btns">
                <Button href="/contact" variant="primary" arrow>
                  Apply to partner
                </Button>
                <Button href="/platform" variant="ghost">
                  See the platform
                </Button>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
