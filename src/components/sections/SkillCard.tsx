"use client";

import { motion } from "framer-motion";
import type { SkillTool } from "@/data/types";

export function SkillCard({ tool }: { tool: SkillTool }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group rounded-xl border border-surface-border bg-surface p-4 transition-colors hover:border-teal-500/50"
    >
      <p className="font-semibold text-foreground">{tool.name}</p>
      <p className="mt-1 text-sm text-foreground/60 transition-colors group-hover:text-foreground/80">
        {tool.blurb}
      </p>
    </motion.div>
  );
}
