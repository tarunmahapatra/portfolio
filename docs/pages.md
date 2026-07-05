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
**Purpose:** Personal "About" page with bio sections and a full experience timeline.

### Layout
```
<div> (max-w-3xl, mx-auto)
  ├── ← Back to home link
  ├── Page heading: "About Me" + headline
  └── <div> (space-y-5)
       ├── SectionCard: Who I am
       ├── Experience Timeline
       ├── SectionCard: Hobbies
       ├── SectionCard: Activities
       └── SectionCard: Co-curriculars
```

### SectionCard (local component)
A reusable inline component defined within `Me.jsx`:

```jsx
function SectionCard({ icon, title, children }) { ... }
```

| Prop | Type | Description |
|---|---|---|
| `icon` | ReactNode | Lucide icon element |
| `title` | string | Section heading |
| `children` | ReactNode | Body content |

### Experience Timeline
- Data: `posts` filtered to `type === 'experience'`, sorted newest-first.
- Renders a vertical timeline with left border + dots.
- Each entry shows: **date subtitle → role title → bullet point body → tags**.
- This is the full/expanded version — the RightSidebar shows a compact (title + tags only) version.

### Notes
- `SectionCard` is defined locally — if more pages need it, extract to `src/components/`.
- `ProfileHeader` and `ContactFooter` components exist but are not used here — potential additions.
- Content in SectionCards (Hobbies, Activities, Co-curriculars) is hardcoded prose, not data-driven.

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
