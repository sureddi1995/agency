"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "FinEdge Inc.",
    avatar: "SC",
    avatarGradient: "from-violet-500 to-purple-600",
    rating: 5,
    text: "NexaAI transformed our data pipeline with custom ML models. Processing time dropped by 80% and accuracy improved dramatically. They delivered on time, every sprint.",
  },
  {
    name: "Marcus Rivera",
    role: "Founder & CEO",
    company: "LaunchPad SaaS",
    avatar: "MR",
    avatarGradient: "from-blue-500 to-cyan-600",
    rating: 5,
    text: "We went from idea to launched product in 10 weeks. The team built our entire SaaS platform — React frontend, Node backend, and AI features — all beautifully integrated.",
  },
  {
    name: "Priya Nair",
    role: "Head of Product",
    company: "HealthFlow",
    avatar: "PN",
    avatarGradient: "from-pink-500 to-rose-600",
    rating: 5,
    text: "The mobile app NexaAI built for us has a 4.9-star rating on both app stores. Their attention to UX detail and the AI recommendations feature set us apart from competitors.",
  },
  {
    name: "James Okafor",
    role: "VP Engineering",
    company: "RetailPulse",
    avatar: "JO",
    avatarGradient: "from-green-500 to-emerald-600",
    rating: 5,
    text: "Their AI chatbot reduced our support tickets by 60% in the first month. The integration was seamless, the quality was top-notch, and the ROI was immediate.",
  },
  {
    name: "Anika Schultz",
    role: "Marketing Director",
    company: "BrandBoost",
    avatar: "AS",
    avatarGradient: "from-orange-500 to-amber-600",
    rating: 5,
    text: "NexaAI redesigned our entire digital presence — website, brand system, and ad creatives. Our conversion rate tripled within two months of launch.",
  },
  {
    name: "David Park",
    role: "Co-founder",
    company: "EdTech Ventures",
    avatar: "DP",
    avatarGradient: "from-indigo-500 to-blue-600",
    rating: 5,
    text: "Exceptional communication, clean code, and deep technical expertise. They handled everything from architecture to deployment. Will absolutely work with them again.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <SectionHeader
          badge="Testimonials"
          title="Trusted by founders and teams worldwide"
          highlight="founders and teams"
          description="Don't just take our word for it — hear from the people who've built with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg transition-all"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-indigo-100 dark:text-indigo-900 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarGradient} text-white text-sm font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
