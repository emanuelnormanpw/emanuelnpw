import { css } from "@emotion/react";

import { COLORS, RADII, SPACING, TRANSITIONS } from "@styles/tokens";
import { media } from "@styles/mixins";

export const aboutSectionCx = css`
  padding: ${SPACING.lg} ${SPACING.md};

  @media (max-width: 22.5rem) {
    padding: ${SPACING.md} 0.75rem;
  }

  ${media.tablet} {
    padding: ${SPACING.xl} ${SPACING.lg};
  }

  .about-inner {
    max-width: 80rem;
    margin: 0 auto;
    background: ${COLORS.surfaceDark};
    border-radius: ${RADII.section};
    padding: ${SPACING.xl} ${SPACING.lg};
    display: flex;
    flex-direction: column;
    gap: ${SPACING.xl};

    @media (max-width: 22.5rem) {
      border-radius: 1rem;
      padding: ${SPACING.lg} ${SPACING.md};
      gap: ${SPACING.lg};
    }

    ${media.tablet} {
      padding: ${SPACING.xxl};
    }
  }

  .about-label {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
    margin-bottom: ${SPACING.xs};
  }

  .about-tagline {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.45);
    font-weight: 400;
    margin-left: ${SPACING.md};
  }

  .about-tagline-heading {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 300;
    letter-spacing: -0.04em;
    margin: 0;
    line-height: 1.1;
    color: #ffffff;
  }

  .about-grid {
    display: flex;
    flex-direction: column;
    gap: ${SPACING.xl};
  }

  .about-image {
    border-radius: ${RADII.card};
    height: 100%;
    object-fit: cover;
    display: block;
    background: linear-gradient(135deg, #404040 0%, #262626 100%);
  }

  .about-content {
    display: flex;
    flex-direction: column;
    gap: ${SPACING.lg};

    ${media.desktop} {
      flex-direction: row;
      gap: ${SPACING.xl};
      align-items: flex-start;
    }
  }

  .about-body-group {
    display: flex;
    flex-direction: column;
    gap: ${SPACING.md};
  }

  .about-heading {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 400;
    letter-spacing: -0.03em;
    color: ${COLORS.textInverse};
    line-height: 1.3;
    margin: 0;
  }

  .about-body {
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.7;
    margin: 0;
  }

  .about-stats-grid {
    width: 100%;
  }

  .about-photo-carousel {
    background: rgba(255, 255, 255, 0.06);
    border-radius: ${RADII.card};
    border: 0.0625rem solid rgba(255, 255, 255, 0.1);
    contain: layout paint;
    overflow: hidden;
  }

  .about-photo-viewport {
    --about-carousel-gap: ${SPACING.sm};
    --about-carousel-step: calc(100% + var(--about-carousel-gap));

    overflow: hidden;
    padding: ${SPACING.sm};

    ${media.tablet} {
      --about-carousel-step: calc(
        ((100% - (var(--about-carousel-gap) * 2)) / 3) +
          var(--about-carousel-gap)
      );
    }
  }

  .about-photo-track {
    display: flex;
    gap: var(--about-carousel-gap);
    transform: translate3d(0, 0, 0);
    transition: transform 520ms ease;
    will-change: transform;

    &--resetting {
      transition: none;
    }

    &--index-0 {
      transform: translate3d(0, 0, 0);
    }

    &--index-1 {
      transform: translate3d(calc(var(--about-carousel-step) * -1), 0, 0);
    }

    &--index-2 {
      transform: translate3d(calc(var(--about-carousel-step) * -2), 0, 0);
    }

    &--index-3 {
      transform: translate3d(calc(var(--about-carousel-step) * -3), 0, 0);
    }

    &--index-4 {
      transform: translate3d(calc(var(--about-carousel-step) * -4), 0, 0);
    }

    &--index-5 {
      transform: translate3d(calc(var(--about-carousel-step) * -5), 0, 0);
    }

    &--index-6 {
      transform: translate3d(calc(var(--about-carousel-step) * -6), 0, 0);
    }

    &--index-7 {
      transform: translate3d(calc(var(--about-carousel-step) * -7), 0, 0);
    }

    &--index-8 {
      transform: translate3d(calc(var(--about-carousel-step) * -8), 0, 0);
    }

    &--index-9 {
      transform: translate3d(calc(var(--about-carousel-step) * -9), 0, 0);
    }

    &--index-10 {
      transform: translate3d(calc(var(--about-carousel-step) * -10), 0, 0);
    }

    &--index-11 {
      transform: translate3d(calc(var(--about-carousel-step) * -11), 0, 0);
    }

    &--index-12 {
      transform: translate3d(calc(var(--about-carousel-step) * -12), 0, 0);
    }

    &--index-13 {
      transform: translate3d(calc(var(--about-carousel-step) * -13), 0, 0);
    }

    &--index-14 {
      transform: translate3d(calc(var(--about-carousel-step) * -14), 0, 0);
    }
  }

  .about-photo-frame {
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: calc(${RADII.card} - 0.25rem);
    flex: 0 0 100%;
    max-height: 25rem;
    overflow: hidden;
    background: linear-gradient(135deg, #404040 0%, #262626 100%);
    transform: translateZ(0);

    ${media.tablet} {
      flex-basis: calc((100% - (var(--about-carousel-gap) * 2)) / 3);
    }
  }

  .about-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    display: block;
  }

  .about-carousel-controls {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: ${SPACING.sm};
    padding: ${SPACING.md};

    @media (max-width: 22.5rem) {
      grid-template-columns: auto minmax(0, 1fr) auto;
      gap: 0.375rem;
      padding: 0.75rem;
    }
  }

  .about-carousel-button {
    border: 0.0625rem solid rgba(255, 255, 255, 0.16);
    border-radius: ${RADII.pill};
    background: rgba(255, 255, 255, 0.08);
    color: ${COLORS.textInverse};
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    line-height: 1;
    padding: 0.625rem 0.875rem;
    text-transform: uppercase;
    transition:
      background ${TRANSITIONS.base},
      border-color ${TRANSITIONS.base};

    @media (max-width: 22.5rem) {
      padding: 0.5rem 0.625rem;
      font-size: 0.6875rem;
      letter-spacing: 0.04em;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.14);
      border-color: rgba(255, 255, 255, 0.28);
    }
  }

  .about-carousel-status {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
    text-align: center;

    span {
      color: rgba(255, 255, 255, 0.45);
      font-size: 0.75rem;
      letter-spacing: 0.06em;
      line-height: 1.3;
      overflow-wrap: anywhere;
      text-transform: uppercase;
      white-space: normal;

      &:first-of-type {
        color: rgba(255, 255, 255, 0.78);
      }

      @media (max-width: 22.5rem) {
        font-size: 0.6875rem;
        letter-spacing: 0.04em;
      }
    }
  }

  .about-carousel-link {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    border: 0.0625rem solid rgba(255, 255, 255, 0.16);
    border-radius: ${RADII.pill};
    background: rgba(23, 23, 23, 0.62);
    backdrop-filter: blur(0.75rem);
    color: ${COLORS.textInverse};
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    line-height: 1;
    padding: 0.5rem 0.75rem;
    text-decoration: none;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    transition:
      background ${TRANSITIONS.base},
      border-color ${TRANSITIONS.base};

    &:hover {
      background: rgba(23, 23, 23, 0.78);
      border-color: rgba(255, 255, 255, 0.28);
    }
  }

  .about-carousel-dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 ${SPACING.md} ${SPACING.md};
  }

  .about-carousel-dot {
    width: 0.5rem;
    height: 0.5rem;
    border: 0;
    border-radius: ${RADII.pill};
    background: rgba(255, 255, 255, 0.28);
    cursor: pointer;
    padding: 0;
    transition:
      background ${TRANSITIONS.base},
      width ${TRANSITIONS.base};

    &--active {
      width: 1.5rem;
      background: ${COLORS.textInverse};
    }
  }
`;
