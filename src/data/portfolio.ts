/**
 * EDIT THIS FILE to update hero copy, "What I Bring" cards, and contact info.
 * No component code needs to change for any of the edits below.
 */
import type { BringItem, ContactInfo, HeroContent, SiteMeta } from "./types";
import { SECTION_IDS } from "@/lib/constants";

export const hero: HeroContent = {
  name: "Zahra",
  title: "GTM Engineer",
  taglines: [
    "I build outbound systems",
    "I find your next 100 clients",
    "I turn data into pipeline",
    "I make Clay do things you didn't know it could",
  ],
  bio: "Former teacher turned GTM Engineer. I build Clay-powered outbound systems that find the right buyers, reach them at the right time, and fill pipelines consistently.",
  // PLACEHOLDER: replace with the real headshot once it's ready. Drop the
  // file in /public and point this path at it — no other changes needed.
  headshotSrc: "/headshot.jpg",
  headshotAlt: "Zahra, GTM Engineer at 7x GTM",
  ctaPrimary: { label: "View My Work", targetId: SECTION_IDS.campaigns },
  ctaSecondary: { label: "Let's Connect", targetId: SECTION_IDS.contact },
};

export const whatIBring: BringItem[] = [
  {
    icon: "Target",
    heading: "Technical Precision",
    description:
      "I build lists that are actually clean, qualified, and ready to send.",
  },
  {
    icon: "Network",
    heading: "Campaign Thinking",
    description:
      "I don't just build lists — I understand the full outbound system and how every piece connects.",
  },
  {
    icon: "Zap",
    heading: "Fast Learner",
    description:
      "I went from attendance registers to Clay workflows in 6 months. Give me a tool and I'll figure it out.",
  },
];

export const contact: ContactInfo = {
  heading: "Let's build something together",
  subheading:
    "Have a pipeline problem or an outbound system that needs building? I'd love to hear about it.",
  linkedinUrl: "https://www.linkedin.com/in/zahra-azam-7xgtm/",
  email: "zahra.azam.007@gmail.com",
  availabilityNote:
    "Currently open to GTM Engineer and Outbound Specialist roles.",
};

export const siteMeta: SiteMeta = {
  title: "Zahra — GTM Engineer | 7x GTM",
  description:
    "Former teacher turned GTM Engineer. I build Clay-powered outbound systems that find the right buyers, reach them at the right time, and fill pipelines consistently.",
  url: "https://zahra-azam-portfolio.vercel.app",
  ogImage: "/og-image.png",
};
