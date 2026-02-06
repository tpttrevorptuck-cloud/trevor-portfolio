import React from "react";

type Metric = { label: string; value: string };
type Section = { title: string; children: React.ReactNode };

export function CaseStudyShell({
  eyebrow,
  title,
  subtitle,
  summary,
  metrics,
  primaryCta,
  secondaryCta,
  sections,
  sidebar,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  metrics?: Metric[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sections: Section[];
  sidebar?: { title: string; items: string[] }[];
}) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a href="/work" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Back to Work
          </a>
          <a href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Home
          </a>
        </div>

        <header className="mt-8 space-y-4">
          <p className="text-sm font-medium tracking-wide text-slate-600">{eyebrow}</p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
            <span className="block text-slate-700">{subtitle}</span>
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">{summary}</p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {primaryCta ? (
                <a
                  href={primaryCta.href}
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
                >
                  {primaryCta.label}
                </a>
              ) : null}
              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          )}
        </header>

        {metrics && metrics.length > 0 ? (
          <section className="mt-10 grid gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                <p className="text-3xl font-semibold">{m.value}</p>
                <p className="mt-2 text-sm text-slate-600">{m.label}</p>
              </div>
            ))}
          </section>
        ) : null}

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-2xl font-semibold">{s.title}</h2>
                <div className="mt-3 text-slate-700">{s.children}</div>
              </section>
            ))}
          </div>

          {sidebar ? (
            <aside className="space-y-6">
              {sidebar.map((b) => (
                <div key={b.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {b.items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>
          ) : null}
        </div>
      </div>
    </main>
  );
}
