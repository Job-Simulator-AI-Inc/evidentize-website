import type { Metadata } from 'next'
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate'
import { SOLUTIONS } from '@/data/solutionData'

const config = SOLUTIONS.recruiters

export const metadata: Metadata = {
  title: 'Evidentize for Recruiters — Shortlist on Verified Capability',
  description:
    'Give your clients evidence they can act on. Build verified candidate evidence into your shortlists — and de-risk every placement you make.',
}

export default function RecruitersPage() {
  return <SolutionPageTemplate {...config} />
}
