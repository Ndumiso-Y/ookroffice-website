# Deployment Guide

## Environment Configuration

### Local Development
```js
// vite.config.js
export default defineConfig({
  base: '/',
  plugins: [react()],
})
```

Run: `npm run dev`

### GitHub Pages
```js
// vite.config.js
export default defineConfig({
  base: '/Dr--Koketso--Rakhudu--Foundation-/',
  plugins: [react()],
})
```

Build: `npm run build`
Deploy: Push `/dist` to `gh-pages` branch

### Netlify
1. Add `public/_redirects` file (already included)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Base path: `/`

```js
// vite.config.js
export default defineConfig({
  base: '/',
  plugins: [react()],
})
```

### cPanel
1. Upload contents of `/dist` to `public_html/`
2. Add `.htaccess` file (already included)
3. Base path: `/`

```js
// vite.config.js
export default defineConfig({
  base: '/',
  plugins: [react()],
})
```

## EmailJS Setup

1. Create account at [EmailJS](https://dashboard.emailjs.com/)
2. Create email service
3. Create email template with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. Copy credentials to `.env` file
5. Template should send to: `Dumela@drkoketsorakhudu.com`

## Build Steps

1. Install dependencies: `npm install`
2. Configure environment variables (copy `.env.example` to `.env`)
3. Update `vite.config.js` base path for target environment
4. Build: `npm run build`
5. Test build locally: `npm run preview`
6. Deploy `/dist` contents to hosting provider

## Optimizations Applied

- ✅ Hero video compressed from 117 MB to 2 MB (98% reduction)
- ✅ All videos optimized with FFmpeg (CRF 28, 1500k bitrate)
- ✅ Student images integrated (4 images, ~110-130 KB each)
- ✅ UI/UX polished with enhanced shadows, transitions, and spacing
- ✅ Milestones timeline alignment fixed
- ✅ About page founder photo enhanced with hover effects
- ✅ EmailJS integration ready

## Success Criteria

✅ Loads perfectly on localhost, GitHub Pages, Netlify, and cPanel
✅ No blank screens, 404s, or console warnings
✅ All images and videos optimized and visible
✅ EmailJS form configured (requires credentials)
✅ Total site size optimized for fast loading
