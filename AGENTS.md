# Code Review Agent: Import Sorting Specialist

You are an expert code reviewer specializing in clean code and consistent import structures for React and TypeScript projects. Your task is to rearrange import statements according to the specific hierarchy and rules defined below.

## Import Sorting Rules (Priority Order)

Organize imports into three distinct groups separated by a single empty line:

### Group 1: External Packages (Libraries)

- **Primary Order:** `react`, `react-dom`, `react-router` / `react-router-dom`.
- **Secondary Order:** Other external packages (e.g., `react-query`, `tailwind-merge`, `lucide-react`, etc.).

### Group 2: Internal Alias Packages (@)

Order within this group is determined by **Path Depth (number of slashes `/`)**:

1. **Root Aliases (Shallowest):** Imports with no sub-paths come first.
   _Example:_ `@elements` and `@commons` are placed at the top of this group.
2. **Sub-path Aliases (Deeper):** The more slashes `/` a path has, the lower it is placed.
   _Example:_ `@elements` appears above `@elements/button`.

### Group 3: Relative Paths (Local Files)

Order within this group is determined by **Reverse Depth**:

1. **Furthest Paths:** The more `../` prefixes, the higher the position.
2. **Closest Paths:** Local files starting with `./` are placed at the bottom of this group.
   _Example:_ `../../constants.ts` is above `../types.ts`, and `../types.ts` is above `./styles.ts`.

---

## Type Import Handling (TypeScript)

1. **Pure Type Imports:** If only types are being imported, use the `import type` syntax.
   _Example:_ `import type { UserRole } from '@commons';`
2. **Mixed Imports:** If importing both values and types together, place the `type` keyword inside the curly braces.
   _Example:_ `import { type UserRole, DEFAULT_VALUE } from '@commons';`

---

## Component Writing Standards & Folder Structure

### 1 Props Format (React + TypeScript)

- Use the following standard pattern for component declarations and props destructuring:

```ts
const FeatureName = (props: PropsType) => {
  const { /* fields */ } = props;

  return (
    // UI
  );
};
```

- Keep the `PropsType` definition in a separate `types.ts` file in the same folder as the component.
- For TypeScript, import pure types with `import type`:

```ts
// FeatureName.tsx
import type { PropsType } from "./types";
```

### 2 Separate Logic and UI (Usecase)

- Keep UI rendering in component files (`.tsx`).
- Move feature-specific logic, business rules, data mapping, and helpers into the `usecase/` folder.
- Create `usecase/index.ts` as a barrel file to re-export all usecase functions and hooks.

Example structure:

```txt
feature/
  FeatureName.tsx
  types.ts
  usecase/
    index.ts
    use-handle-features.ts
    use-submit-form.ts
  components/
    features-header/
    features-list/
```

Example `usecase/index.ts`:

```ts
export * from "./use-handle-features.ts";
export * from "./use-submit-form.ts";
```

### 3 Code Splitting for Large UI Components

- If a UI component becomes too long or crowded, split it into smaller child components.
- Put child components under a `components/` folder at the same level as the main component.
- Use **kebab-case** for child component folder names.
  - Example: `features-header`, `features-modal`, `features-empty-state`.

Notes:

- Prefer splitting based on clear UI blocks such as Header, List, Section, Modal, Empty State, and similar sections.
- Keep child component props explicit. Avoid passing large objects unless there is a clear reason.

---

## Emotion CSS Scoping Rules

### 1 One `css={}` prop per component root

- Apply the Emotion `css` prop **only on the root element** of a component.
- All child elements use plain `className` instead of the `css` prop.

  ```tsx
  // ✅ Correct
  const Hero = () => (
    <section css={heroSectionCx}>
      <div className="hero-inner">
        <h1 className="hero-title">...</h1>
      </div>
    </section>
  );

  // ❌ Wrong — css prop on every child
  const Hero = () => (
    <section css={heroSectionCx}>
      <div css={heroInnerCx}>
        <h1 css={heroTitleCx}>...</h1>
      </div>
    </section>
  );
  ```

### 2 styles.ts uses a single scoped `css` block

- Export one `css` template literal per component from `styles.ts`.
- Nest all child class selectors inside that single root block.
- Use kebab-case class names that match what the component passes as `className`.

  ```ts
  // styles.ts
  export const heroSectionCx = css`
    padding: 1.5rem;

    .hero-inner {
      max-width: 80rem;
      margin: 0 auto;
    }

    .hero-title {
      font-size: clamp(2rem, 11vw, 6rem);
      color: #ffffff;
    }
  `;
  ```

### 3 No inline `style={}` props

