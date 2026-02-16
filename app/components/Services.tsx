"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Architecture & Development",
    description:
      "ออกแบบและพัฒนาโครงสร้าง Frontend สำหรับผลิตภัณฑ์ดิจิทัลที่ต้องการความชัดเจนในระบบและความยืดหยุ่นในระยะยาว โดยเลือกใช้เทคโนโลยีที่เหมาะสมกับบริบทของโปรเจกต์ ไม่ใช่เพียงตามกระแส",
    outcomes: [
      "โครงสร้างที่อ่านง่ายและขยายต่อได้",
      "ลดความซับซ้อนในระยะยาว",
      "รองรับการเติบโตของทีมและโปรดักต์",
    ],
  },
  {
    title: "Legacy Frontend Refactoring",
    description:
      "วิเคราะห์และปรับปรุงระบบ Frontend เดิมที่มีปัญหาเชิงโครงสร้างหรือประสิทธิภาพ เพื่อให้กลับมาทำงานได้อย่างมีเสถียรภาพ พร้อมทั้งจัดระเบียบโค้ดให้ทีมสามารถทำงานต่อได้อย่างมั่นใจ",
    outcomes: [
      "ลด Technical Debt อย่างเป็นระบบ",
      "เพิ่มประสิทธิภาพและความเสถียร",
      "โค้ดที่ทีมเข้าใจและดูแลต่อได้ง่าย",
    ],
  },
  {
    title: "API Integration & Frontend Automation",
    description:
      "เชื่อมต่อ Frontend เข้ากับ Backend API อย่างมีโครงสร้าง พร้อมออกแบบ Workflow ที่ช่วยลดขั้นตอนซ้ำซ้อน เพื่อให้ระบบทำงานได้ลื่นไหลและรองรับการใช้งานจริง",
    outcomes: [
      "การเชื่อมต่อที่เสถียรและคาดการณ์ได้",
      "ลดงาน manual ที่ไม่จำเป็น",
      "ประสบการณ์ผู้ใช้ที่ต่อเนื่องมากขึ้น",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-container section-spacing bg-neutral-50">
      <div className="mb-20">
        <h2 className="heading-display text-display-md mb-6">
          How We Can Collaborate
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          งานที่เรารับจะเน้นฝั่ง Frontend เป็นหลัก ตั้งแต่การวางโครงสร้างระบบใหม่
          ไปจนถึงการปรับปรุงระบบเดิมให้ทำงานได้อย่างมีประสิทธิภาพและยั่งยืน
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
