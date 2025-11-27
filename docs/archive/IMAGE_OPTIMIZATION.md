# 🖼️ Image Optimization Guide - BizOps Website

## Overview

Guide lengkap untuk optimizing images di BizOps website untuk performance maksimal.

---

## 🎯 Goals

- ✅ Reduce bundle size
- ✅ Faster page load times
- ✅ Better Core Web Vitals scores
- ✅ Responsive images for all devices
- ✅ Modern formats (WebP, AVIF)

---

## 📊 Current State

**Observation:** Website menggunakan:
- CSS background images (decorative)
- Lucide React icons (SVG)
- External images (Unsplash) untuk placeholders
- Minimal `<img>` tags

**Assessment:** ✅ Already optimized dengan icon-based design!

---

## 🚀 Optimization Strategy

### Phase 1: Asset Audit

```bash
# Find all images
find . -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.svg" \) -not -path "./node_modules/*"

# Check image sizes
du -sh public/images/*

# Find images in CSS/components
grep -r "url(" --include="*.css" --include="*.tsx"
grep -r "<img" --include="*.tsx"
```

---

### Phase 2: Install Tools

```bash
# Vite plugin for automatic optimization
npm install -D vite-plugin-image-optimizer

# Sharp for image processing
npm install -D sharp

# Optional: ImageMin for CLI optimization
npm install -D imagemin imagemin-webp imagemin-avif
```

---

### Phase 3: Configure Vite

**Update `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
              cleanupIDs: {
                minify: false,
                remove: false,
              },
              convertPathData: false,
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      jpg: {
        quality: 85,
      },
      tiff: {
        quality: 85,
      },
      gif: {},
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ],
});
```

---

### Phase 4: Create OptimizedImage Component

**File:** `components/OptimizedImage.tsx`

```typescript
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

/**
 * Optimized Image Component with:
 * - Lazy loading by default
 * - Modern format support (WebP, AVIF)
 * - Responsive images
 * - Proper aspect ratio
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes,
}) => {
  // Generate different sizes
  const srcSizes = sizes || '(max-width: 768px) 400px, 800px';
  
  // Extract filename without extension
  const baseName = src.replace(/\.[^/.]+$/, '');
  const ext = src.split('.').pop();
  
  return (
    <picture>
      {/* AVIF format (best compression, modern browsers) */}
      <source
        type="image/avif"
        srcSet={`
          ${baseName}-400.avif 400w,
          ${baseName}-800.avif 800w,
          ${baseName}-1200.avif 1200w
        `}
        sizes={srcSizes}
      />
      
      {/* WebP format (good compression, wide support) */}
      <source
        type="image/webp"
        srcSet={`
          ${baseName}-400.webp 400w,
          ${baseName}-800.webp 800w,
          ${baseName}-1200.webp 1200w
        `}
        sizes={srcSizes}
      />
      
      {/* Fallback to original format */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage;
```

---

### Phase 5: Generate Responsive Images

**Script:** `scripts/optimize-images.js`

```javascript
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';

const sizes = [400, 800, 1200];
const formats = ['webp', 'avif'];
const inputDir = './public/images/original';
const outputDir = './public/images/optimized';

async function optimizeImage(inputPath, filename) {
  const baseName = filename.replace(/\.[^/.]+$/, '');
  
  for (const size of sizes) {
    for (const format of formats) {
      const outputPath = join(outputDir, `${baseName}-${size}.${format}`);
      
      await sharp(inputPath)
        .resize(size, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .toFormat(format, {
          quality: 85,
        })
        .toFile(outputPath);
      
      console.log(`✓ Generated: ${baseName}-${size}.${format}`);
    }
  }
}

async function main() {
  // Create output directory
  await mkdir(outputDir, { recursive: true });
  
  // Read all images
  const files = await readdir(inputDir);
  const images = files.filter(f => /\.(jpe?g|png)$/i.test(f));
  
  console.log(`Found ${images.length} images to optimize...`);
  
  // Process each image
  for (const image of images) {
    const inputPath = join(inputDir, image);
    await optimizeImage(inputPath, image);
  }
  
  console.log('✅ All images optimized!');
}

main().catch(console.error);
```

**Add to `package.json`:**

```json
{
  "scripts": {
    "optimize:images": "node scripts/optimize-images.js"
  }
}
```

---

### Phase 6: Implement Lazy Loading

**Update existing image usage:**

```tsx
// ❌ Before
<img src="/images/hero.jpg" alt="Hero" />

// ✅ After
<OptimizedImage 
  src="/images/hero.jpg" 
  alt="Team collaboration using BizOps dashboard"
  width={1200}
  height={675}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 1200px"
/>
```

**For background images:**

```tsx
// ❌ Before
<div style={{ backgroundImage: 'url(/bg.jpg)' }}>

// ✅ After - Use CSS with optimized images
<div className="bg-hero bg-cover bg-center">

// In CSS/Tailwind:
.bg-hero {
  background-image: url('/images/hero-800.webp');
}

@media (min-width: 768px) {
  .bg-hero {
    background-image: url('/images/hero-1200.webp');
  }
}
```

---

