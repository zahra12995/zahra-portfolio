import { clsx } from "clsx";
import type { ReactNode } from "react";
import { BRAND_GRADIENT } from "@/lib/constants";

export function GradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "bg-gradient-to-r bg-clip-text text-transparent",
        BRAND_GRADIENT,
        className
      )}
    >
      {children}
    </span>
  );
}
