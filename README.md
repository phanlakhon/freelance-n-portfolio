# Freelance Portfolio Website (Senior Frontend Engineer)

A minimal luxury personal portfolio and freelance service website built with **Next.js 16**, **GSAP**, and **Internationalization (i18n)**.

## 🎨 Design Philosophy
เว็บไซต์นี้สะท้อนภาพลักษณ์ความเชี่ยวชาญระดับ Senior ผ่านดีไซน์ที่เน้นความเรียบง่ายแต่ทรงพลัง (Minimal Luxury) พร้อมการทำ Animation ที่ลื่นไหลและโครงสร้างที่รองรับการขยายตัวในอนาคต

## 🚀 Key Features
- **Next.js 16 (App Router):** ประสิทธิภาพสูงสุดด้วย React 19 และ Server Components
- **Multi-language Support:** รองรับการใช้งาน 2 ภาษา (TH/EN) อย่างสมบูรณ์ผ่าน `next-intl`
- **Advanced Animations:** ขับเคลื่อนด้วย GSAP (ScrollTrigger) และ Framer Motion
- **SEO Optimized:** รองรับ Metadata API, JSON-LD Structured Data และ Sitemap อัตโนมัติ
- **Responsive & Premium UI:** พัฒนาด้วย Tailwind CSS พร้อม Typography ที่ผ่านการคัดสรร

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.17 หรือสูงกว่า
- npm, yarn หรือ pnpm

### Installation
1. **ติดตั้ง dependencies:**
```bash
npm install
```

2. **รัน development server:**
```bash
npm run dev
```

3. **เปิดบราวเซอร์:**
ไปที่ [http://localhost:3000](http://localhost:3000)

## 📁 Project Overview
- `app/[locale]/`: โครงสร้าง Routing ตามระบบภาษา
- `messages/`: ไฟล์ JSON สำหรับจัดการเนื้อหา (th.json, en.json)
- `lib/projects.ts`: ข้อมูล Metadata สำหรับผลงานต่างๆ
- `app/components/`: ส่วนประกอบต่างๆ ของหน้าเว็บ (Hero, Work, Services ฯลฯ)

## 🚢 Deployment
โปรเจกต์นี้ถูกออกแบบมาให้ทำงานได้ดีที่สุดบน **Vercel** สามารถ Deploy ได้ทันทีผ่านการเชื่อมต่อ GitHub และ Vercel Dashboard

---
### 📚 Documentation
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - คู่มือการปรับแต่งข้อมูลและธีม
- [DEPLOYMENT.md](./DEPLOYMENT.md) - ขั้นตอนการ Deploy และการตั้งค่า Domain
- [PROJECT_GUIDE.md](./PROJECT_GUIDE.md) - ข้อมูลสถาปัตยกรรมทางเทคนิคเชิงลึก

**Built with precision for premium technical positioning.**
