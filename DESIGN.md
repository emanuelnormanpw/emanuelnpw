---
version: "portfolio-website-emotion-rem-v1"
name: "Portfolio Website"
description: "A general editorial portfolio website design guideline for photographers, designers, creative studios, and personal brands. The system is built for Emotion CSS-in-JS instead of Tailwind, with reusable design tokens, calm visual hierarchy, rounded editorial cards, image-first composition, and responsive portfolio sections."
implementation:
  styling: "Emotion CSS-in-JS"
  avoid: "Tailwind utility classes"
  recommendedPackage: "@emotion/react and @emotion/styled"
units:
  css: "rem"
  base: "1rem equals 16 CSS pixels"
  rule: "Use rem for CSS length units in tokens, examples, and component styles. Avoid px in implementation."
colors:
  primary: "#171717"
  secondary: "#FFFFFF"
  accent: "#A3A3A3"
  background: "#F5F5F5"
  surface: "#FFFFFF"
  surface-muted: "#FAFAFA"
  surface-dark: "#171717"
  text-primary: "#171717"
  text-secondary: "#525252"
  text-muted: "#737373"
  text-inverse: "#FFFFFF"
  border: "#E5E5E5"
  border-dark: "rgba(255,255,255,0.12)"
  overlay-dark: "rgba(23,23,23,0.9)"
  overlay-light: "rgba(255,255,255,0.9)"
typography:
  display-xl:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "clamp(4rem, 12vw, 9rem)"
    fontWeight: 300
    lineHeight: "0.9"
    letterSpacing: "-0.06em"
  display-lg:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 300
    lineHeight: "1.05"
    letterSpacing: "-0.045em"
  heading-md:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-0.03em"
  heading-sm:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: "1.35"
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0"
  body-sm:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.55"
    letterSpacing: "0"
  label-md:
    fontFamily: "Geist, Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.08em"
spacing:
  base: "0.5rem"
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  section-padding-mobile: "1.5rem"
  section-padding-desktop: "3rem"
  card-padding: "1.5rem"
  container-padding-mobile: "1rem"
  container-padding-desktop: "1.5rem"
  max-width: "80rem"
rounded:
  section: "1.5rem"
  card: "1.5rem"
  media: "1rem"
  control: "0.75rem"
  pill: "624.9375rem"
shadow:
  card: "0 0.0625rem 0.125rem rgba(0,0,0,0.04)"
  floating: "0 0.75rem 2.25rem rgba(0,0,0,0.12)"
  image: "0 0.5rem 1.5rem rgba(0,0,0,0.14)"
breakpoints:
  mobile: "0rem"
  tablet: "48rem"
  desktop: "64rem"
  wide: "80rem"
components:
  page:
    background: "Use background token as the global canvas and place white rounded sections above it."
    maxWidth: "Use the max-width token with centered layout."
  navbar:
    background: "Use surface-dark with inverse text."
    radius: "Use section radius."
    position: "Sticky top navigation with compact vertical spacing."
  hero:
    typography: "Use display-xl with thin weight and tight letter spacing."
    structure: "Large editorial wordmark/title followed by image-first portfolio composition."
  carousel:
    background: "Use muted surface behind media."
    height: "Use 26.25rem on mobile and 37.5rem on desktop."
    controls: "Use dark translucent square buttons with control radius."
  card:
    background: "Use surface or surface-muted with subtle border."
    radius: "Use card radius outside and media radius inside."
    border: "0.0625rem solid border token."
  projectCard:
    media: "Image-first card with object-fit cover, category pill, and optional bottom gradient overlay."
    text: "Keep title short, calm, and editorial."
  button:
    primary: "Dark background, white text, rounded control radius."
    secondary: "Muted background, dark text, border token."
    pill: "Use pill radius for filter buttons, category chips, and view-all actions."
  badge:
    background: "Use translucent white over image or dark solid for featured labels."
    radius: "Use pill radius."
  pricingCard:
    structure: "White card with small label, light heading, dark price strip, feature list, and full-width CTA."
  footer:
    background: "Use surface-dark."
    text: "Use inverse text with muted opacity for secondary copy."
---

# Portfolio Website

Source reference: Generated portfolio HTML inspected from the uploaded page. The naming has been generalized into a reusable portfolio website system, not tied to any specific personal name, studio name, or template name.

