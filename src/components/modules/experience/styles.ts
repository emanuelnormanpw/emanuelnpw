import { css } from "@emotion/react";

import { media } from "@styles/mixins";
import { COLORS, RADII, SPACING } from "@styles/tokens";

export const experienceSectionCx = css`
  scroll-margin-top: 6rem;
  padding: ${SPACING.lg} ${SPACING.md};

  @media (max-width: 22.5rem) {
    padding: ${SPACING.md} 0.75rem;
  }

  ${media.tablet} {
    padding: ${SPACING.xl} ${SPACING.lg};
  }

  .experience-inner {
    max-width: 80rem;
    margin: 0 auto;
    padding: ${SPACING.xl} ${SPACING.lg};
    overflow: hidden;
    border-radius: ${RADII.section};
    background: ${COLORS.surfaceDark};

    @media (max-width: 22.5rem) {
      padding: ${SPACING.lg} ${SPACING.md};
      border-radius: 1rem;
    }

    ${media.tablet} {
      padding: ${SPACING.xxl};
    }
  }

  .experience-heading {
    margin: 0 0 clamp(3rem, 8vw, 6rem);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-clip: text;
    color: transparent;
    font-size: clamp(2.75rem, 14vw, 10rem);
    font-weight: 700;
    letter-spacing: -0.08em;
    line-height: 0.82;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
