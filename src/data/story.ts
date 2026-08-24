/**
 * EDIT THIS FILE to update the "My Story" timeline.
 */
import type { TimelineEntry } from "./types";

export const storyTitle = "From Whiteboard to Clay";

export const timeline: TimelineEntry[] = [
  {
    id: "teacher",
    phase: "Teacher",
    heading: "Whiteboards, not workflows",
    body: [
      "Prepared lessons, managed 30 students, and built systems for learning — before I knew any of that counted as \"systems thinking.\"",
    ],
  },
  {
    id: "the-shift",
    phase: "The Shift",
    heading: "Introduced to GTM",
    body: [
      "Nayab and Taimoor at 7x GTM introduced me to GTM engineering. I said yes before I fully understood what Clay was.",
    ],
  },
  {
    id: "month-1",
    phase: "Month 1",
    heading: "Learning from scratch",
    body: [
      "Learned Clay, AI Ark, and Smartlead from scratch. Lots of tabs open, lots of \"wait, why did that break.\"",
    ],
  },
  {
    id: "month-3",
    phase: "Month 3",
    heading: "First live campaign",
    body: ["Launched my first live campaign. Nervous, then hooked."],
  },
  {
    id: "month-6",
    phase: "Month 6",
    heading: "Running it independently",
    body: [
      "Running full campaign infrastructure for YC-backed clients independently — no more asking \"is this normal?\" every five minutes.",
    ],
  },
];
