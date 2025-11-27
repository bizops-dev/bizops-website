# 🚀 Deployment Guide - BizOps Website

Complete guide untuk deploying BizOps website ke berbagai platform hosting.

---

## 📋 Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Environment Configuration](#environment-configuration)
- [Platform-Specific Guides](#platform-specific-guides)
  - [Vercel (Recommended)](#vercel-recommended)
  - [Netlify](#netlify)
  - [Custom Server (Nginx/Apache)](#custom-server-nginxapache)
  - [Docker](#docker)
- [Post-Deployment](#post-deployment)
- [Rollback Procedure](#rollback-procedure)
- [Troubleshooting](#troubleshooting)

---

## ✅ Pre-Deployment Checklist

### Code Quality

- [ ] All tests passing (`npm run test`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No linter errors (`npm run lint`)
- [ ] Code formatted (`npm run format:check`)
- [ ] Build successful (`npm run build`)

### Configuration

- [ ] Environment variables configured
- [ ] `.env.production` created with production values
- [ ] API keys verified
- [ ] Sentry DSN configured
- [ ] Domain/DNS configured

### Security

- [ ] Security headers configured (see `SECURITY_HEADERS.md`)
- [ ] SSL certificate ready
- [ ] No sensitive data in code
- [ ] API keys are client-safe only
- [ ] CORS configured properly

### Performance

- [ ] Build size < 500KB (gzipped)
- [ ] Images optimized
- [ ] Code splitting working
- [ ] Lighthouse score > 90

### Monitoring

- [ ] Sentry error tracking enabled
- [ ] Analytics configured
- [ ] Performance monitoring enabled
- [ ] Uptime monitoring setup

---

## 🔧 Environment Configuration

### Development

```env
NODE_ENV=development
VITE_SENTRY_DSN=
GEMINI_API_KEY=your-dev-key
```

### Staging

```env
NODE_ENV=staging
VITE_SENTRY_DSN=https://your-staging-dsn@sentry.io/project
GEMINI_API_KEY=your-staging-key
```

### Production

```env
NODE_ENV=production
VITE_SENTRY_DSN=https://your-production-dsn@sentry.io/project
GEMINI_API_KEY=your-production-key
```

---

## 🌐 Platform-Specific Guides

## Vercel (Recommended)

### Why Vercel?

- ✅ Zero-config deployment
- ✅ Automatic HTTPS
- ✅ Edge network (global CDN)
- ✅ Preview deployments for PRs
- ✅ Built-in analytics
- ✅ Excellent Vite support

### Deployment Steps

#### 1. Via Vercel Dashboard

```bash
# 1. Build locally to verify
npm run build

# 2. Push to GitHub

# 3. Import project in Vercel
# Visit: https://vercel.com/new

# 4. Configure project:
- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install

# 5. Add environment variables in Vercel dashboard
- VITE_SENTRY_DSN
- GEMINI_API_KEY (if needed)

# 6. Deploy!
```

#### 2. Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to production
vercel --prod

# Or deploy to preview
vercel
```

### Vercel Configuration

**File:** `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "regions": ["sin1"],
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
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Custom Domain

```bash
# Add domain in Vercel dashboard
# Settings → Domains → Add

# Configure DNS:
# Type: CNAME
# Name: www (or @)
# Value: cname.vercel-dns.com
```

---

## Netlify

### Deployment Steps

#### 1. Via Netlify Dashboard

```bash
# 1. Push to GitHub

# 2. New site from Git
# Visit: https://app.netlify.com/start

# 3. Configure build settings:
- Build command: npm run build
- Publish directory: dist
- Production branch: main

# 4. Add environment variables
# Site settings → Environment variables

# 5. Deploy!
```

#### 2. Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy to production
netlify deploy --prod

# Or deploy to preview
netlify deploy
```

### Netlify Configuration

**File:** `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"

[context.production.environment]
  NODE_ENV = "production"

[context.deploy-preview.environment]
  NODE_ENV = "staging"
```

---

## Custom Server (Nginx/Apache)

### Nginx Configuration

#### Step 1: Build Application

```bash
npm run build
# This creates dist/ directory
```

#### Step 2: Upload to Server

```bash
# Using SCP
scp -r dist/* user@server:/var/www/bizops/

# Or using rsync
rsync -avz dist/ user@server:/var/www/bizops/
```

#### Step 3: Configure Nginx

**File:** `/etc/nginx/sites-available/bizops`

```nginx
server {
    listen 80;
    server_name bizops.id www.bizops.id;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name bizops.id www.bizops.id;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/bizops.id/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bizops.id/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security Headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    # Root directory
    root /var/www/bizops;
    index index.html;

    # Compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Don't cache index.html
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        expires 0;
    }

    # Security: prevent access to hidden files
    location ~ /\. {
        deny all;
    }
}
```

#### Step 4: Enable Site

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/bizops /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### Apache Configuration

**File:** `/etc/apache2/sites-available/bizops.conf`

```apache
<VirtualHost *:80>
    ServerName bizops.id
    Redirect permanent / https://bizops.id/
</VirtualHost>

<VirtualHost *:443>
    ServerName bizops.id
    ServerAlias www.bizops.id
    
    DocumentRoot /var/www/bizops
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/bizops.id/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/bizops.id/privkey.pem
    
    # Security Headers
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "DENY"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    
    # SPA Routing
    <Directory /var/www/bizops>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Rewrite for SPA
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    # Cache static assets
    <FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
        Header set Cache-Control "max-age=31536000, public, immutable"
    </FilesMatch>
    
    # Don't cache HTML
    <FilesMatch "\.html$">
        Header set Cache-Control "no-cache, no-store, must-revalidate"
        Header set Expires "0"
    </FilesMatch>
</VirtualHost>
```

### SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d bizops.id -d www.bizops.id

# Auto-renewal is configured automatically
# Test renewal
sudo certbot renew --dry-run
```

---

## Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy build files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Security: Run as non-root user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Nginx Config for Docker

**File:** `nginx.conf`

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Don't cache HTML
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
```

### Build and Run

```bash
# Build image
docker build -t bizops-website .

# Run container
docker run -d \
  -p 80:80 \
  --name bizops-website \
  --restart unless-stopped \
  bizops-website

# Or with docker-compose
docker-compose up -d
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:80"
      - "443:443"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
```

---

## 📊 Post-Deployment

### 1. Verify Deployment

```bash
# Check HTTP status
curl -I https://bizops.id

# Check content
curl https://bizops.id

# Check SSL
openssl s_client -connect bizops.id:443 -servername bizops.id
```

### 2. Run Lighthouse Audit

```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://bizops.id --output html --output-path ./report.html

# Target scores:
# Performance: 90+
# Accessibility: 90+
# Best Practices: 95+
# SEO: 95+
```

### 3. Test Security Headers

Visit: https://securityheaders.com/?q=https://bizops.id

**Target: A+ rating**

### 4. Configure Monitoring

#### Sentry

```typescript
// Already configured in code
// Verify errors are being reported
```

#### Uptime Monitoring

Options:
- UptimeRobot (free)
- Pingdom
- StatusCake
- Built-in (Vercel/Netlify)

### 5. Setup Analytics

- Verify Google Analytics tracking
- Check Sentry performance monitoring
- Verify Web Vitals reporting

### 6. DNS Propagation

```bash
# Check DNS
dig bizops.id
dig www.bizops.id

# Check from multiple locations
https://dnschecker.org/
```

---

## 🔄 Rollback Procedure

### Vercel

```bash
# List deployments
vercel ls

# Rollback to previous deployment
vercel rollback <deployment-url>

# Or via dashboard:
# Deployments → Select previous → Promote to Production
```

### Netlify

```bash
# Via dashboard:
# Deploys → Select previous → Publish deploy

# Or via CLI
netlify deploy --prod --dir=previous-dist
```

### Custom Server

```bash
# Keep backups of each deployment
cp -r dist dist-backup-$(date +%Y%m%d-%H%M%S)

# Rollback
rm -rf /var/www/bizops/*
cp -r dist-backup-YYYYMMDD-HHMMSS/* /var/www/bizops/

# Restart services
sudo systemctl reload nginx
```

---

## 🐛 Troubleshooting

### Issue: 404 on Refresh

**Cause:** Server not configured for SPA routing

**Solution:**
- Vercel: Add `vercel.json` with rewrites
- Netlify: Add `_redirects` file or `netlify.toml`
- Nginx: Configure `try_files`
- Apache: Enable mod_rewrite

### Issue: Assets Not Loading

**Cause:** Incorrect base path

**Solution:**
```typescript
// vite.config.ts
export default defineConfig({
  base: '/', // Ensure this matches your deployment path
});
```

### Issue: Environment Variables Not Working

**Cause:** Variables not prefixed with `VITE_`

**Solution:**
- Client-side variables MUST have `VITE_` prefix
- Rebuild after changing env vars
- Verify in hosting dashboard

### Issue: SSL Certificate Errors

**Solution:**
```bash
# Renew certificate
sudo certbot renew

# Force renewal
sudo certbot renew --force-renewal

# Check certificate
sudo certbot certificates
```

### Issue: Slow Build Times

**Solution:**
```bash
# Clear node_modules and cache
rm -rf node_modules
rm -rf dist
rm package-lock.json
npm install
npm run build
```

### Issue: Memory Issues During Build

**Solution:**
```bash
# Increase Node memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## 📞 Support

**Deployment Issues:**
- Email: devops@bizops.id
- Slack: #deployments
- Docs: Internal wiki

**Platform-Specific:**
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/

---

**Last Updated:** 27 November 2025  
**Version:** 1.0  
**Next Review:** Quarterly

