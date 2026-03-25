"use client";

import { useEffect } from "react";

/**
 * Forces the browser scroll position to the top on mount.
 * Useful when client-side navigation preserves/restores scroll position.
 */
export function ScrollToTop() {
  useEffect(() => {
    // Two frames to ensure the page has committed layout.
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    });
  }, []);

  return null;
}

