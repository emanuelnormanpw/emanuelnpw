import { css } from "@emotion/react";

import { COLORS, RADII, SPACING, TRANSITIONS } from "@styles/tokens";
import { media } from "@styles/mixins";

export const navWrapperCx = css`
  position: sticky;
  top: 0;
  z-index: 40;
  padding: ${SPACING.sm} ${SPACING.md};

  ${media.tablet} {
    padding: ${SPACING.sm} ${SPACING.lg};
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${SPACING.md} ${SPACING.lg};
    border-radius: ${RADII.section};
    background: ${COLORS.surfaceDark};
    max-width: 80rem;
    margin: 0 auto;

    @media (max-width: 22.5rem) {
      padding: 0.75rem;
    }
  }

  .nav-brand {
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${COLORS.textInverse};
    text-decoration: none;
    white-space: nowrap;

    @media (max-width: 22.5rem) {
      font-size: 0.75rem;
      letter-spacing: 0.08em;
    }
  }

  .nav-links {
    display: none;
    align-items: center;
    gap: ${SPACING.xl};
    list-style: none;
    margin: 0;
    padding: 0;

    ${media.tablet} {
      display: flex;
    }
  }

  .nav-link {
    font-size: 0.875rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color ${TRANSITIONS.base};
    cursor: pointer;

    &:hover {
      color: ${COLORS.textInverse};
    }

    &:focus-visible {
      color: ${COLORS.textInverse};
      outline: 0.125rem solid ${COLORS.textInverse};
      outline-offset: 0.25rem;
      border-radius: 0.125rem;
    }
  }

  .nav-cta {
    display: flex;
    align-items: center;
    gap: ${SPACING.md};
  }

  .nav-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 0.0625rem solid rgba(255, 255, 255, 0.2);
    border-radius: ${RADII.control};
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    transition:
      background ${TRANSITIONS.base},
      border-color ${TRANSITIONS.base};

    @media (max-width: 22.5rem) {
      padding: 0.5rem 0.75rem;
      font-size: 0.75rem;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.18);
    }

    &:focus-visible {
      outline: 0.125rem solid ${COLORS.textInverse};
      outline-offset: 0.1875rem;
    }
  }
`;
