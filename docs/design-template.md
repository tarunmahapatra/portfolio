# Design Template

This document defines the design system for the portfolio. Use it as the reference for all future UI work.

> **Status:** Work in progress. Sections marked `[TODO]` are placeholders to be defined and implemented.

---

## Colour Palette

### Current

| Token | Value | Usage |
|---|---|---|
| `accent` | `#2563eb` (blue-600) | Primary actions, links, badges, timeline dots, focus rings |
| `gray-50` | `#f9fafb` | Page background |
| `gray-100` | `#f3f4f6` | Secondary badge background, hover states |
| `gray-200` | `#e5e7eb` | Card borders, dividers, timeline lines |
| `gray-400` | `#9ca3af` | Placeholder text, icons, muted labels |
| `gray-500` | `#6b7280` | Secondary text, dates, subtitles |
| `gray-600` | `#4b5563` | Body text, nav links |
| `gray-700` | `#374151` | Primary body text inside cards |
| `gray-800` | `#1f2937` | Base body text (global default) |
| `gray-900` | `#111827` | Headings, card titles |
| `white` | `#ffffff` | Card backgrounds, navbar |
| `blue-50` | `#eff6ff` | Category badge background, top skill badge background |
| `blue-100` | `#dbeafe` | Top skill badge border |
| `blue-400` | `#60a5fa` | Avatar gradient end colour |

### Planned Additions `[TODO]`

- **Dark mode** — full palette to be defined. Consider `gray-900` bg, `gray-100` text, `blue-400` accent.
- **Semantic colours** — success (green), warning (amber), danger (red) for future status indicators.
- **Surface levels** — define distinct levels (bg, card, elevated card) for visual depth.

---

## Typography

### Current

| Element | Tailwind Classes | Notes |
|---|---|---|
| Page title (h1) | `text-3xl font-bold text-gray-900` | Me page header |
| Card title (h2) | `text-lg font-bold text-gray-900` | PostCard, SectionCard |
| Post title (detail) | `text-2xl md:text-3xl font-bold text-gray-900` | PostDetail h1 |
| Section heading | `text-lg font-semibold text-gray-900` | Sidebar headings |
| Subtitle | `text-sm text-gray-500` | Role subtitle, post subtitle |
| Body text | `text-gray-700 leading-relaxed` | Card body |
| Small / meta | `text-xs text-gray-400` | Dates, location, tag text |
| Nav link | `text-sm font-medium text-gray-600` | Navbar |
| Badge text | `text-xs font-semibold` | Category badge |

### Font Stack
Currently uses Tailwind's default system font stack (no custom web font loaded).

### Planned `[TODO]`

- **Custom font pairing:**
  - Headings: `Inter` or `Geist` (clean, modern)
  - Body: `Inter` or system-ui
  - Mono (code blocks): `JetBrains Mono` or `Fira Code`
- **Type scale review** — standardise h1/h2/h3/body into a consistent modular scale.
- **Line height** — audit `leading-` usage across components for consistency.

---

## Spacing & Layout

### Grid System
- Container: `max-w-6xl mx-auto px-4`
- Home page: `grid-cols-12` with `3 | 6 | 3` column split
- Content pages (Me, PostDetail): `max-w-3xl mx-auto`

### Card Anatomy
All cards follow this pattern:
```
bg-white  rounded-xl  border border-gray-200  p-5  shadow-sm
```
- PostDetail uses `p-6 md:p-8` for more breathing room.
- Section cards on Me page use `p-6`.

### Spacing Scale (common values used)
| Value | Purpose |
|---|---|
| `gap-2` | Tag gaps, small icon-text gaps |
| `gap-4` / `gap-5` | Card-to-card spacing, content sections |
| `gap-6` | Column gaps in the grid |
| `space-y-5` | Vertical stack spacing (feed, sidebars) |
| `mt-3` / `mt-4` | Internal card section separation |
| `mb-3` / `mb-4` | Heading bottom margin |

### Planned `[TODO]`
- Audit inconsistent padding (some cards use `p-5`, others `p-6`) — standardise.
- Define responsive padding scale for mobile.

---

## Component Patterns

