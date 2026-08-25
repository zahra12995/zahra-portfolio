"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { CSSProperties } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type EmojiBehavior = "float" | "rotate" | "pulse";

export interface FloatingEmojiSpec {
  emoji: string;
  top: string;
  left: string;
  sizeRem: number;
  duration: number;
  delay?: number;
  behavior?: EmojiBehavior;
  parallaxSpeed?: number;
}

const ANIM_CLASS: Record<EmojiBehavior, string> = {
  float: "animate-emoji-float",
  rotate: "animate-emoji-rotate",
  pulse: "animate-emoji-pulse",
};

// One decorative emoji: a CSS keyframe (float/rotate/pulse) on the inner
// span, and a scroll-linked parallax offset (Framer Motion) on the outer
// wrapper — kept on separate elements so the two transforms don't fight
// over the same `transform` property.
export function FloatingEmoji({
  emoji,
  top,
  left,
  sizeRem,
  duration,
  delay = 0,
  behavior = "float",
  parallaxSpeed = 0,
  opacity = 0.12,
  scrollY,
}: FloatingEmojiSpec & { opacity?: number; scrollY: MotionValue<number> }) {
  const reducedMotion = usePrefersReducedMotion();
  const y = useTransform(scrollY, (value) => (reducedMotion ? 0 : value * -parallaxSpeed));

  return (
    <motion.div
      aria-hidden
      style={{ position: "absolute", top, left, y }}
      className="pointer-events-none select-none"
    >
      <span
        style={
          {
            display: "inline-block",
            fontSize: `${sizeRem}rem`,
            opacity,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            "--emoji-opacity": opacity,
          } as CSSProperties
        }
        className={ANIM_CLASS[behavior]}
      >
        {emoji}
      </span>
    </motion.div>
  );
}
