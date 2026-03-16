# 🚀 cPanel Deployment Instructions

**Date:** February 26, 2026
**Deployment Package:** `website-update.zip` (525 MB)
**Location:** `f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\website-update.zip`

---

## ✅ EVERYTHING IS READY - YOU ONLY NEED TO DO 5 SIMPLE STEPS IN CPANEL

---

## 📦 **What's in This Update:**

### New Features:
- ✅ **Soka 2026 Gallery** (24 images on Impact Journey page)
- ✅ **Kgotla color fixes** (green/gold gradient working)
- ✅ **Environment configuration** (secure credentials)
- ✅ **Code quality improvements** (cleaner, faster code)

### Files Ready:
- ✅ Production build created
- ✅ .htaccess file configured
- ✅ All images included (including 24 Soka photos)
- ✅ All division assets included
- ✅ Optimized for /ookr subdirectory
- ✅ Total package: 545 MB (525 MB compressed)

---

## 🎯 **YOUR 5 SIMPLE STEPS IN CPANEL:**

### **STEP 1: Backup Current Website** ⏱️ 2 minutes

1. Log into your **cPanel**
2. Open **File Manager**
3. Navigate to `public_html/ookr/`
4. Select the entire `ookr` folder (click the checkbox)
5. Click **Compress** at the top
6. Choose **Zip Archive**
7. Name it: `ookr-backup-feb26-2026.zip`
8. Click **Compress File(s)**
9. **Download this backup** to your computer (right-click → Download)
10. ✅ **IMPORTANT:** Wait for download to complete before proceeding

---

### **STEP 2: Delete Old Files** ⏱️ 1 minute

**WHY:** We need to remove old files to avoid conflicts

1. Stay in File Manager at `public_html/ookr/`
2. **Select ALL files and folders** inside `ookr` (use Shift+Click or Ctrl+A)
   - **DON'T** select the `ookr` folder itself
   - **SELECT** everything INSIDE it
3. Click **Delete** at the top
4. Confirm deletion
5. ✅ The `ookr` folder should now be **empty**

---

### **STEP 3: Upload New Files** ⏱️ 5-15 minutes (depending on internet speed)

1. In File Manager, make sure you're in `public_html/ookr/`
2. Click **Upload** button at the top
3. Click **Select File**
4. Navigate to: `f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\`
5. Select `website-update.zip`
6. Click **Open**
7. ✅ **Wait for upload to complete** - You'll see a green checkmark when done
8. **Close the upload window** when complete

---

### **STEP 4: Extract Files** ⏱️ 2-3 minutes

1. Go back to File Manager (refresh if needed)
2. Navigate to `public_html/ookr/`
3. You should see `website-update.zip` file
4. **Right-click** on `website-update.zip`
5. Click **Extract**
6. Make sure extraction path is: `/public_html/ookr/`
7. Click **Extract File(s)**
8. ✅ **Wait for extraction to complete** - You'll see a success message
9. Click **Close**

---

### **STEP 5: Clean Up & Verify** ⏱️ 2 minutes

1. **Delete the ZIP file:**
   - Right-click on `website-update.zip` (in the `ookr` folder)
   - Click **Delete**
   - Confirm deletion

2. **Verify files are there:**
   - You should see these folders: `images`, `division-assets`, `static`
   - You should see `index.html`, `.htaccess` files
   - ✅ If you see these, deployment is complete!

3. **Clear server cache (if available):**
   - Go back to cPanel main page
   - Look for "Cache Manager" or "Clear Cache" (if available)
   - Clear all caches

---

## 🧪 **TEST YOUR WEBSITE:**

### Clear Your Browser First:
1. Press `Ctrl + Shift + Delete`
2. Select **Cached images and files**
3. Click **Clear data**

### Test These Pages:
1. **Home Page:** `https://yourdomain.com/ookr/`
   - ✅ Should load normally

2. **Impact Journey:** Click "Impact Journey" in navigation
   - ✅ Should see **"2026 STATE OF KGOTLA ADDRESS | SOKA 💚🍀"** as FIRST box
   - ✅ Click the images - carousel should work (24 images)

