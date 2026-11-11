---
version: "emanuelnpw-portfolio-v2"
name: "emanuelnpw Portfolio"
description: "The current design system for the emanuelnpw portfolio: a monochrome, image-led interface composed from rounded dark editorial panels over a soft neutral canvas."
status: "Current implementation is the source of truth."
implementation:
  framework: "React and TypeScript"
  styling: "Emotion CSS-in-JS"
  font: "Self-hosted Inter variable subset"
  avoid: "Tailwind utility classes and inline style props"
units:
  css: "rem"
  base: "1rem equals 16 CSS pixels"
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
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  xxl: "3rem"
  section: "4rem"
rounded:
  section: "1.5rem"
  card: "1.5rem"
  media: "1rem"
  control: "0.75rem"
  pill: "624.9375rem"
breakpoints:
  tablet: "48rem"
  desktop: "64rem"
  wide: "80rem"
layout:
  max-width: "80rem"
  hero-desktop-columns: "2fr 1fr"
  portfolio-desktop-columns: "repeat(3, 1fr)"
---

# emanuelnpw Portfolio Design System

## Purpose

This document describes the visual system that is currently implemented in the
portfolio. It is the reference for future visual changes and should be updated
when the shipped design changes.

The design is monochrome, image-led, rounded, and deliberately compact. A soft
neutral page canvas supports a sequence of near-black editorial panels. White
and muted-white typography, restrained borders, photography, and small pill
controls create the hierarchy.

This is not a generic light portfolio template. The dark panel system, bold
hero title, project imagery, and personal photography are the recognizable
parts of the current design.

## Current Page Composition

The active page follows this order:

1. Ambient animated background behind all content.
2. Compact navigation with brand, anchor links, and a `Download CV` action.
3. Hero panel containing a bold title, featured project, profile card,
   decorative image strip, and social links.
4. Portfolio panel containing an equal responsive grid of project cards.
5. About panel containing a wide image, personal copy, and photo carousel.
6. Footer panel containing brand, contact details, menu links, social links,
   copyright, and a small cultural signature.

`Testimonials` and `Services` exist in the codebase but are not rendered on the
current home page. They are dormant components and must not be treated as part
of the active composition unless they are deliberately restored.

The current footer does not contain a newsletter form.

## Visual Direction

The interface should feel:

- Personal rather than corporate.
- Bold in the first viewport and restrained everywhere else.
- Premium through spacing, typography, photography, and material contrast
  rather than decoration.
- Dark and immersive inside each main section while retaining a light neutral
  page canvas around those sections.
- Responsive without changing the content hierarchy.

Avoid introducing bright brand colors, glossy gradients inside content cards,
generic SaaS patterns, excessive shadows, or large blocks of explanatory copy.

## Color and Surface System

The global canvas uses `background` (`#F5F5F5`), although the ambient background
may visually alter the area around panels. The primary visual surfaces are
rounded `surface-dark` (`#171717`) panels.

Use the color roles as follows:

- `surface-dark`: navigation, hero, portfolio, about, and footer panels.
- `surface` and `surface-muted`: light media fallbacks or components that need
  contrast against the canvas.
- `text-inverse`: primary headings and important text on dark panels.
- Muted white with controlled alpha: labels, metadata, descriptions, and
  inactive links on dark panels.
- `border-dark`: subtle separation for cards and controls on dark panels.
- `overlay-dark`: lower image gradients used to keep text readable.
- `overlay-light`: badges placed over photography.

The dominant experience is dark-panel-led. Do not convert Hero, Portfolio, or
About into white section panels without a deliberate redesign.

## Typography

The shipped typeface is self-hosted `Inter`, with `system-ui` and `sans-serif`
as fallbacks. Keep the font self-hosted to avoid a render-blocking third-party
font request.

The typography has two distinct modes:

- Hero: bold, immediate, and compact.
- Supporting content: light-to-regular editorial headings with restrained body
  copy.

### Current hierarchy

| Role | Current treatment |
| --- | --- |
| Hero title | `clamp(2rem, 11vw, 6rem)`, weight `800`, inverse color |
| Footer brand | `clamp(2rem, 5vw, 3.5rem)`, weight `300`, tight tracking |
| About tagline | `clamp(1.5rem, 4vw, 2.5rem)`, weight `300` |
| Section heading | Responsive `1.25rem`–`1.75rem`, weight `300` or `400` |
| Card title | `1rem`–`1.125rem`, weight `600` |
| Body | `0.875rem`–`0.9375rem`, regular, generous line height |
| Label | `0.75rem`, medium, uppercase, wide tracking |

