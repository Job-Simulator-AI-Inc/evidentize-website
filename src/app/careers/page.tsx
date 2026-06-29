import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

export const metadata: Metadata = {
  title: 'Careers at Evidentize — Build the Evidence Layer With Us',
  description:
    'Evidentize is an early-stage company building the infrastructure for verified human capability. If you want to work on a genuine infrastructure problem, talk to us.',
}

type JobListing = {
  id: string
  title: string
  department: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote'
  location: string
  description: string
  responsibilities: string[]
  skills: string[]
  salaryRange: string
  applyEmail?: string
}

const JOB_LISTINGS: JobListing[] = [
  // Add job listings here. When this array is empty the "no roles" state renders.
  // Example shape:
  // {
  //   id: 'founding-engineer',
  //   title: 'Founding Engineer',
  //   department: 'Engineering',
  //   type: 'Full-time',
  //   location: 'Remote (UK / EU)',
  //   description: 'You will be one of the first engineers at Evidentize, working directly with the founders to build the core assessment infrastructure from the ground up.',
  //   responsibilities: [
  //     'Design and ship the assessment delivery and scoring pipeline',
  //     'Define data models and API contracts for evidence issuance',
  //     'Own reliability and performance of the platform end-to-end',
  //   ],
  //   skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'System Design'],
  //   salaryRange: '£70,000 – £90,000',
  //   applyEmail: 'hello@evidentize.io',
  // },
]

const WHAT_WE_VALUE = [
  {
    num: '01',
    title: 'People who do, then say',
    desc: 'We build an evidence layer — we value it internally too. We are interested in what you have built, shipped, fixed or changed. Not just what you say you can do.',
  },
  {
    num: '02',
    title: 'Rigour without bureaucracy',
    desc: 'The assessment model is rigorous because it has to be. Everything else should be as simple as it can be. We do not add process for comfort — we add it when it earns its place.',
  },
  {
    num: '03',
    title: 'Directness about what we do not know',
    desc: 'We are an early-stage company. We are figuring things out. The expectation is that you are comfortable with ambiguity and honest about where your knowledge ends.',
  },
  {
    num: '04',
    title: 'Long-term thinking',
    desc: 'Infrastructure compounds. The value of what we are building increases as more evidence is issued. We are optimising for that — not for the next quarter.',
  },
]

export default function CareersPage() {
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
              <span aria-current="page">Careers</span>
            </nav>

            <div className="eyebrow on-ink" style={{ marginBottom: '20px' }}>Careers</div>
            <h1>Build the evidence layer with us.</h1>
            <p className="page-hero-lead">
              Evidentize is an early-stage company building infrastructure for a genuine problem. If the work sounds interesting, we would like to hear from you — whether or not a specific role is listed.
            </p>
          </div>
        </div>
      </section>

      {/* ── Open roles ────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <RevealWrapper>
            <SectionHead
              eyebrow="Open roles"
              heading="Current openings."
            />
          </RevealWrapper>

          <RevealWrapper delay={80}>
            <div className="careers-openings">
              {JOB_LISTINGS.length === 0 ? (
                <div className="careers-empty">
                  <span className="careers-empty-label">No roles currently listed</span>
                  <p className="careers-empty-text">
                    We are not currently advertising specific roles — but we are always interested in talking to people who believe in the problem and want to work on it. If that is you, get in touch.
                  </p>
                </div>
              ) : (
                <div className="careers-list">
                  {JOB_LISTINGS.map((job) => (
                    <article key={job.id} className="career-card">
                      <header className="career-card-header">
                        <div className="career-card-title-row">
                          <h3 className="career-card-title">{job.title}</h3>
                          <div className="career-card-badges">
                            <span className="opening-tag">{job.type}</span>
                            <span className="opening-tag">{job.department}</span>
                          </div>
                        </div>
                        <p className="career-card-location">
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M8 1.5A4.5 4.5 0 0 0 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6A4.5 4.5 0 0 0 8 1.5Zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="currentColor"/>
                          </svg>
                          {job.location}
                        </p>
                      </header>

                      <p className="career-card-desc">{job.description}</p>

                      <div className="career-card-section">
                        <span className="career-card-section-label">Responsibilities</span>
                        <ul className="career-card-responsibilities">
                          {job.responsibilities.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="career-card-section">
                        <span className="career-card-section-label">Skills & experience</span>
                        <div className="career-card-skills">
                          {job.skills.map((s) => (
                            <span key={s} className="career-skill-tag">{s}</span>
                          ))}
                        </div>
                      </div>

                      <footer className="career-card-footer">
                        <div className="career-card-salary">
                          <span className="career-card-section-label">Salary</span>
                          <span className="career-card-salary-value">{job.salaryRange}</span>
                        </div>
                        <a
                          href={`mailto:${job.applyEmail ?? 'hello@evidentize.io'}?subject=Application — ${job.title}`}
                          className="career-apply-btn"
                        >
                          Apply for this role
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </footer>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── What we value ─────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--edge)' }}>
        <div className="wrap">
          <RevealWrapper>
            <div className="benefits-layout">
              <aside className="benefits-aside">
                <span className="benefits-aside-label">What we look for</span>
                <p className="benefits-aside-heading">Early stage means you shape the thing, not just maintain it.</p>
                <p className="benefits-aside-body">
                  We are a small team building something that has not existed before. The people who join at this stage will have significant influence on what Evidentize becomes.
                </p>
              </aside>

              <div className="benefits-rows">
                {WHAT_WE_VALUE.map((item, i) => (
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

      {/* ── Assessors ─────────────────────────── */}
      <section className="pain-section section-pad-sm">
        <div className="wrap">
          <RevealWrapper>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow on-ink" style={{ marginBottom: '12px' }}>Not a full-time role?</div>
                <h2 style={{ color: 'var(--paper-on-ink)', fontSize: 'clamp(1.4rem, 1rem + 1.5vw, 2rem)', letterSpacing: '-0.02em', marginBottom: '10px' }}>
                  Consider becoming an assessor.
                </h2>
                <p style={{ color: 'var(--mute-on-ink)', fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '540px' }}>
                  If you have deep practitioner experience in one of our disciplines, you can contribute as a human assessor — paid per assessment, asynchronous, on your schedule.
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <Button href="/mentors" variant="ghost">
                  Learn about assessing
                </Button>
              </div>
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
              <h2>Interested in working with us?</h2>
              <p>
                Send us a note introducing yourself — what you have worked on, why the problem interests you, and what you would want to work on at Evidentize.
              </p>
              <div className="solution-cta-btns">
                <Button href="mailto:hello@evidentize.io" variant="primary" arrow>
                  Get in touch
                </Button>
                <Button href="/about" variant="ghost">
                  About Evidentize
                </Button>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
