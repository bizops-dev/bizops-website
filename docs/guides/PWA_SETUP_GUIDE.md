# 📱 PWA Setup Guide - BizOps Website

Complete guide untuk Progressive Web App implementation.

---

## 📊 Current Status

✅ **Manifest:** `/public/manifest.json` configured  
✅ **Service Worker:** `/public/sw.js` implemented  
✅ **Utilities:** `/utils/pwa.ts` created  
⏳ **Icons:** Need to generate PWA icons (see below)  
⏳ **Integration:** Need to integrate in `App.tsx` (optional)

---

## 🎯 PWA Features

### ✅ Implemented:

1. **Offline Support** - Service Worker caching
2. **Installable** - Add to Home Screen prompt
3. **App-like Experience** - Standalone display mode
4. **Fast Loading** - Cache-first strategies
5. **Auto Updates** - Background service worker updates
6. **Push Notifications** - Infrastructure ready (optional)

---

## 🚀 Quick Start

### 1. Generate PWA Icons

Create icons in multiple sizes (required for full PWA support):

**Using Figma/Photoshop:**
1. Create base icon: 512x512px
2. Export in these sizes:
   - 72x72
   - 96x96
   - 128x128
   - 144x144
   - 152x152
   - 192x192
   - 384x384
   - 512x512

**Using Online Tools:**
- https://www.pwabuilder.com/imageGenerator
- https://realfavicongenerator.net/
- https://maskable.app/ (for maskable icons)

**Save to:** `/public/icons/`

```
public/
└── icons/
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```

---

### 2. Generate Screenshots (Optional but Recommended)

For richer install prompts on mobile:

**Desktop Screenshot:**
- Size: 1280x720px
- Save as: `/public/screenshots/desktop-home.png`

**Mobile Screenshot:**
- Size: 750x1334px  
- Save as: `/public/screenshots/mobile-home.png`

---

### 3. Integrate PWA in App

**Option A: Auto-initialize (Recommended)**

```tsx
// App.tsx
import { useEffect } from 'react';
import { initializePWA } from '@/utils/pwa';

function App() {
  useEffect(() => {
    // Initialize PWA on mount
    initializePWA();
  }, []);

  // ... rest of app
}
```

**Option B: Manual Control**

```tsx
// App.tsx
import { registerServiceWorker, setupInstallPrompt } from '@/utils/pwa';

function App() {
  useEffect(() => {
    // Register service worker only
    registerServiceWorker();
    
    // Setup install prompt handling
    setupInstallPrompt();
  }, []);
}
```

---

### 4. Create Install Button (Optional)

```tsx
// components/InstallPWA.tsx
import { useState, useEffect } from 'react';
import { showInstallPrompt, isInstallPromptAvailable } from '@/utils/pwa';
import Button from './Button';

export const InstallPWA = () => {
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    // Listen for installable event
    const handleInstallable = () => {
      setCanInstall(true);
    };

    window.addEventListener('pwa-installable', handleInstallable);

    // Check if already installable
    setCanInstall(isInstallPromptAvailable());

    return () => {
      window.removeEventListener('pwa-installable', handleInstallable);
    };
  }, []);

  const handleInstall = async () => {
    const accepted = await showInstallPrompt();
    if (accepted) {
      setCanInstall(false);
    }
  };

  if (!canInstall) return null;

  return (
    <Button onClick={handleInstall} variant="primary">
      Install App
    </Button>
  );
};
```

---

### 5. Create Update Notification (Optional)

```tsx
// components/UpdateNotification.tsx
import { useState, useEffect } from 'react';
import { skipWaiting } from '@/utils/pwa';

export const UpdateNotification = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    const handleUpdate = () => {
      setUpdateAvailable(true);
    };

    window.addEventListener('sw-update', handleUpdate);

    return () => {
      window.removeEventListener('sw-update', handleUpdate);
    };
  }, []);

  const handleUpdate = () => {
    skipWaiting();
    window.location.reload();
  };

  if (!updateAvailable) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
      <p className="font-semibold mb-2">Update Available!</p>
      <button 
        onClick={handleUpdate}
        className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium"
      >
        Update Now
      </button>
    </div>
  );
};
```

