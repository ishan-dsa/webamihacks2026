"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Cpu, Target, Users } from "lucide-react";

const highlights = [
  { icon: Lightbulb, label: "Innovation" },
  { icon: Cpu, label: "Technology" },
  { icon: Target, label: "Problem Solving" },
  { icon: Users, label: "Collaboration" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-4 relative bg-[#05070f] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute right-0 top-0 w-96 h-96 pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute left-0 bottom-0 w-80 h-80 pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Faint grid, consistent with Hero */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
        
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              About{" "}
              <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                AMIHACKS
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-5 text-justify">
              <span className="text-white font-semibold">AMIHACKS 2026</span> is the
              flagship 24-hour national hackathon organized by{" "}
              <span className="text-white font-semibold">
                Amity School of Engineering &amp; Technology (ASET)
              </span>
              , Amity University Rajasthan, welcoming students from colleges and
              universities across India.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 text-justify">
              Participants from across India will collaborate, innovate and build
              impactful solutions during an exciting 24-hour hackathon experience.
            </p>

            {/* Meta info */}
            <div className="flex flex-col gap-2">
              {[
                ["Organized By", "Amity School of Engineering & Technology (ASET)"],
                ["University", "Amity University Rajasthan"],
                ["Participation", "Open to Students Across India"],
                ["Venue", "Amity University Rajasthan, Jaipur"],
                ["Duration", "24–25 September 2026 · 24 Hours"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex gap-3 text-sm border-l border-cyan-500/20 pl-3 py-0.5"
                >
                  <span className="text-cyan-400/70 min-w-[110px] font-mono-code">
                    {k}
                  </span>
                  <span className="text-slate-300">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-2xl p-6 bg-white/[0.03] border border-cyan-500/15 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <p className="text-white font-semibold text-base">{h.label}</p>
                </motion.div>
              );
            })}

            {/* Entrepreneurship card — spans full */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-2 rounded-2xl p-6 flex flex-col items-center text-center gap-2 bg-gradient-to-r from-cyan-500/[0.06] to-purple-500/[0.06] border border-cyan-500/15 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all"
            >
              <span className="text-3xl">🚀</span>
              <div>
                <p className="text-cyan-400 font-bold text-lg">Pan India Hackathon</p>
                <p className="text-slate-400 text-sm mt-0.5">
                  Open to colleges and universities across India
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
