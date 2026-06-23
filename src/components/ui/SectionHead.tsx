import Eyebrow from './Eyebrow'

interface SectionHeadProps {
  eyebrow?: string
  heading: string
  lead?: string
  center?: boolean
  className?: string
}

export default function SectionHead({
  eyebrow,
  heading,
  lead,
  center = false,
  className = '',
}: SectionHeadProps) {
  return (
    <div className={`sec-head ${center ? 'center' : ''} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{heading}</h2>
      {lead && <p className="sec-lead">{lead}</p>}
    </div>
  )
}
