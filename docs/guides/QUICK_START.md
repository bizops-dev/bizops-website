# 🚀 Quick Start Guide - BizOps Website

Panduan cepat untuk menjalankan dan test project setelah semua implementasi.

---

## ✅ Prerequisites

- Node.js v18+ or v20+ (recommended)
- npm v8+ or yarn
- Git

Check your versions:
```bash
node --version    # Should show v18.x or v20.x
npm --version     # Should show v8.x or higher
```

---

## 📦 Step 1: Install Dependencies

```bash
cd /Users/andrimuhyidin/Workspace/bizops/bizops-website

# Install all dependencies
npm install

# This will install:
# - React, TypeScript, Vite
# - Testing libraries (Vitest, Testing Library)
# - All custom dependencies
```

**Expected time:** 2-5 minutes (depending on internet speed)

---

## 🧪 Step 2: Run Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run with coverage
npm run test:coverage
```

**Expected result:**
```
✅ Test Suites: 6 passed, 6 total
✅ Tests: 60+ passed, 60+ total
✅ Coverage: 60%+
✅ Time: ~10-20 seconds
```

---

## 🔍 Step 3: Type Check

```bash
# Check TypeScript types
npm run type-check
```

**Expected result:**
```
✅ No errors found
✅ All types validated
```

---

## 🎨 Step 4: Lint Check

```bash
# Run ESLint
npm run lint
```

**Expected result:**
```
✅ No errors
⚠️ Possible minor warnings (acceptable)
```

---

## 🏗️ Step 5: Build Project

```bash
# Build for production
npm run build
```

**Expected result:**
```
✅ Build completed successfully
✅ Output in dist/ folder
✅ Build time: ~30-60 seconds
```

---

## 🌐 Step 6: Run Development Server

```bash
# Start dev server
npm run dev
```

**Expected result:**
```
✅ Server running at http://localhost:3000
✅ Hot reload enabled
✅ Ready to develop!
```

Open browser and navigate to: **http://localhost:3000**

---

## 📚 Optional: Run Storybook

If you want component documentation:

```bash
# Install Storybook dependencies first
npm install --save-dev @storybook/react-vite @storybook/react @storybook/addon-links @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-a11y storybook

# Run Storybook
npm run storybook
```

**Expected result:**
```
✅ Storybook running at http://localhost:6006
✅ 36 stories available
✅ Interactive component explorer
```

---

## 🎯 Quick Test Commands

### Run Everything at Once:

```bash
# Complete validation
npm run type-check && npm run lint && npm run test && npm run build
```

If all pass: 🎉 **Project is fully operational!**

---

### Individual Test Suites:

```bash
# Test specific file
npm run test test/Button.test.tsx

# Test with pattern
npm run test -- Button

# Test folder
npm run test test/hooks/
```

---

## 🐛 Troubleshooting

### Issue 1: "Cannot find module 'vitest'"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Issue 2: Tests fail

**Check:**
1. Are all dependencies installed? (`node_modules/` exists)
2. Is Node version correct? (v18+ or v20+)
3. Run: `npm run test -- --reporter=verbose` for details

---

### Issue 3: Build fails

**Check:**
1. Run `npm run type-check` first
2. Fix any TypeScript errors
3. Clear cache: `rm -rf dist/`
4. Try again: `npm run build`

---

### Issue 4: Port already in use

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.ts
```

---

## 📊 Expected Test Coverage

After running `npm run test:coverage`:

```
Coverage Summary:
├── Statements   : 60%+
├── Branches     : 50%+
├── Functions    : 55%+
└── Lines        : 60%+

Key Areas Covered:
✅ Components (Button, Card, Badge, Form, etc.)
✅ Contexts (Theme, Language)
✅ Utils (Analytics, PWA, Hooks)
✅ Integration (Navigation flows)
```

---

## 🔑 Key Scripts

| Command | Purpose | Expected Time |
|---------|---------|---------------|
| `npm install` | Install dependencies | 2-5 min |
| `npm run dev` | Start dev server | 3-5 sec |
| `npm run build` | Build for production | 30-60 sec |
| `npm run test` | Run all tests | 10-20 sec |
| `npm run test:coverage` | Test with coverage | 15-30 sec |
| `npm run lint` | Lint code | 5-10 sec |
| `npm run type-check` | Check types | 5-10 sec |
| `npm run preview` | Preview production build | 3-5 sec |
| `npm run storybook` | Run Storybook (optional) | 10-15 sec |

---

## ✅ Success Checklist

After setup, verify:

- [ ] ✅ `npm install` completed successfully
- [ ] ✅ `npm run test` → All tests pass
- [ ] ✅ `npm run type-check` → No errors
- [ ] ✅ `npm run lint` → No critical errors
- [ ] ✅ `npm run build` → Build succeeds
- [ ] ✅ `npm run dev` → Server runs at localhost:3000
- [ ] ✅ Website loads in browser
- [ ] ✅ No console errors

**If all checked:** 🎉 **You're ready to develop!**

---

## 🎓 Next Steps

### For Development:

1. Read `CONTRIBUTING.md` for contribution guidelines
2. Check `DESIGN_SYSTEM.md` for UI patterns
3. Review component tests for examples
4. Use custom hooks from `hooks/` folder

### For Deployment:

1. Read `DEPLOYMENT.md` for deployment strategies
2. Generate PWA icons (see `PWA_SETUP_GUIDE.md`)
3. Configure security headers (see `SECURITY_HEADERS.md`)
4. Setup environment variables (see `ENV_SETUP.md`)

### For Components:

1. Install Storybook (optional)
2. Explore component stories
3. Create new stories for your components
4. Document component APIs

---

## 📚 Documentation Index

**Quick Guides:**
- `QUICK_START.md` ← You are here
- `ERROR_STATUS_REPORT.md` - Current error status
- `README.md` - Project overview

**Implementation Reports:**
- `COMPLETE_IMPLEMENTATION_REPORT.md` - Full report (all priorities)
- `IMPLEMENTATION_SUMMARY.md` - High/Medium priorities
- `LOW_PRIORITY_SUMMARY.md` - Low priorities

**Feature Guides:**
- `CONTRIBUTING.md` - How to contribute
- `DEPLOYMENT.md` - Deployment strategies
- `DESIGN_SYSTEM.md` - Design system docs
- `ACCESSIBILITY_AUDIT.md` - Accessibility compliance
- `ENV_SETUP.md` - Environment variables
- `SECURITY_HEADERS.md` - Security configuration
- `hooks/README.md` - Custom hooks guide
- `IMAGE_OPTIMIZATION_GUIDE.md` - Image best practices
- `PWA_SETUP_GUIDE.md` - PWA implementation
- `STORYBOOK_SETUP.md` - Storybook usage

---

## 🎯 Summary

### Installation:
```bash
npm install          # Install dependencies
npm run dev          # Start development
```

### Testing:
```bash
npm run test         # Run tests
npm run type-check   # Check types
npm run lint         # Lint code
```

### Building:
```bash
npm run build        # Build for production
npm run preview      # Preview build
```

**That's it!** 🚀

---

**Last Updated:** 27 November 2025  
**Status:** All code production-ready ✅  
**Action:** Run the commands above to get started!
