# PROJECT GUIDE (Technical Architecture)

เอกสารฉบับนี้สรุปโครงสร้างทางเทคนิคและแนวทางการพัฒนาสำหรับโปรเจกต์ Portfolio เพื่อให้นักพัฒนาและ AI สามารถทำงานต่อได้อย่างมีประสิทธิภาพ

## 1. Project Overview & Design Philosophy
โปรเจกต์นี้ถูกออกแบบภายใต้แนวคิด **"Minimal Luxury"** โดยเน้นความประณีตของการทำ Animation และการจัดการเนื้อหาที่รองรับหลายภาษา (i18n) เพื่อนำเสนอภาพลักษณ์ของ Senior Frontend Engineer / Technical Consultant

## 2. Tech Stack Decisions
- **Next.js 16.1 (App Router):** ใช้ฟีเจอร์ล่าสุดของ React 19 เพื่อประสิทธิภาพสูงสุดในการทำ Server Rendering และ Static Generation
- **Internationalization (next-intl):** จัดการเนื้อหาภาษาไทย (TH) และอังกฤษ (EN) ผ่าน JSON-based translations
- **Animation System:**
    - **GSAP & ScrollTrigger:** ใช้สำหรับ Animation ที่ซับซ้อนและการควบคุม Scroll-based timeline
    - **Framer Motion:** ใช้สำหรับ UI Transitions และ Micro-interactions ขนาดเล็ก
- **Styling:** Tailwind CSS 3.4 พร้อมการใช้ CSS Variables สำหรับ Font ธีม
- **SEO & Performance:** ใช้ Metadata API ของ Next.js ร่วมกับ JSON-LD Structured Data

## 3. Detailed Directory Structure
```text
freelance-n-portfolio/
├── app/
│   ├── [locale]/           # Routing ตามภาษา (en, th)
│   │   ├── layout.tsx      # Root layout จัดการ Fonts, Metadata, i18n Provider
│   │   ├── page.tsx        # หน้าหลัก (Home)
│   │   └── work/           # หน้าผลงาน (Slug-based routing)
│   ├── api/                # API Endpoints (เช่น Contact form)
│   └── components/         # UI Components (แยกส่วนตาม Section)
├── i18n/                   # การตั้งค่า i18n routing และ middleware
├── messages/               # ไฟล์คำแปล JSON (th.json, en.json)
├── lib/                    # Shared logic, Metadata (projects.ts), Utilities
├── public/                 # Static assets (images, robots.txt)
└── tailwind.config.ts      # การตั้งค่า Colors, Fonts, และ Spacing ธีม
```

## 4. Data Architecture & i18n Flow
ระบบข้อมูลถูกออกแบบให้แยกส่วนกันเพื่อให้ง่ายต่อการจัดการ:
1. **Metadata (`lib/projects.ts`):** เก็บข้อมูลโครงสร้าง เช่น ID, Slug, Tech stack, และ Image path
2. **Translation Content (`messages/*.json`):** เก็บเนื้อหาที่เป็นข้อความทั้งหมด โดยอ้างอิงผ่าน ID จาก Metadata
3. **Locale Context:** ทุก Component เรียกใช้ `useTranslations` เพื่อดึงข้อมูลตามภาษาปัจจุบัน

## 5. Engineering Guardrails (กฎเหล็ก)
- **ห้ามแก้ไข Routing ใน `[locale]` โดยไม่จำเป็น:** การเปลี่ยนชื่อโฟลเดอร์ในนี้จะกระทบกับระบบภาษาทั้งหมด
- **Client/Server Boundary:** คอมโพเนนต์ที่มีการใช้ GSAP หรือ Interactivity ต้องระบุ `"use client"` และใช้ `useGSAP` hook เสมอ
- **Consistency:** ใช้ Tailwind Utility Classes ตามที่กำหนดไว้ใน `globals.css` เท่านั้นเพื่อรักษา Design System

## 6. Development Workflow
1. **การเพิ่มผลงาน:** เพิ่มข้อมูลทางเทคนิคใน `lib/projects.ts` และเพิ่มเนื้อหาคำแปลใน `messages/en.json` และ `messages/th.json`
2. **การปรับแต่งธีม:** แก้ไขที่ `tailwind.config.ts` ในส่วนของ `colors.accent` และ `fontFamily`
3. **การทดสอบ:** ใช้ `npm run lint` เพื่อตรวจสอบความถูกต้องของโค้ดก่อนทำการ Build

---
*เอกสารนี้ถูกปรับปรุงล่าสุดเพื่อให้ครอบคลุมข้อมูลจาก PROJECT_STRUCTURE.md และ STACK_EXPLANATION.md*
