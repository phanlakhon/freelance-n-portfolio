# Quick Start Guide

Get your portfolio website running in 5 minutes.

## 📦 What You Have

A production-ready Next.js portfolio website with:
- ✅ Minimal luxury design
- ✅ 8 fully-designed sections
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ TypeScript & Tailwind CSS
- ✅ Ready for Vercel deployment

## 🚀 Immediate Steps

### 1. Install Dependencies (2 minutes)

```bash
# Navigate to project folder
cd freelance-portfolio

# Install packages
npm install
```

### 2. Start Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - Your site is running! 🎉

### 3. Customize Content (30 minutes)

**Priority changes** (do these first):

1. **Personal Info** (`app/layout.tsx`):
   - Update site title, description, URL
   - Change name, email, keywords

2. **Hero Section** (`app/components/Hero.tsx`):
   - Main headline
   - Description
   - Statistics

3. **Contact Info** (`app/components/Contact.tsx`):
   - Email address
   - LINE ID
   - Working hours

4. **Navigation & Footer**:
   - Update brand name in both files
   - Social media links in Footer

**Can wait for later**:
- Portfolio projects (Work.tsx)
- Services customization (Services.tsx)
- About section (About.tsx)
- Tech stack (TechStack.tsx)

### 4. Deploy to Vercel (5 minutes)

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main

# Then:
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. Click Deploy
# Done! Site is live.
```

## 📋 Essential Checklist

Before going live:
- [ ] Update name everywhere (search for "YourName")
- [ ] Update email (search for "your.email@example.com")
- [ ] Add real projects to Work.tsx
- [ ] Replace placeholder images
- [ ] Add og-image.jpg (1200x630px)
- [ ] Update social media links
- [ ] Test contact form
- [ ] Check on mobile device

## 🎨 Quick Customizations

### Change Accent Color

`tailwind.config.ts` - Line 15:
```typescript
accent: {
  DEFAULT: "#c9a55c", // Change this hex code
}
```

### Change Font

`app/layout.tsx` - Lines 5-16:
```typescript
// Replace with different Google Font
import { YourFont } from "next/font/google";
```

### Add Your Logo

`app/components/Navigation.tsx` - Line 31:
```typescript
<Image src="/logo.png" alt="Logo" width={120} height={40} />
```

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main home page |
| `app/layout.tsx` | SEO metadata, fonts |
| `app/components/*.tsx` | All page sections |
| `tailwind.config.ts` | Colors, fonts, spacing |
| `package.json` | Dependencies |

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
npm run build
# Fix any errors shown
```

**Styling not working?**
```bash
# Delete .next folder and restart
rm -rf .next
npm run dev
```

## 📚 Documentation

- **Full README**: Comprehensive documentation
- **CUSTOMIZATION.md**: Detailed customization guide  
- **DEPLOYMENT.md**: Step-by-step deployment
- **PROJECT_STRUCTURE.md**: Technical architecture

## 🎯 Next Steps

After basic setup:

1. **Week 1**: 
   - Finalize content
   - Add real images
   - Test thoroughly

2. **Week 2**:
   - Deploy to Vercel
   - Set up custom domain
   - Submit to Google Search Console

3. **Week 3**:
   - Add analytics
   - Set up contact form integration
   - Share on social media

## 💡 Pro Tips

- **Don't rush**: Take time to craft your portfolio projects
- **Get feedback**: Show to friends/colleagues before launching
- **Test mobile**: Most visitors will be on mobile
- **Keep it updated**: Add new projects regularly
- **Monitor analytics**: Track what works

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Google Fonts](https://fonts.google.com)

---

**You're ready to go! Build something amazing.** 🚀
