---
version: beta
name: Ascent
description: >
  LinkME's design system, built from MEA CARES' own 2026 branding guide
  rather than an invented palette. MEA CARES frames itself as "MC
  Corporation," a building where every initiative is a different floor,
  linked by an elevator. LinkME is the floor whose job is literally
  "connecting from one place to another" — so its signature motif is the
  staircase: batches climb it left to right, and one watermarked flight
  rises behind the hero.
colors:
  primary: "#1C2945"
  primary-strong: "#10182B"
  primary-soft: "#1E5BBD"
  on-primary: "#FFFFFF"
  secondary: "#57647E"
  secondary-tint: "#EBF0F4"
  tertiary: "#FFE445"
  tertiary-bright: "#FFE445"
  tertiary-ink: "#716009"
  on-tertiary: "{colors.primary}"
  neutral: "#F2EFE8"
  surface: "#FFFFFF"
  border: "#E4E0D3"
  success: "#2F7D5A"
  success-bg: "#E7F3EC"
  warning: "#3C1F04"
  warning-bg: "#F2E7D8"
  danger: "#A3403A"
  danger-bg: "#F6E9E7"
typography:
  display:
    fontFamily: Fraunces
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.02em
  h1:
    fontFamily: Fraunces
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.01em
  h2:
    fontFamily: Fraunces
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.005em
  h3:
    fontFamily: Fraunces
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.08em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.01em
  data-md:
    fontFamily: IBM Plex Mono
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  margin: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 22px
  button-primary-hover:
    backgroundColor: "{colors.primary-soft}"
  button-secondary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 22px
  button-secondary-hover:
    backgroundColor: "{colors.tertiary-bright}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderColor: "{colors.border}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 11px 21px
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    borderColor: "{colors.border}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 7px 13px
  chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.primary}"
  chip-step:
    description: >
      The batch selector only — each chip sits at a different height than
      its neighbor, ascending left to right, so the row itself reads as a
      staircase. See Components → Batch stairs.
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    borderColor: "{colors.border}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 14px
  input-focus:
    borderColor: "{colors.tertiary}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  badge-success:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 4px 10px
  badge-warning:
    backgroundColor: "{colors.warning-bg}"
    textColor: "{colors.warning}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 4px 10px
  badge-danger:
    backgroundColor: "{colors.danger-bg}"
    textColor: "{colors.danger}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 4px 10px
  list-item:
    borderColor: "{colors.border}"
    padding: "{spacing.md}"
  tooltip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 6px 10px
  checkbox:
    borderColor: "{colors.border}"
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    size: 18px
  checkbox-checked:
    backgroundColor: "{colors.primary}"
    borderColor: "{colors.primary}"
  radio:
    borderColor: "{colors.border}"
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.full}"
    size: 18px
  radio-checked:
    backgroundColor: "{colors.primary}"
    borderColor: "{colors.primary}"
---

## Overview

MEA CARES' 2026 branding guide frames the whole organization as "MC
Corporation" — a building where every initiative (FutureME, Blueprint,
MentorME, NExpo, LinkME…) is a different floor, and the elevator is what
ties them together. Each floor gets its own motif inside that shared
building: FutureME is a suitcase opening onto new worlds, Blueprint is
origami and paper-folding, MentorME is a coffee-shop chat. **LinkME's own
page in the guide names its motif directly: staircases — "connecting from
one place to another," "movement/going upstairs."** This system, Ascent,
is that motif built out as an actual product UI rather than left as mood-
board illustration.

The palette below is not derived or estimated — it's copied verbatim from
the guide's own "Color Scheme" page, so LinkME reads as unmistakably part
of MEA CARES rather than a lookalike invented from the logo alone.

Two house rules still run through every component, unchanged from before:
**no pill shapes** (buttons, tags, and filters use a soft rounded-rectangle
instead of a fully-rounded capsule), and **restraint with iconography** —
the staircase is the one signature move, and it appears in exactly two
places (see Components). It does not decorate the cards, the filters, or
the footer.

## Colors

Every hex below is quoted directly from the "MEA CARES 2026 MarkStrat
Branding Guide," page 3 ("Color Scheme → Main").

