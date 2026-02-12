"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Frontend Development",
    challenge:
      "แพลตฟอร์มอีคอมเมิร์ซเดิมมีปัญหาด้านความเร็วและ UX ที่ไม่ลื่นไหล ส่งผลให้อัตราการซื้อต่ำ",
    solution:
      "ออกแบบ UI ใหม่ทั้งหมด ปรับปรุง Performance ด้วย React และ Next.js พร้อม optimize ขั้นตอนการสั่งซื้อให้สั้นลง",
    result: "เพิ่ม Conversion Rate 45% และลดเวลา Page Load 60%",
    tech: ["React", "Next.js", "TailwindCSS", "Stripe API"],
    image: "/placeholder-project-1.jpg",
  },
  {
    title: "SaaS Dashboard",
    category: "UI Design + Development",
    challenge:
      "แดชบอร์ดเดิมซับซ้อนเกินไป ผู้ใช้หาข้อมูลไม่เจอ และไม่ responsive บนมือถือ",
    solution:
      "ออกแบบ Information Architecture ใหม่ สร้าง Design System และพัฒนา Dashboard ที่ใช้งานง่ายทุกอุปกรณ์",
    result: "ลด Support Tickets 35% และเพิ่ม User Engagement 50%",
    tech: ["React", "TypeScript", "Recharts", "REST API"],
    image: "/placeholder-project-2.jpg",
  },
  {
    title: "Automation Workflow System",
    category: "n8n Integration",
    challenge:
      "ทีมใช้เวลามากกับงานซ้ำซ้อน เช่น การส่งรายงาน อัปเดตข้อมูล และจัดการเอกสาร",
    solution:
      "สร้าง Automation Workflows ด้วย n8n เชื่อมต่อกับ Google Sheets, Slack, Email และ CRM",
    result: "ประหยัดเวลา 20 ชั่วโมง/สัปดาห์ และลดข้อผิดพลาดจากการทำงานด้วยมือ",
    tech: ["n8n", "Webhook", "Google API", "Slack API"],
    image: "/placeholder-project-3.jpg",
  },
  {
    title: "Corporate Website Redesign",
    category: "UI Design + Frontend",
    challenge:
      "เว็บไซต์บริษัทดูล้าสมัย ไม่สะท้อนภาพลักษณ์แบรนด์ที่ทันสมัย และ SEO ต่ำ",
    solution:
      "Redesign ทั้งหมดด้วยแนวทาง Minimal Luxury พัฒนาด้วย Next.js พร้อม optimize SEO และ Core Web Vitals",
    result: "เพิ่ม Organic Traffic 80% ภายใน 3 เดือน และได้รับคำชมจากลูกค้าเป็นจำนวนมาก",
    tech: ["Next.js", "Framer Motion", "SEO Optimization"],
    image: "/placeholder-project-4.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-container section-spacing">
      <div className="max-w-3xl mb-20">
        <h2 className="heading-display text-display-md mb-6">
          ผลงานที่คัดสรร
        </h2>
        <p className="text-lg text-neutral-600">
          โปรเจกต์ที่ผ่านมา แต่ละอันมีเรื่องราว ความท้าทาย และผลลัพธ์ที่เป็นรูปธรรม
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/5 to-neutral-900/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                  {/* Placeholder for project image */}
                  <svg
                    className="w-20 h-20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                {project.category}
              </p>
              <h3 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                {project.title}
              </h3>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                    ความท้าทาย
                  </h4>
                  <p className="text-neutral-700 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                    วิธีแก้ปัญหา
                  </h4>
                  <p className="text-neutral-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                    ผลลัพธ์
                  </h4>
                  <p className="text-neutral-900 font-medium leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
