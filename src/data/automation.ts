/**
 * EDIT THIS FILE to update the automation showcase's flow steps or copy.
 * Each entry's `nodes` renders in array order, so reordering here reorders
 * the visual flow — no component changes needed. Add a new object to
 * `automations` to add another showcase.
 */
import type { AutomationContent } from "./types";

export const automations: AutomationContent[] = [
  {
    title: "SaaS Funding Alert Automation",
    description:
      "Every morning at 9am, this system automatically parses funding alert emails, extracts company data, structures it into Google Sheets, and pushes each company directly into Clay via webhook — zero manual intervention.",
    nodes: [
      {
        id: "email",
        label: "Daily Email",
        description: "Funding alert lands in Gmail every morning at 9am",
        icon: "Mail",
      },
      {
        id: "parser",
        label: "Apps Script Parser",
        description: "Script parses the email and extracts company data",
        icon: "Code2",
      },
      {
        id: "sheets",
        label: "Google Sheets",
        description: "Extracted data is structured into rows automatically",
        icon: "Table",
      },
      {
        id: "webhook",
        label: "Clay via Webhook",
        description: "Each new row is pushed straight into Clay",
        icon: "Webhook",
      },
      {
        id: "enrichment",
        label: "Enrichment",
        description: "Clay enriches company and contact data automatically",
        icon: "Sparkles",
      },
      {
        id: "ready",
        label: "Campaign Ready",
        description: "Company lands in the outbound queue, fully qualified",
        icon: "Rocket",
      },
    ],
    techUsed: ["Google Apps Script", "Google Sheets API", "Clay Webhook", "Gmail"],
  },
  {
    title: "LinkedIn Content Workflow Automation",
    description:
      "Built an automated LinkedIn content pipeline for 7x GTM. Discovers posts daily, scores them against brand criteria, shortlists top picks, notifies Nayab for approval via Slack, and auto-creates a formatted Google Doc with generated post copy in Taimoor and Nayab's respective voices.",
    nodes: [
      {
        id: "discovery",
        label: "Post Discovery",
        description: "Scans LinkedIn daily for relevant posts",
        icon: "Search",
      },
      {
        id: "scoring",
        label: "Scoring",
        description: "Scores each post against brand criteria",
        icon: "BarChart3",
      },
      {
        id: "shortlist",
        label: "Shortlist",
        description: "Narrows results down to the top picks",
        icon: "ListFilter",
      },
      {
        id: "slack-notification",
        label: "Slack Notification",
        description: "Shortlist is pushed to the team in Slack",
        icon: "MessageSquare",
      },
      {
        id: "nayab-approval",
        label: "Nayab Approval",
        description: "Nayab reviews and approves posts to move forward",
        icon: "CheckCircle2",
      },
      {
        id: "google-doc",
        label: "Google Doc Auto-Created",
        description: "Formatted doc generated with post copy in-voice",
        icon: "FileText",
      },
      {
        id: "zahra-notified",
        label: "Zahra Notified",
        description: "Final ping once the doc is ready to go",
        icon: "Bell",
      },
    ],
    techUsed: ["LinkedIn", "Slack", "Google Docs API", "AI Copy Generation"],
  },
];
