# 📁 BSLE Asset Mapping & Organization Plan

## File Mapping (Original → Target)

### 🎬 Videos

| Original File | Target Name | Page/Component | Status | Action Needed |
|--------------|-------------|----------------|--------|---------------|
| `Home(Hero)-African leadership inspiration.mp4` (2.3 MB) | `hero.mp4` | Home hero section | ✅ OK | Move only |
| `Business School Video 2.mp4` (26 MB) | `community-impact.mp4` | Home community section | ⚠️ COMPRESS | Compress to <25 MB |
| `Core Values - sustainable community impact.mp4` (21 MB) | `about-values.mp4` | About values section | ✅ OK | Move only |
| `Programmes - ESG Focus - Corporate sustainability.jpg` (25 MB - VIDEO?) | Check file | Programmes ESG | ❌ ERROR | Actually a large JPG, compress |
| `Masterclassess- Speaker conference stage, keynote, business seminar.mp4` (109 MB) | `initiatives-masterclass.mp4` | Initiatives page | ❌ COMPRESS | Compress to <25 MB |
| `Mentorship Programme --- leadership coaching.mp4` (3.8 MB) | `initiatives-mentorship.mp4` | Initiatives mentorship | ✅ OK | Move only |
| `Team meeting Video.mp4` (16 MB) | `programmes-esg.mp4` | Programmes ESG section | ✅ OK | Move only |

### 🖼️ Images - Home Page

| Original File | Target Name | Usage | Status |
|--------------|-------------|-------|--------|
| Home video → extract frame | `hero-cover.jpg` | Hero video poster | Create from video |

### 🖼️ Images - About Page

| Original File | Target Name | Usage | Status |
|--------------|-------------|-------|--------|
| `Vision and mission - sustainable community impact.jpg` (162 KB) | `about-vision.jpg` | Vision section | ✅ OK |
| `Vision and mission- diverse business team Africa.jpg` (151 KB) | `about-mission.jpg` | Mission section | ✅ OK |
| `Vision and mission- team collaboration.jpg` (112 KB) | `about-values.jpg` | Values section | ✅ OK |

### 🖼️ Images - Programmes Page

| Original File | Target Name | Usage | Status |
|--------------|-------------|-------|--------|
| `Programmes - ESG Focus - Corporate sustainability.jpg` (25 MB!) | `programmes-esg.jpg` | ESG programme | ❌ COMPRESS |
| `Programmes - ESG focus - renewable energy sustainable.jpg` (185 KB) | `programmes-sustainable.jpg` | Sustainability | ✅ OK |
| `Programmes - ESG Focus - green finance (1).jpeg` (548 KB) | `programmes-finance-1.jpg` | Finance section | ⚠️ COMPRESS |
| `Programmes - ESG Focus - green finance (2).jpeg` (426 KB) | `programmes-finance-2.jpg` | Finance section | ✅ OK |

### 🖼️ Images - Initiatives Page

| Original File | Target Name | Usage | Status |
|--------------|-------------|-------|--------|
| Masterclass video → extract frame | `initiatives-masterclass-cover.jpg` | Video poster | Create |
| Mentorship video → extract frame | `initiatives-mentorship-cover.jpg` | Video poster | Create |

### 🖼️ Images - Leadership Page

| Original File | Target Name | Usage | Status |
|--------------|-------------|-------|--------|
| Need Dr. Rakhudu photo | `leadership-dr-rakhudu.jpg` | Dr. Rakhudu profile | ⚠️ MISSING |
| Use business school photo temporarily | `leadership-heritage.jpg` | Heritage section | Use placeholder |

### 🖼️ Images - Community/Initiatives

| Original File | Target Name | Usage | Status |
|--------------|-------------|-------|--------|
| `community outreach discussions- education outreach.jpg` (87 KB) | `community-outreach.jpg` | Community projects | ✅ OK |
| `community.jpg` (340 KB) | `community-impact.jpg` | Community section | ✅ OK |
| `communityhospital.jpg` (149 KB) | `community-hospital.jpg` | Healthcare initiative | ✅ OK |

### 🖼️ Images - Events Gallery

| Original File | Target Name | Usage | Status |
|--------------|-------------|-------|--------|
| `Events Gallery - business school graduation.jpg` (141 KB) | `events-1.jpg` | Carousel item 1 | ✅ OK |
| `Events Gallery - business school graduation 2.jpg` (95 KB) | `events-2.jpg` | Carousel item 2 | ✅ OK |
| `Events Gallery - business school graduation 3.jpg` (224 KB) | `events-3.jpg` | Carousel item 3 | ✅ OK |
| `Events Gallery - business school graduation 4.jpg` (167 KB) | `events-4.jpg` | Carousel item 4 | ✅ OK |
| `Events Gallery - business school graduation 6.jpg` (72 KB) | `events-5.jpg` | Carousel item 5 | ✅ OK |

