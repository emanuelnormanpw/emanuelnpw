import { css } from "@emotion/react";

import { COLORS, RADII, SPACING, TRANSITIONS } from "@styles/tokens";
import { media } from "@styles/mixins";

export const heroSectionCx = css`
  padding: ${SPACING.lg} ${SPACING.md} 0;

  @media (max-width: 22.5rem) {
    padding: ${SPACING.md} 0.75rem 0;
  }

  ${media.tablet} {
    padding: ${SPACING.xl} ${SPACING.lg} 0;
  }

  .hero-inner {
    max-width: 80rem;
    margin: 0 auto;
  }

  .hero-card {
    background: ${COLORS.surfaceDark};
    border-radius: ${RADII.section};
    padding: ${SPACING.xl} ${SPACING.xl} ${SPACING.lg};
    margin-bottom: ${SPACING.lg};

    @media (max-width: 22.5rem) {
      border-radius: 1rem;
      padding: ${SPACING.lg} ${SPACING.md};
    }

    ${media.tablet} {
      padding: ${SPACING.xxl} ${SPACING.xxl} ${SPACING.xl};
    }
  }

  .hero-title {
    font-size: clamp(2rem, 11vw, 6rem);
    font-weight: 800;
    color: ${COLORS.textInverse};
    margin-bottom: 2rem;
    padding: ${SPACING.md} 0 0;
    word-break: break-word;

    @media (max-width: 22.5rem) {
      font-size: 1.75rem;
      margin-bottom: ${SPACING.lg};
    }

    .transparent-hero-title {
      color: ${COLORS.textSecondary};
    }
  }

  .hero-content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${SPACING.lg};

    ${media.desktop} {
      grid-template-columns: 2fr 1fr;
      gap: ${SPACING.xl};
      align-items: start;
    }
  }

  .hero-left {
    display: flex;
    flex-direction: column;
  }

  .hero-featured {
    position: relative;
    border-radius: ${RADII.card};
    overflow: hidden;
    background: ${COLORS.surfaceMuted};
    aspect-ratio: 4 / 3;

    @media (max-width: 22.5rem) {
      border-radius: 1rem;
    }

    ${media.desktop} {
      aspect-ratio: 3 / 4;
      max-height: 37.5rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .hero-featured-badge {
    position: absolute;
    top: ${SPACING.md};
    left: ${SPACING.md};
  }

  .hero-featured-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      ${COLORS.overlayDark} 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: ${SPACING.lg};

    @media (max-width: 22.5rem) {
      padding: ${SPACING.md};
    }
  }

  .hero-featured-label {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
  }

  .hero-featured-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${COLORS.textInverse};
    letter-spacing: -0.02em;
    margin: ${SPACING.md} 0;
  }

  .hero-featured-track {
    display: block;
  }

  .hero-featured-set {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;

    &--clone {
      display: none;
    }

    .hero-featured-tech {
      max-width: 100%;
      margin: 0;
      overflow-wrap: anywhere;
      text-align: center;
      white-space: normal;
    }
  }

  @media (max-width: 48rem) {
    .hero-featured-title {
      overflow: hidden;
      margin: ${SPACING.sm} 0;
      mask-image: linear-gradient(
        to right,
        transparent,
        #000 12%,
        #000 88%,
        transparent
      );
    }

    .hero-featured-track {
      display: flex;
      width: max-content;
      animation: hero-tech-stack-marquee 18s linear infinite;
      will-change: transform;
    }

    .hero-featured-set {
      flex: 0 0 auto;
      flex-wrap: nowrap;
      gap: 0.375rem;
      padding-right: 0.375rem;

      &--clone {
        display: flex;
      }

      .hero-featured-tech {
        padding: 0.1875rem 0.625rem;
        font-size: 0.6875rem;
        line-height: 1.25;
        overflow-wrap: normal;
        white-space: nowrap;
      }
    }
  }

  @media (max-width: 22.5rem) {
    .hero-featured-set {
      .hero-featured-tech {
        padding: 0.1875rem 0.625rem;
        font-size: 0.6875rem;
        line-height: 1.25;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-featured-track {
      animation: none;
    }
  }

  @keyframes hero-tech-stack-marquee {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      transform: translate3d(-50%, 0, 0);
    }
  }

  .hero-featured-cta {
    display: inline-flex;
    align-items: center;
    gap: ${SPACING.sm};
    font-size: 0.875rem;
    color: ${COLORS.textInverse};
    text-decoration: none;
    border: 0.0625rem solid rgba(255, 255, 255, 0.3);
    border-radius: ${RADII.control};
    padding: ${SPACING.sm} ${SPACING.md};
    transition:
      background ${TRANSITIONS.base},
      border-color ${TRANSITIONS.base};
    width: fit-content;

    @media (max-width: 22.5rem) {
      padding: 0.5rem 0.75rem;
      font-size: 0.75rem;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.6);
    }

    &:focus-visible {
      outline: 0.125rem solid #fff;
      outline-offset: 0.1875rem;
    }
  }

  .hero-right {
    display: flex;
    flex-direction: column;
    gap: ${SPACING.lg};
  }

  .profile-card {
    background: rgba(255, 255, 255, 0.07);
    border-radius: ${RADII.card};
    border: 0.0625rem solid rgba(255, 255, 255, 0.1);
    padding: ${SPACING.lg};
    display: flex;
    flex-direction: column;
    gap: ${SPACING.md};
  }

  .profile-name {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${COLORS.textInverse};
    margin: 0;
  }

  .profile-role {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }

  .profile-bio {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.6;
    margin: 0;
  }

  .decorative-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${SPACING.sm};
  }

  .decorative-strip-item {
    aspect-ratio: 1;
    border-radius: 0.75rem;
    border: 0.0625rem solid rgba(255, 255, 255, 0.08);
  }

  .decorative-strip-item:nth-of-type(1) {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.06)
    );
  }

  .decorative-strip-item:nth-of-type(2) {
    background: linear-gradient(
      175deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.06)
    );
  }

  .decorative-strip-item:nth-of-type(3) {
    background: linear-gradient(
      215deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.06)
    );
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: ${SPACING.sm};
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    gap: ${SPACING.xs};
    font-size: 0.75rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    border: 0.0625rem solid rgba(255, 255, 255, 0.2);
    border-radius: ${RADII.pill};
    padding: 0.375rem 0.875rem;
    transition:
      background ${TRANSITIONS.base},
      border-color ${TRANSITIONS.base},
      color ${TRANSITIONS.base};

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      color: ${COLORS.textInverse};
      border-color: rgba(255, 255, 255, 0.45);
    }

    &:focus-visible {
      outline: 0.125rem solid ${COLORS.textInverse};
      outline-offset: 0.1875rem;
    }
  }
`;
