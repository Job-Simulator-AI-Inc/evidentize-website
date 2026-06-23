import type { Metadata } from 'next'
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate'
import { SOLUTIONS } from '@/data/solutionData'

const config = SOLUTIONS.coaching

export const metadata: Metadata = {
  title: 'Evidentize for Coaching & Bootcamps — Give Graduates Proof That Travels',
  description:
    "Give your bootcamp graduates verified evidence of capability — not just a badge. Independent, calibrated verdicts employers can trust.",
}

export default function CoachingPage() {
  return <SolutionPageTemplate {...config} />
}