---

## 📋 Manifest Configuration

### Current Settings (`manifest.json`):

```json
{
  "name": "BizOps - The Adaptive Business Operating System",
  "short_name": "BizOps",
  "theme_color": "#0F172A",
  "background_color": "#FFFFFF",
  "display": "standalone",
  "orientation": "portrait-primary"
}
```

### Display Modes:

| Mode | Description | Browser UI |
|------|-------------|------------|
| `standalone` | **✅ Recommended** - App-like | Hidden |
| `fullscreen` | Immersive | Hidden |
| `minimal-ui` | Basic browser UI | Minimal |
| `browser` | Normal web | Full |

### Shortcuts (Quick Actions):

Users can access these via:
- Android: Long-press app icon
- iOS: 3D Touch (force touch)

Currently configured:
1. Pricing
2. Contact
3. Demo

---

## 🎨 Icon Guidelines

### Sizes & Purposes:

| Size | Purpose | Where Used |
|------|---------|-----------|
| 72x72 | Small screens | Android |
| 96x96 | Shortcuts | Context menus |
| 128x128 | Chrome Web Store | Installations |
| 144x144 | Windows tile | Start menu |
| 152x152 | Apple iOS | Home screen |
| 192x192 | Android splash | Install banner |
| 384x384 | High DPI | Crisp display |
| 512x512 | **Required** | Splash screens |

### Design Tips:

**✅ Do:**
- Simple, recognizable logo
- High contrast
- Solid background (avoid transparency)
- Leave 10% safe zone around edges
- Test on dark AND light backgrounds