Tags: portfolio, editorial, photography, creative-studio, image-grid, personal-brand, emotion-css.

## Overview

Portfolio Website is a minimal, editorial, image-first design system for showcasing selected work, services, testimonials, personal profile, and contact information. The visual direction should feel calm, premium, spacious, and intentional.

The design should prioritize strong imagery, restrained typography, soft neutral colors, rounded cards, and clear section rhythm. It is suitable for photographers, designers, creative studios, freelancers, personal brands, or any professional portfolio that needs a refined presentation.

This guideline is intended for implementation with Emotion CSS-in-JS. Do not translate the design into Tailwind utility classes. Instead, convert the visual rules into theme tokens, styled components, and reusable style objects.

## Unit System

Use `rem` as the default CSS length unit across the design system. The base conversion is `1rem` equals 16 CSS pixels. Avoid `px` in design tokens, component examples, layout rules, border widths, shadows, breakpoints, and documentation examples.

Use this conversion pattern when translating measurements from visual references:

- `0.0625rem` for very thin borders.
- `0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, and `4rem` for the main spacing scale.
- `48rem`, `64rem`, and `80rem` for tablet, desktop, and wide breakpoints.

## Composition

Use the uploaded HTML reference as the source of truth for visual hierarchy, section rhythm, spacing density, and component geometry. Preserve the first-screen composition: a compact dark navigation, a large editorial title, a dominant featured work area, and a supporting profile/contact column.

The page should generally follow this structure:

1. Sticky dark navigation inside a rounded container.
2. Large editorial hero title with thin font weight and tight tracking.
3. Featured portfolio area with carousel or large project media on the left.
4. Profile, visual preview, and contact/social links on the right.
5. Latest work section using a responsive grid with one featured card and smaller cards.
6. About section with large image, biography text, and supporting stats/cards.
7. Testimonial or social proof section using dark background and decorative floating images.
8. Services or pricing section with clean package cards.
9. Footer with brand title, contact info, newsletter input, and navigation links.

Keep the page image-led. Text supports the work; it should not dominate the layout except in hero, section headings, testimonials, and footer brand moments.

## Colors

Anchor the palette in neutral monochrome colors. The overall canvas uses a soft grey background, while major content sections use white rounded panels. Dark sections use near-black surfaces to create contrast and premium editorial moments.

Core color roles:

- `background`: global page canvas, soft neutral grey.
- `surface`: primary white card and section background.
- `surface-muted`: subtle card background for project cards and secondary panels.
- `surface-dark`: navigation, CTA, testimonial, service, and footer background.
- `text-primary`: main headings and strong body text.
- `text-secondary`: paragraph text and descriptions.
- `text-muted`: metadata, labels, section counters, inactive nav links.
- `text-inverse`: text on dark backgrounds.
- `border`: subtle light border for cards and controls.
- `overlay-dark`: image gradient overlays.
- `overlay-light`: white glass labels and image CTAs.

Avoid colorful accents unless the portfolio brand specifically requires it. If an accent is needed, use it sparingly for active states, tags, or selected filters, but keep the base system neutral.

## Typography

Use a modern grotesk sans-serif such as Geist, Inter, or a system sans-serif fallback. The typography should feel editorial, quiet, and premium.

Display headings should use thin to regular font weights, tight letter spacing, and large responsive sizes. Body text should be readable, restrained, and not overly bold.

Recommended hierarchy:

- `display-xl`: hero wordmark/title, footer brand title.
- `display-lg`: section headings and testimonial headline.
- `heading-md`: pricing card titles, profile title, major card headings.
- `heading-sm`: project card title, link title, small card title.
- `body-md`: about copy and main descriptions.
- `body-sm`: cards, profile description, service features.
- `label-md`: section labels, counters, dates, badges, metadata.

Use uppercase labels only for section markers, metadata, and small supporting text. Do not overuse uppercase for paragraph content.

## Emotion Theme Tokens

Use a single theme object and consume it through Emotion's `ThemeProvider`. Keep tokens semantic so components are easy to reuse and redesign later.

```ts
export const portfolioTheme = {
  colors: {
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
  },
  fonts: {
    sans: "Geist, Inter, system-ui, sans-serif",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
    section: "4rem",
  },
  radii: {
    section: "1.5rem",
    card: "1.5rem",
    media: "1rem",
    control: "0.75rem",
    pill: "624.9375rem",
  },
  shadows: {
    card: "0 0.0625rem 0.125rem rgba(0,0,0,0.04)",
    floating: "0 0.75rem 2.25rem rgba(0,0,0,0.12)",
    image: "0 0.5rem 1.5rem rgba(0,0,0,0.14)",
  },
  breakpoints: {
    tablet: "48rem",
    desktop: "64rem",
    wide: "80rem",
  },
  transitions: {
    base: "180ms ease",
    slow: "500ms ease-out",
  },
} as const;
```

## Layout

Use a centered max-width container with responsive horizontal padding. Recommended maximum width is `80rem`. The global page should use a soft neutral background, while each major section appears as a rounded white or dark container.

Layout principles:

- Use generous rounded section wrappers.
- Keep vertical section spacing consistent, usually `2rem` between major sections.
- Use `1.5rem` internal padding for sections on desktop and `1rem` on mobile.
- Prefer CSS Grid for page composition and portfolio cards.
- Use a one-column stack on mobile.
- Use 3-column grids on desktop for portfolio, services, and supporting cards.
- Use a 2/3 + 1/3 split for hero portfolio composition on desktop.
- Keep image heights stable to preserve editorial rhythm.

Recommended responsive pattern:

```ts
const containerStyle = (theme: Theme) =>
  css({
    maxWidth: "80rem",
    margin: "0 auto",
    padding: `0 ${theme.spacing.md}`,
    [media(theme.breakpoints.tablet)]: {
      padding: `0 ${theme.spacing.lg}`,
    },
  });
