"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useScrollTo } from "@/hooks/useScrollTo";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

type ButtonProps =
  | (BaseProps & { targetId: string; href?: never })
  | (BaseProps & { href: string; targetId?: never });

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className } = props;
  const scrollTo = useScrollTo();

  const classes = clsx(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary"
      ? "bg-gradient-to-r from-teal-500 via-emerald-500 to-purple-500 text-white shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-purple-500/30"
      : "border border-surface-border bg-surface text-foreground hover:border-teal-500/50",
    className
  );

  if ("href" in props && props.href) {
    return (
      <motion.a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={() => props.targetId && scrollTo(props.targetId)}
      className={classes}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
