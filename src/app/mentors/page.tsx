import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

export const metadata: Metadata = {
  title: 'Become an Evidentize Assessor — Assess Real Work, Shape Real Careers',
  description:
    'Evidentize assessors are expert practitioners who evaluate real-work submissions against a calibrated standard. Apply to join the assessor panel.',
}

const WHAT_ASSESSORS_DO = [
  {
    num: '01',
    title: 'Review real-work submissions',
    desc: 'Candidates complete task-based scenarios built to mirror real work in a given discipline. You evaluate the output — not the candidate themselves, and not a theory test.',
  },
  {
    num: '02',
    title: 'Apply a calibrated framework',
    desc: 'Every discipline has a marking framework. You apply it consistently — trained to the same standard as every other assessor, so that one verdict means the same thing regardless of who issued it.',
  },
  {
    num: '03',
    title: 'Assign a verdict from five bands',
    desc: 'Distinction, Pass with Merit, Pass, Borderline, or Did Not Pass. Your verdict is reviewed by a panel before it is issued. No single assessor decides alone.',
  },
  {
    num: '04',
    title: 'Contribute to calibration sessions',
    desc: 'Assessors participate in regular calibration — reviewing edge cases, aligning on standards and maintaining the consistency that makes the verdicts credible.',
  },
]

const REQUIREMENTS = [
  {
    title: 'Practitioner-level experience',
    desc: 'You have worked in the discipline you want to assess — not studied it, done it. Evidentize does not assess theoretical knowledge of a field.',
  },
  {
    title: 'Ability to assess objectively',
    desc: 'You can separate personal preference from evidence of capability. Good work is good work whether or not you would have done it the same way.',
  },
  {
    title: 'Willingness to train and calibrate',
    desc: 'Every assessor completes the Evidentize assessor training programme before evaluating live submissions. Calibration is ongoing, not one-off.',
  },
  {
    title: 'Commitment to consistency',
    desc: 'Verdicts are compared across assessors and across time. Consistency is a requirement — candidates depend on verdicts meaning the same thing regardless of who they were assigned by.',
  },
  {
    title: 'Discretion with candidate work',
    desc: 'Candidate submissions are treated as confidential. Assessors operate under a non-disclosure obligation from the point of onboarding.',
  },
]

const WHY_ASSESS = [
  {
    num: '01',
    title: 'Influence what good looks like',
    desc: 'Calibration sessions give you direct input into how the standard is defined and maintained. What you believe good work looks like shapes what the framework says.',
  },
  {
    num: '02',
    title: 'Stay close to the discipline',
    desc: 'Assessing real-work submissions keeps you close to what practitioners are actually producing — at every tier, in every context. It is professional development that looks like work.',
  },
  {
    num: '03',
    title: 'Paid per assessment',
    desc: 'Assessors are paid per submission reviewed. The rate is set per discipline and tier and confirmed before you begin assessing live submissions.',
  },
  {
    num: '04',
    title: 'Work on your schedule',
    desc: 'Assessments are completed asynchronously. There are no fixed shifts. You take on assessments when it suits you — within the turnaround window for that discipline.',
  },
]

export default function MentorsPage() {
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
              <span aria-current="page">Become an Assessor</span>
            </nav>

            <div className="eyebrow on-ink" style={{ marginBottom: '20px' }}>Assessors</div>
            <h1>Assess real work. Shape real careers.</h1>
            <p className="page-hero-lead">
              Evidentize verdicts are issued by trained human assessors — expert practitioners who evaluate work against a calibrated standard. If that is you, we want to hear from you.
            </p>

            <div className="page-hero-ctas">
              <Button href="/contact" variant="primary" arrow>
                Apply to assess
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── What assessors do ─────────────────── */}
      <section className="benefits-section section-pad">
        <div className="wrap">
          <RevealWrapper>
            <div className="benefits-layout">
              <aside className="benefits-aside">
                <span className="benefits-aside-label">What assessors do</span>
                <p className="benefits-aside-heading">Review real work. Assign calibrated verdicts.</p>
                <p className="benefits-aside-body">
                  Every verdict in the Evidentize model comes from a trained human assessor — not an AI, not an algorithm. If you have deep practitioner experience, you are the rigour behind the record.
                </p>
              </aside>

              <div className="benefits-rows">
                {WHAT_ASSESSORS_DO.map((item, i) => (
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

      {/* ── Requirements ──────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--edge)' }}>
        <div className="wrap">
          <RevealWrapper>
            <SectionHead
              eyebrow="Who we are looking for"
              heading="Practitioners, not academics."
              lead="Evidentize does not assess theoretical knowledge of a field — and we do not want assessors who have only studied it. We want people who have done the work."
            />
          </RevealWrapper>

          <RevealWrapper delay={80}>
            <div className="mentor-req-list">
              {REQUIREMENTS.map((req) => (
                <div key={req.title} className="mentor-req-row">
                  <svg className="mentor-req-check" width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                    <polyline points="1 4 3.5 6.5 9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="mentor-req-text">
                    <strong>{req.title}</strong>
                    {req.desc}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Why assess ────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <RevealWrapper>
            <SectionHead
              eyebrow="Why become an assessor"
              heading="Influence the standard. Get paid. Work on your terms."
            />
          </RevealWrapper>

          <RevealWrapper delay={80}>
            <div className="infra-grid" style={{ marginTop: 'clamp(48px, 7vw, 64px)' }}>
              {WHY_ASSESS.map((item) => (
                <div key={item.num} className="infra-card">
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--verified)' }}>{item.num}</span>
                  <p className="infra-title">{item.title}</p>
                  <p className="infra-desc">{item.desc}</p>
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
                Tell us about your discipline and your practitioner background. We will review your application and come back to you with next steps.
              </p>
              <div className="solution-cta-btns">
                <Button href="/contact" variant="primary" arrow>
                  Apply to become an assessor
                </Button>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
