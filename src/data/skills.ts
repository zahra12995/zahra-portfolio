/**
 * EDIT THIS FILE to add/remove tools or change category blurbs.
 * Each tool's `blurb` is the one-liner shown in its hover card. `domain`
 * (optional) pulls a logo from Clearbit (logo.clearbit.com/{domain}) — leave
 * it off for internal projects or generic skills; the card falls back to a
 * colored initials badge automatically. `emoji` is the small corner accent.
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
        emoji: "🤖",
      },
      {
        name: "Portfolio Website",
        blurb: "Designed, built, and shipped this entire site using Claude Code.",
        emoji: "🚀",
      },
      {
        name: "Prospect Research Agent",
        blurb: "Built an AI agent that automates prospect research for agency outbound.",
        emoji: "🎯",
      },
      {
        name: "7x GTM CRM",
        blurb: "Built a custom CRM from scratch to run 7x GTM's internal operations.",
        domain: "7xgtm.com",
        emoji: "📊",
      },
      {
        name: "Video Editing",
        blurb: "Editing and producing video content using Claude Code.",
        emoji: "⚡",
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
        emoji: "🎯",
      },
      {
        name: "Serper.dev",
        blurb: "Real-time search data to enrich signals lists can't see.",
        domain: "serper.dev",
        emoji: "📈",
      },
      {
        name: "Apify",
        blurb: "Scraping the web for the exact data points a campaign needs.",
        domain: "apify.com",
        emoji: "🤖",
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
        emoji: "⚡",
      },
      {
        name: "Prospeo",
        blurb: "Pulling verified emails and phone numbers straight into Clay.",
        domain: "prospeo.io",
        emoji: "📧",
      },
      {
        name: "BetterContact",
        blurb: "Waterfall enrichment to squeeze out contact data others miss.",
        domain: "bettercontact.rocks",
        emoji: "✉️",
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
        emoji: "✅",
      },
      {
        name: "BounceBan",
        blurb: "A second layer of bounce protection for high-stakes sends.",
        domain: "bounceban.com",
        emoji: "🔥",
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
        emoji: "📧",
      },
      {
        name: "Instantly",
        blurb: "Managing warm-up and inbox rotation across sending domains.",
        domain: "instantly.ai",
        emoji: "⚡",
      },
      {
        name: "HeyReach",
        blurb: "LinkedIn outreach running in parallel with email touches.",
        domain: "heyreach.io",
        emoji: "💌",
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
        emoji: "⚡",
      },
      {
        name: "Slack Webhooks",
        blurb: "Pushing real-time campaign alerts straight into Slack.",
        domain: "slack.com",
        emoji: "🔥",
      },
      {
        name: "n8n",
        blurb: "Visual workflows for anything that needs to run on its own.",
        domain: "n8n.io",
        emoji: "🤖",
      },
      {
        name: "Notion",
        blurb: "Managing 7x GTM's ops — docs, processes, and internal systems.",
        domain: "notion.so",
        emoji: "💡",
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
        emoji: "💌",
      },
      {
        name: "LinkedIn Content",
        blurb: "Posts and outreach messaging that build pipeline, not just likes.",
        domain: "linkedin.com",
        emoji: "📈",
      },
      {
        name: "Spintax",
        blurb: "Variation at scale so every send still feels one-to-one.",
        emoji: "🔥",
      },
      {
        name: "Canva",
        blurb: "Campaign graphics, brand templates, client decks, LinkedIn visuals.",
        domain: "canva.com",
        emoji: "💡",
      },
      {
        name: "Claude Artifacts",
        blurb:
          "Interactive web apps, lead scoring tools, post approval systems, video editors, dashboard builders.",
        domain: "anthropic.com",
        emoji: "🚀",
      },
    ],
  },
];
