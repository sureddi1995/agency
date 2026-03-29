"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 dark:border-white/5 bg-white/70 dark:bg-gray-950/80 backdrop-blur-2xl backdrop-saturate-150 shadow-lg shadow-black/5 dark:shadow-black/40"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md group-hover:shadow-indigo-500/40 transition-shadow">
                <Zap className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[1.15rem] font-bold tracking-tight text-white">
                Nexa<span className="gradient-text">AI</span>
              </span>
            </Link>

            {/* Desktop nav — pill container */}
            <nav className="hidden md:flex items-center">
              <div
                className={clsx(
                  "flex items-center gap-0.5 rounded-full p-1 transition-all duration-300",
                  scrolled
                    ? "bg-gray-100/80 dark:bg-gray-800/80"
                    : "bg-white/[0.08] border border-white/10"
                )}
              >
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        "relative px-4 py-1.5 text-[0.8125rem] font-medium rounded-full transition-colors duration-200",
                        active
                          ? "text-white"
                          : scrolled
                          ? "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {active && (
                        <motion.div
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-500/30"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={clsx(
                  "p-2 rounded-full transition-colors",
                  scrolled
                    ? "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                )}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <div className={clsx("w-px h-4 mx-1", scrolled ? "bg-gray-200 dark:bg-gray-700" : "bg-white/15")} />

              <Link
                href="/contact"
                className="group flex items-center gap-1.5 px-4 py-2 text-[0.8125rem] font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.04] active:scale-100"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile backdrop — separate AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer — separate AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-gray-950/95 backdrop-blur-2xl border-l border-white/10 md:hidden flex flex-col"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-bold text-white">
                  Nexa<span className="gradient-text">AI</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        active
                          ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/20"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                      {active && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Drawer footer */}
            <div className="px-4 pb-8 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/20"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
