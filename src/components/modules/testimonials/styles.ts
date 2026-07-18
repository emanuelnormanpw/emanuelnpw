import { css } from "@emotion/react";

import { COLORS, RADII, SPACING } from "@styles/tokens";
import { media } from "@styles/mixins";

export const testimonialsSectionCx = css`
  padding: ${SPACING.lg} ${SPACING.md};

  ${media.tablet} {
    padding: ${SPACING.xl} ${SPACING.lg};
  }

  .testimonials-inner {
    max-width: 80rem;
    margin: 0 auto;
    background: ${COLORS.surfaceDark};
    border-radius: ${RADII.section};
    padding: ${SPACING.xl} ${SPACING.lg};

    ${media.tablet} {
      padding: ${SPACING.xxl};
    }
  }

  .testimonials-header {
    margin-bottom: ${SPACING.xl};
  }

  .testimonials-label {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: ${SPACING.sm};
  }

  .testimonials-heading {
    font-size: clamp(1.5rem, 4vw, 3rem);
    font-weight: 300;
    letter-spacing: -0.04em;
    color: ${COLORS.textInverse};
    line-height: 1.1;
    margin: 0 0 ${SPACING.lg};
    max-width: 36rem;
  }

  .testimonials-desc {
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    max-width: 36rem;
    margin-bottom: ${SPACING.lg};
  }

  .testimonials-cta-btn {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 0.0625rem solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.18);
    }
  }

  .testimonials-grid {
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

  .testimonial-card {
    background: rgba(255, 255, 255, 0.06);
    border: 0.0625rem solid rgba(255, 255, 255, 0.1);
    border-radius: ${RADII.card};
    padding: ${SPACING.lg};
    display: flex;
    flex-direction: column;
    gap: ${SPACING.md};
  }

  .testimonial-quote {
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.65;
    margin: 0;
    flex: 1;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: ${SPACING.sm};
  }

  .testimonial-avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 624.9375rem;
    background: linear-gradient(135deg, #a3a3a3, #737373);
    flex-shrink: 0;
  }

  .testimonial-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${COLORS.textInverse};
    margin: 0;
  }

  .testimonial-role {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }
`;
