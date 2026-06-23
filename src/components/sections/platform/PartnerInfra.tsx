import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

function TagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

function SlidersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ReceiptIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

const INFRA_ITEMS = [
  {
    Icon: TagIcon,
    title: 'White-label tenancy',
    desc: 'Partners run Evidentize under their own brand. Learners and candidates experience your organisation — not a third-party product — from login to record.',
  },
  {
    Icon: SlidersIcon,
    title: 'Discipline and tier configuration',
    desc: 'Choose the disciplines and levels that fit your programmes. Configure Foundation or Practitioner assessments per cohort — no engineering work required.',
  },
  {
    Icon: UsersIcon,
    title: 'Cohort management',
    desc: 'Organise candidates into cohorts, track progress, and access results through the partner dashboard. Designed for programme administrators, not developers.',
  },
  {
    Icon: ReceiptIcon,
    title: 'Straightforward billing',
    desc: 'Evidentize invoices your organisation per assessment. You decide how it fits your learner model. There is no revenue share and no minimum commitment to get started.',
  },
  {
    Icon: GlobeIcon,
    title: 'Public verification endpoint',
    desc: 'Every record issued carries a public verification URL. Any third party can confirm the verdict, the candidate and the discipline without contacting you or Evidentize.',
  },
  {
    Icon: ShieldIcon,
    title: 'Tamper-evident infrastructure',
    desc: 'Records are cryptographically anchored at the point of issue. The integrity of every verdict is independently verifiable — with no dependency on either party remaining in operation.',
  },
]

export default function PartnerInfra() {
  return (
    <section className="infra-section section-pad">
      <div className="wrap">
        <RevealWrapper>
          <SectionHead
            eyebrow="Partner infrastructure"
            heading="Built for organisations, not individuals."
            lead="Everything in the Evidentize partner layer is designed for organisations that run programmes at scale — not candidates discovering a new product."
          />
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <div className="infra-grid">
            {INFRA_ITEMS.map((item) => (
              <div key={item.title} className="infra-card">
                <div className="infra-icon" aria-hidden="true">
                  <item.Icon />
                </div>
                <p className="infra-title">{item.title}</p>
                <p className="infra-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
