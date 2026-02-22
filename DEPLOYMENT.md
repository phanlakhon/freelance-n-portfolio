# Deployment Guide - Vercel

คู่มือการนำเว็บไซต์ขึ้นใช้งานจริงผ่าน Vercel

## 🚀 ขั้นตอนการ Deploy (Step-by-Step)

### 1. เตรียม Git Repository
เชื่อมต่อโปรเจกต์กับ GitHub, GitLab หรือ Bitbucket:
```bash
git init
git add .
git commit -m "Initial commit: Professional Portfolio"
git branch -M main
git remote add origin [YOUR_REPO_URL]
git push -u origin main
```

### 2. นำขึ้น Vercel (Vercel Dashboard)
1. เข้าไปที่ [Vercel](https://vercel.com) และล็อกอินผ่าน GitHub
2. คลิก **"Add New"** → **"Project"**
3. เลือก Repository ที่เพิ่ง Push ขึ้นไป
4. Vercel จะตรวจจับ Next.js อัตโนมัติ (ตรวจสอบ Framework Preset ให้เป็น Next.js)
5. คลิก **"Deploy"** และรอประมาณ 1-2 นาที

### 3. การจัดการ Domain (Optional)
- ไปที่ **Settings** → **Domains** ใน Vercel Dashboard
- เพิ่มโดเมนที่คุณต้องการ (เช่น `yourname.dev`)
- ทำตามคำแนะนำการตั้งค่า DNS (A Record หรือ CNAME)

### 4. การตั้งค่า Locale & Middleware
- โปรเจกต์นี้ใช้ `next-intl` ซึ่งทำงานร่วมกับ Middleware เพื่อจัดการ Locale อัตโนมัติ
- Vercel จะจัดการเรื่อง Edge Runtime และการทำ Caching ตามภาษาที่เรียกใช้โดยอัตโนมัติ

## 🔒 Environment Variables
หากคุณมีการเชื่อมต่อ API เช่น Contact Form (Resend, Slack):
1. ไปที่ **Settings** → **Environment Variables**
2. เพิ่มตัวแปรที่ต้องการ (เช่น `RESEND_API_KEY`)
3. คลิก **"Save"** และทำการ Redeploy เพื่อให้ค่ามีผลใช้งาน

## ⚡ Performance Verification
หลังจากการ Deploy แนะนำให้ตรวจสอบประสิทธิภาพผ่าน:
- **Vercel Analytics:** ตรวจสอบ Core Web Vitals ในหน้าโปรเจกต์
- **PageSpeed Insights:** เพื่อดูคะแนน SEO และ Speed ในการโหลดหน้าเว็บจริง

---
**หมายเหตุ:** ทุกครั้งที่มีการ Push โค้ดใหม่ขึ้นไปยังกิ่ง `main` ระบบ Vercel จะทำการ Re-deploy ให้อัตโนมัติ
