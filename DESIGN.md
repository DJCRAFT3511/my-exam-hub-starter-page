---
name: MyExamHub
description: A calmer way to prepare for the 11+ and beyond — a warm, editorial brochure site for parents and children navigating school.
colors:
  burgundy: "#7A2438"
  mint: "#4FD1B5"
  teal-deep: "#0F7A6C"
  dusty-rose: "#A8536A"
  ink: "#2A1F22"
  cream: "#FFF7F5"
  surface: "#FFFFFF"
  ink-soft: "#5C4650"
  border: "rgba(42, 31, 34, 0.12)"
typography:
  display:
    fontFamily: "'Frank Ruhl Libre', Georgia, serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Frank Ruhl Libre', Georgia, serif"
    fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  title:
    fontFamily: "'Frank Ruhl Libre', Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.004em"
  body:
    fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.07em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  full: "999px"
spacing:
  1: "0.5rem"
  2: "0.75rem"
  3: "1.25rem"
  4: "2rem"
  5: "3.25rem"
  6: "5.25rem"
components:
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.4rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.burgundy}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.4rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.4}"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.55rem 0.85rem"
---

# Design System: MyExamHub

## Overview

**Creative North Star: "The Growth Journey"**

MyExamHub is a warm, editorial brochure site built around a single throughline: a child's path through school, rendered literally as a drawn path and a growing tree. The home page hero opens on a dashed route connecting four milestones (Year 2–6 → 11+ Prep → Secondary → Beyond); the About page mirrors this with an animated tree that grows a trunk and four branches, each ending in a node the visitor can open for detail. Both devices reveal themselves in place at rest (no-JS and reduced-motion visitors see the complete path/tree immediately) and animate additively for everyone else — the motion is a bonus, never a requirement to understand the page.

The palette pairs a deep, confident burgundy (serif headings, primary actions — the "trust" register a parent evaluating a tutoring product needs) with a fresh mint accent used sparingly as the "current step" marker and decorative flourish, plus a dusty-rose secondary reserved for small editorial labels (eyebrows, step numbers). The type pairing does the same double duty: Frank Ruhl Libre serif display type gives headings gravity and a slightly academic, heritage feel without tipping into stuffy; Source Sans 3 carries all body copy and UI chrome in a plain, friendly, highly legible voice. Surfaces stay flat cream/white with soft ambient shadows rather than hard borders or heavy elevation — calm, not corporate, and never primary-colored/cartoonish in the way a "kids app" would be. The system supports a light/dark theme and a second "Sage" palette swap (see Colors), both driven by attributes on `<html>`, not separate stylesheets or separate markup.

**Key Characteristics:**
- A literal, recurring path/node/tree motif carries the "growth" narrative across pages rather than living only in copy.
- Warm editorial palette (burgundy + mint + dusty-rose on cream) — confident and calm, not a generic SaaS blue-and-white template.
- Serif display type for gravity, plain sans body type for clarity; never mixed within the same text role.
- Flat surfaces, soft ambient shadows, generous rounded corners — nothing skeuomorphic or hard-edged.
- Motion is additive and respectful of `prefers-reduced-motion`: every animated reveal has a fully-visible base state.

## Colors

Warm editorial burgundy anchors trust and hierarchy; a fresh mint accent marks "you are here" moments; dusty-rose carries small editorial labels. Backgrounds stay warm cream/white, never stark white-on-white or cold gray.

### Primary
- **Burgundy** (`#7A2438`): Headings (h1–h4), primary buttons, brand wordmark's dark letters, active nav state, section icons, journey/tree node borders and numerals. The system's authority color.

### Secondary
- **Dusty Rose** (`#A8536A`): Eyebrow labels, step numbers, section kickers — always small, uppercase, letter-spaced text, never a fill or a large surface.

