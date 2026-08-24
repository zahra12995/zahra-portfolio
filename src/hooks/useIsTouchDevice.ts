"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(pointer: coarse)";

// Checks pointer coarseness (+ touch capability), not viewport width — a
// touch laptop or a foldable can be wide but still have no real "hover" cursor.
function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return (
    window.matchMedia(QUERY).matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
}

function getServerSnapshot() {
  return false;
}

export function useIsTouchDevice(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
