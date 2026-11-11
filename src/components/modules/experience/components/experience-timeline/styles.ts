import { css } from "@emotion/react";

import { media } from "@styles/mixins";
import { COLORS, RADII, SPACING, TRANSITIONS } from "@styles/tokens";

export const experienceTimelineCx = css`
  .experience-timeline-layout {
    --timeline-item-width: 7rem;

    display: flex;
    flex-direction: column;
    gap: ${SPACING.xl};

    ${media.tablet} {
      --timeline-item-width: 8rem;
    }

    ${media.desktop} {
      --timeline-height: 22rem;
      --timeline-item-height: 4.5rem;

      display: grid;
      grid-template-columns: minmax(0, 1fr) 10rem;
      gap: ${SPACING.xl};
      min-height: var(--timeline-height);
    }
  }

  .experience-card {
    min-width: 0;
    padding: ${SPACING.lg};
    border: 0.0625rem solid rgba(255, 255, 255, 0.1);
    border-radius: ${RADII.card};
    background: rgba(255, 255, 255, 0.06);
    display: grid;
    align-content: start;
    gap: ${SPACING.lg};
    animation: experience-card-enter 420ms ease-out both;

    ${media.tablet} {
      padding: ${SPACING.xxl};
    }

    ${media.desktop} {
      grid-template-columns: minmax(12rem, 0.8fr) minmax(0, 1.2fr);
      align-content: center;
      align-items: center;
      gap: ${SPACING.xxl};
    }
  }

  .experience-meta {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: ${SPACING.sm};

    ${media.desktop} {
      align-self: center;
    }
  }

  .experience-content {
    min-width: 0;
  }

  .experience-year {
    margin: 0;
    color: rgba(255, 255, 255, 0.45);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .experience-role {
    max-width: 42rem;
    margin: 0 0 ${SPACING.md};
    color: ${COLORS.textInverse};
    font-size: clamp(1.25rem, 3vw, 5rem);
    font-weight: 500;
    letter-spacing: -0.06em;
    line-height: 0.95;
    overflow-wrap: anywhere;
  }

  .experience-company {
    margin: 0;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.72);
    font-size: 1rem;
    line-height: 1.5;
  }

  .experience-summary {
    max-width: 30rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
    line-height: 1.7;
  }

  .timeline-viewport {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    ${media.desktop} {
      min-height: 0;
      align-self: stretch;
      overflow-x: hidden;
      overflow-y: auto;
      scroll-snap-type: y mandatory;
    }
  }

  .timeline-list {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    ${media.desktop} {
      height: 100%;
      min-height: 100%;
      flex-direction: column;
    }
  }

  .timeline-spacer {
    flex: 0 0 calc((100% - var(--timeline-item-width)) / 2);

    ${media.desktop} {
      display: block;
      flex: 0 0 calc((100% - var(--timeline-item-height)) / 2);
    }
  }

  .timeline-item {
    position: relative;
    width: var(--timeline-item-width);
    min-width: var(--timeline-item-width);
    flex: 0 0 var(--timeline-item-width);
    scroll-snap-align: center;
    scroll-snap-stop: always;

    &:not(:nth-last-of-type(2)) {
      &::after {
        position: absolute;
        z-index: 0;
        top: 0.6875rem;
        left: 50%;
        width: 100%;
        height: 0.0625rem;
        background: rgba(255, 255, 255, 0.2);
        content: "";
      }
    }

    ${media.desktop} {
      width: auto;
      min-width: 0;
      min-height: var(--timeline-item-height);
      flex: 0 0 var(--timeline-item-height);

      &:not(:nth-last-of-type(2)) {
        &::after {
          top: 50%;
          left: 1.125rem;
          width: 0.0625rem;
          height: 100%;
        }
      }
    }
  }

  .timeline-node {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    gap: ${SPACING.sm};
    padding: 0.25rem 0.5rem ${SPACING.md};
    border: 0;
    background: transparent;
    color: rgba(255, 255, 255, 0.38);
    cursor: pointer;
    font: inherit;
    text-align: center;
    transition: color ${TRANSITIONS.base};

    ${media.desktop} {
      display: grid;
      height: 100%;
      grid-template-columns: 1.25rem minmax(0, 1fr);
      padding: 0 0.5rem;
      text-align: left;
    }

    &::before {
      position: relative;
      z-index: 1;
      display: block;
      width: 0.875rem;
      height: 0.875rem;
      margin: 0 auto;
      border: 0.125rem solid ${COLORS.surfaceDark};
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.35);
      box-shadow: 0 0 0 0.0625rem rgba(255, 255, 255, 0.2);
      content: "";
      transition:
        background ${TRANSITIONS.base},
        box-shadow ${TRANSITIONS.base},
        transform ${TRANSITIONS.base};
    }

    &:hover {
      color: rgba(255, 255, 255, 0.72);
    }

    &:focus-visible {
      border-radius: ${RADII.control};
      outline: 0.125rem solid ${COLORS.textInverse};
      outline-offset: 0.125rem;
    }

    &[aria-selected="true"] {
      color: ${COLORS.textInverse};

      &::before {
        background: ${COLORS.textInverse};
        box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.16);
        transform: scale(1.08);
      }
    }
  }

  .timeline-start-year {
    display: block;
    font-size: clamp(0.75rem, 2.8vw, 0.875rem);
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  @keyframes experience-card-enter {
    from {
      opacity: 0;
      transform: translateY(0.75rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .experience-card {
      animation: none;
    }

    .timeline-node {
      transition: none;

      &::before {
        transition: none;
      }
    }
  }
`;
