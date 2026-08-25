import type { AccentColor } from "@/data/types";

export const SECTION_IDS = {
  hero: "hero",
  skills: "skills",
  campaigns: "campaigns",
  automation: "automation",
  story: "story",
  bring: "what-i-bring",
  responsibilities: "what-i-handle-at-7x-gtm",
  contact: "contact",
} as const;

export const NAV_LINKS = [
  { label: "Skills", targetId: SECTION_IDS.skills },
  { label: "Campaigns", targetId: SECTION_IDS.campaigns },
  { label: "Automation", targetId: SECTION_IDS.automation },
  { label: "Story", targetId: SECTION_IDS.story },
  { label: "Contact", targetId: SECTION_IDS.contact },
];

// Tailwind class fragments per accent color, kept in one place so campaign
// cards and category badges stay visually consistent.
export const ACCENT_CLASSES: Record<
  AccentColor,
  { text: string; bg: string; border: string; glow: string; gradient: string }
> = {
  teal: {
    text: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    glow: "shadow-[0_0_40px_-12px_theme(colors.teal.500)]",
    gradient: "from-teal-400 to-emerald-500",
  },
  green: {
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_40px_-12px_theme(colors.emerald.500)]",
    gradient: "from-emerald-400 to-green-500",
  },
  purple: {
    text: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    glow: "shadow-[0_0_40px_-12px_theme(colors.purple.500)]",
    gradient: "from-purple-400 to-fuchsia-500",
  },
};

export const BRAND_GRADIENT = "from-teal-400 via-emerald-400 to-purple-500";

// Contextual cursor-follower messages per section. Sections not listed here
// (Story, What I Bring, What I Handle) simply show no message bubble.
export const CURSOR_MESSAGES: Partial<Record<string, string>> = {
  [SECTION_IDS.hero]: "hey there 👋",
  [SECTION_IDS.skills]: "yes I know all of these",
  [SECTION_IDS.campaigns]: "these actually worked btw",
  [SECTION_IDS.automation]: "built this from scratch 🤓",
  [SECTION_IDS.contact]: "I got you 😎",
};

export const CURSOR_IDLE_MESSAGE = "still here...";
export const CURSOR_IDLE_MS = 3000;

// Custom window event name the visible "Hire Me" button dispatches to
// trigger the same confetti + modal as typing "hire me" anywhere on the page.
export const HIRE_ME_EVENT = "trigger-hire-me";
