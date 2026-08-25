"use client";

import { useScroll } from "framer-motion";
import { FloatingEmoji, type FloatingEmojiSpec } from "./FloatingEmoji";
import { GTM_EMOJIS as E } from "@/lib/emojis";

// Hand-placed (not random) so server and client render identically — no
// hydration mismatch risk. Positions are percentages of the full page
// height/width, spread across the whole scroll length.
const FIELD: FloatingEmojiSpec[] = [
  { emoji: E[2], top: "3%", left: "6%", sizeRem: 1.5, duration: 10, delay: 0, behavior: "float", parallaxSpeed: 0.03 },
  { emoji: E[4], top: "9%", left: "92%", sizeRem: 1.25, duration: 8, delay: 1, behavior: "pulse", parallaxSpeed: 0.05 },
  { emoji: E[8], top: "16%", left: "48%", sizeRem: 2, duration: 14, delay: 2, behavior: "rotate", parallaxSpeed: 0.02 },
  { emoji: E[0], top: "24%", left: "14%", sizeRem: 1.75, duration: 11, delay: 0.5, behavior: "float", parallaxSpeed: 0.06 },
  { emoji: E[11], top: "30%", left: "80%", sizeRem: 2.25, duration: 13, delay: 1.5, behavior: "pulse", parallaxSpeed: 0.04 },
  { emoji: E[6], top: "38%", left: "92%", sizeRem: 1.5, duration: 9, delay: 0, behavior: "float", parallaxSpeed: 0.08 },
  { emoji: E[10], top: "44%", left: "5%", sizeRem: 1.25, duration: 12, delay: 2, behavior: "rotate", parallaxSpeed: 0.03 },
  { emoji: E[1], top: "52%", left: "55%", sizeRem: 1.5, duration: 10, delay: 1, behavior: "float", parallaxSpeed: 0.05 },
  { emoji: E[5], top: "58%", left: "88%", sizeRem: 2, duration: 15, delay: 0, behavior: "pulse", parallaxSpeed: 0.02 },
  { emoji: E[9], top: "64%", left: "10%", sizeRem: 1.75, duration: 9, delay: 2.5, behavior: "float", parallaxSpeed: 0.07 },
  { emoji: E[3], top: "70%", left: "45%", sizeRem: 2.5, duration: 16, delay: 0.5, behavior: "rotate", parallaxSpeed: 0.04 },
  { emoji: E[7], top: "76%", left: "80%", sizeRem: 1.25, duration: 8, delay: 1.5, behavior: "float", parallaxSpeed: 0.06 },
  { emoji: E[2], top: "82%", left: "20%", sizeRem: 1.5, duration: 11, delay: 0, behavior: "pulse", parallaxSpeed: 0.03 },
  { emoji: E[8], top: "88%", left: "60%", sizeRem: 1.75, duration: 13, delay: 2, behavior: "float", parallaxSpeed: 0.05 },
  { emoji: E[4], top: "94%", left: "8%", sizeRem: 1.25, duration: 9, delay: 1, behavior: "rotate", parallaxSpeed: 0.02 },
  { emoji: E[11], top: "3%", left: "72%", sizeRem: 1.5, duration: 12, delay: 0.5, behavior: "float", parallaxSpeed: 0.04 },
  { emoji: E[6], top: "46%", left: "70%", sizeRem: 1.25, duration: 10, delay: 1.5, behavior: "pulse", parallaxSpeed: 0.06 },
  { emoji: E[0], top: "60%", left: "35%", sizeRem: 1.5, duration: 14, delay: 0, behavior: "rotate", parallaxSpeed: 0.03 },
];

export function FloatingEmojiField() {
  const { scrollY } = useScroll();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {FIELD.map((spec, index) => (
        <FloatingEmoji key={index} scrollY={scrollY} opacity={0.12} {...spec} />
      ))}
    </div>
  );
}
