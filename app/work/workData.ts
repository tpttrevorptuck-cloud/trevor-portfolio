export type WorkPillar = "Lifecycle" | "Campaigns" | "Systems";

export type WorkItem = {
  slug: string;
  title: string;
  org: string;
  pillar: WorkPillar;
  tags: string[];
  summary: string;
  href: string;
  impactPdf?: string;
  featured?: boolean;
};

export const workItems: WorkItem[] = [
  {
    slug: "1000-gretas",
    title: "1000 Gretas",
    org: "Campaigns and donor storytelling",
    pillar: "Campaigns",
    tags: ["Donor storytelling", "Digital campaigns", "Content strategy"],
    summary:
      "Digital campaigns and donor storytelling that increased engagement and improved the supporter journey.",
    href: "/work/1000-gretas",
    impactPdf: "/Impact_Brief_1000Gretas.pdf",
    featured: true,
  },
  {
    slug: "unlikely-farms",
    title: "Unlikely Farms",
    org: "Community and retention",
    pillar: "Systems",
    tags: ["Community communications", "Retention", "Weekly cadence"],
    summary:
      "Weekly communications systems supporting retention, coordination, and partner trust.",
    href: "/work/unlikely-farms",
    impactPdf: "/Impact_Brief_UnlikelyFarms.pdf",
    featured: true,
  },
  {
    slug: "voltus",
    title: "Voltus",
    org: "Lifecycle and systems",
    pillar: "Lifecycle",
    tags: ["Onboarding", "Lifecycle messaging", "Automation"],
    summary:
      "Onboarding and automation that improved adoption and responsiveness through clearer journeys.",
    href: "/work/voltus",
    impactPdf: "/Impact_Brief_Voltus.pdf",
    featured: true,
    
  },
  {
    slug: "lifecycle-automation",
    title: "Lifecycle messaging and automation",
    org: "Adoption and retention",
    pillar: "Lifecycle",
    tags: ["Lifecycle messaging", "Automation", "Reporting"],
    summary: "Clear journeys and automation that improved adoption and reduced response time.",
    href: "/work/lifecycle-automation",
    featured: true,
  },
  {
    slug: "impact-reporting",
    title: "Impact reporting and donor updates",
    org: "Data to narrative",
    pillar: "Campaigns",
    tags: ["Impact reporting", "Donor communications", "Storytelling"],
    summary: "Turned program results into donor-ready narratives and summaries with clear outcomes.",
    href: "/work/impact-reporting",
  },
  {
    slug: "content-ops-system",
    title: "Content operations system",
    org: "Calendars, briefs, approvals",
    pillar: "Systems",
    tags: ["Content ops", "Templates", "Project management"],
    summary: "Built a content operating system that improved consistency, speed, and stakeholder alignment.",
    href: "/work/content-ops-system",
  },
  {
    slug: "social-strategy-analytics",
    title: "Social strategy and analytics",
    org: "Testing and learning",
    pillar: "Campaigns",
    tags: ["Social strategy", "Analytics", "Experimentation"],
    summary: "Trend-aware content strategy with testing, reporting, and iteration based on performance.",
    href: "/work/social-strategy-analytics",
  },
  {
    slug: "partnership-deck",
    title: "Partnership deck and one-pagers",
    org: "Positioning and fundraising support",
    pillar: "Campaigns",
    tags: ["Pitch decks", "One-pagers", "Partner communications"],
    summary: "Built partner-ready materials that clarified value, outcomes, and next steps.",
    href: "/work/partnership-deck",
  },
];
