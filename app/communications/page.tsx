const highlights = [
    {
      title: "Campaigns and donor storytelling",
      body:
        "I translate complex work into clear narratives and campaigns that improve engagement and make the next action effortless across web, email, and social.",
    },
    {
      title: "Ethical storytelling by default",
      body:
        "I center dignity and agency, avoid extractive framing, and keep claims grounded in outcomes, especially when stories involve vulnerable communities.",
    },
    {
      title: "Systems that keep teams shipping",
      body:
        "Templates, calendars, approvals, reporting loops, and lightweight automation so quality and consistency scale without burnout.",
    },
  ];
  
  const featured = [
    {
      label: "Campaigns and storytelling",
      title: "1000 Gretas",
      description:
        "Digital campaigns and donor storytelling that increased engagement and improved the supporter journey.",
      href: "/work/1000-gretas",
      pdf: "/Impact_Brief_1000Gretas.pdf",
    },
    {
      label: "Community and retention",
      title: "Unlikely Farms",
      description:
        "Weekly communications systems supporting retention, coordination, and partner trust.",
      href: "/work/unlikely-farms",
      pdf: "/Impact_Brief_UnlikelyFarms.pdf",
    },
    {
      label: "Lifecycle and systems",
      title: "Voltus",
      description:
        "Onboarding and automation that improved adoption and responsiveness through clearer journeys.",
      href: "/work/voltus",
      pdf: "/Impact_Brief_Voltus.pdf",
    },
  ];
  
  export default function CommunicationsPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-16">
          {/* HERO */}
          <header className="space-y-6">
            <p className="text-sm font-medium tracking-wide text-slate-600">
              Communications • External Storytelling • Donor and Partner Audiences • Digital Strategy
            </p>
  
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Communications
              <span className="block text-slate-700">
                Ethical storytelling and systems that improve engagement
              </span>
            </h1>
  
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              I help mission-driven teams communicate impact with clarity and dignity by turning program work into
              donor-ready narratives, strong digital campaigns, and reliable content operations.
            </p>
  
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/work"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              >
                View all work
              </a>
              <a
                href="/resume"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Download resume
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Request redacted samples
              </a>
            </div>
          </header>
  
          {/* HIGHLIGHTS */}
          <section className="mt-12 grid gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h2 className="text-lg font-semibold">{h.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{h.body}</p>
              </div>
            ))}
          </section>
  
          {/* FEATURED CASE STUDIES */}
          <section className="mt-14">
            <h2 className="text-2xl font-semibold">Featured case studies</h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              A communications-first view of work spanning storytelling, donor audiences, lifecycle messaging, and systems.
            </p>
  
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {featured.map((c) => (
                <div key={c.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <p className="text-sm font-medium text-slate-600">{c.label}</p>
                  <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{c.description}</p>
  
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={c.href}
                      className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                    >
                      Read
                    </a>
                    <a
                      href={c.pdf}
                      className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                    >
                      Impact brief (PDF)
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* HOW I SUPPORT COMMS TEAMS */}
          <section className="mt-14 rounded-2xl bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold">How I support communications teams</h2>
  
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-medium text-slate-900">Strategy and alignment</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Clear messaging pillars, audience segmentation, and campaign briefs that align leadership, programs,
                  and development.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-medium text-slate-900">Donor-ready materials</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  One-pagers, impact summaries, newsletters, pitch decks, and reports that translate results into
                  simple, compelling stories.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-medium text-slate-900">Digital and distribution</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Content calendars, campaign sequencing, and channel-native copy for web, email, and social.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-medium text-slate-900">Measurement and iteration</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Lightweight reporting loops to learn fast, including what moved, why it moved, and what we test next.
                </p>
              </div>
            </div>
  
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              >
                Download resume
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Request redacted samples
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }
  