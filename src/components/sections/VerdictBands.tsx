import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionHead from '@/components/ui/SectionHead'

const BANDS = [
  {
    cls: 'vb-distinction',
    name: 'Distinction',
    rank: '01',
    tag: 'Exceeds the standard',
    barW: '88%',
  },
  {
    cls: 'vb-merit',
    name: 'Pass with Merit',
    rank: '02',
    tag: 'Above the threshold',
    barW: '68%',
  },
  {
    cls: 'vb-pass',
    name: 'Pass',
    rank: '03',
    tag: 'Meets the standard',
    barW: '50%',
  },
  {
    cls: 'vb-borderline',
    name: 'Borderline',
    rank: '04',
    tag: 'Close but not yet',
    barW: '28%',
  },
  {
    cls: 'vb-fail',
    name: 'Did Not Pass',
    rank: '05',
    tag: 'Does not meet standard',
    barW: '12%',
  },
]

export default function VerdictBands() {
  return (
    <section id="verification" className="verdict-section on-ink section-pad">
      <div className="wrap">
        <RevealWrapper>
          <SectionHead
            eyebrow="Verdict bands"
            heading="Five calibrated verdicts. No guessing."
            lead="Every assessment returns one of five verdicts, each with a precise meaning. Colour and label together — never colour alone."
          />
        </RevealWrapper>

        <div
          className="verdict-score-rows"
          role="list"
          aria-label="Verdict band calibration levels"
        >
          {BANDS.map((band, i) => (
            <RevealWrapper key={band.name} delay={i * 80}>
              <div className={`verdict-score-row ${band.cls}`} role="listitem">
                <span className="verdict-score-rank" aria-hidden="true">{band.rank}</span>
                <strong className="verdict-score-name">{band.name}</strong>
                <div
                  className="verdict-score-track"
                  role="img"
                  aria-label={`Calibration level: ${band.barW}`}
                >
                  <div
                    className="verdict-score-fill"
                    style={{
                      '--bar-w': band.barW,
                      transitionDelay: '300ms',
                    } as React.CSSProperties}
                  />
                </div>
                <span className="verdict-score-tag">{band.tag}</span>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={500}>
          <p className="verdict-score-note">
            Bar widths reflect calibration hierarchy — not pass rate statistics.
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
