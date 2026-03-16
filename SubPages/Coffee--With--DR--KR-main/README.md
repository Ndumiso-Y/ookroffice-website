# Coffee with Dr. Koketso Rakhudu — High-Level UI/UX (React + Vite + Tailwind + GSAP)

A one-page, high-level UI/UX scaffold aligned to the brief. Includes GSAP scroll reveals, color system, typography, SEO/OG meta, JSON-LD, reduced motion support, and a hero video placeholder.

## Stack
- React 18 + Vite 5
- Tailwind CSS 3
- GSAP 3 (ScrollTrigger)

## Getting Started
```bash
npm install
npm run dev
```
Build:
```bash
npm run build
npm run preview
```

## Assets
- Replace `src/assets/hero.webm` with your 8–12s seamless coffee-pour WebM (≤10MB) and add an MP4 fallback if you like.
- Replace `src/assets/poster.jpg` and `src/assets/og-image.jpg` with your final images.

## Colors
- Deep Coffee `#4B1D00`
- Warm Coffee `#6B2E00`
- Coffee Orange `#E06A1C`
- Cream `#F5E9DA`, `#FFF9F2`
- Charcoal `#2C1200`

## Notes
- Sticky navbar with anchor links
- Sections per wireframe: Hero, About, Vision/Mission, C.O.F.F.E.E., Structure, Core Components, Who/Why, Impact, Apply, Footer
- Reduced motion: animations are disabled when `prefers-reduced-motion` is set
- GA4 placeholder: search for `G-XXXXXXX` in `index.html` and replace
- Performance: images lazy by default with modern browsers, video poster set

— Generated 2025-09-29T20:49:06.132902Z
