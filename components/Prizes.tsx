"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const prizes = [
  {
    emoji: "🏆",
    rank: "Winner",
    label: "1st Place",
    amount: "Grand Prize",
    highlight: true,
    desc: "Cash prize + trophy + swag kit + certificate",
  },
  {
    emoji: "🥈",
    rank: "Runner Up",
    label: "2nd Place",
    amount: "Runner's Prize",
    highlight: false,
    desc: "Cash prize + certificate + exclusive goodies",
  },
];

const perks = [
  {
    emoji: "🎁",
    label: "Special Awards",
    desc: "Domain-specific recognition across all tracks",
  },
  {
    emoji: "🎒",
    label: "Swags & Goodies",
    desc: "Every participant gets exclusive AMIHACKS swag",
  },
  {
    emoji: "📜",
    label: "Certificates",
    desc: "Verified certificates for all participants",
  },
  {
    emoji: "🤝",
    label: "Networking",
    desc: "Connect with industry professionals and alumni",
  },
];

export default function Prizes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="prizes"
      className="relative py-28 px-6 overflow-hidden bg-[#05070f]"
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

      {/* Ambient glow blobs — cyan / violet / gold, matching Hero */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.13) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,255,0,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-cyan-400/70 font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          &lt;/&gt; Rewards
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Prize Pool Worth{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            ₹70,000+
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-400 text-lg mb-16 max-w-lg"
        >
          Competitive cash prizes, recognition, and career-building
          opportunities await.
        </motion.p>

        {/* Podium cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {prizes.map((p, i) => (
            <motion.div
              key={p.rank}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-8 relative overflow-hidden transition-all backdrop-blur-sm
              ${
                p.highlight
                  ? "bg-white/[0.03] border border-cyan-400/40 shadow-[0_0_40px_rgba(56,189,248,0.15)]"
                  : "bg-white/[0.03] border border-cyan-500/20"
              }`}
            >
              {p.highlight && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold font-mono-code px-2 py-0.5 rounded-full tracking-widest shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  TOP PRIZE
                </div>
              )}
              <div className="text-4xl mb-4">{p.emoji}</div>
              <div className="text-slate-400 text-xs font-mono-code tracking-widest uppercase mb-1">
                {p.label}
              </div>
              <h3
                className={`text-2xl font-bold mb-1 ${
                  p.highlight ? "text-cyan-400" : "text-white"
                }`}
              >
                {p.rank}
              </h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Perks grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.07 }}
              className="rounded-xl p-5 flex gap-4 items-start bg-white/[0.03] border border-cyan-500/20 backdrop-blur-sm"
            >
              <span className="text-2xl">{perk.emoji}</span>
              <div>
                <p className="text-white font-semibold text-sm">
                  {perk.label}
                </p>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
