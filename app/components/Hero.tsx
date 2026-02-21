"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("Hero");

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

                    <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-12 leading-relaxed whitespace-pre-line">
                        {t("description")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#contact" className="btn-primary">
                            {t("btn_discuss")}
                        </Link>
                        <Link href="#work" className="btn-outline">
                            {t("btn_explore")}
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
                                {t("feature_1_title")}
                            </p>
                            <p className="text-base text-neutral-700 leading-relaxed">
                                {t("feature_1_desc")}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                                {t("feature_2_title")}
                            </p>
                            <p className="text-base text-neutral-700 leading-relaxed">
                                {t("feature_2_desc")}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
                                {t("feature_3_title")}
                            </p>
                            <p className="text-base text-neutral-700 leading-relaxed">
                                {t("feature_3_desc")}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
