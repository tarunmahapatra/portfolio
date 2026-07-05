# Components

Detailed documentation for every component in `src/components/`.

---

## Layout

**File:** `src/components/Layout.jsx`  
**Purpose:** Page shell. Wraps every route with a persistent Navbar at the top and Footer at the bottom.

### Props
| Prop | Type | Description |
|---|---|---|
| `children` | ReactNode | Page content rendered between Navbar and Footer |

### Structure
```
<div> (min-h-screen, flex-col)
  <Navbar />
  <main> (flex-1)
    {children}
  </main>
  <Footer />
</div>
```

### Notes
- `flex-1` on `<main>` ensures Footer is always pushed to the bottom even on short pages.
- No data dependencies — purely structural.

---

## Navbar

**File:** `src/components/Navbar.jsx`  
**Purpose:** Sticky top navigation bar with logo, name, and nav links.

### Data
- Reads `profile.name` from `src/data/profile.js`
- Uses `<ResumeActions />` for the resume dropdown

### Structure
```
<nav> (sticky top-0, z-50, backdrop-blur)
  ├── Logo (TM initials badge) + Name → links to /
  └── Nav links (hidden on mobile)
       ├── Home → /
       ├── Me → /me
       └── Resume ▼ → dropdown: Copy for LLM, Copy as text, Download markdown, Download PDF
```

### Notes
- Nav links are hidden on small screens (`hidden sm:flex`). No hamburger menu yet — candidate for future mobile improvement.
- Resume actions live in `src/components/ResumeActions.jsx`.

---

## Footer

**File:** `src/components/Footer.jsx`  
**Purpose:** Bottom bar with copyright and social icon links.

### Data
- Reads `profile.name`, `profile.email`, `profile.linkedin`, `profile.github`

### Structure
```
<footer> (border-t, bg-white)
  ├── © {year} {name}. Built with React, Vite & Tailwind.
  └── Icon links: Email · LinkedIn · GitHub
```

### Notes
- Year is derived dynamically via `new Date().getFullYear()`.
- Uses icon-only links (no text labels) to keep it compact.

---

## Feed

**File:** `src/components/Feed.jsx`  
**Purpose:** Center column of the home page. Renders a search bar and the list of blog posts.

### State
| State | Type | Description |
|---|---|---|
| `query` | string | Current search input value |

### Data
- Filters `posts` where `type === 'markdown'` — experience and other types are excluded.
- `filtered` is derived: when `query` is non-empty, filters by `title` and `tags` (case-insensitive).

### Structure
```
<div> (space-y-5)
  ├── Search bar
  │    ├── Search icon (left)
  │    ├── <input> (controlled)
  │    └── X clear button (shown only when query is non-empty)
  │
  └── Post list (or empty state)
       └── {filtered.map(post =>
             <div id={post.id}>
               <PostCard to={/post/:id}>
                 <MarkdownPost post={post} />
               </PostCard>
             </div>
           )}
```

### Empty State
When search returns no results:
```
"No posts match "{query}""
```

### Notes
- Search is purely client-side, no debounce (fast enough for small post counts).
- `id={post.id}` on each wrapper enables scroll-to anchoring from external links.
- `scroll-mt-24` offsets the sticky navbar height.

---

## LeftSidebar

**File:** `src/components/LeftSidebar.jsx`  
**Purpose:** Left column on the home page. Shows the user's profile snapshot, skills, and education.

### Data
- `profile` from `src/data/profile.js`
- `skills` from `src/data/skills.js` (top 10 + other 6 shown, not all)

### Structure
```
<aside> (sticky top-24)
  ├── Profile card
  │    ├── Avatar (initials, gradient background)
  │    ├── Name + Headline
  │    ├── Role + Location
  │    └── Buttons: More About Me → /me | Resume ▼ dropdown
  │
  ├── Skills card
  │    ├── Top skills (indigo-50 bg, accent text, indigo-100 border)
  │    └── Other skills (slate-100 bg, slate-600 text, slate-200 border)
  │
  └── Education card
       ├── Degree + Field
       ├── University
       └── Duration + CGPA
```

### Notes
- Avatar is text-based (initials), not an image — derived from `profile.name.split(' ').map(n => n[0]).join('')`.
- Skills are capped at `top.slice(0, 10)` and `other.slice(0, 6)` to prevent overflow in the sidebar.
- Education data is currently hardcoded in the component, not from `posts.js`.

---

## RightSidebar

**File:** `src/components/RightSidebar.jsx`  
**Purpose:** Right column on the home page. Shows contact links, experience timeline, and featured post links.

### Data
- `profile` from `src/data/profile.js`
- `posts` filtered to `type === 'experience'` (sorted newest-first) and `type === 'markdown'`

### Structure
```
<aside> (sticky top-24)
  ├── Contact card
  │    ├── Email (mailto link)
  │    ├── LinkedIn
  │    └── GitHub
  │
  ├── Experience card
  │    ├── Heading "Experience" → hyperlinks to /me
  │    └── Vertical timeline
  │         └── {experiencePosts.map(post =>
  │               dot + subtitle + title + tags
  │             )}
  │
  └── Featured card
       └── {featuredPosts.map(post =>
             <li><Link to={/post/:id}>{post.title}</Link></li>
           )}
```

### Notes
- Experience heading is a `<Link to="/me">` — clicking it navigates to the full experience view.
- Only shows **title + subtitle + tags** per job — no body text. Full details live on `/me`.
- Timeline uses a left border + absolute-positioned dots pattern.

