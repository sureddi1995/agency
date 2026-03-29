"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  headline = "Ready to Build Something Remarkable?",
  subtext = "Join hundreds of businesses scaling with AI-powered solutions. Let's turn your vision into reality.",
  primaryLabel = "Get Started Free",
  primaryHref = "/contact",
  secondaryLabel = "Book a Demo",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient opacity-90" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {headline}
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-600 font-semibold text-sm hover:bg-gray-50 transition-all hover:scale-105 active:scale-100 shadow-xl shadow-black/20"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={secondaryHref}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all hover:scale-105 active:scale-100"
            >
              <Calendar className="w-4 h-4" />
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
