"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Architecture & Development",
    description:
      "ออกแบบและสร้าง Frontend Systems สำหรับเว็บแอปพลิเคชันที่ซับซ้อนโดยใช้ React, Next.js, Vue.js, และ Nuxt.js เป็นหลัก เน้นโครงสร้างที่ทดสอบได้จริงและดูแลรักษาง่ายในระยะยาว",
    outcomes: ["สถาปัตยกรรมที่ยืดหยุ่น", "โค้ดที่บำรุงรักษาง่าย", "Scalable Solutions"],
  },
  {
    title: "Legacy Code Refactoring & Rescue",
    description:
      "เชี่ยวชาญการวิเคราะห์และปรับปรุงฐานโค้ด Frontend เดิม (Legacy Code) ที่มีปัญหาซับซ้อน, ทำงานช้า, หรือขยายต่อได้ยาก ให้กลับมาทำงานได้อย่างเต็มประสิทธิภาพ",
    outcomes: ["เพิ่มประสิทธิภาพ", "ลด Technical Debt", "โค้ดที่อ่านง่ายขึ้น"],
  },
  {
    title: "API Integration & System Automation",
    description:
      "วางระบบเชื่อมต่อ Frontend เข้ากับ Backend API ทุกรูปแบบ และสร้าง Workflow Automation ด้วย n8n เพื่อลดขั้นตอนการทำงานที่ซ้ำซ้อนและเพิ่มศักยภาพของระบบ",
    outcomes: ["การเชื่อมต่อที่เสถียร", "ลดงานซ้ำซ้อน", "เพิ่มประสิทธิภาพ Workflow"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-container section-spacing bg-neutral-50">
      <div className="max-w-3xl mb-20">
        <h2 className="heading-display text-display-md mb-6">
          Core Competencies
        </h2>
        <p className="text-lg text-neutral-600">
          บริการของเราครอบคลุมตั้งแต่การวางสถาปัตยกรรมไปจนถึงการแก้ไขปัญหาเชิงลึก
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="h-full p-8 bg-white border border-neutral-200 transition-all duration-300 hover:border-accent hover:shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start text-sm text-neutral-700"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
