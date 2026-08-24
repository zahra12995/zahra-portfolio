import { clsx } from "clsx";
import type { AccentColor } from "@/data/types";
import { ACCENT_CLASSES } from "@/lib/constants";

export function Badge({
  children,
  accent = "teal",
  className,
}: {
  children: string;
  accent?: AccentColor;
  className?: string;
}) {
  const classes = ACCENT_CLASSES[accent];
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        classes.text,
        classes.bg,
        classes.border,
        className
      )}
    >
      {children}
    </span>
  );
}
