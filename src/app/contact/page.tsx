import RevealWrapper from '@/components/ui/RevealWrapper'
import ContactForm from '@/components/ContactForm'

const CHANNELS = [
  {
    num: '01',
    label: 'Partner enquiries',
    desc: 'Universities, training providers, coaching organisations and employers looking to integrate verified assessment.',
    email: 'partners@evidentize.io',
  },
  {
    num: '02',
    label: 'Press & media',
    desc: 'Coverage requests, background briefings, interviews and media packs.',
    email: 'press@evidentize.io',
  },
  {
    num: '03',
    label: 'General',
    desc: 'Anything else. We read every email and respond within one business day.',
    email: 'hello@evidentize.io',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="page-hero-grid" aria-hidden="true" />
        <div
          className="hero-watermark"
          aria-hidden="true"
          style={{ fontSize: 'clamp(52px, 12vw, 180px)', bottom: '2%', right: '-1%', lineHeight: 1 }}
        >
          CONTACT
        </div>
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow on-ink" style={{ marginBottom: '22px' }}>Get in touch</div>
            <h1 style={{ maxWidth: '640px' }}>
              Let&apos;s talk.
            </h1>
            <p className="page-hero-lead" style={{ maxWidth: '520px' }}>
              We are a small team. Every message goes to a person who can actually help.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CHANNELS ──────────────────── */}
      <section className="contact-channels-section on-ink section-pad-sm">
        <div className="wrap">
          <div className="contact-channels" role="list">
            {CHANNELS.map((ch, i) => (
              <RevealWrapper key={ch.label} delay={i * 100}>
                <div className="contact-channel" role="listitem">
                  <span className="contact-channel-num" aria-hidden="true">{ch.num}</span>
                  <div className="contact-channel-body">
                    <p className="contact-channel-label">{ch.label}</p>
                    <p className="contact-channel-desc">{ch.desc}</p>
                  </div>
                  <a
                    href={`mailto:${ch.email}`}
                    className="contact-channel-email"
                    aria-label={`Send email to ${ch.label}: ${ch.email}`}
                  >
                    {ch.email}
                    <span className="contact-channel-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ──────────────────────────────── */}
      <section className="contact-form-section section-pad">
        <div className="wrap">
          <div className="contact-form-grid">
            <RevealWrapper>
              <div className="contact-form-intro">
                <div className="eyebrow" style={{ marginBottom: '16px' }}>Or send a message</div>
                <h2 style={{ letterSpacing: '-0.025em', lineHeight: 1.08, marginBottom: '16px' }}>
                  Prefer to write?<br />We&apos;re here.
                </h2>
                <p className="sec-lead">
                  Use this form for any enquiry. If you are looking to become a partner, booking a demo is faster — we can cover everything in 30 minutes.
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={150}>
              <ContactForm />
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
