import { css } from "@emotion/react";

import { COLORS, RADII, TRANSITIONS } from "@styles/tokens";

export const badgeCx = css`
  &.badge {
    display: inline-flex;
    align-items: center;
    border-radius: ${RADII.pill};
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    line-height: 1.4;
    transition:
      background ${TRANSITIONS.base},
      color ${TRANSITIONS.base};
    white-space: nowrap;
  }

  &.badge--light {
    background: ${COLORS.overlayLight};
    color: ${COLORS.textPrimary};
    backdrop-filter: blur(0.5rem);
  }

  &.badge--dark {
    background: ${COLORS.surfaceDark};
    color: ${COLORS.textInverse};
  }

  &.badge--outline {
    background: transparent;
    color: ${COLORS.textMuted};
    border: 0.0625rem solid ${COLORS.border};
  }
`;
