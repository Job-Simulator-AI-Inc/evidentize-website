import type { Metadata } from 'next'
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate'
import { SOLUTIONS } from '@/data/solutionData'

const config = SOLUTIONS.employers

export const metadata: Metadata = {
  title: 'Evidentize for Employers — Hire on Proof, Onboard with Confidence',
  description:
    'Comparable, calibrated verdicts across every candidate. Reduce time-to-hire and build teams with verified capability — not just impressive CVs.',
}

export default function EmployersPage() {
  return <SolutionPageTemplate {...config} />
}
