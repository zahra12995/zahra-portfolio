"use client";

import { motion } from "framer-motion";
import { ToolLogo } from "@/components/ui/ToolLogo";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import type { SkillTool } from "@/data/types";

export function SkillCard({ tool }: { tool: SkillTool }) {
  // Dragging is desktop-only — on touch it would fight the page's own
  // vertical scroll gesture.
  const isTouch = useIsTouchDevice();

  return (
    <motion.div
      drag={!isTouch}
      dragSnapToOrigin
      dragElastic={0.15}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 22 }}
      whileDrag={{ scale: 1.06, zIndex: 10 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex gap-3 rounded-xl border border-surface-border bg-surface p-4 transition-colors hover:border-teal-500/50"
    >
      {tool.emoji ? (
        <span
          aria-hidden
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-background text-sm shadow-sm ring-1 ring-surface-border"
        >
          {tool.emoji}
        </span>
      ) : null}
      <ToolLogo name={tool.name} domain={tool.domain} logoSrc={tool.logoSrc} />
      <div>
        <p className="font-semibold text-foreground">{tool.name}</p>
        <p className="mt-1 text-sm text-foreground/60 transition-colors group-hover:text-foreground/80">
          {tool.blurb}
        </p>
      </div>
    </motion.div>
  );
}
