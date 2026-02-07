export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* HERO */}
        <header className="space-y-7">
          <p className="text-sm font-medium tracking-wide text-slate-600">
            Communications • Customer Success • Storytelling • Lifecycle Messaging • Digital Strategy
          </p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Trevor Tuck
            <span className="block text-slate-700">
              Sustainability-driven Communications + Customer Success leader
            </span>
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            I turn complex work into clear journeys through onboarding, lifecycle messaging, and campaigns that improve{" "}
            <span className="font-medium text-slate-900">adoption</span>,{" "}
            <span className="font-medium text-slate-900">retention</span>, and{" "}
            <span className="font-medium text-slate-900">engagement</span>. I bring strong writing and the systems
            behind it: templates, automation, and reporting that keep teams shipping.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/work"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            >
              View Work
            </a>

            <a
              href="/resume"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Download Resume
            </a>

            <a
              href="/contact"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Contact
            </a>
          </div>
        </header>

        {/* PROOF STRIP */}
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
              Adoption through onboarding clarity + automation
            </p>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Featured work</h2>
              <p className="mt-2 text-slate-700">
                Case studies and impact briefs focused on engagement, retention, and systems.
              </p>
            </div>
            <a
              href="/work"
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              View all
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <a
              href="/work/1000-gretas"
              className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50"
            >
              <p className="text-sm font-medium text-slate-600">Campaigns & Storytelling</p>
              <h3 className="mt-2 text-lg font-semibold">1000 Gretas</h3>
              <p className="mt-2 text-sm text-slate-700">
                Digital campaigns and donor storytelling that increased engagement.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-700 group-hover:text-slate-900">
                Read case study
              </p>
            </a>

            <a
              href="/work/unlikely-farms"
              className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50"
            >
              <p className="text-sm font-medium text-slate-600">Community & Retention</p>
              <h3 className="mt-2 text-lg font-semibold">Unlikely Farms</h3>
              <p className="mt-2 text-sm text-slate-700">
                Weekly communications systems supporting retention and coordination.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-700 group-hover:text-slate-900">
                Read case study
              </p>
            </a>

            <a
              href="/work/voltus"
              className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50"
            >
              <p className="text-sm font-medium text-slate-600">Lifecycle & Systems</p>
              <h3 className="mt-2 text-lg font-semibold">Voltus</h3>
              <p className="mt-2 text-sm text-slate-700">
                Onboarding and automation that improved adoption and responsiveness.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-700 group-hover:text-slate-900">
                Read case study
              </p>
            </a>
          </div>
        </section>

        {/* FEATURED WRITING */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Featured writing</h2>
              <p className="mt-2 text-slate-700">
                Donor-facing and stakeholder materials. More samples are available on request.
              </p>
            </div>
            <a
              href="/writing"
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              View all
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="/WritingSample_DonorEventPack.pdf"
              className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">PDF</p>
              <h3 className="mt-2 text-lg font-semibold">Donor Event Pack</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                A donor event email and communications pack designed for clarity, attendance, and follow-through.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-700 group-hover:text-slate-900">
                Open sample
              </p>
            </a>

            <a
              href="/Impact_Brief_1000Gretas.pdf"
              className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">PDF</p>
              <h3 className="mt-2 text-lg font-semibold">Impact Brief: 1000 Gretas</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Campaign narrative, strategy, and outcomes summarized in a concise impact brief.
              </p>
              <p className="mt-4 text-sm font-medium text-slate-700 group-hover:text-slate-900">
                Open sample
              </p>
            </a>
          </div>
        </section>

        {/* HOW I WORK */}
        <section className="mt-14 rounded-2xl bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold">How I work</h2>
          <p className="mt-3 max-w-3xl text-slate-700 leading-relaxed">
            I’m strongest in roles at the intersection of communications, engagement, and systems. The goal is not just
            great content. It is measurable outcomes and repeatable execution.
          </p>

          <ul className="mt-6 grid gap-4 text-slate-700 sm:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-medium text-slate-900">Ethical storytelling</p>
              <p className="mt-2 text-sm leading-relaxed">
                Dignity-first narratives with clear consent, agency, and outcome-focused framing.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-medium text-slate-900">Lifecycle thinking</p>
              <p className="mt-2 text-sm leading-relaxed">
                Journeys that guide people to the next action through onboarding, nurture, and retention.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-medium text-slate-900">Systems that scale</p>
              <p className="mt-2 text-sm leading-relaxed">
                Templates, calendars, and automation so quality doesn’t depend on memory.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="font-medium text-slate-900">Measure and iterate</p>
              <p className="mt-2 text-sm leading-relaxed">
                Simple reporting loops: what moved, why it moved, and what we test next.
              </p>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            >
              Get the resume
            </a>
            <a
              href="/contact"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Let’s talk
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
