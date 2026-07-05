# Tarun Mahapatra — Portfolio

A clean, light-themed, single-page portfolio built as a social feed. Hosted on GitHub Pages.

## Stack

- React + Vite
- Tailwind CSS
- Lucide React icons
- react-markdown for long-form posts

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Live site

[https://tarunmahapatra.github.io/portfolio/](https://tarunmahapatra.github.io/portfolio/)

## Deploy

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Required GitHub settings

1. **Settings → Pages → Source**: set to **GitHub Actions**
2. **Settings → Environments → github-pages**: allow the `main` branch under **Deployment branches and tags**

### How to stop deployment

- **Pause automatic deploys**: disable the workflow in **Actions → Deploy to GitHub Pages** → click the **...** menu → **Disable workflow**
- **Take the site offline**: change **Settings → Pages → Source** to **None**

### Note

The site is deployed to the `/portfolio/` path because `vite.config.js` sets `base: '/portfolio/'`. The live URL above reflects this.
