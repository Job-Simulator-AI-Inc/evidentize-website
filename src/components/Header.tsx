'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { JSX } from 'react'

const SOLUTIONS = [
  { label: 'Universities', href: '/solutions/universities' },
  { label: 'Training Providers', href: '/solutions/training-providers' },
  { label: 'Coaching & Bootcamps', href: '/solutions/coaching' },
  { label: 'Employers', href: '/solutions/employers' },
  { label: 'Recruiters', href: '/solutions/recruiters' },
]

const RESOURCES = [
  { label: 'Insights', href: '/insights' },
  { label: 'Gallery', href: '/gallery' },
]

const COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

interface DropdownItem {
  label: string
  href: string
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dropdown({
  items,
  onMouseEnter,
  onMouseLeave,
}: {
  items: DropdownItem[]
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  return (
    <div className="dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="dropdown-item">
          <span className="dropdown-item-dot" aria-hidden="true" />
          {item.label}
        </Link>
      ))}
    </div>
  )
}

function NavDropdown({
  label,
  items,
}: {
  label: string
  items: DropdownItem[]
}): JSX.Element {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 200)
  }, [])

  // Cancel pending close if cursor re-enters any part of the panel
  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  // Cleanup on unmount
  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  // Close on outside click (keyboard/touch users)
  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div
      className="dropdown-wrapper"
      ref={wrapRef}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        className="nav-trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        onFocus={openMenu}
      >
        {label}
        <ChevronIcon />
      </button>
      {open && (
        <Dropdown
          items={items}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
      )}
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [])

  const toggleMobileGroup = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label))
  }

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner wrap">
          <Link href="/" className="wordmark" onClick={closeMobile} aria-label="Evidentize — home">
            <Image
              key={scrolled ? 'light' : 'dark'}
              className="wordmark-img"
              src={
                scrolled
                  ? 'https://res.cloudinary.com/dkhawygrr/image/upload/q_auto/f_auto/v1781204026/Evidentize_logo_samples_1_sfcmfe.png'
                  : 'https://res.cloudinary.com/dkhawygrr/image/upload/q_auto/f_auto/v1781204028/Evidentize_logo_samples_2_dcrpha.png'
              }
              alt="Evidentize"
              width={1000}
              height={1000}
              style={{ width: 'auto', height: '28px' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/platform" className="nav-link">Platform</Link>
            <NavDropdown label="Solutions" items={SOLUTIONS} />
            <Link href="/partners" className="nav-link">Partners</Link>
            <NavDropdown label="Resources" items={RESOURCES} />
            <NavDropdown label="Company" items={COMPANY} />
            <Link href="/investors" className="nav-link">Investors</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="header-ctas">
            <a
              href="https://career-bridge-foundation-project.vercel.app/"
              className="sign-in-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign in
            </a>
            <Link href="/demo" className="btn btn-primary btn-sm">
              Book a demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Navigation menu" aria-modal="true">
          {/* Platform */}
          <div className="mobile-nav-group">
            <Link href="/platform" className="mobile-nav-plain" onClick={closeMobile}>
              Platform
            </Link>
          </div>

          {/* Solutions dropdown */}
          <div className="mobile-nav-group">
            <button
              className="mobile-nav-top"
              aria-expanded={mobileExpanded === 'solutions'}
              onClick={() => toggleMobileGroup('solutions')}
            >
              Solutions
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileExpanded === 'solutions' && (
              <div className="mobile-sub-items">
                {SOLUTIONS.map((item) => (
                  <Link key={item.href} href={item.href} className="mobile-sub-item" onClick={closeMobile}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Partners */}
          <div className="mobile-nav-group">
            <Link href="/partners" className="mobile-nav-plain" onClick={closeMobile}>
              Partners
            </Link>
          </div>

          {/* Resources dropdown */}
          <div className="mobile-nav-group">
            <button
              className="mobile-nav-top"
              aria-expanded={mobileExpanded === 'resources'}
              onClick={() => toggleMobileGroup('resources')}
            >
              Resources
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileExpanded === 'resources' && (
              <div className="mobile-sub-items">
                {RESOURCES.map((item) => (
                  <Link key={item.href} href={item.href} className="mobile-sub-item" onClick={closeMobile}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company dropdown */}
          <div className="mobile-nav-group">
            <button
              className="mobile-nav-top"
              aria-expanded={mobileExpanded === 'company'}
              onClick={() => toggleMobileGroup('company')}
            >
              Company
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileExpanded === 'company' && (
              <div className="mobile-sub-items">
                {COMPANY.map((item) => (
                  <Link key={item.href} href={item.href} className="mobile-sub-item" onClick={closeMobile}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Investors */}
          <div className="mobile-nav-group">
            <Link href="/investors" className="mobile-nav-plain" onClick={closeMobile}>
              Investors
            </Link>
          </div>

          {/* CTAs */}
          <div className="mobile-ctas">
            <a
              href="https://app.evidentize.io"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
            >
              Sign in
            </a>
            <Link href="/demo" className="btn btn-primary" onClick={closeMobile}>
              Book a demo <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
