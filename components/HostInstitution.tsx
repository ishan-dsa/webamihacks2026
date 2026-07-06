"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HostInstitution() {
  const [showUniversity, setShowUniversity] = useState(false);
  const [showASET, setShowASET] = useState(false);

  return (
    <div className="py-28 px-4 relative bg-[#05070f] overflow-hidden">
    <section
      id="host"
      className="py-24 px-4 max-w-5xl mx-auto relative bg-[#05070f] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.10) 0%, transparent 70%)",
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
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <span className="font-mono-code text-sm tracking-[0.35em] text-cyan-400 uppercase">
          &lt;/&gt; Host Institution
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Proudly Hosted By
        </h2>

        <div className="flex justify-center mt-6 mb-6">
          <div className="bg-white rounded-xl p-2 shadow-[0_0_25px_rgba(56,189,248,0.15)]">
            <Image
              src="/amity-logo.jpg"
              alt="Amity University Rajasthan"
              width={180}
              height={180}
              priority
              className="h-20 sm:h-24 md:h-28 w-auto object-contain hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-slate-400">
          Amity School of Engineering & Technology | Amity University Rajasthan.
        </p>
      </div>

      {/* ================= University ================= */}

      <motion.div
        whileHover={{ y: -5 }}
        className="relative z-10 rounded-3xl p-8 mb-8 bg-white/[0.03] border border-cyan-500/15 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all"
      >
        <h3 className="text-3xl font-bold text-white mb-4">
          About Amity University Rajasthan
        </h3>

        <p className="text-slate-400 leading-8 text-justify">
          Established in 2008, Amity University Rajasthan is a premier
          multidisciplinary university known for academic excellence,
          innovation, research, and global exposure.
        </p>

        <AnimatePresence>
          {showUniversity && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-slate-400 leading-8 mt-5 text-justify">
                Spread across a modern campus in Jaipur, the university
                offers undergraduate, postgraduate and doctoral
                programmes across Engineering, Management, Law,
                Architecture, Design, Sciences and many other disciplines.
                With world-class laboratories, research centres,
                incubation facilities, global collaborations and
                industry-oriented learning, Amity prepares students to
                become future innovators, entrepreneurs and leaders.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setShowUniversity(!showUniversity)}
          className="mt-6 text-cyan-400 font-semibold hover:text-cyan-300 hover:underline transition-colors"
        >
          {showUniversity ? "Show Less ↑" : "See More →"}
        </button>
      </motion.div>

      {/* ================= ASET ================= */}

      <motion.div
        whileHover={{ y: -5 }}
        className="relative z-10 rounded-3xl p-8 bg-white/[0.03] border border-cyan-500/15 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all"
      >
        <h3 className="text-3xl font-bold text-white mb-4">
          About Amity School of Engineering & Technology
        </h3>

        <p className="text-slate-400 leading-8 text-justify">
          The Amity School of Engineering & Technology (ASET) is the
          flagship engineering school of Amity University Rajasthan,
          dedicated to excellence in engineering education and innovation.
        </p>

        <AnimatePresence>
          {showASET && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-slate-400 leading-8 mt-5 text-justify">
                ASET offers cutting-edge programmes in Computer Science,
                Artificial Intelligence, Cyber Security, Electronics,
                Mechanical, Civil and allied engineering disciplines.
                Through innovation labs, research projects, startup
                incubation, industry collaborations and hackathons like
                AMIHACKS, students gain hands-on experience to solve
                real-world challenges and build impactful technology.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setShowASET(!showASET)}
          className="mt-6 text-cyan-400 font-semibold hover:text-cyan-300 hover:underline transition-colors"
        >
          {showASET ? "Show Less ↑" : "See More →"}
        </button>
      </motion.div>
    </section>
    </div>
  );
}
