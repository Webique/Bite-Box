import { useSyncExternalStore } from "react";

function getSnapshot() {
  return !document.referrer;
}

function getServerSnapshot() {
  return false;
}

function subscribe() {
  // No external changes to subscribe to - referrer is static
  return () => {};
}

export function useIsFirstPage(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