The hero must not be changed back to a thin oversized wordmark unless the whole
first-screen composition is intentionally redesigned.

Use uppercase only for small labels, metadata, controls, and section markers.
Maintain readable contrast when using muted white text.

## Layout

Use a centered container with a maximum width of `80rem`. Major sections receive
responsive outer padding so the canvas remains visible around their rounded
panels.

### Responsive behavior

- Mobile: one-column content flow.
- Tablet (`48rem`): increased outer and inner spacing; portfolio becomes two
  columns; the About carousel shows three frames.
- Desktop (`64rem`): Hero uses a `2fr 1fr` split; portfolio becomes three
  columns; Footer changes from a vertical stack to a horizontal composition.
- Wide (`80rem`): content remains centered at the maximum width.
- Very small screens: reduce radius, font size, and horizontal padding without
  hiding content.

Use CSS Grid for repeated card layouts and Flexbox for content groups. Preserve
explicit image aspect ratios to prevent layout shifts.

## Section Geometry

Main panels use:

- `1.5rem` section radius.
- Near-black background.
- `1.5rem` to `3rem` responsive inner padding.
- Approximately `1.5rem` to `2rem` separation from adjacent panels.
- Subtle translucent borders for nested cards.

Nested cards use a `1.5rem` radius. Media usually uses a slightly smaller inner
radius. Pill controls use the shared pill radius.

Shadows are secondary to borders and surface contrast. Use the floating shadow
only for a meaningful hover or elevated state.

## Navigation

Navigation is compact and calm. It provides:

- The personal brand.
- Anchor navigation to page sections.
- A literal `Download CV` action using the existing CV asset.

Links should remain visible, keyboard accessible, and visually consistent with
the dark editorial system. The navigation must not become a large marketing
header or obscure the first-screen composition.

## Hero

The Hero is the strongest visual moment.

### Structure

- A rounded dark outer panel.
- Bold inverse title at the top.
- One-column composition on mobile.
- `2fr 1fr` content grid on desktop.
- Featured project media on the left.
- Profile card, decorative image strip, and social links on the right.

The featured media uses a stable `4 / 3` mobile aspect ratio and a taller
desktop treatment capped at `37.5rem`. Its content includes a category badge,
bottom readability gradient, project metadata, technology chips, and a clear
CTA.

On smaller screens the technology list may become a horizontal marquee. It
must stop when `prefers-reduced-motion: reduce` is active.

The Hero image is the likely LCP element. It must retain responsive sources,
intrinsic dimensions, eager loading, preload support, and high fetch priority.

## Portfolio

The current Portfolio section is a dark rounded panel with:

- Section label, heading, and short description.
- Equal responsive project cards.
- One column on mobile, two on tablet, and three on desktop.
- Consistent `16 / 9` project media.
- Optional project badge, date, title, and description.

All active cards use the same grid footprint. Do not document or implement a
larger featured grid item unless that hierarchy is intentionally introduced.

Linked projects open as links and receive interactive hover behavior. Projects
without a URL remain static articles and must not look or behave clickable.

## About

The About section is a dark rounded panel containing:

- `/About (02)` marker and `Behind the scenes.` tagline.
- A large responsive personal photograph.
- A quotation-style heading and biography copy.
- A photo carousel beneath the main content.

The main image is decorative in the current composition and uses an empty
alternative text. Carousel images carry meaningful alternative text because
they are individual content items.

## Photo Carousel

The current carousel uses responsive `16 / 9` frames rather than a fixed-height
single-image viewport.

- Mobile shows one frame.
- Tablet and larger screens show three frames.
- Controls are pill-shaped `Prev` and `Next` buttons.
- The center status displays the active title and current position.
- Dot buttons allow direct selection; the active dot expands horizontally.
- An optional `OPEN LINK` pill sits over the active image.
- Track movement uses a restrained transition of approximately `520ms`.

Carousel controls require accessible names, visible keyboard focus, and a
polite live status. Do not replace them with unlabeled icon-only controls.

## Footer

The current Footer is a dark rounded panel with:

- Brand title and direct phone/email links.
- `Menu` and `Social Media` navigation groups.
- Right-aligned navigation groups on desktop.
- Copyright and a cultural signature separated by a subtle top border.

On mobile the layout stacks naturally. On desktop, the brand/contact area stays
left while the navigation groups occupy the right side.

There is no active newsletter UI. Remove dormant newsletter styling when
cleaning the component, or add the feature only with a real submission flow,
labels, validation, and accessible feedback.

## Imagery

Photography and project screenshots carry the design. Browser-delivered assets
must come from `src/assets/optimized-img`.

