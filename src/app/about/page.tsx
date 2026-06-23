import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

export const metadata: Metadata = {
  title: 'About Evidentize — The Evidence Layer for Human Capability',
  description:
    'Evidentize exists because the hiring ecosystem runs on claims — CVs, certificates, interviews. We are building the infrastructure that makes capability verifiable instead.',
}

const PRINCIPLES = [
  {
    num: '01',
    title: 'Evidence over assertion',
    desc: 'We believe what you did matters more than what you say you did. Every design decision in the Evidentize model follows from that: real work, human assessment, calibrated verdicts.',
  },
  {
    num: '02',
    title: 'Portability over lock-in',
    desc: 'The evidence belongs to the candidate. Not to us. Not to the partner. Not to the platform. That is not just an aspiration — it is built into how records are issued and how they are verified.',
  },
  {
    num: '03',
    title: 'Rigour over speed',
    desc: 'Auto-grading is fast. It is also wrong, often in ways that compound. Human assessors take longer. They are also right more often — and the verdicts hold up when they are tested.',
  },
  {
    num: '04',
    title: 'Partner-led, not direct',
    desc: 'We do not compete with the organisations that serve candidates. We give them better infrastructure. The partner model is the only model — because the relationships that matter are the ones partners already have.',
  },
]

export default function AboutPage() {
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
              <span aria-current="page">About</span>
            </nav>

            <div className="eyebrow on-ink" style={{ marginBottom: '20px' }}>About Evidentize</div>
            <h1>The evidence layer for human capability.</h1>
            <p className="page-hero-lead">
              The hiring ecosystem runs on claims. Evidentize is building the infrastructure that makes capability verifiable — not self-reported, not inferred, not assumed.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────── */}
      <section className="about-mission">
        <div className="wrap">
          <RevealWrapper>
            <div className="about-mission-grid">
              <p className="about-pull-quote">
                We exist because <em>what you did</em> should matter more than what you say you did.
              </p>

              <div className="about-aside-body">
                <p>
                  Hiring is broken in a specific way: the information that decisions are made on is almost entirely self-reported, subjective or unverifiable. CVs describe. Certificates confirm attendance. Interviews test how well someone can talk about the work, not how well they can do it.
                </p>
                <p>
                  Evidentize is the infrastructure for a different model. Real-work simulations, assessed by trained humans, producing calibrated verdicts that any third party can verify. Not a new qualification. Not another certificate. The evidence layer that sits underneath everything else.
                </p>
                <p>
                  We are partner-led by design. The organisations that develop, assess and place people already have the relationships that matter. We give them the evidence infrastructure. They bring it to the candidates who need it.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── Principles ────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <RevealWrapper>
            <SectionHead
              eyebrow="What we believe"
              heading="Principles that shape every product decision."
              lead="These are not values written for a wall. They are the reasons specific things in the Evidentize model work the way they do."
            />
          </RevealWrapper>

          <RevealWrapper delay={80}>
            <div className="principles-grid">
              {PRINCIPLES.map((p) => (
                <div key={p.num} className="principle-card">
                  <span className="principle-num">{p.num}</span>
                  <p className="principle-title">{p.title}</p>
                  <p className="principle-desc">{p.desc}</p>
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
              <h2>Interested in what we are building?</h2>
              <p>
                Whether you want to partner, invest, or join the team — we would like to hear from you.
              </p>
              <div className="solution-cta-btns">
                <Button href="/partners" variant="primary" arrow>
                  Partner with us
                </Button>
                <Button href="/careers" variant="ghost">
                  Join the team
                </Button>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
