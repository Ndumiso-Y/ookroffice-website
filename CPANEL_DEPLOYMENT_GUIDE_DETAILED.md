# 🚀 DETAILED cPanel Deployment Guide - Step by Step

**Date:** February 26, 2026
**Package:** `website-update.zip` (525 MB)
**Your Role:** Follow these exact steps in cPanel
**Time Required:** 15-25 minutes

---

## 📍 BEFORE YOU START

### What You'll Need:
1. ✅ cPanel login credentials
2. ✅ Access to File Manager in cPanel
3. ✅ The file: `f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\website-update.zip`
4. ✅ 15-25 minutes of uninterrupted time

### Important Notes:
- ⚠️ **DO NOT CLOSE** browser tabs during upload/extraction
- ⚠️ **WAIT** for each step to complete before moving to the next
- ⚠️ **KEEP** this guide open in a separate window
- ✅ **BACKUP FIRST** - We'll do this in Step 1

---

## 🔐 STEP 0: LOG INTO CPANEL

### Actions:
1. Open your web browser (Chrome, Firefox, or Edge recommended)
2. Go to your cPanel URL (usually `https://yourdomain.com:2083` or `https://yourdomain.com/cpanel`)
3. Enter your cPanel username
4. Enter your cPanel password
5. Click **Log In**

### What You'll See:
- cPanel dashboard with various icons/tools
- Look for "File Manager" icon (usually has a folder icon)

### ✅ Checkpoint:
- [ ] You can see the cPanel dashboard
- [ ] You can find the "File Manager" icon

---

## 📁 STEP 1: BACKUP YOUR CURRENT WEBSITE (2 minutes)

### Why This Step:
If anything goes wrong, you can restore your old website in 2 minutes.

### Actions:

#### 1.1 - Open File Manager
1. On cPanel dashboard, find **"File Manager"** icon
2. Click on **"File Manager"**
3. A new window/tab will open

**What you'll see:**
- Left sidebar with folder tree
- Main area showing files and folders
- Top toolbar with buttons (Upload, Download, Compress, Extract, etc.)

#### 1.2 - Navigate to Your Website Folder
1. In the **left sidebar**, click on **"public_html"**
2. In the **main area**, you'll see folders inside public_html
3. **Double-click** on the **"ookr"** folder
4. You should now see files like: `index.html`, folders like `images`, `static`, etc.

**What you'll see in the address bar (top of File Manager):**
```
/public_html/ookr
```

**✅ Checkpoint:**
- [ ] You see `/public_html/ookr` in the path bar
- [ ] You can see `index.html` and folders like `images`, `static`

#### 1.3 - Select All Files in ookr Folder
1. Click on the **first item** in the list
2. Scroll to the **bottom** of the list
3. Hold **Shift** key and click on the **last item**
4. All files/folders should now be highlighted in blue

**Alternative method:**
- Press **Ctrl + A** (Windows) or **Cmd + A** (Mac) to select all

**What you'll see:**
- All files/folders highlighted in blue/light color
- Status bar may show "X items selected"

**✅ Checkpoint:**
- [ ] All items in the ookr folder are selected (highlighted)

#### 1.4 - Create Backup ZIP
1. At the **top toolbar**, click **"Compress"** button (icon looks like a zipper or archive)
2. A popup window will appear

**Popup Window - What you'll see:**
- Title: "Compress"
- Compression Type options (Zip Archive, Tar Archive, etc.)
- Input field for archive name

**Actions in the popup:**
1. Select **"Zip Archive"** (should be selected by default)
2. In the **"Compressed file name"** field, type exactly:
   ```
   ookr-backup-feb26-2026.zip
   ```
3. Make sure the path shows: `/public_html/ookr/`
4. Click **"Compress File(s)"** button

**What you'll see:**
- Processing message/spinner
- Progress indicator
- Success message: "Compressing files... Done"

**✅ Checkpoint:**
- [ ] You see success message
- [ ] Click "Close" on the popup

#### 1.5 - Download Backup to Your Computer
1. In File Manager, look for the file: **ookr-backup-feb26-2026.zip**
2. **Right-click** on `ookr-backup-feb26-2026.zip`
3. Select **"Download"** from the menu
4. Your browser will start downloading the file

**What you'll see:**
- Browser download indicator (usually bottom-left or top-right)
- File downloading: `ookr-backup-feb26-2026.zip`
- Download size: approximately 500-600 MB
- **This may take 2-10 minutes** depending on your internet speed

