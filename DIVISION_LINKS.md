# Division Website Links - Setup Guide

## Overview

The OOKR Office website now includes "Visit Website" buttons for each division that link to their standalone websites. These buttons are currently disabled and show "Coming Soon" until the division websites are deployed.

## Current Divisions with External Links

1. **Koketso Rakhudu Foundation**
2. **The Village Economy Indaba**
3. **Coffee with Dr. Koketso Rakhudu**
4. **Dr. Koketso Rakhudu Business School of Leadership Excellence**

---

## How to Enable Division Links

### Step 1: Deploy Each Division Website

First, deploy each division website to its hosting platform (cPanel, GitHub Pages, etc.):

- **Koketso Rakhudu Foundation**: `F:\Digital Agency\DrKoketsoRakhudu\DrKoketsoRakhuduFoundation\Website`
- **The Village Economy Indaba**: `F:\Digital Agency\The Village Economy Indaba\Web Project\village-economy-indaba`
- **Business School**: `F:\Digital Agency\Dr.Koketso Rakhudu Business School of Leadership Excellence\Website`
- **Coffee with Dr. Rakhudu**: `F:\Digital Agency\Coffee with Dr. Koketso Rakhudu\Website`

### Step 2: Update the Configuration File

Once a division website is live, update the configuration:

1. Open the file: [src/config/divisionLinks.js](src/config/divisionLinks.js)

2. Update the URL and enable the link:

```javascript
// Example: After deploying Koketso Rakhudu Foundation
export const divisionLinks = {
  krf: {
    url: 'https://krfoundation.co.za',  // ← Update with actual URL
    enabled: true,                       // ← Change to true
  },

  tvei: {
    url: 'https://villageeconomyindaba.co.za',  // ← Update with actual URL
    enabled: true,                               // ← Change to true
  },

  coffee: {
    url: 'https://coffeewithdrrakhudu.co.za',  // ← Update with actual URL
    enabled: true,                              // ← Change to true
  },

  businessSchool: {
    url: 'https://businessschool.co.za',  // ← Update with actual URL
    enabled: true,                         // ← Change to true
  },
};
```

### Step 3: Rebuild the OOKR Website

After updating the configuration:

```bash
npm run build
```

### Step 4: Deploy Updated Build

Upload the updated `build/` folder to cPanel (following the steps in [DEPLOYMENT.md](DEPLOYMENT.md)).

---

## Button Behavior

### When `enabled: false` (default):
- Button shows "Coming Soon"
- Grayed out appearance
- Cannot be clicked
- Tooltip shows "Website coming soon"

### When `enabled: true`:
- Button shows "Visit Website" with external link icon
- Blue, clickable button
- Opens division website in new tab
- Hover animation
- Tooltip shows division name

---

## Visual Design

Each division card now has **two buttons**:

1. **"Learn More"** (Green) - Links to internal page with more info
2. **"Visit Website"** (Blue/Gray) - Links to external division website

The buttons are responsive:
- **Mobile**: Stack vertically
- **Desktop**: Side by side

---

## Example Workflow

Let's say you've deployed the **Koketso Rakhudu Foundation** website:

1. **Deploy KRF website** to `https://krfoundation.co.za`

2. **Update config** in `src/config/divisionLinks.js`:
   ```javascript
   krf: {
     url: 'https://krfoundation.co.za',
     enabled: true,
   },
   ```

3. **Rebuild**: `npm run build`

4. **Deploy** the updated `build/` folder to cPanel

5. **Result**: The "Visit Website" button for KRF is now blue and clickable!

---

## Recommended Deployment URLs

Suggested domain names for each division (update as needed):

- **KRF**: `https://krfoundation.co.za` or `https://ookr.co.za/krf`
- **TVEI**: `https://villageeconomyindaba.co.za` or `https://ookr.co.za/tvei`
- **Coffee**: `https://coffeewithdrrakhudu.co.za` or `https://ookr.co.za/coffee`
- **Business School**: `https://businessschool.co.za` or `https://ookr.co.za/businessschool`

---

## Testing

After updating and deploying:

1. Visit the OOKR website
2. Navigate to the "Divisions" page
3. Scroll to the division you enabled
4. Click "Visit Website" button
5. Verify it opens the correct division website in a new tab

---

## Troubleshooting

**Button still shows "Coming Soon":**
- Check `enabled: true` in config file
- Ensure you rebuilt: `npm run build`
- Clear browser cache (Ctrl+Shift+Delete)
- Force refresh (Ctrl+F5)

**Button doesn't open website:**
- Verify the URL is correct
- Check division website is live and accessible
- Check for typos in the URL

---

## Quick Reference

| Division | Config Key | File Path |
|----------|------------|-----------|
| Koketso Rakhudu Foundation | `krf` | `F:\Digital Agency\DrKoketsoRakhudu\DrKoketsoRakhuduFoundation\Website` |
| Village Economy Indaba | `tvei` | `F:\Digital Agency\The Village Economy Indaba\Web Project\village-economy-indaba` |
| Coffee with Dr. Rakhudu | `coffee` | `F:\Digital Agency\Coffee with Dr. Koketso Rakhudu\Website` |
| Business School | `businessSchool` | `F:\Digital Agency\Dr.Koketso Rakhudu Business School of Leadership Excellence\Website` |

---

**Ready to go! Deploy the division websites, update the config, and watch the links come to life! 🚀**
