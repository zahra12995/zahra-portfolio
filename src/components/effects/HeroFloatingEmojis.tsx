"use client";

import { useScroll } from "framer-motion";
import { FloatingEmoji, type FloatingEmojiSpec } from "./FloatingEmoji";
import { GTM_EMOJIS as E } from "@/lib/emojis";

// Larger and slower than the ambient field elsewhere on the page, per the
// hero-specific brief.
const HERO_FIELD: FloatingEmojiSpec[] = [
  { emoji: E[3], top: "14%", left: "10%", sizeRem: 4.5, duration: 18, delay: 0, behavior: "float", parallaxSpeed: 0.05 },
  { emoji: E[2], top: "68%", left: "86%", sizeRem: 5, duration: 24, delay: 2, behavior: "rotate", parallaxSpeed: 0.03 },
  { emoji: E[11], top: "22%", left: "86%", sizeRem: 3.5, duration: 16, delay: 1, behavior: "pulse", parallaxSpeed: 0.06 },
  { emoji: E[4], top: "78%", left: "8%", sizeRem: 4, duration: 20, delay: 3, behavior: "float", parallaxSpeed: 0.04 },
];

export function HeroFloatingEmojis() {
  const { scrollY } = useScroll();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {HERO_FIELD.map((spec, index) => (
        <FloatingEmoji key={index} scrollY={scrollY} opacity={0.1} {...spec} />
      ))}
    </div>
  );
}
