# Office of Kgosana Dr Koketso Rakhudu — Website

Official website for the Office of Kgosana Dr Koketso Rakhudu (OOKR), serving as the central hub for all divisions, initiatives, and community communication.

**Live site:** [drkoketsorakhudu.com](https://drkoketsorakhudu.com)

---

## Architecture

React 18 SPA (Create React App) with Tailwind CSS and React Router v6.

The site hosts **7 distinct web experiences** in a single bundle:

| Path | Description |
|---|---|
| `/` | Main OOKR website |
| `/krf-website/*` | Koketso Rakhudu Foundation |
| `/tvei-website/*` | The Village Economy Indaba |
| `/coffee-website/*` | Coffee With Dr Rakhudu |
| `/businessschool-website/*` | Business School of Leadership Excellence |
| `/group-website/*` | Kgosana Koketso Rakhudu Group |
| `/kgotla-website/*` | Kgotla Ya Rakhudu |

Division sites are **lazy-loaded** via `React.lazy()` so they don't inflate the initial bundle.

---

## Getting Started

```bash
npm install
npm start          # localhost:3000
npm test           # run smoke tests
npm run build:root # production build (PUBLIC_URL=/)
```

---

## Deployment

Deployed via **Vercel** with automatic deploys on push to `main`.

- Build command: `CI=false npm run build:root`
- Output directory: `build`
- DNS managed in cPanel (A record → Vercel, CNAME www → Vercel)

---

## Project Structure

```
src/
  Components/       — Main OOKR pages and shared UI
  DivisionSites/    — 6 self-contained division micro-sites
    KRF/
    TVEI/
    Coffee/
    BusinessSchool/
    Group/
    Kgotla/
  shared/
    config/         — Centralized config (divisions.js, environment.js)
    utils/          — Shared utilities (assetPaths.js)
public/
  images/           — Logos and static images
  videos/           — Office profile video
```

---

## Environment Variables

Required in Vercel project settings (not committed to git):

```
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

---

## Media Notes

- All images compressed with Sharp (quality 72, max 1920×1080)
- Videos stored as regular git files (not LFS) so Vercel CDN can serve them
- To recompress images: `node optimize-images.js`
