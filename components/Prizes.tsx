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
  { emoji: "🎁", label: "Special Awards", desc: "Domain-specific recognition across all tracks" },
  { emoji: "🎒", label: "Swags & Goodies", desc: "Every participant gets exclusive AMIHACKS swag" },
  { emoji: "📜", label: "Certificates", desc: "Verified certificates for all participants" },
  { emoji: "🤝", label: "Networking", desc: "Connect with industry professionals and alumni" },
];

export default function Prizes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="prizes" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(239,255,0,0.04) 0%, transparent 65%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          Rewards
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Prize Pool Worth{" "}
          <span className="neon-text neon-glow">₹70,000+</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/40 text-lg mb-16 max-w-lg"
        >
          Competitive cash prizes, recognition, and career-building opportunities await.
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
              className={`rounded-2xl p-8 relative overflow-hidden transition-all
              ${
                p.highlight
                  ? "glass-card-neon border-neon/30 shadow-[0_0_40px_rgba(239,255,0,0.1)]"
                  : "glass-card"
              }`}
            >
              {p.highlight && (
                <div className="absolute top-4 right-4 bg-neon text-black text-[10px] font-bold font-mono-code px-2 py-0.5 rounded-full tracking-widest">
                  TOP PRIZE
                </div>
              )}
              <div className="text-4xl mb-4">{p.emoji}</div>
              <div className="text-white/40 text-xs font-mono-code tracking-widest uppercase mb-1">
                {p.label}
              </div>
              <h3
                className={`text-2xl font-bold mb-1 ${
                  p.highlight ? "neon-text" : "text-white"
                }`}
              >
                {p.rank}
              </h3>
              <p className="text-white/50 text-sm mt-3 leading-relaxed">{p.desc}</p>
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
              className="glass-card rounded-xl p-5 flex gap-4 items-start"
            >
              <span className="text-2xl">{perk.emoji}</span>
              <div>
                <p className="text-white font-semibold text-sm">{perk.label}</p>
                <p className="text-white/40 text-xs mt-1 leading-relaxed">
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
