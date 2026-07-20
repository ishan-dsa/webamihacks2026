"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Countdown from "./Countdown";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

const stats = [
  { value: "24", label: "Hours" },
  { value: "₹70K+", label: "Prize Pool" },
  { value: "For All", label: "Participation" },
  { value: "Captain + up to 3", label: "Team Members" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#05070f]"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      {/* Ambient glow blobs — cyan / violet instead of flat blue */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-10 right-0 w-[350px] h-[350px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,255,0,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-36 sm:pt-40 pb-20 text-center flex flex-col items-center">

        {/* Countdown */}
        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3 mb-5"
        >
          <p className="text-cyan-400 text-base sm:text-lg font-mono-code font-bold tracking-widest uppercase drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
            &lt;/&gt; Hackathon Begins In
          </p>
          <div className="[&_.countdown-box]:bg-[#0a0e1a] [&_.countdown-box]:border [&_.countdown-box]:border-cyan-500/30 [&_.countdown-box]:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            <Countdown />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-white/[0.03] border border-cyan-500/20 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#efff00] animate-pulse shadow-[0_0_8px_2px_rgba(239,255,0,0.6)]" />
          <span className="text-white text-xs font-mono-code tracking-widest uppercase">
            24th–25th September 2026 · Jaipur
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            {/* AMIHACKS Logo */}
            <Image
              src="/logo.png"
              alt="AMIHACKS Logo"
              width={520}
              height={260}
              priority
              className="h-20 sm:h-28 md:h-36 w-auto object-contain hover:scale-105 transition-all duration-300 drop-shadow-[0_0_25px_rgba(239,255,0,0.25)]"
            />

            {/* Glowing Divider */}
            <div className="hidden sm:block w-px h-20 bg-cyan-400/60 shadow-[0_0_15px_rgba(56,189,248,0.9)]" />

            {/* Amity Logo — wrapped in a light card so it stays legible on dark bg */}
            <div className="bg-white rounded-xl p-2 shadow-[0_0_25px_rgba(56,189,248,0.15)]">
              <Image
                src="/amity-logo.jpg"
                alt="Amity University Rajasthan"
                width={180}
                height={180}
                priority
                className="h-16 sm:h-24 md:h-28 w-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          custom={1.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono-code text-cyan-400/60 text-lg sm:text-xl tracking-[0.3em] mb-6"
        >
          2026
        </motion.div>

        {/* Prize Banner */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 flex justify-center"
        >
          <div className="rounded-full border border-cyan-500/20 bg-white/[0.03] backdrop-blur-sm px-3 sm:px-5 py-2 flex items-center gap-2 sm:gap-3 whitespace-nowrap">
            <span className="text-base sm:text-lg">🏆</span>
            <span className="text-cyan-300 font-bold text-[11px] sm:text-sm font-mono-code tracking-wide">
              ₹70K+ PRIZE POOL
            </span>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-base sm:text-lg">🎁</span>
            <span className="text-white font-semibold text-[11px] sm:text-sm font-mono-code tracking-wide">
              SWAGS & GOODIES
            </span>
          </div>
        </motion.div>

        {/* Typewriter Tagline */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 tracking-wide min-h-[48px] flex justify-center items-center"
        >
          <Typewriter />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          custom={2.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-white font-medium text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-justify drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
        >
          
          {"India's premier 24-hour hackathon, hosted by Amity School of Engineering & Technology, welcomes students from colleges and universities across India to innovate, collaborate, and build impactful solutions."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className="inline-block mr-1"
              >
                {word} 
              </motion.span>
            ))}
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          
            <a href="#register"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base px-8 py-3.5 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-[0_0_25px_rgba(56,189,248,0.4)]"
          >
            Register Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
            <a href="#about"
            className="inline-flex items-center gap-2 border border-cyan-500/30 bg-white/[0.03] backdrop-blur-sm text-slate-200 font-semibold text-base px-8 py-3.5 rounded-full hover:border-cyan-400/60 hover:bg-white/[0.06] transition-all duration-200"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono-code drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                {s.value}
              </span>
              <span className="text-white text-xs tracking-wider mt-0.5 uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

     
    </section>
  );
}
