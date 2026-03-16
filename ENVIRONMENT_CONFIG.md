# Environment Configuration Guide

**Phase 3 of Code Audit Implementation**

This document explains how to configure environment variables for the OOKR Office website.

## 📋 Overview

Environment variables allow you to:
- **Secure sensitive data** (API keys, credentials)
- **Configure different environments** (development, staging, production)
- **Enable/disable features** without code changes
- **Manage deployment settings** (PUBLIC_URL for different hosts)

## 🚀 Quick Start

### 1. Copy the Template

```bash
cp .env.example .env.local
```

### 2. Fill in Your Credentials

Open `.env.local` and replace placeholder values with your actual credentials:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 3. Restart Development Server

Environment variables are loaded at build time, so restart your dev server:

```bash
npm start
```

## 📂 Environment Files

### `.env.example`
- **Purpose:** Template showing all available environment variables
- **Commit to git:** ✅ Yes - provides documentation for team
- **Contains secrets:** ❌ No - only placeholder values

### `.env.local` (YOU CREATE THIS)
- **Purpose:** Your local development configuration
- **Commit to git:** ❌ NO - contains real credentials
- **Contains secrets:** ✅ Yes - your actual API keys
- **Priority:** Highest (overrides all other .env files)

### `.env.production.local` (optional)
- **Purpose:** Production-specific configuration
- **Commit to git:** ❌ NO - deploy separately
- **Use case:** Production builds with different settings

## 🔑 Available Environment Variables

### Required for Contact Forms

#### `REACT_APP_EMAILJS_SERVICE_ID`
- **Description:** Your EmailJS service ID
- **Get it from:** https://dashboard.emailjs.com/admin
- **Example:** `service_abc1234`

#### `REACT_APP_EMAILJS_TEMPLATE_ID`
- **Description:** Your EmailJS template ID
- **Get it from:** https://dashboard.emailjs.com/admin/templates
- **Example:** `template_xyz7890`

#### `REACT_APP_EMAILJS_PUBLIC_KEY`
- **Description:** Your EmailJS public key
- **Get it from:** https://dashboard.emailjs.com/admin/account
- **Example:** `AbCdEfGhIjKlMnOp`

### Deployment Configuration

#### `PUBLIC_URL`
- **Description:** Base path for deployed app
- **Root domain:** `PUBLIC_URL=/`
- **Subdirectory:** `PUBLIC_URL=/ookr`
- **Note:** Does NOT need `REACT_APP_` prefix

### Future Use (Optional)

These are commented out in `.env.example` but ready when needed:

- `REACT_APP_FIREBASE_*` - Firebase configuration
- `REACT_APP_GA_TRACKING_ID` - Google Analytics
- `REACT_APP_API_BASE_URL` - Backend API endpoint
- `REACT_APP_ENABLE_ANALYTICS` - Feature flag for analytics
- `REACT_APP_ENABLE_CHAT` - Feature flag for chat widget

## 🛠️ Using Environment Variables

### In JavaScript/JSX

```javascript
// ✅ CORRECT - Import from centralized config
import { emailConfig } from '../shared/config/environment';

const sendEmail = () => {
  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    body: JSON.stringify({
      service_id: emailConfig.serviceId,  // Uses environment variable
      // ...
    })
  });
};
```

```javascript
// ❌ WRONG - Direct access (no defaults, no validation)
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
```

### Centralized Configuration

All environment variables are accessed through [src/shared/config/environment.js](src/shared/config/environment.js):

```javascript
import config from '../shared/config/environment';

// Email configuration
config.email.serviceId;
config.email.templateId;
config.email.publicKey;

// Check if configured
if (config.email.isConfigured()) {
  // Send email
}

// App configuration
config.app.isDevelopment;  // true in development
config.app.isProduction;   // true in production
config.app.publicUrl;      // '/ookr' or '/'

// Feature flags (future)
config.features.analytics;  // true/false
```

## 🔒 Security Best Practices

### ✅ DO

1. **Use `.env.local` for secrets**
   ```bash
   # Create your local config
   cp .env.example .env.local
   # Add real credentials to .env.local
   ```

2. **Never commit sensitive data**
   ```bash
   # .gitignore already excludes these:
   .env.local
   .env.production.local
   ```

3. **Use centralized config**
   ```javascript
   import { emailConfig } from '../shared/config/environment';
   ```

4. **Check configuration in development**
   - Open browser console
   - Look for configuration warnings
   - Fix any missing variables

### ❌ DON'T

1. **Don't hardcode credentials**
   ```javascript
   // ❌ WRONG
   const apiKey = 'sk_live_abc123';
   ```

