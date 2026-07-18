import { css } from "@emotion/react";

export default css`
  html {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body,
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }

  :where(input, textarea) {
    &:read-only,
    &[aria-readonly="true"],
    &[data-readonly] {
      cursor: default;
    }
  }

  :where(button, input, optgroup, select, textarea) {
    font-family: inherit;
    margin: 0;

    &:disabled,
    &[aria-disabled="true"],
    &[disabled],
    &[data-disabled] {
      cursor: not-allowed;
    }
  }
`;
