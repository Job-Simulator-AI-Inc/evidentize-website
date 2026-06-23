export interface Article {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  featured?: boolean
  body?: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'why-completion-certificates-are-not-evidence',
    category: 'Evidence',
    title: 'Why completion certificates are not evidence',
    excerpt:
      'A certificate tells you someone finished a course. It tells you nothing about whether the work is there. The distinction is small in wording and enormous in consequence for every employer who relies on it.',
    date: '14 Mar 2026',
    readTime: '5 min',
    featured: true,
    body: `Completion certificates have a specific, limited job: they confirm attendance. They do not assess output. They do not measure standard. They confirm that someone was present and did not quit before the end.

The problem is not the certificate itself — it is what happens when employers use it as a proxy for capability. When a certificate from a twelve-week bootcamp is treated as evidence of job-readiness, the burden of validation falls entirely on the hiring interview. That interview is expensive, inconsistent, and widely understood to be poor at distinguishing candidates.

Evidentize exists for a simple reason: real evidence of work looks different from proof of attendance. A verdict from a calibrated human assessment tells an employer something a certificate never can — that this person, under defined conditions, produced work that met a defined standard.

The two things serve different purposes. The problem is that for too long, one has been asked to do the job of both.`,
  },
  {
    slug: 'the-five-band-verdict-system-explained',
    category: 'Assessment',
    title: 'The five-band verdict system — and why five matters',
    excerpt:
      'Pass/fail is too blunt for hiring decisions. Grades alone hide context. Five calibrated bands give employers exactly the signal they need — no conversion table required.',
    date: '28 Feb 2026',
    readTime: '4 min',
    featured: false,
  },
  {
    slug: 'what-employers-actually-want-from-hiring-evidence',
    category: 'Hiring',
    title: 'What employers actually want from hiring evidence',
    excerpt:
      'We asked hiring managers across sectors what would make them trust a credential they had never seen before. The answers were consistent — and most platforms are not providing them.',
    date: '11 Feb 2026',
    readTime: '6 min',
    featured: false,
  },
  {
    slug: 'how-partners-run-assessments-under-their-brand',
    category: 'Partners',
    title: 'How Evidentize partners run assessments under their brand',
    excerpt:
      'White-label is often used to mean "logo on the login page." The Evidentize partner model goes further — tenancy, cohort management, and a candidate experience that reflects the partner, not the platform.',
    date: '22 Jan 2026',
    readTime: '4 min',
    featured: false,
  },
  {
    slug: 'building-a-cyber-workforce-the-evidence-gap',
    category: 'Evidence',
    title: 'Building a cyber workforce: the evidence gap',
    excerpt:
      'Cyber roles have a skills crisis that certifications alone cannot solve. Employers need to see what candidates can do under pressure — and most hiring pipelines are not built to show them.',
    date: '8 Jan 2026',
    readTime: '7 min',
    featured: false,
  },
]
