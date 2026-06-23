import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'

/* ── SCENARIO DATA ──────────────────────────── */
const SCENARIOS = [
  {
    discipline: 'Product Management',
    tier: 'Practitioner',
    duration: '3 hrs',
    title: 'Series B product roadmap under stakeholder conflict',
    excerpt:
      'You are the incoming Head of Product at a B2B SaaS startup. Leadership, sales, and engineering each hold a different view of the next quarter. Produce a prioritised roadmap with rationale.',
  },
  {
    discipline: 'SOC Analyst',
    tier: 'Foundation',
    duration: '2 hrs',
    title: 'Suspicious lateral movement — incident triage',
    excerpt:
      'A security alert flags unusual authentication patterns across three internal systems at 02:14. Triage the incident, document your findings and recommend immediate containment steps.',
  },
  {
    discipline: 'Business Analysis',
    tier: 'Foundation',
    duration: '2.5 hrs',
    title: 'Process mapping a broken onboarding flow',
    excerpt:
      'A fintech client reports that 40% of new users do not complete onboarding. You have user journey data, drop-off analytics and a brief from the client. Map the current state and identify root causes.',
  },
  {
    discipline: 'DevOps',
    tier: 'Practitioner',
    duration: '3 hrs',
    title: 'Production deployment failure — post-incident review',
    excerpt:
      'A deployment caused a 30-minute outage affecting 12,000 users. Write a post-incident review, identify the failure point and propose a revised pipeline that prevents recurrence.',
  },
  {
    discipline: 'Project Management',
    tier: 'Foundation',
    duration: '2 hrs',
    title: 'Rescuing a delayed digital transformation programme',
    excerpt:
      'A six-month initiative is eight weeks behind and 20% over budget. You have the project documentation, a stakeholder map and a brief from the programme director. Produce a recovery plan.',
  },
  {
    discipline: 'Cyber Threat Intelligence',
    tier: 'Practitioner',
    duration: '3 hrs',
    title: 'Attribution analysis — targeted phishing campaign',
    excerpt:
      'Targeted spear-phishing emails have been sent to executives at three financial services firms. Analyse the threat indicators, produce an intelligence report and recommend defensive actions.',
  },
]

/* ── PHOTO DATA (Unsplash free stock) ────────── */
const PHOTOS = [
  {
    id: 'ph-01',
    src: 'photo-1522202176988-66273c2fd55f',
    area: 'wide',
    caption: 'Candidate completing an assessment scenario',
    tag: 'Candidate',
    sizes: '(max-width: 560px) 50vw, (max-width: 900px) 100vw, 67vw',
  },
  {
    id: 'ph-02',
    src: 'photo-1556761175-5973dc0f32e7',
    area: 'tall',
    caption: 'Human assessors reviewing a submission before assigning a verdict',
    tag: 'Assessors',
    sizes: '(max-width: 560px) 50vw, 33vw',
  },
  {
    id: 'ph-03',
    src: 'photo-1517694712202-14dd9538aa97',
    area: 'sm-a',
    caption: 'An assessment brief as seen by a candidate',
    tag: 'The brief',
    sizes: '(max-width: 560px) 50vw, 33vw',
  },
  {
    id: 'ph-04',
    src: 'photo-1484480974693-6ca0a78fb36b',
    area: 'sm-b',
    caption: 'A verified record moments after a verdict is assigned',
    tag: 'The record',
    sizes: '(max-width: 560px) 50vw, 33vw',
  },
  {
    id: 'ph-05',
    src: 'photo-1497366754035-f200968a6e72',
    area: 'sm-c',
    caption: 'Partner organisation setting up their white-label tenancy',
    tag: 'Partner setup',
    sizes: '(max-width: 560px) 50vw, 33vw',
  },
  {
    id: 'ph-06',
    src: 'photo-1552664730-d307ca884978',
    area: 'full',
    caption: 'Candidate reviewing their verdict with their training provider',
    tag: 'Results session',
    sizes: '100vw',
  },
  {
    id: 'ph-07',
    src: 'photo-1551288049-bebda4e38f71',
    area: 'med-a',
    caption: 'The Evidentize platform — cohort management and reporting',
    tag: 'Platform',
    sizes: '(max-width: 560px) 50vw, 33vw',
  },
  {
    id: 'ph-08',
    src: 'photo-1521791136064-7986c2920216',
    area: 'med-b',
    caption: 'A verified record being presented to a prospective employer',
    tag: 'Evidence in use',
    sizes: '(max-width: 560px) 50vw, 33vw',
  },
  {
    id: 'ph-09',
    src: 'photo-1600880292203-757bb62b4baf',
    area: 'med-c',
    caption: 'The people who build and run Evidentize',
    tag: 'The team',
    sizes: '(max-width: 560px) 50vw, 33vw',
  },
]

/* ── VIDEO DATA ──────────────────────────────
   poster: Unsplash photo shown until video loads.
   ytId: YouTube video ID — replace each with your chosen free stock
         footage from https://www.pexels.com, https://pixabay.com, or
         any CC-licensed YouTube video.
   ─────────────────────────────────────────── */
const VIDEOS = [
  {
    id: 'v-01',
    ytId: 'LXb3EKWsInQ',
    poster: 'photo-1522202176988-66273c2fd55f',
    tag: 'Assessment',
    caption: 'Candidates working through a scenario in real time',
  },
  {
    id: 'v-02',
    ytId: 'YQLPCNq1hJk',
    poster: 'photo-1556761175-5973dc0f32e7',
    tag: 'Assessment panel',
    caption: 'Assessors deliberating on a submission before assigning a verdict',
  },
  {
    id: 'v-03',
    ytId: 'nKIu9yen5nc',
    poster: 'photo-1552664730-d307ca884978',
    tag: 'Evidence in use',
    caption: 'A verified record being reviewed with a prospective employer',
  },
]

