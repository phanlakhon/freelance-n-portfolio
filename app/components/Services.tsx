"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");

  const serviceKeys = ["item1", "item2", "item3"] as const;

  return (
    <section id="services" className="section-container section-spacing bg-neutral-50">
      <div className="mb-20">
        <h2 className="heading-display text-display-md mb-6">
          {t("title")}
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          {t("description")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceKeys.map((key, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="h-full p-8 bg-white border border-neutral-200 transition-all duration-300 hover:border-accent hover:shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-accent transition-colors">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {t(`items.${key}.description`)}
              </p>
              <ul className="space-y-2">
                {[1, 2, 3].map((num) => (
                  <li
                    key={num}
                    className="flex items-start text-sm text-neutral-700"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                    {t(`items.${key}.outcome${num}`)}
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
