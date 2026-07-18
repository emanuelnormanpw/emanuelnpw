import { useEffect, useState } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastY = window.scrollY;
    let frame: number;

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setScrollDirection(currentY > lastY ? "down" : "up");
        setScrollY(currentY);
        lastY = currentY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { scrollY, scrollDirection, isScrolled: scrollY > 10 };
}
