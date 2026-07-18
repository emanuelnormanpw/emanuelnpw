import { css } from "@emotion/react";

import { COLORS, RADII, SPACING, TRANSITIONS } from "@styles/tokens";
import { media } from "@styles/mixins";

export const footerSectionCx = css`
  padding: ${SPACING.lg} ${SPACING.md} ${SPACING.md};

  ${media.tablet} {
    padding: ${SPACING.xl} ${SPACING.lg} ${SPACING.lg};
  }

  .footer-inner {
    max-width: 80rem;
    margin: 0 auto;
    background: ${COLORS.surfaceDark};
    border-radius: ${RADII.section};
    padding: ${SPACING.xxl} ${SPACING.lg};

    ${media.tablet} {
      padding: ${SPACING.xxl};
    }
  }

  .footer-grid {
    display: flex;
    flex-direction: column;
    gap: ${SPACING.xl};
    margin-bottom: ${SPACING.xxl};

    ${media.desktop} {
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
      gap: ${SPACING.xxl};
    }
  }

  .footer-brand-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 300;
    letter-spacing: -0.05em;
    color: ${COLORS.textInverse};
    line-height: 0.95;
    margin: 0 0 ${SPACING.lg};
  }

  .footer-contact {
    display: flex;
    flex-direction: column;
    gap: ${SPACING.xs};
    font-style: normal;
  }

  .footer-contact-link {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color ${TRANSITIONS.base};

    &:hover {
      color: ${COLORS.textInverse};
    }

    &:focus-visible {
      outline: 0.125rem solid ${COLORS.textInverse};
      outline-offset: 0.25rem;
      border-radius: 0.125rem;
    }
  }

  .footer-newsletter-heading {
    font-size: 1rem;
    font-weight: 600;
    color: ${COLORS.textInverse};
    letter-spacing: -0.02em;
    margin: 0 0 ${SPACING.sm};
  }

  .footer-newsletter-desc {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.55;
    margin-bottom: ${SPACING.md};
  }

  .footer-form {
    display: flex;
    gap: ${SPACING.sm};
    flex-wrap: wrap;

    .footer-subscribe-btn {
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      border: 0.0625rem solid rgba(255, 255, 255, 0.2);
      flex-shrink: 0;

      &:hover {
        background: rgba(255, 255, 255, 0.22);
      }
    }
  }

  .footer-input {
    flex: 1;
    min-width: 0;
    padding: ${SPACING.sm} ${SPACING.md};
    border-radius: ${RADII.control};
    border: 0.0625rem solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    color: ${COLORS.textInverse};
    font-size: 0.875rem;
    font-family: inherit;
    transition:
      border-color ${TRANSITIONS.base},
      background ${TRANSITIONS.base};
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.35);
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.12);
    }
  }

  .footer-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${SPACING.xl};

    ${media.tablet} {
      gap: ${SPACING.xxl};
    }

    ${media.desktop} {
      width: min(100%, 32rem);
      margin-left: auto;
      justify-content: flex-end;
    }
  }

  .footer-nav-group {
    display: flex;
    flex-direction: column;
    gap: ${SPACING.sm};
  }

  .footer-nav-heading {
    margin: 0 0 ${SPACING.xs};
    color: ${COLORS.textInverse};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .footer-nav-link {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    transition: color ${TRANSITIONS.base};

    &:hover {
      color: ${COLORS.textInverse};
    }

    &:focus-visible {
      outline: 0.125rem solid ${COLORS.textInverse};
      outline-offset: 0.25rem;
      border-radius: 0.125rem;
    }
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    gap: ${SPACING.sm};
    padding-top: ${SPACING.xl};
    border-top: 0.0625rem solid rgba(255, 255, 255, 0.1);

    ${media.tablet} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .footer-copyright {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.4);
  }

  .footer-legal-links {
    display: flex;
    gap: ${SPACING.lg};
  }

  .footer-legal-link {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    transition: color ${TRANSITIONS.base};

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus-visible {
      outline: 0.125rem solid rgba(255, 255, 255, 0.5);
      outline-offset: 0.25rem;
      border-radius: 0.125rem;
    }
  }
`;
