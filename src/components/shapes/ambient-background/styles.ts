import { css } from "@emotion/react";

export const ambientBackgroundCx = css`
  position: fixed;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  pointer-events: none;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
`;
