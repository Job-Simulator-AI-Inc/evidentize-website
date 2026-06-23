import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

const BEFORE = [
  {
    title: 'CVs and self-reported skills',
    desc: 'A list of claimed experience. No way to verify what was actually done, or how well.',
  },
  {
    title: 'Completion certificates',
    desc: "Proof someone attended — not proof of capability. Finishing a course doesn't mean the work is there.",
  },
  {
    title: 'Interviews and impressions',
    desc: 'Subjective, inconsistent and biased. The best communicator wins, not the best candidate.',
  },
]

const AFTER = [
  {
    title: 'Real-work evidence',
    desc: 'Candidates complete scenarios shaped like the actual role — not quizzes, not theory.',
  },
  {
    title: 'Human-assessed and calibrated',
    desc: 'Trained assessors evaluate the work to a defined standard. Defensible, consistent, fair.',
  },
  {
    title: 'Portable and verifiable',
    desc: 'The evidence follows the candidate, not the platform. Any third party can verify it.',
  },
  {
    title: 'Comparable across cohorts',
    desc: 'Five calibrated verdict bands mean every record can be read the same way by any employer.',
  },
]

function XIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 4.5l3.2 3.2L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Problem() {
  return (
    <section className="problem-section section-pad">
      <div className="wrap">
        <RevealWrapper>
          <SectionHead
            eyebrow="The problem"
            heading="Credentials describe. Evidence proves."
            lead="The hiring ecosystem runs on claims. CVs, certificates and interviews tell you what someone says they can do. None of it tells you what they actually did."
          />
        </RevealWrapper>

        <div className="problem-grid">
          {/* Before column */}
          <RevealWrapper delay={100}>
            <span className="problem-col-label">Without Evidentize</span>
            <div className="problem-items">
              {BEFORE.map((item) => (
                <div key={item.title} className="problem-item">
                  <div className="problem-item-icon x" aria-label="Missing">
                    <XIcon />
                  </div>
                  <div className="problem-item-text">
                    <strong>{item.title}</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* After column */}
          <RevealWrapper delay={200}>
            <div className="problem-after-card">
              <div className="problem-after-glow" aria-hidden="true" />
              <div className="problem-after-inner">
                <span className="problem-after-label">With Evidentize</span>
                <div className="problem-after-items">
                  {AFTER.map((item) => (
                    <div key={item.title} className="problem-after-item">
                      <div className="check-icon" aria-label="Available">
                        <CheckIcon />
                      </div>
                      <div className="problem-after-text">
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