### Badges / Pills
**Category badge (blue):**
```
inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-accent text-xs font-semibold
```
**Skill badge - top tier (blue):**
```
px-2.5 py-1 rounded-full bg-blue-50 text-accent text-xs font-medium border border-blue-100
```
**Skill badge - other (gray):**
```
px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200
```
**Tag chip (gray, with # icon):**
```
inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md
```

### Buttons
**Primary (accent):**
```
inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-blue-700 text-sm font-medium transition
```
**Secondary (gray):**
```
inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium transition
```
**Pill button (rounded-full variant):**
```
inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium transition
```

### Links
**Inline accent link:**
```
text-accent hover:underline
```
**Nav/sidebar link:**
```
hover:text-accent transition
```

### Timeline (Vertical)
```
relative pl-4 border-l-2 border-gray-200 space-y-{4|5|8}
  └── dot: absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-white
```
- Compact (sidebar): `space-y-4`, `text-xs` body, tags shown
- Full (Me page): `space-y-8`, `text-sm` body with bullet list, tags shown

### Search Input
```
w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 bg-white shadow-sm text-sm
focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition
```

---

## Iconography

**Library:** `lucide-react` v0.468  
**Style:** Stroke icons, consistent weight

### Size Scale
| Size | Usage |
|---|---|
| `12` | Inline meta icons (Calendar, Hash in tags) |
| `14` | Profile stat icons (Briefcase, MapPin) |
| `15-16` | Standard UI icons (Nav, sidebar headings, search) |
| `18` | Footer social icons |
| `20` | Section heading icons on Me page |

---

## Shadows & Borders

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | All cards |
| `border border-gray-200` | `1px solid #e5e7eb` | All card borders |
| No shadow on hover | — | Cards are not interactive (no lift effect currently) |

### Planned `[TODO]`
- Add `hover:shadow-md transition` to clickable cards (PostCard with `to` prop).
- Consider `shadow-md` for modals/overlays when added.

---

## Motion & Transitions

Currently used:
- `transition` on buttons and links (default 150ms ease)
- No animation on page load, card entrance, or route change

### Planned `[TODO]`
- **Route transitions** — fade in/out between pages using `framer-motion` or CSS transitions.
- **Card hover lift** — `hover:-translate-y-0.5 hover:shadow-md transition-all` on PostCard.
- **Search filter animation** — animate post list filtering (opacity + height).
- **Skeleton loaders** — if async content loading is added later.

---

## Responsive Breakpoints

Using Tailwind defaults:

| Breakpoint | Min-width | Usage |
|---|---|---|
| (default) | 0px | Mobile-first base styles |
| `sm` | 640px | Navbar links visible, profile row layout |
| `md` | 768px | PostDetail larger padding |
| `lg` | 1024px | 3-column grid activates, sidebars go sticky |
| `xl` | 1280px | Not currently used |

### Planned `[TODO]`
- **Mobile navbar** — add hamburger menu for `< sm` screens.
- **Tablet layout** — define a 2-column layout for `sm` to `lg` range (currently jumps directly from 1 to 3 columns).

---

## Planned Features `[TODO]`

These are design/UI directions to explore and implement:

### Dark Mode
- Toggle in navbar (sun/moon icon)
- Persist preference in `localStorage`
- Full dark palette (see Colours above)

### Blog Enhancements
- **Reading time estimate** on PostCard (e.g. "4 min read")
- **Next / Previous post** navigation at the bottom of PostDetail
- **Table of contents** sidebar on long PostDetail pages
- **Category filter** pills above the feed (e.g. filter by "Featured", "Case Study")

### Me Page
- Add `ProfileHeader` component at the top (currently unused)
- Add `ContactFooter` CTA at the bottom (currently unused)
- Add `SkillCloud` section (currently unused)
- Add Education entry from `posts.js` `type: 'education'`

### Home Page
- Intro card at the top of the feed using `posts` `type: 'intro'`

### Animations
- Page load fade-in
- PostCard hover lift
- Search result filter animation

### SEO / Meta
- `<title>` and `<meta description>` per page
- Open Graph tags for blog posts
- Sitemap (if moving away from HashRouter to BrowserRouter + static export)
