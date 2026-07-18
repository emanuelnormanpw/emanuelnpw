import { css } from "@emotion/react";

import { generateColorsCssVar, generateCommonCssVar } from "../utils";
import type { Theme } from "../types";

export default ({
  colors,
  fontSizes,
  lineHeights,
  shadows,
  radius,
}: Theme) => css`
  :root {
    ${generateColorsCssVar(colors)}
    ${generateCommonCssVar("fontSizes", fontSizes)}
    ${generateCommonCssVar("lineHeights", lineHeights)}
    ${generateCommonCssVar("shadows", shadows)}
    ${generateCommonCssVar("corner", radius)}
  }
`;
