import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import Disciplines from '@/components/sections/Disciplines'
import Ecosystem from '@/components/sections/Ecosystem'
import PartnerModel from '@/components/sections/PartnerModel'
import VerdictBands from '@/components/sections/VerdictBands'
import Testimonials from '@/components/sections/Testimonials'
import GalleryTeaser from '@/components/sections/GalleryTeaser'
import InsightsTeaser from '@/components/sections/InsightsTeaser'
import HomeCTA from '@/components/sections/HomeCTA'
import HomeFAQ from '@/components/sections/HomeFAQ'

export const metadata: Metadata = {
  title: 'Evidentize — The Evidence Layer for Human Capability',
  description:
    'Evidentize captures and verifies what candidates actually do. Partner with us to give your learners, graduates and candidates verified proof — not just certificates.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Disciplines />
      <Ecosystem />
      <PartnerModel />
      <VerdictBands />
      <Testimonials />
      <GalleryTeaser />
      <InsightsTeaser />
      <HomeCTA />
      <HomeFAQ />
    </>
  )
}
