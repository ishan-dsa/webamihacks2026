"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 dark:bg-black/80 bg-white/80 backdrop-blur-md border-b border-white/5 dark:border-white/5 border-gray-300"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="AMIHACKS Logo"
            width={48}
            height={48}
            priority
            className="object-contain"
          />

          <div className="flex flex-col leading-none">
            <span className="font-mono-code text-lg font-bold neon-text">
              AMIHACKS
            </span>

            <span className="font-mono-code text-xs text-gray-700 dark:text-white/60 tracking-[0.3em]">
              2026
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 dark:text-white/60 hover:text-blue-600 dark:hover:text-white text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-neon text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-white transition-colors duration-200"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            className="text-white dark:text-white text-black p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-black/95 backdrop-blur-md border-t border-gray-300 dark:border-white/5 px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 dark:text-white/70 hover:text-blue-600 dark:hover:text-white text-base transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-neon text-black font-semibold px-5 py-2.5 rounded-full"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
