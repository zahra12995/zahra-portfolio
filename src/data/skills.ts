/**
 * EDIT THIS FILE to add/remove tools or change category blurbs.
 * Each tool's `blurb` is the one-liner shown in its hover card. `domain`
 * (optional) pulls a logo from Clearbit (logo.clearbit.com/{domain}) — leave
 * it off for internal projects or generic skills; the card falls back to a
 * colored initials badge automatically.
 */
import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    // Kept first — this is the headline skill, not just another tool.
    category: "Built with Claude Code",
    icon: "Bot",
    tools: [
      {
        name: "Claude Code",
        blurb:
          "Building fully functional software by directing AI end-to-end — not just prompting for snippets.",
        domain: "anthropic.com",
      },
      {
        name: "Portfolio Website",
        blurb: "Designed, built, and shipped this entire site using Claude Code.",
      },
      {
        name: "Prospect Research Agent",
        blurb: "Built an AI agent that automates prospect research for agency outbound.",
      },
      {
        name: "7x GTM CRM",
        blurb: "Built a custom CRM from scratch to run 7x GTM's internal operations.",
        domain: "7xgtm.com",
      },
      {
        name: "Video Editing",
        blurb: "Editing and producing video content using Claude Code.",
      },
    ],
  },
  {
    category: "List Building & ICP",
    icon: "Crosshair",
    tools: [
      {
        name: "AI Ark",
        blurb: "Finding and scoring accounts that actually match the ICP.",
      },
      {
        name: "Serper.dev",
        blurb: "Real-time search data to enrich signals lists can't see.",
        domain: "serper.dev",
      },
      {
        name: "Apify",
        blurb: "Scraping the web for the exact data points a campaign needs.",
        domain: "apify.com",
      },
    ],
  },
  {
    category: "Data Orchestration",
    icon: "Workflow",
    tools: [
      {
        name: "Clay",
        blurb: "The backbone — where every enrichment and workflow comes together.",
        domain: "clay.com",
      },
      {
        name: "Prospeo",
        blurb: "Pulling verified emails and phone numbers straight into Clay.",
        domain: "prospeo.io",
      },
      {
        name: "BetterContact",
        blurb: "Waterfall enrichment to squeeze out contact data others miss.",
        domain: "bettercontact.rocks",
      },
    ],
  },
  {
    category: "Validation",
    icon: "ShieldCheck",
    tools: [
      {
        name: "MillionVerifier",
        blurb: "Catching invalid emails before they ever hurt deliverability.",
        domain: "millionverifier.com",
      },
      {
        name: "BounceBan",
        blurb: "A second layer of bounce protection for high-stakes sends.",
        domain: "bounceban.com",
      },
    ],
  },
  {
    category: "Sequencing",
    icon: "Send",
    tools: [
      {
        name: "Smartlead",
        blurb: "Running high-volume cold email sequences that stay out of spam.",
        domain: "smartlead.ai",
      },
      {
        name: "Instantly",
        blurb: "Managing warm-up and inbox rotation across sending domains.",
        domain: "instantly.ai",
      },
      {
        name: "HeyReach",
        blurb: "LinkedIn outreach running in parallel with email touches.",
        domain: "heyreach.io",
      },
    ],
  },
  {
    category: "Automation",
    icon: "Cog",
    tools: [
      {
        name: "Google Apps Script",
        blurb: "Custom scripts that connect Gmail, Sheets, and Clay together.",
        domain: "google.com",
      },
      {
        name: "Slack Webhooks",
        blurb: "Pushing real-time campaign alerts straight into Slack.",
        domain: "slack.com",
      },
      {
        name: "n8n",
        blurb: "Visual workflows for anything that needs to run on its own.",
        domain: "n8n.io",
      },
      {
        name: "Notion",
        blurb: "Managing 7x GTM's ops — docs, processes, and internal systems.",
        domain: "notion.so",
      },
    ],
  },
  {
    category: "Content & Design",
    icon: "PenLine",
    tools: [
      {
        name: "Cold Email Copywriting",
        blurb: "Writing copy that sounds human and gets a reply.",
      },
      {
        name: "LinkedIn Content",
        blurb: "Posts and outreach messaging that build pipeline, not just likes.",
        domain: "linkedin.com",
      },
      {
        name: "Spintax",
        blurb: "Variation at scale so every send still feels one-to-one.",
      },
      {
        name: "Canva",
        blurb: "Campaign graphics, brand templates, client decks, LinkedIn visuals.",
        domain: "canva.com",
      },
      {
        name: "Claude Artifacts",
        blurb:
          "Interactive web apps, lead scoring tools, post approval systems, video editors, dashboard builders.",
        domain: "anthropic.com",
      },
    ],
  },
];
