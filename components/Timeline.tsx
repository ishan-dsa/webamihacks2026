"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    phase: "01",
    title: "Registration Opens",
    desc: "Teams register via the official form. One team captain + up to 3 members.",
    tag: "Now Open",
    active: true,
  },
  {
    phase: "02",
    title: "Team Formation",
    desc: "Finalize your team composition. Solo participants welcome — find teammates at the event.",
    tag: "Pre-Event",
    active: false,
  },
  {
    phase: "03",
    title: "Hackathon Kickoff",
    desc: "Opening ceremony, problem statements revealed, and the 24-hour clock begins.",
    tag: "24 Sep · 09:00 AM",
    active: false,
  },
  {
    phase: "04",
    title: "Mentoring Sessions",
    desc: "Industry mentors rotate through teams — ask questions, get direction, unblock.",
    tag: "Throughout",
    active: false,
  },
  {
    phase: "05",
    title: "Project Development",
    desc: "Build, iterate, and ship. Code reviews, workshops, and midnight surprises await.",
    tag: "24–25 Sep",
    active: false,
  },
  {
    phase: "06",
    title: "Final Evaluation",
    desc: "Present your project to a jury panel. Judged on innovation, impact, and execution.",
    tag: "25 Sep · AM",
    active: false,
  },
  {
    phase: "07",
    title: "Winner Announcement",
    desc: "Awards, recognition, and the celebration of what 24 hours of focused building can create.",
    tag: "25 Sep · PM",
    active: false,
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="timeline"
      className="py-28 px-6 relative bg-[#05070f] overflow-hidden"
    >
      {/* Ambient glow — consistent with rest of page */}
      <div
        className="absolute right-0 top-0 w-[450px] h-[450px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute left-0 bottom-1/4 w-[350px] h-[350px] pointer-events-none blur-3xl"
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

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          &lt;/&gt; Event Timeline
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16"
        >
          The Journey Ahead
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon/60 via-neon/20 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-0">
            {events.map((e, i) => (
              <motion.div
                key={e.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative flex gap-8 group"
              >
                {/* Node */}
                <div className="relative hidden sm:flex flex-col items-center">
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-mono-code text-xs font-bold transition-all mt-4
                    ${
                      e.active
                        ? "bg-neon text-black shadow-[0_0_20px_rgba(239,255,0,0.5)]"
                        : "bg-black border border-white/15 text-white/40 group-hover:border-neon/40 group-hover:text-neon/70"
                    }`}
                  >
                    {e.phase}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pb-10 border-l-2 sm:border-l-0 pl-6 sm:pl-0 transition-all
                  ${e.active ? "border-neon/60" : "border-white/8"}`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2 mt-3 sm:mt-4">
                    <h3 className="text-white font-semibold text-lg">{e.title}</h3>
                    <span
                      className={`text-xs font-mono-code px-3 py-0.5 rounded-full
                      ${
                        e.active
                          ? "bg-neon/15 text-neon border border-neon/30"
                          : "bg-white/5 text-white/35 border border-white/8"
                      }`}
                    >
                      {e.tag}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed max-w-lg">
                    {e.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
