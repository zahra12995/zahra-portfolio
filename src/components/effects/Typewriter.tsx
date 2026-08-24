"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useTypewriter } from "@/hooks/useTypewriter";

export function Typewriter({ phrases }: { phrases: string[] }) {
  const reducedMotion = usePrefersReducedMotion();
  const text = useTypewriter(phrases, { disabled: reducedMotion, pauseMs: 1800 });

  if (reducedMotion) {
    return (
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    );
  }

  return (
    <span>
      {text}
      <span className="animate-caret ml-0.5 inline-block w-[2px] translate-y-0.5 bg-current align-middle">
        &nbsp;
      </span>
    </span>
  );
}