### Accent
- **Mint** (`#4FD1B5`): The "current step" and highlight color — hero path stroke, journey-dot borders, milestone rail, "now" tree-node fill, palette-switcher swatch. Used as a bright decorative fill/border/stroke, essentially never as body text on light backgrounds.
- **Deep Teal** (`#0F7A6C`, light theme only — dark theme uses Mint directly): A derived, non-pinned contrast fix. Mint (`#4FD1B5`) fails text/icon/focus-ring contrast on the pale cream backgrounds, so wherever the accent needs to be *foreground* (numerals, icons, link text, focus outlines) light mode substitutes this deeper teal instead of the raw accent. Dark mode doesn't need the substitution because Mint already contrasts against the near-black surfaces there.

### Neutral
- **Ink** (`#2A1F22`): Body text color (light theme), footer background, and the fixed dark ink used for text/icons sitting *on top of* the mint accent's own fill (chips, accent-filled tags) — this one stays constant across themes since the accent stays bright in both, even though `--color-text` itself flips to near-white in dark mode.
- **Cream** (`#FFF7F5`): Page background (light theme), footer text, and text-on-burgundy (buttons, CTA band).
- **Surface** (`#FFFFFF`): Cards, header, form fields, elevated panels (light theme).
- **Ink Soft** (`#5C4650`): Body copy / paragraph text, secondary/supporting text.
- **Border** (`rgba(42, 31, 34, 0.12)`): Hairlines — card borders, header underline, dividers. A translucent tint of Ink, not a flat gray, so it warms with the palette.

### Named Rules
**The Foreground Substitution Rule.** The raw accent color (Mint) is a decorative fill/border/stroke color, not a text color, in light mode. Anywhere the accent needs to be foreground content (numerals, links, icons, focus rings) on a light surface, substitute Deep Teal instead — never place raw light-mode Mint text on cream/white.

**The Theme-Constant Ink Rule.** Text/icons placed *on the accent's own fill* (badges, tags) always use a fixed dark ink (`#2A1F22`), regardless of theme — because the accent fill doesn't change between themes even though the general text color does.

### Theming (not in frontmatter — see prose)
Two independent attribute-driven switches on `<html>`, no separate stylesheets:
- **`data-theme="dark"`** (or `prefers-color-scheme: dark` with no explicit override): backgrounds and surfaces move to near-black burgundy-tinted tones (`#240F17` bg / `#331623` surface), text flips to near-white, shadows deepen and lose their color tint (pure black at higher opacity), and Deep Teal is dropped in favor of using Mint directly everywhere.
- **`data-palette="sage"`**: swaps Primary/Accent/Secondary to a second confirmed palette — Primary `#331623` (a deep plum-black), Accent `#8CA88F` (sage green), Accent-strong `#4F6F55` (deep sage, light mode) / `#8CA88F` (dark mode), Secondary `#E0B93A` (gold). Cream/Surface/Ink/Border are unaffected. Persisted via `localStorage` alongside theme (see `assets/js/main.js` keys `myexamhub-theme`, `myexamhub-palette`).

## Typography

**Display Font:** Frank Ruhl Libre (with Georgia, serif fallback)
**Body Font:** Source Sans 3 (with -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif fallback)

**Character:** A confident, slightly academic serif for anything that announces a section, paired with a plain, highly legible grotesque for everything you actually read — the pairing signals "credible institution" without reading as stiff or bureaucratic.

### Hierarchy
- **Display** (700, `clamp(2.1rem, 4.2vw, 3.4rem)`, line-height 1.08, tracking -0.02em): Page-level h1s only.
- **Headline** (700, `clamp(1.6rem, 2.8vw, 2.3rem)`, line-height 1.12, tracking -0.012em): Section h2s.
- **Title** (700, 1.3rem, tracking -0.004em): h3s (card headings, sub-sections). Contextual overrides exist for tighter spots (e.g. tree-card h3 at 0.92rem) — treat those as local exceptions, not a new global role.
- **Body** (400, 1.0625rem, line-height 1.6, max-width 62ch on `<p>`): All paragraph copy.
- **Label** (700, 0.78rem, tracking 0.06–0.08em, uppercase): Eyebrows, step numbers, footer column headings, badges. Always uppercase and letter-spaced — this is what marks text as a label rather than a sentence.