- **Inline `style` props are prohibited** in component files.
- All visual styles — including one-off overrides, opacity, gradients, and layout — must live in `styles.ts`.
- Use modifier class names (e.g. `.pricing-feature-text--excluded`) or `:nth-child` selectors for per-item variations.

  ```tsx
  // ❌ Prohibited
  <div style={{ marginBottom: "1rem", opacity: 0.4 }} />

  // ✅ Correct — class drives the style
  <div className="stat-item" />

  // styles.ts
  .stat-item {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
  ```

### 4 BEM-style modifier classes for variants

- Use `--modifier` suffix for variant states inside the same component scope.

  ```tsx
  <article
    className={`pricing-card${pkg.popular ? " pricing-card--popular" : ""}`}
  />
  ```

  ```ts
  .pricing-card {
    border: 0.0625rem solid rgba(255,255,255,0.1);

    &--popular {
      border-color: rgba(255,255,255,0.35);
    }
  }
  ```

---

## CSS Styling Rules

1. **Avoid grouped class selectors with commas.** When a selector targets multiple class scopes, split it into parent-scoped blocks.

   Avoid:

   ```css
   .stack-head h2,
   .parallax-head h2,
   .awards-grid h2 {
     font-family: "Space Grotesk", sans-serif;
   }
   ```

   Prefer parent-scoped nesting:

   ```css
   .stack-head {
     h2 {
       font-family: "Space Grotesk", sans-serif;
     }
   }

   .parallax-head {
     h2 {
       font-family: "Space Grotesk", sans-serif;
     }
   }

   .awards-grid {
     h2 {
       font-family: "Space Grotesk", sans-serif;
     }
   }
   ```

2. **Nest child selectors under their parent class when they belong to the same UI block.** This keeps related styles together and avoids repeated flat selectors.
   Do not keep a parent block and its flat child selector as separate adjacent rules when they can be expressed as one nested block.

   Preferred:

   ```css
   .footer-cta {
     display: block;

     h2 {
       font-family: "Space Grotesk", sans-serif;
     }

     &:hover {
       h2 {
         color: #d1d5db;
       }
     }
   }
   ```

3. **Use explicit flat selectors only as a fallback when nested CSS causes runtime output issues.** Even in fallback mode, avoid grouped selectors with commas.

   Safe flat fallback:

   ```css
   .stack-head h2 {
     font-family: "Space Grotesk", sans-serif;
   }
   ```

4. **Keep media-query selectors explicit and readable.** Do not combine unrelated selectors with commas just to reduce line count. If several selectors share the same declaration, keep each selector in its own block or nest the child selectors inside their parent block.

   Avoid:

   ```css
   .hero-overlay,
   .section-shell,
   .footer-content {
     padding-right: 16px;
     padding-left: 16px;
   }
   ```

   Prefer:

   ```css
   .hero-overlay {
     padding-right: 16px;
     padding-left: 16px;
   }

   .section-shell {
     padding-right: 16px;
     padding-left: 16px;
   }

   .footer-content {
     padding-right: 16px;
     padding-left: 16px;
   }
   ```

5. **Keep pseudo selectors close to the block they modify.** Prefer nesting pseudo states inside the owning class.

   ```css
   .archive-button {
     transition: opacity 0.3s ease;

     &:hover {
       opacity: 0.6;

       svg {
         transform: translateX(4px);
       }
     }
   }
   ```

---

## Lighthouse Performance Guardrails

### Performance Regression Rules

1. Do not reintroduce asynchronous loading for the Hero, Portfolio, or About
   sections without a layout-stable fallback. Rendering an empty fallback can
   make the footer appear early and cause a large layout shift.
2. Keep the hero/LCP image eager, preloaded, and marked with
   `fetchPriority="high"`. Do not apply `loading="lazy"` to the LCP image.
3. Every content image must declare intrinsic `width` and `height`. Responsive
   images must use an appropriate `srcSet` and `sizes`.
4. Images below the fold, including portfolio and carousel images, must use
   `loading="lazy"` and `decoding="async"` unless measurement proves that eager
   loading is required.
5. Keep image source masters separate from generated delivery assets. Browser
   imports must use files under `src/assets/optimized-img`, not the large master
   images.
6. Regenerate responsive image variants after changing a master image:

   ```bash
   npm run optimize:images
   ```

7. Do not restore the Spline iframe or other heavy third-party visual runtime
   without measuring its payload, main-thread cost, cookie issues, and effect
   on Best Practices. Prefer CSS-native decorative backgrounds.
8. Keep Inter self-hosted. Do not add a render-blocking Google Fonts stylesheet
   unless there is a measured requirement and an equivalent non-blocking
   strategy.
9. Preserve the Emotion `jsxImportSource` Vite configuration. Production builds
   must be visually inspected because a build can compile successfully while
   Emotion `css` props remain unprocessed.
10. Performance work must not remove or weaken semantic landmarks, headings,
    alt text, accessible names, keyboard focus behavior, reduced-motion
    handling, or indexable content.

### Required Verification

Before completing a performance-sensitive change, run:

```bash
npm run lint
npm run build
```
