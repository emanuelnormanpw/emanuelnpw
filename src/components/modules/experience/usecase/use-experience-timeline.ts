import { useCallback, useEffect, useRef, useState } from "react";

import { useDeviceWidth } from "@hooks/use-device-width";

import type {
  ExperienceItem,
  UseExperienceTimelineResult,
} from "../types";

export const useExperienceTimeline = (
  items: ExperienceItem[],
): UseExperienceTimelineResult => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const programmaticTargetIndexRef = useRef<number | null>(null);
  const { isDesktop } = useDeviceWidth();
  const previousIsDesktopRef = useRef(isDesktop);
  const normalizedActiveIndex =
    activeIndex < items.length ? activeIndex : 0;
  const activeItem = items[normalizedActiveIndex];
  const timelineOrientation = isDesktop ? "vertical" : "horizontal";

  useEffect(
    () => () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    },
    [],
  );

  const scrollToItem = useCallback(
    (index: number, forceInstant = false) => {
      const viewport = viewportRef.current;
      const tab = tabRefs.current[index];

      if (!viewport || !tab) {
        return;
      }

      const viewportRect = viewport.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const behavior =
        forceInstant || prefersReducedMotion ? "auto" : "smooth";

      programmaticTargetIndexRef.current = index;

      if (isDesktop) {
        const tabCenterOffset =
          tabRect.top -
          viewportRect.top +
          viewport.scrollTop +
          tabRect.height / 2;

        viewport.scrollTo({
          top: tabCenterOffset - viewport.clientHeight / 2,
          left: viewport.scrollLeft,
          behavior,
        });
        return;
      }

      const tabCenterOffset =
        tabRect.left -
        viewportRect.left +
        viewport.scrollLeft +
        tabRect.width / 2;

      viewport.scrollTo({
        top: viewport.scrollTop,
        left: tabCenterOffset - viewport.clientWidth / 2,
        behavior,
      });
    },
    [isDesktop],
  );

  useEffect(() => {
    if (previousIsDesktopRef.current === isDesktop) {
      return;
    }

    previousIsDesktopRef.current = isDesktop;
    const frame = window.requestAnimationFrame(() => {
      scrollToItem(normalizedActiveIndex, true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isDesktop, normalizedActiveIndex, scrollToItem]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    scrollToItem(index);
  };

  const handleTimelineInteractionStart = () => {
    programmaticTargetIndexRef.current = null;
  };

  const setViewportRef = (element: HTMLDivElement | null) => {
    viewportRef.current = element;
  };

  const setTabRef =
    (index: number) => (element: HTMLButtonElement | null) => {
      tabRefs.current[index] = element;
    };

  const selectAndFocus = (index: number) => {
    setActiveIndex(index);
    scrollToItem(index);
    tabRefs.current[index]?.focus();
  };

  const handleTimelineScroll = () => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;

      if (!viewport) {
        return;
      }

      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenter = isDesktop
        ? viewportRect.top + viewportRect.height / 2
        : viewportRect.left + viewportRect.width / 2;
      const programmaticTargetIndex =
        programmaticTargetIndexRef.current;
      let closestIndex = normalizedActiveIndex;
      let closestDistance = Number.POSITIVE_INFINITY;

      tabRefs.current.forEach((tab, index) => {
        if (!tab) {
          return;
        }

        const tabRect = tab.getBoundingClientRect();
        const tabCenter = isDesktop
          ? tabRect.top + tabRect.height / 2
          : tabRect.left + tabRect.width / 2;
        const distance = Math.abs(tabCenter - viewportCenter);

        if (distance < closestDistance) {
          closestIndex = index;
          closestDistance = distance;
        }
      });

      if (programmaticTargetIndex !== null) {
        const targetTab = tabRefs.current[programmaticTargetIndex];

        if (targetTab) {
          const targetRect = targetTab.getBoundingClientRect();
          const targetCenter = isDesktop
            ? targetRect.top + targetRect.height / 2
            : targetRect.left + targetRect.width / 2;

          if (Math.abs(targetCenter - viewportCenter) <= 1) {
            programmaticTargetIndexRef.current = null;
          }
        }

        setActiveIndex(programmaticTargetIndex);
        scrollFrameRef.current = null;
        return;
      }

      setActiveIndex(closestIndex);
      scrollFrameRef.current = null;
    });
  };

  const handleTimelineKeyDown: UseExperienceTimelineResult["handleTimelineKeyDown"] =
    (event, index) => {
      if (items.length === 0) {
        return;
      }

      if (
        (isDesktop && event.key === "ArrowDown") ||
        (!isDesktop && event.key === "ArrowRight")
      ) {
        event.preventDefault();
        selectAndFocus((index + 1) % items.length);
      }

      if (
        (isDesktop && event.key === "ArrowUp") ||
        (!isDesktop && event.key === "ArrowLeft")
      ) {
        event.preventDefault();
        selectAndFocus((index - 1 + items.length) % items.length);
      }

      if (event.key === "Home") {
        event.preventDefault();
        selectAndFocus(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        selectAndFocus(items.length - 1);
      }
    };

  return {
    activeIndex: normalizedActiveIndex,
    activeItem,
    handleSelect,
    handleTimelineInteractionStart,
    handleTimelineScroll,
    handleTimelineKeyDown,
    setViewportRef,
    setTabRef,
    timelineOrientation,
  };
};
