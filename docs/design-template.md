# Design Template

This document defines the design system for the portfolio. Use it as the reference for all future UI work.

> **Status:** Work in progress. Sections marked `[TODO]` are placeholders to be defined and implemented.

---

## Colour Palette

### Current (v2 — Indigo/Slate)

| Token | Value | Usage |
|---|---|---|
| `accent` | `#6366f1` (indigo-500) | Primary actions, links, badges, timeline dots, focus rings |
| `indigo-600` | `#4f46e5` | Hover state on accent buttons |
| `indigo-50` | `#eef2ff` | Category badge bg, top skill badge bg |
| `indigo-100` | `#e0e7ff` | Badge borders |
| `slate-100` | `#f1f5f9` | Page background |
| `slate-200` | `#e2e8f0` | Card borders, dividers, timeline lines |
| `slate-400` | `#94a3b8` | Placeholder text, muted icons, dates |
| `slate-500` | `#64748b` | Secondary text, subtitles |
| `slate-600` | `#475569` | Body text, nav links, sidebar text |
| `slate-700` | `#334155` | Primary body text inside cards |
| `slate-800` | `#1e293b` | Base body text (global default) |
| `slate-900` | `#0f172a` | Headings, card titles |
| `white` | `#ffffff` | Card backgrounds, navbar |
| `violet-400` | `#a78bfa` | Avatar gradient end colour |
| `green-50` | `#f0fdf4` | "Current" badge background (experience) |
| `green-700` | `#15803d` | "Current" badge text |
| `green-100` | `#dcfce7` | "Current" badge border |

### Previous Palette (v1 — Blue/Gray)

| Token | Old Value | Replaced by |
|---|---|---|
| `accent` | `#2563eb` blue-600 | `#6366f1` indigo-500 |
| Page bg | `gray-50` | `slate-100` |
| Card borders | `gray-200` | `slate-200` |
| Body text | `gray-700` | `slate-700` |
| Headings | `gray-900` | `slate-900` |
| Badge bg | `blue-50` | `indigo-50` |
| Avatar gradient end | `blue-400` | `violet-400` |

### Planned Additions `[TODO]`

- **Dark mode** — full palette to be defined. Suggested: `slate-900` bg, `slate-100` text, `indigo-400` accent.
- **Semantic colours** — `green-*` already used for "Current" badge. Extend: warning (amber), danger (red).
- **Surface levels** — consider `slate-50` for a third surface level (e.g. code blocks, inline highlights).

---

## Typography

### Current

| Element | Tailwind Classes | Notes |
|---|---|---|
| Page title (h1) | `text-2xl sm:text-3xl font-bold text-slate-900` | Me page hero |
| Card title (h2) | `text-base font-bold text-slate-900` | PostCard, section headings |
| Post title (detail) | `text-2xl md:text-3xl font-bold text-slate-900` | PostDetail h1 |
| Section heading | `text-base font-semibold text-slate-900` | Sidebar headings, bento card headings |
| Subtitle | `text-sm text-slate-500` | Role subtitle, post subtitle |
| Body text | `text-slate-700 leading-relaxed` | Card body |
| Small / meta | `text-xs text-slate-400` | Dates, location, tag text |
| Nav link | `text-sm font-medium text-slate-600` | Navbar |
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
- Home page container: `max-w-6xl mx-auto px-4`
- Home page grid: `grid-cols-12` with `3 | 6 | 3` column split
- Me page: `max-w-5xl mx-auto px-4 py-8` — bento `grid-cols-12`
- PostDetail: `max-w-3xl mx-auto px-4 py-8`

### Card Anatomy
All cards follow this pattern:
```
bg-white  rounded-xl  border border-slate-200  p-5  shadow-sm
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
**Category badge (indigo):**
```
inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-accent text-xs font-semibold border border-indigo-100
```
**Skill badge - top tier (indigo):**
```
px-2.5 py-1 rounded-full bg-indigo-50 text-accent text-xs font-medium border border-indigo-100
```
**Skill badge - other (slate):**
```
px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs border border-slate-200
```
**Tag chip (slate, with # icon):**
```
inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200
```

### Buttons
**Primary (accent):**
```
inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-indigo-600 text-sm font-medium transition
```
**Secondary (slate):**
```
inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium transition
```
**Pill button (rounded-full variant — used on Me page hero):**
```
inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium transition
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