**⚠️ CRITICAL:**
- **WAIT** for the download to complete
- **DO NOT** close the browser tab
- **DO NOT** proceed to Step 2 until download is complete

**✅ Checkpoint:**
- [ ] Download completed (100%)
- [ ] File saved to your Downloads folder or Desktop
- [ ] File size is approximately 500-600 MB

---

## 🗑️ STEP 2: DELETE OLD FILES (1 minute)

### Why This Step:
We need a clean slate to avoid conflicts between old and new files.

### ⚠️ IMPORTANT SAFETY NOTE:
- We're deleting files INSIDE the `ookr` folder
- We're NOT deleting the `ookr` folder itself
- You have a backup (from Step 1) if needed

### Actions:

#### 2.1 - Make Sure You're in the Right Place
1. Check the **path bar** at the top shows: `/public_html/ookr`
2. If not, navigate: Click **public_html** (left sidebar) → Double-click **ookr** folder

**✅ Checkpoint:**
- [ ] Path shows `/public_html/ookr`

#### 2.2 - Select All Files INSIDE ookr
1. Click on the **first item** in the file list
2. Press **Ctrl + A** (Windows) or **Cmd + A** (Mac) to select all
3. **VERIFY:** All items are highlighted EXCEPT you should NOT see the ".." (parent directory) selected

**What you'll see:**
- All files and folders highlighted
- This includes: `index.html`, `images/`, `static/`, `division-assets/`, `.htaccess`, etc.
- Also includes: `ookr-backup-feb26-2026.zip` (your backup)

