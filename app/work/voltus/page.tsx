const metrics = [
    { label: "Adoption lift", value: "+25%" },
    { label: "Response time", value: "-30%" },
    { label: "Automations shipped", value: "6+" },
  ];
  
  const skills = [
    "Product + customer communications",
    "Onboarding & lifecycle messaging",
    "Cross-functional alignment",
    "Process + automation design",
    "Reporting & iteration",
    "Stakeholder-ready writing",
  ];
  
  const tools = ["CRM (HubSpot/Salesforce)", "Docs/Notion", "Canva (light design)", "Analytics", "Automation (Zapier/CRM workflows)"];
  
  export default function CaseStudyVoltus() {
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
              Voltus
              <span className="block text-slate-700">
                Clear communications + automation that improved adoption and responsiveness
              </span>
            </h1>
  
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              I improved adoption by simplifying onboarding and lifecycle communications, and reduced response time by
              building automations and internal systems that made follow-up consistent and measurable.
            </p>
  
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/Impact_Brief_Voltus.pdf"
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
                  Users needed clearer guidance to understand value quickly and take the right next steps. Internally,
                  response and follow-up depended too much on manual processes, which created inconsistency.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Goal</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Increase adoption by improving onboarding clarity and lifecycle messaging.</li>
                  <li>• Reduce response time through consistent internal workflows and automation.</li>
                  <li>• Create repeatable systems that scale without sacrificing quality.</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Strategy</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Rewrite onboarding to be action-based: “What to do next” over “what we do.”</li>
                  <li>• Build lifecycle touchpoints that anticipate questions and reduce support load.</li>
                  <li>• Automate handoffs and reminders so follow-up happens reliably.</li>
                  <li>• Track outcomes and iterate based on what moved adoption and time-to-response.</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Challenge → Insight → Decisions</h2>
                <div className="mt-3 space-y-4 text-slate-700">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">Challenge</p>
                    <p className="mt-2 leading-relaxed">
                      When messaging is unclear, users hesitate and support demand increases. When internal follow-up
                      is manual, response times vary and trust erodes.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">Insight</p>
                    <p className="mt-2 leading-relaxed">
                      The biggest wins came from (1) simplifying the “next action” and (2) making follow-up automatic—
                      so consistency didn’t depend on memory.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">Decisions</p>
                    <ul className="mt-2 space-y-1 leading-relaxed">
                      <li>• Reworked onboarding messaging into a short sequence with clear steps and outcomes.</li>
                      <li>• Built automation for reminders, status changes, and handoffs to reduce manual work.</li>
                      <li>• Added lightweight reporting to track adoption and response-time trends.</li>
                    </ul>
                  </div>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Execution</h2>
                <div className="mt-3 space-y-4 text-slate-700">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">1) Onboarding improvements</p>
                    <p className="mt-2 leading-relaxed">
                      Simplified language, clarified steps, and created messaging that connected actions to outcomes.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">2) Lifecycle communications</p>
                    <p className="mt-2 leading-relaxed">
                      Added proactive touchpoints to reduce friction and answer questions before they became tickets.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="font-medium text-slate-900">3) Automation + workflow design</p>
                    <p className="mt-2 leading-relaxed">
                      Implemented automations for handoffs, reminders, and follow-up to make response consistent and measurable.
                    </p>
                  </div>
                </div>
              </section>
  
              <section id="results">
                <h2 className="text-2xl font-semibold">Results</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Increased adoption by <span className="font-medium text-slate-900">+25%</span> through clearer onboarding and lifecycle messaging.</li>
                  <li>• Reduced response time by <span className="font-medium text-slate-900">-30%</span> with workflow improvements and automation.</li>
                  <li>• Shipped <span className="font-medium text-slate-900">6+</span> automations to reduce manual effort and improve consistency.</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold">Artifacts (available on request)</h2>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  I can share redacted samples during interviews:
                </p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• Onboarding email sequence (redacted)</li>
                  <li>• Workflow diagram + automation map</li>
                  <li>• Adoption/response reporting snapshot (redacted)</li>
                </ul>
              </section>
            </div>
  
            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Role</h3>
                <p className="mt-2 text-slate-700">Comms Systems / Lifecycle / Ops</p>
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
                  Clarity plus automation is a growth lever: it reduces friction, increases adoption, and improves trust through consistency.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    );
  }
  