```

## Components

Cards, buttons, badges, navigation, and repeated blocks should preserve the same geometry, border treatment, and hover feel as the inspected HTML, but they must be implemented with Emotion components.

### Page Shell

The page shell should set the global font, background, antialiasing, and text color.

```ts
export const PageShell = styled.div(({ theme }) => ({
  minHeight: "100vh",
  fontFamily: theme.fonts.sans,
  color: theme.colors.textPrimary,
  background: theme.colors.background,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
}));
```

### Section

Sections should feel like large rounded editorial panels.

```ts
export const Section = styled.section<{ variant?: "light" | "dark" }>(
  ({ theme, variant = "light" }) => ({
    marginTop: theme.spacing.xl,
    padding: theme.spacing.lg,
    borderRadius: theme.radii.section,
    background:
      variant === "dark" ? theme.colors.surfaceDark : theme.colors.surface,
    color:
      variant === "dark" ? theme.colors.textInverse : theme.colors.textPrimary,
  }),
);
```

### Navigation

Navigation should be compact, sticky, dark, rounded, and calm. Links use muted inverse text by default and become white on hover.

```ts
export const NavBar = styled.header(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 40,
  paddingTop: theme.spacing.sm,
}));

export const NavInner = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${theme.spacing.md} ${theme.spacing.xl}`,
  borderRadius: theme.radii.section,
  background: theme.colors.surfaceDark,
}));
```

### Hero Title

The hero title should be oversized and editorial. Use `clamp()` to avoid manual breakpoint-heavy sizing.

```ts
export const HeroTitle = styled.h1(({ theme }) => ({
  margin: 0,
  padding: `${theme.spacing.xl} 0`,
  fontFamily: theme.fonts.sans,
  fontSize: "clamp(4rem, 12vw, 9rem)",
  fontWeight: 300,
  lineHeight: 0.9,
  letterSpacing: "-0.06em",
}));
```

### Project Card

Project cards are image-first. The outer card uses a subtle border and rounded container, while the image area has a slightly smaller radius.

```ts
export const ProjectCard = styled.article(({ theme }) => ({
  padding: theme.spacing.xs,
  borderRadius: theme.radii.card,
  border: `0.0625rem solid ${theme.colors.border}`,
  background: theme.colors.surfaceMuted,
  boxShadow: theme.shadows.card,
}));

export const ProjectMedia = styled.div(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.radii.media,
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
}));
```

### Button

Buttons should be simple, rounded, and clear. Avoid heavy shadows or colorful gradients.

