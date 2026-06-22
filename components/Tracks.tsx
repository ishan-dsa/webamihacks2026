"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Shield, Globe, Smartphone, Cloud, Sparkles } from "lucide-react";

const tracks = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Machine learning, computer vision, NLP, generative AI, and intelligent automation.",
    color: "from-purple-500/10 to-transparent",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    desc: "Threat detection, ethical hacking, encryption, network security, and privacy tools.",
    color: "from-red-500/10 to-transparent",
    border: "border-red-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Modern web apps, progressive web apps, APIs, and developer tooling.",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native and cross-platform mobile apps solving real user problems.",
    color: "from-green-500/10 to-transparent",
    border: "border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    desc: "Scalable cloud-native architectures, DevOps, serverless, and infrastructure.",
    color: "from-cyan-500/10 to-transparent",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Sparkles,
    title: "Open Innovation",
    desc: "Any domain, any idea. Build what matters most to you and your community.",
    color: "from-neon/10 to-transparent",
    border: "border-neon/20",
    iconColor: "text-neon",
  },
];

export default function Tracks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tracks" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          Problem Tracks
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Choose Your <span className="neon-text">Domain</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/40 text-lg mb-16 max-w-lg"
        >
          Six diverse tracks for teams to build solutions that matter.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl p-6 border ${t.border} bg-gradient-to-br ${t.color} overflow-hidden`}
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${t.color} pointer-events-none rounded-2xl`}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                    <Icon size={24} className={t.iconColor} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {t.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
