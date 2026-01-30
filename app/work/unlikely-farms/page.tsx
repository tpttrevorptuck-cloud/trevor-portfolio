const metrics = [
    { label: "Retention", value: "98%" },
    { label: "Weekly deliveries", value: "18" },
    { label: "Partnerships built", value: "4" },
  ];
  
  const skills = [
    "Community communications",
    "Partnership outreach & stewardship",
    "Content + cadence planning",
    "Stakeholder coordination",
    "Feedback loops & iteration",
    "Volunteer / supporter engagement",
  ];
  
  const tools = ["Email/newsletter tools", "Canva", "Docs/Notion", "CRM (if applicable)", "Basic analytics/reporting"];
  
  export default function CaseStudyUnlikelyFarms() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a href="/work" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              ← Back to Work
            </a>
            <a href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Home
            </a>
          </div>
  
          <header className="mt-8 space-y-4">
            <p className="text-sm font-medium tracking-wide text-slate-600">Case Study</p>
  
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Unlikely Farms
              <span className="block text-slate-700">
                Community communications that strengthened retention and partnerships
              </span>
            </h1>
  
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              I supported a community-driven food initiative by building a reliable communications rhythm,
              coordinating partners, and creating feedback loops that improved consistency and retention.
            </p>
  
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/Impact_Brief_UnlikelyFarms.pdf"
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
  
          <section className="mt-10 grid gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                <p className="text-3xl font-semibold">{m.value}</p>
                <p className="mt-2 text-sm text-slate-600">{m.label}</p>
              </div>
            ))}
          </section>
  
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-semibold">Context</h2>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  The program relied on consistent coordination across volunteers, partners, and community members.
                  Clear expectations, steady updates, and responsive communication were essential to maintain trust.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Goal</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Improve community retention through reliable communication and follow-through.</li>
                  <li>• Coordinate recurring deliveries with clarity and minimal friction.</li>
                  <li>• Build and sustain partnerships through thoughtful outreach and stewardship.</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Strategy</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Establish a predictable cadence (updates, reminders, confirmations, gratitude).</li>
                  <li>• Create templates and checklists to reduce missed details and last-minute scrambles.</li>
                  <li>• Build feedback loops to surface issues early and adapt quickly.</li>
                  <li>• Maintain partner relationships with clear asks and timely follow-up.</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Challenge → Insight → Decisions</h2>
                <div className="mt-3 space-y-4 text-slate-700">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">Challenge</p>
                    <p className="mt-2 leading-relaxed">
                      Community initiatives can lose momentum when communication is inconsistent or logistics are unclear,
                      especially when multiple stakeholders are involved.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">Insight</p>
                    <p className="mt-2 leading-relaxed">
                      Retention increases when people know what to expect, feel heard, and see consistent follow-through
                      even when resources are limited.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">Decisions</p>
                    <ul className="mt-2 space-y-1 leading-relaxed">
                      <li>• Built repeatable comms templates for each delivery cycle.</li>
                      <li>• Implemented feedback capture and quick turnaround responses.</li>
                      <li>• Prioritized partner stewardship (clarity, gratitude, reliability).</li>
                    </ul>
                  </div>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Execution</h2>
                <div className="mt-3 space-y-4 text-slate-700">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">1) Communication cadence</p>
                    <p className="mt-2 leading-relaxed">
                      Created a predictable rhythm of updates and reminders that reduced confusion and improved attendance.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">2) Coordination & logistics support</p>
                    <p className="mt-2 leading-relaxed">
                      Used templates and checklists to keep deliveries consistent and minimize missed steps.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">3) Partnerships</p>
                    <p className="mt-2 leading-relaxed">
                      Supported outreach and partner stewardship to sustain collaboration and build trust over time.
                    </p>
                  </div>
                </div>
              </section>
  
              <section id="results">
                <h2 className="text-2xl font-semibold">Results</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Maintained <span className="font-medium text-slate-900">98%</span> retention through reliable community communications.</li>
                  <li>• Supported <span className="font-medium text-slate-900">18</span> weekly deliveries through clear coordination.</li>
                  <li>• Built and sustained <span className="font-medium text-slate-900">4</span> partnerships through thoughtful outreach and follow-through.</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Artifacts (available on request)</h2>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  I can share redacted samples during interviews:
                </p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Delivery-cycle comms templates (redacted)</li>
                  <li>• Partnership outreach email template</li>
                  <li>• Feedback loop + issue tracker snapshot (redacted)</li>
                </ul>
              </section>
            </div>
  
            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Role</h3>
                <p className="mt-2 text-slate-700">Community Communications / Partnerships</p>
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
                <h3 className="text-lg font-semibold">Top-line takeaway</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Consistent communication systems are a retention strategy — they reduce friction, build trust,
                  and keep community programs sustainable.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    );
  }
  