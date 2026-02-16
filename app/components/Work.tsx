"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Online Ticket Booking Platform",
        category: "Frontend Development · Production System",
        challenge:
            "สร้างระบบจองบัตรออนไลน์ตั้งแต่เริ่มต้น โดยต้องรองรับการใช้งานจริง การชำระเงิน และการจัดการข้อมูลแบบ real-time",
        solution:
            "พัฒนา Frontend ด้วย React และ Next.js ใช้ TailwindCSS สำหรับระบบ UI และเชื่อมต่อ Firebase พร้อม API Integration เพื่อรองรับ workflow การจองบัตรแบบครบวงจร",
        result: "ระบบถูกนำไปใช้งานจริงในระดับ production สามารถรองรับการจองบัตรและการทำงานของผู้ใช้ได้",
        tech: [
            "React",
            "Next.js",
            "TailwindCSS",
            "Firebase",
            "API Integration",
        ],
        image: "/placeholder-project-4.jpg",
    },
    {
        title: "Website Platform (Admin + Main Site)",
        category: "Frontend Development · Full Platform Build",
        challenge:
            "พัฒนาแพลตฟอร์มเว็บไซต์ตั้งแต่เริ่มต้น โดยต้องออกแบบทั้งฝั่งผู้ดูแลระบบ (Admin) และหน้าหลักสำหรับผู้ใช้งานจริง ให้มีโครงสร้างที่ชัดเจนและรองรับการขยายในอนาคต",
        solution:
            "พัฒนา Frontend ด้วย Nuxt.js และ SCSS เชื่อมต่อกับ Laravel API พร้อมออกแบบโครงสร้าง Component และจัดการ State อย่างเป็นระบบ เพื่อให้ทั้งฝั่ง Admin และ Main Web ทำงานสอดคล้องกัน",
        result: "ได้ระบบที่พร้อมใช้งานจริงในระดับ production และสามารถต่อยอดฟีเจอร์ใหม่ได้โดยไม่ซับซ้อนเกินไป",
        tech: ["Laravel", "Nuxt.js", "SCSS", "JavaScript", "API Integration"],
        image: "/placeholder-project-2.jpg",
    },
    {
        title: "B2B E-Commerce Platform",
        category: "Frontend Development (Main Website)",
        challenge:
            "พัฒนาเว็บไซต์ B2B สำหรับการสั่งซื้อสินค้า โดยต้องเน้นความชัดเจนของข้อมูลสินค้า และประสบการณ์ใช้งานที่เหมาะกับลูกค้าองค์กร",
        solution:
            "พัฒนา Frontend ฝั่งหน้าบ้านด้วย Nuxt.js เชื่อมต่อกับ Laravel API พร้อมจัดโครงสร้างหน้าแสดงสินค้าและขั้นตอนการสั่งซื้อให้เข้าใจง่าย",
        result: "ได้หน้าเว็บไซต์ที่ตอบโจทย์การใช้งานเชิงธุรกิจ และสามารถเชื่อมต่อกับระบบหลังบ้านได้อย่างเสถียร",
        tech: ["Laravel", "Nuxt.js", "SCSS", "JavaScript", "API Integration"],
        image: "/placeholder-project-3.jpg",
    },
    {
        title: "Igetweb – Theme Customization Platform",
        category: "Frontend Development (In-house Project)",
        challenge:
            "แพลตฟอร์มเว็บไซต์สำเร็จรูปมีการออกแบบธีมใหม่อย่างต่อเนื่อง ซึ่งต้องพัฒนาและปรับแต่ง Frontend ให้รองรับดีไซน์ที่หลากหลายโดยไม่กระทบโครงสร้างหลักของระบบ",
        solution:
            "พัฒนาและปรับแต่งธีมด้วย PHP, CSS และ JavaScript โดยคำนึงถึงความยืดหยุ่นของ layout และความเข้ากันได้กับระบบเดิม เพื่อให้สามารถเพิ่มดีไซน์ใหม่ได้อย่างต่อเนื่อง",
        result: "ช่วยให้ทีมสามารถเปิดตัวธีมใหม่ได้รวดเร็วขึ้น พร้อมรักษามาตรฐานความเสถียรของแพลตฟอร์ม",
        tech: ["PHP", "CSS", "JavaScript"],
        image: "/placeholder-project-1.jpg",
    },
];

export default function Work() {
    return (
        <section id="work" className="section-container section-spacing">
            <div className="mb-20">
                <h2 className="heading-display text-display-md mb-6">
                    Work & Projects Experience
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
                    โปรเจกต์ที่เราได้ร่วมพัฒนาและขับเคลื่อนในบริบทของการทำงานจริง
                    ตั้งแต่การวางรากฐานระบบใหม่
                    ไปจนถึงการปรับปรุงและต่อยอดแพลตฟอร์มที่ใช้งานอยู่แล้ว
                    โดยให้ความสำคัญกับโครงสร้างที่ชัดเจน ความเสถียร
                    และประสบการณ์ของผู้ใช้งาน
                </p>
            </div>

            <div className="space-y-32">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                            <div className="relative aspect-[5/4] bg-neutral-100 border border-neutral-200 overflow-hidden group">
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
                            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6 leading-snug">
                                {project.title}
                            </h3>

                            <div className="space-y-4 mb-8 max-w-prose">
                                <div>
                                    <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                                        รายละเอียดการทำงาน
                                    </h4>
                                    <p className="text-neutral-600 leading-relaxed text-[15px]">
                                        {project.challenge} {project.solution}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                                        ผลลัพธ์
                                    </h4>
                                    <p className="text-neutral-900 font-medium leading-relaxed text-[15px]">
                                        {project.result}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200">
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
