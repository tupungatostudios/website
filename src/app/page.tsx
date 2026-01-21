export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Tupungato Studios
          </a>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#apps" className="transition-colors hover:text-foreground">
              Apps
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-dvh flex-col items-center justify-center px-6 pt-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            We build apps
            <br />
            <span className="text-muted">people love</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-pretty text-lg text-muted">
            Tupungato Studios crafts beautiful, intuitive applications that make
            everyday tasks simpler and more enjoyable.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#apps"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-6 text-sm font-medium transition-colors hover:bg-card"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              About the Studio
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
              We&apos;re a small, focused team passionate about creating apps
              that genuinely help people. No bloat, no unnecessary features—just
              thoughtful design and solid engineering.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Simple by Design</h3>
              <p className="mt-2 text-sm text-muted">
                We strip away complexity to deliver apps that just work.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Mobile First</h3>
              <p className="mt-2 text-sm text-muted">
                Built for the devices you use most, with native performance.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Made with Care</h3>
              <p className="mt-2 text-sm text-muted">
                Every detail matters. We obsess so you don&apos;t have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Our Apps
            </h2>
            <p className="mt-4 text-muted">
              Games and tools we&apos;ve built. More coming soon.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Impostor Game */}
            <a
              href="/games/impostor.html"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-[#ff4d6a]/50 hover:shadow-[0_0_30px_rgba(255,77,106,0.15)]"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff4d6a] to-[#ff7a45]">
                <span className="text-xl">🎭</span>
              </div>
              <h3 className="font-semibold">Impostor</h3>
              <p className="mt-2 text-sm text-muted">
                A party word game where one player bluffs their way through.
                Find the impostor before it&apos;s too late!
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  Play Now
                </span>
                <span className="text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  3+ players
                </span>
              </div>
            </a>

            {/* Placeholder App Card 2 */}
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-zinc-800">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="font-semibold">Coming Soon</h3>
              <p className="mt-2 text-sm text-muted">
                A tool to simplify your daily routines. Details coming soon.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-zinc-700/50 px-3 py-1 text-xs font-medium text-muted">
                  Planned
                </span>
              </div>
            </div>

            {/* Placeholder App Card 3 */}
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-zinc-800">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="font-semibold">Coming Soon</h3>
              <p className="mt-2 text-sm text-muted">
                An idea we&apos;re excited about. More updates to follow.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-zinc-700/50 px-3 py-1 text-xs font-medium text-muted">
                  Planned
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-muted">
              Have a question, idea, or just want to say hi? We&apos;d love to
              hear from you.
            </p>
            <a
              href="mailto:hello@tupungatostudios.com"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              hello@tupungatostudios.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
            <p>© {new Date().getFullYear()} Tupungato Studios</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
