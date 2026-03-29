"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Calendar,
  Zap,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@nexaai.com",
    description: "We reply within 24 hours",
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/50",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 000-0000",
    description: "Mon–Fri, 9am–6pm PST",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-950/50",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "San Francisco, CA",
    description: "By appointment only",
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-950/50",
  },
];

const services = [
  "AI Solutions",
  "Web Application",
  "Mobile App",
  "Website Development",
  "UI/UX Design",
  "Digital Marketing",
  "Other",
];

const budgets = [
  "< $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export default function ContactClient() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 to-gray-950" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Let&apos;s build{" "}
              <span className="gradient-text">something great</span>{" "}
              together
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Tell us about your project and we&apos;ll get back with a tailored proposal within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact methods */}
              <div className="space-y-4">
                {contactMethods.map((method, i) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                  >
                    <div
                      className={`flex items-center justify-center w-11 h-11 rounded-xl ${method.bg} shrink-0`}
                    >
                      <method.icon className={`w-5 h-5 ${method.color}`} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                        {method.title}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {method.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {method.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick actions */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                <h3 className="font-semibold mb-4">Quick Options</h3>
                <div className="space-y-3">
                  <a
                    href="#form"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Send a Message</div>
                      <div className="text-xs text-white/70">Fill out the form below</div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto shrink-0" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Book a Call</div>
                      <div className="text-xs text-white/70">30-min strategy session</div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto shrink-0" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Zap className="w-4 h-4 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Get a Quick Quote</div>
                      <div className="text-xs text-white/70">Response within 2 hours</div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3" id="form">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-950/50 mb-5">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                      Thanks for reaching out, {form.name.split(" ")[0]}! We&apos;ll review your project details and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
                      }}
                      className="mt-8 px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Tell us about your project
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        The more detail you share, the better we can help.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane Smith"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Service Needed <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm"
                        >
                          <option value="">Select budget</option>
                          {budgets.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-100"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                      By submitting, you agree to our{" "}
                      <a href="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Privacy Policy
                      </a>
                      . We&apos;ll never share your data.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
