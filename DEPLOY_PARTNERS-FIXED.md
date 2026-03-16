# DEPLOY PARTNERS-FIXED - KRF Partner Logos Fix

**Package:** `website-PARTNERS-FIXED.zip` (195 MB)
**Date:** February 27, 2026

---

## WHAT WAS FIXED:

### KRF Foundation Partner Logos
**The Problem:**
- Partner logos were not showing on cPanel (worked fine on localhost)
- Path was: `/division-assets/krf/images/gallery/PartnersLogos/...` (WRONG)
- Should be: `/division-assets/krf/gallery/PartnersLogos/...` (CORRECT)

**The Root Cause:**
The code was using `getDivisionImage()` which automatically adds `/images/` to the path:
```javascript
getDivisionImage("krf", "gallery/PartnersLogos/Absa logo.png")
// Generated: /division-assets/krf/images/gallery/PartnersLogos/... (WRONG)
```

**The Fix:**
Changed to use `getGalleryImage()` which is designed for gallery images:
```javascript
getGalleryImage("krf", "PartnersLogos", "Absa logo.png")
// Generates: /division-assets/krf/gallery/PartnersLogos/... (CORRECT)
```

**File Modified:**
- [src/DivisionSites/KRF/components/PartnersLogos.jsx](src/DivisionSites/KRF/components/PartnersLogos.jsx)

---

## DEPLOYMENT STEPS:

### STEP 1: Backup (2 min)
1. cPanel → File Manager → `public_html`
2. Select ALL files → Compress → Name: `backup-feb27-partners.zip`
3. Download backup

### STEP 2: Delete Old Files (1 min)
1. Still in `public_html`
2. Select ALL → Delete

### STEP 3: Upload (3-8 min)
1. Upload `website-PARTNERS-FIXED.zip`
   - **Location:** `f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\website-PARTNERS-FIXED.zip`
   - **Size:** 195 MB
2. Wait for green checkmark

### STEP 4: Extract (1-2 min)
1. Right-click ZIP → Extract → `/public_html/`
2. Wait for success

### STEP 5: Test (2 min)
1. Delete ZIP from server
2. Clear browser cache (Ctrl + Shift + Delete)
3. Visit: https://www.drkoketsorakhudu.com
4. Go to: Koketso Rakhudu Foundation page
5. Scroll to "Our Partners" section
6. **VERIFY:** All 17 partner logos should now display correctly

---

## WHAT TO TEST:

### 1. KRF Foundation - Our Partners Section
**URL:** https://www.drkoketsorakhudu.com/krf

Expected to see all 17 partner logos:
1. ABSA
2. AgriSeta
3. Cathsseta
4. Classic Oriental Consultancy
5. EBJ Holdings
6. EWSETA
7. Funda Institute
8. Hakem Energies Foundation
9. Hakem
10. Maikwane Holdings
11. Mdihub
12. Mesora
13. North West Development Corporation
14. QCTO
15. SANNAH
16. Thuba Pelo Mosadi
17. Tshanew University

**Desktop:** Should see 4 columns grid with hover effects
**Mobile:** Should see swipeable carousel with dots navigation

---

## WHAT'S STILL PENDING (For Phase 4):

### TVEI (Village Economy Indaba) Images:
- 5-day bootcamp images
- Graduation images
- Induction day images

**Why Not Fixed Yet:** These use local webpack imports in the source code and require full asset migration (moving files from `src/DivisionSites/TVEI/assets/` to `public/division-assets/tvei/` and updating all imports). This is a larger refactoring task.

### Village Economy Event Page Behavior:
- When clicking images to enlarge, opens: https://www.drkoketsorakhudu.com/gallery/event1
- Shows mixed main page content with Kgotla footer
- Needs route/layout investigation

### KKR Group Media:
- Should work after this deployment (uses correct asset path utility)

---

## TROUBLESHOOTING:

### Partner logos still not showing?
1. **Clear cache again** - Try Ctrl + Shift + F5
2. **Check browser console** (F12) → Console tab for errors
3. **Inspect image element** - Right-click logo area → Inspect
   - Check if `src` is: `/division-assets/krf/gallery/PartnersLogos/...` (CORRECT)
   - If it shows: `/division-assets/krf/images/gallery/...` (WRONG) then cache issue

### Images show broken icon?
1. Verify extraction completed successfully
2. Check files exist: `public_html/division-assets/krf/gallery/PartnersLogos/`
3. Verify all 17 image files are present

### Rollback if needed:
1. Delete everything in `public_html`
2. Upload previous backup
3. Extract it

---

## TECHNICAL DETAILS:

### What Changed:
**File:** `src/DivisionSites/KRF/components/PartnersLogos.jsx`

**Before (WRONG):**
```javascript
import { getDivisionImage } from '../../../shared/utils/assetPaths'

const partners = [
  { name: "ABSA", logo: getDivisionImage("krf", "gallery/PartnersLogos/Absa logo.png") },
  // ...
]
```

**After (CORRECT):**
```javascript
import { getGalleryImage } from '../../../shared/utils/assetPaths'

const partners = [
  { name: "ABSA", logo: getGalleryImage("krf", "PartnersLogos", "Absa logo.png") },
  // ...
]
```

### Path Resolution:
- `getGalleryImage("krf", "PartnersLogos", "Absa logo.png")`
- Returns: `/division-assets/krf/gallery/PartnersLogos/Absa logo.png`
- File exists at: `public_html/division-assets/krf/gallery/PartnersLogos/Absa logo.png`
- **Match!** = Images will load

---

## SUMMARY:

**This Package Fixes:**
- KRF Foundation partner logos now display correctly

**This Package Includes:**
- All previous fixes (asset paths, image optimization)
- Fast loading times (optimized images from previous work)

**Still Pending (Phase 4):**
- TVEI images (requires asset migration)
- Village Economy event page behavior
- KKR Group media verification

---

**Ready to deploy!** This should fix the partner logos issue.

---

*Package: website-PARTNERS-FIXED.zip (195 MB)*
*Location: f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\website-PARTNERS-FIXED.zip*
