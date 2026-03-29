"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  Code2,
  Rocket,
  RefreshCw,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description:
      "We start with a deep-dive session to understand your goals, users, and technical landscape. We map out a clear strategy and roadmap.",
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design & Prototype",
    description:
      "Our designers create wireframes and high-fidelity prototypes. You see and feel your product before a single line of code is written.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & Integrate",
    description:
      "Agile sprints with daily progress updates. We build with modern tech stacks, integrate AI capabilities, and ensure code quality.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Deploy",
    description:
      "Thorough QA, performance optimization, and a seamless deployment to production with zero-downtime releases.",
    color: "from-green-500 to-emerald-600",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Grow & Optimize",
    description:
      "Post-launch, we monitor, analyze, and iterate. Continuous improvements powered by data and user feedback.",
    color: "from-orange-500 to-amber-600",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <SectionHeader
          badge="How We Work"
          title="Our proven process for shipping great products"
          highlight="great products"
          description="A structured approach that minimizes risk, maximizes speed, and ensures you always know what's happening."
        />

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-700 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl mb-5`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
