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
    <section className="py-18 px-4 relative bg-[#05070f] overflow-hidden">
      {/* Ambient glow — consistent with rest of page */}
      <div
        className="absolute right-0 top-1/4 w-[450px] h-[450px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute left-0 bottom-0 w-[350px] h-[350px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,255,0,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Faint grid, consistent with other sections */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
     
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight max-w-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          Reasons to Show Up &amp; Stand Out
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
                className="rounded-2xl p-6 bg-white/[0.03] border border-cyan-500/15 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 flex items-center justify-center mb-4 transition-colors">
                  <Icon
                    size={20}
                    className="text-cyan-400/70 group-hover:text-cyan-400 transition-colors"
                  />
                </div>
                <h3 className="text-cyan-400 font-bold text-lg mb-2 drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                  {r.title}
                </h3>
                <p className="text-white font-medium text-base leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
