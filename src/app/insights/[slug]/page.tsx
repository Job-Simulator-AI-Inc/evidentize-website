import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ARTICLES } from '@/data/articleData'

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  const others = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      {/* ── ARTICLE HERO ──────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="wrap">
          <div className="page-hero-inner" style={{ maxWidth: '820px' }}>
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="page-breadcrumb-sep" aria-hidden="true">›</span>
              <Link href="/insights">Insights</Link>
              <span className="page-breadcrumb-sep" aria-hidden="true">›</span>
              <span aria-current="page">{article.category}</span>
            </nav>
            <div className="eyebrow on-ink" style={{ marginBottom: '22px' }}>{article.category}</div>
            <h1 style={{ maxWidth: '820px', fontSize: 'clamp(1.8rem, 1.2rem + 2.5vw, 3.2rem)' }}>
              {article.title}
            </h1>
            <div className="article-meta">
              <span>{article.date}</span>
              <span className="article-meta-sep" aria-hidden="true">·</span>
              <span>{article.readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────── */}
      <section className="article-body section-pad">
        <div className="wrap">
          <div className="article-layout">
            <article className="article-content">
              <p className="article-lead">{article.excerpt}</p>

              {article.body ? (
                article.body.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))
              ) : (
                <p className="article-placeholder">
                  Full article coming soon. In the meantime, explore related insights below or{' '}
                  <Link href="/demo">book a demo</Link> to see Evidentize in action.
                </p>
              )}
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="article-sidebar-block">
                <p className="article-sidebar-label">More insights</p>
                <ul className="article-sidebar-list">
                  {others.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/insights/${a.slug}`} className="article-sidebar-link">
                        <span className="article-sidebar-cat">{a.category}</span>
                        <span className="article-sidebar-title">{a.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="article-sidebar-block article-sidebar-cta">
                <p className="article-sidebar-label">See it in practice</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-soft)', marginBottom: '16px' }}>
                  Book a 30-minute demo to see how Evidentize assessment works across any discipline.
                </p>
                <Link href="/demo" className="btn btn-primary btn-sm">
                  Request a demo →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
