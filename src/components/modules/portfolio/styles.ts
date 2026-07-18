import { css } from "@emotion/react";

import { COLORS, RADII, SHADOWS, SPACING, TRANSITIONS } from "@styles/tokens";
import { media } from "@styles/mixins";

export const portfolioSectionCx = css`
  padding: ${SPACING.lg} ${SPACING.md};

  ${media.tablet} {
    padding: ${SPACING.xl} ${SPACING.lg};
  }

  .portfolio-inner {
    max-width: 80rem;
    margin: 0 auto;
    background: ${COLORS.surfaceDark};
    border-radius: ${RADII.section};
    padding: ${SPACING.xl} ${SPACING.lg};

    ${media.tablet} {
      padding: ${SPACING.xxl};
    }
  }

  .portfolio-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: ${SPACING.md};
    margin-bottom: ${SPACING.xl};
  }

  .portfolio-label {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
    margin-bottom: ${SPACING.xs};
  }

  .portfolio-heading {
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 300;
    letter-spacing: -0.03em;
    color: ${COLORS.textInverse};
    max-width: 28rem;
    line-height: 1.3;
    margin: 0 0 ${SPACING.md};
  }

  .portfolio-description {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    max-width: 30rem;
    margin-bottom: ${SPACING.lg};
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${SPACING.md};

    ${media.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${media.desktop} {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .portfolio-footer {
    display: flex;
    justify-content: center;
    margin-top: ${SPACING.xl};
  }

  /* Project card */
  .project-card {
    display: block;
    padding: 1rem 0.5rem;
    border-radius: ${RADII.card};
    border: 0.0625rem solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.06);
    box-shadow: ${SHADOWS.card};
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    transition:
      box-shadow ${TRANSITIONS.base},
      transform ${TRANSITIONS.base};

    &:hover {
      box-shadow: ${SHADOWS.floating};
      transform: translateY(-0.125rem);
    }

    &--static {
      cursor: default;

      &:hover {
        box-shadow: ${SHADOWS.card};
        transform: none;
      }
    }
  }

  .project-media {
    position: relative;
    overflow: hidden;
    border-radius: 1.25rem;
    aspect-ratio: 16 / 9;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .project-media--featured {
    aspect-ratio: 16 / 9;
  }

  .project-media-placeholder {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .project-badge {
    position: absolute;
    top: ${SPACING.md};
    left: ${SPACING.md};
  }

  .project-body {
    padding: ${SPACING.md} ${SPACING.sm} ${SPACING.sm};
  }

  .project-date {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.45);
    margin-bottom: ${SPACING.xs};
    letter-spacing: 0.02em;
  }

  .project-title {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${COLORS.textInverse};
    margin-bottom: ${SPACING.xs};
    line-height: 1.3;
  }

  .project-description {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.55;
  }
`;
