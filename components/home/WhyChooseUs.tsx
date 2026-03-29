"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Layers,
  Users,
  Clock,
  BarChart3,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const reasons = [
  {
    icon: Zap,
    title: "AI-First Approach",
    description:
      "Every solution we build is infused with AI capabilities from day one — not added as an afterthought.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security, SOC 2 compliance, and best-in-class infrastructure to protect your data.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Built to grow with you — from MVP to millions of users without costly rewrites.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Senior engineers, designers, and AI specialists who have built products for top-tier companies.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Agile sprints, daily standups, and streamlined workflows mean you get to market faster.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: BarChart3,
    title: "Results-Driven",
    description:
      "We measure success in real metrics — conversions, revenue, and ROI — not just deliverables.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <SectionHeader
          badge="Why NexaAI"
          title="The partner you deserve for the future you want"
          highlight="future you want"
          description="We're not just a vendor — we're your strategic technology partner. Here's what sets us apart."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors group"
            >
              <div
                className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-xl ${reason.bg}`}
              >
                <reason.icon className={`w-5 h-5 ${reason.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