### Timeline (Vertical — RightSidebar only)
```
relative pl-4 border-l-2 border-slate-200 space-y-4
  └── dot: absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-white
```
- Compact (sidebar only): `space-y-4`, `text-xs` body, tags shown
- **Me page no longer uses a dot timeline** — experience is rendered as accent-border cards (see Experience Cards pattern below)

### Experience Card (Me page)
```
rounded-xl border border-slate-200 border-l-4 border-l-accent p-4
```
- "Current" badge: `bg-green-50 text-green-700 border border-green-100 rounded-full text-xs font-medium`
- Body: `ul list-disc pl-4 text-xs text-slate-600 space-y-1`
- Tags: `bg-slate-100 text-slate-500 border border-slate-200 rounded-md text-xs`

### Search Input
```
w-full pl-9 pr-9 py-2.5 rounded-xl border border-slate-200 bg-white shadow-sm text-sm text-slate-800
placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition
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
| `border border-slate-200` | `1px solid #e2e8f0` | All card borders |
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
| `sm` | 640px | Navbar links visible; stat cards go 2-per-row on Me page |
| `md` | 768px | Me page bento layout activates (Who I am + Core Stack side-by-side, Experience + Hobbies/Activities side-by-side); PostDetail larger padding |
| `lg` | 1024px | Home page 3-column grid activates, sidebars go sticky |
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

### Me Page ✦ Redesign Spec

**Decision log:**
- Hero style: Gradient banner (`from-blue-50 to-white`)
- Personal sections: 2-column card grid
- Skills on Me page: No — sidebar only

---

#### Section 1 — Hero Banner

Full-width card replacing the plain "About Me" heading.

```
bg-gradient-to-br from-blue-50 to-white
rounded-xl border border-gray-200 p-8 shadow-sm
```

**Contents (left-aligned on desktop, centered on mobile):**
- Avatar: `w-20 h-20 rounded-full bg-gradient-to-br from-accent to-blue-400` with initials
- Name: `text-3xl font-bold text-gray-900`
- Headline: `text-base text-gray-600 mt-1`
- Tagline: `text-sm text-gray-500 mt-2 max-w-md` (from `profile.tagline`)
- Social buttons row: Email · LinkedIn · GitHub · Resume (pill button style, `rounded-full`)

**Wireframe:**
```
┌──────────────────────────────────────────────────┐
│  bg: blue-50 → white gradient                    │
│                                                  │
│  [TM]  Tarun Mahapatra                           │
│        AI Engineer @ Dell Technologies           │
│        Building enterprise GenAI systems...      │
│                                                  │
│  [✉ Email]  [in LinkedIn]  [gh GitHub]  [↓ CV]  │
└──────────────────────────────────────────────────┘
```

---

#### Section 2 — Stats Row

Three stat chips in a horizontal flex row, immediately below the hero.

**Pattern (new — "Stat Chip"):**
```
flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200
shadow-sm text-sm font-medium text-gray-700
  └── icon: lucide icon, size 15, text-accent
```

**Stats to show:**
| Icon | Label |
|---|---|
| `Briefcase` | `3+ Years Experience` |
| `Building2` | `Dell Technologies` |
| `MapPin` | `Bangalore, India` |

**Wireframe:**
```
[ 💼 3+ Years Experience ]  [ 🏢 Dell Technologies ]  [ 📍 Bangalore, India ]
```

On mobile: wraps to 2 or 1 per row naturally via `flex-wrap`.

---

#### Section 3 — Who I Am

Two-column layout inside a white card.

```
grid grid-cols-1 md:grid-cols-2 gap-6
```

- **Left col:** Short bio — 2–3 sentences max, `text-sm text-gray-700 leading-relaxed`
- **Right col:** Top 8 skills as blue badge chips (reuse existing skill badge pattern)

**Wireframe:**
```
┌─────────────────────────────────────────────────┐
│  Who I am                                       │
│  ─────────────────────────────────────────────  │
│  I'm an AI Engineer...    │ [Python] [RAG]      │
│  building backend         │ [Neo4j] [Agentic]   │
│  systems at Dell...       │ [LLM Orch.] [...]   │
└─────────────────────────────────────────────────┘
```

---

#### Section 4 — Experience (Redesigned Cards)

No longer a plain dot timeline. Each job is a **card with a left accent border**.

