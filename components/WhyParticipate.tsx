"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Briefcase,
  Network,
  GraduationCap,
  Award,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Build Real Projects",
    desc: "Move beyond tutorials — ship products under real constraints and pressure.",
  },
  {
    icon: Briefcase,
    title: "Industry Exposure",
    desc: "Engage with industry professionals and understand what the real world demands.",
  },
  {
    icon: Network,
    title: "Networking",
    desc: "Connect with students, mentors, and innovators who share your ambition.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    desc: "Get guidance from experienced mentors throughout the hackathon journey.",
  },
  {
    icon: Award,
    title: "Certificates",
    desc: "Earn verified certificates of participation and achievement to add to your portfolio.",
  },
  {
    icon: Star,
    title: "Recognition",
    desc: "Stand out from the crowd with awards, leaderboard fame, and campus recognition.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "A hackathon win or standout project opens doors you didn't know existed.",
  },
  {
    icon: Zap,
    title: "Innovation Ecosystem",
    desc: "Be part of a vibrant ecosystem that fosters creativity and out-of-the-box thinking.",
  },
];

export default function WhyParticipate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 relative bg-white/[0.01]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          Why Participate
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight max-w-xl"
        >
          Reasons to Show Up &amp;{" "}
          <span className="neon-text">Stand Out</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6 hover:border-white/12 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-neon/10 flex items-center justify-center mb-4 transition-colors">
                  <Icon
                    size={20}
                    className="text-white/50 group-hover:text-neon transition-colors"
                  />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {r.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
