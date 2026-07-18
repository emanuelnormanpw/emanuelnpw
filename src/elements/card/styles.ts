import { css } from "@emotion/react";

import { COLORS, RADII, SHADOWS, SPACING, TRANSITIONS } from "@styles/tokens";

export const cardCx = css`
  &.card {
    border-radius: ${RADII.card};
    border: 0.0625rem solid ${COLORS.border};
    box-shadow: ${SHADOWS.card};
    padding: ${SPACING.lg};
    transition: box-shadow ${TRANSITIONS.base};
  }

  &.card--default {
    background: ${COLORS.surface};
    color: ${COLORS.textPrimary};
  }

  &.card--muted {
    background: ${COLORS.surfaceMuted};
    color: ${COLORS.textPrimary};
  }

  &.card--dark {
    background: ${COLORS.surfaceDark};
    color: ${COLORS.textInverse};
    border-color: ${COLORS.borderDark};
  }

  &.card--no-padding {
    padding: 0;
  }
`;
