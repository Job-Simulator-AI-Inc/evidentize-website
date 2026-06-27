import RevealWrapper from '@/components/ui/RevealWrapper'
import EvidenceRecord from '@/components/EvidenceRecord'
import DemoForm from '@/components/DemoForm'

const PROOF_POINTS = [
  'A live assessment scenario from a discipline of your choice',
  'The five-band verdict system applied to a real work submission',
  'The partner setup, white-label experience and cohort management',
  'How candidates carry and share their verified record after assessment',
]

export default function DemoPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="hero-watermark" aria-hidden="true" style={{ fontSize: 'clamp(72px, 14vw, 200px)', bottom: '2%', right: '-1%', lineHeight: 1 }}>
          DEMO
        </div>
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow on-ink" style={{ marginBottom: '22px' }}>Book a demo</div>
            <h1 style={{ maxWidth: '720px' }}>
              See Evidentize<br />in action.
            </h1>
            <p className="page-hero-lead" style={{ maxWidth: '560px' }}>
              A 30-minute session with our team. We'll show you what verified evidence looks like for your organisation and the people you serve.
            </p>
          </div>
        </div>
      </section>

      {/* ── BODY: Showcase + Form ─────────────── */}
      <section className="demo-body section-pad">
        <div className="wrap">
          <div className="demo-grid">

            {/* Left — product showcase */}
            <div className="demo-showcase">
              <RevealWrapper>
                <div className="demo-record-wrap">
                  <EvidenceRecord />
                </div>
              </RevealWrapper>
              <RevealWrapper delay={160}>
                <p className="demo-showcase-label">In the demo you will see</p>
                <ul className="demo-proof-list">
                  {PROOF_POINTS.map((pt) => (
                    <li key={pt} className="demo-proof-item">
                      <span className="demo-proof-dot" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </RevealWrapper>
            </div>

            {/* Right — form */}
            <RevealWrapper delay={220}>
              <div className="demo-form-card">
                <div className="demo-form-header">
                  <span className="eyebrow" style={{ marginBottom: '8px' }}>Request access</span>
                  <p className="demo-form-sub">We respond within one business day.</p>
                </div>

                <DemoForm />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
