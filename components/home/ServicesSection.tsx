"use client";

import Link from "next/link";
import {
  Bot,
  Globe,
  Smartphone,
  Layout,
  Palette,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: Bot,
    title: "AI Services",
    description:
      "Custom AI solutions that automate workflows, generate insights, and create intelligent experiences across your business.",
    features: ["Chatbots & Assistants", "Process Automation", "Predictive Analytics", "Generative AI"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "Web App Development",
    description:
      "Scalable SaaS platforms, dashboards, and APIs built with modern frameworks for performance and reliability.",
    features: ["SaaS Platforms", "Admin Dashboards", "REST & GraphQL APIs", "Cloud Infrastructure"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android, crafted for exceptional user experiences.",
    features: ["iOS & Android", "React Native / Flutter", "Offline-first apps", "App Store Publishing"],
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Layout,
    title: "Website Development",
    description:
      "High-converting business sites and landing pages with blazing-fast performance and stunning design.",
    features: ["Business Websites", "Landing Pages", "E-commerce", "CMS Integration"],
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, user-centric design systems and interfaces that delight users and drive conversions.",
    features: ["Design Systems", "Figma Prototypes", "User Research", "Brand Identity"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies powered by AI analytics to grow your audience and revenue.",
    features: ["SEO & Content", "Paid Advertising", "Social Media", "Email Campaigns"],
    gradient: "from-orange-500 to-amber-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <SectionHeader
          badge="What We Do"
          title="Everything you need to build and grow"
          highlight="build and grow"
          description="From AI-powered automation to pixel-perfect design — we bring together the expertise and technology to make your vision real."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
