# 🔐 Security Headers Configuration Guide

## Overview

Security headers melindungi aplikasi dari berbagai attack vectors seperti XSS, clickjacking, dan MIME sniffing. Guide ini menjelaskan bagaimana mengkonfigurasi security headers untuk berbagai hosting platforms.

---

## 📋 Required Security Headers

### 1. Content-Security-Policy (CSP)

**Purpose:** Mencegah XSS attacks dengan membatasi resource loading

**Current Implementation:** Already configured in `index.html`

**Configuration:**
```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; 
           script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://chat.divistant.com https://aistudiocdn.com https://esm.sh; 
           style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
           font-src 'self' https://fonts.gstatic.com; 
           img-src 'self' data: https://images.unsplash.com https://aistudiocdn.com; 
           connect-src 'self' https://chat.divistant.com https://*.sentry.io https://*.ingest.sentry.io; 
           frame-src 'self' https://chat.divistant.com;">
```

**⚠️ Notes:**
- `'unsafe-inline'` digunakan untuk React inline styles dan Tailwind
- Whitelist domains diperlukan untuk external resources
- Adjust based on your actual external dependencies

---

### 2. X-Content-Type-Options

**Purpose:** Mencegah MIME sniffing attacks

**Value:** `nosniff`

**What it does:** Browser tidak akan menginterpretasi file berbeda dari declared Content-Type

---

### 3. X-Frame-Options

**Purpose:** Mencegah clickjacking attacks

**Value:** `DENY` atau `SAMEORIGIN`

**Recommendations:**
- `DENY` - Website tidak bisa di-embed di iframe (recommended)
- `SAMEORIGIN` - Hanya bisa di-embed di same origin

---

### 4. X-XSS-Protection

**Purpose:** Enable browser XSS filter (legacy, tapi tetap bagus untuk old browsers)

**Value:** `1; mode=block`

**What it does:** Browser akan block page jika XSS attack detected

---

### 5. Referrer-Policy

**Purpose:** Control informasi apa yang dikirim di Referer header

**Value:** `strict-origin-when-cross-origin`

**What it does:**
- Same-origin: Send full URL
- Cross-origin HTTPS: Send origin only
- Cross-origin HTTP: No referrer

---

### 6. Permissions-Policy (Optional)

**Purpose:** Control browser features yang bisa diakses

**Value:** `geolocation=(), microphone=(), camera=()`

**What it does:** Disable sensitive features yang tidak dibutuhkan

---

## 🚀 Platform-Specific Configuration

### Vercel

**File:** `vercel.json`

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

---

### Netlify

**File:** `netlify.toml`

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
```

---

### Nginx

**File:** `/etc/nginx/sites-available/bizops`

```nginx
server {
    listen 443 ssl http2;
    server_name bizops.id;

    # SSL configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Security Headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    # CSP (if not using meta tag)
    # add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;" always;

    location / {
        root /var/www/bizops;
        try_files $uri $uri/ /index.html;
    }
}
```

**Important:** Add `always` flag untuk ensure headers sent dengan semua response codes

---

### Apache

**File:** `.htaccess` atau `httpd.conf`

```apache
<IfModule mod_headers.c>
    # Security Headers
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "DENY"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</IfModule>

# SPA Routing
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

---

### CloudFlare

**Location:** Dashboard → Rules → Transform Rules → HTTP Response Header Modification

**Add these headers:**

```
Name: X-Content-Type-Options
Value: nosniff

Name: X-Frame-Options  
Value: DENY

Name: X-XSS-Protection
Value: 1; mode=block

Name: Referrer-Policy
Value: strict-origin-when-cross-origin

Name: Permissions-Policy
Value: geolocation=(), microphone=(), camera=()
```

**Or via Workers:**

```javascript
// cloudflare-worker.js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  const newHeaders = new Headers(response.headers)
  
  // Add security headers
  newHeaders.set('X-Content-Type-Options', 'nosniff')
  newHeaders.set('X-Frame-Options', 'DENY')
  newHeaders.set('X-XSS-Protection', '1; mode=block')
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  newHeaders.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  })
}
```

---

## ✅ Verification & Testing

### 1. Security Headers Test

**Online Tools:**
- https://securityheaders.com/
- https://observatory.mozilla.org/

**Target Score:** A+ rating

### 2. Manual Verification

**Using curl:**
```bash
curl -I https://bizops.id
```

