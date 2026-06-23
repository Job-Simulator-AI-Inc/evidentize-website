import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import Button from '@/components/ui/Button'

function TagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

const FEATURES = [
  {
    num: '01',
    title: 'Run it under your brand',
    desc: 'White-label tenancy means your learners and candidates experience your organisation — Evidentize is the infrastructure underneath.',
  },
  {
    num: '02',
    title: 'Choose your disciplines and tiers',
    desc: 'Pick the disciplines that match your programmes and your market. Configure Foundation or Practitioner-level assessments per cohort.',
  },
  {
    num: '03',
    title: 'Straightforward commercial model',
    desc: 'Today, Evidentize invoices your organisation. You decide how it fits your learner or client model. No revenue share required.',
  },
  {
    num: '04',
    title: 'Candidates keep their evidence',
    desc: 'The portfolio is partner-neutral. Your learners take verified proof with them — which reflects well on you every time it opens doors.',
  },
]

const LAYERS = [
  { Icon: TagIcon, title: 'Your brand', sub: 'Partner-labelled experience' },
  { Icon: UsersIcon, title: 'Your cohorts', sub: 'Manage candidates and results' },
  { Icon: LayersIcon, title: 'Evidentize platform', sub: 'Assessment infrastructure' },
  { Icon: ShieldCheckIcon, title: 'Verified records', sub: 'Portable · Tamper-evident' },
]

export default function PartnerModel() {
  return (
    <section className="partner-model-section section-pad">
      <div className="wrap">
        <RevealWrapper>
          <SectionHead
            eyebrow="Partner model"
            heading="Infrastructure you build on. Evidence they carry."
            lead="Evidentize is not a course, an LMS or a job board. It is the layer that makes capability verifiable — and partners bring it to the people they already serve."
          />
        </RevealWrapper>

        <div className="partner-model-grid">
          <RevealWrapper delay={100}>
            <ul className="model-features-list">
              {FEATURES.map((f) => (
                <li key={f.num} className="model-feature" data-num={f.num}>
                  <span className="model-feature-num">{f.num}</span>
                  <div className="model-feature-content">
                    <p className="model-feature-title">{f.title}</p>
                    <p className="model-feature-desc">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '32px' }}>
              <Button href="/partners" variant="primary" arrow>
                See the partner programme
              </Button>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="model-visual-card">
              <div className="model-visual-glow" aria-hidden="true" />
              <div className="model-stack">
                {LAYERS.map((layer) => (
                  <div key={layer.title} className="model-layer">
                    <div className="model-layer-icon" aria-hidden="true">
                      <layer.Icon />
                    </div>
                    <div className="model-layer-info">
                      <p className="model-layer-title">{layer.title}</p>
                      <p className="model-layer-sub">{layer.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
