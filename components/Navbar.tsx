"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
  ? "bg-white/90 backdrop-blur-xl border-b border-blue-200 shadow-sm"
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
            <span className="font-mono-code text-lg font-bold text-blue-700">
              AMIHACKS
            </span>

            
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Register Button */}
        <a
          href="#register"
          className="hidden md:inline-flex items-center gap-2 bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-800 transition-all duration-200 shadow-md"
        >
          Register Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-blue-200 px-6 py-6 flex flex-col gap-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-700 hover:text-blue-700 text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-blue-800 transition-all"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
