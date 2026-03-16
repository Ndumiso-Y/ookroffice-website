# Dr. Koketso Rakhudu - Business School of Leadership Excellence (BSLE)

Official website for the Business School of Leadership Excellence, showcasing ethical leadership programmes, initiatives, and African heritage-grounded education.

## 🌍 Live Site

**Production:** [https://embarkdigitals.github.io/dr-koketso-bsle-website/](https://embarkdigitals.github.io/dr-koketso-bsle-website/)

## 🎨 Project Overview

A performant, multi-page React website presenting BSLE's mission, values, programmes, and initiatives with storytelling visuals and subtle video loops.

### Core Themes
- **Ethical Leadership** - Integrity and responsible governance
- **Sustainability** - ESG principles and environmental stewardship
- **Heritage** - African wisdom and Ubuntu philosophy
- **Innovation** - Modern solutions to leadership challenges
- **Community** - Impact-driven initiatives and partnerships

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** TailwindCSS with custom brand colors
- **Routing:** React Router (HashRouter for GitHub Pages)
- **SEO:** React Helmet Async
- **Deployment:** GitHub Actions → GitHub Pages
- **Accessibility:** WCAG 2.1 AA baseline

## 🎨 Brand System

### Colors
```css
Primary Brown:      #542a02
Accent Clay:        #753500
Forest Green:       #345623
Leadership Green:   #009444
Sky Blue:           #00a8be
Cyan Mist:          #a3cfdc
Footer Dark:        #0c3b2e
```

### Typography
- **Headings:** Oswald / Poppins
- **Body:** Inter / Roboto

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Responsive navigation with hamburger menu
│   ├── Footer.jsx          # Brand-styled footer with links and social
│   ├── VideoPlayer.jsx     # Reusable video component with overlay
│   └── Carousel.jsx        # Accessible image/video carousel
├── pages/
│   ├── Home.jsx            # Hero video + overview + CTAs
│   ├── About.jsx           # Vision, mission, values, OOKKR link
│   ├── Programmes.jsx      # ESG, King IV, Strategic Leadership, etc.
│   ├── Initiatives.jsx     # Masterclasses, mentorship, community projects
│   ├── Leadership.jsx      # Dr. Rakhudu profile + heritage
│   ├── Research.jsx        # Publications and resources
│   ├── Admissions.jsx      # Application process + partnership forms
│   ├── Events.jsx          # Gallery carousel of past events
│   └── Contact.jsx         # Contact form + map + details
├── App.jsx                 # Main app with routing
└── index.css               # Global styles + Tailwind directives

public/
└── assets/                 # All media files (see below)
```

## 🖼️ Media Assets

All assets should be placed in `/public/assets/`:

### Videos (≤ 25 MB each, MP4)
- `hero.mp4` + `hero-cover.jpg`
- `community-impact.mp4` + `community-impact-cover.jpg`
- `programmes-esg.mp4` + `programmes-esg-cover.jpg`
- `initiatives-masterclass.mp4` + `initiatives-masterclass-cover.jpg`

### Images (≤ 500 KB each, JPG/PNG)
- `logo-bsle.png`
- `favicon.png`
- `about-vision.jpg`
- `about-mission.jpg`
- `leadership-dr-rakhudu.jpg`
- `events-1.jpg` through `events-5.jpg`
- `contact-bg.jpg`

**Note:** Videos are muted autoplay loops with visible controls and poster fallbacks.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/EmbarkDigitals/dr-koketso-bsle-website.git
cd dr-koketso-bsle-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 📦 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment

```bash
# Build the project
npm run build

# The deploy workflow will handle the rest
```

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. The workflow will automatically deploy on push to main

## ♿ Accessibility Features

- WCAG 2.1 AA compliance
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus rings on all focusable elements
- Alt text for all images
- Video captions support (when available)
- Screen reader friendly carousel

## 🧪 Pre-Deployment QA Checklist

### Build & Preview
```bash
# 1. Clean build
npm run build

# 2. Preview production build locally
npm run preview

# 3. Check for console errors in browser DevTools
# Navigate to: http://localhost:4173/dr-koketso-bsle-website/
```

### Functional Testing
- [ ] All pages load without errors (no white screen)
- [ ] Navigation works on mobile and desktop
- [ ] Hamburger menu opens/closes on mobile
- [ ] Videos autoplay (muted) with controls visible
- [ ] Video overlays are readable with dark overlay
- [ ] Carousel keyboard navigation (← / →)
- [ ] Carousel swipe works on mobile
- [ ] Forms validate and submit
- [ ] All internal links work correctly
- [ ] All external links open in new tab
- [ ] Images lazy load in carousels
- [ ] Site is responsive on all screen sizes (mobile, tablet, desktop)
- [ ] SEO meta tags present on all pages
- [ ] No console errors or warnings
- [ ] Focus outlines visible when tabbing

### Asset Verification
- [ ] All images load from `/assets/` directory
- [ ] All videos load from `/assets/` directory
- [ ] No broken image/video placeholders
- [ ] Videos ≤ 25 MB each
- [ ] Images ≤ 500 KB each
- [ ] All videos have poster images
- [ ] Alt text present on all images

### Routing & Deployment
- [ ] HashRouter is active (URLs contain `#/`)
- [ ] Page refresh works on all routes
- [ ] Direct URL navigation works
- [ ] GitHub repo remote is correct
- [ ] `vite.config.js` has correct `base` path

## 📝 Content Guidelines

### Video Best Practices
- Keep videos under 25 MB
- Always provide poster images
- Use muted autoplay with visible controls
- No audio needed (storytelling through visuals)

**Video Compression Command:**
```bash
ffmpeg -i input.mp4 \
  -vf "scale=-2:1080,fps=30" \
  -c:v libx264 \
  -crf 24 \
  -preset medium \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an output.mp4
```

### Image Optimization
- Compress images to ≤ 500 KB
- Use appropriate formats (JPG for photos, PNG for logos)
- Provide descriptive alt text
- Use lazy loading for carousel images

**Image Compression Command:**
```bash
# Using ImageMagick
magick mogrify -resize 1920x1920\> -quality 82 -strip *.jpg

# Or using cwebp for WebP format
cwebp -q 80 input.jpg -o output.webp
```

### File Size Budget Check
Before committing, verify no files exceed limits:
```bash
git ls-files -z | xargs -0 ls -lh | sort -k5 -h | tail
```

## 👨‍💻 Developer Workflow

### Repository Information
- **GitHub Repo:** `https://github.com/EmbarkDigitals/dr-koketso-bsle-website.git`
- **Live URL:** `https://embarkdigitals.github.io/dr-koketso-bsle-website/`
- **Branch:** `main` (auto-deploys via GitHub Actions)

### Workflow Protections

This project implements battle-tested workflow protections:

1. **HashRouter Enforcement** - Prevents blank-page GitHub Pages deploys
2. **LF Line Endings** - `.gitattributes` prevents CRLF warnings
3. **Asset Budget** - Compression required for all media (see guidelines)
4. **Video Overlays** - Dark overlays ensure text readability
5. **CI/CD Auto-Deploy** - GitHub Actions deploys on every push to main

### Before Each Commit

```bash
# 1. Check file sizes
git ls-files -z | xargs -0 ls -lh | sort -k5 -h | tail

# 2. Compress large files (see compression commands above)

# 3. Build and test locally
npm run build && npm run preview

# 4. Verify no console errors at http://localhost:4173/dr-koketso-bsle-website/

# 5. Stage and commit
git add .
git commit -m "Your descriptive message"
git push origin main
```

### Component Usage

**Standard Video Component:**
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
    <h1>Your Content Here</h1>
  </div>
</BSLEVideo>
```

**Asset Paths:**
- ✅ `/assets/video.mp4` - Correct
- ❌ `../assets/video.mp4` - Never use relative paths
- ❌ `./assets/video.mp4` - Never use relative paths

## 🤝 Contributing

This is a client project by **Embark Digitals**. For questions or updates, contact the development team.

## 📄 License

© 2024 Business School of Leadership Excellence. All rights reserved.

Designed and developed by [Embark Digitals](https://embarkdigitals.com)

## 🔗 Related Links

- [Office of Kgosi Koketso Rakhudu (OOKKR)](https://ookkr.org)
- [Embark Digitals](https://embarkdigitals.com)

## 📧 Support

For technical support or questions:
- Email: info@bsle.co.za
- Website: [BSLE Contact Page](https://embarkdigitals.github.io/dr-koketso-bsle-website/#/contact)

---

**Built with ❤️ by Embark Digitals**
# Dr--Koketso_Business--School-
