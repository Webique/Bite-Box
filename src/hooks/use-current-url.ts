import { useSyncExternalStore } from "react";

function getSnapshot() {
  return window.location.href;
}

function getServerSnapshot() {
  return "/";
}

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

export function useCurrentUrl() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
