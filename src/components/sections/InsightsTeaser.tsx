import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import Button from '@/components/ui/Button'
import { ARTICLES } from '@/data/articleData'

const RESOURCES = ARTICLES.slice(0, 3).map((a) => ({
  type: a.category,
  title: a.title,
  desc: a.excerpt,
  href: `/insights/${a.slug}`,
}))

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