**❌ Don't:**
- Complex details (won't scale)
- Text (hard to read at small sizes)
- Thin lines (<2px)
- Transparency (may look bad on different backgrounds)

---

## 🛠️ Service Worker Strategies

### Cache-First (for static assets):
```
Request → Cache → Network → Cache → Response
```
**Used for:** CSS, Fonts, Images

### Network-First (for dynamic content):
```
Request → Network → Cache → Response
```
**Used for:** API calls, JSON data

### Stale-While-Revalidate (for HTML):
```
Request → Cache (immediate) → Network (background update)
```
**Used for:** HTML pages, most content

---

## 🧪 Testing PWA

### Local Testing:

```bash
# 1. Build production version
npm run build

# 2. Serve with HTTPS (required for Service Workers)
npm install -g serve
serve -s dist -p 3000

# 3. Open Chrome DevTools → Application → Service Workers
# 4. Check "Offline" to test offline functionality
```

### Chrome DevTools Audit:

1. Open DevTools → Lighthouse
2. Select "Progressive Web App"
3. Run audit
4. Address any issues

**Target Score:** 100/100

---

### PWA Checklist:

#### Required (Core PWA):
- [ ] ✅ Manifest.json configured
- [ ] ✅ Service Worker registered
- [ ] ⏳ All icon sizes generated
- [ ] ✅ HTTPS enabled (in production)
- [ ] ✅ Viewport meta tag
- [ ] ✅ Theme color

#### Recommended (Better Experience):
- [ ] Screenshots added
- [ ] Shortcuts configured
- [ ] Install prompt handled
- [ ] Update notification implemented
- [ ] Offline page designed
- [ ] Loading states handled

#### Optional (Enhanced):
- [ ] Push notifications
- [ ] Background sync
- [ ] Share target
- [ ] Periodic background sync

---

## 📱 Platform-Specific Features

### Android:

**Install Banner:**
- Shows automatically when criteria met
- Can be triggered via `showInstallPrompt()`

**App Shortcuts:**
- Long-press app icon
- Shows quick actions from manifest

**Splash Screen:**
- Generated from icons + theme_color
- No custom splash screen needed

### iOS (Safari):

**Add to Home Screen:**
- Manual (no install prompt API)
- User must tap Share → Add to Home Screen

**Additional Meta Tags (already in index.html):**
```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="BizOps">
<link rel="apple-touch-icon" href="/icons/icon-152x152.png">
```

### Desktop (Windows/Mac/Linux):

**Install from Browser:**
- Chrome: Install button in address bar
- Edge: Install app icon in toolbar
- Works on all desktop OSes

---

## 🚨 Common Issues & Solutions

### Issue 1: Service Worker Not Updating

**Problem:** Cached old version

**Solution:**
```javascript
// In sw.js, bump version
const CACHE_NAME = 'bizops-v2'; // Increment version
```

### Issue 2: HTTPS Required

**Problem:** Service Workers only work on HTTPS

**Solution:**
- Development: `localhost` is exempt (works on HTTP)
- Production: Must use HTTPS
- Use Vercel/Netlify (automatic HTTPS)

### Issue 3: Icons Not Showing

**Problem:** Wrong path or format

**Solution:**
- Check file paths: `/icons/icon-192x192.png`
- Verify PNG format
- Check file sizes match manifest
- Clear browser cache

### Issue 4: Can't Install on iOS

**Problem:** iOS doesn't support install prompt API

**Solution:**
- Add instructions for manual install
- Show Safari share icon
- Guide users through Add to Home Screen

---

## 📊 Performance Metrics

### Target Scores (Lighthouse):

| Metric | Target | Description |
|--------|--------|-------------|
| Performance | 90+ | Loading speed |
| Accessibility | 95+ | a11y compliance |
| Best Practices | 100 | Modern standards |
| SEO | 100 | Search optimization |
| PWA | 100 | PWA requirements |

---

## 🔄 Update Strategy

### Service Worker Updates:

1. **Automatic Check:** Every page load
2. **Background Update:** Downloads new SW
3. **Waiting State:** Waits for user action
4. **Notification:** Show update banner
5. **Apply Update:** Call `skipWaiting()`
6. **Reload Page:** Fresh content

### User Experience:

```
User visits site
    ↓
SW checks for update
    ↓
Update found → Download in background
    ↓
Show "Update Available" banner
    ↓
User clicks "Update" → Apply & reload
```

---

## 📚 Resources

**Official Docs:**
- [web.dev PWA Guide](https://web.dev/progressive-web-apps/)
- [MDN PWA Docs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Workbox (Advanced SW)](https://developers.google.com/web/tools/workbox)

**Tools:**
- [PWA Builder](https://www.pwabuilder.com/)
- [Maskable Icons](https://maskable.app/)
- [Favicon Generator](https://realfavicongenerator.net/)

**Testing:**
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [PWA Checklist](https://web.dev/pwa-checklist/)

---

## ✅ Next Steps

### Immediate (Required for Full PWA):

1. **Generate Icons** (30 minutes)
   ```bash
   # Use PWA Builder: https://www.pwabuilder.com/imageGenerator
   # Upload base 512x512 icon
   # Download all sizes
   # Place in /public/icons/
   ```

2. **Integrate in App** (5 minutes)
   ```tsx
   // App.tsx
   import { initializePWA } from '@/utils/pwa';
   
   useEffect(() => {
     initializePWA();
   }, []);
   ```

3. **Test Offline** (10 minutes)
   ```bash
   npm run build
   npx serve -s dist
   # Chrome DevTools → Application → Offline checkbox
   ```

### Optional (Enhanced Experience):

1. Create InstallPWA button component
2. Create UpdateNotification component
3. Generate screenshots
4. Add offline page
5. Implement push notifications

---

## 🎓 Learning Path

**Beginner:**
1. Understand what PWA is
2. Add manifest
3. Register service worker

**Intermediate:**
4. Customize caching strategies
5. Handle updates
6. Add install prompt

**Advanced:**
7. Push notifications
8. Background sync
9. Advanced Workbox patterns

---

**Last Updated:** 27 November 2025  
**Status:** ✅ Infrastructure Ready  
**Next:** Generate icons & integrate in App.tsx

