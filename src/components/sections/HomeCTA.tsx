import RevealWrapper from '@/components/ui/RevealWrapper'
import Button from '@/components/ui/Button'

export default function HomeCTA() {
  return (
    <section className="home-cta-section on-ink section-pad">
      <div className="home-cta-glow" aria-hidden="true" />
      <div className="wrap">
        <RevealWrapper>
          <div className="home-cta-inner">
            <h2>Ready to evidence what your learners can do?</h2>
            <p className="home-cta-lead">
              Join the partner programme. Run Evidentize under your brand — and give the people you serve verified proof that travels with them.
            </p>
            <div className="home-cta-btns">
              <Button href="/partners" variant="primary" arrow>
                Become a partner
              </Button>
              <Button href="/demo" variant="ghost">
                Book a demo
              </Button>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
