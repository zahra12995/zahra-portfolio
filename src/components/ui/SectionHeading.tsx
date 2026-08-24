import type { ReactNode } from "react";
import { GradientText } from "./GradientText";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <GradientText>{title}</GradientText>
      </h2>
      {description ? (
        <p className="mt-4 text-base text-foreground/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
