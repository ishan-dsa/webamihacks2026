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
          ? "bg-[#05070f]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_0_25px_rgba(56,189,248,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="AMIHACKS Logo"
            width={72}
            height={72}
            priority
            className="object-contain w-16 h-16 sm:w-[72px] sm:h-[72px]"
          />
          <div className="flex flex-col leading-none">
            <span className="font-mono-code text-xl sm:text-2xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]">
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
              className="text-white hover:text-cyan-400 text-xl font-bold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Register Button */}
        <a
          href="#register"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-base font-bold px-6 py-3 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
        >
          Register Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#05070f]/95 backdrop-blur-xl border-t border-cyan-500/20 px-6 py-6 flex flex-col gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white hover:text-cyan-400 text-xl font-bold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-5 py-3 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
