# 🔧 Environment Variables Setup Guide

## Quick Start

1. **Create `.env` file** di root project:
   ```bash
   touch .env
   ```

2. **Copy template** di bawah ini ke `.env` file Anda

3. **Fill in your values** sesuai kebutuhan

4. **Restart dev server** setelah mengubah environment variables

---

## 📋 Environment Variables Template

```env
# ===========================================
# SENTRY - ERROR TRACKING & MONITORING
# ===========================================
# Optional but highly recommended for production
# Get your DSN from: https://sentry.io/settings/projects/
VITE_SENTRY_DSN=

# ===========================================
# GEMINI API - AI FEATURES
# ===========================================
# Required only if using AI features
# Get your API key from: https://ai.google.dev/
GEMINI_API_KEY=

# ===========================================
# APPLICATION ENVIRONMENT
# ===========================================
NODE_ENV=development
```

---

## 🔐 Security Guidelines

### ⚠️ IMPORTANT:
1. ✅ **NEVER commit `.env` to git** - It's already in `.gitignore`
2. ✅ **Use different values** for dev/staging/production
3. ✅ **Rotate API keys** regularly
4. ✅ **Only client-safe keys** in `VITE_` prefix (will be exposed in bundle)

### Client-Side vs Server-Side Variables:

**Client-Side (VITE_ prefix):**
- ✅ Sentry DSN (public key)
- ✅ Public API endpoints
- ✅ Feature flags
- ❌ NEVER secret API keys

**Server-Side (process.env):**
- ✅ Database credentials
- ✅ Secret API keys
- ✅ JWT secrets

---

## 📖 Variable Details

### VITE_SENTRY_DSN

**Purpose:** Error tracking dan monitoring di production

**Required:** Optional (recommended for production)

**Where to get:**
1. Sign up di https://sentry.io/
2. Create new project untuk "React"
3. Copy DSN dari Settings → Projects → [Your Project] → Client Keys (DSN)

**Format:**
```
https://[PUBLIC_KEY]@[ORGANIZATION].ingest.sentry.io/[PROJECT_ID]
```

**Example:**
```env
VITE_SENTRY_DSN=https://abc123def456@o1234567.ingest.sentry.io/1234567
```

**Used in:**
- `utils/monitoring.ts`
- `components/ErrorBoundary.tsx`

---

### GEMINI_API_KEY

**Purpose:** AI features (jika digunakan)

**Required:** Optional (only if using AI features)

**Where to get:**
1. Visit https://ai.google.dev/
2. Get API Key
3. Copy key

**Security Note:** ⚠️ Key ini akan di-expose di client bundle melalui `vite.config.ts`. Pastikan ini adalah client-safe key, bukan secret key.

**Example:**
```env
GEMINI_API_KEY=AIzaSyA1234567890abcdefghijklmnopqrst
```

**Used in:**
- `vite.config.ts` (defined as process.env vars)

---

### NODE_ENV

**Purpose:** Application environment mode

**Required:** Yes (auto-set by scripts)

**Values:**
- `development` - Local development
- `staging` - Staging environment
- `production` - Production environment

**Used for:**
- Conditional logging
- Feature flags
- Monitoring configuration
- Build optimization

---

## 🚀 Environment Setup per Stage

### Development (.env.development)

```env
NODE_ENV=development
VITE_SENTRY_DSN=
GEMINI_API_KEY=
```

**Notes:**
- Sentry optional di development
- Console logs enabled
- Source maps enabled

### Staging (.env.staging)

```env
NODE_ENV=staging
VITE_SENTRY_DSN=https://your-staging-dsn@sentry.io/project
GEMINI_API_KEY=your-staging-key
```

**Notes:**
- Use separate Sentry project untuk staging
- Test semua integrations

### Production (.env.production)

```env
NODE_ENV=production
VITE_SENTRY_DSN=https://your-production-dsn@sentry.io/project
GEMINI_API_KEY=your-production-key
```

**Notes:**
- ✅ Sentry DSN REQUIRED
- ✅ Console logs disabled automatically
- ✅ Source maps disabled
- ✅ All monitoring enabled

---

## 🔍 Troubleshooting

### Environment variables not working?

**1. Restart dev server:**
```bash
# Stop current server (Ctrl+C)
npm run dev
```

**2. Verify VITE_ prefix:**
```typescript
// ✅ Correct - accessible in client
const dsn = import.meta.env.VITE_SENTRY_DSN;

// ❌ Wrong - not accessible without VITE_ prefix
const dsn = import.meta.env.SENTRY_DSN;
```

**3. Check .env file location:**
```
bizops-website/
├── .env          ← Must be here (project root)
├── package.json
├── vite.config.ts
└── ...
```

**4. Verify vite.config.ts:**
```typescript
// Check if variable is defined in vite.config.ts
define: {
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

### Common Errors:

**Error: "Cannot read import.meta.env.VITE_SENTRY_DSN"**
- Solution: Add VITE_SENTRY_DSN to .env file

**Error: "Sentry not initialized"**
- Solution: Check VITE_SENTRY_DSN is valid DSN format
- Solution: Verify network can reach sentry.io

**Error: "API key invalid"**
- Solution: Regenerate API key from provider
- Solution: Check for extra spaces in .env file

---

## 📝 Adding New Environment Variables

When adding new variables:

1. **Document here first** dengan:
   - Purpose
   - Required/Optional
   - Where to get
   - Format example
   - Used in (file references)

2. **Add to vite.config.ts** jika perlu:
   ```typescript
   define: {
     'process.env.YOUR_VAR': JSON.stringify(env.YOUR_VAR)
   }
   ```

3. **Update this guide** dengan detail lengkap

4. **Test in all environments** (dev, staging, prod)

---

## 🔐 Security Checklist

Before deploying to production:

- [ ] All `.env` files added to `.gitignore`
- [ ] No hardcoded credentials in code
- [ ] Sentry DSN configured
- [ ] Environment variables tested
- [ ] API keys rotated from development
- [ ] Server security headers configured
- [ ] HTTPS enabled
- [ ] API rate limiting configured (if applicable)

---

## 📞 Need Help?

**Documentation:**
- Vite Env Variables: https://vitejs.dev/guide/env-and-mode.html
- Sentry Setup: https://docs.sentry.io/platforms/javascript/guides/react/

**Contact:**
- Email: support@bizops.id
- Docs: `/docs`
- Issues: GitHub Issues

---

**Last Updated:** 27 November 2025  
**Version:** 1.0

