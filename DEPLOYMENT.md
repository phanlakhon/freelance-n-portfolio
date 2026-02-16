# Deployment Guide - Vercel

## Quick Start Deployment

### Prerequisites
- GitHub account
- Vercel account (free tier works perfectly)

## Step-by-Step Deployment

### 1. Prepare Your Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Freelance portfolio website"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js
6. **Project Settings** (auto-configured, verify):
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build` (auto)
   - Output Directory: .next (auto)
   - Install Command: `npm install` (auto)
7. Click "Deploy"
8. Wait 2-3 minutes
9. Your site is live! 🎉

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? (enter name or press Enter)
# - Directory? ./ (default)

# For production deployment
vercel --prod
```

### 3. Configure Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `phanlakhon-dev.vercel.app`)
3. Follow DNS configuration instructions:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (5 minutes - 48 hours)
5. SSL certificate is automatically provisioned

### 4. Environment Variables (If Needed)

If you add API integrations later:

1. Project Settings → Environment Variables
2. Add variables:
   ```
   NEXT_PUBLIC_API_URL=https://api.example.com
   RESEND_API_KEY=re_xxxxx
   ```
3. Redeploy for changes to take effect

### 5. Automatic Deployments

Once connected to GitHub:
- ✅ Every push to `main` branch automatically deploys to production
- ✅ Preview deployments for pull requests
- ✅ Instant rollback capability

## Build Optimization

### Production Checklist

Before deploying, ensure:

- [x] All images optimized and compressed
- [x] Update all placeholder text (name, email, etc.)
- [x] Replace project images in `/public`
- [x] Add actual Open Graph image (`/public/og-image.jpg`)
- [x] Update social media links
- [x] Test contact form
- [x] Verify all links work
- [x] Check mobile responsiveness
- [x] Update `package.json` metadata

### Performance Verification

After deployment:

1. **Test with Lighthouse**:
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Run audit
   - Target: 90+ scores across all categories

2. **Test with PageSpeed Insights**:
   - Visit [https://pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your URL
   - Check Core Web Vitals

3. **Test Mobile**:
   - Use real devices
   - Test different screen sizes
   - Verify touch interactions

## Post-Deployment SEO Setup

### 1. Google Search Console

```bash
# Add your sitemap
https://phanlakhon-dev.vercel.app/sitemap.xml
```

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership (Vercel auto-verifies with DNS)
4. Submit sitemap: `https://phanlakhon-dev.vercel.app/sitemap.xml`

### 2. Google Analytics (Optional)

Add to `app/layout.tsx`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 3. Structured Data

Add to enhance search appearance:

```typescript
// In app/layout.tsx, add to <head>
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Senior Frontend Developer",
    "description": "Freelance frontend developer specializing in React...",
    "url": "https://phanlakhon-dev.vercel.app",
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH"
    }
  })}
</script>
```

## Monitoring & Maintenance

### Vercel Analytics (Free)

Enable in Project Settings → Analytics:
- Real user metrics
- Core Web Vitals
- Geographic data
- Device breakdown

### Regular Updates

```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit

# Fix automatically if possible
npm audit fix

# Deploy updates
git add .
git commit -m "Update dependencies"
git push
```

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Common issues:
   - TypeScript errors → Fix in code
   - Missing dependencies → Check package.json
   - Environment variables → Add in Vercel settings

### Site Not Loading

1. Check deployment status (should be "Ready")
2. Clear browser cache
3. Check DNS propagation (if using custom domain)
4. Review error logs in Vercel

### Performance Issues

1. Optimize images (use WebP, compress)
2. Enable compression (already enabled in next.config.js)
3. Lazy load heavy components
4. Check bundle size: `npm run build` locally

## Cost

### Vercel Pricing

**Hobby Plan (Free)**:
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Preview deployments
- ✅ Perfect for this portfolio

**Pro Plan ($20/month)** - Only needed if:
- You exceed bandwidth limits
- Need team collaboration
- Require password protection

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

---

Your site should be live within minutes of deploying! 🚀
