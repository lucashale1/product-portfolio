"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Next.js can preserve/restore scroll position on client navigation.
 * This forces the window back to the very top on each route change.
 */
export function ScrollToTopOnNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    // If a hash is present, let any hash-based anchor logic handle it.
    if (window.location.hash) return;

    // Scroll restoration can sometimes "win" if we only do a single call.
    // Do a couple of frames to ensure we end up at (0, 0).
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    });
  }, [pathname]);

  return null;
}

