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
                    <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
                        Personal Portfolio · Frontend-Focused Freelance
                    </p>

                    <h1 className="heading-display text-display-xl mb-8 leading-tight">
                        Frontend Architecture
                        <br className="hidden md:block" />
                        with Clarity & Craft
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-12 leading-relaxed">
                        นี่คือพื้นที่ส่วนตัวและงานรับอิสระของเรา โดยโฟกัสหลักที่
                        Frontend Development และการออกแบบโครงสร้างที่อ่านง่าย
                        ดูแลรักษาง่าย และขยายต่อได้ในอนาคต

                        สามารถทำงานฝั่ง Backend ได้ในระดับที่จำเป็นต่อการเชื่อมระบบ
                        แต่จะเน้นงานที่ต้องการความละเอียดในฝั่ง UI, UX และ Architecture เป็นหลัก
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#services" className="btn-primary">
                            Discuss Your Frontend Project
                        </Link>
                        <Link href="#contact" className="btn-outline">
                            Explore Selected Work
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 pt-12 border-t border-neutral-200"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                                Architecture First
                            </p>
                            <p className="text-base text-neutral-700 leading-relaxed">
                                ออกแบบระบบก่อนเขียนโค้ด
                                เพื่อให้ทุกการตัดสินใจรองรับการเติบโตในระยะยาว
                                ไม่ใช่เพียงการแก้ปัญหาระยะสั้น
                            </p>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                                Performance by Design
                            </p>
                            <p className="text-base text-neutral-700 leading-relaxed">
                                โครงสร้างที่ถูกออกแบบให้เร็วตั้งแต่ต้น ลด
                                Technical Debt
                                และเพิ่มคุณภาพประสบการณ์ผู้ใช้อย่างเป็นระบบ
                            </p>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                                Long-Term Partnership
                            </p>
                            <p className="text-base text-neutral-700 leading-relaxed">
                                ทำงานร่วมกับทีมในฐานะพาร์ทเนอร์เชิงกลยุทธ์
                                ไม่ใช่เพียงผู้รับจ้างพัฒนา
                                แต่เป็นผู้ร่วมออกแบบทิศทางผลิตภัณฑ์
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