2. **Don't commit .env.local**
   ```bash
   # ❌ WRONG
   git add .env.local
   ```

3. **Don't use process.env directly**
   ```javascript
   // ❌ WRONG - No defaults, no validation
   const key = process.env.REACT_APP_API_KEY;
   ```

4. **Don't share credentials in Slack/Email**
   - Use secure password managers
   - Share via encrypted channels

## 🌍 Deployment Configurations

### Development (localhost:3000)

```env
# .env.local
PUBLIC_URL=/
REACT_APP_EMAILJS_SERVICE_ID=service_dev123
REACT_APP_EMAILJS_TEMPLATE_ID=template_dev456
REACT_APP_EMAILJS_PUBLIC_KEY=dev_key_789
```

```bash
npm start
```

### Production (Root Domain)

```env
# .env.production.local
PUBLIC_URL=/
REACT_APP_EMAILJS_SERVICE_ID=service_prod123
REACT_APP_EMAILJS_TEMPLATE_ID=template_prod456
REACT_APP_EMAILJS_PUBLIC_KEY=prod_key_789
```

```bash
npm run build:root
```

### Production (Subdirectory /ookr)

```env
# .env.production.local
PUBLIC_URL=/ookr
REACT_APP_EMAILJS_SERVICE_ID=service_prod123
REACT_APP_EMAILJS_TEMPLATE_ID=template_prod456
REACT_APP_EMAILJS_PUBLIC_KEY=prod_key_789
```

```bash
npm run build:sub
```

## 🧪 Testing Configuration

### Check if EmailJS is Configured

```javascript
import { emailConfig } from '../shared/config/environment';

if (!emailConfig.isConfigured()) {
  console.error(emailConfig.getWarning());
  // Show user-friendly error message
}
```

### Development Warnings

In development mode, the app automatically logs configuration warnings:

```
⚠️ Configuration Warnings:
  - EmailJS is not configured. Please set REACT_APP_EMAILJS_* environment variables.
See .env.example for configuration template
```

## 📊 Migration from Hardcoded Values

### Before (Hardcoded)

```javascript
const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
  body: JSON.stringify({
    service_id: 'your_service_id',      // ❌ Hardcoded
    template_id: 'your_template_id',    // ❌ Hardcoded
    user_id: 'your_user_id',            // ❌ Hardcoded
  })
});
```

### After (Environment Variables)

```javascript
import { emailConfig } from '../shared/config/environment';

const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
  body: JSON.stringify({
    service_id: emailConfig.serviceId,    // ✅ From environment
    template_id: emailConfig.templateId,  // ✅ From environment
    user_id: emailConfig.publicKey,       // ✅ From environment
  })
});
```

**Benefits:**
- ✅ No credentials in source code
- ✅ Different credentials per environment
- ✅ Easy to rotate keys without code changes
- ✅ Validation and default values
- ✅ Developer-friendly warnings

## 🔧 Troubleshooting

### Problem: "EmailJS is not configured" warning

**Solution:**
1. Check if `.env.local` exists
2. Verify variable names start with `REACT_APP_`
3. Restart development server (`npm start`)

### Problem: Environment variables not loading

**Solution:**
1. Ensure file is named exactly `.env.local`
2. Check for syntax errors (no spaces around `=`)
3. Restart development server
4. Clear browser cache

### Problem: Different value in production

**Solution:**
1. Create `.env.production.local` with production values
2. Deploy this file separately (don't commit to git)
3. Rebuild with `npm run build`

## 📝 Checklist for New Developers

- [ ] Copy `.env.example` to `.env.local`
- [ ] Get EmailJS credentials from team lead
- [ ] Fill in all `REACT_APP_EMAILJS_*` variables
- [ ] Restart development server
- [ ] Check browser console for warnings
- [ ] Test contact form submission
- [ ] Confirm `.env.local` is NOT committed to git

## 🎯 Summary

**Phase 3 Improvements:**
- ✅ No more hardcoded credentials
- ✅ Centralized configuration management
- ✅ Environment-specific settings
- ✅ Validation and error handling
- ✅ Developer-friendly warnings
- ✅ Secure by default (.gitignore)

**Files Created:**
1. `.env.example` - Template for all environment variables
2. `src/shared/config/environment.js` - Centralized config access
3. `ENVIRONMENT_CONFIG.md` - This guide

**Files Updated:**
1. `src/Components/Contact.jsx` - Uses environment config

---

*Last Updated: February 26, 2026*
*Phase 3: Environment Configuration Complete*
