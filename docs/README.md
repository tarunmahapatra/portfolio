# Portfolio — Documentation Index

Personal portfolio and blog site for **Tarun Mahapatra**, built with React, Vite, and Tailwind CSS.

---

## Contents

| File | Description |
|---|---|
| [architecture.md](./architecture.md) | Project structure, routing, data flow |
| [components.md](./components.md) | Detailed breakdown of every component |
| [pages.md](./pages.md) | Page-level documentation (Home, Me, PostDetail) |
| [data.md](./data.md) | Data layer — posts, profile, skills |
| [wireframes.md](./wireframes.md) | ASCII wireframes for all layouts |
| [design-template.md](./design-template.md) | Design system — colours, typography, spacing, patterns |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 (HashRouter) |
| Markdown | react-markdown |
| Icons | lucide-react |
| Language | JavaScript (JSX) |

---

## Quick Start

```bash
npm install
npm run dev       # development server
npm run build     # production build
npm run preview   # preview production build
```

---

## Adding a New Blog Post

1. Create a markdown file at `src/posts/<id>.md`
2. Register it in `src/data/posts.js`:

```js
{
  id: 'my-post',        // must match the .md filename
  type: 'markdown',
  date: 'YYYY-MM-DD',
  category: 'Featured',
  title: 'Post Title',
  file: '/src/posts/my-post.md',
  tags: ['tag1', 'tag2'],
}
```

No UI changes needed — the feed and sidebar update automatically.

---

## Live Site

[https://tarunmahapatra.github.io/portfolio/](https://tarunmahapatra.github.io/portfolio/)

## Deployment

Pushes to `main` trigger the workflow in `.github/workflows/deploy.yml`.

### Required GitHub settings

1. **Settings → Pages → Source**: set to **GitHub Actions**
2. **Settings → Environments → github-pages**: allow the `main` branch under **Deployment branches and tags**

### Stopping deployment

- **Pause automatic deploys**: disable the workflow in **Actions → Deploy to GitHub Pages** → **Disable workflow**
- **Take the site offline**: change **Settings → Pages → Source** to **None**

The site is deployed to `/portfolio/` because `vite.config.js` sets `base: '/portfolio/'`.
