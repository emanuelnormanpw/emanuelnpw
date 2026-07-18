import { useEffect, useRef } from "react";

import Lenis from "lenis";

export interface UseLenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
  syncTouch?: boolean;
}

/**
 * Initialises a Lenis smooth-scroll instance and drives it with
 * requestAnimationFrame. Returns the instance so callers can call
 * lenis.scrollTo() or lenis.stop() if needed.
 */
export function useLenis(options: UseLenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: options.duration ?? 1.2,
      easing:
        options.easing ?? ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      smoothWheel: options.smoothWheel ?? true,
      syncTouch: options.syncTouch ?? false,
    });

    lenisRef.current = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [
    options.duration,
    options.easing,
    options.smoothWheel,
    options.syncTouch,
  ]);

  return lenisRef;
}
