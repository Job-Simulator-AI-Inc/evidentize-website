import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  size?: 'default' | 'sm'
  children: React.ReactNode
  className?: string
  arrow?: boolean
  external?: boolean
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  arrow = false,
  external = false,
}: ButtonProps) {
  const cls = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {children}
      {arrow && <span className="arrow" aria-hidden="true">→</span>}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {content}
    </button>
  )
}
