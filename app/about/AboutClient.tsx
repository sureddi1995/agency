"use client";

import { motion } from "framer-motion";
import { Target, Eye, Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Alex Morgan",
    role: "CEO & Co-founder",
    bio: "Former Google AI researcher. 12 years building AI products that scale to millions.",
    avatar: "AM",
    gradient: "from-violet-500 to-purple-600",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Priya Sharma",
    role: "CTO & Co-founder",
    bio: "Ex-Meta infrastructure engineer. Passionate about building systems that handle planet-scale load.",
    avatar: "PS",
    gradient: "from-blue-500 to-cyan-600",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Marcus Lee",
    role: "Head of Design",
    bio: "Lead designer at Figma and Stripe. Obsessed with the intersection of beauty and usability.",
    avatar: "ML",
    gradient: "from-pink-500 to-rose-600",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sofia Reyes",
    role: "Head of AI",
    bio: "PhD in ML from MIT. Built and deployed LLMs for Fortune 500 clients across multiple industries.",
    avatar: "SR",
    gradient: "from-green-500 to-emerald-600",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "James Obi",
    role: "Lead Mobile Engineer",
    bio: "10+ years in mobile development. Shipped apps with 50M+ combined downloads on iOS and Android.",
    avatar: "JO",
    gradient: "from-orange-500 to-amber-600",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Nadia Kova",
    role: "Head of Marketing",
    bio: "Growth hacker who scaled three startups to $10M ARR. Expert in AI-assisted content and SEO.",
    avatar: "NK",
    gradient: "from-indigo-500 to-blue-600",
    socials: { linkedin: "#", twitter: "#" },
  },
];

const values = [
  {
    icon: "🚀",
    title: "Relentless Execution",
    description: "We ship fast without cutting corners. Speed and quality are not trade-offs — they're both non-negotiable.",
  },
  {
    icon: "🤝",
    title: "Partnership First",
    description: "Your success is our success. We become embedded partners, not transactional vendors.",
  },
  {
    icon: "🧠",
    title: "AI-Native Thinking",
    description: "We don't just bolt AI on — we architect products from the ground up to leverage intelligence.",
  },
  {
    icon: "🌍",
    title: "Global Impact",
    description: "We build products that reach people across borders, languages, and industries.",
  },
];

export default function AboutClient() {
  return (
    <>
      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 leading-snug">
                  Empower businesses to compete in the AI era
                </h2>
                <p className="text-white/75 leading-relaxed">
                  We make cutting-edge AI and world-class software accessible to every business — not just the Fortune 500. Our mission is to be the catalyst that transforms ambitious companies into industry leaders through intelligent technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50">
                  <Eye className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Our Vision
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                A world where any team can build extraordinary products
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We envision a future where access to world-class AI and engineering talent is democratized. Where a two-person startup can launch a product that competes with tech giants — because they have NexaAI in their corner.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { value: "2020", label: "Founded" },
              { value: "45+", label: "Team Members" },
              { value: "150+", label: "Projects Launched" },
              { value: "30+", label: "Countries Served" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                What we stand for
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors text-center"
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              The Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              The people behind the magic
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              A diverse team of engineers, designers, and strategists united by a passion for building exceptional products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} text-white text-lg font-bold shrink-0`}
                  >
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-2">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
