# Pages

Documentation for every page component in `src/pages/`.

---

## Home

**File:** `src/pages/Home.jsx`  
**Route:** `/`  
**Purpose:** The main landing page. Three-column layout with the feed in the center.

### Layout
```
<div> (max-w-6xl, mx-auto)
  <grid cols-12>
    ├── col-span-3  → <LeftSidebar />
    ├── col-span-6  → <Feed />
    └── col-span-3  → <RightSidebar />
  </grid>
</div>
```

### Column Breakdown
| Column | Width | Component | Contents |
|---|---|---|---|
| Left | 3/12 | LeftSidebar | Profile card, Skills, Education |
| Center | 6/12 | Feed | Search bar + blog posts |
| Right | 3/12 | RightSidebar | Contact, Experience timeline, Featured posts |

### Responsiveness
- On mobile (`< lg`): all columns collapse to single full-width column, stacked vertically.
- Sidebars lose their `sticky` behaviour on mobile (sticky only applies at `lg:`).

### Notes
- No data fetching — all content is static from `src/data/`.
- The 3-6-3 grid gives the feed the majority of the viewport, similar to a LinkedIn-style layout.

---

## Me

**File:** `src/pages/Me.jsx`  
**Route:** `/me`  
**Purpose:** Personal "About" page. Uses a bento grid layout — cards of varied widths scattered across a 12-column grid for a more dynamic, less column-y feel.

> See `design-template.md → Me Page Redesign Spec` for full visual details.

### Layout — Bento Grid (`grid-cols-12`, `max-w-5xl`)

```
<div> (max-w-5xl, mx-auto, px-4, py-8)
  <div> (grid grid-cols-12 gap-4 auto-rows-min)
    │
    ├── [1] Hero Banner          col-span-12
    │    └── indigo-50→white gradient card
    │         ├── Avatar (initials, from-accent to-violet-400)
    │         ├── Name + Headline + Tagline
    │         └── Pill buttons: Email · LinkedIn · GitHub · Resume
    │
    ├── [2] Stat cards (3×)      col-span-12 / sm:col-span-6 / md:col-span-4
    │    ├── 💼 Experience (profile.stats.experience)
    │    ├── 🏢 Current Company  (profile.stats.company)
    │    └── 📍 Based in         (profile.location)
    │
    ├── [3] Who I am             col-span-12 / md:col-span-5
    │    └── 2-paragraph prose bio (hardcoded)
    │
    ├── [4] Core Stack           col-span-12 / md:col-span-7
    │    └── skills.top.slice(0, 8) — indigo badge chips
    │
    ├── [5] Experience           col-span-12 / md:col-span-8
    │    └── accent-border cards, space-y-4
    │         ├── Date subtitle + [● Current] badge on newest
    │         ├── Role title
    │         ├── Bullet body (from posts.js)
    │         └── Tag chips
    │
    ├── [6] Hobbies + Activities col-span-12 / md:col-span-4
    │    ├── Hobbies card  (Heart icon, prose paragraph)
    │    └── Activities card (Zap icon, prose paragraph)
    │
    └── [7] ContactFooter        col-span-12
         └── <ContactFooter profile={profile} />
```

### Section Details

#### [1] Hero Banner
- Container: `col-span-12`, `bg-gradient-to-br from-indigo-50 via-white to-white`, `rounded-2xl`, `p-5 sm:p-8`
- Avatar: `w-20 h-20 rounded-full bg-gradient-to-br from-accent to-violet-400` — initials, `text-2xl font-bold`
- Name: `text-2xl sm:text-3xl font-bold text-slate-900`
- Headline: `text-sm sm:text-base text-slate-600`
- Tagline: `text-xs sm:text-sm text-slate-400`
- Social buttons: `rounded-full`, `bg-slate-100` secondary / `bg-accent` primary (Resume)

#### [2] Stat Cards
- Each: `col-span-12 sm:col-span-6 md:col-span-4`
- Layout: `flex items-center gap-3 px-5 py-4`
- Label: `text-xs text-slate-400`, Value: `text-sm font-semibold text-slate-800 truncate`
- `min-w-0` on text container prevents overflow

