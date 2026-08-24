/**
 * EDIT THIS FILE to update campaign details and results.
 * `results` is a placeholder array — replace each entry with a real metric
 * (meetings booked, reply rate, pipeline generated, etc.) as it comes in.
 */
import type { Campaign } from "./types";

export const campaigns: Campaign[] = [
  {
    id: "7x-gtm",
    company: "7x GTM",
    type: "In-House Outbound — Client Acquisition",
    tag: "In-House",
    accent: "purple",
    whatIDid: [
      "Owned end-to-end client acquisition for 7x GTM's own outbound",
      "Built and ran the full system — targeting, copy, infrastructure, sequencing",
      "Generated exceptional results driving the agency's own growth",
    ],
    results: ["Add result — e.g. meetings booked, reply rate, pipeline generated"],
  },
  {
    id: "naabu-ai",
    company: "Naabu AI",
    type: "AI Agent Platform",
    tag: "AI-Native",
    accent: "green",
    whatIDid: [
      "Built targeted prospect lists from scratch",
      "Wrote full cold email copy and messaging sequences",
      "Set up complete campaign infrastructure",
      "Configured and launched sending sequences",
    ],
    results: ["Add result — e.g. meetings booked, reply rate, pipeline generated"],
  },
  {
    id: "lumie-studio",
    company: "Lumie Studio",
    type: "Fractional Salesforce & Email Marketing Agency",
    tag: "Agency",
    accent: "teal",
    whatIDid: [
      "Defined targeting and ICP criteria",
      "Wrote outbound copy end-to-end",
      "Built campaign infrastructure from the ground up",
      "Launched and managed the live campaign",
    ],
    results: ["Add result — e.g. meetings booked, reply rate, pipeline generated"],
  },
  {
    id: "linkedin-post-approval-workflow",
    company: "LinkedIn Post Approval Workflow",
    type: "Internal Automation",
    tag: "Automation",
    accent: "green",
    whatIDid: [
      "Designed and built a full LinkedIn content discovery and approval workflow for 7x GTM",
      "Built daily post discovery and scoring",
      "Set up Slack notifications and approval tracking for the team",
      "Automated Google Doc creation with generated post copy",
    ],
    results: ["Add result — e.g. meetings booked, reply rate, pipeline generated"],
  },
];
