import Link from 'next/link'

const SECTIONS = [
  { id: 'agreement', label: 'The agreement' },
  { id: 'the-service', label: 'The service' },
  { id: 'partner-obligations', label: 'Partner obligations' },
  { id: 'candidate-obligations', label: 'Candidate obligations' },
  { id: 'assessments', label: 'Assessments and verdicts' },
  { id: 'records', label: 'Verified records' },
  { id: 'intellectual-property', label: 'Intellectual property' },
  { id: 'liability', label: 'Liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'governing-law', label: 'Governing law' },
]

export default function TermsPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────── */}
      <section className="page-hero legal-hero">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow on-ink" style={{ marginBottom: '22px' }}>Legal</div>
            <h1>Terms of Service</h1>
            <p className="page-hero-lead" style={{ maxWidth: '540px' }}>
              The rules that govern your use of Evidentize — for partners who integrate our platform and candidates who complete assessments.
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
              <Link href="/privacy" className="legal-sidebar-related">
                Privacy Policy →
              </Link>
            </aside>

            {/* Prose content */}
            <div className="legal-content">

              <section id="agreement" className="legal-section">
                <h2 className="legal-section-heading">1. The agreement</h2>
                <p>These Terms of Service (&ldquo;Terms&rdquo;) form a legally binding agreement between you and Evidentize Ltd (&ldquo;Evidentize&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a company registered in England and Wales.</p>
                <p>By accessing or using the Evidentize platform — whether as a partner organisation, an assessor, or a candidate — you agree to these Terms. If you are using Evidentize on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.</p>
                <p>Partners are also subject to a separate Partner Agreement which takes precedence over these Terms where there is a conflict.</p>
              </section>

              <section id="the-service" className="legal-section">
                <h2 className="legal-section-heading">2. The service</h2>
                <p>Evidentize provides an assessment infrastructure platform that enables partner organisations to:</p>
                <ul className="legal-list">
                  <li>Deploy human-assessed, scenario-based assessments to their candidates under a white-label tenancy</li>
                  <li>Manage cohorts of candidates and access calibrated verdict outcomes</li>
                  <li>Issue portable, tamper-evident verified records to candidates who complete assessments</li>
                </ul>
                <p>Evidentize does not employ candidates, guarantee employment outcomes, or act as a recruitment intermediary. A verified record is evidence of capability demonstrated in a defined context — it is not a guarantee of any particular verdict, job offer, or outcome.</p>
                <p>We reserve the right to modify, suspend or discontinue any part of the service with reasonable notice. Where we discontinue a feature material to a partner&apos;s commercial agreement, we will provide at least 90 days&apos; notice.</p>
              </section>

              <section id="partner-obligations" className="legal-section">
                <h2 className="legal-section-heading">3. Partner obligations</h2>
                <p>Partners accessing the Evidentize platform agree to:</p>
                <ul className="legal-list">
                  <li>Use the platform only for the purpose of running legitimate assessments and issuing verified records to real candidates</li>
                  <li>Not attempt to manipulate assessment outcomes, instruct assessors improperly, or use the platform to issue records for assessments that did not take place</li>
                  <li>Keep administrator credentials secure and not share access with unauthorised individuals</li>
                  <li>Inform candidates clearly that their assessment submissions will be reviewed by human assessors and that a verdict will be recorded on a portable, publicly verifiable record</li>
                  <li>Pay invoices in accordance with the agreed commercial terms</li>
                  <li>Not reverse-engineer, copy or attempt to replicate the Evidentize marking framework, scenario library or assessment infrastructure</li>
                </ul>
              </section>

              <section id="candidate-obligations" className="legal-section">
                <h2 className="legal-section-heading">4. Candidate obligations</h2>
                <p>Candidates completing assessments through Evidentize agree to:</p>
                <ul className="legal-list">
                  <li>Submit only their own work. Submissions produced with substantial assistance from another person or AI system without disclosure are a breach of these Terms and may result in the verdict being voided.</li>
                  <li>Provide accurate identity information. A verified record is tied to a verified identity — submitting a false identity invalidates the record.</li>
                  <li>Not share assessment scenario content publicly or with other candidates before or during an active assessment window</li>
                  <li>Accept that assessor verdicts are final following the appeals process. Evidentize does not re-mark submissions outside of a formal appeal</li>
                </ul>
                <div className="legal-callout">
                  <p>Using AI to generate the substance of an assessment submission and presenting it as your own work is a breach of these Terms. Evidentize exists to verify what you can do — not what a language model can do on your behalf.</p>
                </div>
              </section>

              <section id="assessments" className="legal-section">
                <h2 className="legal-section-heading">5. Assessments and verdicts</h2>
                <p>All Evidentize assessments are marked by trained human assessors working to a calibrated marking framework. No assessment is auto-graded by AI.</p>
                <p>Verdicts are assigned from five calibrated bands: Distinction, Pass with Merit, Pass, Borderline, and Did Not Pass. The definitions of each band are published in the assessment documentation and are consistent across all disciplines and partners.</p>
                <p>Where a candidate believes a verdict is incorrect due to an assessor error (not a disagreement with the judgement), they may request a formal review within 14 days of the verdict being issued. Evidentize will determine whether a review is warranted and, if so, arrange a re-mark by a different panel. The outcome of a formal review is final.</p>
                <p>Evidentize does not guarantee any particular distribution of verdicts and does not adjust outcomes to meet pass rate targets.</p>
              </section>

              <section id="records" className="legal-section">
                <h2 className="legal-section-heading">6. Verified records</h2>
                <p>A verified record issued by Evidentize belongs to the candidate to whom it was issued. Partners do not own candidate records and may not restrict a candidate&apos;s ability to access or share their record.</p>
                <p>Records are tamper-evident and cryptographically anchored at the point of issue. Any attempt to modify a record after issue is detectable.</p>
                <p>Candidates may share their record with any third party using a verification link. Third parties who use a verification link to check a record confirm that they are doing so for a legitimate purpose and will not use the information for discriminatory purposes.</p>
                <p>Records are retained indefinitely. A candidate may request that their record be set to private (accessible only to them), but records cannot be permanently deleted once issued — deletion would invalidate the verification chain.</p>
              </section>

              <section id="intellectual-property" className="legal-section">
                <h2 className="legal-section-heading">7. Intellectual property</h2>
                <p>Evidentize owns all intellectual property in the platform, including the assessment infrastructure, scenario library, marking frameworks, interface design and brand elements.</p>
                <p>Candidates retain ownership of the work they submit as part of an assessment. By submitting work, candidates grant Evidentize a limited licence to use that work solely for the purpose of marking, quality assurance and calibration. Submissions are not used to train AI models and are not shared beyond the assessor panel without consent.</p>
                <p>Partners may display Evidentize branding only in accordance with the partner brand guidelines provided. No other use of Evidentize trademarks is permitted without written consent.</p>
              </section>

              <section id="liability" className="legal-section">
                <h2 className="legal-section-heading">8. Liability</h2>
                <p>Evidentize provides the platform on an &ldquo;as is&rdquo; basis. We do not guarantee uninterrupted availability, though we maintain a commercially reasonable uptime commitment for partners under their Partner Agreement.</p>
                <p>Evidentize is not liable for:</p>
                <ul className="legal-list">
                  <li>Hiring decisions made by employers based on verified records</li>
                  <li>A candidate&apos;s failure to achieve a particular verdict</li>
                  <li>Loss of business, revenue or opportunity arising from platform unavailability</li>
                  <li>Actions taken by partners or their administrators within their tenancy</li>
                </ul>
                <p>Our total liability in any 12-month period is limited to the fees paid by the partner in that period, or £500 for candidates, whichever is lower. Nothing in these Terms limits our liability for fraud, death or personal injury caused by negligence.</p>
              </section>

              <section id="termination" className="legal-section">
                <h2 className="legal-section-heading">9. Termination</h2>
                <p>Partners may terminate their agreement with Evidentize in accordance with the notice period in their Partner Agreement. Termination does not affect records already issued — they remain valid and accessible to candidates.</p>
                <p>Evidentize may suspend or terminate a partner&apos;s access immediately where there is a material breach of these Terms or the Partner Agreement, or where we have reasonable grounds to believe the platform is being misused.</p>
                <p>Evidentize may terminate a candidate&apos;s access where they breach the candidate obligations above. A verdict may be voided where submission integrity cannot be confirmed.</p>
              </section>

              <section id="governing-law" className="legal-section">
                <h2 className="legal-section-heading">10. Governing law</h2>
                <p>These Terms are governed by the laws of England and Wales. Any dispute arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
                <p>For disputes below £10,000 we will first attempt to resolve the matter informally. If we cannot reach agreement within 30 days, either party may refer the dispute to mediation before commencing court proceedings.</p>
                <p>If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full force.</p>
                <p>We may update these Terms from time to time. Material changes will be notified to partners by email with at least 30 days&apos; notice. Continued use of the platform after the effective date constitutes acceptance of the updated Terms.</p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
