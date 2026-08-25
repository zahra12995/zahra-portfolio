"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SECTION_IDS } from "@/lib/constants";

const TOAST_MESSAGES: Record<string, string> = {
  [SECTION_IDS.skills]: "✅ Lead list cleaned — 847 valid emails",
  [SECTION_IDS.campaigns]: "📧 New positive reply received!",
  [SECTION_IDS.automation]: "🔥 Campaign live — 0 manual steps",
  [SECTION_IDS.contact]: "☕ Zahra is probably building a Clay table rn",
};

const DISMISS_MS = 3000;
const COOLDOWN_MS = 6000; // avoid re-firing on quick scroll-jitter near a boundary

interface Toast {
  id: number;
  message: string;
}

export function ScrollToastNotifications() {
  const reducedMotion = usePrefersReducedMotion();
  const [toasts, setToasts] = useState<Toast[]>([]);
  const lastFired = useRef<Map<string, number>>(new Map());
  const nextId = useRef(0);

  useEffect(() => {
    if (reducedMotion) return;

    const ids = Object.keys(TOAST_MESSAGES);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          const now = Date.now();
          const last = lastFired.current.get(id) ?? 0;
          if (now - last < COOLDOWN_MS) continue;
          lastFired.current.set(id, now);

          const toastId = nextId.current++;
          setToasts((current) => [...current, { id: toastId, message: TOAST_MESSAGES[id] }]);
          setTimeout(() => {
            setToasts((current) => current.filter((t) => t.id !== toastId));
          }, DISMISS_MS);
        }
      },
      { threshold: 0.4 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-xl border border-surface-border bg-surface px-4 py-3 text-sm font-medium text-foreground shadow-lg"
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
