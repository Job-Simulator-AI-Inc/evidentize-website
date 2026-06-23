'use client'

const DISCIPLINES = [
  'Product Management',
  'DevOps',
  'Business Analysis',
  'Project Management',
  'SOC Analyst',
  'Cyber Threat Intelligence',
]

export default function AssessmentTicker() {
  // Doubled for seamless CSS loop
  const items = [...DISCIPLINES, ...DISCIPLINES]

  return (
    <div className="assess-ticker-wrap" aria-hidden="true">
      <div className="assess-ticker-track">
        {items.map((discipline, i) => (
          <span key={i} className="assess-ticker-item">
            {(i === 0 || i === DISCIPLINES.length) && (
              <span className="assess-ticker-live">
                <span className="assess-live-dot" />
                Live
              </span>
            )}
            {discipline}
            <span className="assess-ticker-sep" />
          </span>
        ))}
      </div>
    </div>
  )
}
