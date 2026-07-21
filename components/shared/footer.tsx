'use client'

import { useState } from 'react'
import { Container } from './container'
import { personalData } from '@/lib/data/personal-data'

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus({ type: 'success', text: 'Message sent successfully! I will get back to you soon.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message.'
      setStatus({ type: 'error', text: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-black text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <div>
            <p className="text-4xl font-bold uppercase tracking-[0.14em] text-white">
              let&apos;s connect
            </p>
          </div>

          <div className="space-y-3 text-sm text-white/70">
            <p>
              Say hello at{' '}
              <a href={`mailto:${personalData.email}`} className="text-white underline">
                {personalData.email}
              </a>
            </p>
            {personalData.phone && (
              <p>
                Phone:{' '}
                <a href={`tel:${personalData.phone}`} className="text-white underline">
                  {personalData.phone}
                </a>
              </p>
            )}
            <p>
              For more info, here&apos;s my{' '}
              <a href="/resume.pdf" className="text-white underline" target="_blank" rel="noreferrer">
                resume
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-white/90">
            {personalData.social_usernames.linkedIn && (
              <a
                href={`https://linkedin.com/in/${personalData.social_usernames.linkedIn}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">in</span>
              </a>
            )}
            {personalData.social_usernames.github && (
              <a
                href={`https://github.com/${personalData.social_usernames.github}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="GitHub"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">gh</span>
              </a>
            )}
            {personalData.social_usernames.facebook && (
              <a
                href={`https://facebook.com/${personalData.social_usernames.facebook}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="Facebook"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">fb</span>
              </a>
            )}
            {personalData.social_usernames.instagram && (
              <a
                href={`https://instagram.com/${personalData.social_usernames.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="Instagram"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">ig</span>
              </a>
            )}
          </div>

          <p className="text-sm text-white/60">© {new Date().getFullYear()} {personalData.full_name}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-8"
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/60">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
              />
            </div>
          </div>

          {status && (
            <div
              className={`rounded-2xl p-4 text-xs font-medium ${
                status.type === 'success'
                  ? 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-300'
                  : 'border border-rose-500/20 bg-rose-500/10 text-rose-300'
              }`}
            >
              {status.text}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex rounded-full bg-lime-300 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-lime-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </Container>
    </footer>
  )
}
