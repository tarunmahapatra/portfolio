# Architecture

## Directory Structure

```
src/
├── App.jsx                  # Root component — router setup
├── main.jsx                 # React DOM entry point
├── index.css                # Global styles + Tailwind directives
│
├── components/
│   ├── Layout.jsx           # Shell: Navbar + children + Footer
│   ├── Navbar.jsx           # Top navigation bar
│   ├── Footer.jsx           # Bottom bar with links + copyright
│   ├── Feed.jsx             # Blog post feed + search bar
│   ├── LeftSidebar.jsx      # Profile card, skills, education
│   ├── RightSidebar.jsx     # Contact, experience timeline, featured posts
│   ├── PostCard.jsx         # Reusable post card wrapper
│   ├── MarkdownPost.jsx     # Renders markdown content inside a PostCard
│   ├── ProfileHeader.jsx    # Large profile banner (used on Me page)
│   ├── SkillCloud.jsx       # Renders skill tags in two tiers
│   └── ContactFooter.jsx    # Inline contact CTA block
│
├── pages/
│   ├── Home.jsx             # 3-column layout: Left | Feed | Right
│   ├── Me.jsx               # About page with experience timeline
│   └── PostDetail.jsx       # Full post reader view
│
├── data/
│   ├── posts.js             # All content entries (experience, markdown, etc.)
│   ├── profile.js           # Personal info, links, stats
│   └── skills.js            # Top skills + other skills arrays
│
├── posts/                   # Markdown source files for blog posts
│   ├── genai-support.md
│   ├── pdf-extraction.md
│   └── dell-support-automation.md
│
└── lib/
    └── markdownLoader.js    # Maps post IDs to markdown content
```

---

## Routing

Uses `HashRouter` (for static hosting compatibility — GitHub Pages, etc.).

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Main feed with sidebars |
| `/me` | `Me` | About + experience page |
| `/post/:id` | `PostDetail` | Full blog post reader |

---

## Data Flow

```
src/data/posts.js
      │
      ├── Feed.jsx          filters type === 'markdown'
      ├── RightSidebar.jsx  filters type === 'experience' + type === 'markdown'
      ├── Me.jsx            filters type === 'experience'
      └── PostDetail.jsx    finds by id, renders markdown or body

src/data/profile.js
      │
      ├── Navbar.jsx
      ├── LeftSidebar.jsx
      ├── RightSidebar.jsx
      ├── Footer.jsx
      └── Me.jsx

src/data/skills.js
      │
      ├── LeftSidebar.jsx   (top 10 + other 6)
      └── SkillCloud.jsx    (all skills, used on Me page)
```

---

## Content Types in `posts.js`

| `type` | Where rendered |
|---|---|
| `markdown` | Feed (as PostCard + MarkdownPost), RightSidebar Featured, PostDetail |
| `experience` | RightSidebar timeline, Me page timeline |
| `intro` | Not currently rendered in any feed view |
| `education` | Not currently rendered in any feed view |
| `skills` | Not currently rendered in any feed view |

---

## Markdown Loading

`src/lib/markdownLoader.js` uses Vite's `import.meta.glob` (or a manual map) to load `.md` files at build time. Post IDs must exactly match the filename (without `.md`).
