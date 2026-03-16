# Division Structure Standards

This document defines the standardized folder structure for all division websites within the OOKR Office platform.

## 📋 Overview

Each division should follow a consistent structure to improve:
- **Maintainability** - Easy to find files across divisions
- **Onboarding** - New developers can navigate any division
- **Consistency** - Predictable organization
- **Scalability** - Easy to add new divisions

## 📁 Standard Structure

```
DivisionName/
├── components/          # React components specific to this division
│   ├── Header.jsx      # (or Navbar.jsx) - Division navigation
│   ├── Footer.jsx      # Division footer
│   ├── Layout.jsx      # Division layout wrapper (optional)
│   └── ...             # Other reusable components
│
├── pages/              # Page components (routes)
│   ├── Home.jsx        # Division home page
│   ├── About.jsx       # About page (if applicable)
│   └── ...             # Other pages
│
├── config/             # Division-specific configuration
│   ├── index.js        # Main config export
│   ├── navigation.js   # Navigation links
│   └── content.js      # Static content/data
│
├── utils/              # Division-specific utilities (optional)
│   └── ...             # Helper functions unique to this division
│
├── assets/             # DEPRECATED - Use public/division-assets/ instead
│   └── ...             # Local imports only (logos used in import statements)
│
├── index.css           # Division-specific styles
└── [DivisionName]Site.jsx  # Main division wrapper component
```

## 🎯 File Naming Conventions

### Components
- **PascalCase** for component files: `Header.jsx`, `EventCard.jsx`
- Use `.jsx` extension for React components
- One component per file

### Pages
- **PascalCase** for page files: `Home.jsx`, `About.jsx`, `Contact.jsx`
- Pages are components that represent routes

### Config
- **camelCase** for config files: `navigation.js`, `content.js`
- Use `.js` extension (not `.jsx`)

### Utilities
- **camelCase** for utility files: `formatDate.js`, `validators.js`

## 📂 Folder Purposes

### `/components`
**Purpose:** Reusable UI components specific to this division

**What goes here:**
- Header/Navbar
- Footer
- Layout wrapper
- Reusable cards, modals, forms
- Division-specific UI elements

**What doesn't:**
- Page components (use `/pages`)
- Shared components across divisions (use `/src/shared`)

**Example:**
```
components/
├── Header.jsx
├── Footer.jsx
├── EventCard.jsx
├── TestimonialSlider.jsx
└── ContactForm.jsx
```

### `/pages`
**Purpose:** Page-level components that map to routes

**What goes here:**
- Home page
- About page
- Contact page
- Any route-level component

**What doesn't:**
- Reusable components (use `/components`)
- Layout wrappers (use `/components/Layout.jsx`)

**Example:**
```
pages/
├── Home.jsx
├── About.jsx
├── Events.jsx
├── Contact.jsx
└── Gallery.jsx
```

### `/config`
**Purpose:** Configuration and static data

**What goes here:**
- Navigation menu items
- Static content (text blocks, lists)
- Division-specific constants
- Feature flags

**What doesn't:**
- Component logic
- Utilities/functions (use `/utils`)

**Example - `config/navigation.js`:**
```javascript
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];
```

**Example - `config/content.js`:**
```javascript
export const homeContent = {
  hero: {
    title: "Welcome to KRF",
    subtitle: "Empowering Communities"
  },
  stats: [
    { label: "Beneficiaries", value: "3,267" },
    { label: "Programs", value: "25+" }
  ]
};
```

### `/utils`
**Purpose:** Division-specific utility functions

**What goes here:**
- Helper functions unique to this division
- Data formatters
- Custom validators
- Division-specific calculations

**What doesn't:**
- Shared utilities (use `/src/shared/utils`)
- React components
- Configuration data

**Example:**
```javascript
// utils/calculateProgress.js
export const calculateCourseProgress = (completed, total) => {
  return Math.round((completed / total) * 100);
};
```

### `/assets` (DEPRECATED)
**⚠️ Important:** Assets should now be stored in `public/division-assets/[division-name]/`

**Only use local `/assets` for:**
- Imported images (e.g., `import logo from './assets/logo.png'`)
- Assets that need webpack processing

