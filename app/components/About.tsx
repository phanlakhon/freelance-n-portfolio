"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-container section-spacing bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-6 text-center md:text-left">
            <p className="text-xl text-neutral-700 leading-relaxed">
              เรามองว่าการพัฒนาซอฟต์แวร์ไม่ใช่เพียงการสร้างหน้าเว็บไซต์ให้ทำงานได้
              แต่คือการออกแบบระบบที่มีเหตุผลรองรับในทุกการตัดสินใจ
              ตั้งแต่โครงสร้างภายใน ไปจนถึงประสบการณ์ของผู้ใช้งาน
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              โค้ดที่ชัดเจน สถาปัตยกรรมที่คิดมาอย่างรอบคอบ
              และความยืดหยุ่นต่อการเปลี่ยนแปลงในอนาคต
              คือมาตรฐานที่เราให้ความสำคัญในทุกโปรเจกต์
              เพื่อให้ระบบไม่เพียงทำงานได้ในวันนี้ แต่เติบโตต่อได้ในระยะยาว
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
