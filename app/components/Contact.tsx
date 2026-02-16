"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle",
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate form submission - replace with actual API call
        setTimeout(() => {
            setStatus("sent");
            setFormData({ name: "", email: "", projectType: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section
            id="contact"
            className="section-container section-spacing bg-neutral-50"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-display text-display-md mb-6">
                        Let’s Start a Conversation
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                        หากคุณกำลังมองหาคนช่วยพัฒนา ปรับปรุง
                        หรือวางโครงสร้างระบบให้ชัดเจนขึ้น
                        สามารถส่งรายละเอียดโปรเจกต์มาได้ที่นี่
                        แล้วเราจะติดต่อกลับโดยเร็วที่สุด
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-neutral-700 mb-2"
                                >
                                    ชื่อผู้ติดต่อ
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 focus:border-accent focus:outline-none transition-colors"
                                    placeholder="เช่น สมหญิง ใจดี"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-neutral-700 mb-2"
                                >
                                    อีเมล
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 focus:border-accent focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="projectType"
                                    className="block text-sm font-medium text-neutral-700 mb-2"
                                >
                                    ลักษณะงานโดยประมาณ
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 focus:border-accent focus:outline-none transition-colors"
                                >
                                    <option value="">เลือกลักษณะงาน</option>
                                    <option value="ui-design">UI Design</option>
                                    <option value="frontend-dev">
                                        Frontend Development
                                    </option>
                                    <option value="bug-fixing">
                                        Bug Fixing & Optimization
                                    </option>
                                    <option value="api-integration">
                                        API Integration
                                    </option>
                                    <option value="refactoring">
                                        Refactoring
                                    </option>
                                    <option value="automation">
                                        Automation (n8n)
                                    </option>
                                    <option value="other">อื่นๆ</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-neutral-700 mb-2"
                                >
                                    รายละเอียดเพิ่มเติม
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 focus:border-accent focus:outline-none transition-colors resize-none"
                                    placeholder="เล่าให้ฟังสั้น ๆ ว่าต้องการทำอะไร มีปัญหาอะไรอยู่ หรือเป้าหมายของโปรเจกต์คืออะไร"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "sending" && "กำลังส่ง..."}
                                {status === "sent" && "ส่งข้อความเรียบร้อย ✓"}
                                {status === "idle" && "ส่งรายละเอียดโปรเจกต์"}
                                {status === "error" &&
                                    "เกิดข้อผิดพลาด กรุณาลองใหม่"}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                ช่องทางอื่น ๆ
                            </h3>
                            <div className="space-y-4">
                                <a
                                    href="mailto:phanlakhon.ort@gmail.com"
                                    className="flex items-center gap-3 text-neutral-700 hover:text-accent transition-colors group"
                                >
                                    <svg
                                        className="w-5 h-5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="group-hover:underline">
                                        phanlakhon.ort@gmail.com
                                    </span>
                                </a>

                                <a
                                    href="https://line.me/ti/p/byultae"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-neutral-700 hover:text-accent transition-colors group"
                                >
                                    <svg
                                        className="w-5 h-5 flex-shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                    </svg>
                                    <span className="group-hover:underline">
                                        Line ID
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-neutral-300">
                            <h3 className="text-xl font-semibold mb-4">
                                ช่วงเวลาติดต่อ
                            </h3>
                            <p className="text-neutral-600 mb-2">
                                จันทร์ - ศุกร์: 9:00 - 18:00
                            </p>
                            <p className="text-neutral-600 mb-6">
                                เสาร์ - อาทิตย์: ตามนัดหมาย
                            </p>
                            <p className="text-sm text-neutral-500">
                                ตอบกลับภายใน 24 ชั่วโมง
                            </p>
                        </div>

                        <div className="pt-8 border-t border-neutral-300">
                            <p className="text-neutral-700 leading-relaxed">
                                ยินดีพูดคุยทั้งงานใหม่ การปรับปรุงระบบเดิม
                                หรือการให้คำปรึกษาเชิงเทคนิค
                                สามารถติดต่อเข้ามาได้โดยไม่ต้องเตรียมข้อมูลครบถ้วนตั้งแต่ต้น
                                เราสามารถช่วยจัดโครงสร้างความคิดและขอบเขตงานร่วมกันได้
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
