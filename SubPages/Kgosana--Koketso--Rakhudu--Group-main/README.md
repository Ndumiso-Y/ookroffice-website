# KKR Group Website

A high-level, multi-page corporate website for the Kgosana Koketso Rakhudu Group (KKR Group) - a Private Special Economic Vehicle Company driving economic growth, social empowerment, and investment development across Africa.

## 🎯 Project Overview

This website positions the KKR Group as a leading economic development organization, showcasing:
- Strategic investments and partnerships
- Community empowerment initiatives
- Economic development focus areas
- Leadership and vision
- Project impact and case studies

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Routing:** React Router (HashRouter for GitHub Pages)
- **SEO:** React Helmet Async
- **Hosting:** GitHub Pages

## 📁 Project Structure

```
Website/
├── public/
│   └── assets/           # Media files (videos, images, favicon)
├── src/
│   ├── components/
│   │   ├── Carousel.jsx  # Reusable carousel component
│   │   └── Navigation.jsx # Navigation bar
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── FocusAreas.jsx
│   │   ├── Leadership.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment
└── package.json
```

## 🎨 Brand Identity

### Colors
- **Primary:** Royal Blue `#174E81`, Gold `#C99A3E`
- **Secondary:** White `#FFFFFF`, Neutral Gray `#F4F4F4`, Charcoal `#1A1A1A`

### Typography
- **Headings:** Poppins / Montserrat (SemiBold–Bold)
- **Body:** Inter / Lato (Regular–Medium)

### Tone
Executive • Visionary • Developmental • Authoritative

## 📄 Pages

1. **Home** - Hero video background, mission overview, quick links
2. **About** - 3-image carousel, company definition, characteristics, core functions
3. **Focus Areas** - Multiple carousels (Empowerment, Agriculture, Skills) + video spotlight
4. **Leadership** - Dr. Koketso Rakhudu profile
5. **Projects** - 3-image carousel, impact description
6. **Contact** - Contact form with background image

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Website
```

2. Install dependencies:
```bash
npm install
```

3. Add required assets to `/public/assets/` (see [Asset Requirements](#-asset-requirements))

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

## 📸 Asset Requirements

See `/public/assets/ASSETS_README.md` for detailed asset list and compression standards.

### Summary
- **22 total assets** (2 videos, 20 images)
- Videos: ≤ 25 MB each (1080p @ 30fps, CRF 24)
- Images: ≤ 500 KB each (WebP/JPG optimized)
- All files placed in `/public/assets/` (flat structure)

## 🌐 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Push to main branch:**
   - GitHub Actions will automatically build and deploy
   - Workflow file: `.github/workflows/deploy.yml`

3. **Access your site:**
   - URL: `https://<username>.github.io/<repository-name>/`

### Important Notes
- Uses HashRouter for GitHub Pages compatibility
- Base path configured as `./` in `vite.config.js`
- All routes work correctly in production

## ✅ Features

- ✨ 6 fully responsive pages
- 🎠 5 interactive carousels
- 🎥 2 video integrations (hero + spotlight)
- 📱 Mobile-first design
- ♿ WCAG 2.1 AA accessibility
- 🔍 SEO optimized with meta tags
- ⚡ Fast load times
- 🎨 Smooth transitions and animations

## 🧪 Testing

### Local Testing
```bash
npm run dev
```
Navigate to `http://localhost:5173`

### Production Build Testing
```bash
npm run build
npm run preview
```

### Verify:
- All pages load correctly
- Carousels function smoothly
- Videos play with controls
- Forms submit properly
- Responsive design on mobile/tablet/desktop
- Navigation works (especially hash routing)

## 📋 Acceptance Criteria

- [x] All 6 pages implemented
- [x] 5 carousels working (About, Empowerment, Agriculture, Skills, Projects)
- [x] Enterprise × Urban video spotlight with controls
- [x] HashRouter for GitHub Pages compatibility
- [x] Brand colors and typography applied
- [x] SEO meta tags on all pages
- [x] Responsive design (320px minimum width)
- [x] GitHub Actions deployment workflow
- [x] Accessibility features (ARIA labels, alt text, semantic HTML)

## 🤝 Contributing

This is a private project for KKR Group. For contributions or questions, contact the project team.

## 📧 Contact

**KKR Group**
Email: info@kkrgroup.co.za

## 📝 License

© 2025 Kgosana Koketso Rakhudu Group. All rights reserved.
