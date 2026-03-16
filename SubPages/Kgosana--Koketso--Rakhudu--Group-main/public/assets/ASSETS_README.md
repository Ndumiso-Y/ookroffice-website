# Required Assets for KKR Group Website

Place the following assets in this directory (`/public/assets/`).

## Compression Standards

### Videos (FFmpeg)
- Maximum size: ≤ 25 MB
- Resolution: 1080p @ 30fps
- CRF: 24
- Preset: medium
- Example command:
  ```bash
  ffmpeg -i input.mp4 -vf scale=1920:1080 -r 30 -c:v libx264 -crf 24 -preset medium -c:a aac -b:a 128k output.mp4
  ```

### Images (ImageMagick or similar)
- Maximum size: ≤ 500 KB
- Format: WebP or JPG (optimized)
- Example command:
  ```bash
  magick input.jpg -resize 1920x1080 -quality 85 output.jpg
  ```

## Required Asset List

### Home Page
- `kkr-hero.mp4` - Video background for hero section

### About Page
- `about-banner-1.jpg` - Executive meetings
- `about-banner-2.jpg` - Leadership roundtables
- `about-banner-3.jpg` - Development planning

### Focus Areas Page
#### Community Empowerment
- `focus-empowerment-1.jpg`
- `focus-empowerment-2.jpg`

#### Agriculture
- `focus-agriculture-1.jpg`
- `focus-agriculture-2.jpg`
- `focus-agriculture-3.jpg`

#### Skills Development
- `focus-skills-1.jpg`
- `focus-skills-2.jpg`
- `focus-skills-3.jpg`

#### Enterprise & Urban Development
- `focus-enterprise.jpg` - Static image
- `focus-urban.jpg` - Static image
- `focus-enterprise-marabo.mp4` - Video spotlight (Marabo Essentials story)
- `focus-enterprise-marabo-cover.jpg` - Video poster/thumbnail

### Leadership Page
- `leadership-dr-koketso.jpg` - Portrait of Dr. Koketso Rakhudu

### Projects Page
- `projects-1.jpg`
- `projects-2.jpg`
- `projects-3.jpg`

### Contact Page
- `contact-bg.jpg` - Background image

### General
- `favicon.png` - Website favicon

## Total Assets Needed
- **Videos:** 2 files
- **Images:** 20 files
- **Total:** 22 files

## Notes
- All assets should be optimized before adding to the repository
- Repository should remain under 100 MB total
- Place all files directly in `/public/assets/` (flat structure, no subfolders)
