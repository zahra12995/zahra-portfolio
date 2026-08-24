import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { TimelineEntry } from "@/data/types";

export function TimelineItem({
  entry,
  isLast,
}: {
  entry: TimelineEntry;
  isLast: boolean;
}) {
  return (
    <RevealOnScroll as="li" className="relative flex gap-6 pb-10 last:pb-0">
      <div className="flex flex-col items-center">
        <span className="flex h-3 w-3 shrink-0 rounded-full bg-gradient-to-r from-teal-400 to-purple-500" />
        {!isLast ? (
          <span className="mt-2 w-px flex-1 bg-gradient-to-b from-teal-400/40 to-purple-500/10" />
        ) : null}
      </div>

      <div className="pb-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
          {entry.phase}
        </p>
        <h3 className="mt-1 text-lg font-bold">{entry.heading}</h3>
        {entry.body.map((paragraph) => (
          <p key={paragraph} className="mt-2 text-sm text-foreground/70 sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </RevealOnScroll>
  );
}
