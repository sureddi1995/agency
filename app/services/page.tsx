import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of AI, web, mobile, design, and marketing services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 to-gray-950" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Full-spectrum digital{" "}
              <span className="gradient-text">expertise</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              From AI-powered automation to stunning mobile experiences — we cover every layer of the modern digital stack.
            </p>
          </div>
        </div>
      </section>

      <ServicesClient />
    </div>
  );
}
