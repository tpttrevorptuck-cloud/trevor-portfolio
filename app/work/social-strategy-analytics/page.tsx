import { CaseStudyShell } from "../_components/CaseStudyShell";

export default function SocialStrategyAnalytics() {
  return (
    <CaseStudyShell
      eyebrow="Case study"
      title="Social strategy and analytics"
      subtitle="Testing, reporting, and iteration based on performance"
      summary="I built a social content approach focused on clarity, consistency, and learning. The work combined platform-native storytelling with lightweight testing and reporting to guide iteration."
      primaryCta={{ label: "Request sample posts", href: "/contact" }}
      secondaryCta={{ label: "View work library", href: "/work" }}
      sections={[
        {
          title: "Context",
          children: (
            <p className="leading-relaxed">
              Social channels can become noisy and reactive without a strategy. The goal was to build a repeatable
              approach that improved consistency, strengthened audience connection, and made performance easier to learn from.
            </p>
          ),
        },
        {
          title: "What I did",
          children: (
            <ul className="space-y-2">
              <li>• Defined messaging pillars and content types tied to audience needs.</li>
              <li>• Planned content in a calendar with clear goals and calls to action.</li>
              <li>• Used lightweight testing across hooks, formats, and posting cadence.</li>
              <li>• Reported on performance trends and adjusted based on results.</li>
            </ul>
          ),
        },
        {
          title: "What I track",
          children: (
            <ul className="space-y-2">
              <li>• Engagement quality, not only reach</li>
              <li>• Click behavior and follow-through when relevant</li>
              <li>• Content format performance and retention signals</li>
              <li>• Repeatable patterns that inform the next month</li>
            </ul>
          ),
        },
        {
          title: "Artifacts available on request",
          children: (
            <ul className="space-y-2">
              <li>• Sample content calendar</li>
              <li>• Sample posts across formats</li>
              <li>• Analytics summary and learning notes</li>
            </ul>
          ),
        },
      ]}
      sidebar={[
        {
          title: "Skills shown",
          items: ["Social strategy", "Analytics and reporting", "Testing mindset", "Community tone"],
        },
        {
          title: "Tools",
          items: ["Canva", "Scheduling tools", "Platform analytics"],
        },
      ]}
    />
  );
}