**For all other assets:**
- Use `public/division-assets/[division-name]/images/`
- Use `public/division-assets/[division-name]/gallery/`
- Reference with helper: `getDivisionImage('krf', 'hero.jpg')`

## 🔄 Migration Guide

### Moving from Old Structure

**Step 1: Create config folder**
```bash
mkdir -p src/DivisionSites/[DivisionName]/config
```

**Step 2: Extract hardcoded data**
Move navigation arrays, content blocks, and constants from components to config files.

**Before (in Header.jsx):**
```javascript
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" }
];
```

**After:**
```javascript
// config/navigation.js
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" }
];

// Header.jsx
import { navLinks } from '../config/navigation';
```

**Step 3: Move assets to public**
```bash
mv src/DivisionSites/[Division]/assets/* public/division-assets/[division]/images/
```

**Step 4: Update asset references**
```javascript
// Before
<img src="/images/hero.jpg" />

// After
import { getDivisionImage } from '../../../shared/utils/assetPaths';
<img src={getDivisionImage('krf', 'hero.jpg')} />
```

## ✅ Checklist for New Divisions

When creating a new division, ensure:

- [ ] Folder structure matches standard
- [ ] Has `components/` with Header and Footer
- [ ] Has `pages/` with at least Home.jsx
- [ ] Has `config/` with navigation and content
- [ ] Has `[DivisionName]Site.jsx` wrapper
- [ ] Has `index.css` for styles
- [ ] Assets stored in `public/division-assets/[name]/`
- [ ] Uses shared utilities from `/src/shared/`
- [ ] Registered in `/src/shared/config/divisions.js`
- [ ] Route added to `/src/App.js`

## 📊 Current Status

### Compliant Divisions
- ✅ **Kgotla** - Fully compliant with standard structure
- ✅ **KRF** - **NEW: Fully compliant** (Phase 2 demonstration division)
  - Has components/, pages/, data/ folders
  - **New: config/** folder with navigation.js and content.js
  - Components refactored to use centralized config
  - Demonstrated successful migration path

### Needs Migration
- ⚠️ **Coffee** - Missing config folder, has local assets
- ⚠️ **TVEI** - Needs structure audit
- ⚠️ **BusinessSchool** - Needs structure audit
- ⚠️ **Group** - Needs structure audit

## 🎨 Design Freedom

**Important:** This structure standardizes:
- ✅ Where files live
- ✅ How data is organized
- ✅ How assets are referenced

**It does NOT dictate:**
- ❌ Visual design
- ❌ Component styling
- ❌ UI/UX patterns
- ❌ Content or messaging

Each division retains complete creative control over its appearance and user experience.

## 📝 Examples

### Example 1: Well-Structured Division (Kgotla)

```
Kgotla/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Events.jsx
│   ├── Heritage.jsx
│   └── Contact.jsx
├── utils/
│   └── helpers.js
├── index.css
└── KgotlaSite.jsx
```

### Example 2: Adding Config to Existing Division

**Step 1: Create config structure**
```javascript
// config/index.js
export * from './navigation';
export * from './content';

// config/navigation.js
export const navLinks = [
  { to: "/krf-website/", label: "Home" },
  { to: "/krf-website/about", label: "About" },
  { to: "/krf-website/programs", label: "Programs" },
  { to: "/krf-website/impact", label: "Impact" }
];

// config/content.js
export const stats = [
  { label: "Beneficiaries", value: "3,267" },
  { label: "Investment", value: "R5.7M" },
  { label: "Programs", value: "25+" }
];
```

**Step 2: Use in components**
```javascript
// pages/Home.jsx
import { stats } from '../config';

export default function Home() {
  return (
    <div>
      {stats.map(stat => (
        <div key={stat.label}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
```

## 🚀 Benefits

1. **Easier Navigation** - Know where to find any file
2. **Better Collaboration** - Team members can work across divisions
3. **Simpler Maintenance** - Update structure once, apply everywhere
4. **Faster Development** - Less time searching, more time building
5. **Quality Assurance** - Easier to review and audit code

---

*Last Updated: February 26, 2026*
*Part of Phase 2: Code Audit Implementation*
