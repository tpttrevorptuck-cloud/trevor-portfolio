import { CaseStudyShell } from "../_components/CaseStudyShell";

export default function ContentOpsSystem() {
  return (
    <CaseStudyShell
      eyebrow="Case study"
      title="Content operations system"
      subtitle="Calendars, briefs, approvals, and reporting loops"
      summary="I built a lightweight content operating system that helped teams ship consistently, reduce missed deadlines, and align stakeholders without adding bureaucracy."
      primaryCta={{ label: "Request templates", href: "/contact" }}
      secondaryCta={{ label: "View work library", href: "/work" }}
      sections={[
        {
          title: "Context",
          children: (
            <p className="leading-relaxed">
              Content quality often suffers when process is unclear. Stakeholders have different expectations, timelines
              slip, and work becomes reactive. The goal was to create a simple system that made execution predictable.
            </p>
          ),
        },
        {
          title: "What I built",
          children: (
            <ul className="space-y-2">
              <li>• A content calendar that connected dates to goals, audiences, and owners.</li>
              <li>• A campaign brief template that reduced ambiguity and rework.</li>
              <li>• A review and approval workflow with clear checkpoints.</li>
              <li>• A reporting cadence that highlighted what worked and what to test next.</li>
            </ul>
          ),
        },
        {
          title: "Operating principles",
          children: (
            <ul className="space-y-2">
              <li>• Simple beats perfect. Teams should adopt it quickly.</li>
              <li>• Reduce rework by clarifying audience, goal, and CTA early.</li>
              <li>• Measure a few signals consistently and iterate with discipline.</li>
            </ul>
          ),
        },
        {
          title: "Artifacts available on request",
          children: (
            <ul className="space-y-2">
              <li>• Content calendar structure and example week</li>
              <li>• Brief and approvals templates</li>
              <li>• Weekly reporting snapshot</li>
            </ul>
          ),
        },
      ]}
      sidebar={[
        {
          title: "Skills shown",
          items: ["Project management", "Stakeholder alignment", "Content strategy", "Reporting cadence"],
        },
        {
          title: "Tools",
          items: ["Docs and templates", "Calendar tooling", "Canva", "Analytics"],
        },
      ]}
    />
  );
}
