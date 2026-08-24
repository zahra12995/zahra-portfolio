/**
 * EDIT THIS FILE to update the automation showcase's flow steps or copy.
 * The diagram renders `nodes` in array order, so reordering here reorders
 * the visual flow — no component changes needed.
 */
import type { AutomationContent } from "./types";

export const automation: AutomationContent = {
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
};
