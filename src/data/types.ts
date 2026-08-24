// Shared content shapes. Component code should never need to change when
// only the data in src/data/*.ts is edited.

export interface CtaLink {
  label: string;
  targetId: string;
}

export interface HeroContent {
  name: string;
  title: string;
  taglines: string[];
  bio: string;
  headshotSrc: string;
  headshotAlt: string;
  ctaPrimary: CtaLink;
  ctaSecondary: CtaLink;
}

export type SkillCategoryName =
  | "Built with Claude Code"
  | "List Building & ICP"
  | "Data Orchestration"
  | "Validation"
  | "Sequencing"
  | "Automation"
  | "Content & Design";

export interface SkillTool {
  name: string;
  blurb: string;
}

export interface SkillCategory {
  category: SkillCategoryName;
  icon: string; // lucide-react icon name
  tools: SkillTool[];
}

export type AccentColor = "teal" | "green" | "purple";

export interface Campaign {
  id: string;
  company: string;
  type: string;
  tag: string;
  accent: AccentColor;
  whatIDid: string[];
  results: string[];
}

export interface FlowNode {
  id: string;
  label: string;
  description: string;
  icon: string; // lucide-react icon name
}

export interface AutomationContent {
  title: string;
  description: string;
  nodes: FlowNode[];
  techUsed: string[];
}

export interface TimelineEntry {
  id: string;
  phase: string;
  heading: string;
  body: string[];
}

export interface BringItem {
  icon: string; // lucide-react icon name
  heading: string;
  description: string;
}

export interface ContactInfo {
  heading: string;
  subheading: string;
  linkedinUrl: string;
  email: string;
  availabilityNote: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  url: string;
  ogImage: string;
}
