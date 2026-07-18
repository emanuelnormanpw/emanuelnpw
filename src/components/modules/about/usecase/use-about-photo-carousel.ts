import { useState } from "react";

import { useDeviceWidth } from "@hooks/use-device-width";

import type { AboutPhoto, UseAboutPhotoCarouselResult } from "../types";

const getLoopedPhotos = (photos: AboutPhoto[]) => [
  ...photos,
  ...photos,
  ...photos,
];

const getPhotoIndex = (trackIndex: number, photosLength: number) =>
  ((trackIndex % photosLength) + photosLength) % photosLength;

const getCenterPhotoOffset = (photosLength: number, isMobile: boolean) => {
  if (isMobile || photosLength <= 1) {
    return 0;
  }

  return 1;
};

export const useAboutPhotoCarousel = (
  photos: AboutPhoto[],
): UseAboutPhotoCarouselResult => {
  const { isMobile } = useDeviceWidth();
  const photosLength = photos.length;
  const loopStartIndex = photos.length;
  const [trackOffset, setTrackOffset] = useState(0);
  const [isTrackResetting, setIsTrackResetting] = useState(false);

  const centerPhotoOffset = getCenterPhotoOffset(photosLength, isMobile);
  const trackIndex = loopStartIndex + trackOffset;
  const activeTrackIndex = trackIndex + centerPhotoOffset;
  const activePhotoIndex = photosLength
    ? getPhotoIndex(activeTrackIndex, photosLength)
    : 0;
  const activePhoto = photos[activePhotoIndex];
  const loopedPhotos = getLoopedPhotos(photos);

  const handleTrackReset = (nextTrackOffset: number) => {
    setIsTrackResetting(true);
    setTrackOffset(nextTrackOffset);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTrackResetting(false);
      });
    });
  };

  const handlePreviousPhoto = () => {
    if (!photosLength) {
      return;
    }

    setTrackOffset((currentOffset) => currentOffset - 1);
  };

  const handleNextPhoto = () => {
    if (!photosLength) {
      return;
    }

    setTrackOffset((currentOffset) => currentOffset + 1);
  };

  const handleTrackTransitionEnd: UseAboutPhotoCarouselResult["handleTrackTransitionEnd"] =
    (event) => {
      if (!photosLength) {
        return;
      }

      if (event.target !== event.currentTarget) {
        return;
      }

    if (trackIndex < loopStartIndex) {
        handleTrackReset(trackOffset + photosLength);
        return;
      }

      if (trackIndex >= loopStartIndex * 2) {
        handleTrackReset(trackOffset - photosLength);
      }
    };

  const handleSelectPhoto = (photoIndex: number) => {
    if (!photosLength) {
      return;
    }

    setTrackOffset(photoIndex - centerPhotoOffset);
  };

  return {
    activePhoto,
    activePhotoIndex,
    activeTrackIndex,
    isTrackResetting,
    loopedPhotos,
    trackIndex,
    handleNextPhoto,
    handlePreviousPhoto,
    handleSelectPhoto,
    handleTrackTransitionEnd,
  };
};