### Named Rules
**The Optical Sizing Rule.** Tracking and leading are size-specific, not one fixed value for every heading: larger display type gets more negative tracking and tighter leading; smaller headings get progressively less of both (h1: -0.02em/1.08, h2: -0.012em/1.12, h3: -0.004em/1.15 (default)).

## Layout

Single centered container (`max-width: 1180px`, `padding-inline: 2rem`, dropping to `1.25rem` under 640px) used on every section — no full-bleed sections except the sticky header's background wash. Vertical rhythm runs on a 6-step spacing scale (`0.5rem` → `5.25rem`); most section padding uses step 5 (`3.25rem`), hero/journey-hero use step 6 (`5.25rem`) on top only.

Content grids (`.grid-2/3/4`) collapse by fixed breakpoints rather than intrinsic auto-fit: 4→2 and 3→2 columns under 900px, everything to 1 column under 640px. The hero's two-column grid (copy + journey illustration) collapses to one column under 900px, with the illustration reordered above the copy (`order: -1`) on mobile. The About page's tree illustration is desktop-only: under 760px it's replaced entirely by a stacked accordion list (`.tree-mobile-list`), not a scaled-down version of the same SVG — a deliberate content substitution, not just a responsive resize.

## Elevation & Depth

Flat-by-default with soft, warm-tinted ambient shadows used sparingly to lift interactive/floating elements off the page — never a hard drop shadow, never used to fake a hard edge. Shadows tint toward Ink in light mode (`rgba(42,31,34, …)`) and toward pure black at higher opacity in dark mode, since a colored shadow reads muddy on a dark surface.

### Shadow Vocabulary
- **sm** (`0 1px 2px rgba(42,31,34,0.06), 0 1px 1px rgba(42,31,34,0.04)`; dark: `0 1px 2px rgba(0,0,0,0.3)`): Resting state for cards, buttons, journey/tree nodes.
- **md** (`0 8px 24px rgba(42,31,34,0.10)`; dark: `0 8px 24px rgba(0,0,0,0.35)`): Hover lift for cards/buttons, the open state of tree nodes and tooltip cards.
- **lg** (`0 16px 40px rgba(42,31,34,0.16)`; dark: `0 20px 50px rgba(0,0,0,0.45)`): The mobile nav drawer and the tree's hover tooltip card — content that floats *above* the page, not just off it.

### Named Rules
**The Ambient-Not-Structural Rule.** Shadows exist to signal "this is interactive/floating," not to fake material thickness — flat sections and body copy never carry a shadow; only cards, buttons, nav chrome, and floating tooltips do, and only ever the soft ambient kind above.

## Shapes

Generous, consistent rounding drives the form language: `8px` (sm) for anything you click in a row (buttons, nav pills, inputs, skip-link), `14px` (md) for containers you read (cards, the tree note callout), `22px` (lg) for the largest standalone blocks (the CTA band, the now/later split cards). Pills (`999px`) are reserved for tag-like chips (the "coming soon" badge, tree-card status tags). Circles (`50%`) are reserved for the recurring node/dot motif (journey dots, tree nodes, header icon buttons) — the one shape that's deliberately different from the rest of the system, marking it as the signature device. Borders are hairline (1–1.5px) and translucent-ink, never a flat saturated color; the one exception is the 2–3px solid accent/primary ring around journey dots and tree nodes, which is a state indicator, not a generic border style.

## Components

### Buttons
- **Shape:** `8px` radius, `2px` transparent border reserved for the outline variant's stroke.
- **Primary:** Burgundy fill, cream text, `shadow-sm` at rest → `shadow-md` on hover, plus a 1px upward `translateY` nudge. `0.97` scale-down on press.
- **Outline:** Transparent fill, burgundy border+text (mint/deep-teal in dark mode); hover fills with a faint burgundy tint (`color-mix(… 8%, transparent)`).
- **Large variant:** `1rem 1.9rem` padding, `1.05rem` text — used for primary hero/CTA actions only.

### Chips / Badges
- **"Coming soon" badge:** Pill radius, translucent mint background (`color-mix(mint 16%, transparent)`) with a translucent mint border, dusty-rose label text — the only place dusty-rose sits on a filled background rather than bare text.
- **Tree card status tag:** Pill radius; solid mint fill + fixed dark ink text for "now," translucent dusty-rose tint + dusty-rose text for "soon."

