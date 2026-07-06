"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faculty = [
  {
    name: "Dr. Ashok K. Chauhan",
    role: "Founder President, Amity Group",
    image: "/committee/ashok.jpg",
    imageClass: "object-[50%_15%]",
  },
  {
    name: "Dr. Asim Chauhan",
    role: "Chancellor, Amity University",
    image: "/committee/asim.jpg",
  },
  {
    name: "Prof. (Dr.) Amit Jain",
    role: "Vice Chancellor, Amity University Rajasthan",
    image: "/committee/amit.jpg",
  },
  {
    name: "Prof. (Dr.) G. K. Aseri",
    role: "Pro Vice Chancellor, Amity University Rajasthan",
    image: "/committee/aseri.jpg",
  },
  {
    name: "Prof. Bhupesh Kumar Singh",
    role: "Host & Deputy Diretor ASET ",
    image: "/committee/bhupesh.jpg",
  },
  {
    name: "Prof. Sunil Pathak",
    role: "Faculty Coordinator & HOD CSE",
    image: "/committee/sunil.jpg",
  },
  {
    name: "Dr. Jyoti Khandelwal",
    role: "Faculty Coordinator",
    image: "/committee/jyoti.jpg",
  },
];

export default function Committee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#05070f]">
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

      {/* Ambient glow blobs — cyan / violet, matching Hero */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.13) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-cyan-400/70 font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          &lt;/&gt; Organizing Committee
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16"
        >
          The Minds{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            Behind
          </span>{" "}
          the Event
        </motion.h2>

        {/* Faculty grid — always visible */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl p-6 text-center bg-white/[0.03] border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-cyan-500/25 mx-auto mb-5 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                <Image
                  src={f.image}
                  alt={f.name}
                  width={144}
                  height={144}
                  className={`w-full h-full object-cover ${
                    f.imageClass ?? "object-center"
                  }`}
                />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {f.name}
              </h3>

              <p className="text-cyan-400/60 text-sm font-mono-code">
                {f.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Institution Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              label: "Organized By",
              value: "Amity School of Engineering & Technology (ASET)",
              icon: "🏛️",
            },
            {
              label: "Under the Banner Of",
              value: "Amity University Rajasthan",
              icon: "🎓",
            },
            {
              label: "Supported By",
              value: "Envent Student Council",
              icon: "⚡",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl px-6 py-5 bg-white/[0.03] border border-cyan-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{item.icon}</span>

                <span className="text-slate-400 text-xs font-mono-code uppercase tracking-widest">
                  {item.label}
                </span>
              </div>

              <p className="text-white font-semibold text-sm leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
