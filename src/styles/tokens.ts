/**
 * Design tokens as JS constants — mirrors DESIGN.md
 * Use these in Emotion styled components and css`` helpers.
 */

export const COLORS = {
  primary: "#171717",
  secondary: "#FFFFFF",
  accent: "#A3A3A3",
  background: "#F5F5F5",
  surface: "#FFFFFF",
  surfaceMuted: "#FAFAFA",
  surfaceDark: "#171717",
  textPrimary: "#171717",
  textSecondary: "#525252",
  textMuted: "#737373",
  textInverse: "#FFFFFF",
  border: "#E5E5E5",
  borderDark: "rgba(255,255,255,0.12)",
  overlayDark: "rgba(23,23,23,0.9)",
  overlayLight: "rgba(255,255,255,0.9)",
} as const;

export const FONTS = {
  sans: '"Geist", "Inter", system-ui, sans-serif',
} as const;

export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
  section: "4rem",
} as const;

export const RADII = {
  section: "1.5rem",
  card: "1.5rem",
  media: "1rem",
  control: "0.75rem",
  pill: "624.9375rem",
} as const;

export const SHADOWS = {
  card: "0 0.0625rem 0.125rem rgba(0,0,0,0.04)",
  floating: "0 0.75rem 2.25rem rgba(0,0,0,0.12)",
  image: "0 0.5rem 1.5rem rgba(0,0,0,0.14)",
} as const;

export const BREAKPOINTS = {
  tablet: "48rem",
  desktop: "64rem",
  wide: "80rem",
} as const;

export const TRANSITIONS = {
  base: "180ms ease",
  slow: "500ms ease-out",
} as const;
