import EvidenceRecord from '@/components/EvidenceRecord'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="hero hero-editorial">
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-watermark" aria-hidden="true">VERIFIED</div>

      <div className="wrap">
        <div className="hero-eyebrow" aria-label="Tagline">
          <span className="hero-eyebrow-bar" aria-hidden="true" />
          The evidence layer for human capability
        </div>

        <h1 className="hero-h1-large">
          Work speaks.<br />
          <span className="hero-h1-accent">Evidence confirms.</span>
        </h1>

        <div className="hero-lower-split">
          <div className="hero-lower-left">
            <p className="hero-lead" style={{ marginBottom: 'clamp(28px, 4vw, 40px)' }}>
              Evidentize captures and verifies what candidates actually do — so partners can demonstrate real outcomes, not just completions.
            </p>

            <div className="hero-ctas" style={{ marginBottom: 'clamp(28px, 4vw, 40px)' }}>
              <Button href="/partners" variant="primary" arrow>
                Become a partner
              </Button>
              <Button href="/demo" variant="ghost">
                Book a demo
              </Button>
            </div>

            <div className="hero-trust-strip" aria-label="Key attributes">
              <div className="trust-item">
                <span className="trust-dot" aria-hidden="true" />
                Human assessed
              </div>
              <div className="trust-item">
                <span className="trust-dot" aria-hidden="true" />
                Portable evidence
              </div>
              <div className="trust-item">
                <span className="trust-dot" aria-hidden="true" />
                Publicly verifiable
              </div>
            </div>
          </div>

          <div className="hero-lower-right">
            <div className="hero-record-wrap">
              <div className="hero-record-glow" aria-hidden="true" />
              <EvidenceRecord />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
