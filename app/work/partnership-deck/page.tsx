import { CaseStudyShell } from "../_components/CaseStudyShell";

export default function PartnershipDeck() {
  return (
    <CaseStudyShell
      eyebrow="Case study"
      title="Partnership deck and one-pagers"
      subtitle="Clear positioning for donors, foundations, and partners"
      summary="I supported development and partnerships work by creating materials that clarified value, outcomes, and next steps. The focus was alignment, credibility, and easy decision-making for stakeholders."
      primaryCta={{ label: "Request redacted deck samples", href: "/contact" }}
      secondaryCta={{ label: "View work library", href: "/work" }}
      sections={[
        {
          title: "Context",
          children: (
            <p className="leading-relaxed">
              Partners and funders need a clear answer to three questions: what problem you solve, why your approach works,
              and what their support makes possible. Materials should be concise, consistent, and easy to share internally.
            </p>
          ),
        },
        {
          title: "What I built",
          children: (
            <ul className="space-y-2">
              <li>• One-pagers that summarized program value and outcomes.</li>
              <li>• Pitch decks with clear narrative flow and simple visuals.</li>
              <li>• Message consistency across emails, web, and partner outreach.</li>
              <li>• Optional talking points and Q and A notes for meetings.</li>
            </ul>
          ),
        },
        {
          title: "How I structure persuasive materials",
          children: (
            <ul className="space-y-2">
              <li>• Start with the stakes and the audience need.</li>
              <li>• Present outcomes and evidence with plain language.</li>
              <li>• Make the ask specific and make the next step simple.</li>
            </ul>
          ),
        },
        {
          title: "Artifacts available on request",
          children: (
            <ul className="space-y-2">
              <li>• Redacted one-pager and deck examples</li>
              <li>• Message map and slide narrative outline</li>
              <li>• Meeting talking points and follow-up template</li>
            </ul>
          ),
        },
      ]}
      sidebar={[
        {
          title: "Skills shown",
          items: ["Positioning and narrative", "Stakeholder communications", "Editing and clarity", "Basic design sense"],
        },
        {
          title: "Tools",
          items: ["Docs and templates", "Canva", "Slides"],
        },
      ]}
    />
  );
}
