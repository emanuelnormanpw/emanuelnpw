import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop" | "wide";

const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
  wide: 1280,
};

function getBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS.wide) return "wide";
  if (width >= BREAKPOINTS.desktop) return "desktop";
  if (width >= BREAKPOINTS.tablet) return "tablet";
  return "mobile";
}

export function useDeviceWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    getBreakpoint(window.innerWidth),
  );

  useEffect(() => {
    let frame: number;

    const handleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const w = window.innerWidth;
        setWidth(w);
        setBreakpoint(getBreakpoint(w));
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return {
    width,
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop" || breakpoint === "wide",
  };
}
