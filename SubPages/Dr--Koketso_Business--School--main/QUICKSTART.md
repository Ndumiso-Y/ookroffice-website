# ⚡ BSLE Website - Quick Start Guide

**For developers getting started with this project**

---

## 🚀 5-Minute Setup

```bash
# 1. Clone and install
git clone https://github.com/EmbarkDigitals/dr-koketso-bsle-website.git
cd dr-koketso-bsle-website
npm install

# 2. Start development server
npm run dev
# Opens at: http://localhost:5173/dr-koketso-bsle-website/

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
# Opens at: http://localhost:4173/dr-koketso-bsle-website/
```

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app with HashRouter setup |
| `src/pages/*.jsx` | All 9 page components |
| `src/components/*.jsx` | Reusable components (Navbar, Footer, etc.) |
| `src/index.css` | Tailwind v4 config + brand colors |
| `vite.config.js` | Base path for GitHub Pages |
| `public/assets/` | All media files go here |

---

## 🎨 Adding Media

**Videos:**
```bash
# 1. Compress video first (max 25 MB)
ffmpeg -i input.mp4 -vf "scale=-2:1080,fps=30" -c:v libx264 -crf 24 -preset medium -pix_fmt yuv420p -movflags +faststart -an /public/assets/video.mp4

# 2. Create poster image
ffmpeg -i /public/assets/video.mp4 -ss 00:00:01 -vframes 1 /public/assets/video-cover.jpg

# 3. Use in component
import BSLEVideo from '../components/BSLEVideo';

<BSLEVideo
  src="/assets/video.mp4"
  poster="/assets/video-cover.jpg"
/>
```

**Images:**
```bash
# 1. Compress image (max 500 KB)
magick mogrify -resize 1920x1920\> -quality 82 -strip image.jpg

# 2. Move to assets
mv image.jpg public/assets/

# 3. Use in component
<img src="/assets/image.jpg" alt="Description" />
```

---

## 🔧 Common Tasks

### Edit Page Content
```bash
# Edit any page
code src/pages/Home.jsx

# Changes reflect immediately in dev mode
npm run dev
```

### Change Brand Colors
```javascript
// src/index.css
@theme {
  --color-primary-brown: #542a02;
  --color-leadership-green: #009444;
  // ... edit colors here
}
```

### Add New Page
```jsx
// 1. Create page component
// src/pages/NewPage.jsx
export default function NewPage() {
  return <div>New Page</div>;
}

// 2. Add route in App.jsx
import NewPage from './pages/NewPage';

<Route path="/new" element={<NewPage />} />

// 3. Add to Navbar.jsx
const navLinks = [
  // ...
  { path: '/new', label: 'New Page' },
];
```

---

## 🚀 Deploy to GitHub Pages

```bash
# 1. Commit changes
git add .
git commit -m "Your changes"

# 2. Push to GitHub (triggers auto-deploy)
git push origin main

# 3. Wait 2-3 minutes, then visit:
# https://embarkdigitals.github.io/dr-koketso-bsle-website/
```

---

## 🐛 Troubleshooting

### White screen after deploy?
```javascript
// Check vite.config.js
base: '/dr-koketso-bsle-website/',  // Must match repo name

// Check App.jsx
import { HashRouter as Router } from 'react-router-dom';  // Must be HashRouter
```

### Assets not loading?
```jsx
// ✅ Correct
<img src="/assets/image.jpg" />
<BSLEVideo src="/assets/video.mp4" />

// ❌ Wrong
<img src="../assets/image.jpg" />
<img src="./assets/image.jpg" />
```

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Documentation Index

- **[README.md](README.md)** - Full project documentation
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Step-by-step deployment guide
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete deliverables overview
- **[QUICKSTART.md](QUICKSTART.md)** - This file

---

## 🎯 Development Workflow

```bash
# Daily workflow
git pull origin main           # Get latest changes
npm run dev                    # Start dev server
# ... make changes ...
npm run build                  # Test build
npm run preview               # Test production build
git add .                      # Stage changes
git commit -m "Description"   # Commit
git push origin main          # Deploy (auto)
```

---

## 💡 Component Examples

**Using BSLEVideo:**
```jsx
import BSLEVideo from '../components/BSLEVideo';

<BSLEVideo
  src="/assets/hero.mp4"
  poster="/assets/hero-cover.jpg"
  className="h-screen"
  overlay={true}
  overlayOpacity={40}
>
  <div className="text-white text-center">
    <h1 className="text-5xl font-heading font-bold">
      Your Content
    </h1>
  </div>
</BSLEVideo>
```

**Using Carousel:**
```jsx
import Carousel from '../components/Carousel';

const items = [
  { type: 'image', src: '/assets/event-1.jpg', alt: 'Event 1' },
  { type: 'image', src: '/assets/event-2.jpg', alt: 'Event 2' },
];

<Carousel items={items} autoplay={true} interval={5000} />
```

---

## ⚙️ Scripts Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build (port 4173) |
| `npm run lint` | Run ESLint |

---

## 🎨 Brand Colors Reference

```css
Primary Brown:      #542a02
Accent Clay:        #753500
Forest Green:       #345623
Leadership Green:   #009444  /* Primary action color */
Sky Blue:           #00a8be
Cyan Mist:          #a3cfdc
Footer Dark:        #0c3b2e
```

**Usage in Tailwind:**
```jsx
<button className="bg-leadership-green text-white px-6 py-3 rounded-lg">
  Apply Now
</button>

<div className="bg-primary-brown text-white p-8">
  Content
</div>
```

---

## 📞 Get Help

**Issues?**
- Check [DEPLOYMENT.md](DEPLOYMENT.md) troubleshooting section
- Review [README.md](README.md) for detailed documentation
- Contact Embark Digitals development team

**Repository:**
https://github.com/EmbarkDigitals/dr-koketso-bsle-website

**Live Site:**
https://embarkdigitals.github.io/dr-koketso-bsle-website/

---

*Happy coding! 🚀*
