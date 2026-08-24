"use client";

import { useCallback } from "react";

export function useScrollTo() {
  return useCallback((targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
}
