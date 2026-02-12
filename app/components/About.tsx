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
          <p className="text-xl text-neutral-700 leading-relaxed text-center">
            เราไม่ได้มองว่านี่คือการ 'สร้างเว็บ' แต่คือการ 'สร้างระบบทางวิศวกรรม' ที่ทำงานบนเบราว์เซอร์ เราเชื่อว่าซอฟต์แวร์ที่ดีต้องมีสถาปัตยกรรมที่คิดมาอย่างดี โค้ดที่สะอาด และพร้อมรับมือกับการเปลี่ยนแปลงเสมอ นี่คือมาตรฐานที่เราใช้ในทุกโปรเจกต์
          </p>
        </motion.div>
      </div>
    </section>
  );
}
