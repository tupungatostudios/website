import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/config";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href={`/${locale}`} className="text-lg font-semibold tracking-tight">
            Tupungato Studios
          </Link>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#about" className="transition-colors hover:text-foreground">
              {dict.nav.about}
            </a>
            <a href="#apps" className="transition-colors hover:text-foreground">
              {dict.nav.apps}
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              {dict.nav.contact}
            </a>
            <LanguageSwitcher currentLocale={locale} label={dict.nav.language} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-dvh flex-col items-center justify-center px-6 pt-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {dict.hero.title}
            <br />
            <span className="text-muted">{dict.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-pretty text-lg text-muted">
            {dict.hero.description}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#apps"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              {dict.hero.cta}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-6 text-sm font-medium transition-colors hover:bg-card"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              {dict.about.title}
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
              {dict.about.description}
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
              <h3 className="font-semibold">{dict.about.features.simple.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {dict.about.features.simple.description}
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
              <h3 className="font-semibold">{dict.about.features.mobile.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {dict.about.features.mobile.description}
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
              <h3 className="font-semibold">{dict.about.features.care.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {dict.about.features.care.description}
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
              {dict.apps.title}
            </h2>
            <p className="mt-4 text-muted">{dict.apps.subtitle}</p>
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
              <h3 className="font-semibold">{dict.apps.impostor.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {dict.apps.impostor.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {dict.apps.impostor.cta}
                </span>
                <span className="text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  {dict.apps.impostor.players}
                </span>
              </div>
            </a>

            {/* Placeholder App Card 2 */}
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-zinc-800">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="font-semibold">{dict.apps.comingSoon.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {dict.apps.placeholder1.description}
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-zinc-700/50 px-3 py-1 text-xs font-medium text-muted">
                  {dict.apps.comingSoon.status}
                </span>
              </div>
            </div>

            {/* Placeholder App Card 3 */}
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-zinc-800">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="font-semibold">{dict.apps.comingSoon.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {dict.apps.placeholder2.description}
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-zinc-700/50 px-3 py-1 text-xs font-medium text-muted">
                  {dict.apps.comingSoon.status}
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
              {dict.contact.title}
            </h2>
            <p className="mt-4 text-muted">{dict.contact.description}</p>
            <a
              href="mailto:tupungatostudios@gmail.com"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              tupungatostudios@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
            <p>
              © {new Date().getFullYear()} {dict.footer.copyright}
            </p>
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
