"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, ChevronRight } from "lucide-react";

const badges = ["AI Automation", "Web Dev", "Mobile Apps", "UI/UX Design"];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "3x",   label: "Avg. ROI Increase" },
  { value: "24/7", label: "Support & Uptime" },
];

const floatingNodes = [
  { x: "8%",  y: "20%", size: 6,  delay: 0,    dur: 6 },
  { x: "88%", y: "15%", size: 8,  delay: 0.8,  dur: 7 },
  { x: "75%", y: "72%", size: 5,  delay: 1.4,  dur: 5.5 },
  { x: "14%", y: "68%", size: 7,  delay: 0.4,  dur: 8 },
  { x: "50%", y: "10%", size: 4,  delay: 2,    dur: 6.5 },
  { x: "92%", y: "50%", size: 5,  delay: 1.1,  dur: 7.5 },
  { x: "5%",  y: "45%", size: 4,  delay: 1.7,  dur: 6 },
  { x: "62%", y: "85%", size: 6,  delay: 0.6,  dur: 9 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* ── BACKGROUND ─────────────────────────────────────────── */}

      {/* Base — near-black, works as dark background on both themes */}
      <div className="absolute inset-0 bg-[#08091a]" />

      {/* Circuit / node-graph SVG pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.09 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="circuit-grid"
            x="0" y="0" width="120" height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal traces */}
            <path d="M0 60 H42" stroke="#6366f1" strokeWidth="0.7" fill="none" />
            <path d="M78 60 H120" stroke="#6366f1" strokeWidth="0.7" fill="none" />
            {/* Vertical traces */}
            <path d="M60 0 V42" stroke="#6366f1" strokeWidth="0.7" fill="none" />
            <path d="M60 78 V120" stroke="#6366f1" strokeWidth="0.7" fill="none" />
            {/* Corner L-bends */}
            <path d="M42 60 Q60 60 60 42" stroke="#a855f7" strokeWidth="0.7" fill="none" />
            <path d="M78 60 Q60 60 60 78" stroke="#a855f7" strokeWidth="0.7" fill="none" />
            {/* Junction nodes */}
            <circle cx="60"  cy="60"  r="3.5" fill="#6366f1" />
            <circle cx="60"  cy="42"  r="2"   fill="#a855f7" />
            <circle cx="60"  cy="78"  r="2"   fill="#a855f7" />
            <circle cx="42"  cy="60"  r="2"   fill="#a855f7" />
            <circle cx="78"  cy="60"  r="2"   fill="#a855f7" />
            {/* Corner markers */}
            <circle cx="0"   cy="0"   r="1.5" fill="#4f46e5" />
            <circle cx="120" cy="0"   r="1.5" fill="#4f46e5" />
            <circle cx="0"   cy="120" r="1.5" fill="#4f46e5" />
            <circle cx="120" cy="120" r="1.5" fill="#4f46e5" />
          </pattern>

          {/* Radial vignette so the pattern fades at edges */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="52%">
            <stop offset="20%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="vignetteMask">
            <rect width="100%" height="100%" fill="url(#vignette)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-grid)" mask="url(#vignetteMask)" />
      </svg>

      {/* Glow orbs */}
      <div className="absolute top-[15%] left-[8%]  w-[560px] h-[560px] rounded-full bg-indigo-600/25 blur-[130px] animate-pulse" />
      <div className="absolute bottom-[8%]  right-[6%] w-[480px] h-[480px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse [animation-delay:1.2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/8 blur-[150px]" />

      {/* Floating animated AI node dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingNodes.map((n, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-400/50"
            style={{ left: n.x, top: n.y, width: n.size, height: n.size }}
            animate={{ y: [0, -14, 0], opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: n.dur, delay: n.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Dashed connector lines between nodes */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.09 }} aria-hidden="true">
          <line x1="8%"  y1="20%" x2="14%" y2="68%" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 7" />
          <line x1="88%" y1="15%" x2="75%" y2="72%" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 7" />
          <line x1="50%" y1="10%" x2="88%" y2="15%" stroke="#c084fc" strokeWidth="1" strokeDasharray="4 7" />
          <line x1="5%"  y1="45%" x2="8%"  y2="20%" stroke="#c084fc" strokeWidth="1" strokeDasharray="4 7" />
        </svg>
      </div>

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* Announcement chip */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Introducing AI-first development workflows</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-0.5 transition-transform" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Build Smart.{" "}
            <span className="gradient-text">Scale Fast.</span>
            <br />
            Grow with{" "}
            <span className="relative inline-block">
              <span className="gradient-text">AI.</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We craft intelligent digital products — from AI automation to world-class apps — that help ambitious businesses outpace the competition.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-100"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <Play className="w-3 h-3 ml-0.5" />
              </span>
              Book a Demo
            </Link>
          </motion.div>

          {/* Service badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            <span className="text-sm text-gray-500 mr-1">Trusted for:</span>
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-white/[0.07] overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-7 px-4 hover:bg-white/[0.04] transition-colors ${
                i < stats.length - 1 ? "border-r border-white/[0.07]" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-white/[0.07]" : ""}`}
            >
              <span className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 text-center">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
}