```ts
export const Button = styled.button<{
  variant?: "primary" | "secondary" | "ghost";
}>(({ theme, variant = "primary" }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing.sm,
  border: 0,
  cursor: "pointer",
  borderRadius: theme.radii.control,
  padding: `${theme.spacing.md} ${theme.spacing.lg}`,
  fontSize: "0.875rem",
  fontWeight: 500,
  transition: `background ${theme.transitions.base}, color ${theme.transitions.base}, border-color ${theme.transitions.base}`,
  ...(variant === "primary" && {
    background: theme.colors.primary,
    color: theme.colors.textInverse,
  }),
  ...(variant === "secondary" && {
    background: theme.colors.surfaceMuted,
    color: theme.colors.textPrimary,
    border: `0.0625rem solid ${theme.colors.border}`,
  }),
  ...(variant === "ghost" && {
    background: "transparent",
    color: theme.colors.textPrimary,
  }),
  "&:hover": {
    filter: "brightness(0.96)",
  },
}));
```

### Badge

Badges should appear as small rounded labels, often placed above images.

```ts
export const Badge = styled.span(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: theme.radii.pill,
  padding: "0.25rem 0.75rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  color: theme.colors.textPrimary,
  background: theme.colors.overlayLight,
  backdropFilter: "blur(0.5rem)",
}));
```

### Pricing Card

Pricing cards should remain clean and structured. Use a dark strip for price or duration information to match the visual language.

```ts
export const PricingStrip = styled.div(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  borderRadius: theme.radii.control,
  background: theme.colors.surfaceDark,
  color: theme.colors.textInverse,
  "> *": {
    flex: 1,
    padding: `${theme.spacing.md} ${theme.spacing.sm}`,
    textAlign: "center",
  },
  "> * + *": {
    borderLeft: `0.0625rem solid ${theme.colors.borderDark}`,
  },
}));
```

## Motion

Motion should be calm and restrained. Use short transitions for hover and slightly longer transitions for carousel fade or image reveal.

Recommended motion behavior:

- Carousel fade: `500ms ease-out`.
- Button hover: `180ms ease`.
- Card hover: optional subtle brightness change or tiny translate, not a dramatic lift.
- Image overlays: fade in/out with opacity.
- Decorative images: keep static unless there is a clear reason for motion.

Avoid excessive parallax, bouncing animations, or colorful animated gradients. This design should feel quiet and premium.

## WebGL & Effects

If the source includes canvas, WebGL, Unicorn Studio, Three.js, gradients, particles, or atmospheric background effects, rebuild them only as subtle supporting layers behind the content.

Guidelines:

- Effects must never reduce text readability.
- Effects should sit behind the page content with negative z-index or isolated background wrappers.
- Keep effects optional so the portfolio still works without them.
- Prefer static gradients or lightweight CSS effects before adding WebGL.
- Respect performance on mobile devices.

When using Emotion, isolate visual effects into a dedicated component such as `AmbientBackground` rather than mixing effect styles into content components.

## Accessibility

Keep the design visually minimal but still accessible.

- Use real headings in semantic order.
- Provide meaningful `alt` text for every portfolio image.
- Buttons and carousel controls must have accessible labels.
- Maintain sufficient contrast for muted text.
- Avoid using opacity-only text when contrast becomes too low.
- Ensure keyboard focus styles are visible.
- Do not hide critical navigation behind hover-only interactions.

Recommended focus style:

```ts
export const focusRing = (theme: Theme) => ({
  outline: `0.125rem solid ${theme.colors.primary}`,
  outlineOffset: "0.1875rem",
});
```

## Guardrails

- Do not use Tailwind utility classes in implementation.
- Do not use `px` for CSS length values; use `rem` consistently with `1rem` as the base unit.
- Do not name the system after the inspected template or a specific person.
- Keep the guideline general for a portfolio website.
- Preserve the image-first editorial rhythm from the source HTML.
- Do not replace the first viewport with a generic SaaS hero.
- Do not overuse accent colors; keep the design neutral and premium.
- Do not make every card identical; keep one or two featured cards larger for hierarchy.
- Keep section backgrounds, card backgrounds, borders, and dark panels semantically distinct.
- Keep large headings thin, tight, and editorial.
- Use Emotion tokens and reusable styled components instead of duplicated inline styles.
- Keep motion subtle and performance-friendly.
