import { CaseStudyShell } from "../_components/CaseStudyShell";

export default function LifecycleAutomation() {
  return (
    <CaseStudyShell
      eyebrow="Case study"
      title="Lifecycle messaging and automation"
      subtitle="Adoption and retention improvements through clearer journeys"
      summary="I redesigned lifecycle communications to reduce friction, clarify next steps, and make follow-up consistent through lightweight automation and reporting loops."
      metrics={[
        { label: "Adoption lift", value: "+25%" },
        { label: "Response time", value: "-30%" },
        { label: "Automations shipped", value: "6+" },
      ]}
      primaryCta={{ label: "Request redacted samples", href: "/contact" }}
      secondaryCta={{ label: "View work library", href: "/work" }}
      sections={[
        {
          title: "Context",
          children: (
            <p className="leading-relaxed">
              Users needed clearer guidance to understand value quickly and take the next step. Internally, follow-up
              depended on manual processes, which created inconsistency and slowed response.
            </p>
          ),
        },
        {
          title: "What I did",
          children: (
            <ul className="space-y-2">
              <li>• Mapped key user moments and reduced complexity to a few clear next actions.</li>
              <li>• Rewrote onboarding and lifecycle messaging to be action-based and outcome-focused.</li>
              <li>• Implemented automations for handoffs, reminders, and follow-up consistency.</li>
              <li>• Built lightweight reporting to track adoption and response time trends.</li>
            </ul>
          ),
        },
        {
          title: "Why it worked",
          children: (
            <ul className="space-y-2">
              <li>• Clarity reduced hesitation and support load.</li>
              <li>• Automation removed variance and improved trust through consistency.</li>
              <li>• Reporting enabled iteration based on outcomes, not opinions.</li>
            </ul>
          ),
        },
        {
          title: "Artifacts available on request",
          children: (
            <ul className="space-y-2">
              <li>• Redacted onboarding sequence</li>
              <li>• Workflow diagram and automation map</li>
              <li>• Reporting snapshot showing iteration and outcomes</li>
            </ul>
          ),
        },
      ]}
      sidebar={[
        {
          title: "Skills shown",
          items: ["Lifecycle messaging", "Automation and ops", "Journey mapping", "Measurement and iteration"],
        },
        {
          title: "Tools",
          items: ["CRM workflows", "Docs and templates", "Analytics", "Automation tooling"],
        },
      ]}
    />
  );
}
