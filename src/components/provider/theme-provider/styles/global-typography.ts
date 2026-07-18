import { css } from "@emotion/react";

export default css`
  html {
    font-family: "Geist", "Inter", system-ui, sans-serif;
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
    font-family: "Geist", "Inter", system-ui, sans-serif;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }
`;
