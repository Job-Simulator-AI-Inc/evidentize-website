import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import Button from '@/components/ui/Button'

const RESOURCES = [
  {
    type: 'Whitepaper',
    title: 'The evidence gap in hiring',
    desc: 'Why claims-based assessment fails, and what a verifiable alternative looks like.',
    href: '/insights/the-evidence-gap-in-hiring',
  },
  {
    type: 'Article',
    title: 'Completion is not capability',
    desc: 'How training providers can evidence outcomes, not attendance.',
    href: '/insights/completion-is-not-capability',
  },
  {
    type: 'Guide',
    title: 'Building on the evidence layer',
    desc: 'A practical guide for partners launching a branded capability offering.',
    href: '/insights/building-on-the-evidence-layer',
  },
]

export default function InsightsTeaser() {
  return (
    <section className="insights-section section-pad">
      <div className="wrap">
        <RevealWrapper>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <SectionHead
              eyebrow="Insights"
              heading="Thinking on capability, evidence and the future of hiring."
              lead="Articles, whitepapers and guides for partners, educators and talent leaders."
            />
            <Button href="/insights" variant="primary" arrow>
              All insights
            </Button>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={120}>
          <div className="resources-grid">
            {RESOURCES.map((r, i) => (
              <article key={r.title}>
                <RevealWrapper delay={i * 80}>
                  <div className="resource-card">
                    <span className="resource-type-tag">{r.type}</span>
                    <h3 className="resource-title">{r.title}</h3>
                    <p className="resource-desc">{r.desc}</p>
                    <Link href={r.href} className="resource-read-link" aria-label={`Read: ${r.title}`}>
                      Read <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </RevealWrapper>
              </article>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
