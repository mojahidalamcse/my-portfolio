import { Container } from "./container";

export function Footer() {
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
            <p>Say hello at <a href="mailto:ishowspeed@gmail.com" className="text-white underline">ishowspeed@gmail.com</a></p>
            <p>For more info, here&apos;s my <a href="/resume.pdf" className="text-white underline" target="_blank" rel="noreferrer">resume</a></p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-white/90">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
              <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">in</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
              <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">gh</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
              <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">x</span>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
              <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">ig</span>
            </a>
          </div>

          <p className="text-sm text-white/60">© 2026 Mojahid Alam</p>
        </div>

        <form className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
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
                placeholder="Write your message"
                className="w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-white/20 focus:ring-2 focus:ring-white/10"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex rounded-full bg-lime-300 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-lime-200"
          >
            Submit
          </button>
        </form>
      </Container>
    </footer>
  );
}
