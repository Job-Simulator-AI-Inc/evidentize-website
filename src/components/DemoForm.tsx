'use client'

import { useState, useRef } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function DemoForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const payload = {
      name: data.get('name') as string,
      organisation: data.get('organisation') as string,
      role: data.get('role') as string,
      email: data.get('email') as string,
      problem: data.get('problem') as string,
    }

    setStatus('loading')
    setErrorMsg('')

    void fetch('/api/demo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => ({ res, json: await res.json() as { error?: string } }))
      .then(({ res, json }) => {
        if (!res.ok) {
          setErrorMsg(json.error ?? 'Something went wrong.')
          setStatus('error')
        } else {
          setStatus('success')
          formRef.current?.reset()
        }
      })
      .catch(() => {
        setErrorMsg('Network error. Please check your connection and try again.')
        setStatus('error')
      })
  }

  if (status === 'success') {
    return (
      <div className="demo-form-success" role="alert">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <circle cx="18" cy="18" r="18" fill="var(--verified)" opacity="0.1" />
          <path d="M11 18.5l5 5 9-9" stroke="var(--verified)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="demo-form-success-title">Request received.</p>
        <p className="demo-form-success-body">
          We have sent a confirmation to your email. A member of our team will be in touch within one business day to arrange your demo.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => setStatus('idle')}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      className="demo-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="demo-field">
        <label className="demo-label" htmlFor="demo-name">Your name</label>
        <input
          className="demo-input"
          id="demo-name"
          type="text"
          name="name"
          placeholder="Alex Johnson"
          autoComplete="name"
          required
          disabled={status === 'loading'}
        />
      </div>

      <div className="demo-field">
        <label className="demo-label" htmlFor="demo-org">Organisation</label>
        <input
          className="demo-input"
          id="demo-org"
          type="text"
          name="organisation"
          placeholder="University / Training provider / Company"
          required
          disabled={status === 'loading'}
        />
      </div>

      <div className="demo-field">
        <label className="demo-label" htmlFor="demo-role">Your role</label>
        <input
          className="demo-input"
          id="demo-role"
          type="text"
          name="role"
          placeholder="Head of L&D, Founder, Talent Director…"
          required
          disabled={status === 'loading'}
        />
      </div>

      <div className="demo-field">
        <label className="demo-label" htmlFor="demo-email">Work email</label>
        <input
          className="demo-input"
          id="demo-email"
          type="email"
          name="email"
          placeholder="you@organisation.com"
          autoComplete="email"
          required
          disabled={status === 'loading'}
        />
      </div>

      <div className="demo-field">
        <label className="demo-label" htmlFor="demo-problem">
          What are you trying to solve?
          <span style={{ color: 'var(--ink-mute)', fontWeight: 400, marginLeft: '6px' }}>(optional)</span>
        </label>
        <textarea
          className="demo-textarea"
          id="demo-problem"
          name="problem"
          rows={4}
          placeholder="Tell us about your current challenge — assessment, hiring, credentialing…"
          disabled={status === 'loading'}
        />
      </div>

      {status === 'error' && (
        <p className="contact-form-error" role="alert">{errorMsg}</p>
      )}

      <button
        type="submit"
        className="demo-submit btn btn-primary"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting…' : 'Request a demo'}
        {status !== 'loading' && <span className="arrow" aria-hidden="true">→</span>}
      </button>
    </form>
  )
}
