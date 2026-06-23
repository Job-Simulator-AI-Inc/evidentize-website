import type { Metadata } from 'next'
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate'
import { SOLUTIONS } from '@/data/solutionData'

const config = SOLUTIONS.universities

export const metadata: Metadata = {
  title: 'Evidentize for Universities — Give Graduates Evidence Employers Can Read',
  description:
    'Embed verified evidence capture into your curriculum. Give graduates portable, calibrated records that demonstrate real capability — beyond a degree classification.',
}

export default function UniversitiesPage() {
  return <SolutionPageTemplate {...config} />
}
