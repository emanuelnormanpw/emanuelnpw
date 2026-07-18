import { css } from "@emotion/react";

import { COLORS } from "@styles/tokens";

export const pageShellCx = css`
  min-height: 100dvh;
  background: transparent;
  color: ${COLORS.textPrimary};
  font-family: "Geist", "Inter", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;

  .skip-link {
    position: absolute;
    top: -100%;
    left: 1rem;
    background: ${COLORS.primary};
    color: ${COLORS.textInverse};
    padding: 0.75rem 1.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    z-index: 9999;
    transition: top 0.2s ease;

    &:focus {
      top: 0;
    }
  }

  .page-outlet {
    flex: 1;
  }
`;
