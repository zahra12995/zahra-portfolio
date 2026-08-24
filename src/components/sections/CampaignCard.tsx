"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import type { Campaign } from "@/data/types";
import { ACCENT_CLASSES } from "@/lib/constants";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const accent = ACCENT_CLASSES[campaign.accent];

  return (
    <motion.div
      layout
      className={`overflow-hidden rounded-2xl border bg-surface transition-colors ${
        open ? accent.border : "border-surface-border"
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
      >
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge accent={campaign.accent}>{campaign.tag}</Badge>
          </div>
          <h3 className="text-xl font-bold">{campaign.company}</h3>
          <p className="mt-1 text-sm text-foreground/60">{campaign.type}</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="mt-1 shrink-0 text-foreground/50"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-surface-border/80 px-6 pb-6 pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/50">
                What I did
              </p>
              <ul className="mb-5 space-y-2">
                {campaign.whatIDid.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-foreground/80">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${accent.gradient}`} />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground/50">
                Results
              </p>
              <ul className="space-y-1">
                {campaign.results.map((result) => (
                  <li
                    key={result}
                    className="text-sm italic text-foreground/50"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
