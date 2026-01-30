const metrics = [
    { label: "Donor engagement", value: "+158%" },
    { label: "Campaigns delivered", value: "12" },
    { label: "Conversion lift", value: "20%+" },
  ];
  
  const skills = [
    "Communications strategy",
    "Ethical storytelling & narrative framing",
    "Email + donor journey optimization",
    "Campaign planning & content calendars",
    "Stakeholder alignment",
    "Performance reporting & iteration",
  ];
  
  const tools = ["CRM (e.g., HubSpot/Salesforce)", "Canva", "Email platform", "Google Analytics / social analytics", "Notion/Docs"];
  const impactBriefUrl = "/Impact_Brief_1000Gretas.pdf";

  export default function CaseStudy1000Gretas() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-14">
          {/* Top nav */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a
              href="/work"
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              ← Back to Work
            </a>
            <a
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Home
            </a>
          </div>
  
          {/* Header */}
          <header className="mt-8 space-y-4">
            <p className="text-sm font-medium tracking-wide text-slate-600">
              Case Study
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              1000 Gretas
              <span className="block text-slate-700">
                Digital campaigns & donor storytelling to increase engagement
              </span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              I led a set of coordinated digital campaigns that translated mission work into
              donor-ready narratives, improved the supporter journey, and strengthened engagement
              across channels.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
  <a
    href={impactBriefUrl}
    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
  >
    Download Impact Brief (PDF)
  </a>
  <a
    href="/contact"
    className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
  >
    Request redacted samples
  </a>
</div>
          </header>
  
          {/* Metrics */}
          <section className="mt-10 grid gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-200 p-5 shadow-sm"
              >
                <p className="text-3xl font-semibold">{m.value}</p>
                <p className="mt-2 text-sm text-slate-600">{m.label}</p>
              </div>
            ))}
          </section>
  
          {/* Body layout */}
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {/* Main narrative */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-semibold">Context</h2>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  The organization needed clearer, more consistent storytelling that connected
                  day-to-day work to supporter motivation. The goal was to communicate impact with
                  dignity and clarity, while improving performance across email and social.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Goal</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Increase donor engagement through campaign-based storytelling.</li>
                  <li>• Improve conversion by refining the supporter journey and calls-to-action.</li>
                  <li>• Establish repeatable systems (calendar, templates, reporting) to ship on time.</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Strategy</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Build a campaign narrative arc: problem → agency → progress → invitation to act.</li>
                  <li>• Align messaging across channels so email, social, and web reinforced each other.</li>
                  <li>• Use lightweight testing: subject lines, CTAs, send timing, and landing-page clarity.</li>
                  <li>• Report weekly on performance, learnings, and next tests.</li>
                </ul>
              </section>
              <section>
  <h2 className="text-2xl font-semibold">Challenge → Insight → Decisions</h2>
  <div className="mt-3 space-y-4 text-slate-700">
    <div className="rounded-2xl border border-slate-200 p-5">
      <p className="font-medium text-slate-900">Challenge</p>
      <p className="mt-2 leading-relaxed">
        Messaging needed to connect mission work to supporter motivation with consistency across channels,
        while keeping narratives ethical and non-extractive.
      </p>
    </div>
    <div className="rounded-2xl border border-slate-200 p-5">
      <p className="font-medium text-slate-900">Insight</p>
      <p className="mt-2 leading-relaxed">
        Engagement improved when content followed a simple arc (problem → agency → progress → invitation),
        used concrete outcomes, and made the next action effortless.
      </p>
    </div>
    <div className="rounded-2xl border border-slate-200 p-5">
      <p className="font-medium text-slate-900">Decisions</p>
      <ul className="mt-2 space-y-1 leading-relaxed">
        <li>• Standardized campaign briefs + a calendar to reduce friction and missed deadlines.</li>
        <li>• Tightened CTAs and journey sequencing to remove drop-off points.</li>
        <li>• Reported performance weekly to drive iteration rather than opinions.</li>
      </ul>
    </div>
  </div>
</section>

              <section>
                <h2 className="text-2xl font-semibold">Execution</h2>
                <div className="mt-3 space-y-4 text-slate-700">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">1) Campaign planning</p>
                    <p className="mt-2 leading-relaxed">
                      Built a content calendar and campaign briefs to align stakeholders on message,
                      audience, and desired action — keeping production fast and consistent.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">2) Storytelling + content production</p>
                    <p className="mt-2 leading-relaxed">
                      Wrote donor-facing emails and social copy that centered dignity and agency.
                      Translated complex work into accessible narratives supported by clear metrics.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">3) Journey refinements</p>
                    <p className="mt-2 leading-relaxed">
                      Improved conversion through clearer CTAs, better sequencing, and improved landing
                      page clarity — supported by performance tracking and iteration.
                    </p>
                  </div>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Results</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Increased donor engagement by <span className="font-medium text-slate-900">+158%</span> across 12 campaigns.</li>
                  <li>• Improved conversion by <span className="font-medium text-slate-900">20%+</span> through supporter journey refinements.</li>
                  <li>• Implemented repeatable campaign systems (calendar + templates + reporting).</li>
                </ul>
  
                <div className="mt-5 rounded-2xl bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-600">Ethical storytelling note</p>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    Stories were framed to avoid savior narratives and center community agency,
                    consent, and dignity — focusing on what changed, why it mattered, and how supporters
                    could act responsibly.
                  </p>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Artifacts (available on request)</h2>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  To protect partner and supporter privacy, I don’t publish live donor emails or internal
                  dashboards publicly. I can share redacted samples during interviews:
                </p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Campaign brief + content calendar excerpt</li>
                  <li>• Donor email sequence (redacted)</li>
                  <li>• Performance snapshot (redacted)</li>
                </ul>
              </section>
            </div>
  
            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Role</h3>
                <p className="mt-2 text-slate-700">Communications / Digital Campaigns</p>
              </div>
  
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Skills</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {skills.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
  
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Tools</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {tools.map((t) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
              </div>
  
              <div className="rounded-2xl bg-slate-900 p-6 text-white">
                <h3 className="text-lg font-semibold">Want the full packet?</h3>
                <p className="mt-2 text-sm text-slate-200">
                  I can provide redacted writing samples and a one-page impact brief during interviews.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-block rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
                >
                  Contact me
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    );
  }
  