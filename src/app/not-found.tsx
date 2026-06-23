import Link from 'next/link'

const LINKS = [
  { label: 'Homepage', href: '/' },
  { label: 'Platform', href: '/platform' },
  { label: 'Solutions', href: '/solutions/universities' },
  { label: 'Book a demo', href: '/demo' },
  { label: 'Contact', href: '/contact' },
]

export default function NotFound() {
  return (
    <>
      <section className="nf-section">
        {/* Large background watermark */}
        <div className="nf-watermark" aria-hidden="true">404</div>

        <div className="wrap nf-inner">
          <div className="nf-code-wrap">
            <span className="eyebrow on-ink">Error 404</span>
          </div>

          <h1 className="nf-heading">
            This page<br />does not exist.
          </h1>

          <p className="nf-lead">
            The URL you followed may have moved, been renamed, or never existed.
            No verified record was harmed in the making of this error.
          </p>

          <nav className="nf-links" aria-label="Suggested pages">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="nf-link">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nf-divider" aria-hidden="true" />

          <p className="nf-footer-note">
            If you believe this is an error on our side, email{' '}
            <a href="mailto:hello@evidentize.io" className="nf-email-link">
              hello@evidentize.io
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
