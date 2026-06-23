import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

export default function Testimonials() {
  return (
    <section className="testimonials-section section-pad">
      <div className="wrap">
        <RevealWrapper>
          <SectionHead
            eyebrow="In their words"
            heading="What people say after the work speaks first."
          />
        </RevealWrapper>

        <RevealWrapper delay={120}>
          <div className="testimonials-grid">
            {[0, 1, 2].map((i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-mark" aria-hidden="true">&ldquo;</div>
                <div className="testimonial-placeholder-text">
                  Real testimonial coming soon — only genuine quotes from candidates, partners and mentors will appear here.
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" aria-hidden="true" />
                  <div>
                    <p className="testimonial-name" style={{ color: 'var(--edge)' }}>—</p>
                    <p className="testimonial-role">Partner or candidate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="testimonials-note">
            Build note · real testimonials only — no fabricated quotes
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
