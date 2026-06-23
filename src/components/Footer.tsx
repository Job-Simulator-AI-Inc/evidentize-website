import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-upper">
        <div className="wrap">
          <div className="footer-grid">
            {/* Brand block */}
            <div>
              <Link href="/" className="footer-brand-wordmark" aria-label="Evidentize — home">
                <Image
                  src="https://res.cloudinary.com/dkhawygrr/image/upload/q_auto/f_auto/v1781204028/Evidentize_logo_samples_2_dcrpha.png"
                  alt="Evidentize"
                  width={1000}
                  height={26}
                  style={{ width: 'auto', height: '26px' }}
                />
              </Link>
              <p className="footer-tagline">
                The evidence layer for human capability. Evidence over claims.
              </p>
            </div>

            {/* Platform column */}
            <div>
              <span className="footer-col-label">Platform</span>
              <ul className="footer-links">
                <li><Link href="/platform">How it works</Link></li>
                <li><Link href="/platform#simulations">Simulations</Link></li>
                <li><Link href="/platform#credentials">Credentials</Link></li>
                <li><Link href="/platform#verification">Verification</Link></li>
                <li><Link href="/platform#white-label">White-label</Link></li>
              </ul>
            </div>

            {/* Solutions column */}
            <div>
              <span className="footer-col-label">Solutions</span>
              <ul className="footer-links">
                <li><Link href="/solutions/universities">Universities</Link></li>
                <li><Link href="/solutions/training-providers">Training Providers</Link></li>
                <li><Link href="/solutions/coaching">Coaching & Bootcamps</Link></li>
                <li><Link href="/solutions/employers">Employers</Link></li>
                <li><Link href="/solutions/recruiters">Recruiters</Link></li>
              </ul>
            </div>

            {/* Company column */}
            <div>
              <span className="footer-col-label">Company</span>
              <ul className="footer-links">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/partners">Partner Programme</Link></li>
                <li><Link href="/mentors">Mentors & Assessors</Link></li>
                <li><Link href="/insights">Insights</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/investors">Investors</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/demo">Book a demo</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Evidentize. All rights reserved.</p>
          <nav className="footer-legal" aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
