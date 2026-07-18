import { css } from "@emotion/react";

import { COLORS, RADII, SPACING, TRANSITIONS } from "@styles/tokens";

export const buttonCx = css`
  &.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${SPACING.sm};
    border: none;
    cursor: pointer;
    border-radius: ${RADII.control};
    padding: ${SPACING.md} ${SPACING.lg};
    font-size: 0.875rem;
    font-weight: 500;
    font-family: inherit;
    line-height: 1;
    transition:
      background ${TRANSITIONS.base},
      color ${TRANSITIONS.base},
      border-color ${TRANSITIONS.base},
      filter ${TRANSITIONS.base};
    white-space: nowrap;
    text-decoration: none;

    &:focus-visible {
      outline: 0.125rem solid ${COLORS.primary};
      outline-offset: 0.1875rem;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &.button--primary {
    background: ${COLORS.primary};
    color: ${COLORS.textInverse};
    border: 0.0625rem solid transparent;

    &:hover:not(:disabled) {
      filter: brightness(0.88);
    }
  }

  &.button--secondary {
    background: ${COLORS.surfaceMuted};
    color: ${COLORS.textPrimary};
    border: 0.0625rem solid ${COLORS.border};

    &:hover:not(:disabled) {
      background: ${COLORS.border};
    }
  }

  &.button--ghost {
    background: transparent;
    color: ${COLORS.textPrimary};
    border: 0.0625rem solid transparent;

    &:hover:not(:disabled) {
      background: ${COLORS.surfaceMuted};
    }
  }

  &.button--pill {
    background: ${COLORS.surfaceMuted};
    color: ${COLORS.textPrimary};
    border: 0.0625rem solid ${COLORS.border};
    border-radius: ${RADII.pill};
    padding: ${SPACING.sm} ${SPACING.lg};
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.04em;

    &:hover:not(:disabled) {
      background: ${COLORS.primary};
      color: ${COLORS.textInverse};
      border-color: transparent;
    }
  }

  &.button--full-width {
    width: 100%;
  }
`;
