"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function SectionDivider({ emoji }: { emoji: string }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative flex items-center justify-center py-2" aria-hidden>
      <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <motion.span
        className="absolute bg-background px-4 text-xl"
        animate={reducedMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {emoji}
      </motion.span>
    </div>
  );
}
