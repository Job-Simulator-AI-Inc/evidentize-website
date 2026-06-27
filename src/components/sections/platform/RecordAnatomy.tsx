import RevealWrapper from '@/components/ui/RevealWrapper'
import EvidenceRecord from '@/components/EvidenceRecord'

const ANATOMY_ITEMS = [
  {
    title: 'Tied to candidate identity',
    desc: 'Every record is anchored to a verified identity. It cannot be transferred, forged or claimed by someone who did not produce the work.',
  },
  {
    title: 'Partner-neutral portability',
    desc: 'The record belongs to the candidate — not the partner, not the platform. It moves with them across every role and organisation they go to.',
  },
  {
    title: 'Publicly verifiable',
    desc: 'Any third party can verify the verdict independently, without an account or a relationship with the issuing partner.',
  },
  {
    title: 'Tamper-evident anchoring',
    desc: 'Cryptographically anchored at the point of issue. Any modification after the fact is detectable — what you see is exactly what was assessed.',
  },
]

export default function RecordAnatomy() {
  return (
    <section id="credentials" className="record-showcase-section">
      <div className="wrap">
        <RevealWrapper>
          <div className="record-showcase-grid">
            {/* Live EvidenceRecord — the actual product running */}
            <div style={{ flexShrink: 0 }}>
              <EvidenceRecord />
            </div>

            {/* Anatomy explanation */}
            <div className="record-showcase-right">
              <div>
                <div className="eyebrow on-ink" style={{ marginBottom: '20px' }}>The record</div>
                <h2 style={{
                  color: 'var(--paper-on-ink)',
                  fontSize: 'clamp(1.7rem, 1.1rem + 2.2vw, 2.8rem)',
                  letterSpacing: '-0.028em',
                  lineHeight: 1.06,
                  marginBottom: '16px',
                }}>
                  What a verified record contains — and what makes it trustworthy.
                </h2>
                <p style={{
                  color: 'var(--mute-on-ink)',
                  fontSize: 'clamp(1rem, 0.88rem + 0.5vw, 1.2rem)',
                  lineHeight: 1.65,
                }}>
                  A verdict is not a badge. It is a portable, anchored record of what a specific person did — and how well — in a defined context.
                </p>
              </div>

              <div className="record-showcase-list">
                {ANATOMY_ITEMS.map((item, i) => (
                  <div key={item.title} className="record-showcase-item" style={{ transitionDelay: `${i * 80}ms` }}>
                    <span className="record-showcase-dot" aria-hidden="true" />
                    <div>
                      <p className="record-showcase-item-title">{item.title}</p>
                      <p className="record-showcase-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