const BAND_COLORS = [
  'var(--band-distinction)',
  'var(--band-merit)',
  'var(--band-pass)',
  'var(--band-borderline)',
  'var(--band-fail)',
]

const TIER_STYLE: Record<string, string> = {
  Foundation: 'gallery-tier-foundation',
  Practitioner: 'gallery-tier-practitioner',
}

export default function GalleryPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-glow" aria-hidden="true" />
        <div className="page-hero-grid" aria-hidden="true" />
        <div
          className="hero-watermark"
          aria-hidden="true"
          style={{ fontSize: 'clamp(52px, 10vw, 160px)', bottom: '2%', right: '-1%', lineHeight: 1 }}
        >
          GALLERY
        </div>
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow on-ink" style={{ marginBottom: '22px' }}>Gallery</div>
            <h1 style={{ maxWidth: '800px' }}>
              What Evidentize<br />looks like in practice.
            </h1>
            <p className="page-hero-lead" style={{ maxWidth: '580px' }}>
              Scenario briefs from our assessment library and images of the platform in use — from the candidate&apos;s first brief to a verified record in an employer&apos;s hands.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ─────────────────────── */}
      <section className="gphoto-section on-ink section-pad-sm">
        <div className="wrap">
          <RevealWrapper>
            <div className="gphoto-header">
              <div className="eyebrow on-ink" style={{ marginBottom: '12px' }}>Photography</div>
            </div>
          </RevealWrapper>

          <div className="gphoto-grid" aria-label="Photo gallery">
            {PHOTOS.map((photo, i) => (
              <RevealWrapper key={photo.id} delay={i * 50} className={`gphoto-${photo.area}`}>
                <figure className="gphoto-item" aria-label={photo.caption}>
                  <div className="gphoto-media">
                    <Image
                      src={`https://images.unsplash.com/${photo.src}?auto=format&fit=crop&w=1200&q=80`}
                      alt={photo.caption}
                      fill
                      sizes={photo.sizes}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="gphoto-overlay" aria-hidden="true">
                      <span className="gphoto-overlay-tag">{photo.tag}</span>
                    </div>
                  </div>
                  <figcaption className="gphoto-caption">{photo.caption}</figcaption>
                </figure>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SHOWCASE ────────────────────── */}
      <section className="gvideo-section on-ink">
        <div className="wrap">
          <RevealWrapper>
            <div className="gphoto-header">
              <div className="eyebrow on-ink" style={{ marginBottom: '12px' }}>Video</div>
              <h2 style={{ color: 'var(--chalk)', letterSpacing: '-0.025em', lineHeight: 1.08, fontSize: 'clamp(1.5rem,3vw,2rem)' }}>
                Evidentize in motion.
              </h2>
              <p className="sec-lead" style={{ maxWidth: '480px', marginTop: '12px' }}>
                Short clips showing the assessment experience, the platform and verified records in practice.
              </p>
            </div>
          </RevealWrapper>

          <div className="gvideo-grid">
            {VIDEOS.map((video, i) => (
              <RevealWrapper key={video.id} delay={i * 80}>
                <div className="gvideo-card">
                  <div className="gvideo-tag">{video.tag}</div>
                  <div className="gvideo-embed-wrap">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.ytId}?modestbranding=1&rel=0&color=white`}
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="gvideo-iframe"
                      title={video.caption}
                      loading="lazy"
                    />
                  </div>
                  <p className="gvideo-caption">{video.caption}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCENARIO CARDS ────────────────────── */}
      <section className="gallery-section section-pad">
        <div className="wrap">
          <RevealWrapper>
            <div className="gallery-scenarios-header">
              <div className="eyebrow" style={{ marginBottom: '12px' }}>Assessment scenarios</div>
              <h2 style={{ letterSpacing: '-0.025em', lineHeight: 1.08, maxWidth: '520px' }}>
                Six scenarios from across the discipline library.
              </h2>
              <p className="sec-lead" style={{ maxWidth: '520px' }}>
                Every assessment is built around real work — contextualised, time-pressured, producing evaluable output. No multiple choice.
              </p>
            </div>
          </RevealWrapper>

          <div className="gallery-grid" style={{ marginTop: 'clamp(40px, 6vw, 56px)' }}>
            {SCENARIOS.map((scenario, i) => (
              <RevealWrapper key={scenario.title} delay={i * 60}>
                <div className="gallery-card">
                  <div className="gallery-card-top">
                    <span className="gallery-card-discipline">{scenario.discipline}</span>
                    <span className={`gallery-card-tier ${TIER_STYLE[scenario.tier]}`}>
                      {scenario.tier}
                    </span>
                  </div>
                  <h3 className="gallery-card-title">{scenario.title}</h3>
                  <p className="gallery-card-excerpt">&ldquo;{scenario.excerpt}&rdquo;</p>
                  <div className="gallery-card-footer">
                    <span className="gallery-card-duration">{scenario.duration}</span>
                    <div className="gallery-verdict-dots" aria-label="All five verdict bands available">
                      {BAND_COLORS.map((color, bi) => (
                        <span
                          key={bi}
                          className="gallery-verdict-dot"
                          style={{ background: color }}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper delay={200}>
            <div className="gallery-footer-note">
              <p>
                Scenarios are built by subject-matter experts and updated as disciplines evolve.
                All five verdict bands are available on every scenario — there is no artificially constrained distribution.
              </p>
              <Link href="/demo" className="gallery-footer-link">
                See a live assessment in our demo →
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
