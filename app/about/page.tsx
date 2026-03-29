import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NexaAI — our mission, vision, and the team behind the magic.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 to-gray-950" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            About NexaAI
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            We&apos;re building the future{" "}
            <span className="gradient-text">one product at a time</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Founded in 2020, NexaAI started with a simple belief: that AI and great design together can fundamentally change how businesses operate and grow.
          </p>
        </div>
      </section>

      <AboutClient />

      <CTASection
        headline="Want to Work With Us?"
        subtext="We're always looking for exciting projects and talented collaborators. Let's build something great together."
        primaryLabel="Start a Project"
        secondaryLabel="View Open Roles"
      />
    </div>
  );
}