For every content image:

- Declare intrinsic `width` and `height`.
- Supply WebP responsive variants using `srcSet`.
- Provide an accurate `sizes` expression.
- Use descriptive alternative text unless the image is genuinely decorative.
- Keep `object-fit: cover` and the component's intended aspect ratio.

The Hero/LCP image loads eagerly. Portfolio, About, and carousel imagery below
the fold load lazily and decode asynchronously.

Large master files are source assets, not browser delivery assets. Regenerate
responsive variants with:

```bash
npm run optimize:images
```

## Ambient Background and Effects

The current visual presentation includes an animated ambient gradient behind
the content. The effect is supporting atmosphere, not primary content.

The visual requirements are:

- Keep it behind all interactive and readable content.
- Preserve sufficient contrast around panel boundaries.
- Mark it as decorative and keep it outside the accessibility tree.
- Ensure the portfolio remains complete if the effect fails to load.
- Avoid using the effect to communicate information.

The current implementation uses an isolated `AmbientBackground` component.
That implementation detail is not a requirement of the visual identity. Follow
the Lighthouse guardrails in `AGENTS.md`: prefer a CSS-native equivalent and do
not add or restore a heavy third-party runtime without measuring its network,
main-thread, privacy, and Best Practices impact.

## Motion

Motion is restrained and functional:

- Base hover transitions: approximately `180ms ease`.
- Carousel movement: approximately `500ms ease-out`.
- Card hover: a small upward translation and shadow change only for linked
  cards.
- Mobile technology marquee: continuous but disabled for reduced motion.

Do not add excessive parallax, bouncing, autoplay video, or decorative motion
that competes with the work.

## Emotion Implementation Pattern

Each component follows the repository conventions in `AGENTS.md`:

- One Emotion `css` prop on the component root.
- One scoped `css` template exported from `styles.ts`.
- Plain kebab-case class names for descendants.
- BEM-style `--modifier` classes for variants and state.
- No inline `style` props.
- Prefer nested selectors under their owning UI block.
- Avoid grouped selectors with commas.

Example:

```tsx
const ProjectSection = () => (
  <section css={projectSectionCx}>
    <div className="project-section-inner">
      <h2 className="project-section-heading">Latest work</h2>
    </div>
  </section>
);
```

```ts
export const projectSectionCx = css`
  padding: 1.5rem 1rem;

  .project-section-inner {
    max-width: 80rem;
    margin: 0 auto;
    border-radius: 1.5rem;
    background: #171717;
  }

  .project-section-heading {
    color: #ffffff;
  }
`;
```

Use semantic tokens from `src/styles/tokens.ts` instead of duplicating values
when a matching token exists.

## Accessibility

Visual changes must preserve or improve:

- Semantic landmarks and heading order.
- Meaningful image alternatives.
- Accessible names for controls and external links.
- Visible keyboard focus.
- Minimum practical target sizes.
- Sufficient text and control contrast.
- `prefers-reduced-motion` handling.
- Indexable text and navigation.

Do not remove semantics or accessible labels to improve a Lighthouse
Performance score. Accessibility, Best Practices, and SEO are constraints of
the design system, not optional cleanup.

## Performance Constraints

The design is only considered correctly implemented when it remains fast and
layout-stable.

- Keep Hero, Portfolio, and About in the initial component tree unless a
  layout-stable fallback is provided.
- Never lazy-load the Hero/LCP image.
- Lazy-load below-the-fold imagery.
- Preserve responsive image variants and correct `sizes`.
- Keep the self-hosted Inter font.
- Avoid new render-blocking external stylesheets.
- Prefer CSS-native decorative effects.
- Do not add heavy third-party visual runtimes without measurement.
- Preserve the Emotion build configuration and visually inspect production
  output after relevant changes.

The detailed Lighthouse regression and verification rules live in `AGENTS.md`
and must be followed together with this document.

## Design Guardrails

- Preserve the dark-panel-led identity.
- Preserve the bold Hero title.
- Keep the palette neutral and monochrome.
- Keep the page image-led.
- Maintain rounded section and card geometry.
- Keep portfolio cards equal unless a new hierarchy is deliberately designed.
- Keep linked and static cards visually and semantically distinct.
- Do not present dormant Testimonials or Services as active content.
- Do not add a newsletter as decorative UI without a working flow.
- Use `rem` for CSS length units.
- Use Emotion and repository scoping conventions.
- Keep motion subtle and reduced-motion aware.
- Treat Lighthouse accessibility, SEO, Best Practices, and Performance as
  non-negotiable constraints.