3. **Division Sites:**
   - ✅ Test KRF Website link
   - ✅ Test Kgotla Website link
   - ✅ Kgotla pages should have green/gold gradient

4. **Navigation:**
   - ✅ All menu links should work
   - ✅ No 404 errors
   - ✅ Back button should work

---

## 🆘 **TROUBLESHOOTING:**

### ❌ **Problem: Blank white page**
**Solution:**
1. Check if `.htaccess` file exists in `public_html/ookr/`
2. If not found, look for `.htaccess-subfolder`
3. Rename `.htaccess-subfolder` to `.htaccess`

### ❌ **Problem: 404 errors on pages**
**Solution:**
1. Verify `.htaccess` exists
2. Check file permissions (should be 644)

### ❌ **Problem: Old content still showing**
**Solution:**
1. Clear browser cache again (Ctrl + Shift + Delete)
2. Try Incognito/Private mode
3. Clear cPanel cache if available

### ❌ **Problem: Images not loading**
**Solution:**
1. Check `images` folder exists in `public_html/ookr/`
2. Check `images/soka-highlights/` folder has 24 images
3. Check file permissions

### ❌ **Problem: Soka gallery not showing**
**Solution:**
1. Refresh page (Ctrl + F5)
2. Check browser console for errors (F12 → Console tab)
3. Verify upload completed successfully

---

## 🔄 **ROLLBACK PROCEDURE (If Something Goes Wrong):**

If anything breaks:

1. Go to File Manager: `public_html/ookr/`
2. **Delete everything** in the `ookr` folder
3. Find your backup: `ookr-backup-feb26-2026.zip`
4. Right-click → **Extract**
5. Extract to: `/public_html/ookr/`
6. ✅ Your old website is restored

---

## 📊 **DEPLOYMENT CHECKLIST:**

Before you start:
- [ ] Logged into cPanel
- [ ] Located File Manager
- [ ] Can see `public_html/ookr/` folder
- [ ] Have `website-update.zip` ready on computer

Step 1 - Backup:
- [ ] Created backup ZIP
- [ ] Downloaded backup to computer
- [ ] Verified backup downloaded successfully

Step 2 - Delete:
- [ ] Deleted all old files in `ookr` folder
- [ ] `ookr` folder is now empty

Step 3 - Upload:
- [ ] Uploaded `website-update.zip`
- [ ] Upload completed (green checkmark)

Step 4 - Extract:
- [ ] Extracted ZIP file
- [ ] Extraction completed successfully
- [ ] Can see folders: `images`, `division-assets`, `static`

Step 5 - Clean Up:
- [ ] Deleted `website-update.zip` from server
- [ ] Cleared server cache (if available)

Testing:
- [ ] Cleared browser cache
- [ ] Home page loads
- [ ] Impact Journey page shows Soka gallery
- [ ] Soka gallery carousel works (24 images)
- [ ] All navigation links work
- [ ] Division sites load correctly
- [ ] Kgotla colors display correctly

---

## 📞 **SUMMARY:**

**Package Ready:** ✅ `website-update.zip` (525 MB)
**Location:** `f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\website-update.zip`

**Your Steps:**
1. ✅ Backup old site (2 min)
2. ✅ Delete old files (1 min)
3. ✅ Upload ZIP (5-15 min)
4. ✅ Extract ZIP (2-3 min)
5. ✅ Clean up & test (2 min)

**Total Time:** 15-25 minutes

**Result:**
- Updated website with all new features
- Soka 2026 gallery live
- Improved performance
- Better code quality

---

## ✅ **YOU'RE READY TO DEPLOY!**

Everything is prepared. Just follow the 5 steps above in your cPanel.

If you encounter any issues, refer to the Troubleshooting section or use the Rollback procedure to restore the backup.

Good luck! 🚀

---

*Deployment package prepared: February 26, 2026*
*File location: f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\website-update.zip*
