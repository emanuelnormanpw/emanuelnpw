import type { TransitionEvent } from "react";

export interface AboutPhoto {
  src: string;
  alt: string;
  title: string;
  href?: string;
}

export interface UseAboutPhotoCarouselResult {
  activePhoto?: AboutPhoto;
  activePhotoIndex: number;
  activeTrackIndex: number;
  isTrackResetting: boolean;
  loopedPhotos: AboutPhoto[];
  trackIndex: number;
  handleNextPhoto: () => void;
  handlePreviousPhoto: () => void;
  handleSelectPhoto: (photoIndex: number) => void;
  handleTrackTransitionEnd: (event: TransitionEvent<HTMLDivElement>) => void;
}

export interface AboutPhotoCarouselProps {
  photos: AboutPhoto[];
}
