"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// True only after the client has hydrated. Built on useSyncExternalStore
// (not useEffect+setState) so the flip happens synchronously before paint —
// no extra render commit, and no react-hooks/set-state-in-effect violation.
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
