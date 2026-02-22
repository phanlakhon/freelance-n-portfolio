# Customization Guide

คู่มือการปรับแต่งเนื้อหาและดีไซน์เพื่อให้พอร์ตโฟลิโอสะท้อนถึงตัวตนและแบรนด์ของคุณ

## 📝 1. การจัดการเนื้อหา (i18n)
โปรเจกต์นี้ใช้ระบบ **next-intl** เพื่อรองรับหลายภาษา เนื้อหาที่เป็นข้อความทั้งหมดจะถูกเก็บไว้ในไฟล์ JSON ในโฟลเดอร์ `/messages`:

- **`messages/en.json`**: สำหรับเนื้อหาภาษาอังกฤษ
- **`messages/th.json`**: สำหรับเนื้อหาภาษาไทย

**วิธีการแก้ไข:**
1. ค้นหาส่วนที่ต้องการแก้ไข เช่น `Hero`, `Services`, หรือ `Work`
2. แก้ไขข้อความใน JSON object ให้ตรงกับที่ต้องการ
3. ตรวจสอบให้แน่ใจว่าทั้งสองไฟล์มีโครงสร้าง (Keys) ที่ตรงกัน

## 💼 2. การจัดการผลงาน (Projects Metadata)
ข้อมูลพื้นฐานของผลงาน (ที่ไม่ใช่เนื้อหาอธิบาย) จะถูกเก็บไว้ใน `/lib/projects.ts`:

```typescript
export const projects: Project[] = [
    {
        id: "p1",                 // ต้องตรงกับ Key ใน messages/*.json
        slug: "booking-engine",   // ใช้สำหรับ URL (เช่น /work/booking-engine)
        featured: true,           // แสดงผลในหน้าแรก
        tech: ["React", "GSAP"],  // รายการเทคโนโลยี
        image: "/works/img.png",  // รูปภาพ (อยู่ใน /public)
    },
];
```

## 🎨 3. การปรับแต่งดีไซน์ (Theming)
การตั้งค่าสีและฟอนต์หลักจะอยู่ที่ `tailwind.config.ts`:

- **สี (Colors):**
    - `primary`: สีหลักของพื้นหลังและตัวอักษร
    - `accent`: สีไฮไลท์ (ค่าเริ่มต้นคือสีทอง #c9a55c)
- **ฟอนต์ (Typography):**
    - แก้ไข `fontFamily` หากต้องการใช้ฟอนต์อื่น (อย่าลืมอัปเดตการโหลดฟอนต์ใน `app/[locale]/layout.tsx`)

## 🔧 4. การจัดการ SEO & Metadata
การตั้งค่า SEO หลักอยู่ที่ `app/[locale]/layout.tsx` ในฟังก์ชัน `generateMetadata`:

- **Title & Description:** ดึงข้อมูลมาจาก `messages/*.json` ในส่วนของ `Metadata`
- **Keywords:** ปรับเปลี่ยนรายการคำค้นหาที่ต้องการให้ติดอันดับ SEO
- **Images:** เปลี่ยนไฟล์ `/public/og-image.jpg` สำหรับการแชร์ลง Social Media

## 📱 5. ข้อมูลการติดต่อ
แก้ไขที่ `messages/*.json` ในส่วนของ `Contact`:
- อีเมล, ไอดี LINE, และชั่วโมงการทำงาน

---
**Tip:** เมื่อมีการแก้ไขข้อมูลใน `lib/projects.ts` หรือ `messages/*.json` ระบบจะทำการอัปเดตหน้าเว็บให้โดยอัตโนมัติในโหมด Development
