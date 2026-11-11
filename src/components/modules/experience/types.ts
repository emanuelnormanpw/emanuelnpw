import type { KeyboardEvent } from "react";

export interface ExperienceItem {
  id: string;
  startYear: string;
  role: string;
  company: string;
  summary: string;
}

export interface ExperienceProps {
  items?: ExperienceItem[];
}

export interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export interface UseExperienceTimelineResult {
  activeIndex: number;
  activeItem?: ExperienceItem;
  handleSelect: (index: number) => void;
  handleTimelineInteractionStart: () => void;
  handleTimelineScroll: () => void;
  handleTimelineKeyDown: (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => void;
  setViewportRef: (element: HTMLDivElement | null) => void;
  setTabRef: (
    index: number,
  ) => (element: HTMLButtonElement | null) => void;
  timelineOrientation: "horizontal" | "vertical";
}
