"use client";

import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useScrollTo } from "@/hooks/useScrollTo";
import { SECTION_IDS } from "@/lib/constants";

const TRIGGER_PHRASE = "hire me";

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
}

export function HireMeEasterEgg() {
  const [open, setOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const scrollTo = useScrollTo();

  useEffect(() => {
    let buffer = "";

    const handleKeydown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) return;
      if (event.key.length !== 1) return; // ignore modifier/arrow/etc. keys

      buffer = (buffer + event.key.toLowerCase()).slice(-TRIGGER_PHRASE.length);
      if (buffer === TRIGGER_PHRASE) {
        buffer = "";
        setOpen(true);
        const particleCount = reducedMotion ? 40 : 140;
        confetti({
          particleCount,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#2dd4bf", "#34d399", "#a855f7"],
        });
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [reducedMotion]);

  const handleClose = () => setOpen(false);

  const handleCta = () => {
    setOpen(false);
    scrollTo(SECTION_IDS.contact);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="max-w-sm rounded-2xl border border-surface-border bg-background p-8 text-center shadow-2xl"
          >
            <p className="text-lg font-bold">great idea actually 🎉</p>
            <button
              type="button"
              onClick={handleCta}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              let&apos;s make it happen →
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
