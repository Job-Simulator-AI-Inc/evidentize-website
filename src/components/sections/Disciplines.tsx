import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

const DISCIPLINES = [
  { num: '01', name: 'Product Management' },
  { num: '02', name: 'Business Analysis' },
  { num: '03', name: 'DevOps' },
  { num: '04', name: 'Project Management' },
  { num: '05', name: 'SOC Analyst' },
  { num: '06', name: 'Cyber Threat Intelligence' },
]

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Disciplines() {
  return (
    <section className="disciplines-section on-ink section-pad">
      <div className="wrap">
        <RevealWrapper>
          <SectionHead
            eyebrow="Disciplines"
            heading="Built across the roles people actually hire for."
            lead="Evidentize spans many disciplines and the library keeps growing — each assessed at the right level, from Foundation to Practitioner."
          />
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="disc-dir" role="table" aria-label="Available disciplines and tiers">

            <div className="disc-dir-header" role="row" aria-hidden="true">
              <span />
              <span>Discipline</span>
              <span className="disc-tier-label">Foundation</span>
              <span className="disc-tier-label">Practitioner</span>
            </div>

            {DISCIPLINES.map((disc) => (
              <div key={disc.name} className="disc-dir-row" role="row">
                <span className="disc-dir-num" role="cell" aria-hidden="true">{disc.num}</span>
                <span className="disc-dir-name" role="cell">{disc.name}</span>
                <div className="disc-dir-check" role="cell" aria-label="Foundation available">
                  <CheckIcon />
                </div>
                <div className="disc-dir-check" role="cell" aria-label="Practitioner available">
                  <CheckIcon />
                </div>
              </div>
            ))}

            <div className="disc-dir-footer" role="row">
              <span className="disc-dir-footer-text">
                + growing library · new disciplines added regularly
              </span>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
