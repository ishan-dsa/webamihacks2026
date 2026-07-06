"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const faculty = [
  {
    name: "Dr. Ashok K. Chauhan",
    role: "Founder President, Amity Group",
    image: "/committee/ashok.jpg",
  },
  {
    name: "Dr. Asim Chauhan",
    role: "Chancellor Amity University",
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
    role: "Host",
    image: "/committee/bhupesh.jpg",
  },
  {
    name: "Prof. Sunil Pathak",
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
  const [showTeam, setShowTeam] = useState(false);

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

        {/* Our Team */}
        {!showTeam ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-12 text-center mb-16 border border-neon/10 max-w-3xl mx-auto"
          >
            <div className="w-24 h-24 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center text-5xl mx-auto mb-6">
              👥
            </div>

          

            <h3 className="text-4xl font-bold text-white mb-4">
  Organising Committee
            </h3>

            <p className="text-white/60 max-w-lg mx-auto leading-relaxed mb-8">
              Behind every successful hackathon is a dedicated team of mentors,
              coordinators, and faculty members working tirelessly to create an
              unforgettable experience.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowTeam(true)}
              className="px-8 py-3 rounded-full bg-neon text-black font-semibold shadow-[0_0_30px_rgba(0,255,200,0.35)] transition-all"
            >
              View Committee →
            </motion.button>
          </motion.div>
        ) : (
          <>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
            >
              {faculty.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="glass-card rounded-2xl p-10 text-center hover:border-neon/30 transition-all"
                >
                  <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-neon/20 mx-auto mb-5">
                    <Image
                      src={f.image}
                      alt={f.name}
                      width={144}
                      height={144}
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
            </motion.div>

            <div className="flex justify-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowTeam(false)}
                className="px-8 py-3 rounded-full border border-neon text-neon hover:bg-neon hover:text-black transition-all"
              >
                Hide Team ↑
              </motion.button>
            </div>
          </>
        )}

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
