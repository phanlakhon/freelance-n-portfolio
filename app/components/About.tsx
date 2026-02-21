"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="section-container section-spacing bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-6 text-center md:text-left">
            <p className="text-xl text-neutral-700 leading-relaxed">
              {t("para1")}
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              {t("para2")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
