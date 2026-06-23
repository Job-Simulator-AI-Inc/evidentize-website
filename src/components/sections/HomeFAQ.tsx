'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

const FAQS = [
  {
    q: 'What is Evidentize?',
    a: 'Evidentize is the evidence layer for human capability. It provides infrastructure for organisations to capture, assess and verify what candidates can actually do — through real-work simulations assessed by trained human assessors.',
  },
  {
    q: 'Who can become a partner?',
    a: 'Universities and colleges, training and skills providers, coaching businesses and bootcamps, employers, and recruitment agencies. If you develop, assess or place people, you can build on Evidentize.',
  },
  {
    q: 'How does the partner model work?',
    a: "Partners run Evidentize under their own brand, choosing the disciplines and tiers that match their programmes. Today, Evidentize invoices the partner organisation; partners decide how it fits their own learner or client model.",
  },
  {
    q: 'Who assesses the candidates?',
    a: 'Trained human assessors — not AI auto-graders. Each submission is reviewed against a calibrated standard by a panel, producing a defensible verdict that can withstand scrutiny.',
  },
  {
    q: 'What disciplines are available?',
    a: 'At launch: Product Management, Business Analysis, DevOps, Project Management, SOC Analyst and Cyber Threat Intelligence — across Foundation and Practitioner tiers. The library grows regularly.',
  },
  {
    q: 'Is the evidence portable?',
    a: "Yes. The portfolio belongs to the candidate, not the platform or the partner. It is partner-neutral and verifiable by any third party — so it travels with the candidate across roles and organisations.",
  },
  {
    q: 'How do candidates access Evidentize?',
    a: "Candidates access Evidentize through their partner organisation. Today, Evidentize does not transact directly with individual candidates — access is via a partner. If you're a candidate, speak to the organisation running your programme.",
  },
]

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i))

  return (
    <section className="faq-section section-pad">
      <div className="wrap">
        <RevealWrapper>
          <SectionHead
            eyebrow="FAQ"
            heading="Common questions."
            center
          />
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="faq-list" role="list">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item" role="listitem">
                <button
                  className="faq-trigger"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggle(i)}
                >
                  {faq.q}
                  <span className={`faq-icon${open === i ? ' open' : ''}`} aria-hidden="true">+</span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`faq-answer${open === i ? ' open' : ''}`}
                  role="region"
                  aria-hidden={open !== i}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