**New pattern — "Experience Card":**
```
bg-white rounded-xl border border-gray-200 border-l-4 border-l-accent
p-5 shadow-sm space-y-2
```

- Current role gets a badge: `● Current` — `bg-green-50 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full`
- Date/location: `text-xs text-gray-400`
- Title: `text-base font-semibold text-gray-900`
- Body: `list-disc pl-4 text-sm text-gray-700 space-y-1`
- Tags: existing tag chip pattern

**Wireframe:**
```
┌▌─────────────────────────────────────────────┐
│  Feb 2025 — Present · Bangalore    [● Current]│
│  Software Engineer 2 — Dell Technologies      │
│  · Built orchestration for GenAI workflows    │
│  · Designed RAG-based retrieval systems       │
│  [Python] [RAG] [Neo4j] [LLM Orchestration]  │
└──────────────────────────────────────────────┘

┌▌─────────────────────────────────────────────┐
│  Aug 2023 — Jan 2025 · Bangalore              │
│  Software Engineer — Dell Technologies        │
│  · 80% reduction in SAP task execution time   │
│  [Python] [Selenium] [React.js]               │
└──────────────────────────────────────────────┘
```

The outer wrapper is a `space-y-4` stack, not a dot timeline. The `▌` represents the `border-l-4 border-l-accent`.

---

#### Section 5 — Personal Sections (Hobbies + Activities)

Two cards stacked vertically inside `col-span-4`, sitting alongside the Experience section in the bento grid.

Both cards use **prose paragraphs** — not bullet lists. This gives them more character and fills the card height better next to the taller Experience column.

**Hobbies** (icon: `Heart`, `size={26}`)
- Content format: `<p className="text-sm text-slate-600 leading-relaxed">`
- Covers: football, cricket, swimming, hiking, racing games — woven into natural prose
- Text: *"Outside of work, I spend most of my time playing football and cricket — both are a big part of how I unwind. I also swim regularly and go hiking when I get the chance. On quieter evenings, you'll usually find me playing racing games."*

**Activities** (icon: `Zap`, `size={26}`)
- Content format: `<p className="text-sm text-slate-600 leading-relaxed">`
- Covers: Dell Football Club, local tournaments, hackathons — explained naturally
- Text: *"I'm part of Dell's Football Club and play in local tournaments around Bangalore. I also try to attend hackathons when they're on — it's a good way to stay sharp and meet people working on interesting problems."*

**Co-curriculars: REMOVED** — replaced by Photo Carousel (see Section 5b below).

**Wireframe:**
```
┌─────────────────────────────────────────┐
│  ❤  Hobbies                             │
│                                         │
│  Outside of work, I spend most of my   │
│  time playing football and cricket...   │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  ⚡ Activities                           │
│                                         │
│  I'm part of Dell's Football Club and  │
│  play in local tournaments...           │
└─────────────────────────────────────────┘
```

---

#### Section 5b — Photo Carousel `[TODO]`

Replaces the Co-curriculars section. A horizontal strip of personal photos.

**Implementation approach (no external library):**
```
overflow-x-auto  scroll-smooth  snap-x snap-mandatory
  └── each image: snap-start  h-56  w-auto  rounded-xl  object-cover  shrink-0
```

**Structure:**
```
<div class="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
  <h2>📷 Moments</h2>  (or similar heading)
  <div class="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
    <img class="snap-start h-56 w-auto rounded-xl object-cover shrink-0" />
    ...
  </div>
</div>
```

**Photos stored at:** `public/photos/*.jpg` (or `.webp` for better compression)

**Optional enhancements (later):**
- Prev/Next arrow buttons overlaid on the strip
- Caption text on hover (`absolute bottom-0 bg-black/40 text-white text-xs`)
- Lightbox on click

---

#### Section 6 — "Let's Connect" CTA

Use the existing `ContactFooter` component at the bottom of the page.

```jsx
<ContactFooter profile={profile} />
```

Already styled — `bg-white rounded-xl border p-5 text-center` with Email, LinkedIn, GitHub links.

---

#### Implementation Notes

- No new libraries or colours needed
- `Building2` icon from `lucide-react` for the Dell stat chip
- `border-l-4` requires Tailwind — already available in v3.4
- `green-50` and `green-700` are Tailwind defaults — no config changes needed
- Stat chip row uses `flex flex-wrap gap-3` to handle mobile reflow gracefully

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
