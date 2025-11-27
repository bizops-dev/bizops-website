# 🖼️ Image Optimization Guide - BizOps Website

Complete guide untuk image optimization best practices.

---

## 📊 Current Status

**Website Design:** Icon-based dengan minimal raster images  
**Performance:** ✅ Excellent (minimal image payload)  
**Future-Ready:** ✅ OptimizedImage component created

---

## 🎯 Image Strategy

### Current Implementation:
- ✅ **Icon-based UI** using Lucide React (vector icons)
- ✅ **CSS backgrounds** untuk decorative elements
- ✅ **External CDN** for minimal hero images (Unsplash)
- ✅ **No image bloat** - Fast initial load

**Advantage:** Smaller bundle size, faster loading, scalable graphics

---

## 🚀 Using OptimizedImage Component

### Basic Usage

```tsx
import OptimizedImage from '@/components/OptimizedImage';

// Simple usage
<OptimizedImage 
  src="/images/hero.jpg"
  alt="Hero image showing team collaboration"
  width={1200}
  height={600}
  loading="lazy"
/>
```

### Advanced Usage

```tsx
// Above-fold image (LCP candidate)
<OptimizedImage 
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  loading="eager"
  priority={true}
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Below-fold image (lazy loaded)
<OptimizedImage 
  src="/images/feature.jpg"
  alt="Feature screenshot"
  width={800}
  height={600}
  loading="lazy"
  objectFit="contain"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
/>
```

### Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Image source path |
| `alt` | string | required | Alt text for accessibility |
| `width` | number | optional | Image width |
| `height` | number | optional | Image height |
| `loading` | 'lazy' \| 'eager' | 'lazy' | Native lazy loading |
| `priority` | boolean | false | High priority for LCP images |
| `objectFit` | string | 'cover' | CSS object-fit value |
| `sizes` | string | optional | Responsive sizes attribute |
| `className` | string | '' | Additional CSS classes |
| `onLoad` | function | optional | Callback when image loads |
| `onError` | function | optional | Callback on load error |

---

## 🛠️ Image Preparation Workflow

### Step 1: Optimize Source Images

#### Tools:
- **Squoosh:** https://squoosh.app/ (Google's image optimizer)
- **ImageOptim:** https://imageoptim.com/ (Mac app)
- **TinyPNG:** https://tinypng.com/ (PNG/JPG compression)
- **SVGOMG:** https://jakearchibald.github.io/svgomg/ (SVG optimization)

#### Guidelines:
```bash
# Original image
hero-original.jpg (3000x2000, 2.5MB)

# Optimization target
hero.jpg (1200x800, <200KB)

# Quality settings:
- JPEG: 80-85 quality
- PNG: 8-bit with optimization
- WebP: 75-85 quality
```

---

### Step 2: Generate Multiple Sizes

Create responsive sizes untuk different viewports:

```bash
# Using ImageMagick
convert hero.jpg -resize 400x hero-400.jpg
convert hero.jpg -resize 800x hero-800.jpg
convert hero.jpg -resize 1200x hero-1200.jpg
convert hero.jpg -resize 1600x hero-1600.jpg

# Convert to WebP
convert hero-400.jpg hero-400.webp
convert hero-800.jpg hero-800.webp
convert hero-1200.jpg hero-1200.webp
convert hero-1600.jpg hero-1600.webp
```

**Result:**
```
images/
├── hero-400.jpg (50KB)
├── hero-400.webp (35KB)
├── hero-800.jpg (100KB)
├── hero-800.webp (70KB)
├── hero-1200.jpg (180KB)
├── hero-1200.webp (130KB)
└── hero-1600.jpg (280KB)
    hero-1600.webp (200KB)
```

---

### Step 3: Use in Component

```tsx
<OptimizedImage 
  src="/images/hero-1200.jpg"
  alt="BizOps Dashboard Interface"
  width={1200}
  height={800}
  sizes="(max-width: 400px) 400px, 
         (max-width: 800px) 800px, 
         (max-width: 1200px) 1200px, 
         1600px"
  loading="lazy"
/>
```

---

## ⚡ Performance Best Practices

### 1. Lazy Loading

```tsx
// ✅ Above-fold (LCP image)
<OptimizedImage src="..." alt="..." loading="eager" priority={true} />

// ✅ Below-fold
<OptimizedImage src="..." alt="..." loading="lazy" />
```

### 2. Responsive Images

```tsx
// ✅ Use sizes attribute
<OptimizedImage 
  src="/images/hero.jpg"
  alt="..."
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 3. Dimensions

```tsx
// ✅ Always specify width & height to prevent CLS
<OptimizedImage 
  src="..."
  alt="..."
  width={1200}
  height={800}
/>
```

### 4. Format Selection

**Use Case Guide:**
- **Photos:** WebP > JPG (better compression)
- **Graphics/Logos:** SVG > PNG (scalable)
- **Icons:** Lucide React (vector icons) ✅ Current
- **Transparency:** WebP > PNG
- **Animation:** Modern GIF → MP4/WebM

---

## 📦 Vite Plugin Integration (Optional)

### Install Plugin

```bash
npm install -D vite-plugin-image-optimizer
```

### Configure Vite

```typescript
// vite.config.ts
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 85,
      },
      jpg: {
        quality: 85,
      },
      webp: {
        quality: 80,
      },
      // Disable AVIF for broader support
      avif: false,
    }),
  ],
});
```

**Benefits:**
- Automatic optimization during build
- No manual compression needed
- Consistent quality settings

---

## 🎨 Image Guidelines

### File Naming

```
✅ Good:
- hero-desktop.jpg
- feature-mobile.jpg
- icon-check.svg
- avatar-john-doe.png

