export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="space-y-6">
          <p className="text-sm font-medium tracking-wide text-slate-600">
            Communications • Storytelling • Social Media • Digital Strategy
          </p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Trevor Tuck
            <span className="block text-slate-700">
              Mission-driven communications and digital storytelling that ships.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
            I translate complex work into clear, ethical narratives for donors, partners, and
            the public and build content systems that strengthen communities and drive action.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/work"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            >
              View Work
            </a>
            <a
              href="/contact"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Contact
            </a>
            <a
              href="/resume"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Resume
            </a>
          </div>
        </header>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <p className="text-3xl font-semibold">+158%</p>
            <p className="mt-2 text-sm text-slate-600">
              Donor engagement across 12 digital campaigns
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <p className="text-3xl font-semibold">98%</p>
            <p className="mt-2 text-sm text-slate-600">
              Retention via community comms + feedback loops
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <p className="text-3xl font-semibold">+25%</p>
            <p className="mt-2 text-sm text-slate-600">
              Adoption driven by clearer onboarding + automation
            </p>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-slate-50 p-8">
          <h2 className="text-xl font-semibold">What I’m focused on</h2>
          <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
            <li>• Ethical storytelling that centers dignity and agency</li>
            <li>• Donor-ready reports, briefs, one-pagers, and decks</li>
            <li>• Social strategy, content calendars, and community engagement</li>
            <li>• Measurement: what moved, why it moved, what we test next</li>
          </ul>
        </section>

        <footer className="mt-14 text-sm text-slate-500">
          © {new Date().getFullYear()} Trevor Tuck
        </footer>
      </div>
    </main>
  );
}