**Expected output:**
```
HTTP/2 200
x-content-type-options: nosniff
x-frame-options: DENY
x-xss-protection: 1; mode=block
referrer-policy: strict-origin-when-cross-origin
permissions-policy: geolocation=(), microphone=(), camera=()
strict-transport-security: max-age=63072000; includeSubDomains; preload
```

### 3. Browser DevTools

1. Open DevTools (F12)
2. Navigate to Network tab
3. Refresh page
4. Click on first request (document)
5. Check Response Headers

---

## 🔒 Additional Security Measures

### 1. HTTPS/SSL Configuration

**Required for production!**

**Free SSL Options:**
- Let's Encrypt (free, auto-renewal)
- CloudFlare SSL (free)
- Vercel/Netlify (automatic)

**Configuration:**
```nginx
# Force HTTPS redirect
server {
    listen 80;
    server_name bizops.id;
    return 301 https://$server_name$request_uri;
}
```

---

### 2. HSTS Preloading

**What it is:** Tell browsers to ALWAYS use HTTPS

**How to submit:**
1. Add header: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
2. Submit to: https://hstspreload.org/
3. Wait for inclusion (takes weeks/months)

**⚠️ Warning:** Irreversible for preload duration!

---

### 3. Subresource Integrity (SRI)

**For external scripts:**
```html
<script 
  src="https://cdn.example.com/script.js"
  integrity="sha384-..."
  crossorigin="anonymous">
</script>
```

**Generate hash:**
```bash
openssl dgst -sha384 -binary script.js | openssl base64 -A
```

---

### 4. Rate Limiting

**Nginx example:**
```nginx
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

location /api/ {
    limit_req zone=api burst=20 nodelay;
}
```

---

### 5. DDoS Protection

**Options:**
- CloudFlare (free tier has basic protection)
- AWS Shield
- Vercel Pro (included)

---

## 📊 Security Checklist

### Pre-Deployment:

- [ ] All security headers configured
- [ ] HTTPS/SSL enabled
- [ ] Verified dengan securityheaders.com
- [ ] CSP tested dan tidak block legitimate resources
- [ ] Rate limiting configured (if applicable)
- [ ] DDoS protection enabled

### Post-Deployment:

- [ ] Test all headers dengan curl
- [ ] Run security scan (securityheaders.com)
- [ ] Monitor for CSP violations di Sentry
- [ ] Test from different locations
- [ ] Verify HTTPS redirect working
- [ ] Check SSL certificate valid

---

## 🐛 Troubleshooting

### Problem: Resources blocked by CSP

**Symptoms:** Console errors about blocked resources

**Solution:**
1. Check browser console untuk exact blocked URL
2. Add domain ke appropriate CSP directive
3. Test thoroughly

**Example:**
```
Blocked: https://example.com/script.js
Solution: Add to script-src directive
```

---

### Problem: Mixed Content Warnings

**Symptoms:** HTTPS page loading HTTP resources

**Solution:**
1. Change all URLs to HTTPS
2. Or use protocol-relative URLs: `//example.com/resource.js`
3. Or use CSP upgrade-insecure-requests directive

---

### Problem: iframe not loading

**Symptoms:** Embedded content tidak muncul

**Solution:**
1. Check X-Frame-Options header
2. If need iframe, change to `SAMEORIGIN`
3. Or remove header entirely (not recommended)

---

### Problem: Headers not appearing

**Symptoms:** curl/browser tidak show headers

**Solution:**
1. Verify server configuration syntax
2. Restart web server
3. Clear CDN cache (if using)
4. Check if overridden elsewhere

---

## 📚 Resources

**Documentation:**
- MDN Security Headers: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#security
- OWASP Secure Headers: https://owasp.org/www-project-secure-headers/

**Testing Tools:**
- Security Headers: https://securityheaders.com/
- Mozilla Observatory: https://observatory.mozilla.org/
- SSL Labs: https://www.ssllabs.com/ssltest/

**CSP Tools:**
- CSP Evaluator: https://csp-evaluator.withgoogle.com/
- Report URI: https://report-uri.com/

---

## 🔄 Maintenance

**Regular tasks:**
1. **Monthly:** Review CSP violations di Sentry
2. **Quarterly:** Run security header scan
3. **Yearly:** Review dan update security policies
4. **As needed:** Update CSP when adding new external resources

---

## 📞 Support

**Security Questions:**
- Email: security@bizops.id
- Security Policy: `/security`
- Report Vulnerability: `/security/report`

---

**Last Updated:** 27 November 2025  
**Version:** 1.0  
**Next Review:** 27 December 2025