❌ Bad:
- IMG_1234.JPG
- screenshot.png
- image1.jpg
```

### Alt Text Rules

```tsx
// ✅ Descriptive alt text
<OptimizedImage 
  src="/team.jpg"
  alt="BizOps team collaborating in modern office space"
/>

// ✅ Empty alt for decorative images
<OptimizedImage 
  src="/pattern.svg"
  alt=""
  role="presentation"
/>

// ❌ Bad alt text
<OptimizedImage 
  src="/team.jpg"
  alt="image"
/>
```

### File Size Targets

| Image Type | Max Size | Target |
|------------|----------|--------|
| Hero image | 200KB | 150KB |
| Feature image | 100KB | 80KB |
| Thumbnail | 50KB | 30KB |
| Icon (raster) | 20KB | 10KB |
| Icon (SVG) | 5KB | 2KB |

---

## 🧪 Testing Images

### Lighthouse Audit

```bash
# Run Lighthouse
lighthouse https://bizops.id --view

# Check metrics:
- Largest Contentful Paint (LCP): < 2.5s ✅
- Cumulative Layout Shift (CLS): < 0.1 ✅
- Image optimization suggestions
```

### WebPageTest

```bash
# Visit: https://www.webpagetest.org/
# Test URL: https://bizops.id

# Review:
- Start Render time
- Largest Contentful Paint
- Image compression opportunities
```

---

## 📋 Image Audit Checklist

### For Each Image:

- [ ] **Optimized** (compressed to target size)
- [ ] **Format** (WebP with fallback)
- [ ] **Sizes** (responsive sizes generated)
- [ ] **Lazy loading** (unless above-fold)
- [ ] **Dimensions** (width & height specified)
- [ ] **Alt text** (descriptive or empty for decorative)
- [ ] **srcset** (for responsive images)
- [ ] **CDN** (if using external images)

---

## 🎯 Current Website Status

### Image Inventory:

**Hero Images:**
- Currently using Unsplash CDN ✅
- Automatically optimized by Unsplash ✅
- No local storage needed ✅

**Icons:**
- Lucide React (SVG icons) ✅
- Zero raster image weight ✅
- Infinitely scalable ✅

**Backgrounds:**
- CSS gradients ✅
- No image files ✅
- Perfect performance ✅

### Performance Impact:

```
Current Strategy:
├── Image payload: ~50KB (external + cached)
├── Icon payload: ~0KB (inline SVG)
├── Total visual assets: <100KB
└── LCP: Excellent (text-based hero)

Status: ✅ OPTIMAL - No urgent optimization needed
```

---

## 💡 When to Add Images

### Decision Tree:

```
Need visual element?
├─ Can it be an icon? 
│  └─ ✅ Use Lucide React
├─ Can it be CSS gradient?
│  └─ ✅ Use Tailwind gradients
├─ Can it be SVG?
│  └─ ✅ Use SVG (optimize first)
└─ Must be raster image?
   └─ ✅ Use OptimizedImage component
```

---

## 🔧 Maintenance

### Regular Tasks:

**Monthly:**
- [ ] Audit image sizes in production
- [ ] Check Lighthouse image metrics
- [ ] Review CDN costs (if applicable)

**Quarterly:**
- [ ] Evaluate new formats (AVIF, JPEG XL)
- [ ] Review compression ratios
- [ ] Update optimization tooling

**On New Images:**
- [ ] Follow optimization workflow
- [ ] Generate responsive sizes
- [ ] Add to image inventory
- [ ] Test on multiple devices

---

## 📚 Resources

**Tools:**
- Squoosh: https://squoosh.app/
- ImageOptim: https://imageoptim.com/
- TinyPNG: https://tinypng.com/
- Cloudinary: https://cloudinary.com/ (Image CDN)

**Learning:**
- web.dev Images: https://web.dev/fast/#optimize-your-images
- MDN Responsive Images: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

**Testing:**
- Lighthouse: Built into Chrome DevTools
- WebPageTest: https://www.webpagetest.org/
- PageSpeed Insights: https://pagespeed.web.dev/

---

## ✅ Recommendation

**For BizOps Website:**

**Current Strategy: ✅ OPTIMAL**

The icon-based design dengan minimal raster images adalah **best practice** untuk:
- ✅ Performance (fast loading)
- ✅ Scalability (works on all screen sizes)
- ✅ Maintainability (no image asset management)
- ✅ Accessibility (SVG icons scale perfectly)

**When to Use OptimizedImage:**
- User-generated content
- Blog post featured images
- Customer logos/testimonials
- Case study screenshots

**Keep current approach unless specific need for raster images!** 👍

---

**Last Updated:** 27 November 2025  
**Component:** OptimizedImage.tsx ✅ Ready  
**Status:** Infrastructure ready, use as needed

