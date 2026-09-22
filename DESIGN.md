---
version: alpha
name: Harbor & Amber
description: >
  A polished, corporate design system for MEA's Opportunity Masterfile,
  rooted in the actual blue/gold hues of the MEA Cares logo rather than a
  generic navy-and-gold default.
colors:
  primary: "#122130"
  primary-strong: "#0A141F"
  primary-soft: "#193757"
  on-primary: "#FFFFFF"
  secondary: "#53616E"
  secondary-tint: "#EBF0F4"
  tertiary: "#D3BC45"
  tertiary-bright: "#E3D06D"
  tertiary-ink: "#716009"
  on-tertiary: "{colors.primary}"
  neutral: "#FAF9F5"
  surface: "#FFFFFF"
  border: "#E7E5DA"
  success: "#2F7D5A"
  success-bg: "#E7F3EC"
  warning: "#885011"
  warning-bg: "#F8ECD6"
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

Harbor & Amber is the design system for MEA's Opportunity Masterfile — a
live-synced board where students search internships, certifications, and
work postings pulled straight from a Google Sheet.

The personality is **polished and corporate**: this is a tool that handles
real deadlines and real applications, so it should read as dependable and
considered, never playful or gimmicky. But it isn't a faceless SaaS product
either — the palette is deliberately rooted in MEA's own Cares logo (the
blue-and-gold "MC" mark), so the system feels like it belongs to MEA
specifically, not a generic dashboard template.

Two house rules run through every component: **no pill shapes** (buttons,
tags, and filters use a soft rounded-rectangle instead of a fully-rounded
capsule), and **restraint with iconography** — hierarchy and state are
communicated through color, weight, and type first, illustrative SVGs
second.

## Colors

The palette starts from the two hues in the MEA Cares logo — a confident
blue (~210°) and a warm gold (~50°) — then extends each into a range dark
or light enough to actually work as UI: body text, borders, backgrounds,
and status color, none of which the logo itself needs to solve.

