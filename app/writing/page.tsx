const writingSamples = [
    {
      type: "PDF",
      title: "Donor Event Pack",
      description:
        "A donor event email and communications pack designed for clarity, attendance, and follow-through.",
      href: "/WritingSample_DonorEventPack.pdf",
      cta: "Open PDF",
    },
    {
      type: "PDF",
      title: "Impact Brief: 1000 Gretas",
      description:
        "Campaign narrative, strategy, and outcomes summarized in a short impact brief.",
      href: "/Impact_Brief_1000Gretas.pdf",
      cta: "Open PDF",
    },
    {
      type: "PDF",
      title: "Impact Brief: Unlikely Farms",
      description:
        "A concise summary of weekly communications systems supporting retention and coordination.",
      href: "/Impact_Brief_UnlikelyFarms.pdf",
      cta: "Open PDF",
    },
    {
      type: "PDF",
      title: "Impact Brief: Voltus",
      description:
        "Lifecycle messaging and systems work summarized for stakeholders.",
      href: "/Impact_Brief_Voltus.pdf",
      cta: "Open PDF",
    },
  ];
  
  const onRequest = [
    {
      title: "Newsletter and donor update excerpts",
      detail:
        "Short updates written for clarity, trust, and consistent cadence. Redacted versions available.",
    },
    {
      title: "One-pagers and briefs",
      detail:
        "Program and partnership one-pagers with outcome-forward framing. Redacted versions available.",
    },
    {
      title: "Lifecycle and onboarding sequences",
      detail:
        "Messaging sequences focused on adoption and follow-through. Redacted versions available.",
    },
    {
      title: "Social copy and content calendar excerpts",
      detail:
        "Platform-native copy and planning snippets, plus a short performance recap. Redacted versions available.",
    },
  ];
  
  function Card({
    type,
    title,
    description,
    href,
    cta,
  }: {
    type: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  }) {
    return (
      <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
          {type}
        </p>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{description}</p>
        <div className="mt-5">
          <a
            href={href}
            className="inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            {cta}
          </a>
        </div>
      </div>
    );
  }
  
  export default function WritingPage() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <header className="space-y-4">
            <p className="text-sm font-medium tracking-wide text-slate-600">Writing</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Writing samples and stakeholder materials
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              A comms-first collection of donor-facing writing, impact briefs, and stakeholder materials. Many samples
              require redaction. If you want additional examples aligned to a role, I can share them on request.
            </p>
  
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/contact"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              >
                Request redacted samples
              </a>
              <a
                href="/work"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                View case studies
              </a>
              <a
                href="/resume"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Download resume
              </a>
            </div>
          </header>
  
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Featured samples</h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              These samples are representative of how I write for donors, partners, and public audiences with clarity and
              outcome-forward framing.
            </p>
  
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {writingSamples.map((s) => (
                <Card
                  key={s.title}
                  type={s.type}
                  title={s.title}
                  description={s.description}
                  href={s.href}
                  cta={s.cta}
                />
              ))}
            </div>
          </section>
  
          <section className="mt-14 rounded-2xl bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold">Additional samples available on request</h2>
            <p className="mt-3 max-w-3xl text-slate-700 leading-relaxed">
              If you share the role and audience, I will curate a small set of relevant samples and provide redacted
              versions where needed.
            </p>
  
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {onRequest.map((o) => (
                <div key={o.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="font-medium text-slate-900">{o.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{o.detail}</p>
                </div>
              ))}
            </div>
  
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              >
                Request samples
              </a>
              <a
                href="/communications"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                View communications page
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }
  