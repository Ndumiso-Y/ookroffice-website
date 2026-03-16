# cPanel Deployment Guide - Afrihost

## 📦 Quick Deployment Steps

### 1. Build the Production Files
The `dist` folder has already been built and contains all necessary files.

### 2. Create Deployment ZIP
You need to upload the contents of the `dist` folder to cPanel.

**Option A: Manual ZIP Creation**
1. Navigate to the `dist` folder
2. Select ALL files and folders inside `dist`
3. Right-click → Send to → Compressed (zipped) folder
4. Name it `website.zip`

**Option B: Command Line**
```bash
cd dist
tar -czf ../website.tar.gz *
```

### 3. Upload to Afrihost cPanel

#### Step 1: Login to cPanel
1. Go to your Afrihost cPanel login page
2. Login with your credentials

#### Step 2: Navigate to File Manager
1. In cPanel, find and click **"File Manager"**
2. Navigate to `public_html` folder (or your domain's root folder)

#### Step 3: Clean Existing Files (First Time Only)
1. Select all old files in `public_html`
2. Click **Delete** (backup first if needed)

#### Step 4: Upload New Files
1. Click **Upload** button
2. Select your `website.zip` or drag and drop
3. Wait for upload to complete (may take 5-10 minutes due to images/videos)

#### Step 5: Extract Files
1. Go back to File Manager
2. Right-click on `website.zip`
3. Click **Extract**
4. Extract to current directory (`public_html`)
5. Delete the ZIP file after extraction

### 4. Verify Deployment

Visit your domain: `https://www.drkoketsorakhudufoundation.com`

Check:
- ✅ Homepage loads correctly
- ✅ All images display
- ✅ Videos play correctly
- ✅ Navigation works
- ✅ All pages load

---

## 🔧 Important cPanel Settings

### .htaccess File (For React Router)
Create a `.htaccess` file in `public_html` with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### PHP Version (Not Critical for Static Sites)
- Recommended: PHP 8.0 or higher
- This is a static React site, so PHP version is less critical

---

## 📁 File Structure After Deployment

Your `public_html` should look like:
```
public_html/
├── index.html
├── _redirects
├── .nojekyll
├── assets/
│   ├── *.js (JavaScript bundles)
│   ├── *.css (Stylesheets)
│   ├── *.jpg (Images)
│   ├── *.png (Logos)
│   └── *.mp4 (Videos)
└── .htaccess (you create this)
```

---

## 🚀 Quick Troubleshooting

### Problem: 404 Errors on Page Refresh
**Solution**: Make sure `.htaccess` file is created with the rewrite rules above

### Problem: Images Not Loading
**Solution**: Check file paths are correct and files uploaded completely

### Problem: Videos Not Playing
**Solution**:
- Check video file sizes (may timeout on slow upload)
- Verify MIME types in cPanel

### Problem: Slow Loading
**Solution**:
- Enable gzip compression in `.htaccess`
- Consider using Afrihost's CDN if available

---

## 📞 Afrihost Support

If you encounter hosting-specific issues:
- Support: https://www.afrihost.com/support
- Phone: 087 944 1555
- Email: support@afrihost.com

---

## 🔄 Future Updates

For future updates:
1. Run `npm run build` locally
2. Create new ZIP from `dist` folder
3. Upload and extract in cPanel (overwrite old files)
4. Clear browser cache to see changes

---

## ✅ Checklist

- [ ] Built production files (`npm run build`)
- [ ] Created ZIP from `dist` folder contents
- [ ] Logged into Afrihost cPanel
- [ ] Cleared old files from `public_html`
- [ ] Uploaded and extracted new files
- [ ] Created `.htaccess` file
- [ ] Tested website live
- [ ] Verified all pages work
- [ ] Checked mobile responsiveness

---

**Deployment Date**: October 29, 2025
**Build Version**: Latest with all content updates
**Total Size**: ~21MB
