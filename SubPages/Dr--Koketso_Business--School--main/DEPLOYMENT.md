# 🚀 BSLE Website Deployment Guide

## Prerequisites Checklist

Before deploying, ensure you have:

- [x] All media files compressed and placed in `/public/assets/`
- [x] HashRouter verified in `App.jsx`
- [x] Base path set in `vite.config.js`: `base: '/dr-koketso-bsle-website/'`
- [x] GitHub Actions workflow configured at `.github/workflows/deploy.yml`
- [x] `.gitattributes` file present (prevents CRLF issues)
- [x] Local build tested with `npm run build && npm run preview`

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: BSLE website complete"
```

### 2. Connect to GitHub Repository

```bash
# Add the remote repository
git remote add origin https://github.com/EmbarkDigitals/dr-koketso-bsle-website.git

# Verify remote
git remote -v
```

### 3. Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to repository: `https://github.com/EmbarkDigitals/dr-koketso-bsle-website`
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select: **GitHub Actions**
4. Save changes

### 5. Monitor Deployment

1. Go to **Actions** tab in your repository
2. You should see a workflow run starting automatically
3. Click on the workflow to see build progress
4. Wait for both "build" and "deploy" jobs to complete (usually 2-3 minutes)

### 6. Verify Live Site

Once deployment completes:

1. Visit: `https://embarkdigitals.github.io/dr-koketso-bsle-website/`
2. Test all pages load correctly
3. Verify videos play and images display
4. Check mobile responsiveness
5. Test navigation and forms

## Troubleshooting

### White Screen / Blank Page

**Cause:** Usually incorrect base path or routing configuration

**Solution:**
```javascript
// vite.config.js - verify this matches your repo name
export default defineConfig({
  plugins: [react()],
  base: '/dr-koketso-bsle-website/',
})

// App.jsx - verify HashRouter is used
import { HashRouter as Router } from 'react-router-dom';
```

### Assets Not Loading (404 Errors)

**Cause:** Incorrect asset paths or files not in `/public/assets/`

**Solution:**
- Verify all assets are in `/public/assets/`
- Use absolute paths: `/assets/file.jpg` (not `../assets/file.jpg`)
- Check browser console for specific missing files

### Build Fails in GitHub Actions

**Cause:** Usually dependency issues or build errors

**Solution:**
```bash
# Test locally first
npm ci
npm run build

# Check the Actions log for specific error
# Fix the error locally, commit, and push again
```

### Video Doesn't Autoplay

**Cause:** Missing `muted` or `playsInline` attributes

**Solution:**
```jsx
// Use BSLEVideo component - it handles this automatically
<BSLEVideo src="/assets/video.mp4" poster="/assets/video-cover.jpg" />
```

## Updating the Live Site

After making changes:

```bash
# 1. Build and test locally
npm run build
npm run preview

# 2. Commit changes
git add .
git commit -m "Description of changes"

# 3. Push to GitHub (triggers auto-deploy)
git push origin main

# 4. Monitor deployment in Actions tab
# 5. Verify changes at live URL after ~2-3 minutes
```

## File Size Budget Enforcement

Before every commit, check file sizes:

```bash
git ls-files -z | xargs -0 ls -lh | sort -k5 -h | tail -20
```

If any files exceed limits:

**Videos (> 25 MB):**
```bash
ffmpeg -i large-video.mp4 \
  -vf "scale=-2:1080,fps=30" \
  -c:v libx264 \
  -crf 24 \
  -preset medium \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an compressed-video.mp4
```

**Images (> 500 KB):**
```bash
magick mogrify -resize 1920x1920\> -quality 82 -strip large-image.jpg
```

## GitHub Pages Configuration Verification

Ensure these settings in repository Settings → Pages:

- **Source:** GitHub Actions ✅
- **Branch:** N/A (handled by Actions) ✅
- **Custom domain:** (optional) ℹ️

## Security Notes

- Never commit `.env` files with API keys
- Review all form submissions endpoints before production
- Ensure external links use `rel="noopener noreferrer"`
- Test all user inputs for XSS vulnerabilities

## Performance Optimization

### Automatic Optimizations (Already Implemented)
- ✅ Vite production build with tree-shaking
- ✅ CSS minification via Tailwind + Lightning CSS
- ✅ Image lazy loading in carousels
- ✅ Video poster images for faster initial load
- ✅ Component code-splitting via React Router

### Manual Optimizations (If Needed)
- Add `loading="lazy"` to below-the-fold images
- Consider WebP format for images (with JPG fallback)
- Use video CDN for larger video files
- Enable Cloudflare or similar CDN for global distribution

## Rollback Procedure

If a deployment breaks the site:

```bash
# 1. Find last working commit
git log --oneline

# 2. Revert to that commit
git revert <commit-hash>

# 3. Push revert (triggers new deployment)
git push origin main
```

## Support Contacts

**Technical Issues:**
- GitHub Repository: https://github.com/EmbarkDigitals/dr-koketso-bsle-website
- Development Team: Embark Digitals
- Client Contact: BSLE (info@bsle.co.za)

## Deployment Checklist

Before marking deployment as complete:

- [ ] Site loads at production URL
- [ ] All 9 pages accessible and functional
- [ ] Videos play with overlays visible
- [ ] Images load correctly from `/assets/`
- [ ] Forms validate and show confirmation
- [ ] Mobile navigation works (hamburger menu)
- [ ] No console errors in browser DevTools
- [ ] Page refresh works on all routes (HashRouter)
- [ ] SEO meta tags present (check view source)
- [ ] Footer links functional
- [ ] Social media icons link correctly
- [ ] Site is responsive on mobile, tablet, desktop
- [ ] Accessibility features work (keyboard nav, focus rings)

---

**Deployment Status:** Ready ✅

**Last Updated:** 2024-10-07

**Built with ❤️ by Embark Digitals**
