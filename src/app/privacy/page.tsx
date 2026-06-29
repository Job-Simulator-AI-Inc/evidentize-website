import Link from 'next/link'

const SECTIONS = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'data-we-collect', label: 'Data we collect' },
  { id: 'how-we-use-it', label: 'How we use it' },
  { id: 'legal-basis', label: 'Legal basis' },
  { id: 'sharing', label: 'Sharing data' },
  { id: 'retention', label: 'Retention' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'contact', label: 'Contact' },
]

export default function PrivacyPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────── */}
      <section className="page-hero legal-hero">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow on-ink" style={{ marginBottom: '22px' }}>Legal</div>
            <h1>Privacy Policy</h1>
            <p className="page-hero-lead" style={{ maxWidth: '540px' }}>
              How Evidentize collects, uses and protects your personal data. Written in plain English — because you should actually be able to read it.
            </p>
            <p className="legal-updated">Last updated: 1 June 2026</p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────── */}
      <section className="legal-page-section section-pad">
        <div className="wrap">
          <div className="legal-layout">

            {/* Sticky sidebar nav */}
            <aside className="legal-sidebar" aria-label="Page sections">
              <p className="legal-sidebar-label">Sections</p>
              <nav>
                <ul className="legal-nav">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="legal-nav-link">{s.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="legal-sidebar-divider" />
              <Link href="/terms" className="legal-sidebar-related">
                Terms of Service →
              </Link>
            </aside>

            {/* Prose content */}
            <div className="legal-content">

              <section id="who-we-are" className="legal-section">
                <h2 className="legal-section-heading">1. Who we are</h2>
                <p>Evidentize Ltd (&ldquo;Evidentize&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a company registered in England and Wales. We operate an assessment platform that enables partners — universities, training providers, coaching organisations and employers — to run human-assessed, evidence-based assessments and issue portable verified records to candidates.</p>
                <p>Evidentize is the data controller for personal data processed through this website and the Evidentize platform. Where partners access candidate data through their white-label tenancy, they act as independent controllers for their own purposes.</p>
                <div className="legal-callout">
                  <p><strong>Data controller contact:</strong> hello@evidentize.io</p>
                </div>
              </section>

              <section id="data-we-collect" className="legal-section">
                <h2 className="legal-section-heading">2. Data we collect</h2>
                <p>We collect personal data in the following contexts:</p>

                <h3 className="legal-subsection-heading">Candidates</h3>
                <ul className="legal-list">
                  <li>Name, email address and identity verification information</li>
                  <li>Assessment submissions — the work products you produce during an assessment</li>
                  <li>Verdict records — the calibrated outcome assigned by the assessor panel</li>
                  <li>Record access logs — when and by whom your verified record was accessed</li>
                </ul>

                <h3 className="legal-subsection-heading">Partners and their staff</h3>
                <ul className="legal-list">
                  <li>Organisation name, registered address, contact details</li>
                  <li>Names and email addresses of administrators and cohort managers</li>
                  <li>Billing information processed via our payment provider</li>
                </ul>

                <h3 className="legal-subsection-heading">Website visitors</h3>
                <ul className="legal-list">
                  <li>IP address and browser information (collected automatically)</li>
                  <li>Pages visited and time on site</li>
                  <li>Contact form submissions and demo request details</li>
                </ul>
              </section>

              <section id="how-we-use-it" className="legal-section">
                <h2 className="legal-section-heading">3. How we use it</h2>
                <p>We use personal data to:</p>
                <ul className="legal-list">
                  <li>Deliver assessment services — matching candidates to scenarios, routing submissions to assessor panels, recording and issuing verdicts</li>
                  <li>Issue and maintain portable verified records on behalf of candidates</li>
                  <li>Enable partners to manage cohorts, view results and configure their tenancy</li>
                  <li>Process billing and maintain commercial relationships with partners</li>
                  <li>Respond to enquiries submitted through our website or by email</li>
                  <li>Improve the platform, scenario library and assessor calibration</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p>We do not sell personal data to third parties. We do not use candidate submissions to train AI models. We do not use candidate data for advertising.</p>
              </section>

              <section id="legal-basis" className="legal-section">
                <h2 className="legal-section-heading">4. Legal basis for processing</h2>
                <p>Under UK GDPR, we rely on the following legal bases:</p>
                <ul className="legal-list">
                  <li><strong>Contract</strong> — processing necessary to deliver the assessment service a candidate or partner has agreed to receive</li>
                  <li><strong>Legitimate interests</strong> — improving the platform and scenario library; analysing aggregated assessment outcomes; communicating with existing partners about service updates</li>
                  <li><strong>Legal obligation</strong> — retaining records required by applicable law</li>
                  <li><strong>Consent</strong> — where we ask for specific consent (for example, for optional marketing communications), we will make this clear and you may withdraw consent at any time</li>
                </ul>
              </section>

              <section id="sharing" className="legal-section">
                <h2 className="legal-section-heading">5. Sharing data</h2>
                <p>We share personal data only where necessary:</p>
                <ul className="legal-list">
                  <li><strong>Assessor panels</strong> — candidate submissions are shared with trained human assessors who evaluate work against the marking framework. Assessors are bound by confidentiality obligations.</li>
                  <li><strong>Partners</strong> — a partner who manages a cohort can view the assessment outcomes and verdict records for candidates in their cohort. They cannot access submissions from other partners&apos; cohorts.</li>
                  <li><strong>Verification requests</strong> — when a third party (such as an employer) verifies a candidate&apos;s record using a verification link, we confirm the record details and verdict. No additional personal data is shared without the candidate&apos;s consent.</li>
                  <li><strong>Service providers</strong> — we use third-party processors for hosting, payments and email delivery. These processors are bound by data processing agreements and may not use data for their own purposes.</li>
                  <li><strong>Legal requirements</strong> — we may disclose data where required by law or a court order.</li>
                </ul>
              </section>

              <section id="retention" className="legal-section">
                <h2 className="legal-section-heading">6. Retention</h2>
                <p>Verified records are retained indefinitely. They are designed to be portable, permanent and trustworthy — their value depends on their permanence. Candidates may request that their record be made private (visible only to them), but permanent deletion of a verified record is not possible without invalidating it.</p>
                <p>Assessment submissions are retained for 12 months following the verdict date, then deleted unless a dispute or appeal is open.</p>
                <p>Partner account data is retained for the duration of the commercial relationship and for 7 years thereafter to meet statutory accounting requirements.</p>
                <p>Website visitor data is retained for 13 months.</p>
                <p>Enquiry and contact data is retained for 3 years from last contact.</p>
              </section>

              <section id="your-rights" className="legal-section">
                <h2 className="legal-section-heading">7. Your rights</h2>
                <p>Under UK GDPR you have the right to:</p>
                <ul className="legal-list">
                  <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
                  <li><strong>Rectification</strong> — request correction of inaccurate data</li>
                  <li><strong>Erasure</strong> — request deletion in certain circumstances (subject to the retention policy above for verified records)</li>
                  <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
                  <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
                  <li><strong>Restriction</strong> — request that processing be restricted while a complaint is resolved</li>
                </ul>
                <p>To exercise any of these rights, email <a href="mailto:hello@evidentize.io" className="legal-link">hello@evidentize.io</a>. We will respond within 30 days.</p>
                <p>If you believe we have not handled your data lawfully, you have the right to lodge a complaint with the <a href="https://ico.org.uk" className="legal-link" target="_blank" rel="noopener noreferrer">Information Commissioner&apos;s Office (ICO)</a>.</p>
              </section>

              <section id="cookies" className="legal-section">
                <h2 className="legal-section-heading">8. Cookies</h2>
                <p>We use a small number of cookies necessary for the platform to function — session authentication, CSRF protection and load balancing. We do not use third-party advertising or tracking cookies.</p>
                <p>We use anonymised analytics to understand how pages are used. No personal data is shared with analytics providers and IP addresses are anonymised before processing.</p>
                <p>You may disable cookies in your browser settings. This will prevent you from using authenticated features of the platform.</p>
              </section>

              <section id="contact" className="legal-section">
                <h2 className="legal-section-heading">9. Contact</h2>
                <p>For privacy-related questions, data subject requests, or to report a concern:</p>
                <div className="legal-callout">
                  <p><strong>Email:</strong> <a href="mailto:hello@evidentize.io" className="legal-link">hello@evidentize.io</a></p>
                  <p><strong>Post:</strong> Evidentize Ltd, London, United Kingdom</p>
                </div>
                <p>We may update this policy from time to time. Where changes are material, we will notify partners by email and post a notice on this page. The &ldquo;last updated&rdquo; date at the top of this page will always reflect the current version.</p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
