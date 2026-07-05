# Data Layer

All content is static — no backend, no CMS, no API calls. Everything lives in `src/data/` and `src/posts/`.

---

## profile.js

**File:** `src/data/profile.js`  
**Purpose:** Single source of truth for personal information.

```js
export const profile = {
  name: string,         // Full name
  headline: string,     // One-line role description
  tagline: string,      // Longer tagline (available but not always displayed)
  location: string,     // City, Country
  email: string,        // mailto target
  linkedin: string,     // Full LinkedIn URL
  github: string,       // Full GitHub URL
  resume: string,       // Path to resume file (e.g. '/resume.docx')
  stats: {
    experience: string, // e.g. '3+ years'
    role: string,       // Current title
    company: string,    // Current employer
  },
};
```

**Used by:** Navbar, LeftSidebar, RightSidebar, Footer, Me, ProfileHeader, ContactFooter

---

## skills.js

**File:** `src/data/skills.js`  
**Purpose:** Two-tier skill list.

```js
export const skills = {
  top: string[],    // Primary/highlighted skills (blue badges)
  other: string[],  // Secondary skills (gray badges)
};
```

**Used by:** LeftSidebar (capped), SkillCloud (all)

**Conventions:**
- `top` should contain core professional skills in order of relevance.
- `other` contains supporting/tooling skills.
- No icons or proficiency levels — just labels.

---

## posts.js

**File:** `src/data/posts.js`  
**Purpose:** All content entries. Acts as the content database.

### Post Object Shape

```js
{
  id: string,        // Unique identifier. Must match .md filename for markdown posts.
  type: string,      // See types below
  date: string,      // ISO date string 'YYYY-MM-DD' — used for sorting and display
  category: string,  // Displayed as a badge on PostCard
  title: string,     // Post/role/degree title
  subtitle?: string, // Secondary line (date range, company, location)
  body?: string[],   // Array of paragraph strings (for non-markdown types)
  file?: string,     // Path to .md file (markdown posts only)
  tags?: string[],   // Array of tag strings
}
```

### Post Types

| `type` | Purpose | Where rendered |
|---|---|---|
| `markdown` | Blog posts with full markdown content | Feed, Featured sidebar, PostDetail |
| `experience` | Work experience entries | RightSidebar timeline, Me page timeline |
| `intro` | Profile introduction paragraphs | Not currently rendered |
| `education` | Degree details | Not currently rendered |
| `skills` | Skills entry (placeholder) | Not currently rendered |

### Adding a Blog Post (markdown)

1. Create `src/posts/<id>.md`
2. Add to `posts.js`:

```js
{
  id: 'my-post-id',
  type: 'markdown',
  date: '2026-01-15',
  category: 'Featured',
  title: 'My Post Title',
  file: '/src/posts/my-post-id.md',
  tags: ['tag1', 'tag2'],
}
```

### Adding an Experience Entry

```js
{
  id: 'company-role',
  type: 'experience',
  date: '2025-01-01',          // Start date — used for sort order
  category: 'Experience',
  title: 'Role — Company',
  subtitle: 'Jan 2025 — Present | Location',
  body: [
    'Bullet point one.',
    'Bullet point two.',
  ],
  tags: ['Skill1', 'Skill2'],
}
```

---

## Markdown Posts (src/posts/)

**Location:** `src/posts/*.md`  
**Loaded by:** `src/lib/markdownLoader.js`

Each `.md` file corresponds to a post entry in `posts.js` with `type: 'markdown'`. The `id` field must match the filename exactly.

### Current Posts

| File | Post ID | Title |
|---|---|---|
| `genai-support.md` | `genai-support` | Building GenAI Support Experiences at Dell |
| `pdf-extraction.md` | `pdf-extraction` | PDF Data Extraction Tool |
| `dell-support-automation.md` | `dell-support-automation` | Dell Support Automation |

### Markdown Conventions
- Use `##` for section headings (maps to `prose h2` styles)
- Use standard bullet lists `- item`
- Links are auto-styled via `prose a` in `index.css`
- No frontmatter needed — all metadata lives in `posts.js`
