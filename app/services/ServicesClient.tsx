"use client";

import {
  Bot,
  Globe,
  Smartphone,
  Layout,
  Palette,
  TrendingUp,
  Brain,
  Workflow,
  BarChart3,
  Wand2,
  ShoppingCart,
  FileCode,
  Wifi,
  Share2,
  Mail,
  Search,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";

const serviceCategories = [
  {
    id: "ai",
    badge: "AI Solutions",
    title: "Intelligent Systems That Work For You",
    highlight: "Work For You",
    description:
      "We build custom AI solutions that automate complex workflows, surface actionable insights, and create experiences that feel magical.",
    services: [
      {
        icon: Brain,
        title: "Custom AI Models",
        description:
          "Fine-tuned LLMs and ML models trained on your data for domain-specific tasks with superior accuracy.",
        features: ["Model Fine-tuning", "RAG Systems", "Vector Databases", "Custom Embeddings"],
        gradient: "from-violet-500 to-purple-600",
      },
      {
        icon: Bot,
        title: "Chatbots & AI Assistants",
        description:
          "Intelligent conversational agents for customer support, sales, HR, and internal knowledge bases.",
        features: ["Multi-channel Deployment", "Context Awareness", "Human Handoff", "Analytics Dashboard"],
        gradient: "from-purple-500 to-pink-600",
      },
      {
        icon: Workflow,
        title: "Process Automation",
        description:
          "End-to-end AI automation pipelines that eliminate repetitive tasks and accelerate operations.",
        features: ["Document Processing", "Email Automation", "Data Extraction", "Workflow Orchestration"],
        gradient: "from-indigo-500 to-violet-600",
      },
      {
        icon: BarChart3,
        title: "Predictive Analytics",
        description:
          "AI-driven forecasting and anomaly detection to help you make smarter, faster decisions.",
        features: ["Sales Forecasting", "Churn Prediction", "Demand Planning", "Real-time Dashboards"],
        gradient: "from-blue-500 to-indigo-600",
      },
      {
        icon: Wand2,
        title: "Generative AI",
        description:
          "Content generation, image synthesis, and creative AI tools that scale your creative output.",
        features: ["Content Creation", "Image Generation", "Video Synthesis", "Brand Voice AI"],
        gradient: "from-pink-500 to-rose-600",
      },
    ],
  },
  {
    id: "web",
    badge: "Web Development",
    title: "Scalable Web Applications Built to Last",
    highlight: "Built to Last",
    description:
      "From complex SaaS platforms to internal tools, we engineer web applications that handle scale and deliver exceptional performance.",
    services: [
      {
        icon: Globe,
        title: "SaaS Platform Development",
        description:
          "Full-stack SaaS applications with multi-tenancy, billing integration, and enterprise-grade architecture.",
        features: ["Multi-tenant Architecture", "Stripe Integration", "Auth & Permissions", "Admin Panel"],
        gradient: "from-blue-500 to-cyan-600",
      },
      {
        icon: BarChart3,
        title: "Admin Dashboards",
        description:
          "Real-time data dashboards with charts, tables, filters, and role-based access control.",
        features: ["Real-time Updates", "Data Visualization", "Export & Reports", "Role Management"],
        gradient: "from-cyan-500 to-teal-600",
      },
      {
        icon: FileCode,
        title: "APIs & Backend Services",
        description:
          "RESTful and GraphQL APIs with high availability, caching, and comprehensive documentation.",
        features: ["REST & GraphQL", "Microservices", "WebSockets", "API Documentation"],
        gradient: "from-teal-500 to-green-600",
      },
    ],
  },
  {
    id: "mobile",
    badge: "Mobile Development",
    title: "Mobile Experiences Users Love",
    highlight: "Users Love",
    description:
      "Native-quality iOS and Android apps built with React Native and Flutter — from concept to App Store.",
    services: [
      {
        icon: Smartphone,
        title: "iOS & Android Apps",
        description:
          "Cross-platform apps that feel native, perform beautifully, and scale with your user base.",
        features: ["React Native / Flutter", "Offline Support", "Push Notifications", "Biometrics"],
        gradient: "from-indigo-500 to-blue-600",
      },
      {
        icon: Wifi,
        title: "IoT & Connected Apps",
        description:
          "Mobile apps that connect to hardware, sensors, and smart devices for innovative use cases.",
        features: ["Bluetooth LE", "MQTT Protocol", "Real-time Sync", "Edge Computing"],
        gradient: "from-blue-500 to-violet-600",
      },
      {
        icon: ShoppingCart,
        title: "Mobile Commerce",
        description:
          "High-converting m-commerce apps with seamless checkout, loyalty programs, and personalization.",
        features: ["In-app Purchases", "Apple/Google Pay", "AR Try-on", "Wishlist & Recommendations"],
        gradient: "from-green-500 to-emerald-600",
      },
    ],
  },
  {
    id: "design",
    badge: "UI/UX Design",
    title: "Design That Converts and Delights",
    highlight: "Converts and Delights",
    description:
      "Every pixel matters. Our designers craft interfaces that are not just beautiful — they're strategically designed to drive results.",
    services: [
      {
        icon: Palette,
        title: "Product Design",
        description:
          "End-to-end product design from user research and wireframes to polished Figma prototypes.",
        features: ["User Research", "Wireframing", "Figma Prototypes", "Usability Testing"],
        gradient: "from-pink-500 to-rose-600",
      },
      {
        icon: Layout,
        title: "Design Systems",
        description:
          "Scalable design systems and component libraries that keep your product consistent as it grows.",
        features: ["Component Library", "Style Guide", "Token System", "Dev Handoff"],
        gradient: "from-rose-500 to-orange-600",
      },
    ],
  },
  {
    id: "marketing",
    badge: "Digital Marketing",
    title: "Growth Strategies Powered by AI",
    highlight: "Powered by AI",
    description:
      "Data-driven marketing that combines AI analytics with proven strategies to acquire, retain, and delight your customers.",
    services: [
      {
        icon: Search,
        title: "SEO & Content Strategy",
        description:
          "AI-assisted SEO and content programs that drive organic traffic and establish authority.",
        features: ["Technical SEO", "Content Calendar", "Link Building", "Keyword Clusters"],
        gradient: "from-orange-500 to-amber-600",
      },
      {
        icon: TrendingUp,
        title: "Paid Advertising",
        description:
          "Performance campaigns on Google, Meta, and LinkedIn with AI-powered bidding and creative.",
        features: ["Google Ads", "Meta Ads", "LinkedIn B2B", "A/B Testing"],
        gradient: "from-yellow-500 to-orange-600",
      },
      {
        icon: Share2,
        title: "Social Media Management",
        description:
          "Consistent brand presence across platforms with AI-assisted content creation and scheduling.",
        features: ["Content Creation", "Community Management", "Influencer Outreach", "Analytics"],
        gradient: "from-red-500 to-pink-600",
      },
      {
        icon: Mail,
        title: "Email Marketing",
        description:
          "Segmented, personalized email campaigns and automation sequences that nurture and convert.",
        features: ["Drip Campaigns", "Segmentation", "A/B Testing", "Deliverability Optimization"],
        gradient: "from-purple-500 to-indigo-600",
      },
    ],
  },
];

export default function ServicesClient() {
  return (
    <>
      {serviceCategories.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section-padding ${catIndex % 2 === 1 ? "bg-gray-50 dark:bg-gray-900/50" : ""}`}
        >
          <div className="container-max">
            <SectionHeader
              badge={cat.badge}
              title={cat.title}
              highlight={cat.highlight}
              description={cat.description}
              centered={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((service, i) => (
                <ServiceCard key={service.title} {...service} index={i} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Let's Build Your Next Big Thing"
        subtext="Tell us about your project and we'll get back to you within 24 hours with a custom proposal."
        primaryLabel="Start a Project"
        secondaryLabel="Explore Case Studies"
      />
    </>
  );
}