#### [3] Who I am
- `col-span-12 md:col-span-5`
- Two short paragraphs — hardcoded prose
- `text-sm text-slate-600 leading-relaxed`

#### [4] Core Stack
- `col-span-12 md:col-span-7`
- `skills.top.slice(0, 8)` rendered as indigo badge chips
- Chips: `bg-indigo-50 text-accent border border-indigo-100 rounded-full text-xs`

#### [5] Experience Cards
- `col-span-12 md:col-span-8`, internal `space-y-4`
- Each card: `rounded-xl border border-slate-200 border-l-4 border-l-accent p-4`
- "Current" badge on `idx === 0`: `bg-green-50 text-green-700 border border-green-100 rounded-full`
- Body: `ul list-disc pl-4 text-xs text-slate-600`
- Tags: `bg-slate-100 text-slate-500 border border-slate-200 rounded-md text-xs`
- Data: `posts.filter(p => p.type === 'experience').sort(newest-first)`

#### [6] Hobbies + Activities
- Container: `col-span-12 md:col-span-4 flex flex-col gap-4`
- Each card: `bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex-1`
- Icon: `size={26}` in `text-accent`, above the heading
- **Content format: prose paragraph** (`text-sm text-slate-600 leading-relaxed`) — not a bullet list
- Hobbies text: covers football, cricket, swimming, hiking, racing games naturally in one paragraph
- Activities text: Dell FC, local tournaments, hackathons in one paragraph

#### [7] ContactFooter
- `col-span-12`
- Component: `<ContactFooter profile={profile} />`
- Subtitle: "Open to work opportunities, collaborations, or just a good conversation."

### Data Sources
| Section | Source |
|---|---|
| Hero | `profile.name`, `profile.headline`, `profile.tagline`, `profile.email`, `profile.linkedin`, `profile.github` |
| Stats | `profile.stats.experience`, `profile.stats.company`, `profile.location` |
| Who I am | Hardcoded prose (2 paragraphs) |
| Core Stack | `skills.top.slice(0, 8)` |
| Experience | `posts` filtered `type === 'experience'`, sorted newest-first |
| Hobbies / Activities | Hardcoded prose paragraphs |
| ContactFooter | `profile` prop |

### Responsiveness
| Breakpoint | Behaviour |
|---|---|
| Mobile (`< sm`) | All cells `col-span-12` — single column stack |
| `sm` (640px) | Stat cards: 2-per-row (`sm:col-span-6`) |
| `md` (768px) | Full bento layout: Who I am (5), Core Stack (7), Experience (8), Hobbies+Activities (4) |

---

## PostDetail

**File:** `src/pages/PostDetail.jsx`  
**Route:** `/post/:id`  
**Purpose:** Full-page reader view for a single post.

### Data
- Reads `id` from URL params via `useParams()`.
- Finds the matching post in `posts` array.
- For `type === 'markdown'`: loads content via `getMarkdown(post.id)`.
- For other types: joins `post.body` array with `\n\n`.

### Layout
```
<div> (min-h-screen, bg-gray-50)
  <div> (max-w-3xl, mx-auto)
    ├── ← Back to feed link
    └── <article> (bg-white, rounded-xl, border, shadow)
         ├── Category badge + Date
         ├── Title (h1)
         ├── Subtitle
         ├── <div class="prose prose-base">
         │    <ReactMarkdown>{content}</ReactMarkdown>
         └── Tags (border-top separator)
```

### Not Found State
If no post matches the `id` param:
```
Centered card:
  "Post not found"
  "The post you're looking for doesn't exist."
  ← Back to home
```

### Notes
- Uses `prose prose-base` (slightly larger than the `prose-sm` in Feed) for comfortable reading.
- No pagination or next/prev post navigation — potential future improvement.
- The page uses its own full-page `bg-gray-50` background, ignoring the Layout shell's styling (Layout wraps it but the inner div overrides visually).
