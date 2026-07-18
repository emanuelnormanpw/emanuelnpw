import { css } from "@emotion/react";

import { BREAKPOINTS } from "./tokens";

/** Responsive media query helper */
export const media = {
  tablet: `@media (min-width: ${BREAKPOINTS.tablet})`,
  desktop: `@media (min-width: ${BREAKPOINTS.desktop})`,
  wide: `@media (min-width: ${BREAKPOINTS.wide})`,
} as const;

/** Visually hidden but accessible to screen readers */
export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

/** Focus ring for keyboard navigation */
export const focusRingCx = css`
  outline: 0.125rem solid #171717;
  outline-offset: 0.1875rem;
`;

/** Truncate text with ellipsis */
export const truncateCx = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
