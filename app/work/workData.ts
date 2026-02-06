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
];
