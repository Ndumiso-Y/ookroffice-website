# Deployment Guide - KKR Group Website

## 📋 Pre-Deployment Checklist

### 1. Add Media Assets
Before deploying, add all required assets to `/public/assets/`:

**Required Files (22 total):**
- ✅ `kkr-hero.mp4`
- ✅ `about-banner-1.jpg`, `about-banner-2.jpg`, `about-banner-3.jpg`
- ✅ `focus-empowerment-1.jpg`, `focus-empowerment-2.jpg`
- ✅ `focus-agriculture-1.jpg`, `focus-agriculture-2.jpg`, `focus-agriculture-3.jpg`
- ✅ `focus-skills-1.jpg`, `focus-skills-2.jpg`, `focus-skills-3.jpg`
- ✅ `focus-enterprise.jpg`, `focus-urban.jpg`
- ✅ `focus-enterprise-marabo.mp4`, `focus-enterprise-marabo-cover.jpg`
- ✅ `leadership-dr-koketso.jpg`
- ✅ `projects-1.jpg`, `projects-2.jpg`, `projects-3.jpg`
- ✅ `contact-bg.jpg`
- ✅ `favicon.png`

See `/public/assets/ASSETS_README.md` for compression specifications.

### 2. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: KKR Group website implementation"
```

### 3. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it appropriately (e.g., `kkr-group-website`)
3. **Do not** initialize with README, .gitignore, or license (already exist)
4. Keep it private if needed

### 4. Link Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

## 🚀 Deploy to GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save

### Step 2: Trigger Deployment

The deployment workflow (`.github/workflows/deploy.yml`) will automatically run when you push to the `main` branch.

**Monitor the deployment:**
1. Go to the **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)

### Step 3: Access Your Website

Once deployed, your site will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## 🔧 Local Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
- Opens at `http://localhost:5173`
- Hot reload enabled
- Changes reflect immediately

### Build for Production
```bash
npm run build
```
- Creates optimized bundle in `/dist` directory
- Minified and compressed assets
- Ready for deployment

### Preview Production Build
```bash
npm run preview
```
- Test production build locally
- Runs on `http://localhost:4173`

## 🐛 Troubleshooting

### Assets Not Loading
**Problem:** Images/videos show broken links in production

**Solution:**
1. Ensure all assets are in `/public/assets/` directory
2. Verify filenames match exactly (case-sensitive)
3. Check file extensions are correct (.jpg, .mp4, etc.)
4. Rebuild and redeploy

### Routing Issues (404 on Refresh)
**Problem:** Page refreshes result in 404 errors

**Solution:**
- Already handled! We're using `HashRouter` which works perfectly with GitHub Pages
- URLs will have `#` in them (e.g., `site.com/#/about`)
- No server configuration needed

### Build Fails
**Problem:** Build command fails with errors

**Solution:**
1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
2. Check Node.js version (should be 18+)
3. Review error messages in terminal

### Deployment Workflow Fails
**Problem:** GitHub Actions workflow shows errors

**Solutions:**
1. Ensure GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
2. Check workflow file permissions in repository settings
3. Verify `package.json` scripts are correct
4. Check Actions tab for specific error messages

## 📊 Performance Optimization

### Before Committing Large Assets

**Optimize Videos:**
```bash
ffmpeg -i input.mp4 -vf scale=1920:1080 -r 30 -c:v libx264 -crf 24 -preset medium -c:a aac -b:a 128k output.mp4
```

**Optimize Images (ImageMagick):**
```bash
magick input.jpg -resize 1920x1080 -quality 85 output.jpg
```

**Or use online tools:**
- [TinyPNG](https://tinypng.com/) for images
- [HandBrake](https://handbrake.fr/) for videos

### Repository Size Guidelines
- Target: < 100 MB total
- Videos: ≤ 25 MB each
- Images: ≤ 500 KB each

## 🔐 Environment Variables (If Needed)

For production secrets (API keys, etc.):

1. Create `.env` file locally (already gitignored)
2. Add environment variables to GitHub:
   - Repository Settings → Secrets and variables → Actions
   - Add repository secrets
3. Reference in workflow: `${{ secrets.SECRET_NAME }}`

## ✅ Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Carousels function smoothly
- [ ] Videos play with controls
- [ ] Navigation works on all pages
- [ ] Responsive design works (mobile/tablet/desktop)
- [ ] Forms submit properly
- [ ] SEO meta tags present (check page source)
- [ ] No console errors in browser
- [ ] Assets load quickly (< 3s initial load)

## 📝 Updating the Site

### Make Changes Locally
1. Edit files as needed
2. Test locally with `npm run dev`
3. Build and test: `npm run build && npm run preview`

### Deploy Updates
```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Actions will automatically rebuild and redeploy.

## 🆘 Support

For issues or questions:
- Check documentation in [README.md](./README.md)
- Review asset requirements in `/public/assets/ASSETS_README.md`
- Contact the development team

---

**Last Updated:** 2025-10-06
**Built by:** Claude Code for KKR Group
