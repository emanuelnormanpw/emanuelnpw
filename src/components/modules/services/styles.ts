import { css } from "@emotion/react";

import { COLORS, RADII, SHADOWS, SPACING, TRANSITIONS } from "@styles/tokens";
import { media } from "@styles/mixins";

export const servicesSectionCx = css`
  padding: ${SPACING.lg} ${SPACING.md};

  ${media.tablet} {
    padding: ${SPACING.xl} ${SPACING.lg};
  }

  .services-inner {
    max-width: 80rem;
    margin: 0 auto;
    background: ${COLORS.surfaceDark};
    border-radius: ${RADII.section};
    padding: ${SPACING.xl} ${SPACING.lg};

    ${media.tablet} {
      padding: ${SPACING.xxl};
    }
  }

  .services-label {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
    margin-bottom: ${SPACING.sm};
  }

  .services-heading {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 300;
    letter-spacing: -0.04em;
    color: ${COLORS.textInverse};
    line-height: 1.15;
    margin: 0 0 ${SPACING.xl};
  }

  .services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${SPACING.md};
    margin-bottom: ${SPACING.xl};

    ${media.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .services-footnote {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.45);
    text-align: center;
  }

  /* Pricing card */
  .pricing-card {
    background: rgba(255, 255, 255, 0.06);
    border-radius: ${RADII.card};
    border: 0.0625rem solid rgba(255, 255, 255, 0.1);
    box-shadow: ${SHADOWS.card};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition:
      box-shadow ${TRANSITIONS.base},
      transform ${TRANSITIONS.base};
    position: relative;

    &:hover {
      box-shadow: ${SHADOWS.floating};
      transform: translateY(-0.125rem);
    }

    &--popular {
      border-color: rgba(255, 255, 255, 0.35);
      box-shadow: ${SHADOWS.floating};
    }
  }

  .pricing-popular-badge {
    position: absolute;
    top: ${SPACING.md};
    right: ${SPACING.md};
    background: rgba(255, 255, 255, 0.15);
    color: ${COLORS.textInverse};
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.2rem 0.625rem;
    border-radius: 624.9375rem;
    border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  }

  .pricing-card-body {
    padding: ${SPACING.lg};
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${SPACING.md};
  }

  .pricing-ready {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.45);
    font-style: italic;
  }

  .pricing-title {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    color: ${COLORS.textInverse};
    margin: 0;
  }

  .pricing-desc {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.55;
    margin: 0;
  }

  .pricing-strip {
    display: flex;
    overflow: hidden;
    border-radius: ${RADII.control};
    background: rgba(0, 0, 0, 0.3);
    color: ${COLORS.textInverse};
    margin: 0 ${SPACING.lg};
  }

  .pricing-strip-item {
    flex: 1;
    padding: ${SPACING.md} ${SPACING.sm};
    text-align: center;

    & + & {
      border-left: 0.0625rem solid ${COLORS.borderDark};
    }
  }

  .pricing-strip-value {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 0.125rem;
  }

  .pricing-strip-label {
    font-size: 0.625rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
  }

  .pricing-features {
    list-style: none;
    padding: 0 ${SPACING.lg} ${SPACING.md};
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: ${SPACING.sm};
  }

  .pricing-feature-item {
    display: flex;
    align-items: flex-start;
    gap: ${SPACING.sm};
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }

  .pricing-feature-icon {
    color: rgba(255, 255, 255, 0.6);
    flex-shrink: 0;
    margin-top: 0.0625rem;

    &--excluded {
      opacity: 0.3;
    }
  }

  .pricing-feature-text--excluded {
    opacity: 0.4;
  }

  .pricing-cta {
    padding: 0 ${SPACING.lg} ${SPACING.lg};
    margin-top: auto;
  }
`;