### 🖼️ Images - Networking/Contact

| Original File | Target Name | Usage | Status |
|--------------|-------------|-------|--------|
| `Networking Events -- social mixer.jpg` (325 KB) | `networking-event.jpg` | Networking section | ✅ OK |
| `Business school photos.jpg` (247 KB) | `contact-bg.jpg` | Contact background | ✅ OK |
| `Business School.jpg` (266 KB) | `about-school.jpg` | About school | ✅ OK |

### 🏷️ Logo & Branding

| Original File | Target Name | Usage | Status |
|--------------|-------------|-------|--------|
| `BusinessSchoolOfLeadershipExcellenceLogo.png` (511 KB) | `logo-bsle.png` | Navbar/Footer logo | ⚠️ COMPRESS |
| Same logo | `favicon.png` | Browser favicon | Resize to 32x32 |

---

## 🔧 Compression Tasks

### Priority 1 - Must Compress (Exceed Limits)

```bash
# 1. Masterclass video (109 MB → <25 MB)
ffmpeg -i "../Masterclassess- Speaker conference stage, keynote, business seminar.mp4" \
  -vf "scale=-2:1080,fps=30" \
  -c:v libx264 -crf 26 \
  -preset medium \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an public/assets/initiatives-masterclass.mp4

# 2. Business School Video (26 MB → <25 MB)
ffmpeg -i "../Business School Video 2.mp4" \
  -vf "scale=-2:1080,fps=30" \
  -c:v libx264 -crf 24 \
  -preset medium \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -an public/assets/community-impact.mp4

# 3. ESG Corporate Sustainability JPG (25 MB → <500 KB)
magick "../Programmes - ESG Focus - Corporate sustainability.jpg" \
  -resize 1920x1920\> \
  -quality 75 \
  -strip \
  public/assets/programmes-esg.jpg

# 4. Green Finance JPEG (548 KB → <500 KB)
magick "../Programmes - ESG Focus - green finance (1).jpeg" \
  -resize 1920x1920\> \
  -quality 80 \
  -strip \
  public/assets/programmes-finance-1.jpg

# 5. Logo PNG (511 KB → <500 KB)
magick "../BusinessSchoolOfLeadershipExcellenceLogo.png" \
  -resize 800x800\> \
  -quality 90 \
  -strip \
  public/assets/logo-bsle.png
```

### Priority 2 - Create Poster Images

```bash
# Extract poster from hero video
ffmpeg -i public/assets/hero.mp4 -ss 00:00:01 -vframes 1 -q:v 2 public/assets/hero-cover.jpg

# Extract poster from community impact video
ffmpeg -i public/assets/community-impact.mp4 -ss 00:00:02 -vframes 1 -q:v 2 public/assets/community-impact-cover.jpg

# Extract poster from masterclass video
ffmpeg -i public/assets/initiatives-masterclass.mp4 -ss 00:00:02 -vframes 1 -q:v 2 public/assets/initiatives-masterclass-cover.jpg

# Extract poster from mentorship video (after moving)
ffmpeg -i public/assets/initiatives-mentorship.mp4 -ss 00:00:01 -vframes 1 -q:v 2 public/assets/initiatives-mentorship-cover.jpg

# Extract poster from ESG video
ffmpeg -i public/assets/programmes-esg.mp4 -ss 00:00:01 -vframes 1 -q:v 2 public/assets/programmes-esg-cover.jpg
```

### Priority 3 - Create Favicon

```bash
# Create 32x32 favicon from logo
magick public/assets/logo-bsle.png -resize 32x32 public/assets/favicon.png
```

---

## 📋 Execution Order

1. **Compress large files** (Priority 1)
2. **Move videos that are OK** (under 25 MB)
3. **Move images that are OK** (under 500 KB)
4. **Extract video poster frames** (Priority 2)
5. **Create favicon** (Priority 3)
6. **Update component references** if needed
7. **Test all pages** with real media

---

## ✅ Verification Checklist

After moving files:

- [ ] All videos ≤ 25 MB
- [ ] All images ≤ 500 KB
- [ ] All videos have poster images
- [ ] Logo displays in Navbar
- [ ] Favicon shows in browser tab
- [ ] Hero video plays on Home
- [ ] Community video plays on Home
- [ ] Events carousel shows 5 images
- [ ] All pages load media without 404 errors

---

**Status:** Ready to execute compression and move operations
