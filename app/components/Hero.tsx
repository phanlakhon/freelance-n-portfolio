"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-container section-spacing min-h-[90vh] flex items-center">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base font-medium tracking-widest uppercase text-neutral-500 mb-6">
            Frontend Systems Engineering
          </p>
          
          <h1 className="heading-display text-display-xl mb-8">
            Frontend Systems Engineering
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-12 leading-relaxed">
            บริการพัฒนา, แก้ปัญหา, และวางสถาปัตยกรรม Frontend ด้วย React, Next.js, Vue, และ Nuxt สำหรับโปรเจกต์ที่ต้องการความแม่นยำทางเทคนิคและโครงสร้างที่ยั่งยืน
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#services" className="btn-primary">
              ดูบริการทั้งหมด
            </Link>
            <Link href="#contact" className="btn-outline">
              ติดต่อ
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 pt-12 border-t border-neutral-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-display font-semibold mb-2">5+</p>
              <p className="text-sm text-neutral-600">ปีประสบการณ์</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-semibold mb-2">50+</p>
              <p className="text-sm text-neutral-600">โปรเจกต์สำเร็จ</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-semibold mb-2">100%</p>
              <p className="text-sm text-neutral-600">ความพึงพอใจ</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-semibold mb-2">24h</p>
              <p className="text-sm text-neutral-600">เวลาตอบกลับ</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