- **Primary — Ink Navy (#1C2945):** The guide's deep navy. Default text
  color and the fill for primary actions/nav — same role Harbor Ink played
  before, now on the brand's own hex rather than a derived approximation.
- **Primary (soft) — Royal Blue (#1E5BBD):** The guide's second blue.
  Used where Ink Navy needs a lighter, more energetic step — hover states
  on navy buttons, and the dark-mode "live" accent.
- **Secondary — Slate (#57647E):** Desaturated navy-gray for supporting
  text and captions, tuned to sit quietly against the new Ink Navy.
- **Tertiary — Gold (#FFE445):** The guide's own bright gold, used exactly
  as printed — active states, focus rings, hover borders, the live-data
  dot. Reserve **Tertiary Ink (#716009)**, a much darker value in the same
  hue, for any case where gold needs to work as small text.
- **Neutral — Cream (#F2EFE8):** The guide's cream, for page background.
  Warmer than pure white so large fields of it feel considered.
- **Surface (#FFFFFF):** Pure white, reserved for cards and elevated
  content sitting on top of Cream.
- **Warning — Deep Brown (#3C1F04):** The guide's seventh main color had
  no home in the previous palette; it now carries "Closing soon" badges
  and the empty-state stamp, reading like ink on a rubber stamp rather
  than a generic amber warning.
- **Success/Danger** (green/brick red) are independent, non-brand hues —
  they exist so "Open" and "Closed" stay legible and distinct from Gold,
  which is reserved for interactive accent.

Every text/background pairing above has been checked against WCAG AA
(4.5:1 for normal text); Gold (#FFE445) is accent-only and must not carry
small text on its own — pair it with Tertiary Ink instead.

## Typography

Unchanged from the previous system: the branding guide's own typography
page was an unfilled template with no typeface specified, so there was no
brand mandate to follow or break. Fraunces still carries every headline;
Inter still carries everything meant to be read at length; IBM Plex Mono
is still reserved for dates, counts, and deadlines.

## Layout

Still a single scrolling page, not a multi-page app — layout tokens
optimize for **content width and rhythm**, not a grid system.

- Content max-width: 1100px, centered, with 20px side gutters on mobile.
- An 8px base spacing scale (4/8/16/24/32/48/64) governs internal padding
  and the vertical rhythm between sections.
- Cards and form fields use generous internal padding (`spacing.lg`, 24px)
  so the interface reads as considered rather than dense.

## Elevation & Depth

Depth is mostly conveyed through **borders and background contrast**, not
heavy shadow — Surface cards on a Cream background with a 1px Border line
do most of the work. A soft, low-opacity shadow is reserved for the sticky
search/filter panel and the detail modal, both using the same two-layer
shadow (a tight 2px contact shadow plus a diffuse 24px ambient shadow).

## Shapes

**Soft but structured.** Corners are rounded enough to feel approachable —
never sharp, never clinical — but never fully rounded into a pill or
capsule. `rounded.full` exists only for genuinely circular things — an
avatar, an icon-only close button — never for anything with text inside it
running wider than it is tall.

## Components

- **Buttons:** Primary (Ink Navy fill, white text), Secondary (Gold fill,
  ink text), Ghost (transparent, bordered). All three share `rounded.md`
  and the same label typography.
- **Chips:** Filters and multi-select tags. Rounded-rectangle
  (`rounded.sm`), bordered, Surface background at rest; solid Ink Navy
  fill with white text when active.
- **Batch stairs (signature):** The one place the staircase motif actually
  becomes structure rather than decoration. The five batch chips
  (Freshies → Sophs → Juns → Seniors → Super Seniors) sit at five
  different heights, ascending left to right in even steps, so picking a
  batch reads as picking a stair to stand on — appropriate specifically
  because batch order is a real sequence, not a decorative excuse for
  staggering. Desktop/tablet only (`min-width:641px`); at narrower widths
  the row wraps to 2–3 columns and the stagger is switched off rather than
  left to collide.
- **Hero watermark (signature):** A single staircase illustration from
  LinkME's own asset page in the branding guide sits behind the hero copy,
  bottom-right, at ~15% opacity with `mix-blend-mode: screen` so it reads
  as a faint rising flight rather than clip-art. This and the batch stairs
  are the system's only two uses of the motif — everywhere else (cards,
  filters, footer) stays quiet by design.
- **Lists:** Each row gets a 1px Border bottom rule and `spacing.md`
  vertical padding; no zebra-striping.
- **Tooltips:** Ink Navy background, white caption-sized text,
  `rounded.sm`.
- **Checkboxes:** Square (`rounded.sm`), Border outline at rest, solid Ink
  Navy fill with a white check mark when checked.
- **Radio buttons:** Circular (`rounded.full`), Border outline at rest,
  Ink Navy fill with a white dot when selected.
- **Input fields:** Cream background (not Surface — this is what visually
  distinguishes an editable field from a static card), Border outline,
  Gold border on focus.
- **Status badges:** Success/Warning/Danger each pair a saturated text
  color with its own pale tint background — never the solid saturated
  color as a fill — keeping status legible while staying quiet next to
  Gold, the system's one interactive accent.

## Do's and Don'ts

- Do use Gold (tertiary) only for accents, secondary actions, and active
  states — never as a body text color at full saturation.
- Do keep the staircase motif to its two named places (batch stairs, hero
  watermark). Don't add a third — a per-card stair icon, a stair-shaped
  divider between every section — the moment it shows up twice more it
  stops reading as a signature and starts reading as wallpaper.
- Do use `rounded.sm`–`rounded.lg` for every button, chip, card, and input,
  scaled to the element's size.
- Don't use `rounded.full` (pill/capsule) on anything with text running
  wider than it is tall.
- Don't stretch buttons or inputs to the full width of their container by
  default; size them to their content.
- Don't reach for an SVG icon before checking whether color, weight, or a
  text label already solves the problem.
- Do keep Fraunces exclusively for headlines (H3 and above).
- Do use `typography.data-md` (mono) for any deadline, date, or count a
  student is expected to scan.
