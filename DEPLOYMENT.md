# OOKR OFFICE Website - Deployment Guide

## Stack
- **Framework**: Create React App (CRA)
- **Router**: React Router v6 with BrowserRouter
- **Build Tool**: react-scripts
- **Styling**: TailwindCSS
- **Node**: Requires legacy OpenSSL provider (handled automatically in scripts)

---

## Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup & Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   # OR
   npm run dev
   ```

   The app will open at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Test production build locally**:
   ```bash
   npm run serve
   ```

   The production build will be served at `http://localhost:3000`

---

## Production Deployment

### Build Options

The project supports **two deployment configurations**:

#### 1. Root Domain Deployment (e.g., `https://ookr.co.za/`)
```bash
npm run build:root
```
This builds with `PUBLIC_URL=/` (default)

#### 2. Subfolder Deployment (e.g., `https://example.com/ookr/`)
```bash
npm run build:sub
```
This builds with `PUBLIC_URL=/ookr` (change subfolder name in [package.json](package.json) if needed)

**To change the subfolder name**, edit [package.json](package.json):
```json
"build:sub": "cross-env NODE_OPTIONS=--openssl-legacy-provider PUBLIC_URL=/your-subfolder react-scripts build"
```

---

## cPanel Deployment

### Root Domain (e.g., `ookr.co.za`)

1. **Build the project**:
   ```bash
   npm run build:root
   ```

2. **Upload to cPanel**:
   - Open cPanel File Manager
   - Navigate to `public_html/` (root domain folder)
   - Upload **all contents** from the `build/` folder:
     ```
     build/
     ├── index.html
     ├── .htaccess         (for React Router support)
     ├── static/
     ├── favicon.ico
     └── ... (all other files)
     ```

3. **Verify .htaccess**:
   - Ensure [build/.htaccess](build/.htaccess) exists with React Router rewrites
   - This file is automatically copied from [public/.htaccess](public/.htaccess) during build

4. **Test**:
   - Visit `https://ookr.co.za/`
   - Navigate to different pages (e.g., `/about`, `/contact`)
   - Refresh the page on a route - should NOT show 404

### Subfolder (e.g., `example.com/ookr`)

1. **Update subfolder name in package.json** (if not already set):
   ```json
   "build:sub": "cross-env NODE_OPTIONS=--openssl-legacy-provider PUBLIC_URL=/ookr react-scripts build"
   ```

2. **Build the project**:
   ```bash
   npm run build:sub
   ```

3. **Prepare .htaccess for subfolder**:
   ```bash
   # Windows (PowerShell)
   copy public\.htaccess-subfolder build\.htaccess

   # Linux/Mac
   cp public/.htaccess-subfolder build/.htaccess
   ```

4. **Edit build/.htaccess** to match your subfolder:
   ```apache
   RewriteBase /ookr/  # Change to your actual subfolder
   ```

5. **Upload to cPanel**:
   - Create subfolder: `public_html/ookr/`
   - Upload all contents from `build/` to `public_html/ookr/`

6. **Test**:
   - Visit `https://example.com/ookr/`
   - Test navigation and page refreshes

---

## GitHub Pages Deployment (Optional)

GitHub Pages requires special configuration since it doesn't support server-side rewrites.

### Option 1: Using HashRouter (Simplest)

1. **Update [src/App.js](src/App.js)**:
   ```javascript
   import { HashRouter as Router, Route, Routes } from 'react-router-dom';
   // Change BrowserRouter to HashRouter
   ```

2. **Build and deploy**:
   ```bash
   npm run build:root
   # Deploy build/ folder to gh-pages branch
   ```

3. **URLs will use hash**:
   - `https://username.github.io/#/`
   - `https://username.github.io/#/about`

### Option 2: Using BrowserRouter with 404 fallback

1. **Add to [public/](public/) folder**:
   Create `404.html` that redirects to `index.html`:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <meta http-equiv="refresh" content="0;URL='/'" />
   </head>
   <body></body>
   </html>
   ```

2. **Update package.json**:
   ```json
   "homepage": "https://username.github.io/repo-name"
   ```

3. **Build**:
   ```bash
   npm run build
   ```

---

## Troubleshooting

### Problem: 404 on direct navigation (e.g., `/about`)

**Cause**: Server doesn't have rewrite rules for React Router

**Solution**:
- **cPanel**: Verify `.htaccess` exists and has correct rewrites
- **Local serve**: Use `npm run serve` (serve handles rewrites automatically)
- **GitHub Pages**: Use HashRouter or 404.html fallback

### Problem: Assets not loading (CSS/JS missing)

**Cause**: Wrong `PUBLIC_URL` for deployment location

**Solution**:
- Root domain: Use `npm run build:root` (PUBLIC_URL=/)
- Subfolder: Use `npm run build:sub` and verify PUBLIC_URL matches subfolder

### Problem: Blank page after deployment

**Cause**: Usually incorrect base path or build errors

**Solution**:
1. Check browser console for errors
2. Verify all files uploaded (especially `static/` folder)
3. Ensure `.htaccess` is present
4. Check `PUBLIC_URL` matches deployment location

### Problem: OpenSSL error when building

**Cause**: Webpack 4 (used by react-scripts 5.x) incompatible with Node 17+

**Solution**:
The scripts already include the fix: `NODE_OPTIONS=--openssl-legacy-provider`
This is handled automatically by the npm scripts using `cross-env`.

---

## File Structure

```
Website/
├── public/               # Static files (copied to build/)
│   ├── index.html        # HTML template
│   ├── .htaccess         # Root domain rewrite rules
│   └── .htaccess-subfolder  # Subfolder rewrite rules (template)
├── src/                  # React source code
│   ├── App.js            # Router configuration
│   ├── Components/       # React components
│   └── index.js          # Entry point
├── build/                # Production build output (gitignored)
├── package.json          # Dependencies and scripts
├── DEPLOYMENT.md         # This file
└── README.md             # Project info
```

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm start` or `npm run dev` | Start dev server |
| `npm run build` | Build for production (default: root) |
| `npm run build:root` | Build for root domain (`/`) |
| `npm run build:sub` | Build for subfolder (`/ookr`) |
| `npm run serve` | Test production build locally |

---

## Notes

- The `.htaccess` file in `public/` is automatically copied to `build/` during build
- For subfolder deployments, you need to manually replace `build/.htaccess` with the subfolder version
- The project uses BrowserRouter - all deployment targets need proper rewrites
- If deploying to both root and subfolder, build separately for each
