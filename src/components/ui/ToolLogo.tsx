"use client";

import { clsx } from "clsx";
import { useState } from "react";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Tries Clearbit's logo API (logo.clearbit.com/{domain}) and falls back to a
// colored initials badge if there's no domain or the logo fails to load —
// covers both internal projects (no domain) and Clearbit misses (404).
export function ToolLogo({
  name,
  domain,
  className,
}: {
  name: string;
  domain?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!domain || failed) {
    return (
      <span
        className={clsx(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 via-emerald-400 to-purple-500 text-xs font-bold text-white",
          className
        )}
        aria-hidden
      >
        {initials(name)}
      </span>
    );
  }

  return (
    // Plain <img> (not next/image) — external, unoptimized logo, no remote
    // pattern config needed, and onError gives us the fallback for free.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt=""
      width={36}
      height={36}
      className={clsx(
        "h-9 w-9 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-surface-border",
        className
      )}
      onError={() => setFailed(true)}
      aria-hidden
    />
  );
}
