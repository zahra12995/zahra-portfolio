/**
 * EDIT THIS FILE to update campaign details and results.
 * `results` is a placeholder array — replace each entry with a real metric
 * (meetings booked, reply rate, pipeline generated, etc.) as it comes in.
 */
import type { Campaign } from "./types";

export const campaigns: Campaign[] = [
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
];
