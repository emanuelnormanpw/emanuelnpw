import { css } from "@emotion/react";

import interLatin from "@assets/fonts/inter-latin-300-600.woff2";

export default css`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300 600;
    font-display: swap;
    src: url("${interLatin}") format("woff2");
  }

  html {
    font-family: "Inter", system-ui, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-size: 1rem;
    line-height: 1.6;
    color: #171717;
    background: transparent;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Inter", system-ui, sans-serif;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }
`;