- **Primary — Harbor Ink (#122130):** A near-black navy, deep enough to
  serve as the default text color and the fill for primary actions. Same
  hue as the logo's blue, pushed far darker for legibility and gravity.
- **Secondary — Slate (#53616E):** A desaturated blue-gray for supporting
  text, captions, and metadata — present without competing with primary
  content.
- **Tertiary — Amber (#D3BC45):** The accent, pulled directly from the
  logo's gold. Used for secondary actions, highlights, and active states.
  Reserve **Amber Ink (#716009)** — a much darker value in the same hue —
  for any case where gold needs to work as small text; the bright accent
  itself doesn't have enough contrast on light backgrounds to read as body
  copy.
- **Neutral — Paper (#FAF9F5):** A warm, faintly gold-tinted off-white for
  page backgrounds. Warmer than pure white so large fields of it feel
  considered rather than clinical.
- **Surface (#FFFFFF):** Pure white, reserved for cards and elevated
  content sitting on top of Paper.
- **Status colors** (success/warning/danger) are independent hues — green,
  burnt amber, and brick red — chosen so "Open," "Closing soon," and
  "Closed" stay visually distinct from each other and from the brand gold.

Every text/background pairing above has been checked against WCAG AA
(4.5:1 for normal text); Amber (#D3BC45) is the one color in the system
that is accent-only and must not carry small text on its own.

## Typography

Fraunces carries every headline; Inter carries everything meant to be read
at length. The pairing is the same logic as the palette: one voice with
editorial confidence, one voice built for clarity.

- **Display / H1–H3 (Fraunces, 600):** Warm, slightly literary serif
  headlines. Fraunces' softness keeps a navy-and-gold system from tipping
  into cold corporate territory.
- **Body (Inter, 400):** Body copy, descriptions, form values — chosen for
  screen legibility at small sizes.
- **Labels & captions (Inter, 600–700):** Uppercase, letter-spaced labels
  for filters, badges, and field labels — small but confident.
- **Data (IBM Plex Mono, 500):** Reserved specifically for dates, counts,
  and deadlines — the numbers a student is scanning for. Monospace here
  isn't decorative; tabular figures make a list of deadlines easier to
  scan than proportional numerals would.

## Layout

The product is a single scrolling page, not a multi-page app, so layout
tokens optimize for **content width and rhythm** rather than a grid system.

- Content max-width: 1100px, centered, with 20px side gutters on mobile.
- An 8px base spacing scale (4/8/16/24/32/48/64) governs internal padding
  and the vertical rhythm between sections — every gap in the interface
  should land on one of these values, not an arbitrary number.
- Cards and form fields use generous internal padding (`spacing.lg`, 24px)
  so the interface reads as considered rather than dense, even though the
  underlying data (984 rows) is large.

## Elevation & Depth

Depth is mostly conveyed through **borders and background contrast**, not
heavy shadow — Surface cards on a Paper background with a 1px Border line
do most of the work. A soft, low-opacity shadow is reserved for two cases
where something needs to feel like it's floating above the page: the
sticky search/filter panel, and the detail modal. Both use the same
two-layer shadow (a tight 2px contact shadow plus a diffuse 24px ambient
shadow) so elevation reads consistently across the product.

## Shapes

**Soft but structured.** Corners are rounded enough to feel approachable —
never sharp, never clinical — but never fully rounded into a pill or
capsule. A button, a chip, and a card all share the same family of radii
(`rounded.sm`–`rounded.lg`), just scaled to the size of the element, which
is what keeps the system feeling like one coherent shape language instead
of a grab-bag of button styles.

`rounded.full` exists only for genuinely circular things — an avatar, an
icon-only close button, a radio control — never for anything with text
inside it running wider than it is tall.

## Components

- **Buttons:** Primary (Harbor Ink fill, white text) for the one most
  important action on screen. Secondary (Amber fill, ink text) for a
  supporting action taken about as often as primary. Ghost (transparent,
  bordered) for tertiary/low-emphasis actions. All three share
  `rounded.md` and the same label typography — only fill and border
  change between them.
- **Chips:** Used for filters and multi-select tags. Rounded-rectangle
  (`rounded.sm`), bordered, Surface background at rest; solid Harbor Ink
  fill with white text when active. This replaces the pill-shaped filter
  buttons from the previous iteration of this product.
- **Lists:** Each row gets a 1px Border bottom rule and `spacing.md`
  vertical padding; no zebra-striping — rely on the rule and whitespace,
  not background color, to separate rows.
- **Tooltips:** Harbor Ink background, white caption-sized text,
  `rounded.sm`. Appear on hover/focus only, never trap keyboard focus.
- **Checkboxes:** Square (`rounded.sm`), Border outline at rest, solid
  Harbor Ink fill with a white check mark when checked — deliberately
  distinct from Radios so the two are never confused at a glance.
- **Radio buttons:** Circular (`rounded.full`), Border outline at rest,
  Harbor Ink fill with a white dot when selected.
- **Input fields:** Paper background (not Surface — this is what visually
  distinguishes an editable field from a static card), Border outline,
  Amber border on focus. Labels sit above the field in `label-caps`.
- **Status badges:** Success/Warning/Danger each pair a saturated text
  color with its own pale tint background (never the solid saturated
  color as a fill) — this keeps status color legible as text while
  staying quiet enough not to compete with Amber, which is the one color
  in the system reserved for interactive accent.

## Do's and Don'ts

- Do use Amber (tertiary) only for accents, secondary actions, and active
  states — never as a body text color at full saturation.
- Do use `rounded.sm`–`rounded.lg` for every button, chip, card, and input
  in the system, scaled to the element's size.
- Don't use `rounded.full` (pill/capsule) on anything with text running
  wider than it is tall — buttons, tags, and filters included.
- Don't stretch buttons or inputs to the full width of their container
  by default; size them to their content and let layout, not the
  component, decide when something should span wide.
- Don't reach for an SVG icon before checking whether color, weight, or a
  text label already solves the problem — icons should earn their place,
  not decorate by default.
- Do keep Fraunces exclusively for headlines (H3 and above); never set
  body copy, labels, or data in the serif.
- Do use `typography.data-md` (mono) for any deadline, date, or count a
  student is expected to scan — never set those in the serif or in
  regular body type.
