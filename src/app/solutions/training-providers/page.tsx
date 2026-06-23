import type { Metadata } from 'next'
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate'
import { SOLUTIONS } from '@/data/solutionData'

const config = SOLUTIONS['training-providers']

export const metadata: Metadata = {
  title: 'Evidentize for Training Providers — Make Your Outcomes Verifiable',
  description:
    'Layer verified evidence onto your existing curriculum. Show employers not just who completed your programme — but what they can actually do.',
}

export default function TrainingProvidersPage() {
  return <SolutionPageTemplate {...config} />
}
