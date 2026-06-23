export interface SolutionConfig {
  slug: string
  persona: string
  eyebrow: string
  h1: string
  lead: string
  breadcrumbLabel: string
  primaryCta: string
  primaryCtaHref: string
  pains: Array<{ title: string; desc: string }>
  benefitsLabel: string
  benefitsHeading: string
  benefitsBody: string
  benefits: Array<{ title: string; desc: string }>
  ctaHeading: string
  ctaBody: string
}

export const SOLUTIONS: Record<string, SolutionConfig> = {
  universities: {
    slug: 'universities',
    persona: 'Universities',
    eyebrow: 'For universities',
    h1: 'Give graduates evidence employers can read.',
    lead: 'Evidentize integrates with your existing programmes to capture what learners actually do — producing portable, verified records that travel beyond graduation.',
    breadcrumbLabel: 'Universities',
    primaryCta: 'Talk to the team',
    primaryCtaHref: '/contact',
    pains: [
      {
        title: "Degree classifications don't translate",
        desc: "Employers can't compare grades across institutions. A 2:1 from one university means something different from another — and most aren't sure what to do with it.",
      },
      {
        title: 'Courses prove attendance, not capability',
        desc: "Completing a module doesn't demonstrate that a graduate can do the work. Employers know this — and they factor in their scepticism at the shortlist stage.",
      },
      {
        title: 'Evidence evaporates at graduation',
        desc: 'Portfolios, projects and placement work disappear. There is no persistent, verifiable record a graduate can carry into every interview and role they pursue.',
      },
    ],
    benefitsLabel: 'How Evidentize helps',
    benefitsHeading: 'Evidence that travels with the graduate.',
    benefitsBody:
      'Embedded at the assessment or co-curricular layer, Evidentize produces verified records — not certificates, not grade sheets — that go wherever the graduate goes.',
    benefits: [
      {
        title: 'Evidence embedded in your programme',
        desc: 'Integrate Evidentize at the assessment or co-curricular layer. Learners produce evidence as part of what they already do — no separate platform for them to discover.',
      },
      {
        title: 'Your brand, your experience',
        desc: 'Partners run Evidentize under their own label. Learners see your institution, not a third-party product. The relationship stays yours.',
      },
      {
        title: 'Verdicts employers can read consistently',
        desc: 'Five calibrated verdict bands that any employer or recruiter can interpret the same way — no conversion table, no context required.',
      },
      {
        title: 'Records that outlast graduation',
        desc: 'Evidence is partner-neutral and portable. When a graduate moves to their first role, their record moves with them — and reflects well on you every time it opens a door.',
      },
    ],
    ctaHeading: 'Ready to give your graduates an edge?',
    ctaBody:
      'Talk to the team about integrating Evidentize into your programme. We work with universities to design evidence capture that fits existing curriculum structures.',
  },

  'training-providers': {
    slug: 'training-providers',
    persona: 'Training Providers',
    eyebrow: 'For training providers',
    h1: 'Make your outcomes verifiable.',
    lead: 'Evidentize gives training providers the infrastructure to demonstrate what learners can actually do — not just who completed the course.',
    breadcrumbLabel: 'Training Providers',
    primaryCta: 'Talk to the team',
    primaryCtaHref: '/contact',
    pains: [
      {
        title: 'Certificates are easy to issue',
        desc: "Everyone has one. Without independent verification, completion certificates carry little weight with employers who've seen too many that don't reflect the work.",
      },
      {
        title: 'Outcomes are hard to evidence',
        desc: 'You know your learners are capable. Employers take your word for it — or they weigh it against their own experience and move on. Evidence closes that gap.',
      },
      {
        title: 'Differentiation is hard at scale',
        desc: 'Many providers compete on the same topics, with similar pricing and similar marketing. Verified outcomes give you a claim that is hard to replicate and easy to point to.',
      },
    ],
    benefitsLabel: 'How Evidentize helps',
    benefitsHeading: 'From completion to verified capability.',
    benefitsBody:
      'Layer Evidentize onto your existing curriculum. Your learners complete assessments, human assessors evaluate the work, and verified records come out the other side.',
    benefits: [
      {
        title: 'Layer onto your existing curriculum',
        desc: 'Evidentize sits alongside your existing content and delivery — not a replacement, an addition. Learners complete simulations at the point of assessment.',
      },
      {
        title: 'Independent, calibrated verdicts',
        desc: 'Human assessors — not AI — evaluate work to a defined standard. Defensible, consistent, and trusted by the employers your learners are trying to reach.',
      },
      {
        title: 'Evidence your learners can use',
        desc: 'Portable records go wherever learners go. Every time a learner lands a role with their Evidentize record, it reflects on the quality of your programme.',
      },
      {
        title: 'Straightforward commercial model',
        desc: 'Evidentize invoices your organisation. You decide how evidence fits your learner model and your pricing. No revenue share, no complexity.',
      },
    ],
    ctaHeading: 'Ready to make your outcomes verifiable?',
    ctaBody:
      'Talk to the team about adding Evidentize to your programme. We work with training providers across disciplines and delivery formats.',
  },

  coaching: {
    slug: 'coaching',
    persona: 'Coaching & Bootcamps',
    eyebrow: 'For coaching & bootcamps',
    h1: 'Give your graduates proof that travels.',
    lead: 'Employers are sceptical of bootcamp badges. Evidentize gives your graduates verified evidence of capability — something they can show, not just claim.',
    breadcrumbLabel: 'Coaching & Bootcamps',
    primaryCta: 'Talk to the team',
    primaryCtaHref: '/contact',
    pains: [
      {
        title: 'Badges and certificates are everywhere',
        desc: 'Hiring managers see dozens of bootcamp credentials. Without independent verification, they are hard to distinguish from self-study — and scepticism is the default.',
      },
      {
        title: 'Employer scepticism is a real barrier',
        desc: "Even well-run programmes face it. The burden of proof falls on your graduates — and they don't always have the tools to meet it before an employer moves on.",
      },
      {
        title: 'Cohort outcomes are hard to communicate',
        desc: "You know your graduates can perform. Showing that to employers at scale — across every hiring manager, every job board, every hiring cycle — is harder than it should be.",
      },
    ],
    benefitsLabel: 'How Evidentize helps',
    benefitsHeading: 'Verified work, not just completed courses.',
    benefitsBody:
      'Evidentize assessments are built around real-work tasks. Your graduates leave with evidence that shows what they can actually do — assessed by humans against a defined standard.',
    benefits: [
      {
        title: 'Evidence of actual capability',
        desc: 'Real-work scenarios, assessed to a calibrated standard by trained humans. Not a badge you issued — an independently confirmed verdict on the work itself.',
      },
      {
        title: 'Independent verdicts employers trust',
        desc: 'Evidentize verdicts are not issued by the provider. They come from trained assessors using a defined framework. That independence is what makes them credible.',
      },
      {
        title: 'Differentiate your programme',
        desc: 'Every graduate with a Verified record is a proof point for your programme. Strong outcomes build your reputation — cohort after cohort, role after role.',
      },
      {
        title: 'White-label, your brand throughout',
        desc: 'Your graduates experience your programme end to end. Evidentize is the infrastructure underneath — the verification engine, not the thing they see.',
      },
    ],
    ctaHeading: 'Ready to give your graduates an edge?',
    ctaBody:
      'Talk to the team about building verified evidence into your programme. We work with bootcamps and coaching businesses across a range of disciplines.',
  },

  employers: {
    slug: 'employers',
    persona: 'Employers',
    eyebrow: 'For employers',
    h1: 'Hire on proof. Onboard with confidence.',
    lead: 'Comparable, calibrated verdicts across every candidate — so you can reduce time-to-hire, cut through the noise and build teams with verified capability.',
    breadcrumbLabel: 'Employers',
    primaryCta: 'Talk to the team',
    primaryCtaHref: '/contact',
    pains: [
      {
        title: "CVs tell you what someone says",
        desc: 'Self-reported skills are unverifiable. The best CV does not always belong to the best candidate — and you find that out too late, usually after an interview or an offer.',
      },
      {
        title: 'Interviews introduce bias',
        desc: 'Structured interviews help, but they are still subjective. Confidence and communication fill in where evidence is missing. The best communicator wins, not the best candidate.',
      },
      {
        title: 'Mis-hires are expensive',
        desc: 'Getting it wrong costs time, money and team momentum. Onboarding someone who cannot do the work sets the whole team back — and the process starts again.',
      },
    ],
    benefitsLabel: 'How Evidentize helps',
    benefitsHeading: 'Verdicts you can compare across every candidate.',
    benefitsBody:
      'Evidentize records use five calibrated bands against a defined standard. Every record is comparable — regardless of who issued it, who trained the candidate or where they studied.',
    benefits: [
      {
        title: 'Evidence, not promises',
        desc: 'Real-work simulations, assessed by humans, anchored to the actual tasks of the role. Not psychometrics, not theory tests — work, evaluated against a defined standard.',
      },
      {
        title: 'Verdicts that travel across providers',
        desc: "Five calibrated bands, the same framework. A candidate from one provider can be compared to one from another — consistently, without a conversion table.",
      },
      {
        title: 'Role-specific disciplines at every tier',
        desc: 'Evidentize covers the disciplines you hire for: Product Management, DevOps, Business Analysis, SOC Analyst, Cyber Threat Intelligence, and more. Foundation and Practitioner levels.',
      },
      {
        title: 'Reduce screening time',
        desc: 'Verified records mean you spend less time sifting and more time selecting. The work has already been assessed. The verdict is there before the first conversation.',
      },
    ],
    ctaHeading: 'Ready to hire on verified capability?',
    ctaBody:
      'Talk to the team about how Evidentize fits your hiring process — or ask about the partner programme if you want to build evidence into your assessment pipeline.',
  },

  recruiters: {
    slug: 'recruiters',
    persona: 'Recruiters',
    eyebrow: 'For recruiters',
    h1: 'Shortlist on verified capability.',
    lead: "Give your clients evidence they can act on. Evidentize gives recruiters a way to differentiate placements — and de-risk them.",
    breadcrumbLabel: 'Recruiters',
    primaryCta: 'Talk to the team',
    primaryCtaHref: '/contact',
    pains: [
      {
        title: 'CVs generate volume, not quality',
        desc: 'Sifting through applications to find credible candidates is slow, expensive and still unreliable. The best candidates often look the same on paper as the worst.',
      },
      {
        title: 'Placements that fail damage relationships',
        desc: "When a placed candidate underperforms, it reflects on you. Unverified capability is a risk you carry on behalf of your client — and it affects whether they come back.",
      },
      {
        title: 'Clients want proof, not assurances',
        desc: 'More clients are asking for evidence before they interview. The expectation is rising. The tools most recruiters are working with have not kept pace.',
      },
    ],
    benefitsLabel: 'How Evidentize helps',
    benefitsHeading: 'Evidence alongside every shortlist.',
    benefitsBody:
      'Identify candidates who already hold Evidentize records, or refer clients to partner providers who issue them. Either way, your shortlists carry more than a CV.',
    benefits: [
      {
        title: 'Verified records for every shortlist',
        desc: 'Identify candidates who already hold Evidentize records and share them alongside CVs. Let the verdict speak before the interview starts.',
      },
      {
        title: 'De-risk every placement',
        desc: 'Calibrated verdicts give you confidence in the candidates you put forward — and a paper trail if questions arise later. Less exposure, more credibility.',
      },
      {
        title: 'A differentiated offering for clients',
        desc: 'Sharing verified evidence alongside a CV is not the default. It positions you as more than a CV forwarder — as a partner who brings rigour to the process.',
      },
      {
        title: 'Commercial model built for partners',
        desc: 'Evidentize invoices partner organisations directly. If you want to build evidence into your service offering, the commercial model is built to support it.',
      },
    ],
    ctaHeading: 'Ready to shortlist on proof?',
    ctaBody:
      'Talk to the team about building Evidentize into your recruitment offering — or learn how your clients can partner directly to access verified candidate evidence.',
  },
}
