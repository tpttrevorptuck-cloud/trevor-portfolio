const caseStudies = [
    {
      title: "Digital Campaigns & Donor Engagement",
      org: "1000 Gretas",
      metrics: ["+158% donor engagement", "12 campaigns delivered", "20%+ conversion lift (journey refinements)"],
      href: "/work/1000-gretas",
    },
    {
      title: "Community Building & Partnerships",
      org: "Unlikely Farms",
      metrics: ["98% retention", "4 partnerships", "Consistent comms + feedback loops"],
      href: "/work/unlikely-farms",
    },
    {
      title: "Onboarding, Comms Systems & Adoption",
      org: "Voltus",
      metrics: ["+25% adoption", "-30% response time", "Automation across CRM workflows"],
      href: "/work/voltus",
    },
  ];
  
  export default function Work() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-semibold">Work</h1>
              <p className="mt-3 max-w-2xl text-slate-700">
                Selected case studies focused on ethical storytelling, donor-ready communications,
                and performance-led digital strategy.
              </p>
            </div>
            <a
              href="/"
              className="hidden rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 sm:inline-block"
            >
              Back home
            </a>
          </div>
  
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {caseStudies.map((cs) => (
              <a
                key={cs.href}
                href={cs.href}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 hover:bg-slate-50"
              >
                <p className="text-sm font-medium text-slate-600">{cs.org}</p>
                <h2 className="mt-2 text-xl font-semibold">{cs.title}</h2>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  {cs.metrics.map((m) => (
                    <li key={m}>• {m}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-slate-900">Read case study →</p>
              </a>
            ))}
          </div>
        </div>
      </main>
    );
  }
  