"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { GradientText } from "@/components/ui/GradientText";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useScrollTo } from "@/hooks/useScrollTo";
import { HIRE_ME_EVENT, NAV_LINKS, SECTION_IDS } from "@/lib/constants";

function triggerHireMe() {
  window.dispatchEvent(new Event(HIRE_ME_EVENT));
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleNavClick = (targetId: string) => {
    scrollTo(targetId);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => handleNavClick(SECTION_IDS.hero)}
          className="text-lg font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
        >
          <GradientText>Zahra</GradientText>
        </button>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.targetId}
              type="button"
              onClick={() => handleNavClick(link.targetId)}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={triggerHireMe}
            className="hidden items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
          >
            Hire Me 🎉
          </button>
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-surface-border/80 sm:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.targetId}
                  type="button"
                  onClick={() => handleNavClick(link.targetId)}
                  className="rounded-lg px-3 py-2 text-left text-sm font-medium text-foreground/70 transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  triggerHireMe();
                  setMenuOpen(false);
                }}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-md"
              >
                Hire Me 🎉
              </button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
