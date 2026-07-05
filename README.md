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

Deploy manually to the `gh-pages` branch:

```bash
npm run build
npm run deploy
```

`npm run deploy` runs `gh-pages -d dist`, which pushes the built `dist/` folder to the `gh-pages` branch.

### Required GitHub settings

1. **Settings → Pages → Source**: set to **Deploy from a branch** → select **`gh-pages`**
2. **Settings → Environments → github-pages**: allow the `gh-pages` branch under **Deployment branches and tags** (remove `main` if it was added)

### How to stop deployment

- **Pause manual deploys**: simply don't run `npm run deploy`
- **Take the site offline**: change **Settings → Pages → Source** to **None**

### Note

The site is deployed to the `/portfolio/` path because `vite.config.js` sets `base: '/portfolio/'`. The live URL above reflects this.

The GitHub Actions workflow in `.github/workflows/deploy.yml` is not used for this deployment method.
