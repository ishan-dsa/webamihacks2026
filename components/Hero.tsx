"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Countdown from "./Countdown";

const REGISTER_URL = "https://forms.gle/AzrVWXLTmcJjGP9R7";

const stats = [
  { value: "24", label: "Hours" },
  { value: "₹70K+", label: "Prize Pool" },
  { value: "100+", label: "Participants" },
  { value: "6", label: "Tracks" },
  { value: "1–4", label: "Team Members" },
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-grid"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,255,0,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,255,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 glass-card-neon rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse-slow" />
          <span className="text-white/70 text-xs font-mono-code tracking-widest uppercase">
            24th–25th September 2026 · Jaipur
          </span>
        </motion.div>

        {/* Prize Banner */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <div className="glass-card-neon rounded-full px-5 py-2 flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <span className="neon-text font-bold text-sm font-mono-code tracking-wide">
              ₹70,000+ PRIZE POOL
            </span>
          </div>
          <div className="glass-card rounded-full px-5 py-2 flex items-center gap-2">
            <span className="text-lg">🎁</span>
            <span className="text-white/80 text-sm font-mono-code tracking-wide">
              SWAGS & GOODIES
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter mb-4"
        >
          <span className="neon-text neon-glow">AMI</span>
          <span className="text-white">HACKS</span>
        </motion.h1>

        <motion.div
          custom={1.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono-code text-white/30 text-lg sm:text-xl tracking-[0.3em] mb-6"
        >
          2026
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-wide"
        >
          LET THE CODE BEGIN
        </motion.p>

        {/* Subtitle */}
        <motion.p
          custom={2.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A flagship 24-hour innovation and coding hackathon bringing together
          developers, innovators, designers, and problem-solvers to build
          impactful solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-neon text-black font-bold text-base px-8 py-3.5 rounded-full hover:bg-white transition-all duration-200 shadow-[0_0_30px_rgba(239,255,0,0.3)] hover:shadow-[0_0_40px_rgba(239,255,0,0.5)]"
          >
            Register Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 glass-card text-white font-semibold text-base px-8 py-3.5 rounded-full hover:border-white/20 transition-all duration-200"
          >
            Learn More
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          custom={3.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3 mb-14"
        >
          <p className="text-white/30 text-xs font-mono-code tracking-widest uppercase">
            Hackathon Begins In
          </p>
          <Countdown />
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
              <span className="text-2xl sm:text-3xl font-bold neon-text font-mono-code">
                {s.value}
              </span>
              <span className="text-white/40 text-xs tracking-wider mt-0.5 uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20"
      >
        <span className="text-xs font-mono-code tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