---

## PostCard

**File:** `src/components/PostCard.jsx`  
**Purpose:** Reusable card wrapper for any post. Renders category badge, date, title, subtitle, children content, and tags.

### Props
| Prop | Type | Description |
|---|---|---|
| `post` | object | Post data object from `posts.js` |
| `children` | ReactNode | Body content (MarkdownPost, paragraphs, etc.) |
| `to` | string (optional) | If provided, wraps the title in a `<Link>` |

### Structure
```
<article> (bg-white, rounded-xl, border, shadow)
  ├── Header row
  │    ├── Category badge (blue pill)
  │    └── Date (Calendar icon + formatted date)
  ├── Title (plain text or <Link> if `to` is provided)
  ├── Subtitle (if post.subtitle exists)
  ├── {children}  ← injected body content
  └── Tags (gray rounded chips with # icon)
```

### Notes
- `to` is optional — when absent, the title renders as plain text (used for non-navigable cards).
- Date is formatted with `toLocaleDateString('en-US', { year, month: 'short', day: 'numeric' })`.
- Tags render only if `post.tags` is non-empty.
- Category badge: `bg-indigo-50 text-accent border border-indigo-100`
- Tag chips: `bg-slate-100 text-slate-500 border border-slate-200`

---

## MarkdownPost

**File:** `src/components/MarkdownPost.jsx`  
**Purpose:** Renders a post's markdown content inside a `<PostCard>`.

### Props
| Prop | Type | Description |
|---|---|---|
| `post` | object | Post object — uses `post.id` to load markdown |

### Structure
```
<div class="prose prose-sm max-w-none">
  <ReactMarkdown>{content}</ReactMarkdown>
</div>
```

### Notes
- Calls `getMarkdown(post.id)` from `src/lib/markdownLoader.js` to retrieve the raw markdown string.
- `prose prose-sm` applies Tailwind Typography styles. Custom overrides live in `src/index.css`.
- Used inside `<PostCard>` on the Feed, and standalone on `PostDetail`.

---

## ProfileHeader

**File:** `src/components/ProfileHeader.jsx`  
**Purpose:** Large banner-style profile block. Used at the top of the `/me` page.

### Props
| Prop | Type | Description |
|---|---|---|
| `profile` | object | Profile data passed in from the parent |

### Structure
```
<div> (bg-white, rounded-xl, border, shadow)
  ├── Avatar (large, 80px, gradient, initials)
  ├── Name (h1)
  ├── Headline
  ├── Role + Location row
  └── Action buttons
       ├── Email
       ├── LinkedIn
       ├── GitHub
       └── Resume ▼ (dropdown, accent bg)
```

### Notes
- Similar to the LeftSidebar profile card but larger and with more action buttons.
- **Not used** — the Me page hero is implemented inline as part of the bento grid. Candidate for removal.

---

## ResumeActions

**File:** `src/components/ResumeActions.jsx`  
**Purpose:** Dropdown button that exposes multiple ways to use the resume: copy for LLMs, copy as text, download markdown, or download PDF.

### Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | string | `""` | Classes applied to the trigger button |
| `menuAlign` | `'left'` \| `'right'` | `'right'` | Dropdown menu alignment |

### Data
- Fetches `public/resume.md` via `import.meta.env.BASE_URL`
- Uses `public/resume.pdf` for the PDF download

### Actions
- **Copy for LLM** — copies the markdown wrapped in a short prompt
- **Copy as text** — copies the raw markdown text
- **Download as markdown** — downloads `resume.md`
- **Download as PDF** — downloads the existing `resume.pdf` file

### Notes
- Used by `Navbar`, `LeftSidebar`, `Me`, and `ProfileHeader`.
- The resume source lives in `public/resume.md` and can be edited directly.

---

## SkillCloud

**File:** `src/components/SkillCloud.jsx`  
**Purpose:** Renders all skills in two visual tiers — top skills (blue) and other skills (gray).

### Props
None — reads directly from `src/data/skills.js`.

### Structure
```
<div> (space-y-4)
  ├── Top skills row (blue-50 bg, accent text)
  └── Other skills row (gray-100 bg, gray-700 text)
```

### Notes
- Shows **all** skills (no slice limit), unlike the LeftSidebar which caps at 10 + 6.
- **Not used** — Me page now renders `skills.top.slice(0, 8)` directly as indigo badge chips. Candidate for removal.

---

## ContactFooter

**File:** `src/components/ContactFooter.jsx`  
**Purpose:** Inline "Let's connect" CTA block with email, LinkedIn, GitHub links.

### Props
| Prop | Type | Description |
|---|---|---|
| `profile` | object | Profile data passed in from the parent |

### Structure
```
<div> (bg-white, rounded-xl, border border-slate-200, text-center, p-6)
  ├── "Let's connect."  (font-semibold)
  ├── Subtitle: "Open to work opportunities, collaborations, or just a good conversation."
  └── Links (pill buttons):
       ├── Email  (indigo-50 bg, accent text)
       ├── LinkedIn  (slate-100 bg)
       └── GitHub  (slate-100 bg)
```

### Notes
- **Actively used** on `/me` — rendered as `<ContactFooter profile={profile} />` in the bento grid (`col-span-12`, last cell before footer).
- Accepts `profile` as a prop (not imported directly) to keep it portable.
