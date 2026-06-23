import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { ARTICLES } from '@/data/articleData'

const featured = ARTICLES.find((a) => a.featured)!
const secondary = ARTICLES.filter((a) => !a.featured)

export default function InsightsPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="page-hero-grid" aria-hidden="true" />
        <div
          className="hero-watermark"
          aria-hidden="true"
          style={{ fontSize: 'clamp(52px, 11vw, 170px)', bottom: '2%', right: '-1%', lineHeight: 1 }}
        >
          INSIGHTS
        </div>
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow on-ink" style={{ marginBottom: '22px' }}>Evidentize insights</div>
            <h1 style={{ maxWidth: '760px' }}>
              On assessment, evidence,<br />and the future of hiring.
            </h1>
            <p className="page-hero-lead" style={{ maxWidth: '560px' }}>
              Thinking from the Evidentize team on capability verification, the skills economy and what it actually means to prove you can do the work.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ──────────────────── */}
      <section className="insights-featured-section on-ink section-pad-sm">
        <div className="wrap">
          <RevealWrapper>
            <Link href={`/insights/${featured.slug}`} className="insights-featured-card">
              <div className="insights-featured-meta">
                <span className="insights-cat">{featured.category}</span>
                <span className="insights-date">{featured.date}</span>
              </div>
              <h2 className="insights-featured-title">{featured.title}</h2>
              <p className="insights-featured-excerpt">{featured.excerpt}</p>
              <div className="insights-featured-cta">
                <span>Read article</span>
                <span className="arrow" aria-hidden="true">→</span>
              </div>
            </Link>
          </RevealWrapper>
        </div>
      </section>

      {/* ── ARTICLE GRID ──────────────────────── */}
      <section className="insights-grid-section section-pad">
        <div className="wrap">
          <div className="insights-grid">
            {secondary.map((article, i) => (
              <RevealWrapper key={article.slug} delay={i * 70}>
                <Link href={`/insights/${article.slug}`} className="insights-card">
                  <div className="insights-card-meta">
                    <span className="insights-cat">{article.category}</span>
                    <span className="insights-read-time">{article.readTime}</span>
                  </div>
                  <h3 className="insights-card-title">{article.title}</h3>
                  <p className="insights-card-excerpt">{article.excerpt}</p>
                  <div className="insights-card-footer">
                    <span className="insights-date">{article.date}</span>
                    <span className="insights-card-arrow">→</span>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
