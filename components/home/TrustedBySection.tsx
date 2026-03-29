"use client";

import { motion } from "framer-motion";

const brands = [
  "Acme Corp", "Vertex AI", "CloudBase", "NovaTech",
  "DataSync", "SwiftApp", "PulseAI", "NextWave",
];

export default function TrustedBySection() {
  return (
    <section className="py-14 border-y border-gray-100 dark:border-gray-800/50 overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 dark:text-gray-500 mb-10 tracking-widest uppercase">
          Trusted by innovative companies
        </p>
        <div className="relative flex overflow-x-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-gray-400 dark:text-gray-600 font-semibold text-lg tracking-tight hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
