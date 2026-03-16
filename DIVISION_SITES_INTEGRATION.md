# Division Websites Integration - Complete!

## ✅ What Was Done

All 4 division websites have been successfully integrated into the main OOKR Office website as **subpages**. Users can now click "Visit Website" buttons on the Divisions page to access the full division websites without leaving the main site.

---

## 🌐 Integrated Division Websites

### 1. **Koketso Rakhudu Foundation**
- **Route**: `/krf-website/*`
- **Button**: Divisions page → "Visit Website" (blue button)
- **Source**: `F:\Digital Agency\DrKoketsoRakhudu\DrKoketsoRakhuduFoundation\Website`

### 2. **The Village Economy Indaba**
- **Route**: `/tvei-website/*`
- **Button**: Divisions page → "Visit Website" (blue button)
- **Source**: `F:\Digital Agency\The Village Economy Indaba\Web Project\village-economy-indaba`

### 3. **Coffee with Dr. Koketso Rakhudu**
- **Route**: `/coffee-website/*`
- **Button**: Divisions page → "Visit Website" (blue button)
- **Source**: `F:\Digital Agency\Coffee with Dr. Koketso Rakhudu\Website`

### 4. **Dr. Koketso Rakhudu Business School of Leadership Excellence**
- **Route**: `/businessschool-website/*`
- **Button**: Divisions page → "Visit Website" (blue button)
- **Source**: `F:\Digital Agency\Dr.Koketso Rakhudu Business School of Leadership Excellence\Website`

---

## 📁 Project Structure

```
Website/
├── src/
│   ├── DivisionSites/          ← NEW! Division websites
│   │   ├── KRF/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── assets/
│   │   │   ├── data/
│   │   │   ├── App.jsx
│   │   │   └── KRFSite.jsx    ← Wrapper component
│   │   ├── TVEI/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── assets/
│   │   │   ├── App.jsx
│   │   │   └── TVEISite.jsx   ← Wrapper component
│   │   ├── Coffee/
│   │   │   ├── components/
│   │   │   ├── assets/
│   │   │   ├── App.jsx
│   │   │   └── CoffeeSite.jsx ← Wrapper component
│   │   └── BusinessSchool/
│   │       ├── components/
│   │       ├── pages/
│   │       ├── assets/
│   │       ├── hooks/
│   │       ├── utils/
│   │       ├── App.jsx
│   │       └── BusinessSchoolSite.jsx ← Wrapper component
│   ├── Components/             ← Main OOKR components
│   ├── config/
│   │   └── divisionLinks.js   ← Updated with routes
│   └── App.js                  ← Updated with division routes
├── public/
│   ├── division-assets/        ← NEW! Division assets
│   │   ├── krf/
│   │   ├── tvei/
│   │   ├── coffee/
│   │   └── businessschool/
│   └── images/                 ← Main OOKR assets
└── package.json                ← Added gsap, react-helmet-async
```

---

## 🔄 How It Works

### User Journey:
1. User visits OOKR Office website (`/`)
2. Navigates to "Divisions" page (`/divisions`)
3. Clicks blue **"Visit Website"** button for any division
4. Gets redirected to division's full website (e.g., `/krf-website`)
5. Division website loads with its own navigation, pages, and content
6. Division websites do **NOT** show the main OOKR navbar/footer (they have their own)

### Technical Flow:
- Main App.js has two route groups:
  - **Division routes** (without Layout): `/krf-website/*`, `/tvei-website/*`, etc.
  - **OOKR routes** (with Layout): `/`, `/about`, `/divisions`, etc.
- Division websites are self-contained with their own components
- Assets are stored in `public/division-assets/` to avoid conflicts

---

## 🎨 Button Design

Each division card now has **2 buttons**:

1. **"Learn More"** (Green)
   - Links to summary page within OOKR site
   - e.g., `/koketso-rakhudu-foundation`

2. **"Visit Website"** (Blue with globe icon)
   - Links to full division website
   - e.g., `/krf-website`
   - Shows external link arrow icon

**Button states:**
- **Enabled** (all divisions): Blue, clickable, with globe and arrow icons
- **Disabled** (none currently): Gray, shows "Coming Soon"

---

## 📦 Dependencies Added

```json
{
  "gsap": "latest",              // For Coffee website animations
  "react-helmet-async": "latest"  // For Business School SEO
}
```

---

## 🚀 Testing Locally

1. **Start dev server:**
   ```bash
   npm start
   ```

2. **Navigate to division websites:**
   - Main site: `http://localhost:3000/`
   - KRF: `http://localhost:3000/krf-website`
   - TVEI: `http://localhost:3000/tvei-website`
   - Coffee: `http://localhost:3000/coffee-website`
   - Business School: `http://localhost:3000/businessschool-website`

3. **Test navigation:**
   - Go to `/divisions`
   - Click any blue "Visit Website" button
   - Verify division website loads correctly
   - Check all pages within division website work

---

## 🔧 Configuration

The division links are managed in: [src/config/divisionLinks.js](src/config/divisionLinks.js)

```javascript
export const divisionLinks = {
  krf: {
    url: '/krf-website',
    enabled: true,
  },
  tvei: {
    url: '/tvei-website',
    enabled: true,
  },
  coffee: {
    url: '/coffee-website',
    enabled: true,
  },
  businessSchool: {
    url: '/businessschool-website',
    enabled: true,
  },
};
```

---

## 📝 Important Notes

### Asset Paths
Division websites use assets from `public/division-assets/{division}/`

If images don't load, check:
- Original paths in division components
- May need to update to `/division-assets/krf/...`

### Routing
- Division websites use wildcard routes (`/*`)
- Allows nested routes like `/krf-website/about`, `/krf-website/programs`, etc.
- Main OOKR navbar/footer DO NOT appear on division websites
- **IMPORTANT**: All navbar and footer links within division websites MUST use full paths including the base route (e.g., `/krf-website/about` instead of `/about`) to prevent navigation to main OOKR pages

### Styling
- Each division website has its own CSS/Tailwind imported in the wrapper component (`index.css`)
- No style conflicts with main OOKR site
- Division websites are self-contained

---

## 🐛 Troubleshooting

### Issue: Division website shows 404
**Solution**: Check route in App.js matches button link in divisionLinks.js

### Issue: Images not loading
**Solution**: Update image paths in division components to point to `/division-assets/{division}/...`

### Issue: Navigation doesn't work
**Solution**: Division websites use nested Routes - ensure wrapper component has `/*` in route path

### Issue: OOKR navbar appears on division site
**Solution**: Check App.js - division routes should be OUTSIDE the Layout component

### Issue: Navbar links navigate to main OOKR pages instead of division pages
**Solution**: All Link components in division navbar and footer must use full paths with base route (e.g., `/krf-website/about` instead of `/about`)

### Issue: Styling is missing or incorrect
**Solution**: Ensure wrapper component imports `index.css` from the division folder (e.g., `import './index.css'`)

---

## 📤 Deployment

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Upload to cPanel:**
   - Upload entire `build/` folder
   - Includes all division websites
   - All routes work seamlessly

3. **Test deployment:**
   - Visit `https://ookr.co.za/divisions`
   - Click "Visit Website" buttons
   - Verify all division sites load

---

## ✨ Benefits

✅ **Unified Website**: All divisions under one domain
✅ **Single Deployment**: Deploy once, get all sites
✅ **Consistent Branding**: Seamless navigation between divisions
✅ **Easy Maintenance**: Update one codebase
✅ **Better SEO**: All content indexed under main domain
✅ **Cost Effective**: No need for separate hosting

---

**All division websites are now fully integrated and functional! 🎉**
