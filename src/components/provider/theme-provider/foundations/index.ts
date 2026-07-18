import colors from "./colors";
import fontSizes from "./font-sizes";
import lineHeights from "./line-heights";
import shadows from "./shadows";
import radius from "./radius";

const fonts = {
  sans: "Geist, Inter, system-ui, sans-serif",
};

const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
  section: "4rem",
};

const transitions = {
  base: "180ms ease",
  slow: "500ms ease-out",
};

const breakpoints = {
  tablet: "48rem",
  desktop: "64rem",
  wide: "80rem",
};

const DEFAULT_THEME = {
  colors,
  fontSizes,
  lineHeights,
  shadows,
  radius,
  fonts,
  spacing,
  transitions,
  breakpoints,
};

export {
  DEFAULT_THEME,
  colors,
  fontSizes,
  lineHeights,
  shadows,
  radius,
  fonts,
  spacing,
  transitions,
  breakpoints,
};
