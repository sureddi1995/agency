"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  const fullTitle = highlight
    ? title.replace(highlight, `<mark>${highlight}</mark>`)
    : title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center max-w-3xl mx-auto mb-16" : "max-w-2xl mb-12"}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
        dangerouslySetInnerHTML={{
          __html: fullTitle.replace(
            "<mark>",
            '<span class="gradient-text">'
          ).replace("</mark>", "</span>"),
        }}
      />
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
