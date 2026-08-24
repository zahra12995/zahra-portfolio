"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useHasMounted } from "@/hooks/useHasMounted";
import { GradientText } from "@/components/ui/GradientText";

const SESSION_KEY = "zahra-portfolio-loaded";

export function LoadingScreen() {
  const mounted = useHasMounted();
  const reducedMotion = usePrefersReducedMotion();
  const [dismissed, setDismissed] = useState(false);

  const alreadyShown = mounted && sessionStorage.getItem(SESSION_KEY) === "1";
  const shouldShow = mounted && !reducedMotion && !alreadyShown && !dismissed;

  useEffect(() => {
    if (!mounted || reducedMotion || alreadyShown) return;
    const timer = setTimeout(() => {
      setDismissed(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 1000);
    return () => clearTimeout(timer);
  }, [mounted, reducedMotion, alreadyShown]);

  return (
    <AnimatePresence>
      {shouldShow ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold tracking-tight"
          >
            <GradientText>Zahra</GradientText>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
