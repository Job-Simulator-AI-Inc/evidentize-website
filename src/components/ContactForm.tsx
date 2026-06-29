'use client'

import { useState, useRef } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const payload = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      subject: data.get('subject') as string,
      message: data.get('message') as string,
    }

    setStatus('loading')
    setErrorMsg('')

    void fetch('/api/contact', {
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
      <div className="contact-form-success" role="alert">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="16" fill="var(--verified)" opacity="0.12" />
          <path d="M10 16.5l4 4 8-8" stroke="var(--verified)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="contact-form-success-title">Message sent.</p>
        <p className="contact-form-success-body">
          Thanks for reaching out. We will get back to you within one business day.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="demo-field">
        <label className="demo-label" htmlFor="ct-name">Your name</label>
        <input
          className="demo-input"
          id="ct-name"
          type="text"
          name="name"
          placeholder="Alex Johnson"
          required
          disabled={status === 'loading'}
        />
      </div>
      <div className="demo-field">
        <label className="demo-label" htmlFor="ct-email">Email address</label>
        <input
          className="demo-input"
          id="ct-email"
          type="email"
          name="email"
          placeholder="you@organisation.com"
          required
          disabled={status === 'loading'}
        />
      </div>
      <div className="demo-field">
        <label className="demo-label" htmlFor="ct-subject">Subject</label>
        <input
          className="demo-input"
          id="ct-subject"
          type="text"
          name="subject"
          placeholder="What's this about?"
          required
          disabled={status === 'loading'}
        />
      </div>
      <div className="demo-field">
        <label className="demo-label" htmlFor="ct-message">Message</label>
        <textarea
          className="demo-textarea"
          id="ct-message"
          name="message"
          rows={5}
          placeholder="Tell us what you're thinking…"
          required
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
        {status === 'loading' ? 'Sending…' : 'Send message'}
        {status !== 'loading' && <span className="arrow" aria-hidden="true">→</span>}
      </button>
    </form>
  )
}
