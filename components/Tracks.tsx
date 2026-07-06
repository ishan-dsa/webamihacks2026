// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Sparkles } from "lucide-react";

// const tracks = [
//   {
//     icon: Sparkles,
//     title: "Open Innovation",
//     desc: "AMIHACKS 2026 welcomes innovative ideas from every domain. Participants are free to build solutions using any technology stack or programming language. Whether your project focuses on healthcare, education, finance, sustainability, cybersecurity, artificial intelligence, web, mobile, IoT, or any other field, all innovative ideas are welcome.",
//     color: "from-neon/10 to-transparent",
//     border: "border-neon/20",
//     iconColor: "text-neon",
//   },
// ];

// export default function Tracks() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <section id="tracks" className="py-28 px-6">
//       <div className="max-w-6xl mx-auto" ref={ref}>
//         {/* Section Label */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//           className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
//         >
//           Innovation Theme
//         </motion.p>

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
//         >
//           Open <span className="neon-text">Innovation</span>
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           className="text-white/50 text-lg leading-relaxed mb-12 max-w-3xl"
//         >
//           Build innovative solutions in any domain using any technology stack.
//           AMIHACKS 2026 encourages creativity, originality and real-world
//           problem solving without restricting participants to predefined
//           tracks.
//         </motion.p>

//         {/* Card */}
//         <div className="max-w-3xl mx-auto">
//           {tracks.map((t, i) => {
//             const Icon = t.icon;

//             return (
//               <motion.div
//                 key={t.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{
//                   duration: 0.55,
//                   delay: 0.1 + i * 0.08,
//                 }}
//                 whileHover={{
//                   scale: 1.02,
//                   transition: { duration: 0.2 },
//                 }}
//                 className={`relative rounded-2xl p-8 border ${t.border} bg-gradient-to-br ${t.color} overflow-hidden`}
//                 style={{ background: "rgba(255,255,255,0.02)" }}
//               >
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${t.color} pointer-events-none rounded-2xl`}
//                 />

//                 <div className="relative z-10">
//                   <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6">
//                     <Icon size={28} className={t.iconColor} />
//                   </div>

//                   <h3 className="text-white font-bold text-2xl mb-4">
//                     {t.title}
//                   </h3>

//                   <p className="text-white/60 text-base leading-relaxed">
//                     {t.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const tracks = [
  {
    icon: Sparkles,
    title: "Open Innovation",
    desc: "AMIHACKS 2026 welcomes innovative ideas from every domain. Participants are free to build solutions using any technology stack or programming language. Whether your project focuses on healthcare, education, finance, sustainability, cybersecurity, artificial intelligence, web, mobile, IoT, or any other field, all innovative ideas are welcome.",
    color: "from-neon/10 to-transparent",
    border: "border-neon/20",
    iconColor: "text-neon",
  },
];

export default function Tracks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tracks" className="py-28 px-6 relative bg-[#05070f] overflow-hidden">
      {/* Ambient glow — cyan + neon yellow, consistent with rest of page */}
      <div
        className="absolute left-0 top-1/3 w-[450px] h-[450px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 bottom-0 w-[400px] h-[400px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,255,0,0.07) 0%, transparent 70%)",
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
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Open <span className="neon-text">Innovation</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/50 text-lg leading-relaxed mb-12 max-w-3xl"
        >
          Build innovative solutions in any domain using any technology stack.
          AMIHACKS 2026 encourages creativity, originality and real-world
          problem solving without restricting participants to predefined
          tracks.
        </motion.p>

        {/* Card */}
        <div className="max-w-3xl mx-auto">
          {tracks.map((t, i) => {
            const Icon = t.icon;

            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + i * 0.08,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className={`relative rounded-2xl p-8 border ${t.border} bg-gradient-to-br ${t.color} overflow-hidden backdrop-blur-sm hover:shadow-[0_0_30px_rgba(239,255,0,0.12)] transition-shadow`}
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${t.color} pointer-events-none rounded-2xl`}
                />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-neon/20 flex items-center justify-center mb-6">
                    <Icon size={28} className={t.iconColor} />
                  </div>

                  <h3 className="text-white font-bold text-2xl mb-4">
                    {t.title}
                  </h3>

                  <p className="text-white/60 text-base leading-relaxed">
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