### Cards / Containers
- **Corner Style:** `14px` (md).
- **Background:** Surface color, 1px translucent-ink border, `shadow-sm` at rest.
- **Hover:** `shadow-md` + 2px upward lift (only where the card is a link/interactive target).
- **Internal Padding:** Spacing step 4 (`2rem`).

### Inputs / Fields
- **Style:** Surface background, 1.5px translucent-ink border, `8px` radius, inherits body font.
- **Focus:** 2px solid Deep Teal outline, 1px offset — deliberately the contrast-safe accent color, not the raw brand color, so focus is always legible in both themes.
- **Layout:** Two-up `field-row` grid collapses to one column under 640px.

### Navigation
- Sticky header with a translucent, blurred backdrop (`backdrop-filter: blur(16px) saturate(160%)`) that becomes fully opaque under `prefers-reduced-transparency: reduce` or when unsupported. Center-aligned brand wordmark floats absolutely over the nav row on desktop; on mobile it drops into normal flow.
- **Nav links:** No underline; `8px`-radius padding, background wash on hover/press, and a distinct filled-pill state (`aria-current="page"`: burgundy text over a 10%-tint burgundy background; mint text over a tinted mint background in dark mode).
- **Mobile:** Off-canvas drawer sliding in from the right (`.primary-nav`, `translateX`, `--ease-drawer` cubic-bezier), full-height, with its own close button and a dimming scrim behind it.

### Signature Component: Journey Path & Growing Tree
The system's defining device, expressed twice with matching grammar but different geometry:
- **Home hero — Journey Path:** A dashed SVG stroke in Mint connects four absolutely-positioned circular "journey dots" (numbered, burgundy-numeral-on-surface, except the active "current step" dot which inverts to a solid burgundy fill). The path draws itself in via `clip-path` animation; dots fade/scale in with staggered delays.
- **About page — Growing Tree:** An SVG trunk-and-branches structure draws itself with `stroke-dashoffset` animation; circular "tree nodes" (same visual language as journey dots) sit at branch ends, open a floating detail card on hover/focus/tap, and highlight their parent branch (thicker stroke, accent color) via a pure-CSS `:has()` selector when active. Collapses to a stacked accordion list under 760px rather than trying to shrink the illustration.
- **Governing rule:** every occurrence of this device is fully visible at rest; `prefers-reduced-motion: reduce` disables all draw-in/stagger animation without hiding any content.

## Do's and Don'ts

### Do:
- **Do** use Deep Teal, not raw Mint, wherever the accent needs to be legible foreground text/icons/focus rings in light mode (**The Foreground Substitution Rule**).
- **Do** keep every occurrence of the journey/tree/node motif fully visible in its base (no-animation) state; motion is additive only.
- **Do** use CSS custom properties (`--color-*`, `--shadow-*`, `--radius-*`, `--space-*`, `--ease-*`) for every color/shadow/radius/spacing/easing value — never hardcode a hex or px value that already has a token.
- **Do** keep the circle/node shape exclusive to the journey/tree/icon-button motif so it reads as the signature device rather than a generic shape choice.
- **Do** apply nav/header/footer changes identically across all 6 HTML pages — there is no include system, so drift here is a real risk.

### Don't:
- **Don't** drift toward a generic flat-blue SaaS/startup template look — the burgundy/mint/serif pairing and the path/tree motif are what keep this from reading as an off-the-shelf template.
- **Don't** drift toward a bright-primary-color, cartoonish "kids app" look — the site is friendly to children without being childish; keep the palette and iconography editorial and calm.
- **Don't** hardcode a color inline instead of using a token — one legacy instance exists (`index.html`'s CTA band outline button, inline `border-color`/`color`), it is a known exception, not a pattern to extend.
- **Don't** use raw Mint as text/icon color on a light surface without the Deep Teal substitution — it fails contrast.
- **Don't** give the outline/ghost button a heavier treatment than the primary button; the outline exists for secondary actions and should always read as quieter.
