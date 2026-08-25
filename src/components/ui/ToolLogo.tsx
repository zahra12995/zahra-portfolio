"use client";

import { clsx } from "clsx";
import { useEffect, useState } from "react";

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
// colored initials badge if there's no domain, the logo fails to load, or it
// simply hasn't resolved within a few seconds (a bounded safety net so a
// slow/hanging request never leaves a broken-image icon on screen).
export function ToolLogo({
  name,
  domain,
  className,
}: {
  name: string;
  domain?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">(
    domain ? "loading" : "failed"
  );

  useEffect(() => {
    if (!domain || status !== "loading") return;
    const timeout = setTimeout(() => setStatus((s) => (s === "loading" ? "failed" : s)), 4000);
    return () => clearTimeout(timeout);
  }, [domain, status]);

  if (status === "failed") {
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
    // pattern config needed, and onLoad/onError give us the fallback for free.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt=""
      width={36}
      height={36}
      className={clsx(
        "h-9 w-9 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-surface-border",
        status === "loading" && "opacity-0",
        className
      )}
      onLoad={() => setStatus("loaded")}
      onError={() => setStatus("failed")}
      aria-hidden
    />
  );
}
