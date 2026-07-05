"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faculty = [
  {
    name: "Dr. Ashok K. Chauhan",
    role: "Founder President, Amity Group",
    image: "/committee/ashok.jpg",
  },
  {
    name: "Dr. Asim Chauhan",
    role: "Chancellor",
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
    name: "Dr. Bhupesh Kumar Singh",
    role: "Host",
    image: "/committee/bhupesh.jpg",
  },
  {
    name: "Dr. Sunil Pathak",
    role: "Faculty Coordinator",
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
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          Organizing Committee
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-16"
        >
          The Minds <span className="neon-text">Behind</span> the Event
        </motion.h2>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8 text-center hover:border-white/12 transition-all"
            >
              {/* Photo */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neon/20 mx-auto mb-5">
                <Image
                  src={f.image}
                  alt={f.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {f.name}
              </h3>

              <p className="text-white/40 text-sm font-mono-code">
                {f.role}
              </p>
            </motion.div>
          ))}
        </div>

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
              className="glass-card-neon rounded-xl px-6 py-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{item.icon}</span>

                <span className="text-white/35 text-xs font-mono-code uppercase tracking-widest">
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
