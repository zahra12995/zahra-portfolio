"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { CURSOR_IDLE_MESSAGE, CURSOR_IDLE_MS, CURSOR_MESSAGES, SECTION_IDS } from "@/lib/constants";

const SECTION_IDS_LIST = Object.values(SECTION_IDS);

// Position tracked with motion values (not React state) so mousemove never
// triggers a re-render. Disabled entirely on touch devices and when the
// user asks for reduced motion.
export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [idle, setIdle] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 320, mass: 0.4 });

  const active = !isTouch && !reducedMotion;
  const activeSection = useActiveSection(active ? SECTION_IDS_LIST : []);

  useEffect(() => {
    if (!active) return;

    const resetIdleTimer = () => {
      setIdle(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIdle(true), CURSOR_IDLE_MS);
    };

    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      if (!visible) setVisible(true);
      resetIdleTimer();
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.body.classList.remove("custom-cursor-active");
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active) return null;

  const message = idle ? CURSOR_IDLE_MESSAGE : activeSection ? CURSOR_MESSAGES[activeSection] : undefined;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: springX, y: springY }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-purple-500 mix-blend-difference"
        style={{ opacity: visible ? 0.85 : 0, transition: "opacity 0.2s" }}
      />
      <AnimatePresence>
        {visible && message ? (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 top-4 whitespace-nowrap rounded-full border border-surface-border bg-background px-3 py-1 text-xs font-medium text-foreground shadow-lg"
          >
            {message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
