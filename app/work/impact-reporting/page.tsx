import { CaseStudyShell } from "../_components/CaseStudyShell";

export default function ImpactReporting() {
  return (
    <CaseStudyShell
      eyebrow="Case study"
      title="Impact reporting and donor updates"
      subtitle="Data to narrative for donors, partners, and stakeholders"
      summary="I translated program activity and outcomes into clear, donor-ready narratives that supported fundraising, partnerships, and stakeholder confidence. The focus was clarity, accuracy, and dignity-first storytelling."
      primaryCta={{ label: "Request redacted samples", href: "/contact" }}
      secondaryCta={{ label: "View work library", href: "/work" }}
      sections={[
        {
          title: "Context",
          children: (
            <p className="leading-relaxed">
              Teams often have strong work happening on the ground, but the story can get lost across raw notes,
              updates, and reporting needs. Donors and partners need clarity, credibility, and a simple narrative that
              connects activity to outcomes.
            </p>
          ),
        },
        {
          title: "What I did",
          children: (
            <ul className="space-y-2">
              <li>• Clarified the audience, the purpose, and the key outcomes the piece needed to prove.</li>
              <li>• Converted inputs into a simple narrative structure, including problem, approach, results, and next steps.</li>
              <li>• Wrote impact summaries, short briefs, and donor updates with consistent tone and messaging.</li>
              <li>• Created lightweight visuals and data callouts to make results easier to understand.</li>
            </ul>
          ),
        },
        {
          title: "How I think about ethical storytelling",
          children: (
            <ul className="space-y-2">
              <li>• Center agency and dignity in how people and communities are represented.</li>
              <li>• Avoid extractive framing and unnecessary detail that does not serve impact or safety.</li>
              <li>• Use language that is accurate, grounded, and proportional to evidence.</li>
            </ul>
          ),
        },
        {
          title: "Artifacts available on request",
          children: (
            <ul className="space-y-2">
              <li>• Redacted donor update and impact summary examples</li>
              <li>• One-pager and brief templates</li>
              <li>• Sample data callouts and visualization approach</li>
            </ul>
          ),
        },
      ]}
      sidebar={[
        {
          title: "Skills shown",
          items: ["Impact narrative", "Donor communications", "Editing and tone", "Basic data visualization"],
        },
        {
          title: "Tools",
          items: ["Docs and templates", "Canva", "Analytics and reporting inputs"],
        },
      ]}
    />
  );
}
