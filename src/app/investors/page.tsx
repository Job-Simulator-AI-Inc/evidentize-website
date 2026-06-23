import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'Investors — Evidentize',
  description:
    'Evidentize is building the evidence layer for human capability. For investor enquiries, contact us directly.',
}

const THESIS_POINTS = [
  {
    num: '01',
    title: 'The problem is structural',
    desc: 'Hiring decisions are made almost entirely on self-reported information. CVs, certificates and interviews have been the dominant signal for decades — and they share a common flaw: none of them verify what someone can actually do. That is not a product gap. It is an infrastructure gap.',
  },
  {
    num: '02',
    title: 'The solution requires infrastructure, not apps',
    desc: 'The problem cannot be solved by a better CV tool or a smarter recruiter app. It requires evidence infrastructure — a layer that captures what candidates do, evaluates it to a consistent standard, and makes it verifiable by any third party. That is what Evidentize is building.',
  },
  {
    num: '03',
    title: 'The model is partner-led by design',
    desc: 'Evidentize does not transact with candidates directly. Partners — universities, training providers, bootcamps, employers and recruiters — run the platform under their own brand, for their own learners and clients. The distribution leverage is in the partners, not in acquiring individual users.',
  },
  {
    num: '04',
    title: 'Portability creates compounding value',
    desc: 'Every record issued belongs to the candidate and is publicly verifiable. As the record base grows, the value of any single record increases — because employers and recruiters learn to trust and act on Evidentize verdicts. The evidence layer becomes more valuable as more evidence exists.',
  },
]

export default function InvestorsPage() {
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
              <span aria-current="page">Investors</span>
            </nav>

            <div className="eyebrow on-ink" style={{ marginBottom: '20px' }}>Investors</div>
            <h1>Building the infrastructure for verified capability.</h1>
            <p className="page-hero-lead">
              Evidentize is the evidence layer for human capability — the infrastructure that makes what people can do verifiable, portable and trusted.
            </p>
          </div>
        </div>
      </section>

      {/* ── Thesis ────────────────────────────── */}
      <section className="investor-thesis">
        <div className="wrap">
          <RevealWrapper>
            <div className="investor-thesis-grid">
              <div>
                <div className="eyebrow" style={{ marginBottom: '20px' }}>The thesis</div>
                <div className="investor-thesis-body">
                  {THESIS_POINTS.map((point) => (
                    <div key={point.num} style={{ marginBottom: '28px' }}>
                      <p style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--verified)', marginBottom: '8px' }}>{point.num}</p>
                      <p style={{ fontFamily: 'var(--display)', fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.01em' }}>{point.title}</p>
                      <p>{point.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="investor-contact-card">
                  <span className="investor-contact-label">Investor enquiries</span>
                  <p className="investor-contact-heading">
                    We respond to all investor enquiries directly.
                  </p>
                  <p className="investor-contact-body">
                    If you are interested in learning more about Evidentize — the product, the model, the market opportunity or the current stage — please reach out by email. We do not have an investor portal or a deck request form. We have a conversation.
                  </p>
                  <a href="mailto:investors@evidentize.io" className="investor-email">
                    investors@evidentize.io
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── What we are building ──────────────── */}
      <section className="section-pad" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <RevealWrapper>
            <div style={{ maxWidth: '720px' }}>
              <div className="eyebrow" style={{ marginBottom: '20px' }}>What we are building</div>
              <h2 style={{ marginBottom: '24px' }}>The evidence layer is not a feature. It is infrastructure.</h2>
              <div style={{ fontSize: '0.9375rem', color: 'var(--ink-soft)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  The global workforce runs on credentials that do not verify the thing that matters: whether the person can do the work. Universities, training providers, employers and recruiters all operate in a world where the dominant signal — the CV — is self-reported, unverifiable and comparison-resistant.
                </p>
                <p>
                  Evidentize is not trying to replace the CV. It is building the layer that sits underneath the entire hiring and development ecosystem — the infrastructure through which real-work evidence is captured, assessed, anchored and made portable. Once that layer exists at scale, everything above it changes.
                </p>
                <p>
                  We are in the early stage of building that infrastructure. The assessment model is live. Partners are running programmes. Records are being issued. The evidence layer is being built one verified record at a time.
                </p>
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
              <h2>Interested in a conversation?</h2>
              <p>
                Reach out directly. We respond to all investor enquiries and are happy to talk about what we are building, where we are and where we are going.
              </p>
              <div className="solution-cta-btns">
                <Button href="mailto:investors@evidentize.io" variant="primary" arrow>
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