**Items you should see selected:**
- ✅ index.html
- ✅ images/ (folder)
- ✅ static/ (folder)
- ✅ division-assets/ (folder)
- ✅ .htaccess (may be hidden, that's OK)
- ✅ ookr-backup-feb26-2026.zip (your backup)
- ✅ Any other files/folders

**✅ Checkpoint:**
- [ ] Multiple items selected (probably 5-10+ items)
- [ ] Path still shows `/public_html/ookr`

#### 2.3 - Delete Selected Files
1. At the **top toolbar**, click **"Delete"** button (icon looks like a trash can)
2. A confirmation popup will appear

**Popup - What you'll see:**
- Title: "Delete"
- Message: "Are you sure you want to delete X item(s)?"
- Buttons: "Cancel" and "Delete File(s)"

**Actions in the popup:**
1. **Read the warning** (make sure you're deleting from `/public_html/ookr`)
2. Click **"Delete File(s)"** button
3. Another confirmation may appear - Click **"Confirm"** or **"Yes"**

**What you'll see:**
- Processing message
- Files being deleted
- Success message: "X file(s) deleted"

**✅ Checkpoint:**
- [ ] Success message appears
- [ ] Click "Close" on the popup
- [ ] The ookr folder should now be **EMPTY**
- [ ] Path still shows `/public_html/ookr`

#### 2.4 - Verify Folder is Empty
**What you'll see in the main area:**
- Empty file list (or just the ".." parent directory link)
- Message like "No files found" or "0 items"

**✅ Checkpoint:**
- [ ] The `/public_html/ookr/` folder is completely empty
- [ ] No files or folders visible

---

## 📤 STEP 3: UPLOAD NEW FILES (5-15 minutes)

### Why This Step:
Transfer your updated website from your computer to the server.

### Actions:

#### 3.1 - Verify You're in the Right Location
1. Check path bar shows: `/public_html/ookr`
2. Folder should be **empty** from Step 2

**✅ Checkpoint:**
- [ ] Path: `/public_html/ookr`
- [ ] Folder is empty

#### 3.2 - Open Upload Interface
1. At the **top toolbar**, click **"Upload"** button
2. A new page/tab will open: "Upload Files"

**What you'll see:**
- New page titled "Upload Files" or "File Upload"
- Current directory shown: `/public_html/ookr`
- Large "Select File" button or drag-and-drop area
- May show: "You can upload files up to X MB"

**✅ Checkpoint:**
- [ ] Upload page is open
- [ ] Shows directory: `/public_html/ookr`

#### 3.3 - Select the ZIP File to Upload
1. Click **"Select File"** button (large blue/green button)
2. A file browser window will open (Windows Explorer or Mac Finder)

**Actions in the file browser:**
1. Navigate to: `f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\`
2. Look for the file: **website-update.zip**
3. **Single-click** on `website-update.zip` to select it
4. Click **"Open"** button

**What you'll see:**
- File browser closes
- Upload starts **automatically**
- Progress bar appears

**✅ Checkpoint:**
- [ ] File browser closed
- [ ] Upload progress bar visible

#### 3.4 - Wait for Upload to Complete
**What you'll see during upload:**
- Progress bar showing percentage (0% → 100%)
- Upload speed (e.g., "2.5 MB/s")
- Time remaining estimate
- File name: `website-update.zip`
- File size: 525 MB

**Timeline:**
- **Fast connection (50+ Mbps):** 5-8 minutes
- **Medium connection (10-50 Mbps):** 8-12 minutes
- **Slower connection (<10 Mbps):** 12-20 minutes

**⚠️ CRITICAL - While Uploading:**
- ✅ **KEEP the browser tab open**
- ✅ **KEEP your computer awake** (don't let it sleep)
- ✅ **STAY on the same network** (don't switch WiFi)
- ❌ **DON'T close the tab**
- ❌ **DON'T navigate away**
- ❌ **DON'T refresh the page**

**What you'll see when complete:**
- Progress bar reaches 100%
- **Green checkmark** ✓ appears next to filename
- Status changes to "Complete" or "Done"
- File appears in the file list below

**✅ Checkpoint:**
- [ ] Progress bar shows 100%
- [ ] Green checkmark visible
- [ ] Status shows "Complete"
- [ ] `website-update.zip` appears in completed files list

#### 3.5 - Close Upload Window
1. Look for **"Go Back to..."** link or button (usually top-left)
   OR
2. Close the upload tab and return to File Manager tab

**What you'll see:**
- You're back in File Manager
- Path shows: `/public_html/ookr`
- You should see **one file:** `website-update.zip`

**✅ Checkpoint:**
- [ ] Back in File Manager
- [ ] Can see `website-update.zip` (525 MB)

---

## 📦 STEP 4: EXTRACT FILES (2-3 minutes)

### Why This Step:
Unzip the package to deploy all your website files.

### Actions:

#### 4.1 - Locate the ZIP File
**What you'll see:**
- File Manager showing `/public_html/ookr/`
- One file: `website-update.zip` (525 MB)

**✅ Checkpoint:**
- [ ] You can see `website-update.zip`

#### 4.2 - Extract the ZIP File
1. **Right-click** on `website-update.zip`
2. A context menu will appear
3. Click **"Extract"** from the menu

**What you'll see - Context Menu Options:**
- View
- Edit
- Code Edit
- Download
- **Extract** ← Click this one
- Compress
- Copy
- Move
- Delete
- etc.

**After clicking Extract:**
- A popup window appears: "Extract"

**Popup Window - What you'll see:**
- Title: "Extract"
- Archive path: `/public_html/ookr/website-update.zip`
- Extract to: `/public_html/ookr/` (should be filled automatically)
- Button: "Extract File(s)"

#### 4.3 - Confirm Extraction Path
**⚠️ VERIFY THIS CAREFULLY:**

The **"Extract to:"** field should show:
```
/public_html/ookr/
```

**If it shows something else:**
- Clear the field
- Type exactly: `/public_html/ookr/`
- Make sure to include the final `/`

**✅ Checkpoint:**
- [ ] Extract to: `/public_html/ookr/`

#### 4.4 - Start Extraction
1. Click **"Extract File(s)"** button
2. Extraction will begin

**What you'll see:**
- Processing message: "Extracting..."
- Progress indicator (may be a spinner or bar)
- This takes **2-3 minutes** for 525 MB
- You may see file names scrolling by

**Timeline:**
- Files being extracted: ~2 minutes
- Finalizing: ~30 seconds
- Total: 2-3 minutes

**⚠️ WHILE EXTRACTING:**
- ✅ **WAIT patiently** - this is normal for large files
- ✅ **KEEP the browser tab open**
- ❌ **DON'T close the popup**
- ❌ **DON'T click anything else**

**What you'll see when complete:**
- Success message: "Extraction Complete" or "Done"
- May show: "X files extracted"
- "Close" button becomes available

**✅ Checkpoint:**
- [ ] Success message appears
- [ ] No error messages

#### 4.5 - Close Extraction Window
1. Click **"Close"** button on the success popup

**What you'll see:**
- Back in File Manager
- Path: `/public_html/ookr/`
- **Multiple files and folders** now visible:
  - ✅ `index.html`
  - ✅ `images/` folder
  - ✅ `static/` folder
  - ✅ `division-assets/` folder
  - ✅ `.htaccess` file (may be hidden)
  - ✅ `website-update.zip` (still there - we'll delete this next)
  - ✅ Other files/folders

**✅ Checkpoint:**
- [ ] Multiple files and folders visible
- [ ] Can see `index.html`
- [ ] Can see `images/` folder
- [ ] Can see `static/` folder
- [ ] `website-update.zip` is still there (we'll delete it in Step 5)

---

## 🧹 STEP 5: CLEAN UP & VERIFY (2 minutes)

### Why This Step:
Remove the ZIP file (no longer needed) and verify everything deployed correctly.

### Actions:

#### 5.1 - Delete the ZIP File
1. In File Manager, find `website-update.zip`
2. **Right-click** on `website-update.zip`
3. Select **"Delete"** from the menu
4. Confirmation popup appears

**Popup - What you'll see:**
- Message: "Are you sure you want to delete website-update.zip?"
- Buttons: "Cancel" and "Delete"

**Actions:**
1. Click **"Delete"** button
2. File will be deleted immediately

**What you'll see:**
- `website-update.zip` disappears from the file list
- Success message (may be brief)

**✅ Checkpoint:**
- [ ] `website-update.zip` is gone
- [ ] Other files remain (index.html, folders, etc.)

#### 5.2 - Verify Files Are Present
**In File Manager (`/public_html/ookr/`), verify you see:**

**Files:**
- [ ] `index.html` (your main page)
- [ ] `asset-manifest.json`
- [ ] `favicon.ico`
- [ ] `logo192.png`
- [ ] `logo512.png`
- [ ] `manifest.json`
- [ ] `robots.txt`
- [ ] `.htaccess` (may be hidden - see note below)

**Folders:**
- [ ] `images/` (contains website images)
- [ ] `division-assets/` (contains division-specific files)
- [ ] `static/` (contains JS and CSS files)

**Note about .htaccess:**
- This file may be hidden by default
- To show hidden files: Click "Settings" (top-right) → Check "Show Hidden Files (dotfiles)"

#### 5.3 - Verify Soka Images
1. In File Manager, **double-click** on `images/` folder
2. Look for `soka-highlights/` folder
3. **Double-click** on `soka-highlights/` folder

**What you'll see:**
- 24 image files (IMG_1786.jpg through IMG_2048.jpg)
- File sizes around 1-3 MB each

**✅ Checkpoint:**
- [ ] Path shows: `/public_html/ookr/images/soka-highlights/`
- [ ] Can see 24 image files
- [ ] Files are named IMG_XXXX.jpg

#### 5.4 - Return to ookr Root
1. Click on **"ookr"** in the left sidebar
   OR
2. Click on `ookr` in the breadcrumb path (top of File Manager)

**✅ Checkpoint:**
- [ ] Path shows: `/public_html/ookr/`
- [ ] Can see all main files and folders

#### 5.5 - Clear Server Cache (Optional)
**If your cPanel has a cache clearing tool:**

1. Go back to **cPanel main dashboard** (close File Manager or open new tab)
2. Look for one of these tools:
   - "Cache Manager"
   - "Clear Cache"
   - "Optimize Website"
   - "LiteSpeed Cache" (if using LiteSpeed)
   - "Varnish Cache" (if using Varnish)
3. If found, click on it
4. Select option to **"Clear All Cache"** or **"Purge Cache"**
5. Confirm the action

**What you'll see:**
- Success message: "Cache cleared" or similar

**Note:** Not all cPanel accounts have cache management. If you don't see it, that's OK - proceed to testing.

**✅ Checkpoint:**
- [ ] Cache cleared (if available)
- [ ] OR no cache tool found (still OK to proceed)

---

## 🧪 STEP 6: TEST YOUR WEBSITE (5 minutes)

### Why This Step:
Verify everything is working correctly before announcing the update.

### Actions:

#### 6.1 - Clear Your Browser Cache
**This is CRITICAL - old files may be cached:**

**For Chrome, Firefox, Edge:**
1. Press **Ctrl + Shift + Delete** (Windows) or **Cmd + Shift + Delete** (Mac)
2. A "Clear browsing data" window appears

**What you'll see:**
- Time range dropdown
- Checkboxes for different data types

**Actions:**
1. **Time range:** Select "All time" or "Last 24 hours"
2. **Check these boxes:**
   - ✅ Browsing history (optional)
   - ✅ **Cookies and other site data** (IMPORTANT)
   - ✅ **Cached images and files** (CRITICAL)
3. Click **"Clear data"** or **"Clear now"** button

**What you'll see:**
- Processing briefly
- Window closes
- Browser may log you out of some sites (normal)

**✅ Checkpoint:**
- [ ] Browser cache cleared
- [ ] "Clear data" window closed

#### 6.2 - Visit Your Website
1. Open a **new browser tab**
2. In the address bar, type your website URL:
   ```
   https://yourdomain.com/ookr/
   ```
   (Replace `yourdomain.com` with your actual domain)
3. Press **Enter**

**What you'll see:**
- Page loading (may take 2-5 seconds on first visit)
- Your OOKR Office home page should appear

**✅ Checkpoint:**
- [ ] Website loads (no blank page)
- [ ] Home page visible

#### 6.3 - Test Home Page
**Verify these elements on the home page:**

- [ ] **Logo** displays in top-left
- [ ] **Navigation menu** displays correctly
- [ ] **Hero section** displays (image, text, call-to-action)
- [ ] **Division cards** visible (6 divisions)
- [ ] **Images load** (not broken image icons)
- [ ] **Footer** displays at bottom
- [ ] **No error messages** visible on page

**If something looks wrong:**
- Try pressing **Ctrl + F5** (hard refresh)
- If still wrong, see "Troubleshooting" section below

**✅ Checkpoint:**
- [ ] Home page looks correct
- [ ] All images load
- [ ] Navigation visible

#### 6.4 - Test Impact Journey Page (CRITICAL - Has Soka Gallery)
1. Click on **"Impact Journey"** link in the navigation menu
2. Page should load

**What you'll see:**
- Impact Journey page
- Multiple "story boxes" or sections
- **FIRST BOX** should be Soka 2026

**Verify the FIRST box:**
- [ ] **Title:** "2026 STATE OF KGOTLA ADDRESS | SOKA 💚🍀"
- [ ] **Description** about 10 Priority Sectors and R20 million
- [ ] **Images visible** (carousel or grid)
- [ ] **Image count:** Should show multiple images (24 total)

#### 6.5 - Test Soka Image Carousel
**In the Soka box:**
1. Look for **navigation arrows** (< and > or ← and →)
2. Click the **right arrow** (→ or next)

**What you'll see:**
- Image changes to next image
- Smooth transition
- Different image appears

**Actions:**
1. Click **next arrow** multiple times (try 5-10 clicks)
2. Images should cycle through
3. Try clicking **previous arrow** (← or back)
4. Image should go back

**✅ Checkpoint:**
- [ ] Soka box is FIRST on Impact Journey page
- [ ] Title shows "2026 STATE OF KGOTLA ADDRESS | SOKA 💚🍀"
- [ ] Images display correctly
- [ ] Carousel arrows work
- [ ] Images change when clicking arrows

#### 6.6 - Test Division Sites
**Test each division link:**

1. Click on **"KRF Website"** (or similar division link)
2. Division site should load

**What you'll see:**
- Division-specific page
- Different branding/colors
- Division navigation

**Verify:**
- [ ] Page loads (no errors)
- [ ] Colors display correctly
- [ ] Images load
- [ ] Navigation works

**Special Check for Kgotla:**
1. Click on **"Kgotla Website"** link
2. Kgotla site should load

**What you'll see:**
- **Hero section** with gradient background
- **Gradient colors:** Green to gold/orange
- **Text should be VISIBLE** (not invisible)

**Verify:**
- [ ] Kgotla hero section visible
- [ ] **Green to gold gradient** displays correctly
- [ ] **Text is visible** (not hidden by background)
- [ ] Page looks professional

**If gradient is missing or text invisible:**
- This means the color fix didn't work
- See "Troubleshooting" section below

#### 6.7 - Test Back Navigation
1. On any division site, click the **browser back button**
2. You should return to the previous page

**Verify:**
- [ ] Back button works
- [ ] Returns to correct page
- [ ] No errors

#### 6.8 - Test on Mobile (Optional but Recommended)
**If you have a smartphone:**

1. Open your phone's browser (Chrome, Safari, Firefox)
2. Clear cache on mobile browser too
3. Visit: `https://yourdomain.com/ookr/`

**Verify:**
- [ ] Site loads on mobile
- [ ] Responsive design works
- [ ] Navigation menu works (hamburger menu)
- [ ] Images display correctly
- [ ] Soka carousel works on mobile

---

## ✅ DEPLOYMENT COMPLETE!

If all tests passed, your deployment is successful! 🎉

### What's New on Your Live Site:
- ✅ **Soka 2026 Gallery** with 24 images on Impact Journey page
- ✅ **Kgotla color fixes** - green/gold gradient working correctly
- ✅ **Code quality improvements** - faster, cleaner code
- ✅ **Environment configuration** - secure credential management

---

## 🆘 TROUBLESHOOTING

### ❌ Problem: Blank White Page

**Symptoms:**
- Browser shows blank white page
- No content visible
- No error message

**Solution 1: Check .htaccess**
1. Go to File Manager → `/public_html/ookr/`
2. Look for `.htaccess` file
3. If not visible:
   - Click "Settings" (top-right)
   - Check "Show Hidden Files (dotfiles)"
   - Click "Save"
4. If `.htaccess` is missing:
   - Look for `.htaccess-subfolder`
   - Right-click → Rename to `.htaccess`
5. Reload your website

**Solution 2: Check Browser Console**
1. Press **F12** on your keyboard
2. Click "Console" tab
3. Look for errors (red text)
4. If you see "Failed to load resource" errors, note the URLs

---

### ❌ Problem: 404 Errors on Pages

**Symptoms:**
- Home page loads
- Clicking navigation links shows "404 Not Found"
- Or "The requested URL was not found"

**Solution:**
1. Verify `.htaccess` exists in `/public_html/ookr/`
2. Right-click on `.htaccess` → Edit
3. Content should be:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /ookr/
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule ^ index.html [L]
   </IfModule>
   ```
4. If different, replace with above content
5. Save the file
6. Reload your website

---

### ❌ Problem: Old Content Still Showing

**Symptoms:**
- Don't see Soka gallery on Impact Journey page
- Kgotla colors still look wrong
- Changes not visible

**Solution 1: Clear Browser Cache Again**
1. Press **Ctrl + Shift + Delete**
2. Select "All time"
3. Clear cache and cookies
4. Reload website

**Solution 2: Try Incognito/Private Mode**
1. Press **Ctrl + Shift + N** (Chrome) or **Ctrl + Shift + P** (Firefox)
2. In the private window, visit your website
3. If it looks correct there, it's a cache issue
4. Clear your main browser cache thoroughly

**Solution 3: Try Different Browser**
1. Open Firefox (if using Chrome) or Chrome (if using Firefox)
2. Visit your website
3. If it looks correct, it's a browser-specific cache issue

**Solution 4: Clear Server Cache**
1. Go to cPanel main dashboard
2. Find cache manager (if available)
3. Clear all caches
4. Wait 2-3 minutes
5. Try again

---

### ❌ Problem: Images Not Loading

**Symptoms:**
- Broken image icons (🖼️ with X)
- Image placeholders visible
- Soka images don't show

**Solution 1: Verify Images Folder**
1. File Manager → `/public_html/ookr/images/`
2. Check if `soka-highlights/` folder exists
3. Open `soka-highlights/` folder
4. Should see 24 images (IMG_XXXX.jpg)
5. If missing, extraction may have failed - see Rollback procedure

**Solution 2: Check Permissions**
1. Right-click on `images` folder
2. Select "Change Permissions"
3. Set to: **755** (rwxr-xr-x)
4. Check "Recurse into subdirectories"
5. Click "Change Permissions"

---

### ❌ Problem: Soka Gallery Not Showing

**Symptoms:**
- Impact Journey page loads
- But Soka box is missing or not first
- Or carousel doesn't work

**Solution 1: Hard Refresh**
1. Press **Ctrl + F5** (forces fresh reload)
2. Or **Ctrl + Shift + R**
3. Check if Soka box appears

**Solution 2: Check Browser Console**
1. Press **F12**
2. Click "Console" tab
3. Look for JavaScript errors (red text)
4. Common issues:
   - "Swiper is not defined" → refresh page
   - "Failed to load" → image path issue

**Solution 3: Verify Files Uploaded**
1. File Manager → `/public_html/ookr/static/js/`
2. Look for `main.[hash].js` file (large file, ~400+ KB)
3. If missing or very small, re-extract the ZIP

---

### ❌ Problem: Kgotla Colors Still Wrong

**Symptoms:**
- Kgotla hero section doesn't have green/gold gradient
- Text is invisible or hard to read
- Background is solid color instead of gradient

**Solution 1: Verify CSS File**
1. File Manager → `/public_html/ookr/static/css/`
2. Look for `main.[hash].css` file
3. File size should be ~20 KB
4. If missing or tiny, re-extract ZIP

**Solution 2: Hard Refresh on Kgotla Page**
1. Go to Kgotla website page
2. Press **Ctrl + F5** multiple times
3. Check if gradient appears

**Solution 3: Check Browser Console**
1. On Kgotla page, press **F12**
2. Click "Console" tab
3. Look for CSS errors
4. If you see "Failed to load stylesheet", note the path

---

## 🔄 ROLLBACK PROCEDURE

**If deployment completely failed and you want to restore the old site:**

### Steps:

1. **Go to File Manager**
   - Navigate to `/public_html/ookr/`

2. **Delete Current Files**
   - Select all files/folders
   - Click "Delete"
   - Confirm deletion

3. **Upload Your Backup**
   - Click "Upload"
   - Select `ookr-backup-feb26-2026.zip` from your Downloads
   - Wait for upload to complete
   - Close upload window

4. **Extract Backup**
   - Right-click on `ookr-backup-feb26-2026.zip`
   - Click "Extract"
   - Extract to: `/public_html/ookr/`
   - Click "Extract File(s)"
   - Wait for completion

5. **Delete Backup ZIP**
   - Right-click on `ookr-backup-feb26-2026.zip`
   - Click "Delete"

6. **Clear Browser Cache**
   - Press Ctrl + Shift + Delete
   - Clear all cache
   - Reload website

7. **Verify Old Site Restored**
   - Visit your website
   - Should see old version

**✅ Your old website is now restored.**

---

## 📊 FINAL CHECKLIST

**After completing all steps, verify:**

**File Manager Checks:**
- [ ] Path `/public_html/ookr/` has files
- [ ] `index.html` exists
- [ ] `images/` folder exists
- [ ] `images/soka-highlights/` has 24 images
- [ ] `static/` folder exists
- [ ] `.htaccess` file exists
- [ ] `website-update.zip` is deleted (cleaned up)
- [ ] Backup `ookr-backup-feb26-2026.zip` downloaded to your computer

**Website Checks:**
- [ ] Browser cache cleared
- [ ] Home page loads correctly
- [ ] Navigation menu works
- [ ] Impact Journey page loads
- [ ] **Soka gallery is FIRST box** on Impact Journey
- [ ] Soka title shows "2026 STATE OF KGOTLA ADDRESS | SOKA 💚🍀"
- [ ] Soka carousel works (can navigate images)
- [ ] Division sites load (KRF, Kgotla, etc.)
- [ ] **Kgotla hero has green/gold gradient** (not solid color)
- [ ] **Kgotla text is visible** (not hidden)
- [ ] All images load (no broken images)
- [ ] Back button works
- [ ] No 404 errors when clicking links

**Optional Checks:**
- [ ] Mobile version works (responsive)
- [ ] Footer displays correctly
- [ ] Contact forms work (if testing)

---

## 📞 NEED HELP?

**If you encounter issues not covered in Troubleshooting:**

1. **Take Screenshots:**
   - Screenshot of the error/issue
   - Screenshot of File Manager showing `/public_html/ookr/` contents
   - Screenshot of browser console (F12 → Console tab)

2. **Note These Details:**
   - Which step you're on
   - Exact error message (copy the full text)
   - What you were doing when error occurred
   - Browser name and version

3. **Contact Support:**
   - Provide the screenshots
   - Provide the details above
   - Mention: "Website deployment - February 26, 2026"

---

## 🎉 SUCCESS!

If all tests passed, congratulations! Your website is now live with:

- ✅ **Soka 2026 Gallery** - 24 professional images showcasing the event
- ✅ **Fixed Kgotla Colors** - Beautiful green/gold gradient
- ✅ **Improved Performance** - Faster loading, cleaner code
- ✅ **Better Security** - Proper credential management
- ✅ **Enhanced Maintainability** - Easier to update in future

**Your updated OOKR Office website is live!** 🚀

---

*Deployment Guide Created: February 26, 2026*
*Package: website-update.zip (525 MB)*
*Target: /public_html/ookr/*
