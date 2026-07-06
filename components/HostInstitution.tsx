"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HostInstitution() {
  const [showUniversity, setShowUniversity] = useState(false);
  const [showASET, setShowASET] = useState(false);

  return (
    <section id="host" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="font-mono-code text-sm tracking-[0.35em] text-blue-700 uppercase">
          Host Institution
        </span>




        

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
  Proudly Hosted By
</h2>

<div className="flex justify-center mt-6 mb-6">
  <Image
    src="/amity-logo.jpg"
    alt="Amity University Rajasthan"
    width={180}
    height={180}
    priority
    className="h-24 sm:h-28 md:h-32 w-auto object-contain hover:scale-105 transition-all duration-300"
  />
</div>

<p className="max-w-3xl mx-auto text-slate-600">
  Amity School of Engineering & Technology | Amity University Rajasthan.
</p>





        
      </div>

      {/* ================= University ================= */}

      <motion.div
        whileHover={{ y: -5 }}
        className="glass-card rounded-3xl p-8 mb-8"
      >
        <h3 className="text-3xl font-bold text-slate-900 mb-4">
  About Amity University Rajasthan
</h3>

        <p className="text-slate-600 leading-8 text-justify">
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
              <p className="text-slate-600 leading-8 mt-5 text-justify">
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
          className="mt-6 text-blue-700 font-semibold hover:underline"
        >
          {showUniversity ? "Show Less ↑" : "See More →"}
        </button>
      </motion.div>

      {/* ================= ASET ================= */}

      <motion.div
        whileHover={{ y: -5 }}
        className="glass-card rounded-3xl p-8"
      >
        <h3 className="text-3xl font-bold text-slate-900 mb-4">
          About Amity School of Engineering & Technology
        </h3>

        <p className="text-slate-600 leading-8 text-justify">
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
              <p className="text-slate-600 leading-8 mt-5 text-justify">
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
          className="mt-6 text-blue-700 font-semibold hover:underline"
        >
          {showASET ? "Show Less ↑" : "See More →"}
        </button>
      </motion.div>
    </section>
  );
}