## 📦 Image Best Practices

### 1. Format Selection

**Use Case → Format:**
- Photographs → WebP or AVIF
- Illustrations → SVG or WebP
- Icons → SVG (inline or sprite)
- Logos → SVG
- Complex graphics → WebP

### 2. Size Guidelines

**Maximum Sizes:**
- Hero images: 1920x1080px (1200px actual display)
- Feature images: 800x600px
- Thumbnails: 400x300px
- Icons: 24x24px, 32x32px (SVG preferred)

### 3. Quality Settings

```javascript
{
  jpeg: { quality: 85 },  // Good balance
  webp: { quality: 85 },  // 15-30% smaller than JPEG
  avif: { quality: 80 },  // 50% smaller than JPEG
  png: { 
    quality: 85,
    compressionLevel: 9  // Max compression
  }
}
```

### 4. Lazy Loading Strategy

```tsx
// Above the fold: eager loading
<OptimizedImage loading="eager" />

// Below the fold: lazy loading (default)
<OptimizedImage loading="lazy" />

// Critical path: preload
<link rel="preload" as="image" href="/hero.webp" />
```

---

## 🧪 Testing Performance

### Before Optimization

```bash
# Measure current performance
npm run build
npm run preview

# Run Lighthouse
lighthouse http://localhost:4173 \
  --output html \
  --output-path ./report-before.html
```

### After Optimization

```bash
# Optimize images
npm run optimize:images

# Build and test
npm run build
npm run preview

# Run Lighthouse again
lighthouse http://localhost:4173 \
  --output html \
  --output-path ./report-after.html
```

### Expected Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| LCP | ~3s | ~1.5s | -50% |
| Total Bundle | ~2MB | ~800KB | -60% |
| Images Loaded | 10s | 3s | -70% |
| Performance Score | 75 | 95+ | +27% |

---

## 🎯 Optimization Checklist

### General:
- [ ] Audit all images in project
- [ ] Remove unused images
- [ ] Convert to WebP/AVIF
- [ ] Generate responsive sizes
- [ ] Implement lazy loading
- [ ] Add width/height attributes
- [ ] Use picture element
- [ ] Preload critical images

### Component-Specific:
- [ ] Create OptimizedImage component
- [ ] Update all img tags
- [ ] Convert background images
- [ ] Optimize SVG icons
- [ ] Add loading states
- [ ] Handle image errors

### Testing:
- [ ] Test on slow 3G
- [ ] Verify lazy loading works
- [ ] Check all formats display
- [ ] Test fallbacks
- [ ] Run Lighthouse audit
- [ ] Monitor Core Web Vitals

---

## 🔧 Tools & Resources

### Online Tools:
- **Squoosh:** https://squoosh.app/ (visual comparison)
- **TinyPNG:** https://tinypng.com/ (PNG/JPEG compression)
- **SVGOMG:** https://jakearchibald.github.io/svgomg/ (SVG optimization)
- **Image Analyzer:** https://webspeedtest.cloudinary.com/

### CLI Tools:
```bash
# ImageMagick
brew install imagemagick
convert input.jpg -quality 85 -resize 800x output.webp

# Sharp CLI
npm install -g sharp-cli
sharp -i input.jpg -o output.webp --quality 85

# Squoosh CLI
npm install -g @squoosh/cli
squoosh-cli --webp auto input.jpg
```

### Monitoring:
- Chrome DevTools → Network tab
- Lighthouse → Performance audit
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/

---

## 📊 Monitoring

### Track in Production:

```typescript
// utils/imagePerformance.ts
export function trackImageLoad(imageName: string) {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.name.includes(imageName)) {
        console.log(`Image ${imageName} loaded in ${entry.duration}ms`);
        
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'image_load',
            value: Math.round(entry.duration),
            event_category: 'Images',
            event_label: imageName,
          });
        }
      }
    });
  });
  
  observer.observe({ entryTypes: ['resource'] });
}
```

---

## 🐛 Troubleshooting

### Issue: Images not loading

**Check:**
1. Path correct? `/images/...` vs `images/...`
2. File extension matches?
3. Browser supports format?
4. Network tab shows 200 status?

### Issue: WebP not showing in Safari

**Solution:** Ensure fallback is present:
```tsx
<picture>
  <source type="image/webp" srcSet="image.webp" />
  <img src="image.jpg" alt="..." />
</picture>
```

### Issue: Images blurry on retina

**Solution:** Provide 2x images:
```tsx
<img 
  srcSet="image-800.jpg 1x, image-1600.jpg 2x"
  src="image-800.jpg"
  alt="..."
/>
```

---

## ✅ Summary

### Current Status:
✅ Website already optimized dengan icon-based design
✅ Minimal image usage (good practice)
✅ SVG icons (scalable, small size)
✅ External CDN images (Unsplash)

### If You Add Images Later:
✅ Use OptimizedImage component
✅ Generate multiple sizes
✅ Use modern formats (WebP, AVIF)
✅ Implement lazy loading
✅ Test performance

---

**Last Updated:** 27 November 2025  
**Version:** 1.0  
**Status:** ✅ Ready for Implementation (when needed)

