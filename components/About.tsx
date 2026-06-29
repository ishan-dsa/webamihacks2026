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
    <section id="about" className="py-28 px-6 relative">
      <div
        className="absolute right-0 top-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,255,0,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          About the AmiHacks 2026
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              About {" "}
              <span className="neon-text">AMIHACKS</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-5">
  <span className="text-white font-medium">AMIHACKS 2026</span> is the flagship
  24-hour national hackathon organized by{" "}
  <span className="text-white font-medium">
    Amity School of Engineering &amp; Technology (ASET)
  </span>
  , Amity University Rajasthan, welcoming students from colleges and
  universities across India.
</p>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
  Participants from across India will collaborate, innovate and build
  impactful solutions in domains such as Artificial Intelligence,
  Cybersecurity, Web & App Development, Blockchain, IoT and Open
  Innovation during an exciting 24-hour hackathon experience.
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
                <div key={k} className="flex gap-3 text-sm">
                  <span className="text-white/30 min-w-[110px] font-mono-code">
                    {k}
                  </span>
                  <span className="text-white/70">{v}</span>
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
                  className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-neon" />
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
              className="col-span-2 glass-card-neon rounded-2xl p-6 flex items-center gap-4 hover:border-neon/25 transition-all"
            >
              <span className="text-3xl">🚀</span>
              <div>
                <p className="text-neon font-bold text-lg">
  Pan India Hackathon
</p>
<p className="text-white/50 text-sm mt-0.5">
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
