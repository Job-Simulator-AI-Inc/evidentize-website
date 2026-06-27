import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'
import PipelineDiagram from '@/components/ui/PipelineDiagram'
import type { PipelineStep } from '@/components/ui/PipelineDiagram'

const STEPS: PipelineStep[] = [
  {
    num: '01',
    title: 'Scenario construction',
    desc: 'Built to mirror real work in the target role — contextualised, time-pressured, designed to produce evaluable output.',
  },
  {
    num: '02',
    title: 'Candidate submission',
    desc: 'No multiple choice, no theory. The output is a work product a professional would produce on the job.',
  },
  {
    num: '03',
    title: 'Panel assessment',
    desc: 'Trained human assessors evaluate each submission against a calibrated marking framework — a panel, not a single reviewer.',
  },
  {
    num: '04',
    title: 'Verdict assignment',
    desc: 'One of five calibrated verdicts is assigned. Each has a defined meaning, a colour and a label any employer can read directly.',
  },
  {
    num: '05',
    title: 'Record anchoring',
    desc: 'Anchored to a tamper-evident record tied to candidate identity. Immediately portable and publicly verifiable.',
  },
]

const FACTS = [
  { big: 'Human', label: 'Every submission reviewed by trained assessors — no AI auto-grading' },
  { big: '5', label: 'Calibrated verdict bands — the same standard across every discipline and partner' },
  { big: 'Panel', label: 'Every assessment reviewed by a panel before a verdict is assigned' },
]

export default function AssessmentModel() {
  return (
    <section id="simulations" className="platform-model-section section-pad">
      <div className="wrap">
        <RevealWrapper>
          <SectionHead
            eyebrow="The assessment model"
            heading="Rigorous by design. Not because it has to be."
            lead="Every step in the Evidentize model is deliberate — built to produce verdicts that are defensible, consistent and trusted by the people who read them."
          />
        </RevealWrapper>

        {/* Animated pipeline diagram */}
        <PipelineDiagram steps={STEPS} />

        <RevealWrapper delay={140}>
          <div className="platform-model-facts">
            {FACTS.map((f) => (
              <div key={f.big} className="platform-model-fact">
                <p className="platform-fact-big">{f.big}</p>
                <p className="platform-fact-label">{f.label}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
