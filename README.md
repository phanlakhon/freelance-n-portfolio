# Freelance Portfolio Website

A minimal luxury personal portfolio and freelance service website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Design Philosophy

This website embodies a **minimal luxury** aesthetic:
- Clean and spacious layouts with generous white space
- Elegant typography using Playfair Display and Inter
- Neutral color palette with subtle gold accents
- Smooth, refined animations
- Premium consultant-style positioning

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
freelance-n-portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Sticky navigation with scroll effect
│   │   ├── Hero.tsx          # Hero section with stats
│   │   ├── Services.tsx      # Service cards grid
│   │   ├── Work.tsx          # Portfolio showcase
│   │   ├── About.tsx         # About section
│   │   ├── TechStack.tsx     # Technologies and tools
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer with links
│   ├── globals.css           # Global styles and utilities
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page
│   └── sitemap.ts            # Dynamic sitemap generation
├── public/
│   └── robots.txt            # SEO robots file
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Personal Information

Update these files with your information:

**`app/layout.tsx`** - SEO metadata:
```typescript
export const metadata: Metadata = {
  title: "Your Name • Frontend Expert",
  description: "Your description...",
  // Update URL, name, etc.
}
```

**`app/components/Navigation.tsx`** - Brand name
**`app/components/Hero.tsx`** - Hero text and stats
**`app/components/Contact.tsx`** - Email and contact info
**`app/components/Footer.tsx`** - Social links

### 2. Portfolio Projects

Edit `app/components/Work.tsx` to add your projects:
```typescript
const projects = [
  {
    title: "Your Project",
    category: "Category",
    challenge: "Problem description",
    solution: "Your solution",
    result: "Measurable results",
    tech: ["React", "Next.js"],
    image: "/project-image.jpg", // Add to /public
  },
]
```

### 3. Color Scheme

Modify `tailwind.config.ts` to change colors:
```typescript
colors: {
  accent: {
    DEFAULT: "#c9a55c", // Change to your accent color
  },
}
```

### 4. Contact Form Integration

The contact form in `app/components/Contact.tsx` currently simulates submission. To connect it to a real backend:

**Option 1: Email API (Resend, SendGrid)**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

**Option 2: Form Service (Formspree, Web3Forms)**
- Update the form action to the service endpoint

**Option 3: Build API Route**
Create `app/api/contact/route.ts` for server-side handling

### 5. Images

Add your images to the `/public` directory:
- `/public/og-image.jpg` - Open Graph image (1200x630px)
- `/public/placeholder-project-*.jpg` - Portfolio project images
- Update image paths in components

## 🚢 Deployment to Vercel

### Method 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts

### Environment Variables

If you need environment variables (API keys, etc.):

1. Create `.env.local` for local development
2. Add variables in Vercel dashboard: Project Settings → Environment Variables

## ⚡ Performance Optimizations

Built-in optimizations:
- ✅ Static generation for fast loading
- ✅ Automatic image optimization
- ✅ Font optimization with next/font
- ✅ Automatic code splitting
- ✅ CSS optimization
- ✅ Compression enabled

## 🔍 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Sitemap.xml generation
- ✅ Robots.txt
- ✅ Structured data ready
- ✅ Fast Core Web Vitals

### To Further Improve SEO:

1. **Add structured data** to `app/layout.tsx`:
```typescript
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Frontend Developer",
    // ...
  })}
</script>
```

2. **Submit sitemap** to Google Search Console
3. **Add meta descriptions** for each section
4. **Optimize images** (compress, add alt text)

## 📱 Responsive Design

The website is fully responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Breakpoints are defined in Tailwind config.

## 🎯 Brand Positioning

This template positions you as:
- High-level technical expert
- Premium service provider
- Selective and exclusive
- Quality-focused professional

Content is written in Thai with a confident, professional tone.

## 🔧 Future Enhancements

Consider adding:
- [ ] Blog section for articles
- [ ] Case study pages with detailed breakdowns
- [ ] Testimonials section
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Animation on scroll optimization
- [ ] CMS integration (Sanity, Contentful)
- [ ] Analytics (Google Analytics, Plausible)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues:
- Create an issue in the repository
- Contact via the website form

---

**Built with precision for premium freelance positioning.**
