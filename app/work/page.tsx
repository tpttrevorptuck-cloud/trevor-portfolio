"use client";

import { useMemo, useState } from "react";
import { workItems, type WorkPillar, type WorkItem } from "./workData";

const pillars: Array<WorkPillar | "All"> = ["All", "Campaigns", "Lifecycle", "Systems"];

function Pill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-3 py-1 text-sm font-medium transition",
        active
          ? "bg-slate-900 text-white"
          : "border border-slate-300 text-slate-700 hover:bg-slate-50",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
      {text}
    </span>
  );
}

function Card({ item }: { item: WorkItem }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{item.pillar}</p>
      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{item.org}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <Tag key={t} text={t} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={item.href}
          className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Read
        </a>

        {item.impactPdf ? (
          <a
            href={item.impactPdf}
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Impact brief (PDF)
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [pillar, setPillar] = useState<WorkPillar | "All">("All");
  const [query, setQuery] = useState("");

  const featured = useMemo(() => workItems.filter((w) => w.featured), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return workItems
      .filter((w) => (pillar === "All" ? true : w.pillar === pillar))
      .filter((w) => {
        if (!q) return true;
        const haystack = [
          w.title,
          w.org,
          w.summary,
          w.pillar,
          ...w.tags,
        ].join(" ").toLowerCase();
        return haystack.includes(q);
      });
  }, [pillar, query]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="space-y-4">
          <p className="text-sm font-medium tracking-wide text-slate-600">Work</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Case studies and impact briefs
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            A library of work across communications, lifecycle messaging, and systems that improve adoption,
            retention, and engagement.
          </p>
        </header>

        <section className="mt-10 rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {pillars.map((p) => (
                <Pill
                  key={p}
                  label={p}
                  active={pillar === p}
                  onClick={() => setPillar(p)}
                />
              ))}
            </div>

            <div className="w-full sm:w-72">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search work"
                className="w-full rounded-2xl border border-slate-300 px-4 py-2 text-sm outline-none focus:border-slate-500"
              />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {featured.map((item) => (
              <Card key={item.slug} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">All work</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {filtered.map((item) => (
              <Card key={item.slug} item={item} />
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-6 text-sm text-slate-600">
              No results. Try a different filter or search term.
            </p>
          ) : null}
        </section>
      </div>
    </main>
  );
}
